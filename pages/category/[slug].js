import React from 'react'
import { useRouter } from 'next/router'

import { Categories, Loader, CategoryCard } from '../../components'

const CategoryPost = () => {
  const router = useRouter()

  // console.log('postDetail', post)
  // console.log('Slug', post[0].attributes.Slug)

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="col-span-1 lg:col-span-6">
          <CategoryCard />
        </div>
        <div className="col-span-1 lg:col-span-6">
          <div className="relative top-8 lg:sticky">
            {/* <Categories /> */}
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPost
