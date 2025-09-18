---
title: Nuxeo Keycloak
description: Nuxeo Keycloak allows you to integrate Keycloak, an Open Source Identity and Access Management solution.
---

{{! excerpt}}
The [Nuxeo Keycloak package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-keycloak) allows you to integrate [Keycloak](https://www.keycloak.org/), an Open Source Identity and Access Management solution.
{{! /excerpt}}

It is certified that Nuxeo works with Keycloak up to version 26.2.5.

{{#> callout type='info'}}
See the [Nuxeo Keycloak Package README.md](https://github.com/nuxeo/nuxeo-lts/blob/2023/packages/nuxeo-keycloak-package/README.md) for a complete list of required and optional configuration parameters directly contributable via `nuxeo.conf`.
{{/callout}}

## Nuxeo/Keycloak Automation and REST API Status Code Specifications

Here are the status codes to expect depending on the plugins' order in the `Automation` and `RestAPI` specific authentication chains.

<div class="table-scroll">
  <table class="hover">
    <thead>
      <tr>
        <th colspan="1">Chain order</th>
        <th colspan="1">Keycloak basic auth enabled</th>
        <th colspan="1">Provided credentials</th>
        <th colspan="1">Response status code</th>
      </tr>
    </thead>
    <tbody>
      <!-- NX first, wo/KC basic auth -->
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>false</td>
        <td>none</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>false</td>
        <td>KO (nuxeo basic)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>false</td>
        <td>OK (nuxeo basic)</td>
        <td>200 - OK</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>false</td>
        <td>KO (Keycloak bearer)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>false</td>
        <td>OK (Keycloak bearer)</td>
        <td>200 - OK</td>
      </tr>
      <!-- NX first, w/KC basic auth -->
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>true</td>
        <td>none</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>true</td>
        <td>KO (nuxeo basic)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>true</td>
        <td>OK (nuxeo basic)</td>
        <td>200 - OK</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>true</td>
        <td>KO (Keycloak basic)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>true</td>
        <td>OK (Keycloak basic)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>true</td>
        <td>KO (Keycloak bearer)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>AUTOMATION_BASIC_AUTH KEYCLOAK_AUTH</td>
        <td>true</td>
        <td>OK (Keycloak bearer)</td>
        <td>200 - OK</td>
      </tr>
      <!-- KC first, wo/KC basic auth -->
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>false</td>
        <td>none</td>
        <td>302 - Redirect</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>false</td>
        <td>KO (nuxeo basic)</td>
        <td>302 - Redirect</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>false</td>
        <td>OK (nuxeo basic)</td>
        <td>200 - OK</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>false</td>
        <td>KO (Keycloak bearer)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>false</td>
        <td>OK (Keycloak bearer)</td>
        <td>200 - ok</td>
      </tr>
      <!-- KC first, w/KC basic auth -->
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>true</td>
        <td>none</td>
        <td>302 - Redirect</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>true</td>
        <td>KO (nuxeo basic)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>true</td>
        <td>OK (nuxeo basic)</td>
        <td>200 - OK</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>true</td>
        <td>KO (Keycloak basic)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>true</td>
        <td>OK (Keycloak basic)</td>
        <td>200 - OK</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>true</td>
        <td>KO (Keycloak bearer)</td>
        <td>401 - Unauthorized</td>
      </tr>
      <tr>
        <td>KEYCLOAK_AUTH AUTOMATION_BASIC_AUTH</td>
        <td>true</td>
        <td>OK (Keycloak bearer)</td>
        <td>200 - OK</td>
      </tr>
    </tbody>
  </table>
</div>

## Sample Contribution to Change the Authentication Plugins' Order, Overriding the Keycloak Package’s Contribution

Here is a sample contribution allowing to put Keycloak first in the `Automation` and `RestAPI` specific chains.
This would allow you to get the same response status codes as in the second half of the above table.

```xml
<component name="org.nuxeo.ecm.platform.login.keycloak.descriptor.override">
	<require>org.nuxeo.ecm.platform.login.keycloak.descriptor</require>

	<extension
      target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
      point="specificChains">
		<specificAuthenticationChain name="RestAPI">
			<urlPatterns>
				<url>(.*)/api/v.*</url>
			</urlPatterns>
			<replacementChain>
				<plugin>KEYCLOAK_AUTH</plugin>
				<plugin>AUTOMATION_BASIC_AUTH</plugin>
			</replacementChain>
		</specificAuthenticationChain>
	</extension>

	<extension
      target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
      point="specificChains">
		<specificAuthenticationChain name="Automation">
			<urlPatterns>
				<url>(.*)/automation.*</url>
			</urlPatterns>
			<replacementChain>
				<plugin>KEYCLOAK_AUTH</plugin>
				<plugin>AUTOMATION_BASIC_AUTH</plugin>
			</replacementChain>
		</specificAuthenticationChain>
	</extension>

</component>

```
