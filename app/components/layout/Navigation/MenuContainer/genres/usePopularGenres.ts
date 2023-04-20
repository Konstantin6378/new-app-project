import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

import { getGenreUrl } from '@/config/url.config'

import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getPopularGenres(),
		{
			select: ({ data }) =>
				data
					.filter((genre) => genre.icon)
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 4),
			onError(error) {
				toastError(error, 'Popular genres menu')
			},
		}
	)

	return queryData
}
