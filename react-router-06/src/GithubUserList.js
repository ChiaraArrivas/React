import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

export function GithubUserList() {
    const [user, setUsernames] = useState([])
    const [item, setItems] = useState([])


    const onClickAdd = (event) => {
        event.preventDefault();
        setUsernames((users) =>
            [
                ...users,
                event.target.user.value
            ]
        )

        setItems(user.map((el, index) =>
            <Link to={el} key={el + index}>Show user {el}</Link>
        ))
    }

    return (
        <div>
            <form onSubmit={onClickAdd}>
                <input name="user" type="text"></input>
                <button>Add</button>
            </form>
            <hr />

            {item}
            <Outlet />
        </div>
    )
}