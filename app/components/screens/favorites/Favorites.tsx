import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import { Meta } from '@/utils/meta/Meta'

import { getMovieUrl } from '@/config/url.config'

import FavoriteItem from './FavoriteItem'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	const { favoritesMovies, isLoading } = useFavorites()
	return (
		<Meta title="Favorites">
			<Heading title={'Favorites'} />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoritesMovies?.map(
						(movie: {
							_id: string
							title: any
							bigPoster: any
							slug: string
						}) => (
							<FavoriteItem
								key={movie._id}
								item={{
									name: movie.title,
									posterPath: movie.bigPoster,
									url: getMovieUrl(movie.slug),
									title: movie.title,
									_id: movie._id,
								}}
							/>
						)
					)
				)}
			</section>
		</Meta>
	)
}

export default Favorites
