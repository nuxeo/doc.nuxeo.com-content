---
title: Temporary Files
toc: true
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Temporary+Files
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Temporary+Files'
    page_id: '29458840'
    shortlink: mIHBAQ
    shortlink_source: 'https://doc.nuxeo.com/x/mIHBAQ'
    source_link: /display/CORG/Temporary+Files
history:
    - 
        author: Solen Guitter
        date: '2016-05-02 12:32'
        message: ''
        version: '5'
    - 
        author: Thierry Martins
        date: '2016-04-27 16:39'
        message: ''
        version: '4'
    - 
        author: Julien Carsique
        date: '2016-01-14 17:22'
        message: add ImageIO case
        version: '3'
    - 
        author: Solen Guitter
        date: '2016-01-12 10:00'
        message: ''
        version: '2'
    - 
        author: Julien Carsique
        date: '2016-01-11 13:42'
        message: ''
        version: '1'

---
{{! excerpt}}

`org.nuxeo.runtime.api.Framework` provides utility methods for temporary file and folder management.

{{! /excerpt}}

## Nuxeo Temporary Directory

Nuxeo uses the directory set by the configuration parameter `nuxeo.tmp.dir` (`Environment.NUXEO_TMP_DIR`).
By default (with `launcher.override.java.tmpdir == true`), Nuxeo will set `java.io.tmpdir = ${nuxeo.tmp.dir}`.

Code needing a temporary file or folder must create it in&nbsp;`nuxeo.tmp.dir` or&nbsp;`Environment.getDefault().getTemp()` then ensure it will be deleted after use.

{{#> callout type='warning' }}

On Linux environments, we recommend not to use the system temporary folder `/tmp` because this one can be cleaned up. This is the case on Red Hat Enterprise Linux in particular, where `systemd-tmpfiles` service is deleting old files from `/tmp`.

{{/callout}}

&nbsp;

## Creating a Temporary File or Folder

Temporary files or folders are usually created with&nbsp;`java.io.File.createTempFile()`,&nbsp;`java.nio.file.Files.createTempFile()` or&nbsp;`java.nio.file.Files.createTempDirectory()`. However those methods may use a wrong folder:

*   If they are called without an explicit parent directory where to create the temporary resource, then they fall back on the value of `java.io.tmpdir` on JVM start.
*   If the temporary directory location is set or changed after the JVM start, then the final location will be wrong (unit tests are a common failure case).

The `org.nuxeo.runtime.api.Framework` provides three dedicated methods:

*   `Framework.createTempFile()`
*   `Framework.createTempFilePath()`
*   `Framework.createTempDirectory()`

### java.io.File

Do not use&nbsp;`java.io.File.createTempFile(String, String)`. Instead, you can use one of the two following:

*   `Framework.createTempFile(String, String)`
*   `File.createTempFile(String, String, Environment.getDefault().getTemp())`

The Framework method performs additional checks, directory creation and fall back to&nbsp;`java.io.tmpdir` if needed.

### java.nio.file.Files

Do not use&nbsp;`java.nio.file.Files.createTempFile(String, String, FileAttribute<?>...)`. Instead, you can use one of the two following:

*   `Framework.createTempFilePath(String, String, FileAttribute<?>...)`
*   `Files.createTempFile(Environment.getDefault().getTemp().toPath(), String, String, FileAttribute<?>...)`

Do not use&nbsp;`java.nio.file.Files.createTempDirectory(String, FileAttribute<?>...)`. Instead, you can use one of the two following:

*   `Framework.createTempDirectory(String, FileAttribute<?>...)`
*   `Files.createTempDirectory(Environment.getDefault().getTemp().toPath(), String, FileAttribute<?>...)`

The Framework methods perform additional checks, directory creation and fall back to&nbsp;`java.io.tmpdir` if needed.

## Code Using&nbsp;`java.io.tmpdir`

Any third-party code storing the temporary folder in a static variable is an issue: it is not thread-safe and may use a deprecated path, optionally already deleted.
Here is a non exhaustive list:

*   `javax.imageio.ImageIO.CacheInfo.getCacheDirectory()` internal method, used by `ImageIO.read()`
    Workaround: precede with `ImageIO.setCacheDirectory(Environment.getDefault().getTemp());`

## Deleting Temporary Resource After Use

The&nbsp;`java.io.File.deleteOnExit()` method has a few caveats:

*   Deletion will be attempted only for normal termination of the virtual machine.
*   Temporary resources will live far too longer than needed.
*   No check is performed on the file being deleted.

Instead, use the `Framework.trackFile(File, Object)` method which leverages the use of&nbsp;`org.apache.commons.io.FileCleaningTracker`, keeping track of the file awaiting deletion, and deleting it when the associated marker object is reclaimed by the garbage collector. Additionally it uses a&nbsp;`FileEventTracker.SafeFileDeleteStrategy` which will **not** delete files contained in some protected directories: by default, the binaries are protected from such an automatic deletion.

&nbsp;

{{! Don't put anything here. }}

* * *