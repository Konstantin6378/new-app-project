import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import { axiosClassic } from '@/api/interceptors'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMovieUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
}
