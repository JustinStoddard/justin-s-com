import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

const ColumnsContent = () => {

  const columnsData = [
    {
      image: "image",
      description: "This is the first description",
      link: "link"
    },
    {
      image: "image",
      description: "This is the second description",
      link: "link"
    },
    {
      image: "image",
      description: "This is the third description",
      link: "link"
    }
  ]

  return(
    columnsData.map((column, index) => {
      return(
        <Grid.Column key={index} width={5}>
          <Segment textAlign="center">
            <Segment>
              {column.image}
            </Segment>
            <Segment>
              {column.description}
            </Segment>
            <Segment>
              {column.link}
            </Segment>
          </Segment>
        </Grid.Column>
      )
    })
  )
}

export default ColumnsContent;