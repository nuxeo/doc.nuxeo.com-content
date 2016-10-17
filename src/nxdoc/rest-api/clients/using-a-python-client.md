---
title: Using a Python Client
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-lts2015
    - python-client-component
    - client
    - python-client
confluence:
    ajs-parent-page-id: '28475456'
    ajs-parent-page-title: Clients
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Using+a+Python+Client
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Using+a+Python+Client'
    page_id: '28475704'
    shortlink: OIGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/OIGyAQ'
    source_link: /display/NXDOC710/Using+a+Python+Client
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2014-07-21 18:12'
        message: ixed broken links to blog post
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-30 13:26'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2013-10-30 01:31'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2013-10-30 01:31'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-09-23 13:46'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-09-23 12:32'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-08-30 15:07'
        message: ''
        version: '9'
    -
        author: Olivier Grisel
        date: '2012-02-10 18:10'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Olivier Grisel
        date: '2012-02-10 18:10'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-08-10 18:13'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 17:30'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 15:12'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 15:11'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 15:08'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 15:08'
        message: ''
        version: '1'

---
We have developed a small Python library that implements the main functions of the JSON-RPC API. You can check out the blog post [A sample Python library for the Nuxeo Content Automation JSON-RPC API](http://blogs.nuxeo.com/development/2010/08/a-sample-python-library-for-the-nuxeo-content-automation-jsonrpc-api/).

{{! excerpt}}

Alternatively you can use the standard library of Python to access a Nuxeo repository using the Content Automation API. Here is a worked example with screencast that demonstrates how to deploy a custom server side operation developed in Java using the Nuxeo IDE and a client Python script that calls it: [Exploring Nuxeo APIs: Content Automation](http://blogs.nuxeo.com/development/2012/01/exploring-nuxeo-apis-content-automation/).

{{! /excerpt}}

Here is an example building a document query&nbsp;using Python:

```python
#!/usr/bin/env python

import urllib2, base64

QUERY_URL = "http://localhost:8080/nuxeo/site/automation/Document.Query"
USER = 'Administrator'
PASSWD = 'Administrator'

auth = 'Basic %s' % base64.b64encode(USER + ":" + PASSWD).strip()
headers = {
   "Content-Type": "application/json+nxrequest",
   "Authorization": auth}
data = '{params: {"query": "SELECT * FROM Document"}, context : {}}'
req = urllib2.Request(QUERY_URL, data, headers)

resp = urllib2.urlopen(req)

print resp.read()

```

Here's a slightly more involved example, that illustrates:

*   How to use a `HTTPCookieProcessor` for keeping session state,
*   The use of the `input` parameter,
*   A few different document-related commands (`Document.Query`, `Document.Create`, `Document.Delete`).

```python
#!/usr/bin/env python

import urllib2, base64, sys
import simplejson as json
from pprint import pprint

URL = "http://localhost:8080/nuxeo/site/automation/"
USER = 'Administrator'
PASSWD = 'Administrator'

cookie_processor = urllib2.HTTPCookieProcessor()
opener = urllib2.build_opener(cookie_processor)
urllib2.install_opener(opener)

def execute(command, input=None, **params):
    auth = 'Basic %s' % base64.b64encode(USER + ":" + PASSWD).strip()
    headers = {
        "Content-Type": "application/json+nxrequest",
        "Authorization": auth}
    d = {}
    if params:
        d['params'] = params
    if input:
        d['input'] = input
    if d:
        data = json.dumps(d)
    else:
        data = None
    req = urllib2.Request(URL + command, data, headers)

    try:
        resp = opener.open(req)
    except Exception, e:
        exc = json.load(e.fp)
        print exc['message']
        print exc['stack']
        sys.exit()
    s = resp.read()
    if s:
        return json.loads(s)
    else:
        return None

print "All automation commands:"
print
for op in execute("")['operations']:
    pprint(op)
    pprint
print

print "All documents in the repository:"
print
for doc in execute("Document.Query", query="SELECT * FROM Document")['entries']:
    print doc['path'], ":", doc['type']
print

print "Fetch workspaces root:"
doc = execute("Document.Fetch", value="/default-domain/workspaces")
pprint(doc)
print

print "Create a new doc:"
new_doc = execute("Document.Create", input="doc:" + doc['uid'], type="Workspace", name="MyWS",
        properties="dc:title=My new workspace")
print

print "Delete new doc:"
execute("Document.Delete", input="doc:" + new_doc['uid'])
print

```
