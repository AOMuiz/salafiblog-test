import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post)

  return (
    <div className="mb-8 rounded-lg bg-white p-3 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={`http://localhost:1337${post.attributes.Cover.data.attributes.url}`}
          alt=""
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-2xl font-semibold transition duration-700 hover:text-pink-600">
        <Link href={`/post/${post.attributes.Slug}`}>
          {post.attributes.Title}
        </Link>
      </h1>
      <p className="text-justify">{post.attributes.Content}</p>
    </div>
  )
}

export default PostCard
