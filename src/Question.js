import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Header, Form, Divider, Checkbox, Icon, Progress } from 'semantic-ui-react'

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
    let { questionNumber, totalQuestions, title} = this.props;

    return (

        <Grid.Row style={{ maxWidth: 600 }} >
          <Grid.Column verticalAlign="top" width={2} stretched={true}>
            <Grid.Row color="green" style={{height: "15em"}}>
              <span style={{fontSize:"5em", color: "#3E3E3E"}}>1.</span>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={14} textAlign="left">
            <Grid.Row color="blue" >
              <span style={{fontSize:"1em", color: "grey"}}>{`Question ${questionNumber} of ${totalQuestions}`}</span>
            </Grid.Row>

            <Grid.Row>
              <Header as="h1">{title}</Header>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row>
              <Form>
                <Form.Field>
                  <Checkbox
                    label='iPhone'
                    name='checkboxRadioGroup'
                    value='iPhone'
                    checked={this.state.value === 'iPhone'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    label='Android'
                    name='checkboxRadioGroup'
                    value='Android'
                    checked={this.state.value === 'Android'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    label='Windows Phone'
                    name='checkboxRadioGroup'
                    value='WindowsPhone'
                    checked={this.state.value === 'WindowsPhone'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    label='Other'
                    name='checkboxRadioGroup'
                    value='Other'
                    checked={this.state.value === 'Other'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
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
