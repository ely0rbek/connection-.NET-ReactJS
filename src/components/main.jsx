import React, { useEffect, useState } from 'react'
import ProductItem from './product-item'
import {Link} from 'react-router-dom'
import EditProduct from './editProduct'

const Main = () => {
    const [products, setProducts] = useState([])
    const [isUpdated,setUpdate] = useState(false)
    const [newObj,setObj]= useState({})
    const getAllProducts = () => {
        fetch('https://localhost:7111/api/cProduct/GetAllProduct')
            .then(response => response.json()
            )
            .then(json => { setProducts(json) })
    }
    useEffect(() => {
        getAllProducts();
    }, []);

    const onDelete=(id)=>{
        fetch(`https://localhost:7111/api/cProduct/DeleteProductById?id=${id}`, { method: 'DELETE' })
        .then(() => console.log("chotki"));
        const newprod=products.filter(item=>item.id!=id)
        setProducts(newprod)
    }

    const onUpdate=(element)=>{
        setObj(element)
        setUpdate(true)
        // console.log(element);
    }
    if(isUpdated){
        return(
            <EditProduct 
            defTitle={newObj.productTitle} 
            defName={newObj.productManufacturerName} 
            defPrice={newObj.productUnitPrice}
            defComment={newObj.productComment}
            id={newObj.id}
            setUpdate={setUpdate}
            />
        )
    }
    else{
        return (
            <div className='quti'>
                <div className='text-center d-flex  font-size justify-content-between m-3'>
                    <p className='h3'>Assalomu alaykum xush kelibsiz</p>
                    <Link className='btn btn-success px-5 py-2' to={'/addProduct'}>Add</Link>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Manufacturer Name</th>
                                <th scope="col">Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(element => (
                                    <ProductItem key={element.id} element={element} onDelete={onDelete} onUpdate={onUpdate}/>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Main