---
title: java.net.SocketException Too many open files
description: On Linux, you might encounter this error after you've used your Nuxeo instance, discover how to solve it.
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2017-ok
    - install-linux
    - mguillaume
toc: true
tree_item_index: 300

---

## The Symptoms

On Linux, you might encounter this error a little while after you've used your Nuxeo instance (esp. with many concurrent HTTP requests on the Tomcat distribution):

```
09:02:10,887 ERROR [PoolTcpEndpoint] Endpoint ServerSocket[addr=/0.0.0.0,port=0,localport=8080] ignored exception: java.net.SocketException: Too many open files
java.net.SocketException: Too many open files
       at java.net.PlainSocketImpl.socketAccept(Native Method)
```

To avoid this, you have to increase the number of open files in the configuration file of your Linux System. There are two limits. One is global (for all users) and one is a per-user limit (1024 by default).

## Count File Descriptors in Use

{{#> panel type='code' heading='Count Open File Handles'}}
```
sudo lsof [-u user] | wc -l
```
{{/panel}}

{{#> panel type='code' heading='Count File Descriptors in Kernel Memory'}}
```
sudo sysctl fs.file-nr
# => The number of allocated file handles
# => The number of unused-but-allocated file handles
# => The system-wide maximum number of file handles
```
{{/panel}}

## Raising the Global Limit

1. Edit /etc/sysctl.conf and add the following line:
  ```
  fs.file-max = 65536
  ```
2. Apply the changes with:
  ```
  sudo sysctl -p /etc/sysctl.conf
  ```

## Raising the per-User Limit

On some systems, it is possible to use the ulimit -Hn 8192 and ulimit -Sn 4096 commands. However, most of the time this is forbidden and you will get an error such as:
```
ulimit: open files: cannot modify limit: Operation not permitted
```

In those cases, you must:
1. Edit as root the following system configuration file:
```
% sudo vi /etc/security/limits.conf
```
2. Modify the values for nuxeo user (we assume here JBOSS is launched with the sytem user "nuxeo")
```
nuxeo           soft    nofile          4096
nuxeo           hard    nofile          8192
```

If you want to raise the limits for all users, you can instead do the following:

```
*           soft    nofile          4096
*           hard    nofile          8192
```

Once you save file, you may need to logout and login again.

To verify if the changes have been taken into account, open a new session with the user that starts the Nuxeo process, and check that the change has been taken into account:

```
% su nuxeo
% ulimit -n
1024
```

Here we can see that the new value has not been taken into account.

To fix this:
1. Edit /etc/pam.d/su:
```
% sudo vi /etc/pam.d/su
```
2. Uncomment the line:
```
session    required   pam_limits.so
```

  The change should now be taken into account the next time you login with your user:
  ```
  % su nuxeo
  % ulimit -n
  4096
  ```
