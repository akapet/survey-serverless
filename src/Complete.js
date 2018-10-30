import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react'

class Complete extends Component {
  render() {
    return (
      <Grid.Row >
        <Grid.Column verticalAlign="top" stretched={true}>
          <Grid.Row color="green" style={{height: "15em"}}>
            <Divider horizontal>Thank you so much</Divider>
            <Divider hidden />
            <span style={{fontSize: "2.5em"}}>
              Here's $5 Starbucks coupon for your trouble:
            </span>
            <p style={{fontSize: "3em"}}>
              STARBUCKS987-T
            </p>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Complete;
