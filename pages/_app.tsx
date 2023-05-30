import 'sample/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    
  <Component {...pageProps} />
  </div>
  )
}
