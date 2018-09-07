import React from 'react';
import BallIsLife from '../../Images/Jazz-Logo_Single_Front_aec9f4df-237d-46d5-8c3a-d71d52fd71d7.png';
import ShopUnicity from '../../Images/images.png';
import StrikerBot from '../../Images/fc220x200black-u2.jpg';
import { Container, Segment, Header, Grid, Image, List } from 'semantic-ui-react';

const MobileProjects = () => {
  return(
    <Container>
      <Segment textAlign="center" inverted>
        <Header as="h2">Projects</Header>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <Image src={BallIsLife} size="medium"/>
                <Header as="h1">Ball Is Life</Header>
              </Segment>
              <Segment>
                <Segment textAlign="center" inverted>
                  <Header as="h3">Tech</Header>
                </Segment>
                <Segment color="blue">
                  <List as="ul">
                    <List.Item as="li">Ruby on Rails</List.Item>
                    <List.Item as="li">React with Redux</List.Item>
                    <List.Item as="li">MySQL</List.Item>
                  </List>
                </Segment>
                <Segment textAlign="center" inverted>
                  <Header as="h3">Notes</Header>
                </Segment>
                <Segment color="blue">
                  <strong>During</strong> my time at DevPoint Labs we worked on many projects. This project was the culmination of my teams experience during the course. We used React.Js with Redux to create an App that would serve as a way for coaches affiliated with the Junior Jazz to more effectivly communicate with parents and League Managers. It features the ability to make different Teams, Leagues, and Games. It also allows a coach to make a post to their teams personal page. <strong>Check out the repo and follow the README.md to discover the full functionality.</strong>
                </Segment>
              </Segment>
              <Segment textAlign="center" inverted>
                <a href="https://github.com/JustinStoddard/Ball-Is-Life" target="_blank" rel="noopener noreferrer">Check Out Source</a>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <Image src={ShopUnicity} size="medium"/>
                <Header as="h1">shop.unicity.com</Header>
              </Segment>
              <Segment>
                <Segment textAlign="center" inverted>
                  <Header as="h3">Tech</Header>
                </Segment>
                <Segment color="blue">
                  <List as="ul">
                    <List.Item as="li">PHP and Node.Js</List.Item>
                    <List.Item as="li">Angular 1</List.Item>
                    <List.Item as="li">Gulp and Bootstrap</List.Item>
                  </List>
                </Segment>
                <Segment textAlign="center" inverted>
                  <Header as="h3">Notes</Header>
                </Segment>
                <Segment color="blue">
                  <strong>This</strong> Web Application is a what I would call an arm of a greater cyborg octopus. It utilizes an Angular 1 Frontend mixed with bootstrap for styling. This app also used Travis CI and Gulp. I worked on The checkout process of this application. Not only did I have to make sure this app follow standard Ecommerce flow, but it also had to take into account the many countries the company sells products to. I made what we called Market Exceptions for different views and functionality. I had to manage user sessions and javascript objects to gaurente the infomation being shown was 100% correct and bug free.  
                </Segment>
              </Segment>
              <Segment textAlign="center" inverted>
                <a href="https://shop.unicity.com/#/home" target="_blank" rel="noopener noreferrer">Check Out Source</a>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <Image src={StrikerBot} size="medium"/>
                <Header as="h1">StrikerBot</Header>
              </Segment>
              <Segment>
                <Segment textAlign="center" inverted>
                  <Header as="h3">Tech</Header>
                </Segment>
                <Segment color="blue">
                  <List as="ul">
                    <List.Item as="li">Node.Js</List.Item>
                    <List.Item as="li">Ruby</List.Item>
                    <List.Item as="li">ES6 Javascript</List.Item>
                  </List>
                </Segment>
                <Segment textAlign="center" inverted>
                  <Header as="h3">Notes</Header>
                </Segment>
                <Segment color="blue">
                  <strong>Striker</strong> is an idea i've had for a long time. Think Tony Starks Jarvos. I wanted striker to be an A.I. that did simple tasks on command. Currently Striker is connected to another app called Discord, A messaging platform for gamers. Striker can answer to simple commands but they're scripted, not Independant decisions.
                </Segment>
              </Segment>
              <Segment textAlign="center" inverted>
                <a href="https://github.com/JustinStoddard/StrikerBot" target="_blank" rel="noopener noreferrer">Check Out Source</a>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default MobileProjects;