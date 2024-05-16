import React from 'react'
import { Link } from 'react-router-dom'

const FooTer = () => {
  return (
    

<footer className="bg-gray-800 rounded-lg shadow m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="https://www.instagram.com/nike" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">
            Instagram
            </Link>
        </li>
        <li>
                <Link to="https://www.facebook.com/nike" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">
                Facebook
                </Link>
        </li>
        <li>
            <Link to="https://www.youtube.com/user/nike" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">YouTube
            </Link> 
        </li>
        <li>
            <Link to="https://twitter.com/Nike" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter

            </Link> 
        </li>
    </ul>
    </div>
</footer>

  )
}

export default FooTer