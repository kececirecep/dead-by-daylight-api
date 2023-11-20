import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container mx-auto py-12'>
        <Link to="/"><a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2' href="#">geri dön burada bişey yok</a></Link>
    </div>
  )
}

export default NotFound