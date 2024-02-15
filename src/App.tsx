import { useEffect, useState } from 'react'
import './App.css'
import ServiceTree from './core/components/ServicesTree'
import { getServicesPricingData } from './core/services/pricing'

function App() {
	console.log('APP')
	const [data, setData] = useState<ServiceItemNode[]>([])

	useEffect(() => {
		console.log('Effect')

		async function getData() {
			const res = await getServicesPricingData(true)
			console.log('RES', res)

			setData(res.services)
		}
		getData()
	}, [])

	return (
		<div>
			{data ? <ServiceTree parent={null} services={data} /> : 'loading...'}
		</div>
	)
}

export default App
