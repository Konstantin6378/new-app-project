import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import styles from './FavoriteItem.module.scss'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return <div className={styles.itemWrapper}>FavoriteItem</div>
}
export default FavoriteItem
