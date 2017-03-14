---
title: How to Speed up the Android Emulator by up to 400%
description: Blog posts to discover how to speed up the Android Emulator
review:
    comment: ''
    date: ''
    status: ok
tree_item_index: 100
toc: true
---

I have been working on an Android SDK for the [Nuxeo Content Management Platform](https://www.nuxeo.com/products/content-management-platform/) in the past months and have worked more on it lately as we are on our way to making the first official release of this SDK. I wanted to share some feedback on a practical side of Android development related to test and emulation. After a few days of development, I found out that Android Emulator was a pain because it is far too slow.

First of all it is slow to boot, but even if you use Snapshot to speed up the start, the execution is also very slow, especially when using the debug mode.

Tweaking Qemu parameters did not help significantly, the emulator remains too slow, that's probably why most Android developers seem to use a real device attached via USB.

Anyway, I wanted to find a solution, also because I want to be able to do a demonstration of an application via a beamer and don't want to do the demonstration of a slow application.

## Emulation vs. Simulation

I am not an Apple developer, but it looks like the iPhone simulator does not have the same issue as the Android Emulator.

One of the reasons for this is that it does not run a "real emulator", because the CPU instruction used by the iPhone simulator is the same as the one used by the host (x86).

On the contrary, Android Emulator emulates a real ARM processor on top of an x86 processor. This is a lot of overhead.

At least for quick test and demonstration purposes, I don't need to emulate an ARM processor, I just need to be able to run Android and my application.

## Android_x86
Fortunately there is an open source project porting Android OS to x86 CPUs: [http://www.android-x86.org/](http://www.android-x86.org/).

The project provides several images, and even if they logically cannot keep up to date with all the Android SDK releases, they provide an image for Android 2.3 that is an interesting target.

## Setting up Android_x86 with VirtualBox

The first step is to download an ISO image of Android_x86.
I used <code>android-x86-2.3-RC1-eeepc.iso</code> that can be downloaded from <a href="http://www.android-x86.org/download">http://www.android-x86.org/download</a>.

The next step is to create a Virtual Machine to be able to run this image.

I used Virtual Box for that, but from what I read, QEmu can be used too.

So in Virtual Box, you have to create a new machine:
- target OS: choose Linux
- target OS version: others
- I used 1GB for RAM and 1 CPU (and left the other options at default)
- add a new hard drive: VDI drive, dynamically sized, 512 Mio
- on the storage add a CDROM pointing to the iso image you just downloaded.

On the boot menu select install to hard disk.

During the set up, you will have to:
- create a new partition
- format it to ext3
- select this partition for Android installation

Once set up is completed:
- shutdown the VM
- remove the CDROM device pointing to ISO (in VirtualBox configuration dialog).

Boot the VM; you should now have a running Android x86 image.

But since it is by default configured for an Eee PC, this is not ideal to test applications targeting a smart phone.

We will now change the configuration to match a phone screen.

Shutdown the VM and VirtualBox.

The first step is to define custom resolution modes. I defined 3 modes:
```
VBoxManage setextradata "Android2.3" "CustomVideoMode1" "320x480x16"
VBoxManage setextradata "Android2.3" "CustomVideoMode2" "640x960x16"
VBoxManage setextradata "Android2.3" "CustomVideoMode3" "480x720x16"
```
where "Android2.3" is the name of the VM in VirtualBox.

Now that we have declared new modes, we need to use them. For that we need to change the kernel parameters.

In order to do so, you need to restart the VM and on the boot menu choose the <strong>Debug mode</strong> so that Android boots in command line.

Start the VM.

Once started, we will remount the boot partition in read/write so that we can change the Grub configuration.
`mount -o remount,rw /mnt`
Then you can edit the `menu.lst` file.
`vi /mnt/grub/menu.lst`
Then duplicate the first menu entry (3 lines) and then edit the kernel parameters
(the first "title" entry and two following lines.)

Default parameters are:
```
quiet root=/dev/ram0 androidboot_hardware=eeepc acpi_sleep=s3_bios,s3_mode DPI=240 SRC=/android-2.3-RC1
```
parameters I used:
```
quiet root=/dev/ram0 androidboot_hardware=generic_x86 acpi_sleep=s3_bios,s3_mode DPI=240 UVESA_MODE=480x720 SRC=/android-2.3-RC1
```
Set what you want for the title.

If you want to be able to select the resolution at boot time, you can also use:
```
quiet root=/dev/ram0 androidboot_hardware=generic_x86 acpi_sleep=s3_bios,s3_mode vga=ask SRC=/android-2.3-RC1
```

Save your `menu.lst` (:wq) and reboot the VM using the VirtualBox menu.

You should now be able to start an Android VM that looks like a phone.

Quick tips for using the VM:
- if you don't see the mouse on the Android screen, use the VirtualBox menu to disable mouse integration (Host key + I)
- the "Windows Key" corresponds to the Android Home button
- Esc corresponds to the Android back button
- F2 corresponds to the Android menu button
- F3 corresponds to the Android search button
- Alt+F1 =&gt; switch to console mode
- Alt+F7 =&gt; switch to GUI mode

## Connecting the Android x86 VM to AVD and Eclipse
The goal is to be able to use the new VM from Eclipse using AVD to test and debug your app.
For this to work, you need the network config to allow connection between the host (where you run Eclipse) and the VM.
For that, inside VirtualBox you have several options in the Network settings:
- use Bridge mode: it will work but may require the presence of a DHCP server on the host
- host only network: uses an internal network between the VM and the host; this is the simplest solution.
  Once you have setup the network, restart the VM and go to command line mode (Alt+F1), and type:
  `netcfg`
  It will output the current IP of the VM.
  Typically, you will have something like 192.168.56.101 for the VM and the host will be bound to 192.168.56.1.

On the host, open a command line and cd into the android platform-tools directory:
`./adb connect 192.168.56.101`
This will register your VM as a new device.
You can now, directly from Eclipse, run and debug your application in the Android x86 VM.

As you will see, the speed improvement is very very significant:
- VM startup takes about 2s rather than 30s
- Application run and debug is very fast (no lag like when using the ARM emulator).

## Adding a SD card
You can use the documentation provided by [http://www.android-x86.org/documents/sdcardhowto](http://www.android-x86.org/documents/sdcardhowto).

### Using a file to fake a SD card
From the Android command line:
```
dd if=/dev/zero of=/data/sdcard.img bs=1024 count=65536 (64MB image)
losetup /dev/block/loop7 /data/sdcard.img
newfs_msdos /dev/block/loop7
```
Then restart the VM in debug mode, re-mount the partition in RW mode and edit `menu.lst` to add one parameter to the kernel:
`SDCARD=/data/sdcard.img`

### Using a separated partition
This option requires a little more work.

You first have to create a new hard drive in VirtualBox and attach it to the VM.

Now start your VM in debug mode.
Use fdisk to create a new partition.
Once the partition is created, you have to format it:
`newfs_msdos /dev/sdb1`
Now edit the `menu.lst` file to add the parameter:
`SDCARD=sdb1`

## Feedback on using Android_x86 vm as a testing environment
### Usage
So far, the x86 VM works as expected and outside of the speed I did not notice any real difference.
All the Android projects have deployed correctly. Android API Sample project runs ok outside of the NDK.

The only visible point is that the Gallery app (Cooliris) is broken, I tested with a nightly build image, and it works a little bit better, but it's still broken.

Another issue is that in about 10% of the cases, the VM does not boot and you have to reset the VM. Since boot is very fast this is not a pain, so I did not investigate further.

### Speed
The difference of speed is really visible and significant. Here are some figures to give an idea of the speed improvements:
<table border="0" rules="NONE" cellspacing="0">
<tbody>
<tr>
<td align="LEFT" width="236" height="17"></td>
<td style="border: 1px solid #000000;" colspan="2" align="CENTER" valign="MIDDLE" width="171"><b>QEmu + Android ARM (2.3.3)</b></td>
<td style="border: 1px solid #000000;" colspan="2" align="CENTER" valign="MIDDLE" width="171"><b>VirtualBox + Android X86 (2.3.5)</b></td>
<td style="border: 1px solid #000000;" colspan="2" align="CENTER" valign="MIDDLE" width="171"><b>Nexus One phone (2.3.6)</b></td>
</tr>
<tr>
<td align="LEFT" height="17"></td>
<td style="border: 1px solid #000000;" align="CENTER"><i>Result</i></td>
<td style="border: 1px solid #000000;" align="CENTER"><i>Speed ratio</i></td>
<td style="border: 1px solid #000000;" align="CENTER"><i>Result</i></td>
<td style="border: 1px solid #000000;" align="CENTER"><i>Speed ratio</i></td>
<td style="border: 1px solid #000000;" align="CENTER"><i>Result</i></td>
<td style="border-top: 1px solid #000000; border-right: 1px solid #000000;" align="LEFT"></td>
</tr>
<tr>
<td style="border: 1px solid #000000;" align="LEFT" height="17">Boot
(in seconds, lower is better)</td>
<td style="border-left: 1px solid #000000;" align="CENTER">55</td>
<td style="border-right: 1px solid #000000;" align="CENTER">109%</td>
<td style="border-left: 1px solid #000000;" align="CENTER">5</td>
<td style="border-right: 1px solid #000000;" align="CENTER">1200%</td>
<td style="border-left: 1px solid #000000;" align="CENTER">60</td>
<td style="border-right: 1px solid #000000;" align="LEFT"></td>
</tr>
<tr>
<td style="border: 1px solid #000000;" align="LEFT" height="17">Android API GUI test
(in seconds, lower is better)</td>
<td style="border-left: 1px solid #000000;" align="CENTER">35</td>
<td style="border-right: 1px solid #000000;" align="CENTER">71%</td>
<td style="border-left: 1px solid #000000;" align="CENTER">20</td>
<td style="border-right: 1px solid #000000;" align="CENTER">125%</td>
<td style="border-left: 1px solid #000000;" align="CENTER">25</td>
<td style="border-right: 1px solid #000000;" align="LEFT"></td>
</tr>
<tr>
<td style="border: 1px solid #000000;" align="LEFT" height="17">Android API OpenGL Sprite test
(in ms, lower is better)</td>
<td style="border-left: 1px solid #000000;" align="CENTER">65</td>
<td style="border-right: 1px solid #000000;" align="CENTER">28%</td>
<td style="border-left: 1px solid #000000;" align="CENTER">8</td>
<td style="border-right: 1px solid #000000;" align="CENTER">225%</td>
<td style="border-left: 1px solid #000000;" align="CENTER">18</td>
<td style="border-right: 1px solid #000000;" align="LEFT"></td>
</tr>
<tr>
<td style="border: 1px solid #000000;" align="LEFT" height="17">BrowserMark
(index, higher is better)</td>
<td style="border-left: 1px solid #000000;" align="CENTER">5500</td>
<td style="border-right: 1px solid #000000;" align="CENTER">15%</td>
<td style="border-left: 1px solid #000000;" align="CENTER">165000</td>
<td style="border-right: 1px solid #000000;" align="CENTER">446%</td>
<td style="border-left: 1px solid #000000;" align="CENTER">37000</td>
<td style="border-right: 1px solid #000000;" align="LEFT"></td>
</tr>
<tr>
<td style="border: 1px solid #000000;" align="LEFT" height="17">Nuxeo SDK test
(in seconds, lower is better)</td>
<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000;" align="CENTER">26</td>
<td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;" align="CENTER">58%</td>
<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000;" align="CENTER">14</td>
<td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;" align="CENTER">107%</td>
<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000;" align="CENTER">15</td>
<td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;" align="LEFT"></td>
</tr>
<tr>
<td align="LEFT" height="17"></td>
<td align="LEFT"></td>
<td align="LEFT"></td>
<td align="LEFT"></td>
<td align="LEFT"></td>
<td align="LEFT"></td>
<td align="LEFT"></td>
</tr>
<tr>
<td align="LEFT" height="17"></td>
<td align="LEFT"></td>
<td align="RIGHT">43%</td>
<td align="LEFT"></td>
<td align="RIGHT">226%</td>
<td align="LEFT"></td>
<td align="LEFT"></td>
</tr>
</tbody>
</table>
Android ARM emulator is about half the speed of a Nexus One, whereas the Android x86 VM is about twice as fast.

&nbsp;
