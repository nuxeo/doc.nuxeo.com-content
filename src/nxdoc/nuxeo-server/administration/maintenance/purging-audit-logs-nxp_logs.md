---
title: Purging Audit Logs
review:
  comment: ''
  date: '2026-09-21'
  status: ok
labels:
  - lts2016-ok
  - logs
  - audit
  - ataillefer
  - lts2017-ok
  - lts2021-ok
  - purge
  - audit-router
confluence:
  ajs-parent-page-id: '950318'
  ajs-parent-page-title: Monitoring and Maintenance
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: viewpage.action?pageId=12913040
  canonical_source: viewpage.action?pageId=12913040
  page_id: '12913040'
  shortlink: kAnF
  shortlink_source: 'https://doc.nuxeo.com/x/kAnF'
  source_link: /pages/viewpage.action?pageId=12913040
tree_item_index: 400
toc: true
version_override:
  LTS 2015: 710/admindoc/purging-audit-logs-nxp_logs
  '6.0': 60/admindoc/purging-audit-logs-nxp_logs
  '5.8': 58/admindoc/purging-audit-logs-nxp_logs
history:
  - author: Solen Guitter
    date: '2016-09-01 10:00'
    message: ''
    version: '15'
  - author: Manon Lumeau
    date: '2016-08-02 16:27'
    message: 'remove <span> '
    version: '14'
  - author: Vincent Dutat
    date: '2015-05-14 18:52'
    message: ''
    version: '13'
  - author: Vincent Dutat
    date: '2015-05-14 18:44'
    message: ''
    version: '12'
  - author: Vincent Dutat
    date: '2015-05-14 18:43'
    message: ''
    version: '11'
  - author: Benoit Delbosc
    date: '2015-02-05 08:54'
    message: ''
    version: '10'
  - author: Solen Guitter
    date: '2014-01-24 10:29'
    message: ''
    version: '9'
  - author: Benoit Delbosc
    date: '2014-01-23 14:08'
    message: ''
    version: '8'
  - author: Benoit Delbosc
    date: '2014-01-23 14:07'
    message: Add oracle procedure
    version: '7'
  - author: Florent Guillaume
    date: '2013-11-25 16:14'
    message: ''
    version: '6'
  - author: Solen Guitter
    date: '2013-10-15 11:56'
    message: ''
    version: '5'
  - author: Florent Guillaume
    date: '2013-06-17 12:22'
    message: ''
    version: '4'
  - author: Florent Guillaume
    date: '2013-06-17 12:22'
    message: ''
    version: '3'
  - author: Solen Guitter
    date: '2013-05-22 15:11'
    message: Added related pages
    version: '2'
  - author: Solen Guitter
    date: '2013-01-14 11:41'
    message: ''
    version: '1'
---

