import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ user }) {
    const {data, error, loading} = useGithubUser(user)

    return (
        <div>
            {loading && <p>Loading..</p>}
            {error && <p>{error}</p>}
            {data && <h1>The name is {data.name} and the Id is {data.id}</h1>}
        </div>
    )
}