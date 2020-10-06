import React from 'react'
import QrReader from 'react-qr-reader'

function ScannerComponent({handleScan, handleError}) {
    return (
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%',

        height: '100%'}}
        />
      </div>
    )

}

export default ScannerComponent;
