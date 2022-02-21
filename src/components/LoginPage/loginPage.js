import react, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    function handleSignIn() {
        console.log('handle');
        let bodyFormData = new FormData();
        bodyFormData.append('email', email);
        bodyFormData.append('password', password);

        axios({
            method: "post",
            url: "http://assignment.cyberboxer.com/auth/login",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {
            console.log('response', response)
            if (response.data.status === 1) {
                localStorage.setItem('userToken', response.data.data.token)
                navigate(`/dashboard`);
            }
        });
    }
    return (

        <div className="bg-gradient-to-b from-red-500 via-red-500 to-yellow-500 text-gray-500 text-md text-center h-screen flex flex-col justify-center pb-4 ">

            <div className="sm:mx-auto sm:w-4xl sm:max-w-md">
                <div className='mb-10'>
                    <div className=' font-PlayballFont italic font font-bold tracking-widest text-white text-5xl'>Kamero</div>
                    <div className=' italic text-white text-xl'>Live Photo Sharing!</div>
                </div>
                <div className="bg-white shadow sm:rounded-lg pb-1">
                    <div className='bg-red-100 py-4 font-medium text-gray-600 text-xl rounded-md border border-b-2 '>Login to Kamero</div>
                    <div className='px-8 my-4 italic'>Login with your facebook account or email</div>
                    <div className='my-7 text-white'>
                        <button className='bg-blue-800 rounded px-4 py-1'>
                            Log In with Facebook
                        </button>
                    </div>
                    <div className='my-5'>
                        or
                    </div>
                    <form>
                        <div className=''>
                            <div className=''>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder='Email'
                                    className="px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='mt-3'>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    placeholder='password'
                                    className="px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='my-5 text-white'>
                                <button
                                    type="button"
                                    className='bg-red-500 rounded px-8 py-1'
                                    onClick={() => handleSignIn()}
                                >
                                    Login
                                </button>
                            </div>
                            <div className='py-5 text-red-500'>
                                Forgot password?
                            </div>
                            <div></div>
                            <div className=' px-20'>
                                <div className='py-5 text-base border-black border-t-2'>
                                    New to Kamero? <span className='text-red-500'>Sign Up</span> now
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
