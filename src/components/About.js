import React from 'react';
import UofU from '../Images/F4112AA3-0521-40EF-90A4-7DEFC02A81BD.jpg';
// import Udemy from '../Images/';
// import Udemy2 from '../Images/';
// import Udemy3 from '../Images/';
import { Container, Segment, Divider, Header, Grid, Button, Image } from 'semantic-ui-react';

const About = () => {
  return(
    <Container>
      <Divider hidden/>
      <Segment textAlign="center" inverted>
        <Header as="h1">About</Header>
      </Segment>
      <Divider hidden/>
      <Segment textAlign="center" inverted>
        <Header as="h4">Education</Header>
      </Segment>
      <Divider hidden/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center">
                <Header as="h5">The University Of Utah</Header>
              </Segment>
              <Segment>
                <strong>While</strong> studying with The University of Utah I attended a program managed by the university, called DevPoint Labs. This program only lasted 11 weeks but I learned and absorbed more than most people would pursuing a standard CS degree. I learned about what languages the current industry prefereed, and the ones many other companies still use. I learned and recieved real world/ hands on experience working on a team with actual problems, actual code, and actual clients. It was an amazing experience and spearheaded my career as a Web Developer. I'll provide a link to their website so you can see the stack I was taught!
              </Segment>
              <Segment textAlign="center">
                <a href="http://devpointlabs.com/university-of-utah-coding-bootcamp-full-time" rel="noopener noreferrer" target="_blank">
                  <Button>
                    Click Me!
                  </Button>
                </a>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center">
                <Header as="h5">Salt Lake Community College</Header>
              </Segment>
              <Segment>
                <strong>While</strong> I attended SLCC, I pursued an Associates of Applied Science, Majoring in Computer Science & Information systems. I graduated in 2017. Coming out with, in my opinion, Mid-Level level knowledge of the IT world, as well has how technology in the field of Computer Hardware and Software have evolved and created the world we live in today. I also learned many older technologies like C, C++, UNIX, and others you'd find in a standard CS course. Check out the link!
              <Divider hidden/>
              <Divider hidden/>
              </Segment>
              <Segment textAlign="center">
                <a href="http://www.slcc.edu/csis/docs/computer-information-systems.pdf" rel="noopener noreferrer" target="_blank">
                  <Button>Click Me!</Button>
                </a>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center">
                <Header as="h5">Udemy.com</Header>
              </Segment>
              <Segment>
                <strong>From</strong> 2016 to 2018 i've taken many online coding courses. The website Udemy.com awarded me Certificates of Expertise in Node.Js, JavaScript/ Ecmascript, React, React with redux, and Full Stack Web Development.  
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center">
                <Header as="h5">Treehouse.com</Header>
              </Segment>
              <Segment>
                <strong>Treehouse.com</strong> was another website I used to take online courses. I completed courses for IOS development and Full Stack Web Development. I learned alot about different styles of programimg and how other languages work.
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider hidden/>
      <Segment textAlign="center" inverted>
        <Header as="h4">Awards</Header>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Segment>
              <Image src={UofU} size="medium"/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              {/* <Image src={Udemy}/> */}
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              {/* <Image src={Udemy2}/> */}
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              {/* <Image src={Udemy3}/> */}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default About;