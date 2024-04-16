import React, { useState } from 'react'
import Input from './input'

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [manName, setmanName] = useState('')
  const [price, setPrice] = useState('')
  const [comment, setComment] = useState('')

  const SendPostData = e => {
    if (/^\d+$/.test(price)) {
      e.preventDefault()
      const newObj = {
        productTitle: title,
        productManufacturerName: manName,
        productUnitPrice: price,
        productComment: comment
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObj)
      };
      fetch('https://localhost:7111/api/cProduct/CreateProduct', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        setTitle('')
        setmanName('')
        setPrice('')
        setComment('')
        alert("chotki qoshdim database ga")
    }
    else{
      alert("Price should include only numbers");
    }
  }
  return (
    <div >
      <form className="form-signin w-25 m-auto">
        <img className="mb-4 text-center w-100" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal text-center">Please enter data</h1>
        <Input state={title} setState={setTitle} label={'Product title'} id={'title'} />
        <Input state={manName} setState={setmanName} label={'Manufacturer name'} id={'manName'} />
        <Input state={price} setState={setPrice} label={'Unit price'} id={'price'} />
        <Input state={comment} setState={setComment} label={'Comment'} id={'comment'} />

        <button className="btn btn-lg btn-primary btn-block  w-100 mt-2" type="submit" onClick={SendPostData}>Send</button>
      </form>
    </div>
  )
}

export default AddProduct