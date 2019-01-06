import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Header, Segment, Icon, Button, Image, Grid, Divider } from 'semantic-ui-react';

class ApiFunDemo extends Component {
  state = {
    allPokeMon: [],

    firstPokeMon: [], //This will be cleaned up eventually, but for now the excessive use of state is a proof of UI/UX concept, not arcitechural efficency.
    firstPokeImage: null,
    firstPokeMonNumber: -1,
    firstPokeArrayNumber: null,

    secondPokeMon: [],
    secondPokeImage: null,
    secondPokeMonNumber: 0,
    secondPokeArrayNumber: null,

    thirdPokeMon: [],
    thirdPokeImage: null,
    thirdPokeMonNumber: 1,
    thirdPokeArrayNumber: null,
  }

  componentDidMount() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
    axios.get(apiUrl)
      .then(response => {
        const manyPokeMon = response.data.results.slice(0,50);
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
            firstPokeImage: firstPngImage,
            firstPokeArrayNumber: allPokeMon.length - 1
          })
          console.log('first', firstPokeMon.name)
          console.log('first', firstPokeMonNumber)
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
          const secondPngImage = secondPokeMon.sprites.front_default;              //I'd preferr not to do 3 API calls but its the only way I know how to do this for now
          this.setState({
            secondPokeMon: secondPokeMon, 
            secondPokeImage: secondPngImage,
            secondPokeArrayNumber: allPokeMon.length -1
          })
          console.log('second', secondPokeMon.name)
          console.log('second', secondPokeMonNumber)
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
            thirdPokeImage: thirdPngImage,
            thirdPokeArrayNumber: allPokeMon.length - 1
          })
          console.log('third', thirdPokeMon.name)
          console.log('third', thirdPokeMonNumber)
        }).catch(err => console.log(err))
    } else {
      this.getThirdPokeMon
    }
  }

  plusNumber = async () => {
    const { 
      firstPokeMonNumber,
      firstPokeArrayNumber, 
      secondPokeMonNumber, 
      thirdPokeMonNumber, 
    } = this.state;

    if (firstPokeMonNumber === firstPokeArrayNumber) {
      await this.setState({ firstPokeMonNumber: 0 })
    } else {
      await this.setState({ firstPokeMonNumber: firstPokeMonNumber + 1 })
    }

    if (secondPokeMonNumber === firstPokeArrayNumber) {
      await this.setState({ secondPokeMonNumber: 0 })
    } else {
      await this.setState({ secondPokeMonNumber: secondPokeMonNumber + 1 })
    }

    if (thirdPokeMonNumber === firstPokeArrayNumber) {
      await this.setState({ thirdPokeMonNumber: 0 })
    } else {
      await this.setState({ thirdPokeMonNumber: thirdPokeMonNumber + 1 })
    }
    this.getFirstPokeMon()
    this.getSecondPokeMon()
    this.getThirdPokeMon()
  }

  minusNumber = async () => {
    const { 
      firstPokeMonNumber, 
      firstPokeArrayNumber, 
      secondPokeMonNumber,
      secondPokeArrayNumber,
      thirdPokeMonNumber, 
      thirdPokeArrayNumber
    } = this.state;

    if (firstPokeMonNumber === 0) {
      await this.setState({ firstPokeMonNumber: firstPokeArrayNumber })
    } else {
      await this.setState({ firstPokeMonNumber: firstPokeMonNumber - 1 })
    }

    if (secondPokeMonNumber === 1) {
      await this.setState({ secondPokeMonNumber: firstPokeArrayNumber - firstPokeArrayNumber })
    } else if (secondPokeMonNumber === 0) {
      await this.setState({ secondPokeMonNumber: secondPokeArrayNumber })
    } else {
      await this.setState({ secondPokeMonNumber: secondPokeMonNumber - 1 })
    }

    if (thirdPokeMonNumber === 2) {
      await this.setState({ thirdPokeMonNumber: firstPokeArrayNumber - firstPokeArrayNumber + 1 })
    } else if (thirdPokeMonNumber === 1) {
      await this.setState({ thirdPokeMonNumber: firstPokeArrayNumber - firstPokeArrayNumber })
    } else if (thirdPokeMonNumber === 0) {
      await this.setState({ thirdPokeMonNumber: thirdPokeArrayNumber })
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
                  <Segment textAlign="center" color="red">
                    <Button onClick={this.minusNumber} size="large" color="red" circular><Icon fitted name="arrow left" size="large"/></Button>
                    <Button onClick={this.plusNumber} size="large" color="red" circular><Icon fitted name="arrow right" size="large"/></Button>
                  </Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}></Grid.Column>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={4}>
                <Segment style={styles.segmentMove1} inverted>
                  {firstPokeImage ?
                    <Fragment>
                      <Segment color="red">
                        <Header as="h4" textAlign="center" style={styles.pokeMonName}>{firstPokeMon.name}</Header>
                        <Segment textAlign="center" inverted circular>
                          <Image src={firstPokeImage} size="large" circular/>
                        </Segment>
                      </Segment>
                    </Fragment>
                  :
                    <Fragment>
                      <Segment textAlign="center" color="red">
                        <Icon loading name="spinner"/>
                      </Segment>
                    </Fragment>
                  }
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
              <Segment inverted>
                <Segment color="red" textAlign="center">
                  {secondPokeImage ?
                      <Fragment>
                        <Header as="h4" textAlign="center" style={styles.pokeMonName}>{secondPokeMon.name}</Header>
                        <Segment textAlign="center" inverted circular>
                          <Image src={secondPokeImage} size="large" circular/>
                        </Segment>
                        <Divider hidden/>
                        <Button color="red" size="large">View Stats</Button>
                      </Fragment>
                    :
                      <Header as="h3" textAlign="center">Push The Forward Button</Header>
                  }
                </Segment>
              </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment style={styles.segmentMove1} inverted>
                  {thirdPokeImage ?
                      <Fragment>
                        <Segment color="red">
                          <Header as="h4" textAlign="center" style={styles.pokeMonName}>{thirdPokeMon.name}</Header>
                          <Segment textAlign="center" inverted circular>
                            <Image src={thirdPokeImage} size="large" circular/>
                          </Segment>
                        </Segment>
                      </Fragment>
                    :
                      <Fragment>
                        <Segment textAlign="center" color="red">
                          <Icon loading name="spinner"/>
                        </Segment>
                      </Fragment>
                  }
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
  },
  pokeMonName: {
    textTransform: 'capitalize',
    fontSize: '25px'
  }
}

export default ApiFunDemo