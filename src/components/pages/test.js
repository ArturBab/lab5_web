import React, {useEffect, useState, Component} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row, Button, Spinner} from "react-bootstrap";

function MyComponent() {
    const [processors, setProcessors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(2);


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
    }, [])

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
        <div className="MyComponent">
            <div className="wrapper">
                <div className="cards">
                    {processors.slice(0, visible).map(renderCard)}
                </div>
            </div>
            {visible < processors.length && (
                <button onClick={loadMore}>Load 2 More</button>
            )}
        </div>
    );

}
export default MyComponent;