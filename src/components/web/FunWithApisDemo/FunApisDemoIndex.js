import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Header, Segment, Icon, Button } from 'semantic-ui-react';

class ApiFunDemo extends Component {
  state = {
    allPokeMon: [],
    pokeMon: [],
  }

  componentDidMount() {
    this.getAllPokeMon();
  }

  getAllPokeMon = async () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
    await axios.get(apiUrl)
      .then(response => {
        const manyPokeMon = response.data.results.slice(0,10);
        this.setState({ allPokeMon: manyPokeMon });
        console.log("All Poke", manyPokeMon)
      }).catch(err => console.log(err))
  }

  getSinglePokeMon = async () => {
    const { allPokeMon } = this.state
    console.log(allPokeMon)
    let randomNumber = Math.floor((Math.random() * 10) + 1) //Generates a number between 1 & 10
    const pokeMonUrl = allPokeMon !== null ? allPokeMon[randomNumber].url : console.log("Variable 'allPokeMon' is null") //Checks if allPokeMon does not equal null
    console.log(pokeMonUrl)
    if (pokeMonUrl === null ) { //Re-runs this call if "pokeMonUrl" is null
      this.getSinglePokeMon
    }
    await axios.get(pokeMonUrl)
      .then(response => {
        const pokeMon = response.data;
        this.setState({ pokeMon: pokeMon })
        console.log(randomNumber)
        console.log(pokeMon.name)
        console.log(pokeMon)
      }).catch(err => console.log(err))
  }

  render() {
    const { pokeMon, allPokeMon } = this.state
    // console.log(pokeMon[number])
    return(
      <Fragment>
        <Segment inverted>
          <Segment textAlign="center" color="yellow">
            <Header as="h1">Under Construction</Header>
            <Icon loading name="spinner"/>
          </Segment>
        </Segment>
        <Segment>
          <Header as="h3">Name - {pokeMon.name}</Header>
          <Header as="h3">Base XP - {pokeMon.base_experience}</Header>
          <Header as="h3">Height - {pokeMon.height}</Header>
          <Header as="h3">Weight - {pokeMon.weight}</Header>
        </Segment>
        <Button onClick={this.getAllPokeMon}>All Pokemon</Button>
        <Button onClick={this.getSinglePokeMon}>One Pokemon</Button>
      </Fragment>
    )
  }
}

export default ApiFunDemo