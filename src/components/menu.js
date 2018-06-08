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
        LOGO->
        </div>
        <div className="menu-right">  
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
        </div>   
        <div className="message">
          <p>如果要在自己</p>
          <p>年轻的时候做更多的梦</p>
          <p>就一定要找到那些</p>
          <p>能和你一起做梦的朋友</p>
        </div>
        <div className="user">
          <img src={require('../assets/app/user.jpg')} alt=""/>
          <a>tanzhiling</a>
        </div>
      </div>
    )
  }
}
export default connect(({app}) => (app), (dispatch, own) => {
  return {dispatch, own}
 })(Menu);