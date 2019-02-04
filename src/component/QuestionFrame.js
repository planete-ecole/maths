import React from 'react';
import {Row, Col} from 'reactstrap';

function QuestionFrame() {
    return (
        <Row className="justify-content-center">
            <Col className="d-flex p-1">
                <p className="d-flex flex-fill">question en cours</p>
            </Col>
            <Col className="d-flex p-1">
                <p className="d-flex flex-fill">réponse élève</p>
            </Col>
        </Row>
    )
}

export default QuestionFrame