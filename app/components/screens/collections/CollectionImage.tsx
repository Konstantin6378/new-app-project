import Image from 'next/image'
import { FC } from 'react'

import errorCollection from '../../../../public/error-collection.jpg'

import { ICollection } from './collections.interface'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return (
		<>
			{image ? (
				<Image alt={title} src={image} layout="fill" draggable={false} />
			) : (
				<Image
					alt={title}
					src={errorCollection}
					layout="fill"
					draggable={false}
				/>
			)}
		</>
	)
}
export default CollectionImage
