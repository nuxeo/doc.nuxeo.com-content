---
title: Streams feature
description: The Stream feature delivers a powerful interface for observing, analyzing, and controlling real-time data flows within your application. Through a set of dedicated tabs, Streams enables users to uncover detailed insights into stream processing, performance metrics, and consumer activity.
review:
    comment: ''
    date: '2025-11-18'
    status: ok
is_overview: true
tree_item_index: 1050
confluence:
  page_id: '10000'
---

## Table of Contents

1. Getting Started

2. Stream Records 

3. Consumer Thread Pool

4. Consumer Position 

5. Scaling Analysis 

6. Stream Processor Info 

7. FAQs & Troubleshooting



### Getting Started

To access the Streams feature:

1. Log in to your account.

2. Navigate to the Streams section from the main menu.

3. Select a stream to view its details and analytics.


Stream Management provides a unified interface with tabs for Stream Records, Stream Processor Info, Scaling Analysis, Consumer Position, and Consumer Thread Pool, enabling Users to View and Manage Stream Records via UI.



### Stream Records 

The Stream Records provides a real-time view of the records flowing through your selected stream.

![](/assets/nxdoc/nuxeo-admin-console/admin-console-stream-records.png)


Key Features:

- Live Data Feed: View incoming records as they are processed.

- Filtering: Filter records by key, value, timestamp, or custom attributes.

- Search: Quickly locate specific records using the search bar.

- Record Details: Click on any record to view its metadata and payload.

Use Cases:

- Monitoring data quality and throughput.

- Auditing specific events or transactions.


### Consumer Thread Pool 

The Consumer Thread Pool provides insights into the thread pools used by stream consumers.


![](/assets/nxdoc/nuxeo-admin-console/admin-console-consumer-thread-pool.jpeg)



Key Features:

- Configuration: Start and Stop the Thread pool nodes of the Consumer.

Use Cases:

- Manage the Consumer Thread pools of the Stream.


### Consumer Position 


The Consumer Position under Stream Management provides two main functionalities:
1️ Change Consumer Position
2️ Get Consumer Position

These are used to view and manage the position of a consumer group in a selected stream.


#### Change Consumer Position


![](/assets/nxdoc/nuxeo-admin-console/admin-console-change-consumer-position.png)


Key Features

- Manually set the position of a consumer group within a selected stream.

- Enables precise control over where a consumer resumes processing.

- Requires the consumer to be stopped before changing position (ensures safe operation).

- Supports targeted event reprocessing or skipping over specific records.

Use Case

- Use Change Consumer Position to reprocess past events after fixing an error, or skip over problematic records that are blocking processing, which helps maintain smooth and reliable stream operations.


#### Get Consumer Position


![](/assets/nxdoc/nuxeo-admin-console/admin-console-get-consumer-position.png)

Key Features

- View the current position of a consumer group within a selected stream.

- Provides real-time visibility into which records have been processed.

- Helps track consumer progress and identify processing lags or bottlenecks.

- Enables monitoring of multiple consumer groups across different streams.

Use Case

- Use Get Consumer Position to monitor the progress of consumer groups, ensure timely processing of stream data, and quickly identify any delays or issues in event consumption.


### Scaling Analysis 

The Scaling Analysis helps you understand and optimize the scalability of your stream processing.

![](/assets/nxdoc/nuxeo-admin-console/admin-console-scaling-analysis.png)

Key Features:

- Throughput Metrics: Visualize data ingestion and processing rates over time.

- Resource Utilization: Monitor CPU, memory, and network usage.

- Scaling Recommendations: The system automatically fetches and displays scaling recommendations in JSON format.

- Historical Trends: Analyze past scaling events and their impact.

Use Cases:

- Planning for peak loads.

- Identifying underutilized resources.

- Making informed decisions about scaling infrastructure.



### Stream Processor Info 

The Stream Processor Info offers detailed information about the stream processors handling your data.

![](/assets/nxdoc/nuxeo-admin-console/admin-console-stream-processor-info.png)


Key Features:

- Processor Status: View the health and status of each processor (active, idle, error).

- Configuration Details: Inspect processor configurations, such as parallelism, checkpointing, and error handling.

- Metrics: Monitor processing rates, latency, and error counts.

Use Cases:

- Ensuring processors are running optimally.

- Diagnosing processing bottlenecks.

- Reviewing processor configurations for compliance.



### Frequently Asked Questions (FAQ)

Q1: What happens if I click "Clear" on Stream Records?
A: It only clears the records from your screen. No data is deleted from the server.


Q2: Why can't I start or stop the Consumer Thread Pool?
A: Both the stream and consumer position must be selected. Also, you cannot start or stop while another operation is in progress.


Q3: Can I change the consumer position while it is running?
A: No. You must stop the consumer first using the Consumer Thread Pool tab.


Q4: What should I do if I see an error message?
A: Check that all required fields are filled. If the problem persists, review the error message for details or try again using the Retry button.


Q5: Does Scaling Analysis or Nuxeo Stream Processor Info make any changes to the system?
A: No. Both features are read-only and only display information.


Q6: Streams is not visible in the Admin Console. What should I check first?
A: Start by verifying whether the following configuration is set in nuxeo.conf file:
metrics.streams.enabled=true
If this property is missing or set to false, the Streams section will not appear in the Admin Console.


Q7: What should I do if metrics.streams.enabled is not defined in nuxeo.conf?
A: If the property is not present, add the following line to your nuxeo.conf:
metrics.streams.enabled=true
After updating the file, restart the server and check the Admin Console again.


Q8: I added the configuration, but Streams is still not visible. What should I do next?
A: If Streams still do not show up after enabling the property:
- Double-check for typos in the configuration.
- Ensure the server was restarted correctly.
- Verify that the configuration is being applied by reviewing the startup logs.
- Inspect for errors or failures in the logs that might indicate issues.