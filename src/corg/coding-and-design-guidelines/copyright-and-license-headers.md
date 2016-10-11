---
title: Copyright and license headers
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Copyright+and+license+headers
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Copyright+and+license+headers'
    page_id: '9275203'
    shortlink: Q4eN
    shortlink_source: 'https://doc.nuxeo.com/x/Q4eN'
    source_link: /display/CORG/Copyright+and+license+headers
tree_item_index: 100
history:
    -
        author: Florent Guillaume
        date: '2015-12-28 11:41'
        message: emoved LGPL and EPL example
        version: '9'
    -
        author: Julien Carsique
        date: '2015-11-02 17:07'
        message: JAutodoc templates
        version: '8'
    -
        author: Julien Carsique
        date: '2014-01-09 14:29'
        message: ''
        version: '7'
    -
        author: Thibaud Arguillere
        date: '2014-01-08 17:38'
        message: ''
        version: '6'
    -
        author: Florent Guillaume
        date: '2013-08-28 12:26'
        message: 2012->2013
        version: '5'
    -
        author: Florent Guillaume
        date: '2012-01-10 14:43'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Florent Guillaume
        date: '2012-01-10 14:43'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2012-01-10 14:42'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2012-01-09 14:18'
        message: ''
        version: '1'

---
All code committed in Nuxeo repositories must be licensed under the Apache License, Version 2.0,&nbsp;or a compatible license (LGPL 2.1, Eclipse, CDDL) if importing code with a third-party copyright.
All Java files (and if possible other text-based files) must start with a header stating this and describing who owns the copyright, and optionally who contributed to the file (to comply with the Moral Rights of the Berne Convention).

Example headers follow.

You can import them in [JAutodoc Eclipse plugin](http://jautodoc.sourceforge.net/) from `tools/jautodoc_header_*.txt`.

{{#> panel type='code' heading='Apache License v2.0'}}

```
/*
 * (C) Copyright ${year} Nuxeo SA (http://nuxeo.com/) and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Contributors:
 *     ...
 */

```

{{/panel}}
