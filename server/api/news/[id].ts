import { newsItems } from '../../data/news';
import { defineEventHandler } from 'h3';
import { createError } from 'h3';


export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string }

  const item = newsItems.find(news => news.id === id)

  if (!item) {
    throw createError({ statusCode: 404, statusMessage: 'News not found' })
  }

  return {
    id: item.id,
    title: item.title,
    description: item.description,
    content: item.content,
    created_by_name: item.created_by_name,
    created_at: item.created_at,
    updated_at: item.updated_at,
    image_url: item.image_url, 
  }
})
