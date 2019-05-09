import React, { Fragment, useState } from 'react';
import '../../../CSS/resume.css';
import ProfilePic from '../../../Images/58639038_1107873832746290_3384417216882540544_n.jpg';
import { List, Grid, Divider, Image, Icon } from 'semantic-ui-react';

const ResumeIndex = () => {

  const [ bioState, setBioState ] = useState(true);
  const [ experienceState, setExperienceState ] = useState(false);
  const [ educationState, setEducationState ] = useState(false);
  const [ projectState, setProjectState ] = useState(false);

  return(
    <Fragment>
      <div className="godfather-container"> 
      <Divider hidden/>
        <Grid>
          <Grid.Row>

            <Grid.Column width={4} className="left-column"> {/* Left Column */}
              <Grid.Row className="picture-row-left"> {/* Picture */}
                <Image src={ProfilePic} className="picture-dimensions"/>
              </Grid.Row>
              {bioState ? 
                  <Grid.Row className="bio-row-left-open"> {/* Bio Open */}
                    <a onClick={() => setBioState(false)} className="anchor-styles">
                      <span className="bio-header-left">Bio</span>
                      <span className="icon-align"><Icon name="angle down" size="large" className="ico-styles-open"/></span>
                    </a>
                  </Grid.Row>
                :
                  <Grid.Row className="bio-row-left-closed"> {/* Bio Closed */}
                    <a onClick={() => setBioState(true)} className="anchor-styles">
                      <span className="bio-header-left">Bio</span>
                      <span className="icon-align"><Icon name="angle down" size="large" className="ico-styles-closed"/></span>
                    </a>
                  </Grid.Row>
              }
              {experienceState ? 
                  <Grid.Row className="experience-row-left-open"> {/* Experience Open*/}
                    <a onClick={() => setExperienceState(false)} className="anchor-styles">
                      <span className="experience-header-left">Experience</span>
                      <span className="icon-align"><Icon name="angle down" size="large" className="ico-styles-open"/></span>
                    </a>
                  </Grid.Row>
                :
                  <Grid.Row className="experience-row-left-closed"> {/* Experience Closed*/}
                    <a onClick={() => setExperienceState(true)} className="anchor-styles">
                      <span className="experience-header-left">Experience</span>
                      <span className="icon-align"><Icon name="angle down" size="large" className="ico-styles-closed"/></span>
                    </a>
                  </Grid.Row>
              }
              {educationState ?
                  <Grid.Row className="education-row-left-open"> {/* Education Open*/}
                    <a onClick={() => setEducationState(false)} className="anchor-styles">
                      <span className="education-header-left">Education</span>
                      <span className="icon-align"><Icon name="angle down" size="large" className="ico-styles-open"/></span>
                    </a>
                  </Grid.Row> 
                :
                  <Grid.Row className="education-row-left-closed"> {/* Education Closed*/}
                    <a onClick={() => setEducationState(true)} className="anchor-styles">
                      <span className="education-header-left">Education</span>
                      <span className="icon-align"><Icon name="angle down" size="large" className="ico-styles-closed"/></span>
                    </a>
                  </Grid.Row> 
              }
              { projectState ?
                  <Grid.Row className="projects-row-left-open"> {/* Projects Open*/}
                    <a onClick={() => setProjectState(false)} className="anchor-styles">
                      <span className="projects-header-left">Projects</span>
                      <span className="icon-align"><Icon name="angle down" size="large" className="ico-styles-open"/></span>
                    </a>
                  </Grid.Row>
                :
                  <Grid.Row className="projects-row-left-closed"> {/* Projects Closed*/}
                    <a onClick={() => setProjectState(true)} className="anchor-styles">
                      <span className="projects-header-left">Projects</span>
                      <span className="icon-align"><Icon name="angle down" size="large" className="ico-styles-closed"/></span>
                    </a>
                  </Grid.Row>
              }
            </Grid.Column>

            <Grid.Column width={12} className="right-column"> {/* Right Column */}
              <Grid.Row className="header-row-right">
              
                <Grid.Row>
                  <Grid.Column>
                    <span className="header-right">Justin Stoddard</span>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid>  
                    <Grid.Column width={8}>
                      <Grid.Row className="contact-icons">
                        <Icon name="mail" size="large"/>
                        <span className="contact-subheaders">Stoddard.j.t@gmail.com</span>
                      </Grid.Row>
                      <Grid.Row className="contact-icons">
                        <Icon name="phone" size="large"/>
                        <span className="contact-subheaders">801-209-4087</span>
                      </Grid.Row>
                      <Grid.Row className="contact-icons">
                        <Icon name="home" size="large"/>
                        <span className="contact-subheaders">1329 w 7125 s, West Jordan, UT</span>
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Grid>
                        <Grid.Row className="social-icons">
                          <Grid.Column width={4}>
                            <a href="https://www.facebook.com/people/Justin-Stoddard/100005710514833" target="_blank" rel="noopener noreferrer">
                              <Icon link="true" name="facebook square" size="huge" color="black"/>
                            </a>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <a href="https://github.com/JustinStoddard" target="_blank" rel="noopener noreferrer">
                              <Icon link="true" name="github square" size="huge" color="black"/>
                            </a>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <a href="https://www.linkedin.com/in/justin-stoddard-65171015a/" target="_blank" rel="noopener noreferrer">
                              <Icon link="true" name="linkedin" size="huge" color="black"/>
                            </a>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid>
                </Grid.Row>

              </Grid.Row>

              { bioState ? 
                  <Grid.Row className="bio-row-right-open">
                    <span className="greatness-open-alt">I</span>
                    <span className="bio-content-open"><span className="bio-tab">My</span> Journey started 5 years ago with a passion for video games, and a drive to know more about how they worked. Since then I've gone from a Curious Amateur to a Professional Web Developer. This site you're viewing my resume on, and the ones listed below under Projects, are a testament to that journey. So enjoy the view. Then when you're ready, give me a call.</span>
                  </Grid.Row>
                :
                  <Grid.Row className="bio-row-right-closed">
                    <span className="greatness-closed-alt">I</span>
                    <span className="bio-content-closed"><span className="bio-tab">My</span> Journey started 5 years ago with a passion for video games, and a drive to know more about how they worked. Since then I've gone from a Curious Amateur to a Professional Web Developer. This site you're viewing my resume on, and the ones listed below under Projects, are a testament to that journey. So enjoy the view. Then when you're ready, give me a call.</span>
                  </Grid.Row>
              }
              
              { experienceState ?
                  <Grid.Row className="experience-row-right-open">
                  <span className="greatness-open">Strive</span> 
                    <Grid.Row className="content-align-open">
                      <List>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Unicity International - 2018 to Present</span></List.Header>
                            <List.Description><span className="content-font">Frontend Web Developer, Orem UT</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">I create user friendly UI with custom and architecturally modern .LESS</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">I work with REST API's to CRUD, structure, and manipulate data</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">I work with multiple frontend javascript libraries such as ReactJS and AngularJS</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">Maintain Agile flow architecture with GitHub and bi-weekly sprint meetings</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">Occassionaly help backend developers update/create endpoints using NodeJS</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
    
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Upengo LLC (Remote) - 2019 to Present</span></List.Header>
                            <List.Description><span className="content-font">Backend Developer, Bluffdale UT</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">I create POST API payloads with data that comes from ssh tunnels</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">Parse ssh data into JSON format for API use.</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">Validate ssh responses to maintain security</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">Work with Frontend Developers to specify the format of JSON objects</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">Maintain an Agile architecture with GitHub and weekly sprint meetings</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
    
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">DevPoint Studios - 6 Months</span></List.Header>
                            <List.Description><span className="content-font">Fullstack Web Developer, Salt Lake City UT</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">I created REST API endpoints for data to be used on the Frontend of applications</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">Created reliable backend architecture for scalability and fluid maintenance</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">I worked with multiple backend technologies such as NodeJS and Ruby On Rails</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">I worked with multiple database technologies such as Postgress and MySQL</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description className="space-between-bullets">
                                    <span className="content-font">Created relationships between data/ tables</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
                      </List>
                    </Grid.Row>
                  </Grid.Row>
                :
                  <Grid.Row className="experience-row-right-closed">
                  <span className="greatness-closed">Strive</span>
                    <Grid.Row className="content-align-closed">
                      <List>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Unicity International - 2018 to Present</span></List.Header>
                            <List.Description><span className="content-font">Frontend Web Developer, Orem UT</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">I create user friendly UI with custom and architecturally modern .LESS</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">I work with REST API's to CRUD, structure, and manipulate data</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">I work with multiple frontend javascript libraries such as ReactJS and AngularJS</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">Maintain Agile flow architecture with GitHub and bi-weekly sprint meetings</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">Occassionaly help backend developers update/create endpoints using NodeJS</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>

                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Upengo LLC (Remote) - 2019 to Present</span></List.Header>
                            <List.Description><span className="content-font">Backend Developer, Bluffdale UT</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">I create POST API payloads with data that comes from ssh tunnels</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">Parse ssh data into JSON format for API use.</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">Validate ssh responses to maintain security</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">Work with Frontend Developers to specify the format of JSON objects</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">Maintain an Agile architecture with GitHub and weekly sprint meetings</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>

                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">DevPoint Studios - 6 Months</span></List.Header>
                            <List.Description><span className="content-font">Fullstack Web Developer, Salt Lake City UT</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">I created REST API endpoints for data to be used on the Frontend of applications</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">Created reliable backend architecture for scalability and fluid maintenance</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">I worked with multiple backend technologies such as NodeJS and Ruby On Rails</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">I worked with multiple database technologies such as Postgress and MySQL</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description>
                                    <span className="content-font">Created relationships between data/ tables</span>
                                  </List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
                      </List>
                    </Grid.Row>
                  </Grid.Row>
              }

              { educationState ?
                  <Grid.Row className="education-row-right-open">
                  <span className="greatness-open">For</span>
                    <Grid.Row className="content-align-open">
                      <List>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">University Of Utah, Salt Lake City UT - 2018</span></List.Header>
                            <List.Description><span className="content-font">Recieved Certificate Of Web Development</span></List.Description>
                          </List.Content>
                        </List.Item>
                        <Divider hidden/>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">SLCC, Taylorsville UT - 2016</span></List.Header>
                            <List.Description><span className="content-font">Recieved Certificate Of Computer Science</span></List.Description>
                          </List.Content>
                        </List.Item>
                        <Divider hidden/>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Udemy.com - 2017 to Present</span></List.Header>
                            <List.Description><span className="content-font">Recieved Certificates For Web Development</span></List.Description>
                          </List.Content>
                        </List.Item>
                      </List>
                    </Grid.Row>
                  </Grid.Row>
                :
                  <Grid.Row className="education-row-right-closed">
                  <span className="greatness-closed">For</span>
                    <Grid.Row className="content-align-closed">
                      <List>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">University Of Utah, Salt Lake City UT - 2018</span></List.Header>
                            <List.Description><span className="content-font">Recieved Certificate Of Web Development</span></List.Description>
                          </List.Content>
                        </List.Item>
                        <Divider hidden/>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">SLCC, Taylorsville UT - 2016</span></List.Header>
                            <List.Description><span className="content-font">Recieved Certificate Of Computer Science</span></List.Description>
                          </List.Content>
                        </List.Item>
                        <Divider hidden/>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Udemy.com - 2017 to Present</span></List.Header>
                            <List.Description><span className="content-font">Recieved Certificates For Web Development</span></List.Description>
                          </List.Content>
                        </List.Item>
                      </List>
                    </Grid.Row>
                  </Grid.Row>
              }

              { projectState ?
                  <Grid.Row className="projects-row-right-open">
                  <span className="greatness-open">Greatness</span>
                    <Grid.Row className="content-align-open">
                      <List>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">www.thisjustin.tech</span></List.Header>
                            <List.Description><span className="content-font">Personal Project</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with ReactJS v16.8.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font"><a href="http://www.thisjustin.tech/" target="_blank" rel="noopener noreferrer">http://www.thisjustin.tech/</a></span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
    
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Unicity Portal (In House Software)</span></List.Header>
                            <List.Description><span className="content-font">Built by Unicity International</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with ReactJS v16.8.6</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Not Production Ready</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
    
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">MyUnicity</span></List.Header>
                            <List.Description><span className="content-font">Built by Unicity International</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with ReactJS v15.4.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">This site is only available with a Unicity Account</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
    
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Dspencer</span></List.Header>
                            <List.Description><span className="content-font">Built by Upengo LLC</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with NodeJS v10.6.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Not Production Ready</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
    
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Unicity Office</span></List.Header>
                            <List.Description><span className="content-font">Built by Unicity International</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with AngularJS v1.4.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">This site is only available with a Unicity Account</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
    
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Unicity Library</span></List.Header>
                            <List.Description><span className="content-font">Built by Unicity International</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with AngularJS v1.4.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">This site is only available with a Unicity Account</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
                      </List>
                    </Grid.Row>
                  </Grid.Row>
                :
                  <Grid.Row className="projects-row-right-closed">
                  <span className="greatness-closed">Greatness</span>
                    <Grid.Row className="content-align-closed">
                      <List>
                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">www.thisjustin.tech</span></List.Header>
                            <List.Description><span className="content-font">Personal Project</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with ReactJS v16.8.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font"><a href="http://www.thisjustin.tech/" target="_blank" rel="noopener noreferrer">http://www.thisjustin.tech/</a></span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>

                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Unicity Portal (In House Software)</span></List.Header>
                            <List.Description><span className="content-font">Built by Unicity International</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with ReactJS v16.8.6</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Not Production Ready</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>

                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">MyUnicity</span></List.Header>
                            <List.Description><span className="content-font">Built by Unicity International</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with ReactJS v15.4.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">This site is only available with a Unicity Account</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>

                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Dspencer</span></List.Header>
                            <List.Description><span className="content-font">Built by Upengo LLC</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with NodeJS v10.6.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Not Production Ready</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>

                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Unicity Office</span></List.Header>
                            <List.Description><span className="content-font">Built by Unicity International</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with AngularJS v1.4.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">This site is only available with a Unicity Account</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>

                        <List.Item>
                          <List.Content>
                            <List.Header><span className="uni-content-header">Unicity Library</span></List.Header>
                            <List.Description><span className="content-font">Built by Unicity International</span></List.Description>
                            <List.List as="ul">
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">Built with AngularJS v1.4.0</span></List.Description>
                                </List.Content>
                              </List.Item>
                              <List.Item as="li">
                                <List.Content>
                                  <List.Description><span className="content-font">This site is only available with a Unicity Account</span></List.Description>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
                      </List>
                    </Grid.Row>
                  </Grid.Row>
              }

            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    </Fragment>
  )
}

export default ResumeIndex;