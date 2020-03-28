import React, {} from 'react';
import { Container, Segment, Grid, Icon } from 'semantic-ui-react';

const SeeTheCorruption = () => {

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "40%",
    left: "47%"
  };

  const iconStyles = {
    margin: "15px 10px 15px 10px",
    cursor: "pointer",
    textTransform: "none",
    textDecoration: "none"
  };

  return (
    <Container>
      <Grid style={styles}>
        <Segment textAlign="center" circular>
          <a href="https://www.google.com" target="_blank">
            <Icon style={iconStyles} color="black" size="huge" name="download" link />
          </a>
        </Segment>
      </Grid>
    </Container>
  );
};

export default SeeTheCorruption;