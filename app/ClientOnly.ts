'use client'
export default function ClientOnly() {
  if(process.env.NEXT_PUBLIC_API_MOKING === 'enabled') {
    console.log("[Layout] Mocking enabled.");
    const { worker } = require('../mock/browser')
    worker.start()
  }
  return null
}

