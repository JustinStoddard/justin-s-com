import React from 'react';
import UofU from '../../Images/F4112AA3-0521-40EF-90A4-7DEFC02A81BD.jpg';
import selfiePic from '../../Images/36366299_891494954384180_6425517567284084736_n.jpg';
import GrandCanyon from '../../Images/grand canyon trip photo.jpg';
import SuperMan from '../../Images/superman photo.jpg';
import { Segment, Container, Header, Grid, Image, Button } from 'semantic-ui-react';

const MobileAbout = () => {
  return(
    <Container>
      <Segment textAlign="center" inverted>
        <Header as="h2">About</Header>
      </Segment>  
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Image src={selfiePic} size="large"/>
              <Segment color="blue">
                <Header as="h4"> - Yes, I wear sunglasses. Classy right?</Header>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Image src={GrandCanyon} size="large"/>
              <Segment color="blue">
                <Header as="h4"> - I love to Adventure! You'll find me in dry deserts and damp forests.</Header>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Image src={SuperMan} size="large"/>
              <Segment color="blue">
                <Header as="h4"> - My all time favorite superhero is Superman! Marvel is still better though...</Header>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment textAlign="center" inverted>
        <Header as="h2">Education</Header>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <Header as="h3">The University Of Utah</Header>
              </Segment>
              <Segment color="blue">
                <strong>While</strong> studying with The University of Utah I attended a program managed by the university, called DevPoint Labs. This program only lasted 11 weeks but I learned and absorbed more than most people would pursuing a standard CS degree. I learned about what languages the current industry prefereed, and the ones many other companies still use. I learned and recieved real world/ hands on experience working on a team with actual problems, actual code, and actual clients. It was an amazing experience and spearheaded my career as a Web Developer. <strong>I'll provide a link to their website so you can see the stack I was taught!</strong>
              </Segment>
              <Segment textAlign="center">
                <a href="http://devpointlabs.com/university-of-utah-coding-bootcamp-full-time" rel="noopener noreferrer" target="_blank">
                  <Button color="blue">Click Me</Button>
                </a>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <Header as="h3">Salt Lake Community College</Header>
              </Segment>
              <Segment color="blue">
                <strong>While</strong> I attended SLCC, I pursued an Associates of Applied Science, Majoring in Computer Science & Information systems. I graduated in 2017. Coming out with, in my opinion, Mid-Level level knowledge of the IT world, as well has how technology in the field of Computer Hardware and Software have evolved and created the world we live in today. I also learned many older technologies like C, C++, UNIX, and others you'd find in a standard CS course. <strong>Check out the link to see the courses I took!</strong>
              </Segment>
              <Segment textAlign="center">
                <a href="http://www.slcc.edu/csis/docs/computer-information-systems.pdf" rel="noopener noreferrer" target="_blank">
                  <Button color="blue">Click Me</Button>
                </a>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <Header as="h3">Udemy.com</Header>
              </Segment>
              <Segment color="blue">
                <strong>From</strong> 2016 to 2018 i've taken many online coding courses. The website Udemy.com awarded me Certificates of Expertise in Node.Js, JavaScript/ Ecmascript, React, React with redux, and Full Stack Web Development.  
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <Header as="h3">Treehouse.com</Header>
              </Segment>
              <Segment color="blue">
                <strong>Treehouse.com</strong> was another website I used to take online courses. I completed courses for IOS development and Full Stack Web Development. I learned alot about different styles of programimg and how other languages work.
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment textAlign="center" inverted>
        <Header as="h2">Awards</Header>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment color="blue">
                <Image src={UofU} size="medium"/>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default MobileAbout;