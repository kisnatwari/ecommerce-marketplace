import React from 'react'
import Input from './Input'
import Button from '../global/Button'
import Link from 'next/link'

const LoginForm = () => {
    return (
        <form action="#">
            <div className='text-center'>
                <h1 className="text-white text-4xl font-bold">MyBrand</h1>
                <p className="text-white text-lg">Login to start shopping.</p>
            </div>
            <div className="bg-slate-700 bg-opacity-50 p-5 my-3 flex flex-col gap-3">
                <Input label="Email address" id="email" type="email" required={true} placeholder={"example@domain.com"} />
                <Input label="Password" id="password" type="password" required={true} placeholder={"**********"} />
                <Button variant='indigo-dark' className='border-0' type="submit">Login</Button>
            </div>
            <p className="text-slate-300 text-end">
                <Link href={"/register"}>Don&apos;t have an account? Register</Link>
            </p>
        </form>
    )
}

export default LoginForm