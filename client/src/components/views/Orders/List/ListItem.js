import React from 'react';
import { List, Avatar, Button } from 'antd';

export default function(props) {
  const title =  (
    <strong style={{ color: '#1890ff', fontSize: '1.5em' }}>
      Order: #{props.item.get('id')}
    </strong>
  );

  const price = props.item.get('MenuItems')
    .reduce((acc, el) =>  acc + el.get('price'), 0);

  const menuItemTitles = props.item.get('MenuItems')
    .reduce((acc, el) => [...acc, el.get('title')], [])
    .join(', ');

  return(
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar size={50} shape="square" src="https://image.flaticon.com/icons/svg/2081/2081955.svg" />}
        title={title}
        description={menuItemTitles}
      />
      <strong>Price: {price} &euro;</strong>
      <Button className='pay-button' type='primary'>Pay</Button>
    </List.Item>
  );
}