---
title: Exiting Cold Storage
description: How to migrate out of the Nuxeo Cold Storage addon and restore all documents to regular storage.
review:
  comment: ''
  date: ''
  status: ''
labels:
  - storage
  - glacier
  - coldstorage
  - migration
toc: true
tree_item_index: 320
---

This page explains how to exit the Nuxeo Cold Storage addon by restoring all documents from cold storage back to Nuxeo's default S3 storage class. This is a planned migration operation that allows you to safely uninstall the addon after completion.

{{#> callout type='warning' heading='Prerequisites: S3 Objects Must Be Restored in AWS'}}
**Important:** Before running the Nuxeo migration, all S3 objects in Glacier Flexible Retrieval storage class **must be restored to a downloadable state directly in AWS**. This is a two-phase process:

1. **AWS-side restoration**: Use AWS S3 Batch Operations to restore all Glacier Flexible Retrieval objects.
2. **Nuxeo-side migration**: Once objects are restored and downloadable, run the Nuxeo migration.

The Nuxeo migration **will not complete** if S3 objects are not in a restored state. Object restoration must be handled directly in AWS and cannot be performed by Nuxeo. See below for detailed procedure.
{{/callout}}

## Overview

The cold storage migration process restores all documents from AWS S3 Glacier Flexible Retrieval storage class back to the default S3 storage class. After the migration completes successfully, the Cold Storage addon can be safely uninstalled.

The default S3 storage class used by Nuxeo is configured via the `nuxeo.s3storage.storageClass` property as documented in [Amazon S3 Online Storage]({{page page='amazon-s3-online-storage'}}#storage-class). If not explicitly configured, it defaults to `STANDARD`, though `INTELLIGENT_TIERING` is commonly used for optimized cost and access patterns.

This migration is controlled by the `nuxeo.coldstorage.migration.restore.enabled` configuration property, available since **Nuxeo LTS 2025.2**.

## Timeline and Planning

When planning your migration, consider the following timeframes:

| Phase                      | Estimated Duration            |
| -------------------------- | ----------------------------- |
| S3 Bulk Restore Operation  | ~12 hours (Bulk tier)         |
| Nuxeo Migration Runtime    | Varies with document volume   |
| Recommended Restore Window | 30 days (maximum flexibility) |

{{#> callout type='tip'}}
Setting a 30-day restore window provides maximum comfort for retries and troubleshooting without rushing the process.
{{/callout}}

## Migration Steps

### Step 1: Block New Moves to Cold Storage

Enable the migration property to prevent new documents from being moved to cold storage:

```
nuxeo.coldstorage.migration.restore.enabled=true
```

Add this property to `nuxeo.conf` on **all Nuxeo nodes** (both front-end and worker nodes), then restart the entire cluster.

{{#> callout type='warning' heading='Impact on Operations'}}
Once this property is enabled:

- The **move to cold storage** action is no longer available (at both UI and API level).
- Any pending or new bulk actions to move content to cold storage will fail with errors (documents will be skipped). This is expected and safe.
- **Restore operations** continue to work normally.
  {{/callout}}

### Step 2: Restore S3 Objects from Glacier Flexible Retrieval

Use AWS S3 Batch Operations to restore all Glacier Flexible Retrieval objects back to a standard storage class.

#### Creating the Batch Operation

1. Navigate to **AWS Console > S3 > Batch Operations**.
2. Click **Create job**.
3. **Choose Region**: Select the region where your S3 bucket is located.
4. **Manifest**: Select **Generate an object list by specifying filters**.
   - **Source bucket**: Enter your Nuxeo S3 bucket name (matches `nuxeo.s3storage.bucket` in your `nuxeo.conf`).
   - **Prefix**: Enter the bucket prefix (matches `nuxeo.s3storage.bucket_prefix` in your `nuxeo.conf`).
   - **Object filters**:
     - Storage class: Select **Glacier Flexible Retrieval**.
     - This ensures only objects currently in cold storage are targeted.
5. **Operation**: Choose **Restore**.
6. **Configure restoration settings**:
   - **Retrieval tier**: Select **Bulk** (most cost-effective for large-scale migrations).
   - **Days to keep restored**: Enter **30** (or longer for maximum flexibility).
7. **Additional options**: Configure as needed (IAM role, completion report, and so on).
8. **Submit the job** and monitor its progress in the Batch Operations dashboard.

{{#> callout type='tip'}}
Using the filter-based approach eliminates the need to create and maintain an S3 inventory, making the process faster and simpler. The job will automatically target only objects in Glacier Flexible Retrieval storage class.
{{/callout}}

{{#> callout type='info' heading='S3 Batch Operations Documentation'}}
For detailed instructions on S3 Batch Operations, refer to the [AWS S3 Batch Operations documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html).
{{/callout}}

### Step 3: Wait for S3 Restore Completion

Monitor the Batch Operations job in the AWS Console until all objects reach the "Restored" state. This typically takes 5-12 hours with the Bulk retrieval tier.

{{#> callout type='tip'}}
You can proceed to the next step once the Batch Operations job shows 100% completion. All restored objects must be in a downloadable state.
{{/callout}}

### Step 4: Run the Nuxeo Migration

Execute the migration using the Nuxeo Management REST API to restore documents in the platform.

#### Probe Current Migration State

```bash
curl -u Administrator:Administrator \
  -X POST 'http://localhost:8080/nuxeo/api/v1/management/migration/restore-from-cold-storage-migration/probe'
```

```json
{
   "description" : "Restore documents from cold storage when move to cold storage is blocked",
   "descriptionLabel" : "migration.coldstorage.restore",
   "entity-type" : "migration",
   "id" : "restore-from-cold-storage-migration",
   "status" : {
      "errorCode" : 0,
      "errorMessage" : null,
      "pingTime" : 0,
      "progressMessage" : null,
      "progressNum" : 0,
      "progressTotal" : 0,
      "running" : false,
      "startTime" : 0,
      "state" : "enabled",
      "step" : null
   },
   "steps" : [
      {
         "description" : "Restore downloadable documents from cold storage",
         "descriptionLabel" : "migration.coldstorage.restore.step",
         "fromState" : "enabled",
         "id" : "enabled-to-done",
         "toState" : "done"
      }
   ]
}
```
meaning the migration is ready to be run. If the `state` is `disabled`, it probably means that `nuxeo.coldstorage.migration.restore.enabled` is `false`, back to Step 1.

#### Run the Migration Step

```bash
curl -u Administrator:Administrator \
  -X POST 'http://localhost:8080/nuxeo/api/v1/management/migration/restore-from-cold-storage-migration/run'
```

The migration will run a bulk action, configured with the following parameters:
 - `nuxeo.bulk.action.migration.defaultConcurrency` defaults to 2.
 - `nuxeo.bulk.action.migration.defaultPartitions` defaults to 4.
Changing partitions take effect only when creating the bulk-migration stream. Partitions can be resized directly on Kafka.

#### Poll Migration Progress

The migration runs asynchronously. Poll the status endpoint until the `step` field is `null` (indicating completion):

```bash
curl -u Administrator:Administrator \
  -X GET 'http://localhost:8080/nuxeo/api/v1/management/migration/restore-from-cold-storage-migration'
```

```json
{
   "description" : "Restore documents from cold storage when move to cold storage is blocked",
   "descriptionLabel" : "migration.coldstorage.restore",
   "entity-type" : "migration",
   "id" : "restore-from-cold-storage-migration",
   "status" : {
      "errorCode" : 0,
      "errorMessage" : null,
      "pingTime" : 1779177264612,
      "progressMessage" : "Migrating content",
      "progressNum" : 456,
      "progressTotal" : 125465,
      "running" : true,
      "startTime" : 1779177218652,
      "state" : null,
      "step" : "enabled-to-done"
   },
   "steps" : []
}
```

#### Probe to Refresh State

Once the `step` is `null`, the `state` will be `done`. However, we **MUST** probe the migration to refresh its state:

```bash
curl -u Administrator:Administrator \
  -X POST 'http://localhost:8080/nuxeo/api/v1/management/migration/restore-from-cold-storage-migration/probe'
```

```json
{
   "description" : "Restore documents from cold storage when move to cold storage is blocked",
   "descriptionLabel" : "migration.coldstorage.restore",
   "entity-type" : "migration",
   "id" : "restore-from-cold-storage-migration",
   "status" : {
      ...
      "state" : "done",
      "step" : null
   },
   "steps" : []
}
```

**Expected outcomes:**

- **State `done`**: All documents have been successfully restored. You can proceed with uninstalling the `nuxeo-coldstorage` addon.
- **State `enabled`**: Some documents remain in cold storage (S3 blobs are not yet downloadable).

{{#> callout type='warning' heading='If State Remains enabled'}}
If the migration state remains `enabled`, some S3 objects may not yet be fully restored or downloadable.

**Resolution:**

1. Check for `WARN` and `ERROR` logs for `RestoreFromColdStorageMigrator` class. 
2. Make sure you have waited for the S3 restore windows.
3. Retry the migration step (Step 4: Run the Migration Step). The migration is idempotent and can be run multiple times.
4. Probe again to refresh the state.
{{/callout}}

**Additional verification:**

You can also verify the migration is complete by checking that no documents with the `ColdStorage` facet remain in the repository:

```bash
curl -u Administrator:Administrator \
  -X GET 'http://localhost:8080/nuxeo/api/v1/search/lang/NXQL/execute?query=SELECT%20*%20FROM%20Document%20WHERE%20ecm%3AmixinType%20%3D%20%22ColdStorage%22'
```

If the migration is complete, this query should return no results (`resultsCount: 0`). This is a reliable way to ensure all documents have been restored.

### Step 5: Cleanup and Uninstall

Once the migration status shows `done`:

- All documents are successfully restored in Nuxeo.
- All content is stored at the default S3 storage class.
- The `ColdStorage` facet has been removed from all documents.

You can now safely **uninstall the Nuxeo Cold Storage addon** from your instance.

## Troubleshooting

### S3 Batch Operation Failures

**Symptoms:** Some objects fail to restore in the S3 Batch Operations job.

**Cause:** Various S3-specific issues (permissions, object lifecycle policies, and so on).

**Solution:**

1. Review the S3 Batch Operations failure report in the AWS Console.
2. Address individual object failures (re-run restore for specific objects if needed).
3. Ensure all objects are restored before proceeding with the Nuxeo migration.

### Migration Stuck in enabled State

**Symptoms:** After running the migration and probing, the state remains `enabled`.

**Cause:** Some S3 objects are not yet downloadable (restore not complete or restore window expired).

**Solution:**

1. Verify all S3 objects are restored in the AWS Console.
2. Ensure the restore window has not expired (extend if needed).
3. Re-run the migration step from Step 4.
4. Probe and verify the state again.

### Move to Cold Storage Operations Still Working

**Symptoms:** Documents can still be moved to cold storage after enabling the migration property.

**Cause:** The property was not set on all nodes, or the cluster was not fully restarted.

**Solution:**

1. Verify `nuxeo.coldstorage.migration.restore.enabled=true` is set in `nuxeo.conf` on **all nodes**.
2. Perform a full cluster restart.
3. Verify the property is active by checking logs or testing a move operation (should fail).

## Technical Details

### What Happens During Migration

When you run the migration step (`enabled-to-done`):

1. The migration queries all documents with the `ColdStorage` facet.
2. For each document:
   - Verifies the main file blob is downloadable from S3.
   - Changes the S3 object storage class to the default configured storage class.
   - Moves the blob from `coldstorage:coldContent` back to `file:content`.
   - Removes the `ColdStorage` facet from the document.
3. Documents are processed in batches for optimal performance.
4. If any blob is not downloadable, that document is skipped (migration state remains `enabled`).

### Migration State Transitions

| State      | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `disabled` | Migration property is `false` (default)                            |
| `enabled`  | Migration property is `true`, but documents remain in cold storage |
| `done`     | All documents successfully restored; addon can be uninstalled      |

The migration can only transition from `enabled` to `done` when all documents with the `ColdStorage` facet have been successfully restored.

## Cost Considerations

After migration, all content will be stored at the default S3 storage class configured for your Nuxeo instance (see [Amazon S3 Online Storage]({{page page='amazon-s3-online-storage'}}#storage-class)). This storage class typically has higher storage costs than Glacier Flexible Retrieval but provides immediate access to your content.

## See Also

- [Installation and Configuration]({{page page='nuxeo-coldstorage-installation'}})
- [Cold Storage FAQ]({{page page='nuxeo-coldstorage-faq'}})
- [AWS S3 Batch Operations Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html)
- [AWS S3 Glacier Restore Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects.html)
