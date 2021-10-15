---
title: Release Notes
description: Discover changes brought on the latest released versions
review:
    comment: ''
    date: '2021-10-15'
    status: ok
is_overview: true
labels:
    - nuxeo-insight
    - user-documentation
    - Release Notes
tree_item_index: 700
---

Discover upcoming and recent changes in Nuxeo Insight.
# Image Deduplication (m1)
## Version 1.5
**Expected scope**
* Index all you assets according with similarity
* API to find similar assets
* On upload, show duplicate assets
* On navigation to asset, show existing duplicated assets
* Run bulk action to perform an automation on every duplicate set

This first milestone on deduplication is expected to be release on **Q4 2021**.


# Human in the loop (m2)
## Version 1.4

### Strong JWT Asymmetric Authentication with secure DNS sources
Insight authentication was migrated to JWT Asymmetric Authentication. The code is available on [***nuxeo-ai-jwt-auth***](https://github.com/nuxeo/nuxeo-ai-jwt-auth) Github project.
This allows to authenticate Nuxeo Application users on Nuxeo Insight. 
Nuxeo Application instances are defined safe using their DNS so only users from instances on the secure list can authenticate.

### Multiple user support with seamless logging flow
Previously, you Insight integration would allow only one user. This would make it difficult for collaboration and to assign missions.
Now, Insight allows multiple users that will have their own account on Insight.
If a Nuxeo Application has access to Insight they will have a **Nuxeo Insight** menu item in their **User Setting**. 
To log into Insight, the user only has press the button "got to Nuxeo Insight" and the user will be automatically be logged into Insight with their insight user.

Missions can know be assigned to specific users or groups.

### Different user groups with optimized UX
Insight has now two group of users: Managers and Librarians.
**Managers** are responsible for creating and manage models and missions.
They can assign users to missions.

**Librarian** focus only on their assigned missions. Their dashboard lists the active missions with all the needed information so they know what's their priority to help out with reviews.
Librarians can only access missions that they are assigned to.

User group is defined on the Nuxeo Application by adding users either to **insight-managers** or **insight-librarians** groups.

### Brand new gamification experience
This version introduces gamification aspects to provide a better experience to Librarians.
Being the first milestone for gamification it brings:
* several metrics for the user like activity and participation on missions
* user *level* that will go up with user participation
* metrics on other users participation. Overall and within missions
* *mission outcomes* that shows the impact of the mission along with estimated content populated and hours saved

### New metrics to understand Missions impact and usage
Managers can also check missions metrics like their impact on mission perfomance and outcomes. 
Metrics are available for user participation on each mission.
Managers can also see any user profile to review their participation and activity.

## Several UX improvements and optimizations
We have provided continuous optimizations and UX improvements 

