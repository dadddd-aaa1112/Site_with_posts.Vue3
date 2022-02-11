<template>
	<form @submit.prevent>
		<my-input v-focus v-model="post.title" type="text" placeholder="name" />

		<my-input v-model="post.body" placeholder="about" type="text" />

		<my-button
			style="align-self: flex-end; margin-top: 15px"
			@click="createPost"
			>create</my-button
		>
	</form>
</template>
<script>
export default {
data() {
  return {
    post: {
      title: '',
      body: ''
    }
  }
},
methods: {
  createPost() {
    this.post.id = Date.now()
    this.$emit('create', this.post)

    this.post = {
      title = '',
      body = ''
    }
  }
}

}
</script>
<style>
form {
	display: flex;
	flex-direction: column;
}
</style>
