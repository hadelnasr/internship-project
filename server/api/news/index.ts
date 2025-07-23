import { newsItems } from '~/server/data/news'

export default defineEventHandler(() => {
  return newsItems.map(({ id, title, homepageDescription, image_url }) => ({
    id,
    title,
    homepageDescription,
    image_url,
  }))
})
