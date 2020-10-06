import React from'react';
import { useHistory } from 'react-router-dom';
import ScannerComponent from '../components/scanner_component';

function ScannerPage () {
    const history = useHistory();
    const handleScan = data => {
        if (data) {
          const str = 'result/' + data;
          history.push(str);
        }
      }
      const handleError = err => {
        console.error(err)
      }
    return(
        <ScannerComponent handleScan={handleScan} handleError={handleError}/>
    );
}

export default ScannerPage;
