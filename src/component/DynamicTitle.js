import React from 'react';
import {Row, Col} from 'reactstrap';

function DynamicTitle () {
    return (
        <Row>
          <Col className="col-3">
            <h1 className="d-flex">question type</h1>
          </Col>
        </Row>
    );
}

export default DynamicTitle
