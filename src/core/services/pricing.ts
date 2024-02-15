import ServicesDataMock from '../../mocks/data.json'

async function getServicesPricingData(
	mock: boolean = false
): Promise<ServicesResponse> {
	if (mock) {
		return ServicesDataMock
	}
	const res = await (await fetch('end-point')).json()
	return res
}

export { getServicesPricingData }
