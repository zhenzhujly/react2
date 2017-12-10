import React, { Component } from 'react';
import '../styles/roots.css';
import Header from './header';

class Roots extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="roots">
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

export default Roots;
