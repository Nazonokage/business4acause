import { useEffect } from 'react'

function upsertMeta(selector, attributes, content) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value))
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function PageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    document.title = title

    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description' }, description)
      upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description)
    }

    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title)

    const canonical = `https://www.ugyunkita.com${path}`
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonical)
  }, [title, description, path])

  return null
}
