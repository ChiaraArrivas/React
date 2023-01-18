import { useGithubUser } from "./useGithubUser"

export function GithubUser() {
    const {username, error, isLoading, handleRefreshUser} = useGithubUser()

    return (
    <div>
        <button onClick={handleRefreshUser}>Refresh</button>
        {isLoading && <h1>Loading..</h1>}
        {error && <h1>{error}</h1>}
        {username?.name ? <h1>The name is {username.name} and the Id is {username.id}</h1> : <h1>No profile found</h1>}
    </div>
    )
}
