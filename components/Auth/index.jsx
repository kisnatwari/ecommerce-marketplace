import { useRouter } from 'next/router';
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';



const Auth = () => {
    const { route } = useRouter();
    return (
        <div className='relative flex justify-center items-center w-full' style={{ backgroundImage: "url('auth/auth-bg.jpg')", backgroundPosition: "center", backgroundSize: 'cover' }}>
            <div className="bg-black bg-opacity-90 h-full w-full flex items-center justify-center">
                <div>
                    {
                        route == "/register" ? <RegisterForm /> : (route == "/login" ? <LoginForm /> : undefined)
                    }
                </div>
            </div>
        </div>
    );
};

export default Auth;