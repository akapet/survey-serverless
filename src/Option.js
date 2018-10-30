import React, { Component } from 'react';
import './App.css';
import { Form, Checkbox } from 'semantic-ui-react'

class Option extends Component {
  handleChange = (e, { value }) => {
    this.props.handleChange(value);
  }

  render() {
    let { value, selectedOption} = this.props;

    return (
      <Form.Field>
        <Checkbox
          label={value}
          name='checkboxRadioGroup'
          value={value}
          checked={selectedOption === value}
          onChange={this.handleChange}
        />
      </Form.Field>
    );
  }
}

export default Option;
