import { type JSX } from 'react'
import { useParams } from 'react-router';

export default function MovieDetails(): JSX.Element {
    const { title, year, type, id } = useParams();

    return (
        <div>MovieDetails</div>
    )
}
