import React from 'react'

const CategoryCard = () => {
  return (
    <article className="rounded-2xl bg-gradient-to-r from-red-400 to-red-600 p-1 shadow-xl">
      <a className="flex h-full flex-col justify-end rounded-xl bg-gray-900 p-6 hover:bg-opacity-90 sm:p-8">
        <div className="mt-10">
          <p className="text-xs font-medium text-gray-500">26/05/2021</p>
          <h5 className="mt-2 text-xl font-bold text-white">
            Custom Helper to Improve the Rails phone_to Helper
          </h5>
          <div className="mt-6 flex items-center justify-between">
            <p className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-lg font-medium text-transparent">
              Rails
            </p>
            <ul className="flex space-x-1">
              <li className="inline-block rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-white">
                Snippet
              </li>
              <li className="inline-block rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-white">
                Info
              </li>
              <li className="inline-block rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-white">
                Tip
              </li>
            </ul>
          </div>
        </div>
      </a>
    </article>
  )
}

export default CategoryCard
