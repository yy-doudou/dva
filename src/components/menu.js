/**
 * @author tanzhiling 
 * @function 头部菜单栏
 * @reducer app
 */
import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import'./menu.less';
class Menu extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="menu">
        <div className="menu-content">
        <div className="menu-content-left">
        LOGO->
        </div>
        <div className="menu-content-right">  
          {
            this.props.menuList.map((v, index) => { 
              return(
                <li key={index}>
                  <Link to={v.path}>
                    <span>{v.title_CN}</span>
                    <span>{v.title_US}</span>
                  </Link> 
                </li>
              )
            })
          }
        </div>   
        </div>
        
      </div>
    )
  }
}
export default connect(({app}) => (app), (dispatch, own) => {
  return {dispatch, own}
 })(Menu);