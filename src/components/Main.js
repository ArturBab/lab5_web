import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row, Button, Spinner} from "react-bootstrap";

function Main(){
    return(
        <>
          <h1>Интернет-магазин техники ООО "SHUK ABROCHNOV"</h1>

            <h3>Добро пожаловать!
                <br/>
                У нас в продаже доступны:
                <br/>
                <br/>
                <h3>Процессоры:</h3>
                <br/>
            </h3>
            <Row xs={1} md={2} className="g-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img src="AMD_Logo.png" />
                <Card.Img variant="" src="Intel-logo-2022.png" />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Процессоры</Card.Subtitle>
                    <Card.Text>
                        AMD лучше INTELSUS еще и за счет 12 нм техпроцесса, в отличие от 14 нм у Intel.
                        Также у AMD есть свободный множитель, что позволяет вручную изменять частоту процессора.
                        Максимальная частота немного выше у Intel — 4,4 ГГц против 4,35 ГГц у AMD.
                    </Card.Text>
                    <Card.Link href="/amd">Перейти к каталогу</Card.Link>
                </Card.Body>
            </Card>
            </Row>

            <br/>
            <h3>и видеокарты:</h3>
            <br/>
            <Row xs={1} md={2} className="g-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img src="500px-AMD_Radeon_logo_2019.png" />
                    <Card.Img variant="top" src="GeForce-logo.png" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Видеокарты</Card.Subtitle>
                        <Card.Text>
                            Тоже зе бест.
                        </Card.Text>
                        <Card.Link href="/cards">Перейти к каталогу</Card.Link>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
}

export default Main;