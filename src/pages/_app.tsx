import '@/styles/globals.css'

import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import FontProvider from '@/components/FontProvider'

import NextSeoConfig from '../../next-seo.config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <DefaultSeo {...NextSeoConfig} />
      <FontProvider>
        <Component {...pageProps} />
      </FontProvider>
    </Fragment>
  )
}
