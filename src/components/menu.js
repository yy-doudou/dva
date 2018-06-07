/*
@author  tanzhiling 
@function 头部菜单栏
@reducer app
*/

import React from 'react';
import'./menu.css';``
export default class Menu extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="menu">
        <div className="menu-left">
          <img src={require('../assets/app/logo.jpg')} alt=""/>
        </div>
        <ul className="menu-right">  
          {
            this.props.menuList.map((v, index) => { 
              return(
                <li key={index}>
                  <a href ="">{v.name}</a> 
                </li>
              )
            })
          }
        </ul>   
      </div>
      
    )
  }
}