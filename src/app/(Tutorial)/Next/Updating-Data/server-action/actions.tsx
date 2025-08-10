/** @format */

'use server'

import { revalidatePath } from 'next/cache'

export async function createPost() {
  console.log(
    "This log appears in server console if use 'use server' on top of file, Otherwise itappears in browser console."
  )
  //
  // revalidatePath('/posts')
}
