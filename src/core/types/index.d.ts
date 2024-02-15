/**
 * @property node - 1: with children, 0: no children
 * @property head - id of parent node. null: root item
 * @property sorthead - sort target
 */
interface ServiceItemNode {
	id: number
	head: number | null
	name: string
	node: number
	price: number
	sorthead: number
}

interface ServicesResponse {
	services: ServiceItemNode[]
}
