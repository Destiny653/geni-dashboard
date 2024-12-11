'use client';
import { Notyf } from 'notyf';
import React, { useContext, useState } from 'react';
import './statusform.css'
import { GlobalContext } from '../../../../context/GlobalContext';

export default function StatusForm() {

    const { actionPath, setActionPath, updateValue } = useContext(GlobalContext)

    const data = () => {
        if (actionPath == 'update') {
            return {
                title: updateValue?.title,
                price: updateValue?.price,
                img: updateValue?.img,
                rate: updateValue?.rate,
                description: updateValue?.description,
                model: updateValue?.model
            }
        } else {
            return {
                title: '',
                price: 0,
                img: 'https://via.placeholder.com/200',
                rate: 0,
                description: '', 
                model: '', 
            }
        }
    }

    const [formData, SetFormData] = useState(data)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false) 

    const handleSubmit = async (e) => {
        e.preventDefault()

        const notyf = new Notyf({
            duration: 4000,
            position: {
                x: 'right',
                y: 'top'
            }
        })

        console.log("Dataset: " + JSON.stringify(e.target.dataset));


        try {
            const response = await fetch('http://localhost:3000/api/category/' + actionPath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const request = await response.json()
            if (!response.ok) {
                notyf.error("Error: " + request.message)
                return
            }
            notyf.success("Success: " + request.message)
            setActionPath('create')
            setSuccess(true)
            setError(null)
        } catch (error) {
            setError(error.message)
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                SetFormData({ ...formData, img: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }
    const handleChange = (e) => {
        SetFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleUrlChange = (e) => {
        const img = e.target.value;
        SetFormData({ ...formData, img: img })
    }
    const handleDrag = (e) => {
        e.preventDefault();
    }
    const handleDrop = (e) => {
        e.preventDefault();
        const img = e.dataTransfer.getData('text/plain')
        SetFormData({ ...formData, img: img })
    }

    const SelectedImg = () => {
        if (formData.img) {
            return (
                <div className='flex justify-center items-center w-[full]'>
                    <img className='w-[100%] h-[]' src={formData.img} alt={formData.title} />
                </div>
            )
        }
    }

    return (
        <>
            <form action={'https://geni-backend.onrender.com/api/category/create'} method='POST'  className='form-action' encType="multipart/form-data">
                <section className='relative form-data1'>
                    {error && <p className='top-[3px] absolute font-[400] text-[#f13d30] text-[15px]'>{error}</p>}
                    {success && <p className='top-[3px] absolute text-[#339944]'>Form submitted successfully</p>}
                    <div className='form-set2'>
                        <label htmlFor="image" className='flex flex-col'>
                            <span>Image</span>
                            <input className='file-img' type="file" name="img" accept="image/*" onChange={handleFileChange} />
                        </label>
                        <label htmlFor="imgurl" className='flex flex-col'>
                            <span>Image URL</span>
                            <input type="text" name="img" onChange={handleUrlChange} onDrag={handleDrag} onDrop={handleDrop} placeholder='Drag and drop your url here' />
                        </label>
                    </div>
                    <label htmlFor="title" className='flex flex-col'>
                        <span>Title</span>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    </label>
                    <div className='form-set1'>
                        <label htmlFor="price" className='flex flex-col'>
                            <span>Price</span>
                            <input type="number" name="price" value={formData.price} onChange={handleChange} />
                        </label>
                        <label htmlFor="rate" className='flex flex-col'>
                            <span>Rating</span>
                            <input type="number" name="rate" value={formData.rate} onChange={handleChange} />
                        </label>
                    </div>
                    <select name="model" id="" value={formData.model} onChange={handleChange}>
                        <option value="" disabled="disabled">Select Category</option>
                        <option value="Valies">Valies</option>
                        <option value="Clothing">Cloths</option>
                        <option value="Shoe">Shoes</option>
                        <option value="Bath">Bath</option>
                        <option value="Underwear">Under wear</option>
                    </select>

                </section>
                <section className='form-data2'>
                    <div className='form-data2-child1'>
                        <div>
                            {SelectedImg()}
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px] form-data2-child2'>
                        <label htmlFor="description">
                            <span>Description</span>
                            <textarea name="description" rows={2} value={formData.description} onChange={handleChange} />
                        </label>
                        <label htmlFor="submit">
                            <input type="submit" value="Submit" />
                        </label>
                    </div>
                </section>
            </form>
        </>
    )
}

