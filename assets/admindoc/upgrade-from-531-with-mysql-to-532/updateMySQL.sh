#!/bin/sh

# this script upgrades the database structure
# it converts the id involved in constraints (foreign keys) to BINARY type
# see https://jira.nuxeo.com/browse/NXP-5183
# it is needed if you plan to upgrade your Nuxeo DM <= 5.3.1 to Nuxeo DM >= 5.3.2

DB_HOST=localhost
DB_PORT=3306
DB_NAME=nuxeo
DB_USER=user
DB_PWD=password

SQL_TMP_FILE=/tmp/nxquery.sql
SQL_TMP_UPGRADE=/tmp/nxupgrade.sql

if [ -f "$SQL_TMP_FILE" ]; then
    rm $SQL_TMP_FILE
fi
if [ -f "$SQL_TMP_UPGRADE" ]; then
    rm $SQL_TMP_UPGRADE
fi

cat > "$SQL_TMP_FILE" <<EOF || exit 1
select concat('ALTER TABLE ',table_name,' DROP FOREIGN KEY ',constraint_name,', MODIFY ',column_name,' VARCHAR(36) BINARY;') from information_schema.KEY_COLUMN_USAGE where constraint_name <> 'PRIMARY' AND constraint_name NOT LIKE 'jena%' AND table_name NOT LIKE 'NXP_%' AND table_schema='$DB_NAME'
UNION ALL
select concat('ALTER TABLE hierarchy MODIFY id VARCHAR(36) BINARY;')
UNION ALL
select concat('ALTER TABLE ',table_name,' ADD CONSTRAINT ',constraint_name,' FOREIGN KEY (\`',column_name,'\`) REFERENCES \`',referenced_table_name,'\` (\`',referenced_column_name,'\`) ON DELETE CASCADE;') from information_schema.KEY_COLUMN_USAGE where constraint_name <> 'PRIMARY' AND constraint_name NOT LIKE 'jena%' AND table_name NOT LIKE 'NXP_%' AND table_schema='$DB_NAME';

EOF

# check if a password is needed
if [ "x$DB_PWD" = "x" ]; then
    PASSWORD=""
else
    PASSWORD="-p$DB_PWD"
fi

# generate SQL code for upgrades
mysql -h $DB_HOST -P $DB_PORT -u$DB_USER $PASSWORD $DB_NAME --skip-column-names < $SQL_TMP_FILE > $SQL_TMP_UPGRADE || exit 2
# execute generated SQL code
mysql -h $DB_HOST -P $DB_PORT -u$DB_USER $PASSWORD $DB_NAME < $SQL_TMP_UPGRADE || exit 3

# remove temp files
rm $SQL_TMP_FILE $SQL_TMP_UPGRADE

echo "Database structure upgraded successfully"
