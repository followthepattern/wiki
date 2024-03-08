import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo/Logo'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { DiscordLink, WikiLink } from './lib/constants'
 

function Head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { title, frontMatter } = useConfig()
    const url =
      WikiLink +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title || 'Follow The Pattern'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Modern web application development'}
        />
      </>
    )
  }

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: 'https://github.com/followthepattern/wiki',
  },
  chat: {
    link: DiscordLink,
  },
  footer: {
    text: '© 2024 Follow The Pattern. All rights reserved.',
  },
  docsRepositoryBase: 'https://github.com/followthepattern/wiki/tree/main/',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Follow The Pattern'
    }
  },
  head: Head,
}

export default config;