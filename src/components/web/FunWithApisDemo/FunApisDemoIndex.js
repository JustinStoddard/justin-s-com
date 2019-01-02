import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Header, Segment, Icon, Button, Image, Grid } from 'semantic-ui-react';

class ApiFunDemo extends Component {
  state = {
    allPokeMon: [],
    pokeMon: [],
    pokeImage: null,
    pokeMonNumber: -1,
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

  getSinglePokeMon = () => {
    const { allPokeMon, pokeMonNumber } = this.state
    if (allPokeMon[pokeMonNumber].url !== null ) { //Re-runs this call if "pokeMonUrl" is null
      const pokeMonUrl = allPokeMon[pokeMonNumber].url; //Checks if allPokeMon does not equal null
      axios.get(pokeMonUrl)
        .then(response => {
          const pokeMon = response.data;
          const pngImage = pokeMon.sprites.front_default;
          this.setState({ pokeMon: pokeMon, pokeImage: pngImage })
          console.log(pokeMon.name)
          console.log(pokeMonNumber)
        }).catch(err => console.log(err))
    } else {
      this.getSinglePokeMon
    }
  }

  plusNumber = async () => {
    const { pokeMonNumber } = this.state;
    await this.setState({ pokeMonNumber: pokeMonNumber + 1 })
    this.getSinglePokeMon()
  }

  minusNumber = async () => {
    const { pokeMonNumber } = this.state;
    if (pokeMonNumber === 0) {
      await this.setState({ pokeMonNumber: pokeMonNumber - 0 })
    } else {
      await this.setState({ pokeMonNumber: pokeMonNumber - 1 })
    }
    this.getSinglePokeMon()
  }

  render() {
    const { pokeMon, pokeImage } = this.state
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
                    <Button onClick={this.minusNumber} size="large" color="red"><Icon fitted name="arrow left" size="large"/></Button>
                    <Button onClick={this.plusNumber} size="large" color="red"><Icon fitted name="arrow right" size="large"/></Button>
                  </Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}></Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}></Grid.Column>
              <Grid.Column width={4}>
              <Segment inverted>
                <Segment>
                  {pokeMon !== [] ?
                      <Fragment>
                        <Segment textAlign="center" inverted>
                          {pokeImage ? <Image src={pokeImage} size="large"/> : <Icon loading name="spinner"/>}
                        </Segment>
                        <Header as="h3">Name - {pokeMon.name}</Header>
                        <Header as="h5">Base XP - {pokeMon.base_experience}</Header>
                        <Header as="h5">Height - {pokeMon.height}</Header>
                        <Header as="h5">Weight - {pokeMon.weight}</Header>
                      </Fragment>
                    :
                    <Header as="h3">Push The Forward Button</Header>
                  }
                </Segment>
              </Segment>
              </Grid.Column>
              <Grid.Column width={6}></Grid.Column>
            </Grid.Row>
          </Grid>
        {/* <Button onClick={this.getSinglePokeMon}>PokeMon</Button> */}
      </Fragment>
    )
  }
}

export default ApiFunDemo