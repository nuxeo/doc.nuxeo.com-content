---
title: Cross validation with JSF
review:
    comment: ''
    date: '2021-10-07'
    status: ok
tree_item_index: 50
labels:
  - blog-post
  - jsf-ui
---

Here is an elegant (and easy) way to handle cross-validation of JSF components. The idea is to add an hidden input and bind it to a validator, passing component ids to validate as attributes:
```
<h:inputHidden value="needed" validator="#{myBean.validatePassword}">
<f:attribute name="firstPasswordInputId"
value="#{layout.widgetMap['firstPassword'].id}" />
<f:attribute name="secondPasswordInputId"
value="#{layout.widgetMap['secondPassword'].id}" />
</h:inputHidden>
```

{{#> callout type='note' }}
Here, component ids are retrieved from the layout widget ids, but any id bindings will do (taking example on what’s done when adding a “for” attribute to a h:message tag for instance).
{{/callout}}

{{#> callout type='note' }}
The hidden input has to be placed after the referenced components in the page, so that they have been validated, and had their local values set.
The “needed” value is just here because the tag requires its “value” attribute to be set on my box, even if it’s useless for us.
{{/callout}}

The validation method can then retrieve the components values:
```
public Object retrieveInputComponentValue(UIComponent anchor, String componentId) {
    Map attributes = anchor.getAttributes();
    String inputId = (String) attributes.get(componentId);
    UIInput component = (UIInput) anchor.findComponent(inputId);
    return component.getLocalValue();
}

public void validatePassword(FacesContext context, UIComponent component, Object value) {
    Object firstPassword = retrieveInputComponentValue(component, "firstPasswordInputId");
    Object secondPassword = retrieveInputComponentValue(component, "secondPasswordInputId");
    if (!firstPassword.equals(secondPassword)) {
        FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR, "Password mismatch", null);
        throw new ValidatorException(message);
    }
}
```

All components have to be in the same container for this to work properly as is (UIComponent#findComponent method restricts its search to the nearest container). Of course, this retrieval method can be adapted to handle more tricky situations, or to handle other kinds of component types.

**What’s the improvement compared to what we’ve seen so far?**</br>
Well we’ve seen recommendations to use an hidden input too, but it’s retrieving the referenced components values binding the components to some fields in the backing bean. So in this case, you had to add getters and setters for each component, and you had to do it for every set of components following the same validation criterion on a given page. Other recommendations involved writing a custom component handling several other ones, assuming dependent components will be rendered in the same part of the page… overkill, right?

In other words, here you can perform the same validation several times in the same page… with less code.

And it’s prettier ;-)
