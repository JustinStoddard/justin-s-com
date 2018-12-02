import React, { Component, Fragment } from 'react';
import { Segment, Grid, Button, Header, Icon } from 'semantic-ui-react';

class CalculatorIndex extends Component {
  state = { 
    answer: "", 
    firstNum: "", 
    secondNum: "",
    operator: "", 
    entered: false, 
    calcInt: false
  }


  showState = () => {
    const { answer, firstNum, secondNum, operator, entered, calcInt } = this.state
    console.log('Answer: ',answer)
    console.log('First Num: ',firstNum)
    console.log('Second Num: ',secondNum)
    console.log('Operator: ',operator)
    console.log(entered)
    console.log(calcInt)
  }

  calculateNum1 = (num) => {
    const { calcInt } = this.state;
    if ( calcInt === false ) {
      let num1 = num
      console.log(num1)
      this.setState({ firstNum: num1 })
    }
  }

  calculateNum2 = (num) => {
    const { calcInt } = this.state;
    if ( calcInt === true) {
      let num2 = num
      console.log(num2)
      this.setState({ secondNum: num2 })
    } 
  }

  calculateInt = (int) => {
    let operator = int;
    console.log(operator)
    this.setState({ calcInt: true, operator: operator })
  }

  changeEntered = () => {
    this.setState({ entered: true })
  }

  //I need to figure out a way to set the state of "entered" to true without calling it inside
  //the onClick or the function below. I cant call setState in the function below because i'm already using it. 
  //I also need it to be called before the "if" statement so the code can do the calculation. 
  calculateAnswer = () => {
    const { firstNum, secondNum, operator } = this.state;
    this.changeEntered()
      if (operator === "divide") {
        let num1 = firstNum;
        let num2 = secondNum; 
        const innerAnswer = num1 / num2;
        console.log(`Is ${innerAnswer}`)//Logging Answer
        this.setState({ answer: innerAnswer })
      } 
      else if (operator === "multiply") {
        let num1 = firstNum;
        let num2 = secondNum;
        const innerAnswer = num1 * num2;
        console.log(`Is ${innerAnswer}`)//Logging Answer
        this.setState({ answer: innerAnswer })
      } 
      else if (operator === "subtract") {
        let num1 = firstNum;
        let num2 = secondNum;
        const innerAnswer = num1 - num2;
        console.log(`Is ${innerAnswer}`)//Logging Answer
        this.setState({ answer: innerAnswer })
      } 
      else if (operator === "add") {
        let num1 = firstNum;
        let num2 = secondNum;
        const innerAnswer = num1 + num2;
        console.log(`Is ${innerAnswer}`)//Logging Answer
        this.setState({ answer: innerAnswer })
    }
  }

  render() {
    const { entered, answer, calcInt, firstNum, secondNum, operator } = this.state;
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
                  { entered ?
                      <Segment textAlign="center" color="blue">
                        <Header as="h3">Is {answer}</Header>
                      </Segment>
                    :
                    <Fragment>
                      <Segment textAlign="center" color="blue">
                        <Header as="h3">{firstNum} {operator} {secondNum}</Header>
                      </Segment>
                    </Fragment>
                  }
                </Segment>
                <Grid>
                  <Grid.Row> {/*This row will have 7, 8, 9, and divide*/}
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(7)}>7</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(7)}>7</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(8)}>8</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(8)}>8</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(9)}>9</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(9)}>9</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="big" color="blue" onClick={() => this.calculateInt("divide")}>
                        <Icon name="checkmark" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have 4, 5, 6, and multiply*/}
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(4)}>4</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(4)}>4</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(5)}>5</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(5)}>5</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(6)}>6</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(6)}>6</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="big" color="blue" onClick={() => this.calculateInt("multiply")}>
                        <Icon name="times" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have 1, 2, 3, and subtract*/}
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(1)}>1</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(1)}>1</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(2)}>2</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(2)}>2</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(3)}>3</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(3)}>3</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="big" color="blue" onClick={() => this.calculateInt("subtract")}>
                        <Icon name="minus" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have clear, 0, and add*/}
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={4}>
                      { calcInt ?
                          <Button size="large" onClick={() => this.calculateNum2(0)}>0</Button>
                        :
                          <Button size="large" onClick={() => this.calculateNum1(0)}>0</Button>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={4}>
                      <Button size="big" color="blue" onClick={() => this.calculateInt("add")}>
                        <Icon name="plus" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have enter*/}
                    <Grid.Column textAlign="center" width={8}>
                      <Button size="huge" color="blue" onClick={() => this.setState({ answer: "", firstNum: "", secondNum: "", operator: "", entered: false, calcInt: false })}>Clear</Button>
                    </Grid.Column>
                    <Grid.Column textAlign="center" width={8}>
                      <Button size="huge" color="blue" onClick={() => this.calculateAnswer()}>Enter</Button>
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
                The <strong>Check</strong> is replacing the Divide since Semantic-UI doesn't have a Divide Icon. <strong>This Calculator only does single digit operations.</strong> This will change in the future :)
              </Segment>
              <Button onClick={() => this.showState()}>LogState</Button>
            </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default CalculatorIndex;