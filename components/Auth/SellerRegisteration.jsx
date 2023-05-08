import Link from 'next/link'
import React, { useState } from 'react'
import Input from "./Input";
import Button from '../global/Button';

const Step1 = () => {
    const [profileBlob, setProfileBlob] = useState(null);
    const handleProfileBlob = (e) => {
        const file = e.target.files[0];
        if (!file) return setImageUrl(null);
        const blobURL = URL.createObjectURL(file);
        setProfileBlob(blobURL);
    }
    return (
        <div className="grid grid-flow-col gap-5">
            <div className="grid-cols">
                <div className="flex gap-3 flex-col">
                    <Input label={"Shop Name"} id={"shop-name"} placeholder={"XYZ electronics house"} />
                    <Input label={"Owner Name"} id={"owner-name"} placeholder={"John Doe"} />
                    <Input type="file" label={"Any Legal Document <br/> <small>(Registeration document or any)</small>  "} id={"legal-docment"} />
                </div>
            </div>
            <div className="grid-cols">
                <div className="flex gap-3 flex-col">
                    <div className='relative w-36 h-36 border-dashed border-slate-500 border-4 bg-slate-800 bg-opacity-50 overflow-hidden cursor-pointer'>
                        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-center'>
                            Upload Profile Photo
                        </span>
                        {
                            profileBlob &&
                            <img src={profileBlob} className='relative w-full h-full object-cover' />
                        }
                        <input type="file" name="profile-pic" onChange={handleProfileBlob} className='w-full h-full opacity-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

const SellerRegisteration = () => {
    const [profileBlob, setProfileBlob] = useState(null);
    const handleProfileBlob = (e) => {
        const file = e.target.files[0];
        if (!file) return setImageUrl(null);
        const blobURL = URL.createObjectURL(file);
        setProfileBlob(blobURL);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl font-bold">Upabhog</h1>
                <p className="text-white text-lg">Please fill out this form to register.</p>
            </div>
            <div className='bg-slate-700 bg-opacity-50 p-5'>

                {/* First Part */}
                <p className='border-b border-dashed text-slate-300 border-slate-300 mb-2'>Shop Details</p>
                <div className="grid grid-flow-col gap-4 mb-3">
                    <div className="grid-cols">
                        <div className="flex gap-3 flex-col">
                            <Input label={"Shop Name"} id={"shop-name"} placeholder={"XYZ electronics house"} />
                            <Input label={"Owner Name"} id={"owner-name"} placeholder={"John Doe"} />
                        </div>
                    </div>
                    <div className="grid-cols">
                        <div className='relative w-32 h-32 border-dashed border-slate-500 border-4 bg-slate-800 bg-opacity-50 overflow-hidden cursor-pointer'>
                            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-center'>
                                Upload Profile Photo
                            </span>
                            {
                                profileBlob &&
                                <img src={profileBlob} className='relative z-10 w-full h-full object-cover' />
                            }
                            <input type="file" name="profile-pic" onChange={handleProfileBlob} className='z-20 relative w-full h-full opacity-0' />
                        </div>
                    </div>
                </div>

                {/* Second part */}
                <p className='border-b border-dashed text-slate-300 border-slate-300 mb-2'>Authentication</p>
                <div className="grid grid-flow-col gap-4 mb-3">
                    <div className="grid-cols">
                        <div className="flex gap-3 flex-col">
                            <Input label={"Email Address"} type={"email"} id={"email"} placeholder={"example@domain.com"} />
                            <Input label={"Phone Number"} id={"phone"} placeholder={"9801234567"} />
                        </div>
                    </div>
                    <div className="grid-cols">
                        <div className="flex gap-3 flex-col">
                            <Input label={"Password"} id={"password"} placeholder={"***************"} type={"password"} />
                            <Input label={"Confirm Password"} id={"confirm-password"} placeholder={"***************"} type={"password"} />
                        </div>
                    </div>
                </div>

                {/* Third Part */}
                <p className='border-b border-dashed text-slate-300 border-slate-300 mb-2'>Address</p>
                <div className="grid grid-flow-col gap-4 mb-3">

                    <div className="flex gap-1 flex-wrap">
                        <select name="district" id="district" className='dark:bg-slate-700 border-0 rounded-md'>
                            <option value="" disabled selected>District</option>
                            <option value="1">Nawalparasi</option>
                            <option value="2">Chitwan</option>
                        </select>
                        <select name="district" id="district" className='dark:bg-slate-700 border-0 rounded-md'>
                            <option value="" disabled selected>Municipality</option>
                            <option value="1">Kawasoti</option>
                            <option value="2">Gaindakot</option>
                        </select>
                        <input type="text" placeholder='Ward/Tole/Chok name' className='dark:bg-slate-700 border-0 rounded-md' />
                    </div>
                </div>
                <div className="text-end">
                    <Button variant='indigo-dark' className='border-0'>Register Shop</Button>
                </div>
            </div>
            <p className="text-slate-300 text-sm text-end flex justify-between flex-wrap flex-row-reverse">
                <Link href={"/login"}>Already have an account? Login</Link>
            </p>
        </form>
    )
}

export default SellerRegisteration