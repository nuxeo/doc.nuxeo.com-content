---
title: Jenkins Pipeline usage
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '12913959'
    ajs-parent-page-title: Jenkins plugins
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Jenkins+Pipeline+usage
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Jenkins+Pipeline+usage'
    page_id: '31689953'
    shortlink: 4YzjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4YzjAQ'
    source_link: /display/CORG/Jenkins+Pipeline+usage
history:
    - 
        author: Solen Guitter
        date: '2016-09-09 08:10'
        message: ''
        version: '2'
    - 
        author: Pierre-Gildas Millon
        date: '2016-09-08 14:44'
        message: ''
        version: '1'

---
## Useful Links

Jenkins step generator (self-updated with installed plugins):

*   [https://qa.nuxeo.org/jenkins/pipeline-syntax/](https://qa.nuxeo.org/jenkins/pipeline-syntax/)
*   [https://qa.nuxeo.org/jenkins/pipeline-syntax/globals](https://qa.nuxeo.org/jenkins/pipeline-syntax/globals)

## Basic Sample

```
node('SLAVE') {
    def mvnHome = tool name: 'maven-3.3', type: 'hudson.tasks.Maven$MavenInstallation'
    try {
        timeout(30) {
            timestamps {
                stage 'checkout' {
                    git credentialsId: '4691426b-aa51-428b-901d-4e851ee37b01', url: 'git@github.com:nuxeo/nuxeo.git'
                }
                stage 'build' {
                    sh "${mvnHome}/bin/mvn clean install"
                }
            }
        }
    } catch(e) {
        currentBuild.result = "FAILURE"
        step([$class: 'ClaimPublisher'])
        throw e
    }
}
```

## Checkout

Setting up Additional Behaviours for the SCM checkout step of a Multibranch Pipeline doesn't work for now: 
- this is tracked by https://issues.jenkins-ci.org/browse/JENKINS-37658
- the workaround is https://support.cloudbees.com/hc/en-us/articles/226122247-How-to-Customize-Checkout-for-Pipeline-Multibranch

For instance, if you need to add the "Clean before checkout" behaviour, no point adding it in the job's configuration but apply the following change in your Jenkinsfile:

```
-                    checkout scm
+                    checkout([$class: 'GitSCM',
+                        branches: [[name: env.BRANCH_NAME]],
+                        extensions: [[$class: 'CleanBeforeCheckout']],
+                        userRemoteConfigs: [[url: 'git@github.com:nuxeo/nuxeo-mobile.git']]
+                    ])
```

## Maven build

```
node('SLAVE') {
    try {
        timestamps {
            def mvnHome = tool name: 'maven-3.3', type: 'hudson.tasks.Maven$MavenInstallation'
            sh "${mvnHome}/bin/mvn clean install"
        }
    } catch (e) {
        step([$class: 'ClaimPublisher'])
        throw e
    }
}
```

## GitHub Pull Request Status

```
try {
    step([$class: 'GitHubCommitStatusSetter', contextSource: [$class: 'ManuallyEnteredCommitContextSource', context: 'ci/qa.nuxeo.com'], statusResultSource: [$class: 'ConditionalStatusResultSource', results: [[$class: 'AnyBuildResult', message: 'Building on Nuxeo CI', state: 'PENDING']]]])
# ...
    step([$class: 'GitHubCommitStatusSetter', contextSource: [$class: 'ManuallyEnteredCommitContextSource', context: 'ci/qa.nuxeo.com'], statusResultSource: [$class: 'ConditionalStatusResultSource', results: [[$class: 'AnyBuildResult', message: 'Successfully built on Nuxeo CI', state: 'SUCCESS']]]])
} catch(e) {
    step([$class: 'GitHubCommitStatusSetter', contextSource: [$class: 'ManuallyEnteredCommitContextSource', context: 'ci/qa.nuxeo.com'], statusResultSource: [$class: 'ConditionalStatusResultSource', results: [[$class: 'AnyBuildResult', message: 'Failed to build on Nuxeo CI', state: 'FAILURE']]]])
	throw e
}
```

## Slack Usage

```
try {
    ....
    if('SUCCESS' != currentBuild.getPreviousBuild().getResult()) {
        slackSend channel: '#qa-alerts', color: 'good', message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} Back to normal (<${env.BUILD_URL}|Open>)", teamDomain: 'nuxeo', token: '...'
    }
} catch (e) {
    if('FAILURE' != currentBuild.getPreviousBuild().getResult()) {
        slackSend channel: '#qa-alerts', color: 'danger', message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} Failure (<${env.BUILD_URL}|Open>)", teamDomain: 'nuxeo', token: '...'
    }
    throw e
}
```

## JIRA Usage

At the time of this writing, the JIRA plugin is not fully compatible with pipelines.

The way to make it work is to use the `scm` variable exposed by the `git` step:

```
git poll: false, url: 'git@github.com:nuxeo/nuxeo.git'
step([$class: 'JiraIssueUpdater', issueSelector: [$class: 'DefaultIssueSelector'], scm: scm])
```

See https://github.com/jenkinsci/jira-plugin/blob/master/COMPATIBILITY.md#current-status

## Email Usage

At the time of this writing, the Email-ext plugin is not compatible with pipelines.

In order to send email, you have to fallback on the standard email step:

```
try {
    if('SUCCESS' != currentBuild.getPreviousBuild().getResult()) {
        mail (to: 'xxx@nuxeo.com', subject: "${env.JOB_NAME}' (${env.BUILD_NUMBER}) - Back to normal", body: "Build back to normal: ${env.BUILD_URL}.");
    } else {
        mail (to: 'xxx@nuxeo.com', subject: "${env.JOB_NAME}' (${env.BUILD_NUMBER}) - Back success", body: "Build success: ${env.BUILD_URL}.");
    }
} catch (e) {
    mail (to: 'xxx@nuxeo.com', subject: "${env.JOB_NAME}' (${env.BUILD_NUMBER}) - Failure!", body: "Build failed ${env.BUILD_URL}.");
}
```

## Docker Usage

### Pulling a Docker Image

```
docker.image('quay.io/nuxeo/nuxeo-qaimage-php').pull()
```

### Building an Image from a Dockerfile

```
docker.build('some-image-name', 'path/to/folder')
```

### Pushing a Built Image to Dockerpriv

```
image = docker.build 'some/path'

sh "docker tag ${image.id} dockerpriv.nuxeo.com:443/nuxeo/some_name:${env.BRANCH_NAME}"
sh "docker push dockerpriv.nuxeo.com:443/nuxeo/some_name:${env.BRANCH_NAME}"
```

### Running Steps inside a Docker Container

Both `docker.image('...')` and `docker.build('...')` return an image object. On such object you can make a `pull()` (see sample above), or create a container from the image and run something inside it:

```
docker.build('nuxeo-qaimage-php-client', 'docker/qa').inside {
    stage 'build'
    sh 'rm -rf vendor && composer install'
    stage 'tests'
    sh 'phpunit --bootstrap vendor/autoload.php tests/Nuxeo/Tests/Client/TestNuxeoClient.php'
}
```

## Various Tips

### Get Git Current Branch

```
def branch = sh(script: 'rev=$(git name-rev --name-only HEAD)', returnStdout: true)
```
