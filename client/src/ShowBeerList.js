import React, { Component } from 'react';
import axios from 'axios';

class ShowBeerList extends Component {

  constructor(props) {
    super(props);

    this.state={
      id: props.params.id,
      title: '',
      avatar: '',
      items: [],
    }
  }

  render() {
    console.log('Beer ID is: ' + this.state.id);
    console.log('List Title is: ' + this.state.title);
    return (
      <div id="show-beer-list">
        <h1>{this.state.title}</h1>
      </div>
    );
  }


  componentDidMount() {
    const pathName = '/api/lists/' + this.state.id;
    console.log(pathName);
    axios.get(pathName, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
      .then(resp => {
          console.log('The response title is: ' + resp.data.title);
          this.setState({
            ...this.state,
            title: resp.data.title,
            avatar: resp.data.avatar,
            items: resp.data.items
          });
        })
      .catch(err => console.log(`Error! ${err}`));

  }//End componentDidMount

}// End ShowBeerList

export default ShowBeerList;
