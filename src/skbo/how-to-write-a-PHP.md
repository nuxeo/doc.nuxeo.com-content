---
title: How to write a PHP client calling an automation chain taking a parameter
description: How to write a PHP client calling an automation chain taking a parameter
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - studio-automation
    - subsystem-client-sdk
    - automation
    - php

---
# How to write a PHP client calling an automation chain taking a parameter
## Problem
You have an automation chain taking a context parameter “myParam” and you want to call this  automation chain from a PHP client. How to pass the parameter?
## Solution
For the following automation chain template_rendering_with_params taking the template name as a parameter

    params:
      - myParam:
          type: string
    operations:
      - Context.FetchDocument
      - Context.SetInputAsVar:
          name: myCurrentDoc
      - TemplateProcessor.Render:
          save: "false"
          store: "false"
          templateName: "@{ChainParameters['myParam']}"
      - Blob.AttachOnDocument:
          document: "@{Context[\"myCurrentDoc\"]}"
          save: "true"
          xpath: "files:files"

then the PHP client must pass the template name as a parameter in the following way:

    require_once '../vendor/autoload.php';

    $documents = null;
    $client = new \Nuxeo\Client\Api\NuxeoClient('http://localhost:8080/nuxeo', 'Administrator', 'Administrator');
    $client = $client->schemas("*");

      $path='/default-domain/workspaces/ws/MyODTDocs1';

        $client->automation('SUP21688_template_rendering_with_params')
          ->param('myParam','SpecNux')
          ->input(new \Nuxeo\Client\Api\Objects\Operation\DocRef($path))
          ->execute(\Nuxeo\Client\Api\Objects\Blob\Blob::className);

where the template “SpecNux” taken from the Nuxeo samples takes a ODT DOC or DOCX binary and generates a PDF and /default-domain/workspaces/ws/MyODTDocs1 is the path of a Nuxeo document having an ODT as file:content.


2019-06-01T17:38:00.559Z
## (c) Nuxeo Support Knowledge Base Outline 2019
