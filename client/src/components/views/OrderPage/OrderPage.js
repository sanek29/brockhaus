import React, { useState } from 'react';
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/FileUpload'


const { Title } = Typography;
const { TextArea } = Input;


function OrderPage(props) {

  const [TitleValue, setTitleValue] = useState("")
  const [DescriptionValue, setDescriptionValue] = useState("")
  const [PriceValue, setPriceValue] = useState(0)
  const [Images, setImages] = useState([])

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value)
  }

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value)
  }

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value)
  }

  const updateImages = (newImages) => {
    setImages(newImages)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (!TitleValue || !DescriptionValue || !PriceValue || !Images) {
      return alert('bitte füllen Sie auf')
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images
    }

    axios.post('/api/product/uploadProduct', variables)
    .then(response => {
      if (response.data.success) {
        alert('Erfolgreich bestellt')
        props.history.push('/')
      }
      else {
        alert('Fehler')
      }
    })
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}> Bestellseite</Title>
      </div>

      <Form onSubmit={onSubmit} >

      <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>Title</label>
        <Input
          onChange={onTitleChange}
          value={TitleValue}
        />
        <br />
        <br />
        <label>Description</label>
        <TextArea
          onChange={onDescriptionChange}
          value={DescriptionValue}
        />
        <br />
        <br />
        <label>Price()</label>
        <Input
          onChange={onPriceChange}
          value={PriceValue}
          type="number"
        />
        
        <br />
        <br />

        <Button onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default OrderPage