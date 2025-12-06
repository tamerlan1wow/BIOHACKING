import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  let player = null
  const body = await readBody(event)

  if (body.name) {
    player = await prisma.baseball_players.create({
      data: {
        name: body.name,
        team: body.team ?? null,
        position: body.position ?? null,
        games_played: body.games ?? 0,
        home_runs: body.home ?? 0,
        batting_average: body.bat?? null
      }
    })
  }
  return {
    user: player
  }
})
