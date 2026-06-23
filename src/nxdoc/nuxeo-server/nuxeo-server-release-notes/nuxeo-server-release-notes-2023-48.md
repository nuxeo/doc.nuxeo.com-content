---
title: LTS 2023.48 / LTS 2023-HF48
description: Discover what's new in LTS 2023.48 / LTS 2023-HF48
review:
   comment: ''
   date: '2026-05-28'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2023-48'}}
# What's New in LTS 2023.48 / LTS 2023-HF48

## Fix 'Validation_report' JSON Response When Pattern Constraint Is Violated on Multi-Valued String Property

The validation report now has a proper message key for multi-value field with a constraint violation.

## Expose BAF skipCount in AbstractBulkMigrator

New skipCount field in the migration status entity is introduced that represents the number of documents skipped during a bulk migration step. Default value is 0 for non-bulk migrators or when no skips have occurred.

## GET_COMMENTS_FOR_DOCUMENTS_BY_COMMENT_ANCESTOR Page Provider Hits MongoDB Socket Timeout

The `GET_COMMENTS_FOR_DOCUMENTS_BY_COMMENT_ANCESTOR` Page Provider is now routed to OpenSearch by default.
If you have customized `elasticsearch.override.pageproviders` (LTS 2023) or `nuxeo.search.pageproviders.override` (LTS 2025+), you must append `GET_COMMENTS_FOR_DOCUMENTS_BY_COMMENT_ANCESTOR` to your existing list to preserve this routing.

## Content-Disposition Filename Fallback Is Not Quoted After HF46 When Filename Contains Spaces or Special Characters

The legacy `filename` parameter of the `Content-Disposition` HTTP header is now an ASCII transliteration of the original filename, as recommended by RFC 6266 Appendix D. Previously, a filename containing non-ASCII characters (for example, `café.txt`) was placed verbatim in the quoted-string fallback, which produced mojibake on user agents that ignore the modern `filename*` parameter, since HTTP headers are transported as ISO-8859-1.

#### What changed

- Combining marks are stripped after NFD normalization, so accented Latin characters degrade nicely: `café.txt` -> `cafe.txt`.
- Any remaining non-printable-ASCII character (control characters, CJK, and so on) is replaced with `_` to keep the fallback structurally similar to the original name while preventing header injection.
- Backslash (`\`) and double-quote (`"`) are escaped for quoted-string safety.
- The RFC 5987 `filename*=UTF-8''…` parameter is unchanged — modern clients (all current browsers) still receive the exact original filename.

#### Header examples (attachment disposition)

Filename: cafe.txt
  Before: attachment; filename=cafe.txt
  After:  unchanged

Filename: café.txt
  Before: attachment; filename="café.txt"; filename*=UTF-8''caf%C3%A9.txt
  After:  attachment; filename=cafe.txt; filename*=UTF-8''caf%C3%A9.txt

Filename: 平仮名 - good.txt
  Before: attachment; filename="平仮名 - good.txt"; filename*=UTF-8''%E5%B9%B3%E4%BB%AE%E5%90%8D%20-%20good.txt
  After:  attachment; filename="___ - good.txt"; filename*=UTF-8''%E5%B9%B3%E4%BB%AE%E5%90%8D%20-%20good.txt

Filename: tab<TAB>file.txt (control char)
  Before: attachment; filename="tabfile.txt"; filename*=UTF-8''tab%09file.txt
  After:  attachment; filename=tab_file.txt; filename*=UTF-8''tab%09file.txt

#### Compatibility

- No public API change. Affected method:
org.nuxeo.common.utils.RFC2231#encodeContentDisposition(String, boolean).
- All downstream callers (DownloadServiceImpl, DownloadHelper, S3 / Azure blob providers, WebEngine writers) pick up the fix automatically.
- Modern user agents are unaffected — they continue to use `filename*`.
- Legacy user agents now receive a valid ASCII name instead of mojibake or a corrupted header value.

{{! /multiexcerpt}}
