import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  // console.log(post)

  return (
    <div className="relative mb-8 overflow-hidden rounded-lg bg-white p-3 pb-12 shadow-lg lg:p-8 ">
      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {moment(post.attributes.publishedAt).format('MMM DD, YYYY')}
        </span>
        <a className="transform cursor-pointer rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 hover:bg-gray-500">
          Design
        </a>
      </div>

      <div className="mt-2">
        <Link href={`/post/${post.attributes.Slug}`}>
          <a className="text-2xl font-bold text-gray-700 hover:text-gray-600 hover:underline dark:text-white dark:hover:text-gray-200">
            {post.attributes.Title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {post.attributes.Content}
        </p>
      </div>
      {/* <dl class="mt-6 flex">
        <div class="flex flex-col-reverse">
          <dt class="text-sm font-medium text-gray-400">Published</dt>
          <dd class="text-xs text-gray-300">31st June, 2021</dd>
        </div>

        <div class="ml-3 flex flex-col-reverse sm:ml-6">
          <dt class="text-sm font-medium text-gray-400">Reading time</dt>
          <dd class="text-xs text-gray-300">3 minute</dd>
        </div>
      </dl> */}
      <div className="mt-4 flex items-center justify-between">
        <Link href={`/post/${post.attributes.Slug}`}>
          <p className="cursor-pointer text-blue-600 hover:underline dark:text-blue-400">
            Read more
          </p>
        </Link>

        <div className="flex items-center">
          <img
            className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
          />
          <Link href={`/post/${post.attributes.Slug}`}>
            <a className="cursor-pointer font-bold text-gray-700 dark:text-gray-200">
              AOMuiz
              {/* {post.author.name} */}
            </a>
          </Link>
        </div>
      </div>
    </div>
    // <div className="mb-8 rounded-lg bg-white p-3 pb-12 shadow-lg lg:p-8">
    //   <div classNameName="relative mb-6 overflow-hidden pb-80 shadow-md">
    //     <img
    //       src={`http://localhost:1337${post.attributes.Cover.data.attributes.url}`}
    //       alt=""
    //       classNameName="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
    //     />
    //   </div>

    // </div>
  )
}

export default PostCard
