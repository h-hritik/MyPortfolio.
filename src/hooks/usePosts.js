import { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { marked } from 'marked'

const caseStudyFiles = import.meta.glob('/content/case-studies/*.md', {
  query: '?raw',
  import: 'default',
})
const blogFiles = import.meta.glob('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
})

async function loadPosts(files) {
  const posts = await Promise.all(
    Object.entries(files).map(async ([path, loader]) => {
      const raw = await loader()
      const { data, content } = matter(raw)
      const html = marked(content)
      const slug = path.split('/').pop().replace('.md', '')
      return { ...data, slug, html }
    })
  )
  return posts
    .filter((p) => !p.hidden)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function useCaseStudies() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loadPosts(caseStudyFiles).then((p) => {
      setPosts(p.filter((x) => x.slug !== '_template'))
      setLoading(false)
    })
  }, [])
  return { posts, loading }
}

export function useBlogPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loadPosts(blogFiles).then((p) => {
      setPosts(p.filter((x) => x.slug !== '_template'))
      setLoading(false)
    })
  }, [])
  return { posts, loading }
}
