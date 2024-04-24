import React, { useState } from 'react'
import Input from './input'

const EditProduct = ({defTitle,defName,defPrice,defComment,id,setUpdate}) => {
    const [title, setTitle] = useState(defTitle)
    const [manName, setmanName] = useState(defName)
    const [price, setPrice] = useState(defPrice)
    const [comment, setComment] = useState(defComment)

    const onUpdateData= e=>{
        e.preventDefault()
        const newObj = {
            productTitle: title,
            productManufacturerName: manName,
            productUnitPrice: price,
            productComment: comment
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newObj)
        };
        // console.log(newObj);
        fetch(`https://localhost:7111/api/cProduct/UpdateProductById?productId=${id}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        setUpdate(false)
    }
    return (
        <form className="form-signin w-25 m-auto">
            <img className="mb-4 text-center w-100" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal text-center">Enter updated data</h1>
            <Input state={title} setState={setTitle} label={'Product title'} id={'title'} />
            <Input state={manName} setState={setmanName} label={'Manufacturer name'} id={'manName'} />
            <Input state={price} setState={setPrice} label={'Unit price'} id={'price'} />
            <Input state={comment} setState={setComment} label={'Comment'} id={'comment'} />
            <button className="btn btn-lg btn-primary btn-block  w-100 mt-2" type="submit" onClick={onUpdateData}>Update</button>
        </form>
    )
}

export default EditProduct