import React from 'react'
const ProductItem = ({element,onDelete,onUpdate}) => {
    
    return (
        <tr key={element.id}>
            <th>{element.id}</th>
            <th>{element.productTitle}</th>
            <th>{element.productManufacturerName}</th>
            <th>{element.productUnitPrice}</th>
            <th><button className='btn btn-warning' onClick={()=>onUpdate(element)}>Edit</button></th>
            <th><button className='btn btn-danger' onClick={()=>onDelete(element.id)}>Delete</button></th>
        </tr>
    )
}

export default ProductItem