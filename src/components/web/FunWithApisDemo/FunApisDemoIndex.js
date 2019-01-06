import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Header, Segment, Icon, Button, Image, Grid } from 'semantic-ui-react';

class ApiFunDemo extends Component {
  state = {
    allPokeMon: [],

    firstPokeMon: [], //This will be cleaned up eventually, but for now the excessive use of state is a proof of UI/UX concept, not arcitechural efficency.
    firstPokeImage: null,
    firstPokeMonNumber: -1,

    secondPokeMon: [],
    secondPokeImage: null,
    secondPokeMonNumber: 0,

    thirdPokeMon: [],
    thirdPokeImage: null,
    thirdPokeMonNumber: 1 
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
          this.setState({
            firstPokeMon: firstPokeMon, 
            firstPokeImage: firstPngImage 
          })
          console.log('first', firstPokeMon.name)
          console.log('first', firstPokeMonNumber)
          console.log('first', firstPokeMon)
        }).catch(err => console.log(err))
    } else {
      this.getFirstPokeMon
    }
  }

  getSecondPokeMon = () => {
    const { allPokeMon, secondPokeMonNumber } = this.state
    if (allPokeMon[secondPokeMonNumber].url !== null) {
      const secondPokeMonUrl = allPokeMon[secondPokeMonNumber].url;
      axios.get(secondPokeMonUrl)
        .then(response => {
          const secondPokeMon = response.data;
          const secondPngImage = secondPokeMon.sprites.front_default;
          this.setState({
            secondPokeMon: secondPokeMon, 
            secondPokeImage: secondPngImage 
          })
          console.log('second', secondPokeMon.name)
          console.log('second', secondPokeMonNumber)
          console.log('second', secondPokeMon)
        }).catch(err => console.log(err))
    } else {
      this.getSecondPokeMon
    }
  }

  getThirdPokeMon = () => {
    const { allPokeMon, thirdPokeMonNumber } = this.state
    if (allPokeMon[thirdPokeMonNumber].url !== null) {
      const thirdPokeMonUrl = allPokeMon[thirdPokeMonNumber].url;
      axios.get(thirdPokeMonUrl)
        .then(response => {
          const thirdPokeMon = response.data;
          const thirdPngImage = thirdPokeMon.sprites.front_default;
          this.setState({
            thirdPokeMon: thirdPokeMon, 
            thirdPokeImage: thirdPngImage 
          })
          console.log('third', thirdPokeMon.name)
          console.log('third', thirdPokeMonNumber)
          console.log('third', thirdPokeMon)
        }).catch(err => console.log(err))
    } else {
      this.getThirdPokeMon
    }
  }

  plusNumber = async () => {
    const { firstPokeMonNumber, secondPokeMonNumber, thirdPokeMonNumber } = this.state;
    await this.setState({ 
      firstPokeMonNumber: firstPokeMonNumber + 1, 
      secondPokeMonNumber: secondPokeMonNumber + 1, 
      thirdPokeMonNumber: thirdPokeMonNumber + 1 
    })
    this.getFirstPokeMon()
    this.getSecondPokeMon()
    this.getThirdPokeMon()
  }

  minusNumber = async () => {
    const { firstPokeMonNumber, secondPokeMonNumber, thirdPokeMonNumber } = this.state;
    if (firstPokeMonNumber === 0) {
      await this.setState({ firstPokeMonNumber: firstPokeMonNumber - 0 })
    } else {
      await this.setState({ firstPokeMonNumber: firstPokeMonNumber - 1 })
    }

    if (secondPokeMonNumber === 1) {
      await this.setState({ secondPokeMonNumber: secondPokeMonNumber - 0 })
    } else {
      await this.setState({ secondPokeMonNumber: secondPokeMonNumber - 1 })
    }

    if (thirdPokeMonNumber === 2) {
      await this.setState({ thirdPokeMonNumber: thirdPokeMonNumber - 0 })
    } else {
      await this.setState({ thirdPokeMonNumber: thirdPokeMonNumber - 1 })
    }
    this.getFirstPokeMon()
    this.getSecondPokeMon()
    this.getThirdPokeMon()
  }

  render() {
    const { 
      firstPokeMon, 
      firstPokeImage, 

      secondPokeMon, 
      secondPokeImage, 

      thirdPokeMon, 
      thirdPokeImage 
    } = this.state

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
              <Segment inverted>
                <Segment>
                  {secondPokeImage ?
                      <Fragment>
                        <Segment textAlign="center" inverted circular>
                          <Image src={secondPokeImage} size="large" circular/>
                        </Segment>
                        <Header as="h3">Name - {secondPokeMon.name}</Header>
                        <Header as="h5">Base XP - {secondPokeMon.base_experience}</Header>
                        <Header as="h5">Height - {secondPokeMon.height}</Header>
                        <Header as="h5">Weight - {secondPokeMon.weight}</Header>
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
                    {thirdPokeImage ?
                        <Fragment>
                          <Segment textAlign="center" inverted circular>
                            <Image src={thirdPokeImage} size="large" circular/>
                          </Segment>
                          <Header as="h3">Name - {thirdPokeMon.name}</Header>
                          <Header as="h5">Base XP - {thirdPokeMon.base_experience}</Header>
                          <Header as="h5">Height - {thirdPokeMon.height}</Header>
                          <Header as="h5">Weight - {thirdPokeMon.weight}</Header>
                        </Fragment>
                      :
                      <Header as="h3" textAlign="center">Push The Forward Button</Header>
                    }
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