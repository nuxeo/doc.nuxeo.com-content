---
title: Configuring the Nuxeo Platform as a Daemon on Debian
review:
    comment: ''
    date: ''
    status: ok
labels:
    - install-linux
confluence:
    ajs-parent-page-id: '16810042'
    ajs-parent-page-title: Installing the Nuxeo Platform on Linux
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Configuring+the+Nuxeo+Platform+as+a+Daemon+on+Debian
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC58/Configuring+the+Nuxeo+Platform+as+a+Daemon+on+Debian
    page_id: '16810001'
    shortlink: EYAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/EYAAAQ'
    source_link: /display/ADMINDOC58/Configuring+the+Nuxeo+Platform+as+a+Daemon+on+Debian
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 09:17'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-10-14 16:02'
        message: ''
        version: '20'
    - 
        author: Mathieu Guillaume
        date: '2013-01-15 11:55'
        message: ''
        version: '19'
    - 
        author: Mathieu Guillaume
        date: '2013-01-15 11:53'
        message: ''
        version: '18'
    - 
        author: Mathieu Guillaume
        date: '2012-01-09 14:17'
        message: Migrated to Confluence 4.0
        version: '17'
    - 
        author: Mathieu Guillaume
        date: '2012-01-09 14:17'
        message: Updated with current script
        version: '16'
    - 
        author: Solen Guitter
        date: '2011-12-07 12:23'
        message: ''
        version: '15'
    - 
        author: Julien Carsique
        date: '2011-11-15 15:31'
        message: ''
        version: '14'
    - 
        author: Julien Carsique
        date: '2011-11-15 15:27'
        message: ''
        version: '13'
    - 
        author: Julien Carsique
        date: '2011-11-15 15:05'
        message: changed "nuxeo" with "$NUXEO_USER"
        version: '12'
    - 
        author: Julien Carsique
        date: '2011-07-19 15:18'
        message: ''
        version: '11'
    - 
        author: Julien Carsique
        date: '2011-07-19 15:18'
        message: Point to source code of init.d scripts
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-03-03 15:35'
        message: ''
        version: '9'
    - 
        author: Benjamin Jalon
        date: '2010-12-10 21:26'
        message: ''
        version: '8'
    - 
        author: Benjamin Jalon
        date: '2010-12-10 20:52'
        message: ''
        version: '7'
    - 
        author: Benjamin Jalon
        date: '2010-12-10 19:53'
        message: ''
        version: '6'
    - 
        author: Benjamin Jalon
        date: '2010-12-10 19:53'
        message: ''
        version: '5'
    - 
        author: Benjamin Jalon
        date: '2010-12-10 19:52'
        message: ''
        version: '4'
    - 
        author: Benjamin Jalon
        date: '2010-12-10 19:51'
        message: ''
        version: '3'
    - 
        author: Benjamin Jalon
        date: '2010-12-10 19:51'
        message: ''
        version: '2'
    - 
        author: Benjamin Jalon
        date: '2010-12-10 19:46'
        message: ''
        version: '1'

---
&nbsp;

&nbsp;

The procedure described here is targeted for the Debian Etch distribution, and should be valid for any Debian-based GNU/Linux distribution such as Ubuntu. In other GNU/Linux distributions some commands may be different.

Here is a sample script based on [the one used in the debian package](https://github.com/nuxeo/nuxeo-packaging-debian/blob/release-5.8/resources/debian/nuxeo.init)

```
#!/bin/sh
### BEGIN INIT INFO
# Provides:          nuxeo
# Required-Start:    $local_fs $remote_fs $network $syslog
# Required-Stop:     $local_fs $remote_fs $network $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start/stop Nuxeo
### END INIT INFO

DESC="Nuxeo"

NUXEO_USER=nuxeo
NUXEOCTL="/var/lib/nuxeo/server/bin/nuxeoctl"
NUXEO_CONF="/etc/nuxeo/nuxeo.conf"
export NUXEO_CONF

. /lib/init/vars.sh
. /lib/lsb/init-functions

create_pid_dir() {
    mkdir -p /var/run/nuxeo
    chown $NUXEO_USER:$NUXEO_USER /var/run/nuxeo
}

# Change ulimit to minimum needed by Nuxeo
ulimit -n 2048

case "$1" in
  start)
        log_daemon_msg "Starting" "$DESC\n"
        create_pid_dir
        su $NUXEO_USER -c "$NUXEOCTL --quiet startbg"
        ES=$?
        log_end_msg $ES
        ;;
  stop)
        log_daemon_msg "Stopping" "$DESC\n"
        su $NUXEO_USER -c "$NUXEOCTL --quiet stop"
        ES=$?
        log_end_msg $ES
        ;;
  restart)
        create_pid_dir
        su $NUXEO_USER -c "$NUXEOCTL --quiet restart"
        ES=$?
        log_end_msg $ES
        ;;
  force-reload)
        create_pid_dir
        su $NUXEO_USER -c "$NUXEOCTL --quiet restart"
        ES=$?
        log_end_msg $ES
        ;;
  status)
        su $NUXEO_USER -c "$NUXEOCTL --quiet status"
        exit $?
        ;;
  *)
        echo "Usage: $0 {start|stop|restart|force-reload|status}" >&2
        exit 3
        ;;
esac

```

Copy the shell script to `/etc/init.d/nuxeo`, replacing paths to match your installation.

Then enable the autostart creating the links in the rcX.d directories running the command (as root):

```
$ update-rc.d nuxeo defaults

```

Now restart the machine and verify that nuxeo is started automatically looking at the log file.

If you want to remove the automatic startup use the command (as root):

```
$ update-rc.d -f nuxeo remove

```

You can manage the service with the following command:

```
/etc/init.d/nuxeo [status|start|stop|...]

```