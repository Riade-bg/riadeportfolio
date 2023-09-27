import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '2tm9if5g',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-09-27', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export async function createPost(post: Post) {
  const result = client.create(post)
  return result
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({title})
  return result
}

