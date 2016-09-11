---
title: Jenkins Pipeline usage
review:
    comment: ''
    date: ''
    status: ok
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
    try {
        wrap([$class: 'TimestamperBuildWrapper']) {
            stage 'checkout'
            checkout([$class: 'GitSCM', branches: [[name: '*/master']], browser: [$class: 'GithubWeb', repoUrl: 'https://github.com/nuxeo/nuxeo-automation-php-client'], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'CloneOption', depth: 0, noTags: false, reference: '', shallow: false, timeout: 300]], submoduleCfg: [], userRemoteConfigs: [[url: 'git@github.com:nuxeo/nuxeo-automation-php-client.git']]])
            stage 'build'
            sh 'echo "Build something"'
            stage 'tests'
            sh 'echo "Run some tests"'
        }
    } catch (e) {
        currentBuild.result = 'FAILURE'
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

The way to make it work is to use the `scm` variable exposed by the `git` step :

```
git poll: false, url: 'git@github.com:nuxeo/nuxeo.git'
step([$class: 'JiraIssueUpdater', issueSelector: [$class: 'DefaultIssueSelector'], scm: scm])
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