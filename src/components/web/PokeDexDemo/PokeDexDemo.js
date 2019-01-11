import React, { Component, Fragment } from 'react';
import axios from 'axios';
import _ from 'lodash'
import Loadable from 'react-loadable';
import { Header, Segment, Icon, Grid, Divider } from 'semantic-ui-react';
import FirstPoke from './FirstPoke';
import SecondPoke from './SecondPoke';
import ThirdPoke from './ThirdPoke';
import SearchBar from './SearchBar';
import Loader from '../../../Loader';

const StatLoader = Loadable({
  loader: () => import('./ViewStats'),
  loading: () => <Loader/>
})

class ApiFunDemo extends Component {
  state = {
    allPokeMon: [],
    viewStats: false,
    pokeMonInput: '',
    pokeMonSelect: [],

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
        const manyPokeMon = response.data.results.slice(0,100);
        this.setState({ allPokeMon: manyPokeMon });
        console.log("All Poke", manyPokeMon)
      }).catch(err => console.log(err))
  }

  getFirstPokeMon = () => {
    const { allPokeMon, firstPokeMonNumber } = this.state
    if (allPokeMon[firstPokeMonNumber].url !== null ) { //Re-runs this call if "pokeMonUrl" is null
      const firstPokeMonUrl = allPokeMon[firstPokeMonNumber].url;
      axios.get(firstPokeMonUrl)
        .then(async response => {
          const firstPokeMon = response.data;
          const firstPngImage = firstPokeMon.sprites.front_default;
          await this.setState({
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

  getSecondPokeMon = async () => {
    const { allPokeMon, secondPokeMonNumber } = this.state
    if (allPokeMon[secondPokeMonNumber].url !== null) {
      const secondPokeMonUrl = allPokeMon[secondPokeMonNumber].url;
      axios.get(secondPokeMonUrl)
        .then(async response => {
          const secondPokeMon = response.data;
          const secondPngImage = secondPokeMon.sprites.front_default;              //I'd preferr not to do 3 API calls but its the only way I know how to do this for now because of the way this API handles GETing data.
          await this.setState({
            secondPokeMon: secondPokeMon, 
            secondPokeImage: secondPngImage,
            secondPokeArrayNumber: allPokeMon.length -1
          })
          console.log(secondPokeMon)
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
        .then(async response => {
          const thirdPokeMon = response.data;
          const thirdPngImage = thirdPokeMon.sprites.front_default;
          await this.setState({
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

  findPokeMon = () => { 
    const { 
      allPokeMon,
      pokeMonSelect,
      firstPokeMonNumber,
      secondPokeMonNumber,
      thirdPokeMonNumber
    } = this.state
    const wantedPokeMon = _.findIndex(allPokeMon, function(p) {
      return p.name == pokeMonSelect
    })
    this.setState({
      secondPokeMonNumber: wantedPokeMon,
      firstPokeMonNumber: wantedPokeMon - 1,
      thirdPokeMonNumber: wantedPokeMon + 1
    })
    this.getFirstPokeMon()
    this.getSecondPokeMon()
    this.getThirdPokeMon()
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
      await this.setState({ secondPokeMonNumber: 0, viewStats: false })
    } else {
      await this.setState({ secondPokeMonNumber: secondPokeMonNumber + 1, viewStats: false })
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
      await this.setState({ secondPokeMonNumber: firstPokeArrayNumber - firstPokeArrayNumber, viewStats: false })
    } else if (secondPokeMonNumber === 0) {
      await this.setState({ secondPokeMonNumber: secondPokeArrayNumber, viewStats: false })
    } else {
      await this.setState({ secondPokeMonNumber: secondPokeMonNumber - 1, viewStats: false })
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


  viewStats = () => {
    const { viewStats } = this.state
    this.setState({ viewStats: !viewStats })
  }

  handleChange = async (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: await value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.setState(prevState => ({
      pokeMonInput: '',
      pokeMonSelect: prevState.pokeMonInput.toLowerCase()
    }))
    this.findPokeMon()
  }

  render() {
    const { 
      firstPokeMon, 
      firstPokeImage, 
      secondPokeMon, 
      secondPokeImage, 
      thirdPokeMon, 
      thirdPokeImage,
      viewStats,
      pokeMonInput
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
              <Grid.Column width={4}></Grid.Column>
              <Grid.Column width={8}>
                <SearchBar 
                  minus={this.minusNumber}
                  plus={this.plusNumber}
                  leftButtonMargin={styles.leftButtonMargin}
                  buttonMargin={styles.buttonMargin}
                  searchBarStyles={styles.searchBarStyles}
                  submit={this.handleSubmit}
                  change={this.handleChange}
                  pokeMonInput={pokeMonInput}
                />
              </Grid.Column>
              <Grid.Column width={4}></Grid.Column>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={4}>
                <FirstPoke 
                  firstPokeMon={firstPokeMon}
                  firstPokeImage={firstPokeImage} 
                  pokeMonNameStyle={styles.pokeMonName}
                  segmentMove={styles.segmentMove1}
                />
              </Grid.Column>
              <Grid.Column width={4}>
                <SecondPoke 
                  secondPokeMon={secondPokeMon}
                  secondPokeImage={secondPokeImage}
                  viewStats={viewStats}
                  viewStatsButton={this.viewStats}
                  pokeMonNameStyle={styles.pokeMonName}
                />
              </Grid.Column>
              <Grid.Column width={4}>
                <ThirdPoke
                  thirdPokeMon={thirdPokeMon}
                  thirdPokeImage={thirdPokeImage}
                  pokeMonNameStyle={styles.pokeMonName}
                  segmentMove={styles.segmentMove1}
                />
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
            <StatLoader 
              viewStats={viewStats}
              secondPokeMon={secondPokeMon}
            />
          </Grid>
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
  },
  buttonMargin: {
    marginLeft: '10px'
  },
  leftButtonMargin: {
    marginLeft: '20px'
  },
  searchBarStyles: {
    width: '280px'
  }
}

export default ApiFunDemo