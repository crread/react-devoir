import Link from "./../Link/Link";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home () {
    return (
        <>            
            <Row className="justify-content-md-center" >
                <Col xs={6}>
                    <p>Devoir react fait par Mickaël BERTHELOT</p>
                    <p>API utiliser : </p>
                    <ul> 
                        <li>- Gouv.api pour avoir accès à la liste des villes de France</li>
                        <li>- Weather.api pour avoir la météo sur une journée </li>
                    </ul>
                    <Link href="/site/cityData" className="float-left" >
                        Info sur une ville de France.
                    </Link>
                    <Link href="/site/cityWeather" className="float-right" >
                        Météo d'une ville de France.
                    </Link>
                </Col>
            </Row>
        </>
    )
}