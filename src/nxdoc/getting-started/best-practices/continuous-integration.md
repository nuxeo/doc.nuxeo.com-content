---
title: Continuous Integration (CI) For a Nuxeo Project
review:
    comment: ''
    date: '2018-08-03'
    status: ok
toc: true
tree_item_index: 910
---

Setting up continuous integration on your project is a good practice to prevent regressions and potential bugs. The earlier you detect a problem, the easier it is to fix it.

{{#> callout type='info'}}
This page intends to give guidelines on CI chain setup for your project. It won't explain how to do it step by step: too many factors may vary to explain this in a generic way.
{{/callout}}

# Define Expectations
Setting up a CI boils down to defining what you want to test: depending on the scope, frequency, project size and other factors the setup might vary into whole different levels. Here are a few options on what you could cover and tools that match the job.

# Recommended Tools
Below are some of the tools Nuxeo usually uses and is familiar with.

## Base (required)
These tools are required for your CI chain to work, and will also be used to run your unit tests.

- JDK 8: run-time container
- Jenkins: or a similar automation server software
- Maven 3: Jenkins slave that runs the build

## Functional Testing
- Selenium WebDriver, Cucumber: automated testing tools that integrate with Maven

## Performance Testing
- Gatling: benchmark testing tools that integrate with Maven

{{#> callout type='tip'}}
Additional tools can possibly be added for code coverage, code quality testing and so on. Feel free to take a look at [how Nuxeo leverages CI]({{page space="corg" page="quality-assurance-and-continuous-integration"}}) for inspiration.
{{/callout}}

# Infrastructure Sizing
Once you know what scope you want for your test coverage, our suggestion would be to build a first job and measure impacts on:
- Bandwith
- Disk space
- Memory
- Build duration

From there, ask yourself the following questions:
- How many branches do you want to put CI under?
- How many commits happen per day?
- How many developers will you have?

With these numbers, you can get a rough estimate of your needs / costs induced and estimate this against the developers expectations and your quality control requirements.

# Q/A
## Can I Put Studio Configuration Under CI?
Yes you can:
- [Nuxeo CLI helps testing Studio code]({{page page="nuxeo-cli"}}#studio)
- [Nuxeo Studio integrates with Maven]({{page space="studio" page="maven-integration"}}).

{{#> callout type='note'}}
Nuxeo Studio does not provide a hook mechanism that would allow you to trigger CI chain upon a commit. If you like this idea, feel free to <a href="https://app.prodpad.com/ideas/aed8f0f0-9724-11e8-8079-af2a5cff5247/canvas" target="_blank">vote for it</a>!
{{/callout}}

## Can I Automate Studio Releases?
Yes you can: once your tests pass, it is easy to automate the creation of a new Studio release thanks to [Studio's releases REST API]({{page space="studio" page="how-to-tag-or-release-your-nuxeo-studio-project"}}#with-the-rest-api).
