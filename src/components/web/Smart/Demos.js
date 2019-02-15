import React, { useState } from 'react';
import Loader from '../../../Loader';
import { Segment, Container, Divider, Header } from 'semantic-ui-react';
import Loadable from 'react-loadable';
const VideoDemoLoader = Loadable({loader: () => import('./VideoIndex'),loading: () => <Loader />});
const CalculatorDemoLoader = Loadable({loader: () => import('../Demos/CalculatorDemo/CalculatorIndex'),loading: () => <Loader />});
const ClockDemoLoader = Loadable({loader: () => import('../Demos/ClockDemo/Clock'),loading: () => <Loader />});
const PokeDexDemoLoader = Loadable({loader: () => import('../Demos/PokeDexDemo/PokeDexDemoIndex'),loading: () => <Loader />});
const Demo = Loadable({loader: () => import('../Dumb/Demo'), loading: () => <Loader />});

// const CodexDemoLoader = Loadable({
//   loader: () => import('../CodexDemo/CodexIndex'),
//   loading: () => <Loader/>
// })

const Demos = () => {

  const [ videoDemo, setVideoDemo ] = useState(false);
  const [ clockDemo, setClockDemo ] = useState(false);
  const [ calculatorDemo, setCalculatorDemo ] = useState(false);
  const [ PokeDexApiDemo, setPokeDexApiDemo ] = useState(false);

  const handleDemoStateChange = (demo) => {
    demo === 'pokeDex' ? setPokeDexApiDemo(true) : setPokeDexApiDemo(false);
    demo === 'calculator' ? setCalculatorDemo(true) : setCalculatorDemo(false);
    demo === 'clock' ? setClockDemo(true) : setClockDemo(false);
    demo === 'video' ? setVideoDemo(true) : setVideoDemo(false); 
  }

  const demos = [
    {
      demoState: PokeDexApiDemo,
      demoComponent: <PokeDexDemoLoader/>,
      demoActivation: () => handleDemoStateChange('pokeDex'),
      demoDeActivation: () => handleDemoStateChange(''),
      demoHeader: "PokeDex Demo - NEW!",
      demoDescription: "This Demo uses the Poke API to create a working PokeDex! Move through the library or use the search bar to find your favorite PokeMon and view its stats. Then add your favorites to your PokeDex, Enjoy!",
      demoTechListItem1: "React Js",
      demoTechListItem2: "Semantic-UI",
      demoTechListItem3: "Poke API",
      demoTechListItem4: "Axios"
    },
    {
      demoState: videoDemo,
      demoComponent: <VideoDemoLoader/>,
      demoActivation: () => handleDemoStateChange('video'),
      demoDeActivation: () => handleDemoStateChange(''),
      demoHeader: "YouTube Player",
      demoDescription: "This demo showcases the ability to use YouTubes API to search for, and view videos. There is also a lot of work behind the scenes with State, Props, and Conditional Rendering.",
      demoTechListItem1: "React Js",
      demoTechListItem2: "Semantic-UI",
      demoTechListItem3: "YouTube API",
      demoTechListItem4: "NPM Lodash"
    },
    {
      demoState: calculatorDemo,
      demoComponent: <CalculatorDemoLoader/>,
      demoActivation: () => handleDemoStateChange('calculator'),
      demoDeActivation: () => handleDemoStateChange(''),
      demoHeader: "Calculator Demo",
      demoDescription: "This demo showcases a Homemade Calculator that does exactly what you expect! It calculates things! This little demo also showcases my ability write ES6 JavaScript using React JS, my understanding of DOM Manipulation, and working with local state.",
      demoTechListItem1: "React Js",
      demoTechListItem2: "Semantic-UI",
      demoTechListItem3: "ES6 JS",
      demoTechListItem4: "My Brain"
    },
    {
      demoState: clockDemo,
      demoComponent: <ClockDemoLoader/>,
      demoActivation: () => handleDemoStateChange('clock'),
      demoDeActivation: () => handleDemoStateChange(''),
      demoHeader: "Clock Demo",
      demoDescription: "The Demo you're about to see showcases my ability to write custom css code that functions, in collaboration with React JS code, as a working analog clock.",
      demoTechListItem1: "React Js",
      demoTechListItem2: "Semantic-UI",
      demoTechListItem3: "SCSS",
      demoTechListItem4: "My Brain"
    }
  ]

  return(
    <Container>
      <Divider hidden />
      <Segment textAlign="center" inverted>
        <Header as="h2">Demos</Header>
      </Segment>
      <Divider hidden/>
      {demos.map(demo => {
        return(
          <Demo 
            key={demo.demoHeader}
            DemoState={demo.demoState} //Takes in a State variable
            DemoComponent={demo.demoComponent} //Takes in a Component
            DemoActivation={demo.demoActivation} //Takes in a Function
            DemoDeActivation={demo.demoDeActivation} //Takes in a Function
            DemoHeader={demo.demoHeader} //Takes in a String
            DemoDescription={demo.demoDescription} //Takes in a String
            DemoTechListItem1={demo.demoTechListItem1} //Takes in a String
            DemoTechListItem2={demo.demoTechListItem2} //Takes in a String
            DemoTechListItem3={demo.demoTechListItem3} //Takes in a String
            DemoTechListItem4={demo.demoTechListItem4} //Takes in a String
          />
        )
      })}
    </Container>
  )
}

export default Demos;

//------ Below is code for another demo concept
//<Demo 
//  DemoState={codexDemo}
//  DemoComponent={<CodexDemoLoader />}
//  DemoActivation={() => this.setState({ codexDemo: !codexDemo })}
//  DemoDeActivation={() => this.setState({ codexDemo: !codexDemo, videoDemo: false, calculatorDemo: false })}
//  DemoHeader={"Codex Demo"} 
//  DemoDescription={"This demos showcases a Homemade Calculator that does exactly what you expect! It calculates things! This little demo also showcases my ability write ES6 JavaScript using React JS, my understanding of DOM Manipulation, and working with local state."} 
//  DemoTechListItem1={"React Js"} 
//  DemoTechListItem2={"Semantic-UI"} 
//  DemoTechListItem3={"ES6 JS"} 
//  DemoTechListItem4={"My Brain"} 
///>