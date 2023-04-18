import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '../app/assets/styles/globals.scss'

import MainProvider from '@/providers/MainProvider'

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	const [showChild, setShowChild] = useState(false)

	useEffect(() => {
		setShowChild(true)
	}, [])

	if (!showChild) {
		return null
	}
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