{{#> callout type='warning' heading='Recommended approach since 2025.26'}}
Since Nuxeo 2025.26, purging Audit is a first-class, supported operation built
on top of the [Audit Router]({{page page='audit-router'}}) and the
[Blue/Green Audit migration]({{page page='copy-audit-backend'}}) infrastructure.
The manual backend-level scripts described at the bottom of this page are kept
for reference on older versions only.
{{/callout}}

Depending on usage (lots of updates, lots of workflows, lots of logins, ...), the audit storage can grow very quickly. Since Nuxeo 2025.26, a purge mechanism is available through the Management REST API to route a subset of the log entries to a dedicated Audit Backend (for archival) or to simply drop them, without any direct backend-level operation.

## How It Works

The purge mechanism reuses the [Audit Router]({{page page='audit-router'}})
`routes` extension point and the [Blue/Green Audit migration]({{page page='copy-audit-backend'}})
tooling:

- A route can now be declared **non-live** (`live="false"`): it is not
  evaluated for new incoming events, but it remains addressable by name so it
  can be triggered explicitly for a purge or migration operation.
- The `POST /management/audit/purge` Management endpoint scrolls `LogEntry`s
  matching an NXQL query and dispatches them through one or more named routes
  — live or not — writing matching entries to each route's target backend.
- The platform ships an `NXQLPredicate` so a route can filter which entries it
  accepts using plain NXQL, without writing any Java code.

Nothing is ever deleted in place: entries are routed to whichever backend you
configure (an archive backend, a new default backend, …), and the old backend
is only decommissioned once you no longer need it — see the
[Audit Endpoint]({{page space='rest-api' version='1' page='audit-endpoint'}})
for the full REST API reference.

## Canonical Purge Scenario

The following scenario keeps only recent `loginSuccess` events in the audit
storage going forward, while old ones are archived: a `future-default`
backend receives everything except `loginSuccess` entries older than 30 days,
and an `archive` backend receives exactly the complement — those old
`loginSuccess` entries — without duplicating any filtering logic.

### 1. Contribute Secondary Audit Backends

See [Audit Router — Worked Example]({{page page='audit-router'}}#worked-example-routing-a-business-event-to-a-secondary-backend)
for the full backend registration (factory, client, index). Here, two simple
backends:

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="backendFactory">
  <backend name="future-default" factory="org.nuxeo.audit.opensearch1.OpenSearchAuditBackendFactory" />
  <backend name="archive" factory="org.nuxeo.audit.opensearch1.OpenSearchAuditBackendFactory" />
</extension>
```

### 2. Contribute the Routes

- `future-default-route` is **live**: from now on it dual-writes every new
  event to `future-default`, except `loginSuccess` entries already older than
  30 days at ingestion time (there shouldn't be any, but the same predicate
  will be reused for the purge below).
- `archive-route` is **non-live**: it never fires on new events, and is
  defined with `NotRoutesPredicate` as the exact complement of
  `future-default-route`, so it only ever needs to be triggered explicitly by
  a purge.

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
  <route name="future-default-route" live="true">
    <backend name="future-default" />
    <predicate class="org.nuxeo.audit.service.route.NXQLPredicate">
      <property name="query">SELECT * FROM LogEntry WHERE NOT (eventId = 'loginSuccess' AND logDate &lt; NOW('-P30D'))</property>
    </predicate>
  </route>

  <route name="archive-route" live="false">
    <backend name="archive" />
    <predicate class="org.nuxeo.audit.service.route.NotRoutesPredicate">
      <property name="routes">future-default-route</property>
    </predicate>
  </route>
</extension>
```

See the [Audit Router]({{page page='audit-router'}}) page for more about the
`live` attribute, `NXQLPredicate` and `NotRoutesPredicate`.

### 3. Trigger the Purge

```curl
curl -X POST -u Administrator:Administrator \
--data-urlencode "query=SELECT * FROM default" \
--data-urlencode "routes=future-default-route" \
--data-urlencode "routes=archive-route" \
http://localhost:8080/nuxeo/api/v1/management/audit/purge
```

The `query` scopes the source entries to scroll — here, every entry currently
in `default`. Each entry is then evaluated against both routes: recent
entries and non-`loginSuccess` entries land in `future-default`, while old
`loginSuccess` entries land in `archive`. Because `future-default-route` is
live, any entry already dual-written to it since it was contributed is
recognized as a duplicate and skipped rather than copied twice; the resulting
[bulk status]({{page space='rest-api' version='1' page='bulk-status-entity-type'}})'s `result` object
reports `matched.<route-name>` and `skip.<backend-name>` counters for this.

{{#> callout type='note'}}
If you don't need per-entry filtering through a route, `POST /management/audit/copy`
with an NXQL `query` form parameter (instead of `from`) is enough to copy an
arbitrary subset of entries from one backend to another — see
[Copy an Audit Backend]({{page page='copy-audit-backend'}}).
{{/callout}}

### 4. Validate

```curl
curl -X GET -u Administrator:Administrator \
--data-urlencode "nxql=SELECT * FROM LogEntry WHERE NOT (eventId = 'loginSuccess' AND logDate &lt; NOW('-P30D'))" \
--data-urlencode "backend=default" \
--data-urlencode "backend=future-default" \
-G http://localhost:8080/nuxeo/api/v1/management/audit/checkSearch
```

### 5. Swap the Default Backend

Once `future-default` has caught up with `default` (validated above),
promote it as the new `default` — this is a repackaging step, see the
[Typical Blue/Green Migration]({{page page='copy-audit-backend'}}#typical-blue-green-migration)
steps.

### 6. Decommission the Old Backend

Once entries have been routed and validated, the old backend content can be
dropped at the infrastructure level (drop the SQL rows, delete the
Elasticsearch/OpenSearch index, …). This last step remains a manual,
operational action outside of Nuxeo.

## Learn More

- [Audit Router]({{page page='audit-router'}})
- [Copy an Audit Backend]({{page page='copy-audit-backend'}})
- [Audit Endpoint]({{page space='rest-api' version='1' page='audit-endpoint'}})
- [Audit]({{page page='audit'}})

---

## Legacy Manual Purge (Before 2025.26)

{{#> callout type='warning' }}
The scripts below operate directly on the storage backend and bypass Nuxeo.
They are kept for versions prior to 2025.26 only; use the
[Management REST API purge mechanism](#canonical-purge-scenario) described
above on more recent versions.
{{/callout}}

You can configure the audit to filter what must be recorded, but on versions
prior to 2025.26 there is no API or UI to do a cleanup inside the audit
tables. This means that the cleanup has to be done at the Backend level (SQL
or Elasticsearch).

### Purging Audit with SQL Backend

Since the table structure of `NXP_LOGS` is really obvious, it is an easy job for a database administrator to remove old rows based on the `log_event_date` column which contains a timestamp.

{{#> callout type='warning' }}
Please backup your database before proceeding.
{{/callout}}

{{#> callout type='warning' }}
Keep in mind that these scripts purge all Audit entries, including documents' audit entries (i.e. documents' history).
{{/callout}}

If you prefer you can find below the source of a PostgreSQL function that can be used to purge Audit entries older than a given date. You can easily adapt it:

- to change the filtering done on audit record to filter,
  in this case be careful to add your clauses on the first query used to create a temporary table and also in the last delete query on the `nxp_logs` table.
- to match the syntax of other databases.

{{#> panel type='code' heading='nx_audit_purge for PostgreSQL'}}

```sql
CREATE OR REPLACE FUNCTION nx_audit_purge(olderThan character varying)
  RETURNS int AS
$BODY$
DECLARE
  -- INPUT format is 'YYYY-MM-DD'
  maxDate varchar(11) := olderThan;
  nblines int;
  total int;
BEGIN
  -- Because nxp_logs_mapextinfos has 2 FK on external tables
  -- we must remove records from this table first
  -- so we need to store the values in a tmp table before
  -- if you add a custom filter it must also be used on the last delete query
  CREATE TEMP TABLE audit_purge_tmp ON COMMIT DROP AS
    SELECT nxp_logs_mapextinfos.log_fk, nxp_logs_mapextinfos.info_fk
      FROM nxp_logs, nxp_logs_extinfo, nxp_logs_mapextinfos
      WHERE nxp_logs.log_event_date < maxDate::date
      AND nxp_logs_mapextinfos.log_fk = nxp_logs.log_id
      AND nxp_logs_mapextinfos.info_fk=nxp_logs_extinfo.log_extinfo_id;

  -- CLEANUP on nxp_logs_mapextinfos bridge table first to drop constraints
  RAISE INFO 'run cleanup on nxp_logs_mapextinfos (level 2)';
  DELETE FROM nxp_logs_mapextinfos
    WHERE nxp_logs_mapextinfos.log_fk IN (SELECT log_fk FROM audit_purge_tmp);
  GET DIAGNOSTICS nblines = ROW_COUNT;
  SELECT nblines INTO total;
  RAISE INFO '% lines cleanup on table nxp_logs_mapextinfos', nblines;

  -- LEVEL 3 cleanup
  RAISE INFO 'run cleanup on nxp_logs_extinfo (level 3)';
  DELETE FROM nxp_logs_extinfo
    WHERE nxp_logs_extinfo.log_extinfo_id IN (SELECT info_fk FROM audit_purge_tmp);
  GET DIAGNOSTICS nblines = ROW_COUNT;
  SELECT nblines+total INTO total;
  RAISE INFO '% lines cleanup on table nxp_logs_extinfo', nblines;

  -- LEVEL 1 cleanup
  RAISE INFO 'run cleanup on nxp_logs (level 1)';
  -- use the same custom filter on this query
  DELETE FROM nxp_logs
    WHERE nxp_logs.log_event_date < maxDate::date;
  GET DIAGNOSTICS nblines = ROW_COUNT;
  SELECT nblines+total INTO total;

  RAISE INFO '% lines cleanup on table nxp_logs', nblines;
  RAISE INFO '% lines total cleanup ', total;

  RETURN total;
END $BODY$
 LANGUAGE plpgsql VOLATILE
 COST 100;

ALTER FUNCTION nx_audit_purge(character varying) OWNER TO nuxeo;

```

{{/panel}}

Here is the same script for SQL Server:

{{#> panel type='code' heading='nx_audit_puge for SQL Server'}}

```sql
ALTER PROCEDURE [dbo].[nx_audit_purge]
  @olderThan varchar(11)
AS
BEGIN
  -- SET NOCOUNT ON added to prevent extra result sets from
  -- interfering with SELECT statements.
  SET NOCOUNT ON;
  -- INPUT format is 'YYYYMMDD'
  DECLARE @maxDate varchar(11) = @olderThan;
  DECLARE @nblines int = 0;
  DECLARE @total int = 0;

  -- Because nxp_logs_mapextinfos has 2 FK on external tables
  -- we must remove records from this table first
  -- so we need to store the values in a tmp table before
  SELECT NXP_LOGS_MAPEXTINFOS.LOG_FK, NXP_LOGS_MAPEXTINFOS.INFO_FK
    INTO #audit_purge_tmp
    FROM NXP_LOGS, NXP_LOGS_EXTINFO, NXP_LOGS_MAPEXTINFOS
    WHERE NXP_LOGS.LOG_EVENT_DATE < convert(datetime,@maxDate,112)
    AND NXP_LOGS_MAPEXTINFOS.LOG_FK = NXP_LOGS.LOG_ID
    AND NXP_LOGS_MAPEXTINFOS.INFO_FK=NXP_LOGS_EXTINFO.LOG_EXTINFO_ID

  -- CLEANUP on nxp_logs_mapextinfos bridge table first to drop constraints
  RAISERROR ('run cleanup on nxp_logs_mapextinfos level 2',0,1);
  DELETE FROM NXP_LOGS_MAPEXTINFOS
    WHERE NXP_LOGS_MAPEXTINFOS.LOG_FK IN (SELECT LOG_FK FROM #audit_purge_tmp);
  SET @nblines = @@ROWCOUNT;
  SET @total = @nblines;
  RAISERROR ('% lines cleanup on table nxp_logs_mapextinfos',0,1,@nblines);

  -- LEVEL 3 cleanup
  RAISERROR ('run cleanup on nxp_logs_extinfo level 3',0,1);
  DELETE FROM NXP_LOGS_EXTINFO
    WHERE NXP_LOGS_EXTINFO.LOG_EXTINFO_ID IN (SELECT INFO_FK FROM #audit_purge_tmp);
  SET @nblines = @@ROWCOUNT;
  SET @total = @nblines+@total;
  RAISERROR ('% lines cleanup on table nxp_logs_extinfo' ,0,1,@nblines);

  -- LEVEL 1 cleanup
  RAISERROR ('run cleanup on nxp_logs level 1',0,1);
  DELETE FROM NXP_LOGS
    WHERE NXP_LOGS.LOG_EVENT_DATE < convert(datetime,@maxDate,112);
  SET @nblines = @@ROWCOUNT;
  SET @total = @nblines+@total;

  RAISERROR ('% lines cleanup on table nxp_logs' ,0,1,@nblines);
  RAISERROR ('% lines total cleanup ' ,0,1,@total);
  DROP TABLE #audit_purge_tmp;
  RETURN @total
END
```

{{/panel}}

Here for Oracle:

{{#> panel type='code' heading='nx_audit_puge for Oracle'}}

```sql
CREATE GLOBAL TEMPORARY TABLE audit_purge_tmp (
  log_fk NUMBER(38),
  info_fk NUMBER(19)
) ON COMMIT DELETE ROWS;

CREATE OR REPLACE PROCEDURE nx_audit_purge(olderThan VARCHAR2)
IS
  -- INPUT format is 'YYYY-MM-DD'
  maxDate VARCHAR2(10) := olderThan;
  nblines PLS_INTEGER;
  total PLS_INTEGER;
BEGIN
  -- Because nxp_logs_mapextinfos has 2 FK on external tables
  -- we must remove records from this table first
  -- so we need to store the values in a tmp table before
  INSERT INTO audit_purge_tmp
    SELECT nxp_logs_mapextinfos.log_fk, nxp_logs_mapextinfos.info_fk
      FROM nxp_logs, nxp_logs_extinfo, nxp_logs_mapextinfos
      WHERE nxp_logs.log_event_date < TO_DATE(maxDate, 'YYYY-MM-DD')
      AND nxp_logs_mapextinfos.log_fk = nxp_logs.log_id
      AND nxp_logs_mapextinfos.info_fk=nxp_logs_extinfo.log_extinfo_id;
  -- CLEANUP on nxp_logs_mapextinfos bridge table first to drop constraints
  dbms_output.put_line('Run cleanup on nxp_logs_mapextinfos (level 2) ...');
  DELETE FROM nxp_logs_mapextinfos
    WHERE nxp_logs_mapextinfos.log_fk IN (SELECT log_fk FROM audit_purge_tmp);
  nblines := SQL%ROWCOUNT;
  total := nblines;
  dbms_output.put_line('Lines cleanup on table nxp_logs_mapextinfos: '|| nblines);
  -- LEVEL 3 cleanup
  dbms_output.put_line('Run cleanup on nxp_logs_extinfo (level 3) ...');
  DELETE FROM nxp_logs_extinfo
    WHERE nxp_logs_extinfo.log_extinfo_id IN (SELECT info_fk FROM audit_purge_tmp);
  nblines := SQL%ROWCOUNT;
  total := total + nblines;
  dbms_output.put_line('Lines cleanup on table nxp_logs_extinfo: ' || nblines);
  -- LEVEL 1 cleanup
  dbms_output.put_line('Run cleanup on nxp_logs (level 1) ...');
  DELETE FROM nxp_logs
    WHERE nxp_logs.log_event_date < TO_DATE(maxDate, 'YYYY-MM-DD');
  nblines := SQL%ROWCOUNT;
  total := total + nblines;
  dbms_output.put_line('Lines cleanup on table nxp_logs: ' || nblines);
  dbms_output.put_line('Total lines cleanup: '|| total);
END;
```

{{/panel}}

### Purging Audit with Elasticsearch Backend

Make sure to stop all Nuxeo instances before proceeding.

#### 1. Create a New Audit Index

Here you need to edit the cURL query to match:

- your Elasticsearch server (`localhost:9200`)
- the name of your new index (`nuxeo-audit-201809`)
- the number of shards and replicas (5 and 1 here)
- eventually any custom mapping present in the `extended` map

The following query creates a new audit index and set a proper setting and mapping for Nuxeo 10.10 (Elasticsearch 6.3):

{{#> panel type='code' heading='Create a new audit index'}}

```json
curl -XPUT "localhost:9200/nuxeo-audit-201809" -H 'Content-Type: application/json' -d'{
"settings":
{
  "index.translog.durability": "async",
  "number_of_shards": "5",
  "number_of_replicas": "1",
  "analysis": {
    "filter": {
      "truncate_filter": {
        "length": 256,
        "type": "truncate"
      },
      "word_delimiter_filter": {
        "type": "word_delimiter",
        "preserve_original": true
      },
      "en_stem_filter": {
        "name": "minimal_english",
        "type": "stemmer"
      },
      "en_stop_filter": {
        "stopwords": [
          "_english_"
        ],
        "type": "stop"
      }
    },
    "tokenizer": {
      "path_tokenizer": {
        "delimiter": "/",
        "type": "path_hierarchy"
      }
    },
    "analyzer": {
      "fulltext": {
        "char_filter": [
          "html_strip"
        ],
        "filter": [
          "word_delimiter_filter",
          "lowercase",
          "en_stop_filter",
          "en_stem_filter"
        ],
        "type": "custom",
        "tokenizer": "standard"
      },
      "path_analyzer": {
        "type": "custom",
        "tokenizer": "path_tokenizer"
      },
      "default": {
        "type": "custom",
        "filter": [
          "truncate_filter"
        ],
        "tokenizer": "keyword"
      }
    }
  }
},
"mappings": {
  "dynamic_templates": [
    {
      "strings": {
        "match_mapping_type": "string",
        "mapping": {
          "type": "keyword",
          "ignore_above": 256
        }
      }
    }
  ],
  "properties": {
    "docPath": {
      "type": "keyword",
      "fields": {
        "children": {
          "type": "text",
          "analyzer": "path_analyzer"
        }
      }
    },
    "logDate": {
      "type": "date"
    },
    "eventDate": {
      "type": "date"
    },
    "extended": {
      "properties": {
        "dueDate": {
          "type": "date"
        },
        "params": {
           "type": "object",
           "enabled": false
        }
      }
    },
    "comment": {
      "type": "text",
      "fields": {
        "fulltext": {
          "analyzer": "fulltext",
          "type": "text"
        }
      }
    },
    "id": {
      "type": "long"
    }
  }
}
}'

```

{{/panel}}

#### 2. Re-index and Filter

Now we are going to copy the original audit index into the new one.
And we are going to filter unwanted log entries.

Here you need to edit the cURL query to match:

- your Elasticsearch server (`localhost:9200`)
- the name of your new index (`nuxeo-audit-201809`)
- the query part to match what you want to purge

The following query will purge all log entries related to login and download the ones that are older than 2018-06-01.

{{#> panel type='code' heading='Re-index and filter'}}

```json
curl -XPOST "localhost:9200/_reindex" -H 'Content-Type: application/json' -d'{
  "source": {
    "index": "nuxeo-audit",
    "query":
{
  "bool": {
    "must_not": [
      {
        "bool": {
          "must": [
            {
              "terms": {
                "eventId": [
                  "loginSuccess",
                  "logout",
                  "loginFailed",
                  "download"
                ]
              }
            },
            {
              "range": {
                "logDate": {
                  "lte": "2018-06-01"
                }
              }
            }
          ]
        }
      }
    ]
  }
}
  },
  "dest": {
    "index": "nuxeo-audit-201809"
  }
}'

```

{{/panel}}

#### 3. Update the Nuxeo Configuration

Now you can edit the `nuxeo.conf` to update the name of the new Elasticsearch audit index:

```bash
audit.elasticsearch.indexName=nuxeo-audit-201809
```

{{#> callout type='warning' }}
This purge procedure can also be used to upgrade Elasticsearch from 5.x or to update the mapping.
You just need to remove the query part of the re-index command if you don't want to purge at the same time.
{{/callout}}
