import React from 'react'

function Footer() {
  return (
    <div className='bg-black '>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white py-6 pb-10 '>
            <div className='flex flex-col items-center gap-1 py-3'>
                <h3 className='text-lg font-medium py-2'>Company</h3>
                <p className='text-sm cursor-pointer'>About</p>
                <p className='text-sm cursor-pointer'>Blog</p>
                <p className='text-sm cursor-pointer'>Jobs</p>
                <p className='text-sm cursor-pointer'>Press</p>
                <p className='text-sm cursor-pointer'>Parners</p>
            </div>

            <div className='flex flex-col items-center gap-1 py-3'>
                <h3 className='text-lg font-medium py-2'>Solutions</h3>
                <p className='text-sm cursor-pointer'>Marketing</p>
                <p className='text-sm cursor-pointer'>Analytics</p>
                <p className='text-sm cursor-pointer'>Commerce</p>
                <p className='text-sm cursor-pointer'>Insights</p>
                <p className='text-sm cursor-pointer'>Support</p>
            </div>

            <div className='flex flex-col items-center gap-1 py-3'>
                <h3 className='text-lg font-medium py-2'>Documentation</h3>
                <p className='text-sm cursor-pointer'>Guides</p>
                <p className='text-sm cursor-pointer'>API Status</p>
            </div>

            <div className='flex flex-col items-center gap-1 py-3'>
                <h3 className='text-lg font-medium py-2'>Legal</h3>
                <p className='text-sm cursor-pointer'>Claim</p>
                <p className='text-sm cursor-pointer'>Privacy</p>
                <p className='text-sm cursor-pointer'>Terms</p>
            </div>

        </div>

        <div className='text-white pb-8 text-center text-xs'>
            <p><span>&#169;</span> My Company. All rights reserved.</p>
            <p>Made with love by Me.</p>
        </div>
    </div>
  )
}

export default Footer