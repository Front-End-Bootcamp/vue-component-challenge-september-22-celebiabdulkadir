export default async function fecthingData() {
	const data = await fetch("https://raw.githubusercontent.com/Front-End-Bootcamp/vue-bootcamp/d6f881aec77f15a4107eafc10f6a91e90f9268a4/homework%201/data.json")
.then((data) => data.json()).then((response) => (response))
return data
}
