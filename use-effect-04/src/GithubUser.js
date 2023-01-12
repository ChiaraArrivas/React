import React from "react";
import { useEffect, useState } from "react"

export function GithubUser({ user }) {
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

    return (
        <div>
            {loading && <p>Loading..</p>}
            {error && <p>{error}</p>}
            {data?.name ? <h1>The name is {data.name} and the Id is {data.id}</h1> : <h1>The profile is unattainable</h1>}
        </div>
    )
}