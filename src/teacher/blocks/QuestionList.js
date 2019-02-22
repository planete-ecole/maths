/* import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { Card, QuestionEditInput } from '../../components'

function onQuestionChange (questions, value, index, onChange) {
  questions[index] = value
  onChange('questions', questions)
}

function onQuestionRemove (questions, index, onChange) {
  questions.splice(index, 1)
  onChange('questions', questions)
}

const component = ({questions, onChange}) => (
  <Card title={('title.word_list')}>
    <div>
      { questions.map((question, index) => (
        <QuestionEditInput
          key={index}
          onChange={value => onQuestionChange(questions, value, index, onChange)}
          onDelete={() => onQuestionRemove(questions, index, onChange)}
          value={question}
        />
      ))}
    </div>
    <Button block outline color='primary' onClick={() => onChange('questions', questions.concat(['']))}>
      {('action.add_word')}
    </Button>
  </Card>
)

component.propTypes = {
  questions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default component
 */
