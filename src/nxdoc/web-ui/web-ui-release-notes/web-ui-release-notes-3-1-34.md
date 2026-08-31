---
title: Version 3.1.34
description: Discover what's new in Web UI 3.1.34.
review:
  comment: ''
  date: '2026-08-31'
  status: ok
toc: true
labels:
tree_item_index: 967
hidden: true
---


{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.34)

This release introduces an optional Hyland-branded experience for Web UI along with a wide range of navigation, browsing, search, workflow, accessibility, and reliability improvements.

### User Experience Improvements

#### Web UI Branding & Experience

Nuxeo Web UI now supports an optional Hyland-branded experience that aligns the user interface with Hyland design standards while preserving the existing Nuxeo experience by default. This update focuses on visual consistency and user experience improvements without impacting content, workflows, APIs, or existing customizations.

Highlights:

- New optional Hyland Light and Hyland Dark themes.
- Updated logos, colours, typography, and page styling.
- Refreshed navigation, headers, cards, icons, and visual elements.
- Improved visual consistency across Web UI.
- Existing Nuxeo themes remain the default experience unless explicitly enabled.

**When the flag is off**

The default experience remains classic Nuxeo. Customers see the classic Light(Default) and Dark themes and do not receive Hyland logos, Hyland palettes, Hyland page chrome, or the Hyland theme set. They still see a limited set of refinements that were intentionally classified to apply across all themes.

**When the flag is on**

Customers receive the full Hyland-branded experience through the Hyland Light and Hyland Dark themes. This includes branding-specific colors, logos, font treatment, and page styling.

To enable the Hyland-branded experience, add the following property to `nuxeo.conf`:

```
org.nuxeo.web.ui.branding.rebrand=true

```

#### Improved Navigation Experience

- Web UI now preserves the user's scroll position when navigating back from a document to a folder or search results.
- Navigation across multiple repositories is more seamless, helping users move between repositories without losing context.

#### Improved Session Management

- Users are automatically redirected to the login page when their session expires.
- After re-authentication, users are returned to the page they were viewing previously.
- Session expiration is handled more smoothly, resulting in fewer navigation errors.
- Administrators can configure automatic logout for inactive users to strengthen security policies.

#### Improved Document Browsing

- Long document names can wrap across multiple lines and display full names in tooltips.
- The Create button no longer overlaps nearby actions when browser windows are resized.
- Selection indicators update immediately when documents are deselected.
- Content remains fully accessible at high browser zoom levels.
- User information is now displayed more consistently using full names where available.

#### Improved Document Downloads and Publications

- Downloaded files now retain filenames that contain spaces.
- Publication dialogs now provide more intuitive default rendition selections based on document content.

### Search and Export Improvements

#### Enhanced Search Experience

- The NXQL Search page now performs searches only when a query is explicitly submitted, reducing unnecessary repository load.
- Saved column preferences are applied only when supported by the active configuration, ensuring administrator-defined layouts are respected.

#### Enhanced CSV Exports

- CSV exports include metadata from custom document schemas, providing more complete data.

### Workflow Improvements

#### Improved Workflow Management

- Workflow transition labels are displayed more consistently, including custom transitions.
- Workflow delegation can now be enabled or disabled through configuration.
- Additional workflow event translations improve multilingual support.

### Document Management Improvements

#### Improved Content Management

- Proxy documents can now be copied and pasted, simplifying management of published content.
- Required multi-valued properties now provide clearer validation feedback.
- Rendering issues affecting multi-valued complex properties after editing have been resolved.
- Closing notifications no longer unintentionally close the spreadsheet editor.

### Accessibility Improvements

This release includes several enhancements designed to improve usability for keyboard and assistive technology users.

#### Improved Navigation and Screen Reader Support

- More consistent and descriptive page titles.
- Improved keyboard focus order for common navigation elements.
- Search filters and sorting controls now include visible, accessible labels.
- Enhanced table descriptions and markup provide better assistive technology support.

#### Improved Form and Input Accessibility

- Form widgets support configurable autocomplete attributes.
- Date pickers support increased text spacing without truncation or overlap.
- Analytics dashboards and visualisations scale correctly at higher zoom levels while maintaining a logical reading order.

### Storage and Integration Improvements

#### Improved S3 Direct Download Support

- Document thumbnails, previews, and cached images now load correctly when S3 direct download is enabled.

#### Improved Preview Experience

- Documents with unsupported file types now display a clear "No Preview Available" message instead of displaying preview errors.
- Issues associated with preview environments, document previews, and user management functionality have been resolved.

#### Improved Nuxeo Drive Experience

- Document names in Nuxeo Drive Synchronisation Roots are now clickable for faster navigation.

### Platform Reliability and Security

#### Enhanced Security

- Security updates have been implemented to address identified vulnerabilities and strengthen platform protection.

#### Improved Reliability

- Application stability, deployment reliability, preview environment functionality, and overall platform consistency have been improved.
- Data tables, grids, and list views now render correctly on initial page load when configured for automatic loading.
- File upload reliability has been improved, eliminating errors that could occur when cancelling uploads on slower network connections.
- Required-field indicators are now displayed consistently across supported layouts.


<br/>

{{! /multiexcerpt}}
