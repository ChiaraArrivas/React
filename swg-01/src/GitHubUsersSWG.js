
import { useGitHubusers } from "./useGithubUsers"

export function GithubUsers() {
    const {users, error, isLoading} = useGitHubusers()

    return <div>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>An error has occurred</h3>}
        {users && (<ul>
            {users.map((user) => 
                <li key={user.login}>{user.login}</li>)}
            </ul>)}
    </div>
}