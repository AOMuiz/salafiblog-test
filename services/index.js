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

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      posts(filters: { Slug: { eq: $slug } }) {
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
  const result = await request(graphqlAPI, query, { slug })
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
            publishedAt
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts.data
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($categories: [String], $slug: String) {
      posts(
        filters: {
          Slug: { notContains: $slug }
          and: { categories: { Slug: { in: $categories } } }
        }
      ) {
        data {
          id
          attributes {
            Title
            Slug
            publishedAt
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

  const result = await request(graphqlAPI, query, { categories, slug })

  return result.posts.data
}
