import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row, Button, Spinner} from "react-bootstrap";
import axios from "axios";


function GetProcessors(){

    const [processors, setProcessors] = useState([]);
    const [visible, setVisible] = useState(2);
    const [loading, setLoading] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");


    const loadMore = () => {
        setVisible(visible + 2);
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/processors')
            .then(res => {
                console.log(res)
                setProcessors(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);



    const renderCard = (processor, index) => {
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>
                        {processor.brand} {processor.line}
                    </Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Цена: {processor.price} руб.</li>
                            <li>Описание: {processor.desc}</li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Заказать</Button>
                </Card.Body>
            </Card>
        );
    };

    return(
        <>
            <h1>КАТАЛОГ ПРОЦЕССОРОВ</h1>
            <h3>Поиск</h3>
            <input
                type="text"
                placeholder="Найти по..."
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            {loading ? (<h4>Загружаем...</h4>):(
                (processors.filter((value) =>{
                    if(searchTitle === ""){
                        return value
                    }
                    else if (value.brand.toLowerCase().includes(searchTitle.toLowerCase())) {
                        return value
                    }
                    else if (value.line.toLowerCase().includes(searchTitle.toLowerCase())) {
                        return value
                    }
                }).map(renderCard))
            )}

        </>
    );

}

export default GetProcessors;