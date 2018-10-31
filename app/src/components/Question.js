import React, { Component } from 'react';
import { Button, Grid, Header, Form, Divider, Icon, Progress, Segment } from 'semantic-ui-react'
import Option from './Option'

const percentDivider = 100;

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
    let percent = ((questionNumber/totalQuestions) * percentDivider);

    let { selectedOption } = this.state;
    let options = question.Options;

    const optionsItems = options.map((option) =>
      <Option key={option.Title.toString()} value={option.Title}
        selectedOption={selectedOption} handleChange={(value) =>
        this.handleOptionChange(null, value)} />
    );

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
                {optionsItems}
              </Form>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row>
              <Segment basic>
                {questionNumber > 1 &&
                  <Button icon labelPosition='left' color='grey' floated='left' onClick={this.props.handleBackClicked}>
                    BACK
                    <Icon name='left arrow' />
                  </Button>
                }

                {questionNumber <= totalQuestions &&
                  <Button icon labelPosition='right' color='orange' floated='right' onClick={this.props.handleNextClicked}>
                    NEXT
                    <Icon name='right arrow' />
                  </Button>
                }
              </Segment>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row>
              <Progress percent={percent} size='tiny' indicating color='orange'>
                <span style={{color:"grey", fontSize: "0.7em"}}>{percent}%</span>
              </Progress>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
    );
  }
}

export default App;
