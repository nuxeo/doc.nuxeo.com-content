---
title: CDN Signed URLs Details
description: Configuration and behavior of CDN signed URL sharing for Nuxeo Media Manipulation.
review:
  comment: ''
  date: '2026-08-24'
  status: ok
labels:
  - lts2025-ok
  - media-manipulation
  - dam
toc: true
---

CDN signed URLs let users share **stored blobs** (main file and existing picture views such as OriginalJPEG and FullHD) through Amazon CloudFront without routing downloads through the Nuxeo server. URLs are signed and time-limited; end users access content directly from CloudFront edge locations.

This page covers prerequisites and `nuxeo.conf` configuration. For the end-user workflow (**Share → Create CDN URL**), see [Nuxeo Media Manipulation]({{page page='nuxeo-media-manipulation'}}#sharing).

## Prerequisites

Before enabling CDN signed URL sharing, ensure that the following criteria are met:

- **Nuxeo Platform** — LTS 2025 (or the platform version supported by your Media Manipulation package)
- **[Amazon S3 Online Storage]({{page page='amazon-s3-online-storage'}})** — binaries stored in S3 via `S3BlobProvider`
- **[Amazon CloudFront]({{page page='amazon-cloudfront-distribution'}})** — distribution in front of the S3 bucket, with **Restrict Viewer Access** enabled so objects require signed URLs
- **CloudFront signing key** — Key Pair ID and private key file mounted on every Nuxeo node
- **Nuxeo Media Manipulation** add-on installed

Picture view generations for **OriginalJpeg** and **FullHD** must be enabled if you intend to share those renditions.

## Overview

When S3 and CloudFront are configured, users generate CDN signed URLs from the **Share** card in the Media Manipulation dialog:

1. Select the blob to share from **Select a Value** (main file or an existing picture view).
2. Click **Create CDN URL**.
3. Copy the generated URL.

Nuxeo signs the URL. Subsequent downloads are served by CloudFront, not by Nuxeo. Optional date fields in the Share card control **document permissions** in Nuxeo; **URL validity** is governed solely by the CloudFront signature expiration.

**Important:** CDN signed URLs apply to **stored blobs only**. On-the-fly crop, resize, or format changes from the manipulation dialog are not included. Use **Download as** or **Save** to persist a transformation first, then share the resulting blob if needed.

## Nuxeo Configuration

Add the following to `nuxeo.conf`:

```properties
# S3 binary storage (required)
nuxeo.core.binarymanager=org.nuxeo.ecm.blob.s3.S3BlobProvider
nuxeo.s3storage.bucket=<your-bucket-name>

# CloudFront signing (required for CDN delivery)
nuxeo.s3storage.cloudfront.enabled=true
nuxeo.s3storage.cloudfront.distribDomain=<your-cloudfront-domain>
nuxeo.s3storage.cloudfront.distribId=<cloudfront-distribution-id>
nuxeo.s3storage.cloudfront.privKey=/etc/nuxeo/cloudfront/pk-<Key-Pair-Id>.pem
nuxeo.s3storage.cloudfront.privKeyId=<Key-Pair-Id>
nuxeo.s3storage.cloudfront.bucket.prefix=binaries

# Media Manipulation — enable CDN URL sharing in the Share card
nuxeo.media.downloadlinks.cloudfront.enabled=true

# Signed URL lifetime (default: 3600 seconds / 1 hour)
nuxeo.s3storage.cloudfront.expiration.seconds=3600
```

Restart Nuxeo after changing these properties. Mount the private key file at the same path on **all** Nuxeo nodes in the cluster.

You do not need `nuxeo.aws.accessKeyId` and `nuxeo.aws.secretKey` when using IAM instance roles for S3 access.

### Configuration reference

| Property | Description |
| -------- | ----------- |
| `nuxeo.s3storage.cloudfront.enabled` | Enables CloudFront signed URL generation at the S3 storage layer. |
| `nuxeo.media.downloadlinks.cloudfront.enabled` | Enables **Create CDN URL** in the Media Manipulation Share card. |
| `nuxeo.s3storage.cloudfront.distribDomain` | CloudFront distribution domain (for example `d111111abcdef8.cloudfront.net`). |
| `nuxeo.s3storage.cloudfront.distribId` | CloudFront distribution ID. |
| `nuxeo.s3storage.cloudfront.privKey` | Filesystem path to the CloudFront private key (`.pem`). |
| `nuxeo.s3storage.cloudfront.privKeyId` | CloudFront Key Pair ID (`K...` for Key Groups, `APK...` for Trusted Signers). |
| `nuxeo.s3storage.cloudfront.bucket.prefix` | S3 key prefix where binaries are stored (default: `binaries`). |
| `nuxeo.s3storage.cloudfront.expiration.seconds` | Signed URL validity in seconds (default: `3600`). |

## CloudFront Signing — Key Groups and Trusted Signers

Nuxeo supports both modern and legacy AWS CloudFront signing setups:

| Signing approach | Key-Pair-Id format | Private key format | PEM header |
| ---------------- | ------------------ | ------------------ | ---------- |
| Key Groups (modern) | `K...` | PKCS#8 | `-----BEGIN PRIVATE KEY-----` |
| Trusted Signers (legacy) | `APK...` | PKCS#1 | `-----BEGIN RSA PRIVATE KEY-----` |

Store the private key at the path configured in `nuxeo.s3storage.cloudfront.privKey` (for example `/etc/nuxeo/cloudfront/pk-<Key-Pair-Id>.pem`).

For CloudFront distribution settings (Restrict Bucket Access, Query String Forwarding, Restrict Viewer Access), follow [Amazon CloudFront]({{page page='amazon-cloudfront-distribution'}}).

## Lambda@Edge Migration

When `nuxeo.s3storage.cloudfront.privKey` and `nuxeo.s3storage.cloudfront.privKeyId` are configured, Nuxeo signs CloudFront URLs directly. Customers who previously used **Lambda@Edge** for URL signing can remove it after validating Nuxeo-generated signed URLs in production:

1. Configure `nuxeo.conf` as above and confirm signed URLs return `200 OK`.
2. Remove the Lambda@Edge association from the CloudFront distribution once Nuxeo signing is confirmed.

## Link Lifetime

Signed URL expiration defaults to **3600 seconds (1 hour)** via `nuxeo.s3storage.cloudfront.expiration.seconds`. Increase this value to extend link validity (for example `7200` for two hours).

Revocation before expiration is **not supported** from the UI or via API. A signed URL remains valid until its CloudFront signature expires.

## Known Limitations

- CDN signed URLs are limited to **stored blobs** (main file and picture views); on-the-fly transformations cannot be shared via CDN URL.
- Signed URLs **cannot be revoked** before their CloudFront signature expires.
- **New** CDN signed URLs cannot be generated while Nuxeo is unavailable (signing happens on the server).
- Links **already issued** can continue to work until they expire, even if Nuxeo is temporarily down.
- Not intended for permanent public URLs or CDN-based on-the-fly image transformation (see [Future Scope]({{page page='nuxeo-media-manipulation'}}#future-scope) on the main page).
- Requires S3-backed blob storage and a CloudFront distribution configured for signed access.

When the underlying blob changes, create a **new** CDN URL so consumers access the updated content.

## Frequently Asked Questions

**Does the CDN signed URL replace the original asset in Nuxeo?**

No. Nuxeo remains the system of record. The feature changes how a stored blob is delivered publicly, not where it is managed.

**How long does a CDN signed URL remain valid?**

By default, about one hour. Configure `nuxeo.s3storage.cloudfront.expiration.seconds` to change the duration.

**Can I revoke a CDN signed URL before it expires?**

No. If you need stronger revocation control, use Nuxeo's classic authenticated download or public link models instead.

**What happens if the file is updated?**

Create a new CDN URL for the updated blob. Existing signed URLs continue to serve the version that was stored when the URL was generated, until they expire.

**Will CDN signed URLs work if Nuxeo is down?**

Already-created links can keep working until they expire. New URLs cannot be generated while Nuxeo is unavailable.
