---
title: Packaging examples
review:
    comment: ''
    date: '2019-03-26'
    status: ok
labels:
    - packaging-component
    - marketplace
    - package
    - sample
    - assembly
    - nxr
    - lts2019-ok
toc: true
confluence:
    ajs-parent-page-id: '3342859'
    ajs-parent-page-title: Creating Nuxeo Packages
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Packaging+examples
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Packaging+examples'
    page_id: '11044631'
    shortlink: F4eo
    shortlink_source: 'https://doc.nuxeo.com/x/F4eo'
    source_link: /display/NXDOC/Packaging+examples
history:
    -
        author: Solen Guitter
        date: '2015-11-30 09:20'
        message: 'XDOC-658: Marketplace packages are now called Nuxeo Package'
        version: '11'
    -
        author: Solen Guitter
        date: '2015-10-15 12:09'
        message: Add TOC
        version: '10'
    -
        author: Julien Carsique
        date: '2015-10-13 14:15'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2015-10-13 13:59'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2015-04-08 14:50'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2013-02-08 14:40'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2012-09-10 19:50'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Julien Carsique
        date: '2012-09-10 19:50'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2012-09-10 19:01'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2012-09-10 19:00'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2012-09-10 18:14'
        message: ''
        version: '1'
---

Automating the packaging process allows to setup continuous integration on the Nuxeo Package build, its install and the features it provides.

There are multiple ways to build a Nuxeo Package. Focusing on those using the [Ant Assembly Maven Plugin](https://github.com/nuxeo/ant-assembly-maven-plugin), you can find below the three different methods depending on the constraints and objectives, from the better to the quicker method:

- [NXR Method](#nxr-method-recommended)
- [No-NXR Method](#no-nxr-method)
- [Explicit Method](#explicit-method)

See [Nuxeo Marketplace Sample](https://github.com/nuxeo/nuxeo-marketplace-sample/) for downloading a project with sample architectures, implementing the three below build methods plus the required modules for testing those Nuxeo Packages with Selenium, WebDriver and Gatling.

Applied to the sample project, here are the results from those three methods. Look at the differences in the content, size and build time. The network bandwidth is not evaluated but it also varies respectively from the most to the less, proportionally to the build time.

## NXR Method - Recommended

The **recommended** method is to build an NXR corresponding to the wanted result after the package install. Then we operate a comparison between that product and a reference one (usually the Nuxeo CAP), and we finally generate the Nuxeo Package which will perform the wanted install.

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>PROS</th>
        <th>CONS</th>
      </tr>
      <tr>
        <td>
          <ul>
            <li>Always up-to-date in regards to the dependencies and requirements (other bundles and third-party libraries).</li>
						<li>Maven is aware of the project dependencies and can **properly order the build** in a multi-module project.</li>
						<li>**No maintenance**: changes on transitive dependencies won't break the assembly, code is generic.</li>
            <li>Perfect size: the package contains the exact **necessary and sufficient** content.</li>
            <li>**Factorization**: the NXR can be attached to the reactor for being reused in another assembly.</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>The drawback is it takes some build time and has a dependency on a whole Nuxeo distribution.</li>
            <li>**Maximum build time**: the build performs more actions than the other methods and will consume more bandwidth.</li>
            <li>Writing requires Maven knowledge on concepts such as the GAV, the dependency graph, the dependency management, the artifact resolution.</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

4 directories, 6 files, 128KB. Build time: 11s.

```
    recommended/
    |-- install
    |   |-- artifacts-sample.properties
    |   |-- bundles
    |   |   `-- The sample project bundle.
    |   |-- templates
    |   |   `-- sample
    |   `-- test-artifacts-sample.properties
    |-- install.xml
    `-- package.xml
```

The `lib`&nbsp;directory is empty because all required third-parties are already included in the basic Nuxeo distribution. The `bundles` directory only contains the sample project bundle because all its dependencies are also already included in the basic distribution.

## No-NXR Method

That method is using the same principle for building the Nuxeo Package as for building an NXR, with no final optimization. It is an **acceptable compromise** between speed and quality.

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>PROS</th>
        <th>CONS</th>
      </tr>
      <tr>
        <td>
          <ul>
            <li>It is as much reliable regarding at the dependencies as the above recommended method.</li>
            <li>Maven is aware of the project dependencies and can **properly order the build** in a multi-module project.</li>
            <li>**No maintenance**: changes on transitive dependencies won't break the assembly, code is generic.</li>
            <li>**Moderate build time**: faster than the recommended method.</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>The drawback is since the solution is empiric, it will likely embed useless files and generate a bigger archive.</li>
            <li>Biggest size: the package contains the **necessary but also useless** content.</li>
            <li>Writing requires Maven knowledge on concepts such as the GAV, the dependency graph, the dependency management, the artifact resolution.</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

5 directories, 150 files, 33MB. Build time: 6s.

```
    nonxr/
    |-- install
    |   |-- artifacts-sample.properties
    |   |-- bundles
    |   |   `-- 46 bundles.
    |   |-- lib
    |   |   `-- 99 third-party libraries.
    |   |-- templates
    |   |   `-- sample
    |   `-- test-artifacts-sample.properties
    |-- install.xml
    `-- package.xml
```

Here, we are embedding a lot of bundles and libraries which are useless because already included in the basic Nuxeo distribution but that cannot be detected by the build process.

## Explicit Method

That latest method is explicitly listing everything that must be packaged. It is **not recommended** except for specific cases, quick solution or proof of concept.

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>PROS</th>
        <th>CONS</th>
      </tr>
      <tr>
        <td>
          <ul>
            <li>Easy method: very few code is required, you simply list what you want. It requires absolutely no Maven concept knowledge.</li>
            <li>**Minimum build time**: the build is really fast.</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>**Maintenance required**: you have to manually update the package assembly every time the dependencies change.</li>
            <li>You also risk not to see that an indirect dependency has changed and requires some changes on the third-party libraries.</li>
            <li>Managed size: the package contains exactly what you expect, with **no guarantee of results**.</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

5 directories, 8 files, 1.6MB. Build time: 3s.

```
    explicit/
    |-- install
    |   |-- bundles
    |   |   `-- The sample project bundle, explicitly listed.
    |   |-- lib
    |   |   `-- 4 third-party libraries, explicitly listed.
    |   `-- templates
    |       `-- sample
    |-- install.xml
    `-- package.xml
```

That solution builds a lighter package than the No-NXR method but we don't know if it will be missing some dependencies or not. The embedded bundles and libraries list must be manually maintained.
