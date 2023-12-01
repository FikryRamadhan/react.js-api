import React from "react";
import {Card} from 'react-bootstrap'
import { Link } from "react-router-dom";

const CardDashboard = () => {
    return (
        <Card>
            <Card.Header>Test Api</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Data Siswa Website Ini Menunjukan Jumlah Data Siswa Yang mengikuti Test Api.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Ingin Menambah Data Siswa <cite title="Source Title"><Link to='add-data'>Klik Disini</Link></cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}
export default CardDashboard;