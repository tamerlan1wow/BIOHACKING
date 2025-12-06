import {NuxtAuthHandler} from '#auth'
import GithubProvider from 'next-auth/providers/github'

const runtimeConfig = useRuntimeConfig()
console.log('GitHub Client ID:', runtimeConfig.public.GITHUB_CLIENT_ID)
console.log('GitHub Redirect URL:', runtimeConfig.public.GITHUB_REDIRECT_URL)

export default NuxtAuthHandler({

    pages: {
        signIn: '/login',
    },
    providers: [
        GithubProvider.default({
            clientId: runtimeConfig.public.GITHUB_ID,
            clientSecret: runtimeConfig.public.GITHUB_SECRET
        }),
    ],
})