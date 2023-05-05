import { useRouter } from 'next/router';
import { ErrorPage } from 'next/error';
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import SellerRegisteration from './SellerRegisteration';

const Auth = () => {
    const { route } = useRouter();
    const availableAuthRoutes = {
        '/register': <RegisterForm />,
        '/login': <LoginForm />,
        '/seller/register': <SellerRegisteration />
    }
    return (
        <div className='relative flex justify-center items-center w-full' style={{ backgroundImage: "url('/auth/auth-bg.jpg')", backgroundPosition: "center", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <div className="bg-black bg-opacity-90 h-full w-full flex items-center justify-center">
                <div className='m-11'>
                    {
                        availableAuthRoutes[route] || <ErrorPage statusCode={404} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Auth;