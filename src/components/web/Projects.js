import React, {Component, Fragment} from 'react';
import BallIsLife from '../../Images/Jazz-Logo_Single_Front_aec9f4df-237d-46d5-8c3a-d71d52fd71d7.png';
import ShopUnicity from '../../Images/images.png';
import StrikerBot from '../../Images/fc220x200black-u2.jpg';
import ThisJustin from '../../Images/208CCDAF-9F9E-4882-9062-123D14A09196.jpg'
import { Container, Segment, Divider, Header, Grid, Image, List, Button } from 'semantic-ui-react';

class Projects extends Component {
  state = {
    balls: false,
    shop: false,
    striker: false,
    tech: false,
    library: false,
  }

  renderBalls = () => {
    const { balls } = this.state;
    this.setState({ balls: !balls })
  }

  renderShop = () => {
    const { shop } = this.state;
    this.setState({ shop: !shop })
  }

  renderStriker = () => {
    const { striker } = this.state;
    this.setState({ striker: !striker })
  }

  renderTech = () => {
    const { tech } = this.state;
    this.setState({ tech: !tech })
  }

  renderLibrary = () => {
    const { library } = this.state;
    this.setState({ library: !library })
  }
  //Yes I know this is redundant but it works for now soooooo, sorry not sorry.

