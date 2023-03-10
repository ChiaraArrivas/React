import { useState, useEffect } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList() {
    const [usernames, setUsernames] = useState([])
    const [input, setInput] = useState()
    const [gitHubUser, setGitHubUser] = useState(null)

    function handleInputChange(event) {
        setInput(event.target.value)
    }

    const onClickAdd = () => {
        setUsernames((users) =>
            [
                ...users,
                input
            ]
        )
    }

    useEffect(() => {
        setGitHubUser(usernames.map((el, index) => <GithubUser user={el} key={el+index}/>))
    },[usernames])

    return (
        <div>
            <input onChange={handleInputChange} type="text"></input>
            <button onClick={onClickAdd}>Add</button>
            {gitHubUser}
        </div>
    )
}