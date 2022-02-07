import React from 'react'
import { useRouter } from 'next/router'

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../components'
import { getPosts, getPostDetails } from '../../services'
import markdownToHtml from '../../lib/markdown'
// import { AdjacentPosts } from '../../sections'

const PostDetails = ({ post }) => {
  const router = useRouter()

  console.log('postDetail', post)
  // console.log('Slug', post[0].attributes.Content)

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <>
      <div className="container mx-auto mb-8 px-5 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            {/* <Author author={post.author} /> */}
            {/* <AdjacentPosts slug={post.Slug} createdAt={post.createdAt} /> */}
            <CommentsForm slug={post.Slug} />
            {/* <Comments slug={post[0].attributes.Slug} /> */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget
                slug={post.Slug}
                categories={post.categories.data.map(
                  (category) => category.attributes.Slug
                )}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PostDetails

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.Slug)
  console.log('data', data)
  const content = await markdownToHtml(data[0]?.attributes.Content || '')
  console.log('content', content)

  return {
    props: {
      post: { ...data[0].attributes, Content: content },
    },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts()
  // console.log('staticprops', posts)
  return {
    paths: posts.map(({ attributes: { Slug } }) => ({ params: { Slug } })),
    fallback: false,
  }
}
