---
title: Purging Audit Logs (NXP_LOGS)
review:
    comment: ''
    date: ''
    status: ok
labels:
    - logs
    - audit
confluence:
    ajs-parent-page-id: '21921914'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: viewpage.action?pageId=21921832
    canonical_source: viewpage.action?pageId=21921832
    page_id: '21921832'
    shortlink: KIBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KIBOAQ'
    source_link: /pages/viewpage.action?pageId=21921832
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-09-01 12:24'
        message: ''
        version: '12'
    -
        author: Benoit Delbosc
        date: '2015-02-05 08:53'
        message: ''
        version: '11'
    -
        author: Benoit Delbosc
        date: '2015-02-05 08:52'
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
Depending on usage (lots of updates, lots of workflows, lots of logins, ...), the audit tables (`NXP_LOGS` and related tables) can grow very quickly.

You can configure the audit to filter what must be recorded, but there is no API or UI to do a cleanup inside the audit tables. Actually, this is not something we forgot, we simply considered that it was safer like that: the Audit Service is here to record activity in the platform, it makes sense that a component cannot easily delete its audit trail.

This means that the cleanup should be done at the SQL level. Since the table structure of `NXP_LOGS` &nbsp;is really obvious, it is an easy job for a database administrator to remove old rows based on the&nbsp;`log_event_date` column which contains a timestamp.

{{#> callout type='warning' }}

Please backup your database before proceeding

{{/callout}}

If you prefer you can find below the source of a PostgreSQL function that can be used to purge Audit entries older than a given date.&nbsp;You can easily adapt it:

*   to change the filtering done on audit record to filter,
*   to match the syntax of other databases than PostgreSQL.

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
  DELETE FROM nxp_logs
    WHERE nxp_logs.log_id IN (SELECT log_fk FROM audit_purge_tmp);
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
    WHERE NXP_LOGS.LOG_ID IN (SELECT LOG_FK FROM #audit_purge_tmp);
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
    WHERE nxp_logs.log_id IN (SELECT log_fk FROM audit_purge_tmp);
  nblines := SQL%ROWCOUNT;
  total := total + nblines;
  dbms_output.put_line('Lines cleanup on table nxp_logs: ' || nblines);
  dbms_output.put_line('Total lines cleanup: '|| total);
END;
```

{{/panel}}

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related sections'}}

*   [Logs Analysis]({{page page='logs-analysis'}})
*   [Audit]({{page space='nxdoc60' page='audit'}})
*   [Where Are the Log and Configuration Files in Windows?]({{page page='where-are-the-log-and-configuration-files-in-windows'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
