import useSWR from 'swr'
import { useParams } from 'react-router-dom'

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser() {
    const { username } = useParams();
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {
        username: data,
        error,
        isLoading: !data && !error
    }

}