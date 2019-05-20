import React, { Component } from 'react';

import Septi from "./pages/Septi";
import Rara from "./pages/Rara";
import Daru from "./pages/Daru";
import Fajar from "./pages/Fajar";

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name : "Septi",
    };
  }
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value 
    });
  }
  clicked(menu){
    this.setState({
      name : menu.name,
    });
  }
  info(name){    
    if(name === 'Rara'){
      return (
        <Rara/>
      );
    } else if(name === 'Daru'){
      return (
        <Daru/>
      );
    } else if(name === 'Fajar'){
      return (
        <Fajar/>
      );
    } else {
      //display default
      return (
        <Septi/>
      );
    }
  }
  render() { 
    return ( 
      <React.Fragment>
        <div className="main-top">
          <header>
           <div className="container-fluid px-lg-5 ">
               <nav className="mnu mx-auto">
                <label htmlFor="drop" className="toggle">Anggota</label>
                <ul className="menu">{
                  this.props.pages.map((menu,index) => {
                    let style = '';
                    if(this.state.name === menu.name){
                      style = `active`;
                    }
                    return <li                     
                      className = { style }
                      onClick = {this.clicked.bind(this,menu)} 
                      key = {index}
                    ><a className="mr-lg-4 mr-3">
                      {menu.name}
                    </a></li>;
                  }
                )}
              </ul>
              </nav>
            </div>
          </header>
       </div>     

        <div>
            {this.info(this.state.name)}
        </div>
      </React.Fragment>
    );
  }
}

export default App;