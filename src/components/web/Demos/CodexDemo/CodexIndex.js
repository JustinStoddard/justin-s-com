//This demo is a little special to me. I had the idea to create virtual world inisde this demo. The goal is create a small 
//simulation with physics, characters, and other objects that interact with eachother in special ways. This is going to be fun.
//All the code here is more experimental and may turn into a big ball of mud.  

import React, { Component, Fragment } from 'react';
import { Header, Button, Segment, Grid } from 'semantic-ui-react';

class Codex extends Component {
  state = {
    units: { 
      unit1: { length: 2, width: 2, height: 2, volume: 8, id: 1 },
    },
    world: {
      y: null, //height
      x: null, //length
      z: null, //width
      volume: null
    },
  }

  logState = () => {
    const { units, world } = this.state;
    console.log('Units', units);
    console.log('World', world);
    console.log(world)
  }

  worldGenerate = () => {
    const { units } = this.state;
    let worldHeight = units.unit1.id * 10;
    let worldWidth = units.unit1.id * 10;
    let worldLength = units.unit1.id * 10;
    this.setState({ 
      world: { 
        y: worldHeight, z: worldWidth, x: worldLength, volume: worldLength * worldHeight * worldWidth
      }
    });
  }

  userGenerate = () => {
    
  }

  render() {
    return(
      <Fragment>
        <Header as="h1">Codex Demo</Header>
        <Segment textAlign="center" inverted>
          <Segment color="blue">
            <Button onClick={this.worldGenerate}>Generate</Button>
            <Button onClick={this.logState}>LogState</Button>
          </Segment>
        </Segment>
      </Fragment>
    )
  }
}

export default Codex;