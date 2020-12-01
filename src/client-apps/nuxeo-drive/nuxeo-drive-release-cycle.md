---
title: Release Cycle
description: Nuxeo Drive release cycle.
tree_item_index: 800
review:
  comment: 'release'
  date: '2020-11-17'
  status: ok
toc: true
---

The release cycle consists in providing two kinds of releases: GA (General Availability) and alpha.

**GA** releases use a beta -> release cycle every two weeks. When a beta comes out, it is being tested for two weeks.</br>
Meaning that we are ready to release a new GA version every month (if blocker bugs are found while testing, then we go for another beta).

**Alpha** are special releases that are stable enough to be used by everyone wanting to discover new features and get bug fixes.</br>
Those are generated every day and are tested to validate their stability.</br>
In fact, if an alpha breaks the auto-updater, it is a non-sense to let it go public.

## Versioning

Nuxeo Drive versioning is based on the [semantic versioning](https://semver.org/) one, with few tweaks.</br>
As it is a desktop application and not a module that anyone can use to create another application (even if that is possible though), there is no need to be too strict.

We are following those rules, those are focused on the end-user and not completely on the code.

Reminder of a version number: `a.b.c`. Where:

- `a`: major
- `b`: minor
- `c`: patch

Knowing that:

- `a` is incremented when a breaking change is introduced. </br>
  Typically dropping the HTTP support is such a breaking change.
- `b` is incremented when a new feature is introduced; if, and only if, it is backward-compatible.
- `c` is incremented when a bug is fixed or for any "trivial" modification that is not a new feature. The same rule applies as for `b` about the backward-compatibility.

Knowing those simple rules, users clearly know if upgrading their Nuxeo Drive version may be problematic or not. And even if a major version comes out, it does not mean one will have issues: checking the [release notes]({{page page='nuxeo-drive-release-notes'}}) will help taking a decision.

**Side notes:**

- Small or big changes happening into the documentation, the QA/CI or tests are not reflected in the version number: those changes do not impact end-users.
- If 3 features were added since the previous release, `b` will be incremented only once.
- If 5 minor changes were applied and 3 bugs fixed since the previous release, `c` will be incremented only once.
- Alpha release uses a fourth number, `d`: it reflects the commits count merged since the previous GA release.
