import Link from 'next/link'
import { FC } from 'react'

import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'
import { IMovieList } from './movie-list.interface'

const MoviesList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link className={styles.button} href={link}>
				{link === '/trending' ? 'All trending movies' : 'All popular movies'}
			</Link>
		</div>
	)
}
export default MoviesList
