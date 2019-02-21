import React, { Fragment, useState, useEffect } from 'react';
import Loadable from 'react-loadable';
import { Header, Segment, Icon, Grid, Container } from 'semantic-ui-react';
import Loader from '../../../../Loader';
const ColumnsContentLoader = Loadable({loader: () => import('./ColumnsContent'), loading: () => <Loader/>});
const BannerContentLoader = Loadable({loader: () => import('./BannerContent'), loading: () => <Loader/>});
const NavigationCompLoader = Loadable({loader: () => import('./NavigationComp'), loading: () => <Loader/>});
const CountrySelectorLoader = Loadable({loader: () => import('./CountrySelector'), loading: () => <Loader/>});



const ContentEditorIndex = () => {
  return(
    <Fragment>
      <Segment textAlign="center" color="yellow" inverted>
        <Header as="h1">Under Contruction</Header>
        <Icon name="warning sign" size="large"/>
      </Segment>
      {/* The code for this Demo should go below here */}
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}> {/* This row can be one component */}
              <NavigationCompLoader/>
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={3}> {/* This row can be one component */}
              <CountrySelectorLoader/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <BannerContentLoader/>
          </Grid.Row>
          <Grid.Row>
            <ColumnsContentLoader/>
          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default ContentEditorIndex;