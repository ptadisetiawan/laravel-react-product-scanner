import React from 'react';
import Panel from './panel';
import Datatable from 'react-bs-datatable';

function ImportPage(){

    // Create table headers consisting of 4 columns.
const header = [
    { title: 'Username', prop: 'username' },
    { title: 'Name', prop: 'realname' },
    { title: 'Location', prop: 'location' }
  ];

  // Randomize data of the table columns.
  // Note that the fields are all using the `prop` field of the headers.
  const body = Array.from(new Array(57), () => {
    const rd = (Math.random() * 10).toFixed(1);

    if (rd > 0.5) {
      return {
        username: 'i-am-billy',
        realname: `Billy ${rd}`,
        location: 'Mars'
      };
    }

    return {
      username: 'john-nhoj',
      realname: `John ${rd}`,
      location: 'Saturn'
    };
  });
    return (
        <Panel>
           <Datatable tableHeaders={header} tableBody={body} />
        </Panel>
    );
}

export default ImportPage;
