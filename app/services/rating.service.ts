import { IProfileInput } from '@/components/screens/profile/profile.interface'

import { getRatingsUrl } from '@/config/api.config'

import axios from '@/api/interceptors'

export const RatingService = {
	async getAll(data: IProfileInput) {
		return axios.put<string>(getRatingsUrl(`/profile`), data)
	},

	async setRating(movieId: string, value: number) {
		return axios.post<string>(getRatingsUrl('/set-rating'), {
			movieId,
			value,
		})
	},

	async getByUserMovie(movieId: string) {
		return axios.get<number>(getRatingsUrl(`/${movieId}`))
	},
}
