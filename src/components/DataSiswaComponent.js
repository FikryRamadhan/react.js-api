import React from 'react';
import { Row, Col, Card, Button,} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const DataSiswaComponent = (
    { data, hapusData, modalShow},
) => {
    const guru = (data) => {
        if (data.teacher_id == 1) {
            return (
                <strong>Nama Guru:  Junedi S.Kom</strong>
            )
        } else if (data.teacher_id == 2) {
            return (
                <strong>Nama Guru:  Ilham S.Kom</strong>
            )
        } else if (data.teacher_id == 3) {
            return (
                <strong>Nama Guru:   Ajun S.Kom</strong>
            )
        }else if(data.teacher_id > 3 ){
            return (
                <strong>Nama Guru:   Fikry S.Kom</strong>
            )
        }
    }

    return (
        <Col md={4} xs={6} className="mb-4" >
            <Card className='shadow' key={data.id}>
                <Card.Img variant="center" style={{ position: 'center', width: '80%', }} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {guru(data)}
                        <br />Ini Adalah data Siswa Yang Mengikuti Test!
                    </Card.Text>
                    <Row>
                        <Col sm={3}>
                            <Button variant="warning text-light" onClick={() => modalShow(data)}>
                                <FontAwesomeIcon icon={faPenSquare}/>  Edit
                            </Button>
                        </Col>
                        <Col sm={4}>
                            <Button type='submit' onClick={() => hapusData(data.id)} variant="danger">
                                <FontAwesomeIcon icon={faTrash}/> Delete
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DataSiswaComponent;
