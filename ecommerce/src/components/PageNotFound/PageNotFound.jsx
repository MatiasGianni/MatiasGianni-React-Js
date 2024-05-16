import React from 'react'
import errorImg from "../../assets/error.jpg"

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <img 
        src={errorImg} 
        alt="Error 404" 
        className="object-cover object-center w-full md:w-auto md:h-auto max-w-full"
      />
    </div>
  )
}

export default PageNotFound