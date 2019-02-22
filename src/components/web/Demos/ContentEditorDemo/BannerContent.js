import React, { Fragment, useState } from 'react';
import { Grid, Segment, Image, Button, Icon } from 'semantic-ui-react';
import BannerFormComp from './BannerFormComp';

const BannerContent = () => {
  const [ url1, setUrl1 ] = useState("http://s3-us-west-2.amazonaws.com/unicity.com/uploads/sites/2/Artboard-2%403x.jpg");
  const [ url2, setUrl2 ] = useState("http://www.unicity.com/usa/wp-content/uploads/sites/2/Banner-2-GetFit21-web.png");
  const [ url3, setUrl3 ] = useState("http://www.unicity.com/usa/wp-content/uploads/sites/2/Banner-4-Bios-7-web1.png");
  const [ url4, setUrl4 ] = useState("http://www.unicity.com/usa/wp-content/uploads/sites/2/Banner-5-Resolv-web.png");
  const [ imagePosition, setImagePosition ] = useState(0);
  const [ editMode, setEditMode ] = useState(false);

  const pageImages = [
    {url: url1},
    {url: url2},
    {url: url3},
    {url: url4},
  ]

  const imagesEditor = [
    {
      value1: url1,
      value2: url2,
      value3: url3,
      value4: url4,
      onChange1: e => setUrl1(e.target.value),
      onChange2: e => setUrl2(e.target.value),
      onChange3: e => setUrl3(e.target.value),
      onChange4: e => setUrl4(e.target.value),
    }
  ]

  const galleryMovement = (operator) => {
    if (operator === "plus") {
      if (imagePosition === 3) {
        setImagePosition(0)
      } else {
        setImagePosition(imagePosition + 1)
      }
    } else if (operator === "minus") {
      if (imagePosition === 0) {
        setImagePosition(3)
      } else {
        setImagePosition(imagePosition - 1)
      }
    }
  }

  return(
    <Grid.Column width={15}>
      {editMode ?
          <Fragment>
            <Segment textAlign="left">
              <BannerFormComp 
                value1={imagesEditor[0].value1}
                value2={imagesEditor[0].value2}
                value3={imagesEditor[0].value3}
                value4={imagesEditor[0].value4}
                onChange1={imagesEditor[0].onChange1}
                onChange2={imagesEditor[0].onChange2}
                onChange3={imagesEditor[0].onChange3}
                onChange4={imagesEditor[0].onChange4}
              />
              <Segment textAlign="right" basic>
                <Button onClick={() => setEditMode(false)}><Icon name="save"/>Save</Button>
              </Segment>
            </Segment>
          </Fragment>
        :
          <Fragment>
            <Segment textAlign="center" style={styles.bannerStyles} basic>
              <Image src={pageImages[imagePosition].url} style={styles.imageStyles} size="massive"/>
              <Button onClick={() => galleryMovement("minus")} style={styles.imageMovementButtonLeft} size="small" circular compact>
                <Icon name="chevron circle left" color="orange" size="large" fitted/>
              </Button>
              <Button onClick={() => galleryMovement("plus")} style={styles.imageMovementButtonRight} size="small" circular compact>
                <Icon name="chevron circle right" color="orange" size="large" fitted/>
              </Button>
              <Segment textAlign="right" basic>
                <Button onClick={() => setEditMode(true)} style={styles.editButtonStyle}><Icon name="edit"/>Edit</Button>
              </Segment>
            </Segment>
          </Fragment>
      }
    </Grid.Column>
  )
}

const styles = {
  imageStyles: {
    width: '1000px',
    height: '582.22px'
  },
  imageMovementButtonRight: {
    position: 'relative',
    left: '430px',
    top: '-300px'
  },
  imageMovementButtonLeft: {
    position: 'relative',
    left: '-430px',
    top: '-300px'
  },
  editButtonStyle: {
    position: 'relative',
    top: '-115px'
  },
  bannerStyles: {
    marginBottom: '-125px'
  }
}

export default BannerContent;