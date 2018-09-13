import React, { Component, Fragment } from 'react';
import { Form, Container, Button, Segment, Grid, Header, Icon, Divider } from 'semantic-ui-react';

class CommentForm extends Component {
  state = { name: '', description: '', createComment: false, comments: [] }

  showForm = () => {
    const { createComment } = this.state;
    this.setState({ createComment: !createComment })
  }

  handleChange = (e) => {
    const { name, description, value } = e.target;
    this.setState({ [name]: value, [description]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({ name: '', description: '', createComment: !prevState.createComment, comments: [ ...prevState.comments, { name: prevState.name, description: prevState.description }] }))
  }
  
  render() {
    const { name, description, createComment } = this.state;
    return(
      <Container>
        { createComment ? 
          <Fragment>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Segment inverted>
                    <Button onClick={this.showForm} color="blue"><Icon name="eye slash"/>Hide</Button>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider hidden/>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                name="name"
                required
                value={name}
                onChange={this.handleChange}
                placeholder="Name"
              />
              <Form.Input
                name="description"
                required
                value={description}
                onChange={this.handleChange}
                placeholder="Description"
              />
              <Form.Button color="blue"><Icon name="check circle"/>Save</Form.Button>
            </Form>
          </Fragment>
          :
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Segment inverted>
                    <Button onClick={this.showForm} color="blue"><Icon name="add circle"/>Create A Comment</Button>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              {this.state.comments.map(c =>
                <Grid.Row>
                  <Grid.Column>
                    <Segment inverted>
                      <Segment color="blue">
                        <Header as="h3">{c.name}</Header>
                      </Segment>
                      <Segment textAlign="left" color="blue">
                        <Header as="h5">{c.description}</Header>
                      </Segment>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              )}
            </Grid>
            
        }
      </Container>
    )
  }
}

export default CommentForm;