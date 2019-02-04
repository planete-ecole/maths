import React, { Component } from 'react';
import { Container, Col, Row} from 'reactstrap';

/* import NumPad from './component/NumPad';
import NextQuestion from './component/NextQuestion'
import Timer from './component/Timer'
import QuestionProgress from './component/QuestionProgress'
import QuestionFrame from './component/QuestionFrame'
import DynamicTitle from './component/DynamicTitle';
 */
import DynamicTitle from 'maths/src/component/DynamicTitle'
import Timer from 'maths/src/component/Timer'
import NextQuestion from 'maths/src/component/NextQuestion'
import NumPad from 'maths/src/component/NumPad'
import QuestionProgress from 'maths/src/component/QuestionProgress'
import QuestionFrame from 'maths/src/component/QuestionFrame'


class App extends Component {
  render() {
    return (
      <Container>
        <DynamicTitle />

        <Row>
{/* affichage de la question en cours + réponse élève + pavé numérique + bouton valider */}
          <Col className="col-6 offset-3">
            <QuestionFrame />
            <NumPad />
            <NextQuestion />
          </Col>

{/* Timer + avancement question */}
          <Timer />
          <QuestionProgress />
        </Row>
      </Container>
    );
  }
}

export default App;
