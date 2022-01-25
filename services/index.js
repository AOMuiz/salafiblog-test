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
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.posts.data
}
