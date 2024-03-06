import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo/Logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/followthepattern/wiki',
  },
  chat: {
    link: 'https://discord.com/invite/kDuKyG4EET',
  },
  footer: {
    text: 'Follow The Pattern WIKI',
  },
  docsRepositoryBase: 'https://github.com/followthepattern/wiki/tree/main/',
}

export default config
