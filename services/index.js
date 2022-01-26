import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        data {
          id
          attributes {
            Title
            Cover {
              data {
                id
                attributes {
                  url
                }
              }
            }
            Content
            Slug
            categories {
              data {
                attributes {
                  Name
                  Slug
                }
              }
            }
            publishedAt
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.posts.data
}

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        data {
          id
          attributes {
            Name
            Slug
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.categories.data
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails {
      posts(sort: "createdAt:desc", filters: { id: { lt: 3 } }) {
        data {
          id
          attributes {
            Title
            Slug
            Cover {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts.data
}

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(filters: { Slug: { not: $slug } }) {
        data {
          id
          attributes {
            Title
            Slug
            Cover {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts.data
}
