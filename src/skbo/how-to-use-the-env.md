---
title: How to use the Env["var"] in  Studio?
description: You can use in automation chains an operator Env["Var"]. How to make it work?
review:
    date: '2019-06-02'
    status: ok
    comment: 'public version'
labels:
    - studio-automation
    - automation
    - property
    - studio

---
# How to use *Env["var"]* in automation chains?

## The Question
I am attempting to use the **Env["var"]** but do not manage to get it working?

## The Answer
In the attached [screen copy]({{file name='Env-property.png'}}), you can retrieve the on-line help of this function.
The example *org.nuxeo.ecm.product.name* looks more like a Java property than an environment variable. The expression *Nuxeo environment property* is used rather than environment variable.

For instance, in positioning in nuxeo.conf:
> my.own.var=ca marche

and with the automation chain

    - Context.FetchDocument
    - Context.SetVar:
        name: MyOwnVar
        value: "@{Env[\"my.own.var\"]}"
    - Log:
        level: warn
        message: "@{Context[\"MyOwnVar\"]}"
        category: TryMe

and with a UserAction (button) launching the automation, in clicking on the button, you then get the log:

> H:EU:RE WARN  [TryMe] ca marche


2019-06-02T15:22:03.250Z
## (c) Nuxeo Support Knowledge Base Outline 2019
