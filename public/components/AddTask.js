import React from 'react'
import {Fieldset, Field, createValue} from 'react-forms'

class Form extends React.Component {

  constructor(props) {
    super(props)
    let formValue = createValue({
      value: props.value,
      onChange: this.onChange.bind(this)
    })
    this.state = {formValue}
  }

  onChange(formValue) {
    this.setState({formValue})
  }

  render() {
    return (
      <Fieldset formValue={this.state.formValue}>
        <Field select="firstName" label="First name" />
        <Field select="lastName" label="Last name" />
      </Fieldset>
    )
  }
}

import {render} from 'react-dom'

// render(
//   <Form value={{firstName: 'Michael', lastName: 'Jackson'}} />,
//   document.getElementById('form')
// )
