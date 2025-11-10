---
title: Accessibility Statement
description: Accessibility Statement
review:
    comment: ''
    date: '2025-11-10'
    status: ok
toc: true
labels:
tree_item_index: 700
---
**Product**: Nuxeo Web UI <br>
**Latest Release Date**: September 29, 2025 - LTS 2025 (Version 2025.7.0)

## Conformance Status

Our platform currently meets the Web Content Accessibility Guidelines (WCAG) 2.2, Levels A and AA. Based on a comprehensive audit of over 80% of our application, we are currently aligned with the Web Content Accessibility Guidelines (WCAG) 2.2 at conformance levels A and AA. We are actively working to address remaining areas to achieve the highest level of conformance. All new features and planned functionalities are now part of our continuous accessibility auditing and improvement process, ensuring our commitment extends to future developments.


## Policies

Hyland develops, implements, and maintains policies and [internal programs](https://community.hyland.com/en/accessibility/overview) to achieve and maintain accessibility standards to ensure broad compliance and usability.


## Compatibility with Browsers and Assistive Technology

The Nuxeo Web UI is designed to be compatible with the following assistive technologies and browsers:

- **macOS with VoiceOver on Chrome**
- **Windows with NVDA on Chrome**


## Evaluation Methods

The accessibility of the Nuxeo Web UI was evaluated by our dedicated team of **Accessibility Specialists**. Our process includes a combination of automated, manual, and functional testing against the applicable success criteria within the Web Content Accessibility Guidelines (WCAG) 2.2 Conformance Level A and AA. The Accessibility Specialists and Technical Team are in charge of defining the compliance plan, conducting the accessibility audits and revalidations accordingly. 


## Technical Specifications

The accessibility of the Nuxeo Web UI relies on the following technologies to work with the combination of a web browser and any assistive technologies or plugins installed on your computer:

- HTML
- WAI-ARIA
- CSS
- JavaScript


## Most Recent Accessibility Enhancements

We have made significant improvements in the latest release to address known issues and enhance overall accessibility.

### Keyboard & Screen Reader Navigation:

- Added a **"Skip to Main Content"** link to facilitate keyboard navigation.
- The main navigation menu and menu-tree are now highly keyboard accessible with a logical and meaningful tab order.
- Users can navigate between items in Grid, Table, and List Views using the Arrow keys.
- The **Datepicker Widget** is now fully keyboard and screen reader accessible.
- **Tab Panel navigation** is consistent for keyboard-only users.
- **'Reply' button** in Viewer Comments is now fully keyboard and screen reader accessible.
- The **'Search' button** is focusable and can be closed using the ESC key.
- In Search Results, **Shift+Tab** moves focus backward, and **Backspace/Delete** removes multi-select values.

### Screen Reader Optimization:

- **Viewer Comments** icons (x) / (✓) have been optimized with descriptive labels.
- **Viewer Images** have been updated with accessible alternative text for stand-alone icons.
- **Landmarks** have been added to the page structure for easier navigation by screen reader users.
- **Error messages** for mandatory fields in the 'Create' dialog are now optimized for screen readers.

### Visual Enhancements:

- The color contrast for the **'Reset' button** and text like **"No Containers," "Most Recent," and "Validated"** in the Search functionality has been improved to meet WCAG AA requirements.

### Interaction Enhancements:

- Keyboard focus now returns to the triggering element after closing modals like "Display Selection," allowing for continuous keyboard navigation.
- **Selection Toolbar shortcuts (Windows: Ctrl + .)** are visually available to users.



## Future Accessibility Plans

Our commitment to accessibility is ongoing. We plan to implement the following improvements in upcoming releases including Q1 and Q2 of 2026 to continue our progress toward conformance.

- **Improve Navigation & Usability:** Optimize the autocomplete functionality of dropdown menus and how results from different views are read by screen readers. We will also address the semantic defect in the Tab Panel navigation to ensure a consistent experience for screen reader users, and we will enhance the pagination for keyboard users.

- **Enhance Screen Reader Announcements:** Ensure all functionalities in **Grid, Table, and List Views** are properly announced for screen readers. We will also correct the issue where **Selection Toolbar** shortcuts **(Windows: Ctrl + .)** are not announced. Additionally, we will optimize the heading structure for screen readers to improve content comprehension and navigation.

- **Refine Visual & Interactive Elements:** Improve the color contrast for the **"Display selection"** button in the **Selection Toolbar**. We will also include proper labels on the Viewer's Image and Video Toolbar buttons and optimize off-screen button texts and inline frames for screen readers.

- **Provide Accessible Data:** Include accessible alternative text for graphs and other visual data.



## Feedback & Questions

We welcome your feedback on the accessibility of the Nuxeo Web UI. If you encounter any accessibility barriers, please contact us at: **Email:** [accessibility@hyland.com](mailto:accessibility@hyland.com)