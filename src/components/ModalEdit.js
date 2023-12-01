import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSave } from "@fortawesome/free-solid-svg-icons";


const ModalEdit = ({ showModal, handleCloce, siswa, handleName, handleTeacher, handleSubmitUpdate }) => {
    return (
        <Modal show={showModal} onHide={handleCloce}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Data {siswa.name}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmitUpdate}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nama Siswa</Form.Label>
                        <Form.Control type="text" name="name" onChange={handleName} placeholder="Silahkan Masukan Nama Kamu" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nomor Pengajar</Form.Label>
                        <Form.Control type="number" name="teacher_id" value={siswa.teacher_id} onChange={handleTeacher} placeholder="Silahkan Masukan Nomor Pengajar" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloce}>
                        <FontAwesomeIcon icon={faClose} />  Close
                    </Button>
                    <Button variant="primary" type='submit'>
                        <FontAwesomeIcon icon={faSave} />   Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ModalEdit;