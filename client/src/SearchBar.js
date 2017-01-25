import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './css/SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state={
      searchText: ''
    };
  }

  handleSearchBarChange(event) {
    this.setState({searchText: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.searchText);
    this.setState({searchText: ''})
  }

  render() {
  return (
      <Form inline onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <FormControl
            type='text'
            placeholder='Search for a new beer...'
            value={this.state.searchText}
            onChange={this.handleSearchBarChange.bind(this)}
          />
          <Button type='submit' bsStyle="primary">
            Submit
          </Button>
        </ FormGroup>
      </Form>
    );
  }
}//End SearchBar

export default SearchBar;
