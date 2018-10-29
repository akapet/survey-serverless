import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Header, Form, Divider, Checkbox, Icon, Progress } from 'semantic-ui-react'
import Question from './Question'

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     value: ""
   };
 }

  handleChange = (e, { value }) => {
    this.setState({ value });
  }

  render() {
    return (
      <div className="question-form">
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.question-form {
            height: 100%;
          }
        `}</style>

        <Grid relaxed columns={2}  textAlign='center' style={{ height: '100%' }} verticalAlign='middle' padded="horizontally">
          <Question questionNumber={1} totalQuestions={2} title="What phone do you use?" />
        </Grid>
      </div>
    );
  }
}

export default App;
