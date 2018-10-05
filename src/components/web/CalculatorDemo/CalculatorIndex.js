import React, { Component, Fragment } from 'react';
import { Segment, Grid, Button, Header, Icon, Divider } from 'semantic-ui-react';

class CalculatorIndex extends Component {
  state = { 
    answer: null, 
    firstNum: null, 
    secondNum: null, 
    entered: false, 
    clear: false,
    calcInt: false
  }

  calculateNum = (num) => {
    const { calcInt } = this.state;
    if ( calcInt === false) {
      let num1 = num
      this.setState({ firstNum: num1 })
    } 
    else if ( calcInt === true ) {
      let num2 = num
      this.setState({ firstNum: num2 })
    }
    console.log(num)
  }

  //So I left off on the function below. I have firstNum and secondNum returning whats being inputed.
  //The case needs to be moved to the calculateAnswer function. calculateInt should only be seting the INT in state.
  //The calculateInt function should also be setting the state calcInt to true so the function calculateNum knows that 
  //when calcInt is true the next inputs go to num2.

  calculateInt = (int) => {
    const { calcInt, firstNum, secondNum, answer } = this.state;
    this.setState({ calcInt: !calcInt })
    let innerAnswer;
    console.log(innerAnswer)
    switch(int) {
      case '/':
        return innerAnswer = firstNum / secondNum;
      case '*':
        return innerAnswer = firstNum * secondNum;
      case '-':
        return innerAnswer = firstNum - secondNum;
      case '+':
        return innerAnswer = firstNum + secondNum;
      default:
        return null
    }
  }

  calculateAnswer = () => {
    const { firstNum, secondNum, numerator } = this.state;
  }

  render() {
    const { entered, clear, answer } = this.state;
    return(
      <Fragment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column width={6}>
              <Segment inverted>
                <Segment textAlign="center" color="blue">
                  <Header as="h2">Calculator</Header>
                </Segment>
                <Segment color="blue">
                  <Divider hidden/>
                    {answer}
                  <Divider hidden/>
                </Segment>
                <Grid>
                  <Grid.Row> {/*This row will have 7, 8, 9, and divide*/}
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(7)}>7</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(8)}>8</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(9)}>9</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="big" color="blue" onClick={() => this.calculateInt("/")}>
                        <Icon name="checkmark" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have 4, 5, 6, and multiply*/}
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(4)}>4</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(5)}>5</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(6)}>6</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="big" color="blue" onClick={() => this.calculateInt("*")}>
                        <Icon name="times" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have 1, 2, 3, and subtract*/}
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(1)}>1</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(2)}>2</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(3)}>3</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="big" color="blue" onClick={() => this.calculateInt("-")}>
                        <Icon name="minus" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have clear, 0, and add*/}
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="large" onClick={() => this.calculateNum(0)}>0</Button>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="big" color="blue" onClick={() => this.calculateInt("+")}>
                        <Icon name="plus" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have enter*/}
                    <Grid.Column textAlign="center" width={8}>
                      <Button size="huge" color="blue" onClick={() => this.setState({ clear: !clear })}>Clear</Button>
                    </Grid.Column>
                    <Grid.Column textAlign="center" width={8}>
                      <Button size="huge" color="blue" onClick={() => this.setState({ entered: !entered })}>Enter</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <Header as="h2">NOTE</Header>
              </Segment>
              <Segment color="blue">
                The <strong>Check</strong> is replacing the Divide since Semantic-UI doesn't have a Divide Icon :(
              </Segment>
            </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default CalculatorIndex;