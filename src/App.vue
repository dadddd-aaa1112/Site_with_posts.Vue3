<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<div class="app__btns">
			<my-input v-model="searchQuery" placeholder="search" />
			<my-button style="margin: 15px 0" @click="showDialog">
				Create post
			</my-button>

			<my-select v-model="selectedSort" :options="sortOptions" />
		</div>

		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>

		<post-list
			:posts="sortedAndSearchedPosts"
			@remove="removePost"
			v-if="!isPostsLoading"
		/>
		<div v-else>loaded...</div>
	</div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import axios from 'axios'

export default {
	components: {
		PostForm,
		PostList,
	},
	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostLoading: false,
			selectedSort: '',
			searchQuery: '',
			sortOptions: [
				{ value: 'title', name: 'по называнию' },
				{ value: 'body', name: 'по содерж' },
			],
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post)
			this.dialogVisible = false
		},
		removePost(post) {
			this.posts = this.posts.filter((p) => p.id !== post.id)
		},
		showDialog() {
			this.dialogVisible = true
		},
		async fetchPosts() {
			try {
				this.isPostLoading = true
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts?_limit=10'
				)
				this.posts = response.data
			} catch (e) {
				alert('error')
			} finally {
				this.isPostLoading = false
			}
		},
	},
	mounted() {
		this.fetchPosts()
	},
	computed: {
		sortedPost() {
			return [...this.posts].sort((post1, post2) =>
				post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
			)
		},
		sortedAndSearchedPosts() {
			return this.sortedPost.filter((post) =>
				post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			)
		},
	},
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}

.app__btns {
	display: flex;
	justify-content: space-between;
}
</style>
