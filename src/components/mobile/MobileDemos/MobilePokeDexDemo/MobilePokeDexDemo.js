import React, { Component, Fragment } from 'react';
import axios from 'axios';
import _ from 'lodash'
import Loadable from 'react-loadable';
import Loader from '../../../../Loader';
import { Segment, Grid, Divider, Button, Icon } from 'semantic-ui-react';
import PokeDexMain from './MobilePokeDexMain';
const FirstPokeMon = Loadable({loader: () => import('./MobileFirstPoke'), loading: () => <Loader/>});
const SecondPokeMon = Loadable({loader: () => import('./MobileSecondPoke'), loading: () => <Loader/>});
const ThirdPokeMon = Loadable({loader: () => import('./MobileThirdPoke'), loading: () => <Loader/>});
const SearchBar = Loadable({loader: () => import('./MobileSearchBar'), loading: () => <Loader/>});
const ViewStats = Loadable({loader: () => import('./MobileViewStats'), loading: () => <Loader/>});
const MyPokeDex = Loadable({loader: () => import('./MobileMyPokeDex'), loading: () => <Loader/>});

class ApiFunDemo extends Component {
  state = {
    allPokeMon: [],
    myPokeMon: [],
    viewStats: false,
    viewMyPokeDex: false,
    enterPokeDex: false,
    pokeMonInput: '',
    pokeMonSelect: [],

    firstPokeMon: [], //This will be cleaned up eventually, but for now the excessive use of state is for a proving a UI/UX concept, not arcitechural efficency.
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
        const manyPokeMon = response.data.results.slice(0,500);
        this.setState({ allPokeMon: manyPokeMon });
        // console.log("All Poke", manyPokeMon)
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
          // console.log('first', firstPokeMon.name)
          // console.log('first', firstPokeMonNumber)
        }).catch(err => console.log(err))
    } else {
      this.getFirstPokeMon()
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
          // console.log(secondPokeMon)
          // console.log('second', secondPokeMon.name)
          // console.log('second', secondPokeMonNumber)
        }).catch(err => console.log(err))
    } else {
      this.getSecondPokeMon()
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
          // console.log('third', thirdPokeMon.name)
          // console.log('third', thirdPokeMonNumber)
        }).catch(err => console.log(err))
    } else {
      this.getThirdPokeMon()
    }
  }

  findPokeMon = async () => { 
    const { 
      allPokeMon,
      pokeMonSelect,
      firstPokeArrayNumber
    } = this.state

    const wantedPokeMon = _.findIndex(allPokeMon, function(p) {
      const selected = p.name === pokeMonSelect
      return selected
    })
    
    if ( wantedPokeMon === firstPokeArrayNumber ) {
      await this.setState({
        secondPokeMonNumber: wantedPokeMon,
        firstPokeMonNumber: wantedPokeMon - 1,
        thirdPokeMonNumber: 0
      })
    } else if (wantedPokeMon === 0) {
      await this.setState({
        secondPokeMonNumber: wantedPokeMon,
        firstPokeMonNumber: firstPokeArrayNumber,
        thirdPokeMonNumber: wantedPokeMon + 1
      })
    } else if (wantedPokeMon === -1) {
      alert(`${pokeMonSelect} Not Found`)
    } else {
      await this.setState({
        secondPokeMonNumber: wantedPokeMon,
        firstPokeMonNumber: wantedPokeMon - 1,
        thirdPokeMonNumber: wantedPokeMon + 1
      })
    }
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
      await this.setState({ 
        firstPokeMonNumber: 0 
      })
    } else {
      await this.setState({ 
        firstPokeMonNumber: firstPokeMonNumber + 1 
      })
    }

    if (secondPokeMonNumber === firstPokeArrayNumber) {
      await this.setState({ 
        secondPokeMonNumber: 0, 
        viewStats: false 
      })
    } else {
      await this.setState({ 
        secondPokeMonNumber: secondPokeMonNumber + 1, 
        viewStats: false 
      })
    }

    if (thirdPokeMonNumber === firstPokeArrayNumber) {
      await this.setState({ 
        thirdPokeMonNumber: 0 
      })
    } else {
      await this.setState({ 
        thirdPokeMonNumber: thirdPokeMonNumber + 1 
      })
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
      await this.setState({ 
        firstPokeMonNumber: firstPokeArrayNumber 
      })
    } else {
      await this.setState({ 
        firstPokeMonNumber: firstPokeMonNumber - 1 
      })
    }

    if (secondPokeMonNumber === 1) {
      await this.setState({ 
        secondPokeMonNumber: firstPokeArrayNumber - firstPokeArrayNumber, 
        viewStats: false 
      })
    } else if (secondPokeMonNumber === 0) {
      await this.setState({ 
        secondPokeMonNumber: secondPokeArrayNumber, 
        viewStats: false 
      })
    } else {
      await this.setState({ 
        secondPokeMonNumber: secondPokeMonNumber - 1, 
        viewStats: false 
      })
    }

    if (thirdPokeMonNumber === 2) {
      await this.setState({ 
        thirdPokeMonNumber: firstPokeArrayNumber - firstPokeArrayNumber + 1 
      })
    } else if (thirdPokeMonNumber === 1) {
      await this.setState({ 
        thirdPokeMonNumber: firstPokeArrayNumber - firstPokeArrayNumber 
      })
    } else if (thirdPokeMonNumber === 0) {
      await this.setState({ 
        thirdPokeMonNumber: thirdPokeArrayNumber 
      })
    } else {
      await this.setState({ 
        thirdPokeMonNumber: thirdPokeMonNumber - 1 
      })
    }
    this.getFirstPokeMon()
    this.getSecondPokeMon()
    this.getThirdPokeMon()
  }

  viewStats = () => {
    const { viewStats } = this.state
    this.setState({ 
      viewStats: !viewStats 
    })
  }

  viewMyPokeDex = () => {
    const { viewMyPokeDex } = this.state
    this.setState({ 
      viewMyPokeDex: !viewMyPokeDex 
    })
  }

  enterPokeDex = () => {
    const { enterPokeDex } = this.state
    this.setState({
      enterPokeDex: !enterPokeDex
    })
    this.plusNumber()
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

  addPokeMon = async () => {
    const { secondPokeMon } = this.state
    await this.setState(prevState => ({
      myPokeMon: [ ...prevState.myPokeMon, secondPokeMon ]
    }))
    alert(`Added ${secondPokeMon.name} to your PokeDex`)
  }

  deletePokeMon = async (index) => {
    const { myPokeMon } = this.state
    await this.setState({
      myPokeMon: myPokeMon.filter((_, i) => i !== index)
    })
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
      pokeMonInput,
      enterPokeDex,
      viewMyPokeDex,
      myPokeMon
    } = this.state

    return(
      <Fragment>
        {enterPokeDex ?
          <Fragment>
            {viewMyPokeDex ?
                <MyPokeDex 
                  viewMyPokeDex={this.viewMyPokeDex}
                  myPokeMon={myPokeMon}
                  deletePokeMon={this.deletePokeMon}
                />
              :
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
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
                    <Grid.Column width={4}>
                      <Segment textAlign="center" style={styles.myPokeDexButton} color="red">
                        <Button onClick={this.viewMyPokeDex} style={styles.myPokeDexButton2} size="tiny" color="red"><Icon size="large" name="sitemap" fitted/></Button>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <FirstPokeMon 
                        firstPokeMon={firstPokeMon}
                        firstPokeImage={firstPokeImage} 
                        pokeMonNameStyle={styles.pokeMonName}
                        segmentMove={styles.segmentMove1}
                      />
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <SecondPokeMon
                        secondPokeMon={secondPokeMon}
                        secondPokeImage={secondPokeImage}
                        viewStats={viewStats}
                        viewStatsButton={this.viewStats}
                        addPokeMon={this.addPokeMon}
                        pokeMonNameStyle={styles.pokeMonName}
                        addButtonStyles={styles.addButtonStyles}
                      />
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <ThirdPokeMon
                        thirdPokeMon={thirdPokeMon}
                        thirdPokeImage={thirdPokeImage}
                        pokeMonNameStyle={styles.pokeMonName}
                        segmentMove={styles.segmentMove1}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <ViewStats 
                    viewStats={viewStats}
                    secondPokeMon={secondPokeMon}
                  />
                </Grid>
            }
          </Fragment>
          :
            <PokeDexMain enterPokeDex={this.enterPokeDex}/>
        }
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
    fontSize: '18px',
    marginLeft: '-10px'
  },
  buttonMargin: {
    marginLeft: '10px'
  },
  leftButtonMargin: {
    marginLeft: '10px'
  },
  searchBarStyles: {
    width: '202px'
  },
  addButtonStyles: {
    marginLeft: '-23px'
  },
  myPokeDexButton: {
    width: '80px',
    marginLeft: '-15px'
  },
  myPokeDexButton2: {
    marginLeft: '-3px'
  }
}

export default ApiFunDemo