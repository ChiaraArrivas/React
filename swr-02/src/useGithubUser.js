import useSWR from 'swr'
import { useParams } from 'react-router-dom'

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser() {
    const { username } = useParams();
    const usernameUrl = username ? `https://api.github.com/users/${username}` : null;
    const { data, error } = useSWR(usernameUrl, fetcher);

    return {
        username: data,
        error,
        isLoading: !data && !error
    }

}