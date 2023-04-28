import { useQuery } from 'react-query'

import { UserService } from '@/services/user.service'

export const useFavorites = () => {
	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery('favorite movies', () => UserService.getById(userId), {
		select: ({ data }) => data,
	})

	return {
		isLoading,
		favoriteMovies,
		refetch,
	}
}
