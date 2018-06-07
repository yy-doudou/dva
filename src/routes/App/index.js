import React, {PropTypes} from 'react';
import { connect } from 'dva';
import Menu from '../../components/menu';

class App extends React.Component {
  constructor(props) {
    super(props);
   }
  render() {
    return (
      <div >
          <Menu menuList={this.props.menuList}/>
      </div>
    );
  }
}

App.propTypes = {

};

export default connect(({app}) => (app), (dispatch, own) => {
 return {dispatch, own}
})(App);

