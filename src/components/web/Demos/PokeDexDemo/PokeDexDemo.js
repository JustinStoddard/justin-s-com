import React, { Component, Fragment } from 'react';
import axios from 'axios';
import _ from 'lodash'
import Loadable from 'react-loadable';
import Loader from '../../../../Loader';
import { Segment, Grid, Divider, Button } from 'semantic-ui-react';
import PokeDexMain from './PokeDexMain';
const SidePokeColumns = Loadable({loader: () => import('./SidePokeColumns'), loading: () => <Loader/>});
const SearchBar = Loadable({loader: () => import('./SearchBar'), loading: () => <Loader/>});
const ViewStats = Loadable({loader: () => import('./ViewStats'), loading: () => <Loader/>});
const MyPokeDex = Loadable({loader: () => import('./MyPokeDex'), loading: () => <Loader/>});

class ApiFunDemo extends Component {
  state = {
    allPokeMon: [],
    myPokeMon: [],
    viewStats: false,
    viewMyPokeDex: false,
    enterPokeDex: false,
    pokeMonInput: '',
    pokeMonSelect: [],
    pokeArrayNumber: null,

    firstPokeMon: [],
    firstPokeImage: null,
    firstPokeMonNumber: -1,

    secondPokeMon: [],
    secondPokeImage: null,
    secondPokeMonNumber: 0,

    thirdPokeMon: [],
    thirdPokeImage: null,
    thirdPokeMonNumber: 1,
  }

