---
title: Scripting Commands
review:
    comment: ''
    date: '2019-03-26'
    status: ok
labels:
    - el
    - scripting
    - packaging-component
    - lts2019-ok
toc: true
confluence:
    ajs-parent-page-id: '3342859'
    ajs-parent-page-title: Creating Nuxeo Packages
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Scripting+Commands
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Scripting+Commands'
    page_id: '3342882'
    shortlink: IgIz
    shortlink_source: 'https://doc.nuxeo.com/x/IgIz'
    source_link: /display/NXDOC/Scripting+Commands
history:
    -
        author: Manon Lumeau
        date: '2016-04-22 09:44'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2015-08-31 14:28'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2014-01-06 16:20'
        message: 'Formatting, update Astract Command location and links'
        version: '33'
    -
        author: Solen Guitter
        date: '2014-01-06 15:36'
        message: Added TOC
        version: '32'
    -
        author: Solen Guitter
        date: '2012-09-14 11:52'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2012-09-14 11:52'
        message: ''
        version: '30'
    -
        author: Julien Carsique
        date: '2012-09-04 18:08'
        message: ''
        version: '29'
    -
        author: Anahide Tchertchian
        date: '2012-06-28 16:55'
        message: ''
        version: '28'
    -
        author: Anahide Tchertchian
        date: '2012-06-12 18:07'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2012-05-21 12:01'
        message: Updated mercurial link to github URL
        version: '26'
    -
        author: Julien Carsique
        date: '2011-02-09 12:24'
        message: add info about module containing AbstractCommand to extend for implementing new marketplace package commands
        version: '25'
    -
        author: Julien Carsique
        date: '2011-02-03 18:25'
        message: updated pointer to list of context variables
        version: '24'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 11:12'
        message: ''
        version: '23'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 02:19'
        message: ''
        version: '22'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 02:08'
        message: ''
        version: '21'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 02:04'
        message: ''
        version: '20'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:55'
        message: ''
        version: '19'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:54'
        message: ''
        version: '18'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:50'
        message: ''
        version: '17'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:49'
        message: ''
        version: '16'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:46'
        message: ''
        version: '15'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:45'
        message: ''
        version: '14'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:44'
        message: ''
        version: '13'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:39'
        message: ''
        version: '12'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:36'
        message: ''
        version: '11'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:30'
        message: ''
        version: '10'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:24'
        message: ''
        version: '9'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:11'
        message: ''
        version: '8'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 22:49'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 22:46'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 18:19'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 18:06'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 17:12'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 16:35'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 11:26'
        message: ''
        version: '1'
---

Scripting commands can be used to define the way an installation is done. Usually, when installing a new component you need to execute a limited set of commands like copy, delete, patch etc.

The Package Scripting Commands provides an easy to use format for defining the install logic of a package and more, each built-in command is providing safe rollback in case of install failures.

When writing your installation using scripting commands you don't need to write the uninstall script. This script will be automatically generated after the installation is successfully done.

## Typical Installations

A typical `install.xml` file looks like this:

```xml
<install>
   <update file="${package.root}/install/bundles" todir="${env.bundles}" />
   <update file="${package.root}/install/bundles-jsf-ui" todir="${env.bundles}" if="Packages.contains('nuxeo-jsf-ui')" />
   <update file="${package.root}/install/bundles-web-ui" todir="${env.bundles}" if="Packages.contains('nuxeo-web-ui')" />
   <update file="${package.root}/install/lib" todir="${env.lib}" />
</install>
```

This instructs Nuxeo to use the bundles from the `bundles` directory, and in addition use those from the `bundles-jsf-ui` directory only if the `nuxeo-jsf-ui` package is installed (and similarly for `nuxeo-web-ui`). It also instructs Nuxeo to use the plain Java libraries from the `lib` directory.

## Specialized Installations

Let's now look at a more complex `install.xml` file, which would be used only for very specialized packages:

