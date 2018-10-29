import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Header, Form, Divider, Checkbox, Icon, Progress } from 'semantic-ui-react'
import Option from './Option'

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     selectedOption: ""
   };
 }

  handleChange = (e, { value }) => {
    this.setState({ selectedOption: value });
  }

  handleOptionChange = (e, value) => {
    this.setState({ selectedOption: value });
  }

  render() {
    let { questionNumber, question, totalQuestions } = this.props;
    let { selectedOption } = this.state;

    return (
        <Grid.Row style={{ maxWidth: 600 }} >
          <Grid.Column verticalAlign="top" width={2} stretched={true}>
            <Grid.Row color="green" style={{height: "15em"}}>
              <span style={{fontSize:"5em", color: "#3E3E3E"}}>{questionNumber}.</span>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={14} textAlign="left">
            <Grid.Row color="blue" >
              <span style={{fontSize:"1em", color: "grey"}}>{`Question ${questionNumber} of ${totalQuestions}`}</span>
            </Grid.Row>

            <Grid.Row>
              <Header as="h1">{question.Title}</Header>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row>
              <Form>
                <Option value="iPhone" selectedOption={selectedOption} handleChange={(value) => this.handleOptionChange(null, value)} />
                <Option value="Android" selectedOption={selectedOption} handleChange={(value) => this.handleOptionChange(null, value)}/>
                <Option value="Windows Phone" selectedOption={selectedOption} handleChange={(value) => this.handleOptionChange(null, value)}/>
                <Option value="Other" selectedOption={selectedOption} handleChange={(value) => this.handleOptionChange(null, value)}/>
              </Form>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row>
              <Button icon labelPosition='right' color='grey'>
                NEXT
                <Icon name='right arrow' />
              </Button>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row>
              <Progress percent={50} size='tiny' indicating color='orange'>
                <span style={{color:"grey", fontSize: "0.7em"}}>50%</span>
              </Progress>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
    );
  }
}

export default App;
