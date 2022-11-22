import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row, Button, Spinner} from "react-bootstrap";
import axios from "axios";

function GetCards(){

    const [cards, setCards] = useState([]);
    const [visible, setVisible] = useState(2);
    const [loading, setLoading] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");


    const loadMore = () => {
        setVisible(visible + 2);
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/cards')
            .then(res => {
                console.log(res)
                setCards(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);



    const renderCard = (card, index) => {
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>
                        {card.brand} {card.line}
                    </Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Цена: {card.price} руб.</li>
                            <li>Описание: {card.desc}</li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Заказать</Button>
                </Card.Body>
            </Card>
        );
    };

    return(
        <>
            <h1>КАТАЛОГ ВИДЕОКАРТ</h1>
            <h3>Поиск</h3>
            <input
                type="text"
                placeholder="Найти по..."
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            {loading ? (<h4>Загружаем...</h4>):(
                (cards.filter((value) =>{
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

export default GetCards;