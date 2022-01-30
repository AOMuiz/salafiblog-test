// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { gql, GraphQLClient } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  })
  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      )
    }
  `
  const result = await graphQLClient.request(query, req.body)
  res.status(200).send(result)
}
