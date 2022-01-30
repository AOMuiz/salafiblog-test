import React, { useEffect, useState } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(1).then((result) => {
      setComments(result)
    })
    console.log(comments)
  }, [])

  return (
    <>
      {comments.attributes.comments.data.length > 0 && (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
            {comments.attributes.comments.data.length} Comments
          </h3>
          {comments.attributes.comments.data.map((comment, index) => (
            <div key={index} className="mb-4 border-b border-gray-100 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.attributes.Name}</span>{' '}
                on {moment(comment.attributes.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="w-full whitespace-pre-line text-gray-600">
                {parse(comment.attributes.Comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default Comments
