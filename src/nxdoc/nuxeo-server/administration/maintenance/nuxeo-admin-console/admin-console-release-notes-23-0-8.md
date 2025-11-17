---
title: Version 23.0.8
description: Discover what's new in Admin Console 23.0.8.
review:
  comment: ''
  date: '2025-11-17'
  status: ok
toc: true
labels:
tree_item_index: 997
hidden: true
---

{{{multiexcerpt 'matching-notes' page='admin-console-release-notes'}}}

{{! multiexcerpt name='admin-console-updates'}}

## What’s New in Admin Console for LTS 2023 (Version 23.0.8)

We’re excited to introduce powerful new capabilities to help users monitor, manage, and optimize stream processing with greater control and transparency within our Nuxeo environment:

## Enhancements

### Stream Records

- Real-time visibility into stream data.

- Choose a stream and customize how records are fetched.

- View records as they stream in, stop when needed, and clear the view without affecting server data.

- Designed for flexibility with optional filters like rewind, limit, and timeout.



### Consumer Thread Pool

- Auto-loads available streams and positions.

- Start/Stop operations gated by required inputs.

- Confirmation dialogs for safe execution.

- Error handling for API failures and invalid states.

- Fully keyboard accessible with shortcut support.



### Consumer Position 

- Change Consumer Position

- Supports position changes to Beginning, End, Specific Offset, or Specific Date.

- Requires Stream, Consumer, and Position inputs.

- Confirmation dialog ensures safe execution.

- Displays before/after positions in JSON format.

- Pre-condition: Consumer must be stopped before changes.


### Get Consumer Position

- Fetches current consumer group position.

- Requires Stream and Consumer inputs.

- JSON-based result display.


### Scaling Analysis

- Automatically retrieves backend scaling metrics.

- Presents results in a clean, readable JSON format.

- Clearly indicates if scaling is recommended.

- Robust error handling with retry option.

- Read-only interface for safe monitoring.



### Stream Processor Info

- Monitor active stream processors in real time.

- View processor details like status, lag, and configuration in a clear JSON format.

- Read-only tab for safe, non-intrusive monitoring.

- Retry option available if data fails to load.



### Other Noteworthy Changes

- Introduced a new UI button enabling users to check all probes simultaneously.

- Enhanced the home page to show instance registration and expiration details.



These enhancements help track stream activity, diagnose issues, and gain insights into asynchronous processing—all from a single, intuitive interface. It also provides a secure, user-friendly interface for stream management, supporting scalability, transparency, and operational efficiency.

{{! /multiexcerpt}}