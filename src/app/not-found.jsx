import Link from 'next/link'
import React from 'react'

export default function notfoundpage() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-10'>404 - Page Not Found</h1>
      <p className='text-center mt-4'>Sorry, the page you are looking for does not exist.</p>
      <div className='flex items-center justify-center mt-6'>
        <Link href={'/'} className='btn btn-primary mt-4'>Go Home</Link>
      </div>
    </div>
  )
}

