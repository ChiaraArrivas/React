import { useEffect, useState } from "react"

export function useGithubUser(user) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(user) {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${user}`)
            const json = await response.json()
            setLoading(false)
            setData(json)            
        } catch (error) {
            console.log(error)
            setError(error)
            setData(null)
        }
    }

    useEffect(() => {
        if (!user) {
            return
        }
        fetchGithubUser(user)
    }, [user])

return {data: data, error: error, loading: loading}

}
