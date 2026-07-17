---

title: PDF/A Conversion for Nuxeo
description: 'PDF/A Conversion for Nuxeo helps organizations create archive-ready documents directly within the platform by converting supported files into PDF/A, a format designed for long-term preservation, while keeping the original source file available.'
review:
    comment: ''
    date: '2026-07-16'
    status: ok
labels:
    - pdfa
    - conversion
    - nuxeo
toc: true

## tree_item_index: 2050

## Overview

PDF/A Conversion for Nuxeo helps organizations create archive-ready documents directly within the platform. It converts supported files into PDF/A, a PDF format designed for long-term preservation, while keeping the original source file available for ongoing access and traceability.

Many organizations need to preserve documents for years to meet legal, regulatory, operational, or historical requirements. PDF/A Conversion simplifies that process by providing a built-in way to produce standardized archival files without relying on separate tools or custom integrations.

## Prerequisites

{{#> callout type='warning'}}
**LibreOffice** (headless mode) and **Ghostscript** must be installed on the Nuxeo Server, as they are used internally for PDF/A conversions. These are typically available in standard Nuxeo deployment environments, including the official Docker image.
{{/callout}}

## What PDF/A Conversion Delivers

PDF/A Conversion turns supported files into PDF/A, a self-contained format made for long-term access.

**Key Benefits**

- Convert common business documents and image files into PDF/A
- Use the capability for newly added content
- Keep the original file together with the converted archival version
- Give users a clear way to preview or download the converted file
- Reduce the need for third-party conversion products or one-off custom solutions

{{#> callout type='info'}}
Archive programs work best when the preservation format is consistent, accessible, and easy to produce. Built-in PDF/A Conversion helps standardize that experience across environments.
{{/callout}}

## Key Benefits

**Simpler archiving**
Teams can create archive-ready files within Nuxeo instead of managing a separate product or custom workflow.

**Original file preservation**
The source document remains available alongside the PDF/A version, which supports traceability and future reference.

**Consistent user experience**
The same built-in capability can be used across customer implementations, helping reduce variation and support overhead.

**Clear file access**
Users can preview the PDF/A output when supported or download it when preview is not available.

## Supported File Types

PDF/A Conversion supports common business files, including documents, text files, images, and PDFs.

| File Group       | Examples                                |
| ---------------- | --------------------------------------- |
| Office documents | Word, Excel, PowerPoint                 |
| Text files       | TXT, RTF                                |
| Images           | TIFF, JPEG, PNG                         |
| PDF files        | PDF files that need conversion to PDF/A |

{{#> callout type='warning'}}
Support applies to the file groups described for this feature. Preview availability may vary depending on file behavior and environment capabilities.
{{/callout}}

## How It Works

The conversion process is simple for users and administrators.

1. A supported document is uploaded or an existing document is selected.
2. Nuxeo converts the file into PDF/A format.
3. The original file remains stored in the platform.
4. Users can access the PDF/A output through preview or download, depending on support.

{{#> callout type='info'}}
PDF/A is a version of PDF intended for long-term preservation. It is designed to keep documents self-contained so they can be opened and viewed more consistently over time.
{{/callout}}

## Typical Use Cases

- **Regulatory retention:** Preserve records in a standardized archival format for long-term compliance
- **Corporate records management:** Store critical business documents in a format intended for durable access
- **Migration and normalization:** Convert mixed source content into a more consistent archive format
- **Operational archiving:** Retain source files while also producing a preservation-oriented copy for long-term storage

| Before                                                  | With PDF/A Conversion                                 |
| ------------------------------------------------------- | ----------------------------------------------------- |
| Customers often depended on custom or third-party tools | Conversion is available as a built-in capability      |
| Setup and maintenance added complexity                  | Fewer moving parts and lower operational burden       |
| Archiving practices varied by implementation            | A more consistent approach across environments        |
| Access to archived files was not always clear           | Users can preview or download the converted output    |
| Converted output could replace source context           | Original files are preserved alongside PDF/A versions |

## What This Feature Does Not Include

PDF/A Conversion is focused on creating archival PDF/A output. It does not include the following broader PDF editing or document manipulation capabilities:

- Watermarking, merging, or splitting PDFs
- Redaction or annotation tools
- Email conversion or support for specialized formats outside the supported list
- Editing or enriching PDF/A metadata as part of the conversion flow

{{#> callout type='warning'}}
This feature is intended for PDF/A conversion. It should not be treated as a full PDF editing or records governance suite by itself.
{{/callout}}

## Who Benefits Most

PDF/A Conversion is especially useful for organizations that need dependable long-term document preservation.

- Government agencies
- Financial services organizations
- Healthcare providers and payers
- Energy and utilities companies
- Any business with retention, archive, or compliance requirements

## Customer Expectations

- Users get a simpler path to archive-ready documents
- Organizations can preserve both source files and converted files together
- Teams benefit from a built-in, repeatable experience rather than isolated custom implementations
- Archived files are easier to access through predictable preview or download behavior

## Frequently Asked Questions

**Does PDF/A Conversion replace the original file?**
No. The original document remains available alongside the PDF/A version.

**Can this be used for existing content?**   
No. It can be used for newly added files. Support for existing documents is planned in the upcoming release.

**Is this a complete PDF editing solution?**
No. The feature is limited to PDF/A conversion and does not include editing, redaction, merging, splitting, or annotation features.

**Who is this feature best suited for?**
It is most valuable for organizations with long-term retention, archive, or compliance needs.

{{#> callout type='info'}}
PDF/A Conversion for Nuxeo gives customers a practical, built-in way to create archival documents for long-term preservation. It reduces complexity, preserves original files, and supports a more consistent archiving experience across implementations.
{{/callout}}