  render() {
    const { balls, shop, striker, tech, library } = this.state;
    return(
      <Container>
        <Divider hidden/>
        <Segment textAlign="center" inverted>
          <Header as="h1">Projects</Header>
        </Segment>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Segment inverted>
                { !balls ?
                    <Segment textAlign="center">
                      <Image src={BallIsLife} size="medium"/>
                      <Header as="h1">Ball Is Life</Header>
                      <Button color="blue" onClick={() => this.setState({ balls: !balls })}>More</Button>
                    </Segment>
                  :
                    <Fragment>
                      <Segment  textAlign="center">
                        <Image src={BallIsLife} size="medium"/>
                        <Header as="h1">Ball Is Life</Header>
                        <Button onClick={() => this.setState({ balls: !balls })}>Less</Button>
                      </Segment>
                      <Segment>
                        <Segment textAlign="center" inverted>
                          <Header>Tech</Header>
                        </Segment>
                        <Segment color="blue">
                          <List as="ul">
                            <List.Item as="li">Ruby on Rails</List.Item>
                            <List.Item as="li">React with Redux</List.Item>
                            <List.Item as="li">MySQL</List.Item>
                          </List>
                        </Segment>
                        <Segment textAlign="center" inverted>
                          NOTES
                        </Segment>
                        <Segment textAlign="left"  color="blue">
                          <strong>During</strong> my time at DevPoint Labs we worked on many projects. This project was the culmination of my teams experience during the course. We used React.Js with Redux to create an App that would serve as a way for coaches affiliated with the Junior Jazz to more effectivly communicate with parents and League Managers. It features the ability to make different Teams, Leagues, and Games. It also allows a coach to make a post to their teams personal page. <strong>Check out the repo and follow the README.md to discover the full functionality.</strong>
                        </Segment>
                      </Segment>
                      <Segment textAlign="center" inverted>
                        <a href="https://github.com/JustinStoddard/Ball-Is-Life" target="_blank" rel="noopener noreferrer">Check Out Source</a>
                      </Segment>
                    </Fragment>
                }
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment inverted>
                { !shop ?
                    <Segment textAlign="center">
                      <Image src={ShopUnicity} size="medium" style={styles.imagePadding1}/>
                      <Divider hidden/>
                      <Divider hidden/>
                      <Header as="h1">shop.unicity.com</Header>
                      <Button color="blue" onClick={() => this.setState({ shop: !shop })}>More</Button>
                    </Segment>
                  :
                    <Fragment>
                      <Segment textAlign="center">
                        <Image src={ShopUnicity} size="medium" style={styles.imagePadding1}/>
                        <Divider hidden/>
                        <Divider hidden/>
                        <Header as="h1">shop.unicity.com</Header>
                        <Button onClick={() => this.setState({ shop: !shop })}>Less</Button>
                      </Segment>
                      <Segment>
                        <Segment textAlign="center" inverted>
                          <Header>Tech</Header>
                        </Segment>
                        <Segment color="blue">
                          <List as="ul">
                            <List.Item as="li">PHP and Node.Js</List.Item>
                            <List.Item as="li">Angular 1</List.Item>
                            <List.Item as="li">Gulp and Bootstrap</List.Item>
                          </List>
                        </Segment>
                        <Segment textAlign="center" inverted>
                          NOTES
                        </Segment>
                        <Segment textAlign="left" color="blue">
                          <strong>This</strong> Web Application is a what I would call an arm of a greater cyborg octopus. It utilizes an Angular 1 Frontend mixed with bootstrap for styling. This app also used Travis CI and Gulp. I worked on The checkout process of this application. Not only did I have to make sure this app follow standard Ecommerce flow, but it also had to take into account the many countries the company sells products to. I made what we called Market Exceptions for different views and functionality. I had to manage user sessions and javascript objects to gaurente the infomation being shown was 100% correct and bug free.  
                        </Segment>
                      </Segment>
                      <Segment textAlign="center" inverted>
                        <a href="https://shop.unicity.com/#/home" target="_blank" rel="noopener noreferrer">Check Out Source</a>
                      </Segment>
                    </Fragment>
                }
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment inverted>
                { !striker ?
                    <Segment textAlign="center">
                      <Image src={StrikerBot} size="medium" style={styles.imagePadding2}/>
                      <Divider hidden/>
                      <Header as="h1">Striker Bot</Header>
                      <Button color="blue" onClick={() => this.setState({ striker: !striker })}>More</Button>
                    </Segment>
                  :
                    <Fragment>
                      <Segment textAlign="center">
                        <Image src={StrikerBot} size="medium" style={styles.imagePadding2}/>
                        <Divider hidden/>
                        <Header as="h1">Striker Bot</Header>
                        <Button onClick={() => this.setState({ striker: !striker })}>Less</Button>
                      </Segment>
                      <Segment>
                        <Segment textAlign="center" inverted>
                          <Header>Tech</Header>
                        </Segment>
                        <Segment color="blue">
                          <List as="ul">
                            <List.Item as="li">Node.Js</List.Item>
                            <List.Item as="li">Ruby</List.Item>
                            <List.Item as="li">ES6 Javascript</List.Item>
                          </List>
                        </Segment>
                        <Segment textAlign="center" inverted>
                          NOTES
                        </Segment>
                        <Segment textAlign="left" color="blue">
                          <strong>Striker</strong> is an idea i've had for a long time. Think Tony Starks Jarvos. I wanted striker to be an A.I. that did simple tasks on command. Currently Striker is connected to another app called Discord, A messaging platform for gamers. Striker can answer to simple commands but they're scripted, not Independant decisions.
                        </Segment>
                      </Segment>
                      <Segment textAlign="center" inverted>
                        <a href="https://github.com/JustinStoddard/StrikerBot" target="_blank" rel="noopener noreferrer">Check Out Source</a>
                      </Segment>
                    </Fragment>
                }
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              <Segment inverted>
                { !tech ?
                    <Segment textAlign="center">
                      <Image src={ThisJustin} size="medium" style={styles.imagePadding2}/>
                      <Divider hidden/>
                      <Header as="h1">thisjustin.tech</Header>
                      <Button color="blue" onClick={() => this.setState({ tech: !tech })}>More</Button>
                    </Segment>
                  :
                    <Fragment>
                      <Segment textAlign="center">
                        <Image src={ThisJustin} size="medium" style={styles.imagePadding2}/>
                        <Divider hidden/>
                        <Header as="h1">thisjustin.tech</Header>
                        <Button onClick={() => this.setState({ tech: !tech })}>Less</Button>
                      </Segment>
                      <Segment>
                        <Segment textAlign="center" inverted>
                          <Header>Tech</Header>
                        </Segment>
                        <Segment color="blue">
                          <List as="ul">
                            <List.Item as="li">React JS</List.Item>
                            <List.Item as="li">Semantic-UI-React</List.Item>
                            <List.Item as="li">Heroku</List.Item>
                          </List>
                        </Segment>
                        <Segment textAlign="center" inverted>
                          NOTES
                        </Segment>
                        <Segment textAlign="left" color="blue">
                          <strong>This</strong> is the project you're currently using! I started building <strong>thisjustin.tech</strong> in August of 2018. It's had many iterations, but also has a lot of cool functionality. While you look around, pay attention to how things load. Also, check out the <strong>Demos</strong>. There you can see some code that uses the YouTube API and code thats more focused on logic than DOM manipulation. While you're at it, maybe leave a comment on the <strong>Contact</strong> page. Whatever your heart desires. Enjoy! 
                        </Segment>
                      </Segment>
                      <Segment textAlign="center" inverted> {/*Make sure you change this Link*/}
                        <a href="https://github.com/JustinStoddard/StrikerBot" target="_blank" rel="noopener noreferrer">Check Out Source</a>
                      </Segment>
                    </Fragment>
                }
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment inverted>
                { !library ?
                    <Segment textAlign="center">
                      <Image src={StrikerBot} size="medium" style={styles.imageFix}/>
                      <Divider hidden/>
                      <Header as="h1">library.unicity.com</Header>
                      <Button color="blue" onClick={() => this.setState({ library: !library })}>More</Button>
                    </Segment>
                  :
                    <Fragment>
                      <Segment textAlign="center">
                        <Image src={StrikerBot} size="medium" style={styles.imageFix}/>
                        <Divider hidden/>
                        <Header as="h1">library.unicity.com</Header>
                        <Button onClick={() => this.setState({ library: !library })}>Less</Button>
                      </Segment>
                      <Segment>
                        <Segment textAlign="center" inverted>
                          <Header>Tech</Header>
                        </Segment>
                        <Segment color="blue">
                          <List as="ul">
                            <List.Item as="li">Angular 1</List.Item>
                            <List.Item as="li">PHP and Node.JS</List.Item>
                            <List.Item as="li">Gulp and Bootstrap</List.Item>
                          </List>
                        </Segment>
                        <Segment textAlign="center" inverted>
                          NOTES
                        </Segment>
                        <Segment textAlign="left" color="blue">
                          <strong>Striker</strong> is an idea i've had for a long time. Think Tony Starks Jarvos. I wanted striker to be an A.I. that did simple tasks on command. Currently Striker is connected to another app called Discord, A messaging platform for gamers. Striker can answer to simple commands but they're scripted, not Independant decisions.
                        </Segment>
                      </Segment>
                      <Segment textAlign="center" inverted>{/*Make sure you change this Link*/}
                        <a href="https://github.com/JustinStoddard/StrikerBot" target="_blank" rel="noopener noreferrer">Check Out Source</a>
                      </Segment>
                    </Fragment>
                }
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment inverted>
                <Segment textAlign="center">
                  <Divider hidden/>
                  <Divider hidden/>
                  <Divider hidden/>
                  <Header as="h1">Comming Soon...</Header>
                  <Divider hidden/>
                  <Divider hidden/>
                  <Divider hidden/>
                  <Divider hidden/>
                </Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const styles = {
  imagePadding1: {
    marginBottom: '16px'
  },
  imagePadding2: {
    marginBottom: '20px'
  },
  imageFix: {
    height: '243px',
    marginBottom: '20px',
    marginLeft: '25px'
  }
}

export default Projects;