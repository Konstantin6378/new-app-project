import MovieEdit from '@/screens/admin/movie/MovieEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

import ActorEditPage from '../../actor/edit/[id]'

const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isOnlyAdmin = true

export default MovieEditPage
