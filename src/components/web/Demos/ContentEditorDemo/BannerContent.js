import React, { Fragment, useState } from 'react';
import { Grid, Segment, Image, Button, Icon, Header } from 'semantic-ui-react';
import BannerFormComp from './BannerFormComp';

const BannerContent = () => {
  const [ url1, setUrl1 ] = useState("http://s3-us-west-2.amazonaws.com/unicity.com/uploads/sites/2/Artboard-2%403x.jpg");
  const [ header1, setHeader1 ] = useState("");
  const [ subHeader1, setSubHeader1 ] = useState("");
  const [ buttonLink1, setButtonLink1 ] = useState("");
  const [ buttonText1, setButtonText1 ] = useState("");
  const [ layout1, setLayout1 ] = useState("");

  const [ url2, setUrl2 ] = useState("http://www.unicity.com/usa/wp-content/uploads/sites/2/Banner-2-GetFit21-web.png");
  const [ header2, setHeader2 ] = useState("");
  const [ subHeader2, setSubHeader2 ] = useState("");
  const [ buttonLink2, setButtonLink2 ] = useState("https://shop.getfit21.com/#/home");
  const [ buttonText2, setButtonText2 ] = useState("JOIN THE CHALLENGE");
  const [ layout2, setLayout2 ] = useState("L1");

  const [ url3, setUrl3 ] = useState("http://www.unicity.com/usa/wp-content/uploads/sites/2/Banner-4-Bios-7-web1.png");
  const [ header3, setHeader3 ] = useState("BIOS 7");
  const [ subHeader3, setSubHeader3 ] = useState("Metabolic and Prebiotic support");
  const [ buttonLink3, setButtonLink3 ] = useState("https://www.unicity.com/usa/shop/bios-7/");
  const [ buttonText3, setButtonText3 ] = useState("LEARN MORE");
  const [ layout3, setLayout3 ] = useState("L2");

  const [ url4, setUrl4 ] = useState("http://www.unicity.com/usa/wp-content/uploads/sites/2/Banner-5-Resolv-web.png");
  const [ header4, setHeader4 ] = useState("OMEGA LIFE-3 RESOLV");
  const [ subHeader4, setSubHeader4 ] = useState("Available Now");
  const [ buttonLink4, setButtonLink4 ] = useState("https://www.unicity.com/usa/shop/omega-life-3/");
  const [ buttonText4, setButtonText4 ] = useState("LEARN MORE");
  const [ layout4, setLayout4 ] = useState("L3");

  const [ imagePosition, setImagePosition ] = useState(0);
  const [ editMode, setEditMode ] = useState(false);

  const pageImages = [
    {
      url: url1,
      header: header1,
      subHeader: subHeader1,
      buttonLink: buttonLink1,
      buttonText: buttonText1,
      whichImage: "Image 1",
      layout: layout1,

      value1: url1,
      value2: header1,
      value3: subHeader1,
      value4: buttonLink1,
      value5: buttonText1,
      onChange1: e => setUrl1(e.target.value),
      onChange2: e => setHeader1(e.target.value),
      onChange3: e => setSubHeader1(e.target.value),
      onChange4: e => setButtonLink1(e.target.value),
      onChange5: e => setButtonText1(e.target.value),
      layoutChange: (layout) => setLayout1(layout),
    },
    {
      url: url2,
      header: header2,
      subHeader: subHeader2,
      buttonLink: buttonLink2,
      buttonText: buttonText2,
      whichImage: "Image 2",
      layout: layout2,

      value1: url2,
      value2: header2,
      value3: subHeader2,
      value4: buttonLink2,
      value5: buttonText2,
      onChange1: e => setUrl2(e.target.value),
      onChange2: e => setHeader2(e.target.value),
      onChange3: e => setSubHeader2(e.target.value),
      onChange4: e => setButtonLink2(e.target.value),
      onChange5: e => setButtonText2(e.target.value),
      layoutChange: (layout) => setLayout2(layout),
    },
    {
      url: url3,
      header: header3,
      subHeader: subHeader3,
      buttonLink: buttonLink3,
      buttonText: buttonText3,
      whichImage: "Image 3",
      layout: layout3,

      value1: url3,
      value2: header3,
      value3: subHeader3,
      value4: buttonLink3,
      value5: buttonText3,
      onChange1: e => setUrl3(e.target.value),
      onChange2: e => setHeader3(e.target.value),
      onChange3: e => setSubHeader3(e.target.value),
      onChange4: e => setButtonLink3(e.target.value),
      onChange5: e => setButtonText3(e.target.value),
      layoutChange: (layout) => setLayout3(layout),
    },
    {
      url: url4,
      header: header4,
      subHeader: subHeader4,
      buttonLink: buttonLink4,
      buttonText: buttonText4,
      whichImage: "Image 4",
      layout: layout4,

      value1: url4,
      value2: header4,
      value3: subHeader4,
      value4: buttonLink4,
      value5: buttonText4,
      onChange1: e => setUrl4(e.target.value),
      onChange2: e => setHeader4(e.target.value),
      onChange3: e => setSubHeader4(e.target.value),
      onChange4: e => setButtonLink4(e.target.value),
      onChange5: e => setButtonText4(e.target.value),
      layoutChange: (layout) => setLayout4(layout),
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

  const setBannerLayout = (layout) => {
    if (layout.includes("L1")) {
      if (layout === "L1-header") {
        return layouts.L1.header
      }
      if (layout === "L1-subHeader") {
        return layouts.L1.subHeader
      } 
      if (layout === "L1-button") {
        return layouts.L1.button
      }
      if (layout === "L1-container") {
        return layouts.L1.container
      } 

    } else if (layout.includes("L2")) {
      if (layout === "L2-header") {
        return layouts.L2.header
      }
      if (layout === "L2-subHeader") {
        return layouts.L2.subHeader
      } 
      if (layout === "L2-button") {
        return layouts.L2.button
      }
      if (layout === "L2-container") {
        return layouts.L2.container
      }

    } else if (layout.includes("L3")) {
      if (layout === "L3-header") {
        return layouts.L3.header
      }
      if (layout === "L3-subHeader") {
        return layouts.L3.subHeader
      } 
      if (layout === "L3-button") {
        return layouts.L3.button
      }
      if (layout === "L3-container") {
        return layouts.L3.container
      }
    } else {
      return null
    }
  }

  return(
    <Grid.Column width={15}>
      {editMode ?
          <Fragment>
            <Segment textAlign="left">
              <BannerFormComp
                layout={pageImages[imagePosition].layout}
                layoutChange={pageImages[imagePosition].layoutChange}
                whichImage={pageImages[imagePosition].whichImage} 
                value1={pageImages[imagePosition].value1}
                value2={pageImages[imagePosition].value2}
                value3={pageImages[imagePosition].value3}
                value4={pageImages[imagePosition].value4}
                value5={pageImages[imagePosition].value5}
                onChange1={pageImages[imagePosition].onChange1}
                onChange2={pageImages[imagePosition].onChange2}
                onChange3={pageImages[imagePosition].onChange3}
                onChange4={pageImages[imagePosition].onChange4}
                onChange5={pageImages[imagePosition].onChange5}
              />
            </Segment>
            <Segment textAlign="right" basic>
              <Button onClick={() => setEditMode(false)}><Icon name="save"/>Save</Button>
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

            <Segment style={styles.bannerStyles2} basic>
              <div style={setBannerLayout(`${pageImages[imagePosition].layout}-container`)}>
                <p style={setBannerLayout(`${pageImages[imagePosition].layout}-header`)}>{pageImages[imagePosition].header}</p>
                <p style={setBannerLayout(`${pageImages[imagePosition].layout}-subHeader`)}>{pageImages[imagePosition].subHeader}</p>
                {pageImages[imagePosition].buttonLink === "" ?  
                    null
                  :
                    <a href={pageImages[imagePosition].buttonLink} target="_blank">
                      <Button style={setBannerLayout(`${pageImages[imagePosition].layout}-button`)} color="orange">
                        {pageImages[imagePosition].buttonText}
                      </Button>
                    </a>
                }
              </div>
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
  },
  bannerStyles2: {
    height: '0px'
  },
  testStyles: {
    position: 'relative',
    top: '-300px'
  }
}

const layouts = {
  L1: {
    container: {
      position: 'absolute',
      top: '-150px',
      right: '105px',
      textAlign: 'right'
    },
    header: {
      fontSize: '60px',
      marginLeft: '-3.5px',
      marginBottom: '10px',
      fontWeight: 'bold'
    },
    subHeader: {

    },
    button: {
      
    }
  },
  L2: {
    container: {
      position: 'absolute',
      top: '-580px',
      right: '150px',
      textAlign: 'left'
    },
    header: {
      fontSize: '60px',
      marginLeft: '-3.5px',
      marginBottom: '10px',
      fontWeight: 'bold'
    },
    subHeader: {

    },
    button: {
      
    }
  },
  L3: {
    container: {
      position: 'absolute',
      top: '-200px',
      right: '105px',
      textAlign: 'right'
    },
    header: {
      fontSize: '30px',
      marginBottom: '10px',
      fontWeight: 'bold'
    },
    subHeader: {

    },
    button: {
      marginRight: '0px'
    }
  }
}

export default BannerContent;