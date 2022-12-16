import Image from 'next/image'
import { groq } from 'next-sanity'

import { client } from '../../../../lib/sanity.client'
import urlFor from '../../../../lib/urlFor'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60 // revalidate this page every 30 seconds

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
    //all the post data and also slug field (on studio) matches
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,      // all the fields
        author->, //author reference with {}
        categories[]-> // categories reference with []
    }
    `

  // "Post" type ni "typings.d.ts"-d bga uchras automataar duudagdana.
  const post: Post = await client.fetch(query, { slug })

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#f7ab0a] text-white">
        <div className="min-h-56 nmd:flex-row relative flex flex-col justify-between">
          <div className="blur-xs absolute top-0 h-full w-full p-10 opacity-10">
            <Image
              className="mx-auto object-cover object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="w-full bg-[#f7ab0a] p-5">
            <div className="flex flex-col justify-between gap-y-5 md:flex-row">
              <div>
                <h1 className="text-4xl font-extrabold"> {post.title}</h1>

                <p>
                  {/* December 16, 2022 */}
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              {/* Avatar */}
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div></div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="pt-10 italic">{post.description}</h2>
              <div className="mt-auto flex items-center justify-end space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-white"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  )
}

export default Post
