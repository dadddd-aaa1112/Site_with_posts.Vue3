<template>
	<div class="post">
		<div>{{ post.id }}</div>
		<div><strong>Name: </strong>{{ post.title }}</div>
		<div><strong>About: </strong>{{ post.body }}</div>
		<div class="post__btn">
			<my-button @click="$router.push(`/users/${post.id}`)">Open</my-button>

			<my-button @click="$emit('remove', post)">Delete</my-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style>
.post {
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.post__btn {
	display: flex;
}
</style>
