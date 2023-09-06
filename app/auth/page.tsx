import React, { Suspense } from 'react'

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div>hello it's me</div>
        <div>hello it's me</div>
        <div>hello it's me</div>
        <div>hello it's me</div>
        <div>hello it's me</div>
      </div>
    </Suspense>
  )
}
