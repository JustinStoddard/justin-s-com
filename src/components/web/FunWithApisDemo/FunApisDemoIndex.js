import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Header, Segment, Icon, Button, Image, Grid } from 'semantic-ui-react';

class ApiFunDemo extends Component {
  state = {
    allPokeMon: [],
    firstPokeMon: [],
    firstPokeImage: null,
    firstPokeMonNumber: -1,
  }

  componentDidMount() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
    axios.get(apiUrl)
      .then(response => {
        const manyPokeMon = response.data.results.slice(0,20);
        this.setState({ allPokeMon: manyPokeMon });
        console.log("All Poke", manyPokeMon)
      }).catch(err => console.log(err))
  }

  getFirstPokeMon = () => {
    const { allPokeMon, firstPokeMonNumber } = this.state
    if (allPokeMon[firstPokeMonNumber].url !== null ) { //Re-runs this call if "pokeMonUrl" is null
      const firstPokeMonUrl = allPokeMon[firstPokeMonNumber].url; //Checks if allPokeMon does not equal null
      axios.get(firstPokeMonUrl)
        .then(response => {
          const firstPokeMon = response.data;
          const firstPngImage = firstPokeMon.sprites.front_default;
          this.setState({ firstPokeMon: firstPokeMon, firstPokeImage: firstPngImage })
          console.log(firstPokeMon.name)
          console.log(firstPokeMonNumber)
          console.log(firstPokeMon)
        }).catch(err => console.log(err))
    } else {
      this.getFirstPokeMon
    }
  }

  plusNumber = async () => {
    const { firstPokeMonNumber } = this.state;
    await this.setState({ firstPokeMonNumber: firstPokeMonNumber + 1 })
    this.getFirstPokeMon()
  }

  minusNumber = async () => {
    const { firstPokeMonNumber } = this.state;
    if (firstPokeMonNumber === 0) {
      await this.setState({ firstPokeMonNumber: firstPokeMonNumber - 0 })
    } else {
      await this.setState({ firstPokeMonNumber: firstPokeMonNumber - 1 })
    }
    this.getFirstPokeMon()
  }

  render() {
    const { firstPokeMon, firstPokeImage } = this.state
    return(
      <Fragment>
        <Segment inverted>
          <Segment textAlign="center" color="yellow">
            <Header as="h1">Under Construction</Header>
            <Icon loading name="spinner"/>
          </Segment>
        </Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}></Grid.Column>
              <Grid.Column width={4}>
                <Segment inverted>
                  <Segment textAlign="center">
                    <Button onClick={this.minusNumber} size="large" color="red" circular><Icon fitted name="arrow left" size="large"/></Button>
                    <Button onClick={this.plusNumber} size="large" color="red" circular><Icon fitted name="arrow right" size="large"/></Button>
                  </Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}></Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={4}>
                <Segment style={styles.segmentMove1} inverted>
                  <Segment>
                    <Header as="h1">2</Header>
                  </Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
              <Segment inverted>
                <Segment>
                  {firstPokeImage ?
                      <Fragment>
                        <Segment textAlign="center" inverted circular>
                          <Image src={firstPokeImage} size="large" circular/>
                        </Segment>
                        <Header as="h3">Name - {firstPokeMon.name}</Header>
                        <Header as="h5">Base XP - {firstPokeMon.base_experience}</Header>
                        <Header as="h5">Height - {firstPokeMon.height}</Header>
                        <Header as="h5">Weight - {firstPokeMon.weight}</Header>
                      </Fragment>
                    :
                    <Header as="h3" textAlign="center">Push The Forward Button</Header>
                  }
                </Segment>
              </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment style={styles.segmentMove1} inverted>
                  <Segment>
                    <Header as="h1">4</Header>
                  </Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          </Grid>
        {/* <Button onClick={this.getSinglePokeMon}>PokeMon</Button> */}
      </Fragment>
    )
  }
}

const styles = {
  segmentMove1: {
    marginTop: '-25px'
  },
  segmentMove2: {
    marginTop: '-75px'
  }
}

export default ApiFunDemo