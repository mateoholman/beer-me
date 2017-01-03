import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          className='search-bar'
          type='text'
          placeholder='Search for a new beer...'
          value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-submit'
        />
      </form>
    );
  }
}//End SearchBar

export default SearchBar;
