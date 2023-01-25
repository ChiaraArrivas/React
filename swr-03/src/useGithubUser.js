import useSWR from 'swr'
import { useParams } from 'react-router-dom'

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser() {
    const { username } = useParams();
    const usernameUrl = username ? `https://api.github.com/users/${username}` : null;
    const { data, error, mutate } = useSWR(usernameUrl, fetcher);

    function handleRefreshUser() {
        mutate() //potrei passare un argomento alla funzione "mutate" per specificare un nuovo URL.
    }

    return {
        username: data,
        error,
        isLoading: !data && !error,
        handleRefreshUser: handleRefreshUser,
    }

}