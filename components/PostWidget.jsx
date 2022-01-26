import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedposts, setRelatedposts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedposts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedposts(result))
    }
  }, [slug])

  console.log(relatedposts)

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedposts.map((post) => (
        <div key={post.id} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <img
              alt={post.attributes.Cover.data.attributes.url}
              src={`http://localhost:1337${post.attributes.Cover.data.attributes.url}`}
              height="60px"
              width="60px"
              className="rounded-full align-middle"
            />
          </div>
          <div className="ml-4 flex-grow ">
            <p className="font-xs text-gray-500">
              {moment(post.attributes.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.attributes.Slug}`}>
              {post.attributes.Title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
