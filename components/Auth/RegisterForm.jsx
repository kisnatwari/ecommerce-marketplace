import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../global/Button'
import Input from './Input'

const RegisterForm = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (!file) return setImageUrl(null);
        const blobURL = URL.createObjectURL(file);
        setImageUrl(blobURL);
    }
    return (
        <form action="#" className='flex flex-col gap-3'>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl font-bold">Upabhog</h1>
                <p className="text-white text-lg">Please fill out this form to register.</p>
            </div>
            <div className='bg-slate-700 bg-opacity-50 p-5'>
                <div className="grid grid-flow-col gap-5 mb-5">
                    <div className="grid-cols-5 flex flex-col gap-3">
                        <div className='bg-slate-400 w-32 h-32 overflow-hidden rounded-full mx-auto relative border-dashed border-4'>
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                Photo
                            </span>
                            {
                                imageUrl &&
                                <img src={imageUrl} alt="Profile Pic" className="w-full h-full object-cover absolute w-full h-full" />
                            }
                            <input type="file" name="profile-pic" id="profile-pic" className='w-full h-full opacity-0 cursor-pointer' onChange={handleProfilePicChange} />
                        </div>
                        <Input label="Name" id="name" type="text" required={true} placeholder={"Your Name Here"} />
                    </div>
                    <div className="grid-cols-5 flex flex-col gap-3">
                        <Input label="Email address" id="email" type="email" required={true} placeholder={"example@domain.com"} />
                        <Input label="Password" id="password" type="password" required={true} placeholder={"**********"} />
                        <Input label="Confirm Password" id="confirm-password" type="password" required={true} placeholder={"**********"} />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Button variant='indigo-dark' className='border-0'>Register Now</Button>
                </div>
            </div>
            <p className="text-slate-300 text-sm text-end flex justify-between flex-wrap flex-row-reverse">
                <Link href={"/login"}>Already have an account? Login</Link>
                <Link href={"/seller/register"}>Register as a seller</Link>
            </p>
        </form>
    )
}

export default RegisterForm