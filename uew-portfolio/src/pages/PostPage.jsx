import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import { sanityFetch } from '../lib/sanity'
import { POST_BY_SLUG_QUERY } from '../lib/queries'
import { posts as fallbackPosts } from '../data/fallbackData'
import Badge from '../components/Badge'
import { HiArrowLeft } from 'react-icons/hi'

const CATEGORY_LABEL = { blog: 'Blog', insight: 'Insight', update: 'Update', news: 'News' }

export default function PostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(undefined)

  useEffect(() => {
    let mounted = true
    async function load() {
      const fallback = fallbackPosts.find((p) => p.slug.current === slug) || null
      const result = await sanityFetch(POST_BY_SLUG_QUERY, { slug }, fallback)
      if (mounted) setPost(result)
    }
    load()
    return () => {
      mounted = false
    }
  }, [slug])

  if (post === undefined) {
    return <div className="min-h-screen bg-paper" />
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center flex-col gap-4 px-6 text-center">
        <p className="font-display text-2xl text-ink">This post couldn't be found.</p>
        <Link to="/" className="text-forest font-label">← Back to the homepage</Link>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-paper">
      <div className="bg-ink text-paper pt-32 pb-14">
        <div className="container-narrow max-w-3xl">
          <Link to="/#insights" className="inline-flex items-center gap-2 text-gold-light text-sm font-label mb-6">
            <HiArrowLeft /> Back to writing
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge tone="gold">{CATEGORY_LABEL[post.category] || 'Post'}</Badge>
            {post.publishedAt && (
              <span className="text-xs text-paper/60 font-label">
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </span>
            )}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">{post.title}</h1>
          {post.excerpt && <p className="text-paper/75 text-lg mt-4">{post.excerpt}</p>}
        </div>
      </div>

      {post.coverImage && (
        <div className="container-narrow max-w-3xl -mt-8">
          <img src={post.coverImage} alt="" className="w-full rounded-xl shadow-xl" />
        </div>
      )}

      <div className="container-narrow max-w-3xl py-14 prose-cv text-ink-text leading-relaxed text-[1.05rem]">
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          <p className="text-ink-text/60 italic">
            Full content for this post will appear here once published in the Studio.
          </p>
        )}

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 not-prose">
            {post.tags.map((t) => (
              <Badge key={t} tone="navy">#{t}</Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
