import React, { Component } from 'react';


// Functional component
// const SearchBar = () => {
//   return <input />;
// }

// Class component

class SearchBar extends Component {

  //State: Whenever the state is changed,
  // the component re-renders with all its children

  constructor(props) {
    super(props);


    //term = search term
    this.state = {term: ''};

    //Never manipulate state by assigning a new value
  }

  // What will be rendered

  //Controlled Component: The state tells the input how to change, not the other way around
  render() {
    return (
      <div className="search-bar">
        <input
        value={ this.state.term }
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // // Event Handler
  //
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
