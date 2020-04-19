import React from 'react';
import { connect } from 'react-redux';
import { fetchOrdersList } from '~/actions/orders';

import { List } from 'antd';
import ListItem from './ListItem';

class OrdersList extends React.Component {
  render() {
    console.log(this.props.st);
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.list}
        renderItem={item => (<ListItem item={item}/>)}
      />
    );
  }
}

const mapStateToProps = state => ({
  st: state,
  list: state.orders.get('list')
});

export default connect(mapStateToProps, { fetchOrdersList })(OrdersList);