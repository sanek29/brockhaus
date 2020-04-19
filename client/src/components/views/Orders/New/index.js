import React from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Form, Select, Input } from 'antd';
import { addOrder } from '~/actions/orders';
import { getMenuItemsList } from '~/clients/api';

const { Option, OptGroup } = Select;
const { Title } = Typography;

class NewOrder extends React.Component {
  state = {
    list: []
  };

  async componentDidMount() {
    let list;

    try {
      list = await getMenuItemsList();
    } catch(e) {
      return;
    }

    this.setState({ list: list })
  }

  onSubmit = () => this.props.addOrder(this.state.note, this.state.menuItemIds);

  handleSelectChange = (ids) => this.setState({ menuItemIds: ids });
  handleNoteChange = (e) => this.setState({ note: e.target.value });

  render() {
    const options = this.state.list
      .reduce((acc, item) => [
        ...acc,
        <Option key={item.get('id')}>{item.get('title')}</Option>
      ], []);


    return (
      <Form onSubmit={this.onSubmit} className='make-order-form'>
        <Title level={2}>Bestellseite</Title>
        <label htmlFor='menu-list' style={{ color: '#000', marginBottom: 8 }}>Select what you want:</label>
        <Select
          id='menu-list'
          name='menu-list'
          mode="multiple"
          style={{ maxWidth: '350px' }}
          placeholder="Select menu item"
          onChange={this.handleSelectChange}
        >
          <OptGroup label='Menu'>
            {options}
          </OptGroup>
        </Select>
        <Form.Item name='note' label='Leave your note if needed' onChange={this.handleNoteChange} >
          <Input.TextArea rows={4} placeholder="Note" />
        </Form.Item>
        <Button type='primary' htmlType='submit'>
          Make order
        </Button>
      </Form>
    )
  }
}

export default connect(null, { addOrder })(NewOrder);