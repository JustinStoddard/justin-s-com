import React, { Component } from 'react';
import { Segment, Container, Input, Icon } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    const { term } = this.state;
    return(
      <Segment textAlign="left" inverted>
        <Input icon={<Icon name="search" inverted circular link/>} size="huge" placeholder="Search..." value={term} onChange={event => this.onInputChange(event.target.value)}/>
      </Segment>
    )
  }
}

export default SearchBar;