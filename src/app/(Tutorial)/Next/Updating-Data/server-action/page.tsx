/** @format */
'use client'

import { startTransition, useActionState } from 'react'
import { createPost } from './actions'

export default function ServerAction() {
  const [state, action, pending] = useActionState(createPost, false)
  console.log(action,state)

  return (
    <>
      <form action={createPost}>
        <button className='bg-sky-300 m-5 px-5 py-2 rounded-2xl'>Submit Form</button>
      </form>

      <button
        className='bg-sky-300 m-5 px-5 py-2 rounded-2xl'
        onClick={async () => {
          await createPost()
        }}>
        Submit Button
      </button>

      <button className='bg-sky-300 m-5 px-5 py-2 rounded-2xl' onClick={() => startTransition(action)}>
        {pending ? <div>Loading...</div> : 'Submit By useActionState'}
      </button>
    </>
  )
}
