import React, { Component } from 'react';
import { Form, Container, Button, Segment, Grid, Header, Icon } from 'semantic-ui-react';

class CommentForm extends Component {
  state ={ name: '', description: '', createComment: false }

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
    const { id, name, description, createComment } = this.state;
    //Because I dont have a definitive backend so I cant save comments to the DOM. But this function does simulate opening a form, creating a post, and saving the post.
    this.setState({ name: '', description: '', createComment: !createComment })
  }
  
  render() {
    const { name, description, createComment } = this.state;
    return(
      <Container>
        { createComment ? 
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
          :
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}></Grid.Column>
                <Grid.Column width={8}>
                  <Segment inverted>
                    <Button onClick={this.showForm} color="blue"><Icon name="add circle"/>Create A Comment</Button>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={4}></Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={4}></Grid.Column>
                <Grid.Column width={8}>
                  <Segment inverted>
                    <Segment color="blue">
                      <Header as="h3">Justin Stoddard</Header>
                    </Segment>
                    <Segment textAlign="left" color="blue">
                      <Header as="h5">Lucas ipsum dolor sit amet sidious aayla skywalker kessel windu wampa grievous gamorrean dooku luuke. Solo bothan coruscant solo. Yoda darth jade lando fett mace kashyyyk. Moff alderaan grievous maul vader alderaan. Solo zabrak darth leia jabba. Moff leia greedo mon calamari luke moff solo ahsoka. Anakin skywalker tusken raider darth. Aayla vader solo obi-wan antilles kamino. Binks endor ackbar calrissian ackbar dagobah hoth ackbar calamari. Bothan kenobi darth utapau solo moff secura c-3po. Padmé tusken raider mandalore jabba anakin antilles.</Header>
                    </Segment>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={4}></Grid.Column>
              </Grid.Row>
            </Grid>
            
        }
      </Container>
    )
  }
}

export default CommentForm;