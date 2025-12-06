import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event)=> {

    const body = await readBody(event)

    let customer = null

    if (body.id) {

        customer = await prisma.baseball_players.update({
            where: {
                id: body.id
            },
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

})