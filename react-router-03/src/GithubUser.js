import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export function GithubUser() {
    const {username} = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username) {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${username}`)
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
        if (!username) {
            return 
        }
        fetchGithubUser(username)
    }, [username])

    return (
        <div>
            {loading && <p>Loading..</p>}
            {error && <p>{error}</p>}
            {data?.name ? <h1>The name is {data.name} and the Id is {data.id}</h1> : <h1>No profile found</h1>}
        </div>
    )
}