import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";
import axios from 'axios';
import CardDashboard from "./CardComponent";
import { API_URL } from "../utils/constant";
import DataSiswaComponent from './DataSiswaComponent';
import Swal from 'sweetalert2';
import ModalEdit from "./ModalEdit";

export default class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            showModal: false,
            siswa: false,
        }
    }

    // Get Data Dari  Api
    componentDidMount() {
        axios.get(API_URL + 'data')
            .then(res => {
                const data = res.data;
                this.setState({ data });
            })
            .catch(error => {
                console.log('error !!', error)
            })
    }

    handleShow = (data) => {
        this.setState({
            showModal: true,
            siswa: data,
            name: this.handleName,
            teacher_id: this.handleTeacher
        })
        console.log(data);
    }

    handleCloce = () => {
        this.setState({
            showModal: false,
        })
    }

    handleName = event => {
        this.setState({ name: event.target.value });
    }

    handleTeacher = event => {
        this.setState({ teacher_id: event.target.value });
    }

    handleSubmitUpdate = (event) => {
        event.preventDefault();
        const siswa = {
            id: this.state.siswa.id,
            name: this.state.name,
            teacher_id: this.state.teacher_id,
        }
        this.handleCloce()
        axios.patch(API_URL + 'update', siswa)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Update",
                    text: 'Data Hasbenn Updated',
                    icon: "success",
                    timer: 500
                })
                setTimeout(function () {
                    window.location.reload(true);
                }, 1000);
            })
            .catch(error => {
                console.log('error !!', error)
            })
    }

    hapusData = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if(result.isConfirmed) {
                axios.delete(API_URL + 'delete?id=' + id)
                .then(res => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    setTimeout(function () {
                        window.location.reload(true);
                    }, 500);
                })
            }
        })
       
    }

    render() {
        const { data } = this.state.data
        return (
            <Container className="mt-5">
                <CardDashboard />
                <div className='mt-4'>
                    <Row>
                        {data && data.map((siswa) => (
                            <DataSiswaComponent
                                key={siswa.id}
                                data={siswa}
                                hapusData={this.hapusData}
                                modalShow={this.handleShow}
                            />
                        ))}
                        <ModalEdit
                            handleCloce={this.handleCloce}
                            handleName={this.handleName}
                            handleTeacher={this.handleTeacher}
                            handleSubmitUpdate={this.handleSubmitUpdate}
                            {...this.state}
                        />
                    </Row>
                </div>
            </Container>
        )
    }
}
