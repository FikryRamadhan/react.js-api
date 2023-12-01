import React, { Component } from 'react'
import { Card, Col, Form, Button, Container, } from 'react-bootstrap'
import { API_URL } from "../utils/constant";
import Swal from 'sweetalert2';
import axios from 'axios';


export default class AddComponent extends Component {
    state =
        {
            name: '',
            teacher_id: ''
        }

    handleName = event => {
        this.setState({ name: event.target.value });
    }

    handleTeacher = event => {
        this.setState({ teacher_id: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const siswa = {
            name: this.state.name,
            teacher_id: this.state.teacher_id,
        };
        axios.post(API_URL + 'create', siswa)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: 'Data Hasbenn Created',
                    icon: "success",
                    timer: 1000
                });

                setTimeout(function () {
                    window.location.href = '/';
                }, 1000);
            })
            .catch(error => {
                console.log('error !!', error)
            })
    }
    render() {
        return (
            <Container>
                <Col className="col-lg-6">
                    <Card className="shadow">
                        <Card.Title className="ml-3 mt-3">
                            <strong>Tambah Siswa</strong>
                        </Card.Title>
                        <hr></hr>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nama Siswa</Form.Label>
                                    <Form.Control type="text" name="name" onChange={this.handleName} placeholder="Silahkan Masukan Nama Kamu" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nomor Pengajar</Form.Label>
                                    <Form.Control type="number" name="teacher_id" onChange={this.handleTeacher} placeholder="Silahkan Masukan Nomor Pengajar" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Button type='submit' className="btn btn-primary">Simpan</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        )
    }
}
