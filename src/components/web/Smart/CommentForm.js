import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
import Loader from '../../../Loader';
import { Container, Button, Segment, Grid, Icon, Divider } from 'semantic-ui-react';

const PostLoader = Loadable({
  loader: () => import('../Dumb/Post'),
  loading: () => <Loader/>,
})

const FormLoader = Loadable({
  loader: () => import('../Dumb/Form'),
  loading: () => <Loader/>
})

//The form below should be being pulled in from a different file and being passed the props it needs!
//This Component should be the Container/ Smart Component for the comments. It should have not only all 
//the functionaliy it already has but also the logic for the new handleDelete and handleEdit functions
//which should be passed in props to the Post.js

class CommentForm extends Component {
  state = { name: '', description: '', createComment: false, comments: [] }

  showForm = async () => {
    const { createComment } = this.state;
    await this.setState({
      createComment: !createComment 
    })
  }

  handleDelete = async (index) => {
    await this.setState({
      comments: this.state.comments.filter((_, i) => i !== index)
    });
  }

  handleEdit = () => {

  }

  handleChange = async (e) => {
    const { name, description, value } = e.target;
    await this.setState({ 
      [name]: value, [description]: value 
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.setState(prevState => ({ 
      name: '', 
      description: '', 
      createComment: !prevState.createComment, 
      comments: [ ...prevState.comments, { 
        name: prevState.name, 
        description: prevState.description 
      }] 
    }))
  }
  
  render() {
    const { name, description, createComment, comments } = this.state;
    return(
      <Container>
        { createComment ? 
            <Fragment>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}></Grid.Column>
                  <Grid.Column width={8}>
                  <Segment inverted>
                    <Button onClick={this.showForm} color="blue"><Icon name="eye slash"/>Hide</Button>
                  </Segment>
                  </Grid.Column>
                  <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
              </Grid>
              <Divider hidden/>
              <FormLoader 
                name={name}
                description={description}
                submit={this.handleSubmit}
                change={this.handleChange}
              />
            </Fragment>
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
              <PostLoader 
                comments={comments}
                deleteCom={this.handleDelete}
              />
            </Grid>
        }
      </Container>
    )
  }
}

export default CommentForm;