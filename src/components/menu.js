/**
 * @author tanzhiling 
 * @function 头部菜单栏
 * @reducer app
 */
import React from 'react';
import { connect } from 'dva';
import'./menu.less';
class Menu extends React.Component{
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
                  <a href ="">
                    <span>{v.title_CN}</span>
                    <span>{v.title_US}</span>
                  </a> 
                </li>
              )
            })
          }
        </ul>   
        <div className="user"></div>
      </div>
    )
  }
}
export default connect(({app}) => (app), (dispatch, own) => {
  return {dispatch, own}
 })(Menu);