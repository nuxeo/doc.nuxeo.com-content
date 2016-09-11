---
title: Automation REST Response
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - automation-component
    - automation
toc: true
confluence:
    ajs-parent-page-id: '28475489'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Automation+REST+Response
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Automation+REST+Response'
    page_id: '28475455'
    shortlink: P4CyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/P4CyAQ'
    source_link: /display/NXDOC710/Automation+REST+Response
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 12:27'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2015-10-12 10:16'
        message: fix title capitalization
        version: '6'
    - 
        author: Manon Lumeau
        date: '2015-09-16 10:23'
        message: ''
        version: '5'
    - 
        author: Vladimir Pasquier
        date: '2014-12-09 17:19'
        message: ''
        version: '4'
    - 
        author: Vladimir Pasquier
        date: '2014-12-09 17:17'
        message: ''
        version: '3'
    - 
        author: Vladimir Pasquier
        date: '2014-12-09 16:28'
        message: ''
        version: '2'
    - 
        author: Vladimir Pasquier
        date: '2014-12-09 16:27'
        message: ''
        version: '1'

---
{{! excerpt}}

When calling Automation operations through REST calls, you may want to throw custom exception and return it with the appropriate http error code or simply return the result when the process succeed with a custom HTTP status code.

{{! /excerpt}}

&nbsp;

## Rest Custom Exception in Automation Operation and HTTP Code Error Setting

In order to throw custom exception and http status code, you have to create a custom Exception extending `org.nuxeo.ecm.automation.server.jaxrs.RestOperationException`. You will be able to set the HTTP status code which will be return into the rest call response.

Example:

I have to create an ExceptionTest extending the RestOperationException:

{{#> panel type='code' heading='ExceptionTest.java'}}

```
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     vpasquier <vpasquier@nuxeo.com>
 */
package org.nuxeo.ecm.automation.test.helpers;

import org.nuxeo.ecm.automation.server.jaxrs.RestOperationException;

public class ExceptionTest extends RestOperationException {

    private static final long serialVersionUID = 7123858603327032114L;

    public ExceptionTest(String message, Throwable cause) {
        super(message, cause);
    }

    public ExceptionTest(String message) {
        super(message);
    }

    public ExceptionTest(Throwable cause) {
        super(cause);
    }
}

```

{{/panel}}

Given a custom operation HttpStatusOperationTest:

{{#> panel type='code' heading='HttpStatusOperationTest.java'}}

```
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     vpasquier <vpasquier@nuxeo.com>
 */
package org.nuxeo.ecm.automation.test.helpers;

import org.nuxeo.ecm.automation.core.Constants;
import org.nuxeo.ecm.automation.core.annotations.Context;
import org.nuxeo.ecm.automation.core.annotations.Operation;
import org.nuxeo.ecm.automation.core.annotations.OperationMethod;
import org.nuxeo.ecm.automation.core.annotations.Param;
import org.nuxeo.ecm.automation.jaxrs.io.operations.RestOperationContext;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.api.PathRef;

import javax.servlet.http.HttpServletResponse;

/**
 * @since 7.1
 */
@Operation(id = HttpStatusOperationTest.ID, category = Constants.CAT_SERVICES,
        label = "Test Custom Http Status", description = "Test Custom Http " +
        "Status")
public class HttpStatusOperationTest {

    public static final String ID = "Test.HttpStatus";

    @Context
    RestOperationContext context;

    @Context
    CoreSession session;

    @OperationMethod()
    public Object run() throws Exception {
        DocumentModel root = session.getDocument(new PathRef("/"));
        // If context is instanceof RestOperationContext when jaxrs call is
        // executed
        if (context != null) {
                ExceptionTest exception = new ExceptionTest("Exception " +
                        "Message");
                exception.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
                throw exception;
        }// else context is instanceof OperationContext
        return root;
    }

}

```

{{/panel}}

I can decide to throw a custom exception (ExceptionTest) with the appropriate HTTP status code (here 405).

{{#> callout type='warning' }}

`org.nuxeo.ecm.automation.jaxrs.io.operations.RestOperationContext` should be inject into your custom operation to check if it's existing or not. Automation operation can be executed in local or remotely. You should check the operation "mode" when you throw this rest exception to keep your logs clear and to know from where location the operation has been called.

{{/callout}}

## Setting HTTP Status Code When Success in Automation Operation

In case you would like to specify a success HTTP status code in return of your custom operation, you can use the RestOperationContext to set it up.

Example:

Given a custom operation HttpStatusOperationTest:

{{#> panel type='code' heading='HttpStatusOperationTest.java'}}

```
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     vpasquier <vpasquier@nuxeo.com>
 */
package org.nuxeo.ecm.automation.test.helpers;

import org.nuxeo.ecm.automation.core.Constants;
import org.nuxeo.ecm.automation.core.annotations.Context;
import org.nuxeo.ecm.automation.core.annotations.Operation;
import org.nuxeo.ecm.automation.core.annotations.OperationMethod;
import org.nuxeo.ecm.automation.core.annotations.Param;
import org.nuxeo.ecm.automation.jaxrs.io.operations.RestOperationContext;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.api.PathRef;

import javax.servlet.http.HttpServletResponse;

/**
 * @since 7.1
 */
@Operation(id = HttpStatusOperationTest.ID, category = Constants.CAT_SERVICES,
        label = "Test Custom Http Status", description = "Test Custom Http " +
        "Status")
public class HttpStatusOperationTest {

    public static final String ID = "Test.HttpStatus";

    @Context
    RestOperationContext context;

    @Context
    CoreSession session;

    @OperationMethod()
    public Object run() throws Exception {
        DocumentModel root = session.getDocument(new PathRef("/"));
        // If context is instanceof RestOperationContext when jaxrs call is
        // executed
        if (context != null) {
                context.setHttpStatus(206);
            }
        }// else context is instanceof OperationContext
        return root;
    }

}

```

{{/panel}}

I can set into the context the appropriate http status code that will be attached to the rest call response. (here 206)

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

*   [Automation]({{page page='automation'}})
*   [REST API]({{page page='rest-api'}})
*   [Automation How-To Index]({{page page='automation-how-to-index'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

{{#> panel heading='Other Related Documentation '}}

*   [Automation in Nuxeo Studio]({{page space='studio' page='automation'}})

{{/panel}}</div></div>