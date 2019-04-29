---
title: Purging Audit Logs (NXP_LOGS)
review:
    comment: ''
    date: '2019-04-29'
    status: ok
labels:
    - lts2016-ok
    - logs
    - audit
    - ataillefer
    - lts2017-ok
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
    -
        author: Solen Guitter
        date: '2016-09-01 10:00'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2016-08-02 16:27'
        message: 'remove <span> '
        version: '14'
    -
        author: Vincent Dutat
        date: '2015-05-14 18:52'
        message: ''
        version: '13'
    -
        author: Vincent Dutat
        date: '2015-05-14 18:44'
        message: ''
        version: '12'
    -
        author: Vincent Dutat
        date: '2015-05-14 18:43'
        message: ''
        version: '11'
    -
        author: Benoit Delbosc
        date: '2015-02-05 08:54'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-01-24 10:29'
        message: ''
        version: '9'
    -
        author: Benoit Delbosc
        date: '2014-01-23 14:08'
        message: ''
        version: '8'
    -
        author: Benoit Delbosc
        date: '2014-01-23 14:07'
        message: Add oracle procedure
        version: '7'
    -
        author: Florent Guillaume
        date: '2013-11-25 16:14'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-10-15 11:56'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2013-06-17 12:22'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2013-06-17 12:22'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-05-22 15:11'
        message: Added related pages
        version: '2'
    -
        author: Solen Guitter
        date: '2013-01-14 11:41'
        message: ''
        version: '1'

---
Depending on usage (lots of updates, lots of workflows, lots of logins, ...), the audit storage can grow very quickly.

You can configure the audit to filter what must be recorded, but there is no API or UI to do a cleanup inside the audit tables. Actually, this is not something we forgot, we simply considered that it was safer like that: the Audit Service is here to record activity in the platform, it makes sense that a component cannot easily delete its audit trail.

This means that the cleanup should be done at the Backend level (SQL or Elasticsearch).

## Purging Audit with SQL Backend

Since the table structure of `NXP_LOGS` is really obvious, it is an easy job for a database administrator to remove old rows based on the `log_event_date` column which contains a timestamp.

<div class="message-content">

&nbsp;

{{#> callout type='warning' }}

Please backup your database before proceeding.

{{/callout}}

&nbsp;

</div>

<div class="message-content">

&nbsp;

{{#> callout type='warning' }}

Keep in mind that these scripts purge all Audit entries, including documents' audit entries (i.e. documents' history).

{{/callout}}

&nbsp;

</div>

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

## Purging Audit with Elasticsearch Backend

Make sure to stop all Nuxeo instances before proceeding.

### 1. Create a New Audit Index

Here you need to edit the cURL query to match:
- your Elasticsearch server (`localhost:9200`)
- the name of your new index (`nuxeo-audit-201809`)
- the number of shards and replicas (5 and 1 here)
- eventually any custom mapping present in the `extended` map


The following query creates a new audit index and set a proper setting and mapping for Nuxeo LTS 2017 (Elasticsearch 5.6):

{{#> panel type='code' heading='Create a new audit index'}}
```json
curl -XPUT "localhost:9200/nuxeo-audit-201809" -H 'Content-Type: application/json' -d'{
"settings":
{
  "index.translog.durability": "async",
  "number_of_shards": "5",
  "number_of_replicas": "1",
  "mapping.single_type": true,
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
"mappings": {"entry" :
{
  "_all": {
    "enabled": false
  },
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
}}'

```
{{/panel}}

### 2. Re-index and Filter

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

### 3. Update the Nuxeo Configuration

Now you can edit the `nuxeo.conf` to update the name of the new Elasticsearch audit index:

```bash
audit.elasticsearch.indexName=nuxeo-audit-201809
```

{{#> callout type='warning' }}
This purge procedure can also be used to upgrade Elasticsearch from 2.x or to update the mapping.
You just need to remove the query part of the re-index command if you don't want to purge at the same time.
{{/callout}}

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Logs Analysis]({{page page='logs-analysis'}})
- [Audit]({{page page='audit'}})
- [Workflow Audit Log]({{page page='workflow-audit-log'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
