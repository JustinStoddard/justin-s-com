import React, { useState } from 'react';
import Loader from '../../../Loader';
import Loadable from 'react-loadable';
import { Segment, Container, Divider, Header } from 'semantic-ui-react';

const VideoDemoLoader = Loadable({loader: () => import('./VideoIndex'), loading: () => <Loader/>});
const CalculatorDemoLoader = Loadable({loader: () => import('../Demos/CalculatorDemo/CalculatorIndex'),loading: () => <Loader/>});
const ClockDemoLoader = Loadable({loader: () => import('../Demos/ClockDemo/Clock'), loading: () => <Loader/>});
const PokeDexDemoLoader = Loadable({loader: () => import('../Demos/PokeDexDemo/PokeDexDemoIndex'), loading: () => <Loader/>});
const ContentEditorLoader = Loadable({loader: () => import('../Demos/ContentEditorDemo/ContentEditorIndex'), loading: () => <Loader/>});
const VexDemo = Loadable({loader: () => import('../Demos/VexDemo/VexIndex'), loading: () => <Loader/>});
const Demo = Loadable({loader: () => import('../Dumb/Demo'), loading: () => <Loader/>});

const Demos = () => {
  const [ videoDemo, setVideoDemo ] = useState(false);
  const [ clockDemo, setClockDemo ] = useState(false);
  const [ calculatorDemo, setCalculatorDemo ] = useState(false);
  const [ PokeDexApiDemo, setPokeDexApiDemo ] = useState(false);
  const [ ContentEdit, setContentEdit ] = useState(false);
  const [ vexClan, setVexClan ] = useState(false);

  const handleDemoStateChange = (demo) => {
    demo === 'pokeDex' ? setPokeDexApiDemo(true) : setPokeDexApiDemo(false);
    demo === 'calculator' ? setCalculatorDemo(true) : setCalculatorDemo(false);
    demo === 'clock' ? setClockDemo(true) : setClockDemo(false);
    demo === 'video' ? setVideoDemo(true) : setVideoDemo(false);
    demo === 'content' ? setContentEdit(true) : setContentEdit(false); 
    demo === 'vex' ? setVexClan(true) : setVexClan(false);
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
      demoState: ContentEdit,
      demoComponent: <ContentEditorLoader/>,
      demoActivation: () => handleDemoStateChange('content'),
      demoDeActivation: () => handleDemoStateChange(''),
      demoHeader: "Content Editor Demo - NEW!",
      demoDescription: "This Demo is a proof of concept for the company I currently work for. I'm trying to test a custom theoretical content editior for our distributers. This is also connected to a firebase DB. Enjoy!",
      demoTechListItem1: "React JS",
      demoTechListItem2: "FireBase DB",
      demoTechListItem3: "Axios",
      demoTechListItem4: "Semantic-UI"
    },
    {
      demoState: vexClan,
      demoComponent: <VexDemo/>,
      demoActivation: () => handleDemoStateChange('vex'),
      demoDeActivation: () => handleDemoStateChange(''),
      demoHeader: "Vex A.I. Demo",
      demoDescription: "This Demo is an attempt at creating a Q-Learning A.I. with TensorFlowJS. My Goal is to eventually create a Prescriptive A.I. that tells you when you buy and sell Crypto.",
      demoTechListItem1: "React JS",
      demoTechListItem2: "TensorFlow",
      demoTechListItem3: "CoinBaseAPI",
      demoTechListItem4: "Semantic-UI"
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
        return (
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