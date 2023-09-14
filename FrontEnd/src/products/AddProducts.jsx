import React, {useState } from 'react'

const AddProduct = () => {
    const [prName, setPrName] = useState('')
    const [prImage, setPrImage] = useState('')
    const [prDesc, setPrDesc] = useState('')
    const [prPrice, setPrPrice] = useState('')
    const [prQuantity, setPrQuantity] = useState('')

    const handleNameChange = (e) => {
        setPrName(e.target.value)
    }

    const handleImageChange = (e) => {
        setPrImage(e.target.value)
    }

    const handleDescChange = (e) => {
        setPrDesc(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrPrice(e.target.value)
    }

    const handleQuantityChange = (e) => {
        setPrQuantity(e.target.value)
    }

    const handleOnClick = (e) => {
        fetch("http://localhost:5000/api/product/add", {
            method : "POST",
            body : JSON.stringify({
                product_name : prName,
                product_image : prImage, 
                product_desc : prDesc, 
                product_price : prPrice, 
                quantity : prQuantity
            }),
            headers : {"content-type" : "application/json ; charset = UTF-8"}
        })
        .then((response) => {response.json()})
        .catch((err) => {console.log(err.message)})
    }

    return (
        <div>
            <form>
                <label>Product Name</label>
                <input type='text' value={prName} placeholder='Enter Product name' onChange={(e) => { handleNameChange(e) }} required />

                <label>Product ImageURL</label>
                <input type='text' value={prImage} placeholder='Enter Product ImageURL' onChange={(e) => { handleImageChange(e) }} required />

                <label>Product Description</label>
                <input type='text' value={prDesc} placeholder='Enter Product Description' onChange={(e) => { handleDescChange(e) }} required />

                <label>Product Price</label>
                <input type='text' value={prPrice} placeholder='Enter Product Price' onChange={(e) => { handlePriceChange(e) }} required />

                <label>Product Quantity</label>
                <input type='text' value={prQuantity} placeholder='Enter Product Quantity' onChange={(e) => { handleQuantityChange(e) }} required />

                <button type='submit' onClick={(e) => {handleOnClick(e)}}>Submit</button>
            </form>
        </div>
    )
}

export default AddProduct