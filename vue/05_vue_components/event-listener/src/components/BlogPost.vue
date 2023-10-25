<script>
export default {
  props: ['title'],
  emits: ['enlarge-text', 'reduce-text']
}
</script>

<template>
  <div class="blog-post">
	  <h4>{{ title }}</h4>
	  <button @click="$emit('enlarge-text')">Enlarge text</button><br>
    <button @click="$emit('reduce-text')">Reduce text</button>
  </div>
</template>
