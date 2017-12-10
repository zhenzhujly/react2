import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="header">
        默认显示
        <Link to="home">头部</Link>
        <Link to="foots">尾部</Link>
      </div>
    )
  }
}

export default Header;
