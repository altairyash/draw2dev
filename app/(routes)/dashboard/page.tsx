import React from 'react'
import ImageUpload from './_components/ImageUpload'

function Dashboard() {
    return (
        <div className='lg:px-20 xl:px-40 block'>
            <h2 className='font-bold text-4xl text-white'>Convert Wireframe to Code</h2>
            <ImageUpload/>
        </div>
    )
}

export default Dashboard