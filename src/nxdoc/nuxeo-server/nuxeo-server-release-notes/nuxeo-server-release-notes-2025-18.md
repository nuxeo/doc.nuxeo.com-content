---
title: LTS 2025.18 / LTS 2025-HF18
description: Discover what's new in LTS 2025.18 / LTS 2025-HF18
review:
   comment: ''
   date: '2026-04-15'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-18'}}
# What's New in LTS 2025.18 / LTS 2025-HF18

## Nuxeo Mail Amazon SES Addon - Support for SES V2 API

Nuxeo Mail Amazon SES Addon now uses SES v2 API.

## Fix Content-Disposition Header Not Using RFC 5987 Encoding

The filename attribute encoding in the Content-Disposition header has been fixed to comply with RFC 6266

The `Content-Disposition` header encoding has been fixed to comply with RFC 6266. Previously, certain characters such as curly braces `{}`, spaces, and non-ASCII characters (accented letters, CJK characters) were not properly percent-encoded in the `filename*` parameter, which could cause download failures or garbled filenames in some browsers.

The encoding now uses a strict RFC 2231 `attr-char` allowlist, always emitting both a `filename` fallback (for older clients) and a `filename*=UTF-8''<encoded>` parameter when encoding is needed.

Additionally, the legacy MSIE 6/7 user-agent sniffing has been removed. The previous `RFC2231.encodeContentDisposition(String, String, Boolean)` three-argument method and `RFC2231.percentEscape(String, String)` method are deprecated.

## Extend Benchmark Navigation Simulation to Use More Enrichers

More enrichers are benchmarked when fetching documents.

## Propose a Copy-From Another Descriptor Mechanism

The `Descriptor` API has been improved to allow *Copy another descriptor* feature.

Such mechanism already existed on Kafka contribution, let see an example:

```
<component name="org.nuxeo.kafka.defaultConfig">
  <extension point="kafkaConfig" target="org.nuxeo.runtime.stream.kafka.service">
    <kafkaConfig name="default">
      <producer>
        <property name="bootstrap.servers">${kafka.bootstrap.servers}</property>
        ...
      </producer>
      <consumer>
        <property name="bootstrap.servers">${kafka.bootstrap.servers}</property>
        <property name="max.poll.interval.ms">${kafka.max.poll.interval.ms}</property>
        <property name="max.poll.records">${kafka.max.poll.records}</property>
        ...
      </consumer>
    </kafkaConfig>
    <kafkaConfig name="slowConsumer" copy="default">
      <consumer>
        <property name="max.poll.interval.ms">${slowConsumer.kafka.max.poll.interval.ms}</property>
        <property name="max.poll.records">1</property>
      </consumer>
    </kafkaConfig>
  </extension>
</component>
```

The `slowConsumer` inherits everything from `default` contribution and override some `max.poll.*` consumer properties.

In order to benefit from this feature, your descriptor needs to implement the `Descriptor#getCopyId()` method.
During descriptor retrieval, the method will be called and will perform the copy if a value is returned. The copy mechanism is driven by the `Descriptor#copy(Descriptor)` method, which by default will perform a merge of the one to copy (ie: the `default` kafka config) and the requested descriptor (ie: the `slowConsumer` kafka config), in pseudo code it would be the result of `default.merge(slowConsumer)`.

Note: In order for the default implementation to work correctly, your merge logic should also merge the descriptor id.

This feature has been added to the following extension points:

- `org.nuxeo.runtime.stream.kafka.service/kafkaConfig` with the `copy` attribute on the `kafkaConfig` object
- `org.nuxeo.audit.service.AuditComponent/routes` with the  `copy` attribute on the `route` object
- `org.nuxeo.ecm.core.cache.CacheService/caches` with the `copy` attribute on the `cache` object
  
## Fix Retention Rule Behavior With retainUntil Date in Past

It is now possible to set a retention expiry date in the past at platform level. Such past retention date won't be applied to cloud storage providers (AWS S3, Google & Azure Storage).

## Propose a DurationUtils.format API

Format your Duration as Human Readable text.

The `DurationUtils#format(Duration)` API is now available to format Duration as: `_d_h_m_s_ms`.

## Restrict Bulk Download Operation Result ( ZIP) to Initiator Only

 Automation async adapter endpoints (status/result/abort) access is restricted to the initiating user.

## Handle Empty Old Proof Keys in WOPI Discovery 

Make Nuxeo Office Online Integration work without old proof key - fresh on-premise Office Online Server for instance.


{{! /multiexcerpt}}
