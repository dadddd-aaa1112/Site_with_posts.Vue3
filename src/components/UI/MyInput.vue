<template>
	<input type="text" @input="updateInput" :value="modelValue" class="input" />
</template>

<script>

export default {


methods: {
  name: {
    'my-input'
  },
  props: {
    modelValue: [String, Number]
  },
  updateInput(event) {
    this.$emit(':update:modelValue', event.target.value)
  }
}
}
</script>

<style>
.input {
	border: 1px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
	width: 100%;
}
</style>
