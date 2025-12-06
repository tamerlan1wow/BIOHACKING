import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const final = query.name as string | undefined

  const getus = final != undefined ? await prisma.baseball_players.findMany({
    where: {
      name: {
        contains: final,
      },
    }
  })
  : await prisma.baseball_players.findMany()

  console.log('Found customers:', getus, final)
  return {
    getus
  }
})

