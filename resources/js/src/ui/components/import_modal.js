import React, { useState, useEffect } from 'react';
import { Modal, Button, ProgressBar, Alert } from 'react-bootstrap'
import UploadService from '../../services/upload_services'
function ImportModal(props) {
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false)
    const [show, setShow] = useState(true)
    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    };
    useEffect(() => {
        setShow(props.show)
    }, [])

    const upload = () => {
        let currentFile = selectedFiles[0];

        setProgress(0);
        setCurrentFile(currentFile);

        UploadService.upload(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((response) => {
                setMessage(response.data.message);
                setShowAlert(true)
            })
            .catch((e) => {
                setProgress(0);
                setMessage("Could not upload the file! " + e.response.data.errors.file[0]);
                setShowAlert(true)
                setCurrentFile(undefined);
            });

        setSelectedFiles(undefined);
    };

    const handleClose = () => {
        props.handleClose()
        setShowAlert(false)
        setProgress(0)
    }


    return (
        <>
            <Modal show={props.show} onHide={handleClose} animation={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Import File Excel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentFile && (
                        <ProgressBar animated now={progress} />
                    )}

                    <label className="btn btn-default">
                        <input type="file" onChange={selectFile} />
                    </label>

                    {showAlert && (
                         <Alert variant="success">
                         {message}
                     </Alert>
                    )}


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" disabled={!selectedFiles}
                        onClick={upload}>
                        Upload
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ImportModal;
