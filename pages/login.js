"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        
        <div className="mt-6 space-y-4">
          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs mx-auto px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-0.5 0 48 48" version="1.1">
              <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path>
                    <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path>
                    <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path>
                    <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path>
                  </g>
                </g>
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs mx-auto px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 -2 44 44" version="1.1">
              <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Color-" transform="translate(-702.000000, -265.000000)" fill="#007EBB">
                  <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn"></path>
                </g>
              </g>
            </svg>
            <span>Continue with LinkedIn</span>
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs mx-auto px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1.1">
              <circle cx="16" cy="16" r="15" fill="#1877F2"/>
              <path fill="#fff" d="M20.1 11H18c-.2 0-.5.3-.5.5v2.1H20l-.3 2.1h-2.1V21H15v-5.2h-2.1V13.5H15v-2.5c0-2.3 1.3-3.5 3.3-3.5.8 0 1.5.1 2.1.2v2.4z"/>
            </svg>
            <span>Continue with Facebook</span>
          </button>
          <button  className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs mx-auto px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19V6h2v13M15 6v13h-2V6m-6 0h12"></path></svg>
            <span>Continue with GitHub</span>
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs mx-auto px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.62 2a4.48 4.48 0 00-4.42 5.42A12.66 12.66 0 013 4.22s-4 9 5 13a13.4 13.4 0 01-7 2c9 5 20 0 20-11.5a9.6 9.6 0 00-.08-1.32A7.72 7.72 0 0023 3z"></path></svg>
            <span>Continue with Twitter</span>
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs mx-auto px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 00-3.16 19.47c.5.09.68-.22.68-.49v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.37 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.12-4.55-4.97 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03a9.3 9.3 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.41.1 2.66.64.71 1.03 1.61 1.03 2.7 0 3.86-2.34 4.72-4.57 4.97.36.31.67.93.67 1.87v2.78c0 .27.18.58.68.49A10 10 0 0012 2z"></path></svg>
            <span>Continue with Discord</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
