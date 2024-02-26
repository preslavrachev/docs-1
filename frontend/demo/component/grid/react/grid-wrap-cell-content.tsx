import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line
import React, { useEffect } from 'react';
import { Grid } from '@vaadin/react-components/Grid.js';
import { GridColumn } from '@vaadin/react-components/GridColumn.js';
import type Person from 'Frontend/generated/com/vaadin/demo/domain/Person';
import { getPeople } from 'Frontend/demo/domain/DataService';
import { Avatar } from '@vaadin/react-components/Avatar.js';
import { useSignal } from '@vaadin/hilla-react-signals';
import { useSignals } from '@preact/signals-react/runtime'; // hidden-source-line

function Example() {
  useSignals(); // hidden-source-line
  const items = useSignal<Person[]>([]);

  useEffect(() => {
    getPeople().then(({ people }) => {
      items.value = people;
    });
  }, []);

  return (
    <Grid items={items.value} theme="wrap-cell-content">
      <GridColumn header="Image" flexGrow={0} autoWidth>
        {({ item: person }) => (
          <Avatar img={person.pictureUrl} name={`${person.firstName} ${person.lastName}`} />
        )}
      </GridColumn>
      <GridColumn path="firstName" />
      <GridColumn path="lastName" />
      <GridColumn header="Address">
        {({ item: { address } }) => (
          <span>
            {address.street} {address.city} {address.zip} {address.state}
          </span>
        )}
      </GridColumn>
    </Grid>
  );
}

export default reactExample(Example); // hidden-source-line
