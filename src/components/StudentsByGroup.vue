<script setup>
const props = defineProps(["data"]);
</script>
<template>
	<section v-for="data in props.data" ><hr><strong class="group">{{data.group}}</strong> <hr> <br>
		<strong class="assistan">{{data.asistants}}</strong>  <br> 
		<div class="student" v-for="data in data.students" >{{data}}</div>
	</section> 
</template>
<style lang="scss" scoped>
	.assistan {
	background-color: rgb(57, 126, 153);
	font-style: normal;
	border-radius: 5px
}
.group {
	
	font-style: italic;
	border-radius: 15px;
	font-size:170%;
}

.student {
	font-style:normal;
	border-radius: 15px
}
	
	</style>
