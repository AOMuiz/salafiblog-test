import React, { useEffect, useRef, useState } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { value: storeData } = storeDataEl.current

    if (!comment || !email || !name) {
      setError(true)
      return
    }

    const commentObj = { name, email, comment, slug }
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg lg:grid-cols-2">
      <h1 className="mb-8 border-b pb-4 text-xl font-semibold">Comment Form</h1>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-gray-200"
          id=""
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <input
          ref={nameEl}
          placeholder="Name"
          name="name"
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-gray-200"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <input
          ref={emailEl}
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-gray-200"
          id=""
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            type="checkbox"
            ref={storeDataEl}
            name="storeData"
            id="storeData"
            checked="true"
          />
          <label
            htmlFor="storeData"
            className="ml-2 cursor-pointer text-gray-500"
          >
            Save my e-mail and name for next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="ease inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-white transition duration-500 hover:bg-indigo-900"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment submitted for Review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
