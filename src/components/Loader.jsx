import React from 'react'
import { Loader } from '@progress/kendo-react-indicators'

const LoaderElement = () => {
  return (
    <div className='py-4 text-center'>
        <Loader type="infinite-spinner" />
        <p>Loading...</p>
    </div>
  )
}

export default LoaderElement;