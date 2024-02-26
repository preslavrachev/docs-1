import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line
import React from 'react';
import { RichTextEditor } from '@vaadin/react-components/RichTextEditor.js';
import templates from '../../../../../src/main/resources/data/templates.json';
import { useSignal } from '@vaadin/hilla-react-signals';
import { useSignals } from '@preact/signals-react/runtime'; // hidden-source-line

function Example() {
  useSignals(); // hidden-source-line
  const richText = useSignal(templates.richTextDelta);

  return (
    // tag::snippet[]
    <RichTextEditor
      style={{ minHeight: '200px', maxHeight: '400px' }}
      value={richText.value}
      onValueChanged={(event) => {
        richText.value = event.detail.value;
      }}
    />
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
