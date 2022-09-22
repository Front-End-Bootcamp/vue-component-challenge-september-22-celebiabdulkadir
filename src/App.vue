<script setup>
import { onMounted } from "vue";
import BootcampLogo from "./assets/svg/BootcampLogo.vue"
import fecthingData from "./assets/scripts/fetchedData";
import {ref} from "vue"
import StudentsByGroup from "./components/StudentsByGroup.vue";
const filteredByAssisstantData = ref([]);
const groupNames = ref([]) // assigned student values to ref in order to use it later

function getGroupNames (data) {
	const groups = data.map(element  => element.group);
	let unique = [...new Set(groups)];


	groupNames.value = unique
	console.log(unique);

	return unique
}
function getElementByGroupName(groupName){

	let groupData = filteredByAssisstantData.filter(element => element.group == groupName)

	let newGroupData = groupData.students

	return newGroupData;

}
function studentsByGroup(data) {  // this function return students as required in order to use them.
	let asistants = data.filter(student => student.type);
	let students = data.filter(student => !student.type);
	asistants = asistants.map(asistant => {
		const filteredStudents = students.filter(
			(student) => student.group === asistant.group
		);
		let newfiltered = filteredStudents.map(name => name.name)

		return {
			group: asistant.group,
			asistants: asistant.name,
			students: newfiltered
		};
	});

	console.log(asistants);
	filteredByAssisstantData.value = asistants // assigned this value to ref.
	return asistants;
}

// fetchingData() function is imported for readability. Because it is async function, we use await 

onMounted(async() => {
	const data  = await fecthingData(); 
	studentsByGroup(data);
	getGroupNames (data)
})
</script>
<template>
	<div>
		<BootcampLogo />
		<br />
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
<StudentsByGroup :data="filteredByAssisstantData"></StudentsByGroup> 


</template>

<style lang="scss" scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}



</style>
