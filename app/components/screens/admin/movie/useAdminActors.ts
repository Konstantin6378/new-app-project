import { useQuery } from 'react-query'

import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/toast-error'

import { IOption } from './../../../ui/select/select.interface'

export const useAdminActors = () => {
	const queryData = useQuery(
		'Popular movies in sidebar',
		() => ActorService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(actor): IOption => ({
						label: actor.name,
						value: actor._id,
					})
				),

			onError: (error) => {
				toastError(error, 'Actor list')
			},
		}
	)

	return queryData
}
