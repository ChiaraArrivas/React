import React from "react";
import { useEffect, useState } from "react"

export function GithubUser({ user }) {
    const [data, setData] = useState()

    async function fetchGithubUser(user) {
        try {
            const response = await fetch(`https://api.github.com/users/${user}`)
            const json = await response.json()

            setData(json)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchGithubUser(user)
    }, [user])

    return <div>{data && <h1>The name is {data.name} and the Id is {data.id}</h1>}
    </div>

}