  componentDidMount() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=500&offset=0";
    axios.get(apiUrl)
      .then(response => {
        const manyPokeMon = response.data.results;
        this.setState({ allPokeMon: manyPokeMon })
        console.log("All Poke", manyPokeMon)
      }).catch(err => console.log(err))
  }

  getFirstPokeMon = () => { //This handles data for the PokeMon in the Left Column
    const { allPokeMon, firstPokeMonNumber } = this.state;
    if (allPokeMon[firstPokeMonNumber].url !== null ) { //Code Check
      const firstPokeMonUrl = allPokeMon[firstPokeMonNumber].url;
      axios.get(firstPokeMonUrl)
        .then(async response => {
          const firstPokeMon = response.data;
          const firstPngImage = firstPokeMon.sprites.front_default;
          await this.setState({
            firstPokeMon: firstPokeMon, 
            firstPokeImage: firstPngImage,
          })
          // console.log(firstPokeMon)
          // console.log('first', firstPokeMon.name)
          // console.log('first', firstPokeMonNumber)
        }).catch(err => console.log(err))
    } else {
      console.log("FirstPokeMon Block Failed")
    }
  }

  getSecondPokeMon = () => { //This handles data for the PokeMon in the Middle Column
    const { allPokeMon, secondPokeMonNumber } = this.state;
    if (allPokeMon[secondPokeMonNumber].url !== null) { //Code Check
      const secondPokeMonUrl = allPokeMon[secondPokeMonNumber].url;
      axios.get(secondPokeMonUrl)
        .then(async response => {
          const secondPokeMon = response.data;
          const secondPngImage = secondPokeMon.sprites.front_default;              
          await this.setState({
            secondPokeMon: secondPokeMon, 
            secondPokeImage: secondPngImage,
            pokeArrayNumber: allPokeMon.length -1
          })
          // console.log(secondPokeMon)
          // console.log('second', secondPokeMon.name)
          // console.log('second', secondPokeMonNumber)
        }).catch(err => console.log(err))
    } else {
      console.log("SecondPokeMon Block Failed")
    }
  }

  getThirdPokeMon = () => { //This handles data for the PokeMon in the Right Column
    const { allPokeMon, thirdPokeMonNumber } = this.state;
    if (allPokeMon[thirdPokeMonNumber].url !== null) { //Code Check
      const thirdPokeMonUrl = allPokeMon[thirdPokeMonNumber].url;
      axios.get(thirdPokeMonUrl)
        .then(async response => {
          const thirdPokeMon = response.data;
          const thirdPngImage = thirdPokeMon.sprites.front_default;
          await this.setState({
            thirdPokeMon: thirdPokeMon, 
            thirdPokeImage: thirdPngImage,
          })
          // console.log('third', thirdPokeMon.name)
          // console.log('third', thirdPokeMonNumber)
        }).catch(err => console.log(err))
    } else {
      console.log("ThirdPokeMon Block Failed")
    }
  }

  findPokeMon = async () => { 
    const { 
      allPokeMon,
      pokeMonSelect,
      pokeArrayNumber
    } = this.state

    const wantedPokeMon = _.findIndex(allPokeMon, function(p) {
      const selected = p.name === pokeMonSelect;
      return selected
    })
    
    if (wantedPokeMon === pokeArrayNumber) {
      await this.setState({
        firstPokeMonNumber: wantedPokeMon - 1,
        secondPokeMonNumber: wantedPokeMon,
        thirdPokeMonNumber: 0
      })
    } else if (wantedPokeMon === 0) {
      await this.setState({
        firstPokeMonNumber: pokeArrayNumber,
        secondPokeMonNumber: wantedPokeMon,
        thirdPokeMonNumber: wantedPokeMon + 1
      })
    } else if (wantedPokeMon === -1) {
      alert(`${pokeMonSelect} Not Found`)
    } else {
      await this.setState({
        firstPokeMonNumber: wantedPokeMon - 1,
        secondPokeMonNumber: wantedPokeMon,
        thirdPokeMonNumber: wantedPokeMon + 1
      })
    }
    this.getFirstPokeMon()
    this.getSecondPokeMon()
    this.getThirdPokeMon()
  }

  handleArrayMovement = async (operator) => {
    const { 
      firstPokeMonNumber, 
      secondPokeMonNumber,
      thirdPokeMonNumber, 
      pokeArrayNumber, 
    } = this.state;

    if (operator === 'plus') {

      //This statment handles moving around the array for the firstPokeMon when moving forwards.
      if (firstPokeMonNumber === pokeArrayNumber) {
        await this.setState({ 
          firstPokeMonNumber: 0,
          firstPokeImage: null
        })
      } else {
        await this.setState({ 
          firstPokeMonNumber: firstPokeMonNumber + 1,
          firstPokeImage: null
        })
      }

      //This statment handles moving around the array for the secondPokeMon when moving forwards.
      if (secondPokeMonNumber === pokeArrayNumber) {
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

      //This statment handles moving around the array for the thirdPokeMon when moving forwards.
      if (thirdPokeMonNumber === pokeArrayNumber) {
        await this.setState({ 
          thirdPokeMonNumber: 0,
          thirdPokeImage: null
        })
      } else {
        await this.setState({ 
          thirdPokeMonNumber: thirdPokeMonNumber + 1,
          thirdPokeImage: null
        })
      }

    } else if (operator === 'minus') {

      //This statment handles moving around the array for the firstPokeMon when moving backwards.
      if (firstPokeMonNumber === 0) { 
        await this.setState({ 
          firstPokeMonNumber: pokeArrayNumber,
          firstPokeImage: null
        })
      } else {
        await this.setState({ 
          firstPokeMonNumber: firstPokeMonNumber - 1,
          firstPokeImage: null
        })
      }

      //This statment handles moving around the array for the secondPokeMon when moving backwards.
      if (secondPokeMonNumber === 1) { 
        await this.setState({ 
          secondPokeMonNumber: 0, 
          viewStats: false 
        })
      } else if (secondPokeMonNumber === 0) {
        await this.setState({ 
          secondPokeMonNumber: pokeArrayNumber, 
          viewStats: false 
        })
      } else {
        await this.setState({ 
          secondPokeMonNumber: secondPokeMonNumber - 1, 
          viewStats: false 
        })
      }

      //This statment handles moving around the array for the thirdPokeMon when moving backwards.
      if (thirdPokeMonNumber === 2) { 
        await this.setState({ 
          thirdPokeMonNumber: 1,
          thirdPokeImage: null
        })
      } else if (thirdPokeMonNumber === 1) {
        await this.setState({ 
          thirdPokeMonNumber: 0,
          thirdPokeImage: null
        })
      } else if (thirdPokeMonNumber === 0) {
        await this.setState({ 
          thirdPokeMonNumber: pokeArrayNumber,
          thirdPokeImage: null
        })
      } else {
        await this.setState({ 
          thirdPokeMonNumber: thirdPokeMonNumber - 1,
          thirdPokeImage: null
        })
      }

    } else {
      console.log("Operator Invaild:", operator)
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
    this.handleArrayMovement('plus')
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

    const pokeColumns = [
      { //Object for first column
        PokeMon: firstPokeMon,
        PokeImage: firstPokeImage,
        pokeMonNameStyle: styles.pokeMonName,
        segmentMove: styles.segmentMove1
      },
      { //Object for second column
        PokeMon: secondPokeMon,
        PokeImage: secondPokeImage,
        viewStats: viewStats,
        viewStatsButton: this.viewStats,
        addPokeMon: this.addPokeMon,
        viewComponent: true,
        pokeMonNameStyle: styles.pokeMonName,
        addButtonStyles: styles.addButtonStyless
      },
      { //Object for third column
        PokeMon: thirdPokeMon,
        PokeImage: thirdPokeImage,
        pokeMonNameStyle: styles.pokeMonName,
        segmentMove: styles.segmentMove1
      }
    ]

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
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>
                      <SearchBar 
                        movement={this.handleArrayMovement}
                        leftButtonMargin={styles.leftButtonMargin}
                        buttonMargin={styles.buttonMargin}
                        searchBarStyles={styles.searchBarStyles}
                        submit={this.handleSubmit}
                        change={this.handleChange}
                        pokeMonInput={pokeMonInput}
                      />
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Segment inverted>
                        <Segment textAlign="center" color="red">
                          <Button onClick={this.viewMyPokeDex} size="huge" color="red">My PokeDex</Button>
                        </Segment>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                  <Divider hidden/>
                  <Grid.Row>
                    <Grid.Column width={2}></Grid.Column>
                      {pokeColumns.map(poke => {
                        return(
                          <SidePokeColumns
                            PokeMon={poke.PokeMon}
                            PokeImage={poke.PokeImage}
                            viewStats={poke.viewStats}
                            viewStatsButton={poke.viewStatsButton}
                            addPokeMon={poke.addPokeMon}
                            viewComponent={poke.viewComponent}
                            pokeMonNameStyle={poke.pokeMonNameStyle}
                            addButtonStyles={poke.addButtonStyles}
                            segmentMove={poke.segmentMove}
                          />
                        )
                      })}
                    <Grid.Column width={2}></Grid.Column>
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
  },
  addButtonStyles: {
    marginLeft: '-10px'
  }
}

export default ApiFunDemo