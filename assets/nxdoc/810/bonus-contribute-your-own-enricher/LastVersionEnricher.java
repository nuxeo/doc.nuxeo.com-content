package org.nuxeo.sample;
import static org.nuxeo.ecm.core.io.registry.reflect.Instantiations.SINGLETON;
import static org.nuxeo.ecm.core.io.registry.reflect.Priorities.REFERENCE;
import java.io.IOException;
import org.codehaus.jackson.JsonGenerator;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.io.marshallers.json.enrichers.AbstractJsonEnricher;
import org.nuxeo.ecm.core.io.registry.reflect.Setup;

@Setup(mode = SINGLETON, priority = REFERENCE)

public class LastVersionEnricher extends AbstractJsonEnricher<DocumentModel> {
    public static final String NAME = "lastVersion";
    public SampleEnricher() {
        super(NAME);
    }
    // Method that will be called when the enricher is asked for
    @Override
    public void write(JsonGenerator jg, DocumentModel doc) throws IOException {
      // TODO: Retrieve the CoreSession from the DocumentModel object

      // TODO: Retrieve the last version from the CoreSession

      // TODO: Use the JsonGenerator object to write a field with the enricher name

      // TODO: Use the JsonGenerator object to write an object with the last document version

    }
}