---
title: Continuous Integration (CI) For a Nuxeo Project
description: Setting up continuous integration on your project is a good practice to prevent regressions and potential bugs. The earlier you detect a problem, the easier to fix it.
review:
    comment: ''
    date: '2018-08-03'
    status: ok
toc: true
tree_item_index: 50
---
{{! excerpt}}
Setting up continuous integration on your project is a good practice to prevent regressions and potential bugs. The earlier you detect a problem, the easier it is to fix it.
{{! /excerpt}}

{{#> callout type='info' }}
This page intends to give guidelines on bootstrapping CI chain for your project. It won't explain how to do it step by step: too many factors may vary to explain this in a generic way.
{{/callout}}

{{#> callout type='info'  heading='Hyland University'}}
Watch the related courses on Hyland University:</br>
&#8226; [Expert Session - Build a custom Nuxeo instance with Docker, Jenkins and Kubernetes](https://university.hyland.com/courses/e4069)</br>
&#8226; [Expert Session - Nuxeo Software Factory](https://university.hyland.com/courses/e4156)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/ci-university.png
    name: ci-university.png
    server#screenshot#up_to_date
--}}
![ci-university.png](/nx_assets/94087de0-3b91-4ca3-8afe-02c8a2a2bf85.png ?w=450,border=true)
{{/callout}}

## Define Expectations

The architecture to set up depends on:
- what you want to automate (build, test, verify)
- when (on commit, by night, on demand, on release)
- how

Matters the size of the code base, the number of developers, the build frequency, the development flow etc.

## Recommended Tools

Once you know your expectations, you can get a better idea of the tooling it will require.

Doing CI consists of automating manual tasks, and implicitly involves leveraging the ability to add more and more automated tasks such as
- Quality Assurance tooling
- Continuous Delivery (e.g. deploying artifacts to a Nexus / artifactory)

Base setup is an environment satisfying the "what you want to automate" requirement, i.e. "build" or "test" requirements. Such an environment is provided to the CI system as a Docker image (or composition), and leveraged using a Jenkins like automation tool.

Below are some of the tools Nuxeo usually uses and is familiar with.

### Unit Tests

- JDK 8: run-time container
- Maven 3: Jenkins slave that runs the build

### Functional Testing

- Selenium WebDriver, Cucumber: automated testing tools that integrate with Maven

### Performance Testing

- Gatling: benchmark testing tools that integrate with Maven

{{#> callout type='tip' }}
Additional tools can possibly be added for code coverage, code quality testing, continuous delivery and so on. Feel free to take a look at [how Nuxeo leverages CI]({{page space="corg" page="quality-assurance-and-continuous-integration"}}) for inspiration.
{{/callout}}

## Infrastructure Sizing

To get a size estimation, we suggest to build a first job and measure impacts/footprint on:
- Network bandwidth
- Disk usage: space, IO, speed
- Memory
- Build duration

From there, ask yourself the following questions:
- How many branches do you want to put CI under?
- How many commits happen per day?
- How many developers will you have?

With these numbers, you can get a rough estimate of your needs/ costs induced and estimate this against the developers' expectations and your quality control requirements. Setting up a scalable infrastructure helps to start small, then adapt the sizing as needs evolve.

## Q/A

### Can I Put Studio Configuration Under CI?

Yes you can:
- [Nuxeo CLI helps testing Studio code]({{page page="nuxeo-cli"}}#studio)
- [Nuxeo Studio integrates with Maven]({{page space="studio" page="maven-integration"}}).

Studio configuration is exposed as a build resource (Maven artifact or Nuxeo Package).

### Can I Automate Studio Releases?

Yes you can: once your tests pass, it is easy to automate the creation of a new Studio release thanks to [Studio's releases REST API]({{page space="studio" page="how-to-tag-or-release-your-nuxeo-studio-project"}}#with-the-rest-api).
