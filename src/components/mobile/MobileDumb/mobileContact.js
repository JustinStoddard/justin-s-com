import React from 'react';
import LinkedIn from '../../Images/linkedin image.png';
import GitHub from '../../Images/github image.png';
import Instagram from '../../Images/instagram image.png';
import FaceBook from '../../Images/facebook image.png';
import Phone from '../../Images/phone image.png';
import Email from '../../Images/email image.png';
import CommentMobile from '../MobileSmart/CommentFormMobile';
import { Container, Segment, Header, Grid, Image } from 'semantic-ui-react';

const MobileContact = () => {
  return(
    <Container>
      <Segment textAlign="center" inverted>
        <Header as="h2">Contact</Header>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <a href="https://www.linkedin.com/in/justin-stoddard-65171015a/" rel="noopener noreferrer" target="_blank"> {/* LinkedIn Link */}
                  <Image src={LinkedIn} size="medium" style={styles.imageCrop}/>
                </a>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <a href="https://github.com/JustinStoddard" rel="noopener noreferrer" target="_blank"> {/* GitHub Link */}
                  <Image src={GitHub} size="medium" style={styles.imageCrop}/>
                </a>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <a href="https://www.instagram.com/people_call_me_justin/" rel="noopener noreferrer" target="_blank"> {/* Instagram Link */}
                  <Image src={Instagram} size="medium" style={styles.imageCrop}/> 
                </a>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center" color="blue">
                <a href="https://www.facebook.com/profile.php?id=100005710514833" rel="noopener noreferrer" target="_blank"> {/* FaceBook Link */}
                  <Image src={FaceBook} size="medium" style={styles.imageCrop}/>
                </a>
              </Segment>
            </Segment>             
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={Phone} size="medium" style={styles.imageCrop}/>
              </Segment>
              <Segment textAlign="center" color="blue">
                <Header as="h5">801-209-4087</Header>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={Email} size="medium" style={styles.imageCrop}/>
              </Segment>
              <Segment textAlign="center" color="blue">
                <Header as="h6">Stoddard.j.t@gmail.com</Header>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment textAlign="center" inverted>
        <Header as="h2">Comments</Header>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment inverted>
              <Segment textAlign="center">
                <CommentMobile />
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

const styles = {
  imageCrop: {
    height: '100px'
  }
}

export default MobileContact;