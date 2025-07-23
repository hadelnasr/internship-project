
import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const { name } = event.context.params as { name: string }

  const filePath = join(process.cwd(), 'server/uploads/images', name)
  const data = await readFile(filePath)

  const ext = name.split('.').pop()
  setResponseHeader(event, 'Content-Type', `image/${ext === 'jpg' ? 'jpeg' : ext}`)

  return data
})
