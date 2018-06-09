/**
 * @author yangying
 * @function 技术栈页面构建(仿造掘金首页)
 */
import React from 'react';
import './index.less'
class Skill extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			arr:[1,2,3,4,5]
		}
   }
  render(){
    return(
      <div className="skill">
			  <div className="skill-left">
				  <header>最新文章</header>
					<ul>
						{this.state.arr.map((v,index)=>{
							return(
								<li>
									{v}
								</li>
							)
						})}
					</ul>
				</div>
				<div className="skill-right"></div>
      </div>
    )
  }
}
export default Skill