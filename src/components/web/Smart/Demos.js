import React, { Component, Fragment } from 'react';
import Loader from '../../../Loader';
import { Segment, Container, Divider, Grid, Header, Button, List } from 'semantic-ui-react';
import Loadable from 'react-loadable';
const VideoDemoLoader = Loadable({loader: () => import('./VideoIndex'),loading: () => <Loader />});
const CalculatorDemoLoader = Loadable({loader: () => import('../Demos/CalculatorDemo/CalculatorIndex'),loading: () => <Loader />});
const ClockDemoLoader = Loadable({loader: () => import('../Demos/ClockDemo/Clock'),loading: () => <Loader />});
const PokeDexDemoLoader = Loadable({loader: () => import('../Demos/PokeDexDemo/PokeDexDemo'),loading: () => <Loader />});
const Demo = Loadable({loader: () => import('../Dumb/Demo'), loading: () => <Loader />});

// const CodexDemoLoader = Loadable({
//   loader: () => import('../CodexDemo/CodexIndex'),
//   loading: () => <Loader/>
// })

class Demos extends Component {
  state = { videoDemo: false, calculatorDemo: false, clockDemo: false, PokeDexApiDemo: false }

  render() {
    const { videoDemo, calculatorDemo, clockDemo, PokeDexApiDemo } = this.state;
    return(
      <Container>
        <Divider hidden />
        <Segment textAlign="center" inverted>
          <Header as="h2">Demos</Header>
        </Segment>
        <Divider hidden/>
        <Demo 
          DemoState={PokeDexApiDemo} //Takes in a State variable
          DemoComponent={<PokeDexDemoLoader/>} //Takes in a Component
          DemoActivation={() => this.setState({ PokeDexApiDemo: !PokeDexApiDemo })} //Takes in a Function
          DemoDeActivation={() => this.setState({ PokeDexApiDemo: !PokeDexApiDemo, clockDemo: false, videoDemo: false, calculatorDemo: false })} //Takes in a Function
          DemoHeader={"PokeDex Demo - NEW!"} //Takes in a String
          DemoDescription={"This Demo uses the Poke API to create a working PokeDex! Move through the library or use the search bar to find your favorite PokeMon and view its stats. Then add your favorites to your PokeDex, Enjoy!"} //Takes in a String
          DemoTechListItem1={"React Js"} //Takes in a String
          DemoTechListItem2={"Semantic-UI"} //Takes in a String
          DemoTechListItem3={"Poke API"} //Takes in a String
          DemoTechListItem4={"Axios"} //Takes in a String
        />
        <Demo 
          DemoState={videoDemo}
          DemoComponent={<VideoDemoLoader />}
          DemoActivation={() => this.setState({ videoDemo: !videoDemo })}
          DemoDeActivation={() => this.setState({ videoDemo: !videoDemo, calculatorDemo: false, clockDemo: false, PokeDexApiDemo: false })}
          DemoHeader={"YouTube Player"}
          DemoDescription={"This demo showcases the ability to use YouTubes API to search for, and view videos. There is also a lot of work behind the scenes with State, Props, and Conditional Rendering."}
          DemoTechListItem1={"React Js"}
          DemoTechListItem2={"Semantic-UI"}
          DemoTechListItem3={"YouTube API"}
          DemoTechListItem4={"NPM Lodash"}
        />
        <Demo 
          DemoState={calculatorDemo}
          DemoComponent={<CalculatorDemoLoader />}
          DemoActivation={() => this.setState({ calculatorDemo: !calculatorDemo })}
          DemoDeActivation={() => this.setState({ calculatorDemo: !calculatorDemo, videoDemo: false, clockDemo: false, PokeDexApiDemo: false })}
          DemoHeader={"Calculator Demo"}
          DemoDescription={"This demo showcases a Homemade Calculator that does exactly what you expect! It calculates things! This little demo also showcases my ability write ES6 JavaScript using React JS, my understanding of DOM Manipulation, and working with local state."}
          DemoTechListItem1={"React Js"}
          DemoTechListItem2={"Semantic-UI"}
          DemoTechListItem3={"ES6 JS"}
          DemoTechListItem4={"My Brain"}
        />
        <Demo 
          DemoState={clockDemo}
          DemoComponent={<ClockDemoLoader />}
          DemoActivation={() => this.setState({ clockDemo: !clockDemo })}
          DemoDeActivation={() => this.setState({ clockDemo: !clockDemo, videoDemo: false, calculatorDemo: false, PokeDexApiDemo: false })}
          DemoHeader={"Clock Demo"}
          DemoDescription={"The Demo you're about to see showcases my ability to write custom css code that functions, in collaboration with React JS code, as a working analog clock."}
          DemoTechListItem1={"React Js"}
          DemoTechListItem2={"Semantic-UI"}
          DemoTechListItem3={"SCSS"}
          DemoTechListItem4={"My Brain"}
        />
        {/* <Demo 
          DemoState={codexDemo}
          DemoComponent={<CodexDemoLoader />}
          DemoActivation={() => this.setState({ codexDemo: !codexDemo })}
          DemoDeActivation={() => this.setState({ codexDemo: !codexDemo, videoDemo: false, calculatorDemo: false })}
          DemoHeader={"Codex Demo"} 
          DemoDescription={"This demos showcases a Homemade Calculator that does exactly what you expect! It calculates things! This little demo also showcases my ability write ES6 JavaScript using React JS, my understanding of DOM Manipulation, and working with local state."} 
          DemoTechListItem1={"React Js"} 
          DemoTechListItem2={"Semantic-UI"} 
          DemoTechListItem3={"ES6 JS"} 
          DemoTechListItem4={"My Brain"} 
        /> */}
      </Container>
    )
  }
}

export default Demos;

//---------Below is the Boiler Plate for the Demo Component
{/* <Demo 
  DemoState={} //Takes in a State variable
  DemoComponent={} //Takes in a Component
  DemoActivation={} //Takes in a Function
  DemoDeActivation={} //Takes in a Function
  DemoHeader={""} //Takes in a String
  DemoDescription={""} //Takes in a String
  DemoTechListItem1={""} //Takes in a String
  DemoTechListItem2={""} //Takes in a String
  DemoTechListItem3={""} //Takes in a String
  DemoTechListItem4={""} //Takes in a String
/> */}