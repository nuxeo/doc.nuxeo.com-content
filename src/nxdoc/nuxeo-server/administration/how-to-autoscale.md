---
title: 'HOWTO: Autoscale Worker Nodes'
review:
    comment: ''
    date: '2025-11-12'
    status: ok
details:
    howto:
        excerpt: 'How to configure AWS EC2 Auto Scaling Group.'
        level: Intermediate
        tool: ''
        topics: 'auto scale, aws ec2 auto scaling group, worker nodes'
labels:
    - howto
tree_item_index: 2260
toc: true
---

{{! excerpt}}

Learn how to configure autoscaling for Nuxeo worker nodes using AWS EC2 Auto Scaling Groups based on Nuxeo cluster metrics.

{{! /excerpt}}

## Overview

When running Nuxeo in a clustered environment, you can optimize resource utilization by dynamically scaling worker nodes based on actual workload. This guide explains how to configure autoscaling using Nuxeo's built-in cluster metrics with AWS EC2 Auto Scaling Groups.

## How to Autoscale Worker Nodes

When Nuxeo is deployed in cluster mode, you can have nodes dedicated to handling web requests and others dedicated to processing asynchronous tasks. The former are called front nodes, the latter are worker nodes.

A typical deployment uses a fixed number of front nodes behind a load balancer, while the number of worker nodes is dynamically adjusted based on the workload.

Nuxeo produces cluster metrics that can be used by an autoscaler to provision the optimal number of worker nodes depending on the load.

### Defining Front and Worker Nodes

Both front and worker nodes are deployed using the same Docker image; only a few `nuxeo.conf` options differentiate them.

By default, all nodes act as worker nodes and participate in asynchronous processing. To create front nodes dedicated to processing web requests, disable Stream and WorkManager processing:
```shell
nuxeo.cluster.enabled=true
# A front node
nuxeo.stream.processing.enabled=false
nuxeo.work.processing.enabled=false
```

For worker nodes, you can explicitly enable processing (although this is the default behavior):
```shell
nuxeo.cluster.enabled=true
# A worker node
nuxeo.stream.processing.enabled=true
nuxeo.work.processing.enabled=true
```

### The Nuxeo Scale Metrics

As described in the [Scale Stream Management endpoint]({{page space='rest-api' version='1' page='stream-endpoint'}}#scale), Nuxeo introspects cluster activity and produces a metric representing the optimal number of worker nodes.

To enable scale metrics, add the following configuration to all nodes in the cluster:
```shell
metrics.enabled=true
metrics.streams.enabled=true
```

The scale metric and the number of worker nodes are exposed as Nuxeo metrics in real-time:
- `nuxeo.streams.scale.metric`: The recommended number of worker nodes
- `nuxeo.cluster.worker.count`: The current number of active worker nodes

### Using AWS EC2 Auto Scaling Group

To use Nuxeo scale metrics with AWS EC2 Auto Scaling Groups, you need to export them to Amazon CloudWatch.

#### Prerequisites

- The `nuxeo-amazon-s3` package must be installed
- IAM permissions to publish CloudWatch metrics
- An EC2 Auto Scaling Group configured for your worker nodes

#### Configuration

Add the following option to `nuxeo.conf` on all nodes:

```shell
metrics.cloudwatch.scale.enabled=true
```

This will publish two CloudWatch metrics that can be used with different [dynamic auto-scaling types](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html):

#### Option 1: StepScale Metric (Recommended)

**Metric:** `Nuxeo/Stream` `StepScale`

This metric represents the number of worker nodes to add or remove from the current cluster. It is designed for use with AWS Step Scaling policies.

**Setup:**

1. Create two CloudWatch alarms on this metric:
   - **Scale Out Alarm:** Triggers when `StepScale >= 1`
   - **Scale In Alarm:** Triggers when `StepScale <= -1`

2. In your EC2 Auto Scaling Group, create two dynamic scaling policies:

   **Scale Out Policy** (based on the "scale out" alarm):
   - Add 1 capacity unit when `1 <= StepScale < 1.2`
   - Add 2 capacity units when `1.2 <= StepScale < 2.2`
   - Add 3 capacity units when `2.2 <= StepScale < 3.2`
   - Add 4 capacity units when `3.2 <= StepScale < 4.2`
   - Continue pattern up to your maximum capacity

   **Scale In Policy** (based on the "scale in" alarm):
   - Remove 1 capacity unit when `-2 < StepScale <= -1`
   - Remove 2 capacity units when `-3 < StepScale <= -2`
   - Remove 3 capacity units when `-4 < StepScale <= -3`
   - Remove 4 capacity units when `-5 < StepScale <= -4`
   - Continue pattern down to your minimum capacity

**Why This Is Recommended:**

This approach scales directly to the optimal number of nodes in a single step, avoiding unnecessary cluster rebalancing that would occur when adding nodes one at a time. 

#### Option 2: TargetScale Metric

**Metric:** `Nuxeo/Stream` `TargetScale`

This metric simulates CPU-like utilization with a target value of 50%. It is designed for use with AWS Target Tracking scaling policies.

**Setup:**

Create a Target Tracking scaling policy in your EC2 Auto Scaling Group with:
- Target metric: `Nuxeo/Stream` `TargetScale`
- Target value: `50`

This simpler approach automatically adjusts the number of worker nodes to maintain the target utilization level.

#### Publishing Only One Metric

By default, both metrics are published to CloudWatch. If you want to use only one metric, you can disable the other:

```shell
# Disable TargetScale metric (use only StepScale)
metrics.cloudwatch.scale.target.enabled=false

# OR

# Disable StepScale metric (use only TargetScale)
metrics.cloudwatch.scale.step.enabled=false
```

## Best Practices

- **Use StepScale for production environments:** It provides more predictable scaling behavior by adding the exact number of nodes needed.
- **Set reasonable max capacity:** Ensure maximum capacity has reasonable cost limits and is in correlation with the number of partitions/concurrency of bulk actions.
- **Test your scaling policies:**
  You can use the `bulk/idle` action to simulate a load without consuming any resources or modifying any documents. First, add `nuxeo.bulk.action.idle.enabled=true` to your `nuxeo.conf`. Then simulate a load by invoking the bulk command:

```bash
curl -XPUT -u admin:*** 'https://NUXEO_URL/nuxeo/api/v1/management/bulk/idle?totalDocs=3000000&millisDurationPerDoc=10'
```

This will simulate processing 3 million documents at 10ms per document, which equals 8h20 of total processing time. The `bulk/idle` stream has 12 partitions, representing the maximum concurrency level. With optimal parallelization, processing could complete in approximately 42 minutes (8h20÷12).

Since there are 4 threads per worker node, achieving the optimal 12 threads requires 3 worker nodes. If there is no other activity on the cluster, you should observe the autoscaler increase the number of worker nodes to 3, then after approximately 45 minutes, scale in back to 1 worker node.
