import '../scss/reset.scss'
import {
  reconstruct,
  isOptOut,
  optOutUrl,
  isSessionExpired,
} from '../utils/reconstruct.ts'

import { h, render } from 'preact'
if (process.env.NODE_ENV === 'development') require('preact/debug')

import App from './view/App.tsx'

async function main() {
  if (isOptOut()) return
  if (await isSessionExpired()) location.href = 'index.do'
  reconstruct('메인')
  render(h(App, { optOutUrl: optOutUrl() }), document.body)
}

main().catch(e => console.error(e ? e.stack || e : e))
