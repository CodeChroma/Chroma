import * as React from 'react'

export interface AppProps {
	props: string;
}

const App: React.FC<AppProps> = () => {

	return (
		<div>Hello World!</div>
	)
}

export default App