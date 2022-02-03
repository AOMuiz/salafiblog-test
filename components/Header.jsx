import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className="container mx-auto mb-8 px-5 lg:px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-3xl font-bold text-transparent text-white lg:text-4xl">
              SalafiBlog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link
              key={category.attributes.Slug}
              href={`/category/${category.attributes.Slug}`}
            >
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.attributes.Name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
