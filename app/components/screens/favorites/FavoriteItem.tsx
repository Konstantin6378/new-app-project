import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './FavoriteItem.module.scss'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					alt={movie.title}
					src={movie.poster}
					layout="fill"
					draggable={false}
					priority
				/>
			</Link>
		</div>
	)
}
export default FavoriteItem
