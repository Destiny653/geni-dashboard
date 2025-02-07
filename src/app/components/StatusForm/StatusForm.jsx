
'use client';
import React, { useState, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Upload, Star, Package, Tag, X, ShoppingBag, Percent } from 'lucide-react';
import { basicUrl } from '../Url';
import { GlobalContext } from '../../../../context/GlobalContext';

export default function StatusForm() {
        const { actionPath, setActionPath, updateValue } = useContext(GlobalContext)
        console.log('actonspat: '+actionPath)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        img: '',
        rate: 0,
        reviewCount: 0,
        badge: 'new',
        ageGroup: '',
        subCategory: '',
        stockStatus: 'In Stock',
        model: 'Underwear'
    });

    const [imageFiles, setImageFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const notyf = new Notyf({
        duration: 3000,
        position: { x: 'right', y: 'top' },
    });

    const onDrop = useCallback((acceptedFiles) => {
        const newFiles = acceptedFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));
        setImageFiles(prev => [...prev, ...newFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.webp']
        },
        maxFiles: 1
    });

    const removeImage = (index) => {
        setImageFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const formDataToSend = new FormData();

            // Append all form data
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });

            // Append image file if exists
            if (imageFiles.length > 0) {
                formDataToSend.append('img', imageFiles[0].file);
            }

            const response = await fetch(`${basicUrl}/api/category/${actionPath}`, {
                method: 'POST',
                body: formDataToSend
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            notyf.success('Product added successfully');
            setFormData({
                title: '',
                description: '',
                price: '',
                img: '',
                rate: 0,
                reviewCount: 0,
                badge: 'new',
                ageGroup: '',
                subCategory: '',
                stockStatus: 'In Stock',
                model: 'Underwear',
            });
            setImageFiles([]);
        } catch (error) {
            notyf.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const inputClasses = "w-full px-4 py-2.5 border-0 bg-gray-50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all duration-200";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-2";

    return (
        <div className="bg-gray-50 my-[30px] px-4 sm:px-6 lg:px-8 scale-[0.8]">
            <div className="box-border bg-white shadow-xl mx-auto py-[20px] rounded-2xl max-w-[1400px]">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                    <h2 className="font-bold text-2xl text-white sm:text-3xl">Add New Product</h2>
                    <p className="mt-1 text-purple-100">Create a new product in your inventory</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6" encType="multipart/form-data">
                    <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
                        {/* Left Column - Image Upload */}
                        <div className="lg:col-span-1">
                            <section className="space-y-3">
                                {/* select options (cloths valies underwear diaper toy) */}
                                <div>
                                    <label className={labelClasses}>Model</label>
                                    <select name="" id=""
                                        value={formData.model}
                                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                        className={inputClasses}
                                        required
                                    >
                                        <option value="">Select cloth type</option>
                                        <option value="Underwear">Underwear</option>
                                        <option value="Diaper">Diaper</option>
                                        <option value="Toy">Toy</option>
                                        <option value="Valies">Valies</option>
                                        <option value="Clothing">Clothing</option>
                                        {/* add more options */}

                                    </select>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Package className="w-5 h-5 text-purple-600" />
                                    <h3 className="font-semibold text-gray-800 text-lg">Product Image</h3>
                                </div>

                                <div
                                    {...getRootProps()}
                                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200
                                        ${isDragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-400'}`}
                                >
                                    <input name='img' {...getInputProps()} />
                                    <Upload className="mx-auto w-12 h-12 text-purple-500" />
                                    <p className="mt-2 text-gray-600">
                                        Drop your image here, or <span className="text-purple-600">browse</span>
                                    </p>
                                    <p className="mt-1 text-gray-500 text-sm">PNG, JPG or WEBP (max. 800x400px)</p>
                                </div>

                                <div className="gap-4 grid grid-cols-1">
                                    {imageFiles.map((img, index) => (
                                        <div key={index} className="group relative rounded-lg overflow-hidden">
                                            <img
                                                src={img.preview}
                                                alt="preview"
                                                className="w-full h-48 object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="top-2 right-2 absolute bg-red-500 opacity-0 group-hover:opacity-100 p-1.5 rounded-full text-white transition-opacity"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column - Form Fields */}
                        <div className="space-y-6 lg:col-span-2">
                            {/* Product Information */}
                            <section className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                <div>
                                    <label className={labelClasses}>Title</label>
                                    <input
                                        type="text"
                                        name='ti'
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className={inputClasses}
                                        required
                                        placeholder="Enter product title"
                                    />
                                </div>

                                <div>
                                    <label className={labelClasses}>Price</label>
                                    <div className="relative">
                                        <div className="left-0 absolute inset-y-0 flex items-center pl-4 pointer-events-none">
                                            <span className="text-gray-500">$</span>
                                        </div>
                                        <input
                                            type="number"
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            className={`${inputClasses} pl-8`}
                                            required
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClasses}>Age Group</label>
                                    <select
                                        value={formData.ageGroup}
                                        onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                                        className={inputClasses}
                                        required
                                    >
                                        <option value="">Select Age Group</option>
                                        <option value="toddler">Toddler</option>
                                        <option value="newborn">Newborn</option>
                                        <option value="infant">Infant</option>
                                        <option value="prSchool">Pre-School</option>
                                        <option value="gradeshool">Grade School</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={labelClasses}>Sub Category</label>
                                    <select
                                        value={formData.subCategory}
                                        onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                                        className={inputClasses}
                                        required
                                    >
                                        <option value="">Select Sub Category</option>
                                        <option value="100% Cotton">100% Cotton</option>
                                        <option value="Machine Washable">Machine Washable</option>
                                        <option value="Breathable">Breathable</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={labelClasses}>Badge</label>
                                    <select
                                        value={formData.badge}
                                        onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                                        className={inputClasses}
                                    >
                                        <option value="new">New</option>
                                        <option value="sale">Sale</option>
                                        <option value="best-seller">Best Seller</option>
                                        <option value="20% OFF">20% OFF</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={labelClasses}>Rate</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="5"
                                        step="0.1"
                                        value={formData.rate}
                                        onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                                        className={inputClasses}
                                        placeholder="Product rating (0-5)"
                                    />
                                </div>
                            </section>

                            <div>
                                <label className={labelClasses}>Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={3}
                                    className={inputClasses}
                                    required
                                    placeholder="Enter product description"
                                />
                            </div>

                            {/* Stock Information */}
                            <section className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <ShoppingBag className="w-5 h-5 text-purple-600" />
                                    <h3 className="font-semibold text-gray-800 text-lg">Stock Information</h3>
                                </div>

                                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                    <div>
                                        <label className={labelClasses}>Stock Status</label>
                                        <select
                                            value={formData.stockStatus}
                                            onChange={(e) => setFormData({ ...formData, stockStatus: e.target.value })}
                                            className={inputClasses}
                                            required
                                        >
                                            <option value="In Stock">In Stock</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Review Count</label>
                                        <input
                                            type="number"
                                            min="0"
                                            value={formData.reviewCount}
                                            onChange={(e) => setFormData({ ...formData, reviewCount: e.target.value })}
                                            className={inputClasses}
                                            placeholder="Number of reviews"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`
                                px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg
                                hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 
                                focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 
                                flex items-center gap-2 text-lg font-medium
                                ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                        >
                            <span>{loading ? 'Saving...' : 'Save Product'}</span>
                            {!loading && <Star className="w-5 h-5" />}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}