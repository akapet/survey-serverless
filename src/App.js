import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Header, Form, Divider, Checkbox, Icon } from 'semantic-ui-react'

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
      <div className="login-form">
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>

        <Grid relaxed columns={2}  textAlign='center' style={{ height: '100%' }} verticalAlign='middle' padded="horizontally">
          <Grid.Row style={{ maxWidth: 600 }} >
            <Grid.Column verticalAlign="top" width={2} style={{marginTop: "-3.5em"}} >
              <span style={{fontSize:"5em", color: "#3E3E3E"}}>1.</span>
            </Grid.Column>
            <Grid.Column width={14} textAlign="left">
              <Grid.Row color="blue" >
                <span style={{fontSize:"1em", color: "grey"}}>Question 1 of 2</span>
              </Grid.Row>
              <Divider hidden/>
              <Grid.Row>
                <Header>What phone do you use?</Header>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;