/**
 * @author tanzhiling
 * @function 首页UI
 */
import React from 'react';
import './home.less';
import { Button, Icon } from 'antd';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <div className="banner">
          <img src={require('../../assets/app/banner.jpg')} alt="" />
        </div>
        <div className="content">
          <h2>
            <p>文章<span>推荐</span></p>
          </h2>
          <div className="content-left">
            <ul>
              <li>
                <h4>程序员请放下你的技术情节，与你的同伴一起进步</h4>
                <img src={require('../../assets/app/001.png')} alt=""/>
                <p>
                  如果说掌握一门赖以生计的技术是技术人员要学会的第一课的话，
                  那么我觉得技术人员要真正学会的第二课，不是技术，而是业务、交流与协作，学会关心其他工作伙伴的工作情况和进展...
                </p>
                <Button type="primary">
                  阅读全文<Icon type="right" />
                </Button>
              </li>
            </ul>
          </div>
          <div className="content-right">
            <div className="weather">
            </div>
          </div>
        </div>
      </div>
    );
  }
}


