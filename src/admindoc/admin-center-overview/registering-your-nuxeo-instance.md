---
title: Registering your Nuxeo Instance
labels:
    - update-center
    - admin-center
toc: true
confluence:
    ajs-parent-page-id: '16810003'
    ajs-parent-page-title: Admin Center overview
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Registering+your+Nuxeo+Instance
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Registering+your+Nuxeo+Instance'
    page_id: '16810004'
    shortlink: FIAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/FIAAAQ'
    source_link: /display/ADMINDOC58/Registering+your+Nuxeo+Instance
history:
    - 
        author: Solen Guitter
        date: '2016-03-31 15:22'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-02-10 18:22'
        message: Updated offline registration steps and screenshots
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-16 16:52'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-12-14 12:00'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-12-11 14:33'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-12-11 14:32'
        message: Updated offline registration steps with latest Connect UI
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-12-07 18:04'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-12-07 18:04'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-09-14 09:48'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-09-14 09:48'
        message: Updated links
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-04-20 18:14'
        message: ''
        version: '7'
    - 
        author: Benjamin Jalon
        date: '2012-01-20 10:02'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-11-15 10:13'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-11-08 18:08'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-11-05 16:57'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-11-05 16:45'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-11-05 16:44'
        message: ''
        version: '1'

---
## How to Register

To be able to register, you need to have a [Nuxeo Connect account](#connect-account-creation).

Registration can be done during the installation steps, using the [configuration wizard]({{page page='setup#setup-wizard'}}) or at anytime later, through the Admin Center. Registration doesn't require an Internet access. If your server cannot connect to the Internet, follow the [offline registration steps](#offline-registration). Otherwise, follow the [online registration steps](#online-registration).

For development instances on which you may need to remove your data, you may need to [re-register your instance](#re-registration).

### Creating your Nuxeo Connect Account {{> anchor 'connect-account-creation'}}

If you already have an account on Nuxeo Connect, either because you are a Nuxeo customer, or because you created a trial account, you can continue to the [undefined](#registering-online) step. If not, follow those steps to get credentials to the Nuxeo Connect portal.

**To subscribe to a Connect trial:**

1.  Go to the [Connect trial registration form](https://connect.nuxeo.com/nuxeo/site/connect/trial/form).
2.  Fill in the form. Provide a valid email address or else registration will not be completed.
3.  Confirm registration by clicking on the link sent to the email address in the previous step.
4.  If it is not already done, download the last published version of the [Nuxeo Platform](http://www.nuxeo.com/downloads).

### Registering Online {{> anchor 'online-registration'}}

1.  Start your Nuxeo instance and connect as an administrator (Administrator/Administrator by default).
2.  Click on the **Admin Center** tab.
3.  Click on the **Nuxeo Connect** left tab.
4.  Authenticate to Nuxeo Connect portal by giving your credentials.
5.  Choose which application is concerned among the ones your recorded in Nuxeo Connect.
6.  Give a description of your registration, like "Jolene's instance" and indicate if it is a development, qualification or production instance (just for our information).
7.  The registration process will end automatically, you can now browse the various tabs of the Update Center area, and set up addons from the [Nuxeo Marketplace](https://connect.nuxeo.com/nuxeo/site/marketplace) (see the [how to]({{page page='installing-a-new-package-on-your-instance'}})).

### Registering Offline {{> anchor 'offline-registration'}}

Offline registration can be used when the server doesn't connect to the Internet. It enables to remove the Connect registration footer.

**To register your instance for the first time:**

1.  On the offline server:

    1.  Start your Nuxeo instance and connect as an administrator (Administrator/Administrator by default).
    2.  Click on the **Admin Center** tab.
    3.  Click on the **Nuxeo Connect** left tab.
    4.  On the right part of the registration screen, get the **instance technical identifier** called CTID (ex:`Mac OS X-EbMKUsirT9WQszM5mDkaKAp=-BhnJsMDaabDHAQ0A300d6Q==`) and store it in a file so that you can connect to the Internet.
        ![]({{file name='AdminCenter-offline-registration.png'}} ?w=400,border=true)
2.  From the Internet-connected-computer:

    1.  Go to the [Nuxeo Connect portal](https://connect.nuxeo.com).
    2.  Click on the Connect application for which you want to register your Nuxeo Platform.
        ![]({{file name='Nuxeo-Connect-my-applications.png'}} ?w=350)
    3.  Put your mouse over the icon&nbsp;![]({{file name='tools.png'}}) and click **Add a new instance**.
        ![]({{file name='AdminCenter-offline-registration-2.png'}} ?w=450,border=true)
    4.  Fill in the registration form and submit it.
        The instance is registered. You are given an identifier (CLID) to validate registration from Nuxeo Admin Center.
    5.  Copy this identifier.
3.  On the offline server:
    In the Admin Center, fill in the instance description, paste the CLID from Nuxeo Connect and click on the **Register this instance** button.
    ![]({{file name='AdminCenter-offline-registration-3.png'}} ?w=400,border=true)
    The registration is approved and the registration summary is displayed. The Connect registration footer is not displayed anymore after you browse the application, although registration cannot be validated on the Connect server.
    ![]({{file name='AdminCenter-offline-registration-done.png'}} ?w=650,border=true)

## Re-Registering your Nuxeo Instance

{{> anchor 're-registration'}}If you have removed your data from your Nuxeo application, in case of a development instance, for example, you will need to register your instance again.

**To re-register your instance:**

1.  Log in to [Nuxeo Connect](http://connect.nuxeo.com).
2.  In the associated instances, click on your Nuxeo instances link.
    The page listing the associated instances for your project opens.
3.  Copy the Identifier of the instance you want to register (Identifier is of the form "fdedaf21-be00-412e-b0ab-f2394479d5f8--885dcf60-5a4a-46e8-a904-0123456789ab").
4.  In Nuxeo Admin Center, paste this identifier in the CLID field, fill in the instance description and click on the **Register this instance** button.
    ![]({{file name='AdminCenter-offline-registration-3.png'}} ?w=450,border=true)
    Your instance is registered again and the registration summary is displayed.
    ![]({{file name='AdminCenter-registration-status.png'}} ?w=450,border=true)