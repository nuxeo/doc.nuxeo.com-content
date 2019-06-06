---
title: How to deactivate the NoteImporter
description: How to deactivate the NoteImporter
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - bundle
    - configuration
    - import

---
# How to deactivate the NoteImporter?
## Problem
When importing a MindMap (e.g. Freemind files ending with the extension *“.mm”*), Nuxeo by default imports these files as text files and adds the extension “.txt”, so that Nuxeo Drive cannot synchronize the ”.mm“ files.  
How to synchronize MindMaps using Nuxeo Drive?
## Solution
You will have to deactivate the NoteImporter, for instance.
This can be done using a bundle: myFileManagerConfig.jar containing the files:

    META-INF/MANIFEST.MF
    OSGI-INF/myFileManagerConfig.xml

where MANIFEST.MF reads:

    Manifest-Version: 1.0
    Archiver-Version: Plexus Archiver
    Created-By: Apache Maven
    Built-By: hudson
    Build-Jdk: 1.8.0_60
    Bundle-ManifestVersion: 1
    Bundle-Version: 1.0.0
    Bundle-Name: My FileManager Config file
    Bundle-SymbolicName: org.nuxeo.ecm.platform.filemanager.service;singleton:=true
    Nuxeo-Component: OSGI-INF/myFileManagerConfig.xml

and myFileManagerConfig.xml reads:

    <component name="My_FileManager_No_NOTE_Config">
    <require>org.nuxeo.ecm.platform.filemanager.service.FileManagerService.Plugins</require>
      <extension
  target="org.nuxeo.ecm.platform.filemanager.service.FileManagerService"
  point="plugins">
        <plugin name="NoteImporter" enabled="false"
        class="org.nuxeo.ecm.platform.filemanager.service.extension.NoteImporter"
        order="10" />
      </extension>
    </component>

Then **jar cvfm myFileManagerConfig.jar META-INF/MANIFEST.MF OSGI-INF/myFileManagerConfig.xml**  
Then drop this **myFileManagerConfig.jar** file under **NUXEO_HOME/nxserver/bundles** and restart Nuxeo.  
Then, Nuxeo Drive can synchronize the “.mm” files seamlessly.

In adapting the xml file, you can also change the order of the importers between the DefaultFileImporter (default order 100) and the NoteImporter (default order = 10)


2019-06-01T17:37:25.742Z
## (c) Nuxeo Support Knowledge Base Outline 2019