```xml
<install>
  <update file="${package.root}/myplugin.jar" todir="${env.bundles}" fail="todir.isFile()" />
  <update file="${package.root}/my.properties" todir="${env.config}"
    ignore="Platform.isJBoss()" />
  <copy file="${package.root}/mylib-1.2.jar" tofile="${env.lib}/mylib-{version:.*}.jar"
    ignore="Version.isGreaterOrEqual(version, \"1.2\")" />
  <deploy file="${env.bundles}/my-plugin.jar"/>
</install>
```

You can see the file is using contextual variables as&nbsp;`env.bundles`.&nbsp;etc. See&nbsp;[Creating Nuxeo Packages]({{page page='creating-nuxeo-packages'}}) for the complete list of context variables.

Let's take each command and see what will be executed.

- The first update command is copying the file named `myplugin.jar` from the package root into the Nuxeo bundles directory (by preserving the file name).

    ```xml
      <update file="${package.root}/myplugin.jar" todir="${env.bundles}" 
        fail="todir.isFile()" />
    ```

    You can see a `fail` attribute was used to put a guard on this command. The guard says that the command should fail if the target file exists (i.e a JAR with the same name already exists in the Nuxeo bundles directory). See below in the [Guard Attributes](#guard-attributes) section for more details on using guards.

- The second update command will copy the `my.properties` file from the package root to the Nuxeo configuration directory but only if the current platform distribution is not based on JBoss.

    ```xml
      <update file="${package.root}/my.properties" todir="${env.config}"
        ignore="Platform.isJBoss()" />
    ```

    You can see here the usage of another type of guard parameter: `ignore`.

- The third copy command is a bit more complicated. It is used to upgrade an existing library. It is checking if the version of the library is an old version and should be replaced. If it is the same or a newer version the command will be ignored.

    ```xml
      <copy file="${package.root}/mylib-1.2.jar" tofile="${env.lib}"
        ignore="Version.isGreaterOrEqual(version, \"1.2\")" />
    ```

    You notice the usage of regular expression variables. The `tofile` value is using an expression of the form `{var:regex}`. This is a file pattern that allow to search for an existing file that match the given pattern. If a matching file is found the pattern portion of the file name will be extracted and inserted into the EL context under the 'var' key. If no matching file is found the command will fail.

    So, in our case the first file that matches the name `mylib-*.jar` and is located in the `env.lib` directory will be selected and the value that matched the pattern will be inserted into EL context under the name `version`.
    That way we can use this variable in our `ignore` guard parameter. This will check the version of the file that matched to see if the upgrade should be done or not.

- The `deploy` command will deploy (e.g. install) the specified bundle into the working Nuxeo Platform. The `deploy` command is needed only if you don't want to restart the server after the install is done. If you skip the deployment command you need to restart the server to have your new bundle deployed.

    ```xml
      <deploy file="${env.bundles}/my-plugin.jar"/>
    ```

    {{#> callout type='note' }}
    The `deploy` command won't work for all bundles. Some bundles will need the server to be restarted.
    {{/callout}}


## {{> anchor 'guard-attributes'}}Guard Attributes

We've seen that there are two special attributes that can be used on any command:

- `fail`: this is an EL expression that can be used to force command to fail in some circumstances.
- `ignore`: this is an EL expression that can be used to avoid executing the command in some circumstances.
- `if`: this is an EL expression that can be used to only execute the command in some circumstances.

The variables available in EL context are:

- `Packages`: a packages helper. Only one method is available, `contains`, that will check if the given package is installed (or being installed) in the platform.
- `Version`: a version helper. See `VersionHelper` class for the list of all available methods.
    Example: `Version.isGreater(version, '1.0')`
- `Platform`: a platform helper that provides methods to check the type of the currently running Nuxeo Platform (name, version etc.).
    Examples: `Platform.matches("dm-5.3.2")`, `Platform.isTomcat()` etc.
- `Pattern Variables`: as we seen variable used in file pattern matching are inserted into the EL context.
- custom variables provided by each command. Each command should document which variables are provided.

## Command Validation

Before running an installation the install commands are first validated, that means each command is tested in turn to see whether or not it could be successfully executed. All potential failures are recorded into a validation status and displayed to the user. If blocking failures are discovered the install will be aborted, otherwise if only _warnings_ are discovered the user is asked whether or not to continue the install.

For example, a validation failure can occurs if a command is trying to upgrade a JAR that is newer than the one proposed by the command.

When validation failures occurs the installation is aborted - so nothing should be rollbacked since nothing was modified on the target platform. Of course even is the validation is successful the install process may fail. In that case an automatic rollback of all modification is done. Lets see now how the rollback is managed.

## Command Rollback

Each command executed during an install is returning an opposite command if successful. The opposite command is designed to undo any modification done by the originating command. The originating command is&nbsp;responsible&nbsp;to return an exact opposite command. All built-ins commands are tested and are safe in generating the right rollback is needed to undo the command modifications. When you are contributing new commands you must ensure the rollback is done right.

As an example of describing how a command should generate its rollback command let's the built-in copy command. To simplify let's say the update command has a `file` parameter and a `todir` parameter.
When the `update` command (`update1`) is executed it will backup the  file present in `todir` if any into let say `backup_file` and then update the `file` over the previous one if any or just copy it. This command will generate a rollback command (`rollback2`) that will have the following arguments:

- rollback2.key = key of file, generally its location in nuxeo server
- rollback2.pkgId = package which has installed the new version
- rollback2.version = version of file

This is the approach taken by the update command. You can take any approach you want but in any case the command you implement must provide a safe rollback command.

Here is a short pseudo-code of how the commands are executed (and rollback done if needed)

```
// execute each command in the install.xml file
for (Command cmd : commands) {
  Command rollbackCmd = cmd.execute(task, userPrefs);
  if (rollbackCmd != null) {
     log.addFirst(rollBackCommand);
  }
}
```

So, each time a command is executed the opposite command is logged into an command list named `log.`

If any error occurs during the execution of a command the logged commands are executed to do the rollback. If all the commands are successfully executed then the command log is persisted to a file named `uninstall.xml`. Of course this is the generated uninstall script.

## The Uninstall Script

Let see now what is the uninstall script generated by the install file described above. We will show only the first rollback command (since the others are similar):

```xml
<uninstall>
  <rollback key="nxserver/lib/myplugin" pkgId="nuxeo-package-1.0.0" version="11.10"/>
  ...
</uninstall>
```

You can see the uninstall script doesn't contain variables, neither guard attributes. This is normal since at install time all variables were resolved and replaced with their actual values. Also guard attributes are not useful at uninstall time since the install&nbsp;succeeded. The commands ignored at install time (due to a matching `ignore` attribute) will obviously not be recorded in the uninstall file.

## Implementing a Command

The built-ins commands provided by the Nuxeo Platform may not cover all of the install use cases. In that case you must implement your own command.

To implement your own command you must extend the [`AbstractCommand` class](http://community.nuxeo.com/api/nuxeo/8.2/javadoc/org/nuxeo/connect/update/task/standalone/commands/AbstractCommand.html) from org.nuxeo.connect.update.task.standalone.[commands:nuxeo-connect-standalone](http://commandsnuxeo-connect-standalone) (nuxeo-connect-standalone in [https://github.com/nuxeo/nuxeo-runtime/](https://github.com/nuxeo/nuxeo-runtime/)).

Here is a simple example (the Delete command):

```
public class Delete extends AbstractCommand {

    public final static String ID = "delete";

    protected File file; // the file to restore

    protected String md5;

    public Delete() {
        super(ID);
    }

    public Delete(File file, String md5) {
        super(ID);
        this.file = file;
        this.md5 = md5;
    }

    protected void doValidate(Task task, ValidationStatus status) {
        if (file == null) {
            status.addError("Invalid delete syntax: No file specified");
        }
    }

    protected Command doRun(Task task, Map<String, String> prefs)
            throws PackageException {
        try {
            File bak = IOUtils.backup(task.getPackage(), file);
            file.delete();
            return new Copy(bak, file, md5, false);
        } catch (Exception e) {
            throw new PackageException(
                    "Failed to create backup when deleting: " + file.getName());
        }
    }

    public void readFrom(Element element) throws PackageException {
        String v = element.getAttribute("file");
        if (v.length() > 0) {
            FileRef ref = FileRef.newFileRef(v);
            ref.fillPatternVariables(guardVars);
            file = ref.getFile();
            guardVars.put("file", file);
            if (file.isDirectory()) {
                throw new PackageException("Cannot delete directories: "
                        + file.getName());
            }
        }
        v = element.getAttribute("md5");
        if (v.length() > 0) {
            md5 = v;
        }
    }

    public void writeTo(XmlWriter writer) {
        writer.start(ID);
        if (file != null) {
            writer.attr("file", file.getAbsolutePath());
        }
        if (md5 != null) {
            writer.attr("md5", md5);
        }
        writer.end();
    }
}

```

You can see in that example there are four main methods to implement:

- Two are the XML serialization of the command,
- one is the command validation (should check if all required attributes are set and the command is consistent),
- and the last one is the execution itself which should return a valid rollback command.

To deploy your command you should put your class into the package (the command can be a Groovy class or a Java one). Then to invoke it just use the full class name of your command as the element name in the XML. For example if the command file is `commands/MyCommand.class` (relative to your package root) you can just use the following XML code:

```xml
<commands.MyCommand ... />

```

## Built-in Commands

This is a list of all commands provided by the Nuxeo Platform:

### Update

Updates a JAR file.

Usage:

```xml
<update file="file_to_copy" tofile="destination"/>
```

Or

```xml
<update file="file_to_copy" todir="destination_dir"/>
```

A boolean `upgradeOnly` attribute (false by default) can be specified to avoid creating the JAR if there is no previously-existing one.

A boolean `allowDowngrade` attribute (false by default) can be specified to avoid overwriting a JAR whose version is lower than the new one.

### Copy

Copies a file to a given destination. This command can be used to add new files or to upgrade existing files to a new version.

Usage:

```xml
<copy file="file_to_copy" tofile="destination"/>
```

Or

```xml
<copy file="file_to_copy" todir="destination_dir"/>
```

There is also a boolean `overwrite` attribute available than can be used to force command failure when overwrite is false and the destination file exists. Overwrite is by default false.

The `tofile` attribute will be injected as a File object in the EL context used by guards.

{{#> callout type='note' }}

The destination can be a file pattern.

{{/callout}}

### Parametrized Copy

Same as copy but the content of the copied file is generated using variable expansion based on user preferences (variables defined by the user during the install wizard).

Usage:

```xml
<pcopy file="file_to_copy_and_transform" tofile="destination"/>
```

Or

```xml
<pcopy file="file_to_copy_and_transform" todir="destination_dir"/>
```

### Delete

Deletes a file. This command takes one argument which is the absolute path of the file to delete. The argument name is `file.`

An optional parameter generated for the uninstaller is the `md5` one which will be used to avoid&nbsp;inconsistent&nbsp;uninstalls.

{{#> callout type='note' }}

Directories delete are not allowed.

{{/callout}}

Usage:

```xml
<delete file="file_to_delete"/>
```

### Deploy

Starts an OSGi bundle into Nuxeo Runtime. Needed when deploying a new bundle to the Nuxeo Platform without restarting the server. Note that not all bundles can be deployed without restarting.

This command takes one argument which is the absolute path of the bundle to deploy. The argument name is `file.`

Usage:

```xml
<deploy file="file_to_deploy"/>
```

### Undeploy

Stops an OSGi bundle that is deployed in the Nuxeo Runtime. Needed before removing a bundle from Nuxeo without restarting the server.

This command takes one argument which is the absolute path of the bundle to undeploy. The argument name is `file.`

Usage:

```xml
<undeploy file="file_to_undeploy"/>
```
