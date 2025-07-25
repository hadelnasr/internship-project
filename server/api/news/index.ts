import { newsItems } from '../../data/news';
import { defineEventHandler } from 'h3';


export default defineEventHandler(() => {
  return newsItems.map(({ id, title, homepageDescription, image_url }) => ({
    id,
    title,
    homepageDescription,
    image_url,
  }))
})
