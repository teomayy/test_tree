import { useMemo, useState } from 'react'

interface ServiceTreeProps {
	parent: number
	services: ServiceItemNode[]
}

function ServiceTree({ parent, services }: ServiceTreeProps) {
	const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({})

	const items = useMemo(() => {
		return services
			.filter(x => x.head === parent)
			.sort((a, b) => a.sorthead - b.sorthead)
	}, [parent, services])

	const openIcon = '▼'
	const closeIcon = '►'

	return (
		<div>
			<ul>
				{items.map(item => (
					<li
						key={item.id}
						onClick={event => {
							event.stopPropagation()
							setIsOpen(old => ({
								...old,
								[item.id]: !old[item.id],
							}))
						}}
					>
						{item.node ? (isOpen[item.id] ? openIcon : closeIcon) : ''}
						<span>
							{item.name} ({item.price})
						</span>

						{isOpen[item.id] && (
							<ServiceTree parent={item.id} services={services} />
						)}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ServiceTree
