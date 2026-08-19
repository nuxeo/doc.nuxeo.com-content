---
title: Nuxeo Media Manipulation Release Notes
description: Release notes for Nuxeo Media Manipulation.
tree_item_index: 100
review:
  comment: ''
  date: '2026-08-19'
  status: ok
toc: true
labels:
  - nxdoc-3006
---

## Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">LTS 2023 package</th>
<td colspan="1">2023.5.87</td>
</tr>
<tr>
<th colspan="1">LTS 2025 package</th>
<td colspan="1">2025.1.58</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">TBD</td>
</tr>
</tbody>
</table>
</div>

This release introduces **CDN Signed URL** for public CloudFront delivery and includes **security maintenance** updates for the LTS 2023 and LTS 2025 platform lines. All changes below apply to the package versions in the table above.

## What's New

### CDN Signed URL ([NXCON-229](https://hyland.atlassian.net/browse/NXCON-229))

Nuxeo generates signed, time-limited CloudFront URLs so public files and images are delivered through the CDN instead of routing every request through Nuxeo.

- **Workflow:** **Share → Create CDN URL** on a public asset
- **Delivery:** End users download from CloudFront; Nuxeo signs the URL but is not in the download path afterward
- **Performance:** Faster delivery from edge locations, reduced repeated load on Nuxeo
- **Resilience:** Links already created before a Nuxeo outage can keep working until they expire
- **Content updates:** Create a new CDN URL when the underlying asset changes

Requires Amazon S3 Online Storage and a CloudFront distribution.

### CloudFront Signing — Key Groups, Trusted Signers, and Private Key Formats ([NXCON-329](https://hyland.atlassian.net/browse/NXCON-329))

The same Nuxeo signing code supports both modern and legacy AWS CloudFront setups:

| Signing approach | Key-Pair-Id format | Private key format | PEM header |
| ---------------- | ------------------ | ------------------ | ---------- |
| Key Groups (modern) | `K...` | PKCS#8 | `-----BEGIN PRIVATE KEY-----` |
| Trusted Signers (legacy) | `APK...` | PKCS#1 | `-----BEGIN RSA PRIVATE KEY-----` |

Store the key at the path configured in `nuxeo.s3storage.cloudfront.privKey` (for example `/etc/nuxeo/cloudfront/pk-<Key-Pair-Id>.pem`).

### Lambda@Edge No Longer Required

When `nuxeo.s3storage.cloudfront.privKey` and `nuxeo.s3storage.cloudfront.privKeyId` are configured, Nuxeo signs CloudFront URLs directly. Customers who previously used **Lambda@Edge** for URL signing can remove it after validating Nuxeo-generated signed URLs in production.

### Configurable Link Lifetime

Signed URL expiration defaults to **3600 seconds (1 hour)** via `nuxeo.s3storage.cloudfront.expiration.seconds`. Increase this value in `nuxeo.conf` to extend link validity (for example `7200` for two hours).

## Security Updates ([NXCON-371](https://hyland.atlassian.net/browse/NXCON-371))

This release updates frontend npm dependencies (including `js-yaml`, `brace-expansion`, `undici`, and `@puppeteer/browsers`).

## Configuration Changes

Enable CDN Signed URL by adding the following to `nuxeo.conf`:

```properties
nuxeo.s3storage.cloudfront.enabled=true
nuxeo.media.downloadlinks.cloudfront.enabled=true
nuxeo.s3storage.cloudfront.distribDomain=<your-cloudfront-domain>
nuxeo.s3storage.cloudfront.privKey=/etc/nuxeo/cloudfront/pk-<Key-Pair-Id>.pem
nuxeo.s3storage.cloudfront.privKeyId=<Key-Pair-Id>
nuxeo.s3storage.cloudfront.distribId=<cloudfront-distribution-id>
nuxeo.s3storage.cloudfront.bucket.prefix=binaries
nuxeo.s3storage.cloudfront.expiration.seconds=3600
```

Amazon S3 Online Storage must also be configured:

```properties
nuxeo.core.binarymanager=org.nuxeo.ecm.blob.s3.S3BlobProvider
nuxeo.s3storage.bucket=<your-bucket-name>
```

### Lambda@Edge Migration

1. Configure `nuxeo.conf` as above and validate signed URLs return `200 OK`.
2. Remove the Lambda@Edge association from your CloudFront distribution once Nuxeo signing is confirmed in production.

## Upgrade Notes

1. Install the package version for your platform line from [Nuxeo Connect](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-media-manipulation) (see Summary table).
2. Restart the Nuxeo instance.
3. **For CDN Signed URL:** configure CloudFront properties in `nuxeo.conf` and mount the private key on all Nuxeo nodes.
4. **For security updates only:** no configuration migration is required beyond installing the latest package.

## Known Limitations

- Early revocation is not supported for an already-issued signed URL
- New CDN signed URLs cannot be generated while Nuxeo is unavailable
- Not intended for permanent public URLs, private or password-protected delivery, or CDN-based image transformation
- CDN signed URLs require S3-backed blob storage

## How It Works

1. A user selects an asset intended for public delivery.
2. The asset is published or made available for public sharing.
3. The user chooses **Share → Create CDN URL**.
4. Nuxeo generates a signed CDN URL with a limited lifetime.
5. End users access the asset through CloudFront.
6. If the asset is updated, create a new CDN URL for the updated version.

## Frequently Asked Questions

**Does the CDN signed URL replace the original asset in Nuxeo?**

No. Nuxeo remains the system of record. The feature changes how the asset is delivered publicly, not where it is managed.

**How long does a CDN signed URL remain valid?**

The default lifetime is about 1 hour, although the exact duration can be configured by environment via `nuxeo.s3storage.cloudfront.expiration.seconds`.

**Can I revoke a CDN signed URL before it expires?**

No. Early revocation is not supported for an already-issued signed URL. If you need stronger revocation control, the classic public link model may be more appropriate.

**What happens if the file is updated?**

Create a new CDN URL for the updated asset so consumers access the latest version.

**Will CDN signed URLs work if Nuxeo is down?**

Links that were already created can continue to work until they expire. New CDN signed URLs cannot be generated while Nuxeo is unavailable.
