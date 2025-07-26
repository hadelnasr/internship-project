import { newsItems } from '../../data/news'
import { defineEventHandler, getQuery } from 'h3'

// Define the structure of each news item
type NewsItem = {
  id: string
  title: string
  homepageDescription: string
  description: string
  content: string
  created_by_name: string
  created_at: string
  updated_at: string
  image_url: string
}

// Filter and return results based on query
export default defineEventHandler((event) => {
  const query = getQuery(event)
  const search = (query.search as string || '').toLowerCase()
  const author = (query.author as string || '').toLowerCase()

  const filtered = newsItems.filter((item: NewsItem) => {
  const matchesSearch =
    search !== '' &&
    (
      item.title.toLowerCase().includes(search) ||
      item.content.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
    )

  const matchesAuthor =
    author === '' || item.created_by_name.toLowerCase() === author

  // Only return items that match BOTH search and author (if provided)
  if (search && author) return matchesSearch && matchesAuthor
  if (search) return matchesSearch
  if (author) return matchesAuthor

  return true // if no search and no author, return all
})

  return filtered
})
