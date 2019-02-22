import React, { Fragment, useState } from 'react';
import { Segment, Grid, Image, Button, Icon } from 'semantic-ui-react';
import ColumnsFormComp from './ColumnsFormComp';

const ColumnsContent = () => {
  const [ image1, setImage1 ] = useState("http://s3-us-west-2.amazonaws.com/unicity.com/uploads/sites/2/Image-1.jpg");
  const [ image2, setImage2 ] = useState("http://s3-us-west-2.amazonaws.com/unicity.com/uploads/sites/2/Image-2-02.png");
  const [ image3, setImage3 ] = useState("http://s3-us-west-2.amazonaws.com/unicity.com/uploads/sites/2/Image-3.jpg");

  const [ header1, setHeader1 ] = useState("Unicity Results");
  const [ header2, setHeader2 ] = useState("GetFit21");
  const [ header3, setHeader3 ] = useState("NEW! - Unicity 365");

  const [ description1, setDescription1 ] = useState("Real results, real success.  That is Unicity.  Scientific formulations rigorously tested in the finest institutions, our products yield unequaled results in people’s lives.  In the face of the world’s most serious health challenges, Unicity products are improving health all over the world – dramatically -- one person at a time.  Real science. Real results.");
  const [ description2, setDescription2 ] = useState("Looking to jump start a new lifestyle? GetFit21 is perfect for anyone looking to begin a healthier life style. The difference between us and the other guys? Unique and proven products to accelerate your results and lock in your upward trajectory. Let’s get started.");
  const [ description3, setDescription3 ] = useState("Wondering how to set yourself up for long-term success? Unicity 365 gives you what you need to achieve optimal health as well as grow your business. There is no better time than now to invest in the rest of your life.");

  const [ buttonLink1, setButtonLink1 ] = useState("https://www.unicity.com/usa/company/unicity-science/");
  const [ buttonLink2, setButtonLink2 ] = useState("https://shop.getfit21.com/#/home");
  const [ buttonLink3, setButtonLink3 ] = useState("");

  const [ buttonText1, setButtonText1 ] = useState("LEARN MORE");
  const [ buttonText2, setButtonText2 ] = useState("LEARN MORE");
  const [ buttonText3, setButtonText3 ] = useState("COMING FEBRUARY 2019");

  const [ editMode1, setEditMode1 ] = useState(false);
  const [ editMode2, setEditMode2 ] = useState(false);
  const [ editMode3, setEditMode3 ] = useState(false);

  const columnsData = [
    {
      image: image1,
      header: header1,
      description: description1,
      link: buttonLink1,
      buttonText: buttonText1,
      editMode: editMode1,
      setEditMode: editMode1 === true ? () => setEditMode1(false) : () => setEditMode1(true),
      value1: image1,
      value2: header1,
      value3: description1,
      value4: buttonLink1,
      value5: buttonText1,
      onChange1: e => setImage1(e.target.value),
      onChange2: e => setHeader1(e.target.value),
      onChange3: e => setDescription1(e.target.value),
      onChange4: e => setButtonLink1(e.target.value),
      onChange5: e => setButtonText1(e.target.value),
    },
    {
      image: image2,
      header: header2,
      description: description2,
      link: buttonLink2,
      buttonText: buttonText2,
      editMode: editMode2,
      setEditMode: editMode2 === true ? () => setEditMode2(false) : () => setEditMode2(true),
      value1: image2,
      value2: header2,
      value3: description2,
      value4: buttonLink2,
      value5: buttonText2,
      onChange1: e => setImage2(e.target.value),
      onChange2: e => setHeader2(e.target.value),
      onChange3: e => setDescription2(e.target.value),
      onChange4: e => setButtonLink2(e.target.value),
      onChange5: e => setButtonText2(e.target.value),
    },
    {
      image: image3,
      header: header3,
      description: description3,
      link: buttonLink3,
      buttonText: buttonText3,
      editMode: editMode3,
      setEditMode: editMode3 === true ? () => setEditMode3(false) : () => setEditMode3(true),
      value1: image3,
      value2: header3,
      value3: description3,
      value4: buttonLink3,
      value5: buttonText3,
      onChange1: e => setImage3(e.target.value),
      onChange2: e => setHeader3(e.target.value),
      onChange3: e => setDescription3(e.target.value),
      onChange4: e => setButtonLink3(e.target.value),
      onChange5: e => setButtonText3(e.target.value),
    }
  ]

  return(
    columnsData.map((column, index) => {
      return(
        <Grid.Column key={index} width={5}>
          {column.editMode ? 
              <Fragment>
                <Segment textAlign="left" basic>
                  <ColumnsFormComp 
                    value1={column.value1}
                    value2={column.value2}
                    value3={column.value3}
                    value4={column.value4}
                    value5={column.value5}
                    onChange1={column.onChange1}
                    onChange2={column.onChange2}
                    onChange3={column.onChange3}
                    onChange4={column.onChange4}
                    onChange5={column.onChange5}
                  />
                  <Segment textAlign="right" basic>
                    <Button onClick={column.setEditMode}><Icon name="save"/>Save</Button>
                  </Segment>
                </Segment>
              </Fragment>
            :
              <Fragment>
                <Segment textAlign="center" basic>
                  <Image src={column.image} style={styles.imageSize} size="medium"/>
                  <Segment textAlign="left" style={styles.headerStyle} basic>
                    {column.header}
                  </Segment>
                  <Segment textAlign="left" style={styles.descriptionStyle} basic>
                    {column.description}
                  </Segment>
                  <Segment textAlign="left" style={styles.buttonSpacing} basic>
                    {column.link === "" ? 
                        <span style={styles.buttonTextStyle}>{column.buttonText}</span>
                      :
                        <a href={column.link} target="_blank">
                          <span style={styles.buttonTextStyle}>{column.buttonText}</span>
                        </a>
                    }
                  </Segment>
                  <Segment textAlign="right" basic>
                    <Button onClick={column.setEditMode}><Icon name="edit"/>Edit</Button>
                  </Segment>
                </Segment>
              </Fragment>
          }
        </Grid.Column>
      )
    })
  )
}

const styles = {
  imageSize: {
    height: '200px'
  },
  headerStyle: {
    marginLeft: '-15px',
    marginTop: '-5px',
    fontSize: '16px'
  },
  descriptionStyle: {
    marginLeft: '-15px',
    marginTop: '-15px'
  },
  buttonSpacing: {
    marginLeft: '-15px',
    marginTop: '-15px'
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    color: 'orange'
  }
}

export default ColumnsContent;