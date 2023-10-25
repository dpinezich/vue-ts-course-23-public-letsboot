<script>
export default {
  name: 'App',
  data: () => ({
    todos: [],
    newTodo: '',
    editedTodo: null,
    visibility: 'all'
  }),

  computed: {
    activeTasks() {
      // your code here
    },
    filteredTodos() {
      // your code here
    },
    remaining() {
      // your code here
    },
    allDone: {
      // your code here
    }
  },

  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim()
      const todoItem = {
        id: this.todos.length + 1,
        title: value,
        completed: false
      }

      if (!value) {
        return
      }
      this.todos.push(todoItem)
      this.newTodo = ''
    },

    cancelEdit(todo) {
      // your code here
    },

    doneEdit(todo) {
      // your code here
    },

    editTodo(todo) {
      // your code here
    },

    pluralize(word, count) {
      // your code here
    },

    removeCompleted() {
      // your code here
    },

    removeTodo(todo) {
      // your code here

    },

    updateTodo(todo) {
      // your code here
    }
  }
}
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodo"
          @keyup.enter="addTodo"
      />
    </header>
    <!-- your code here -->

  </section>
  <!--
  a bit later
      <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong v-text="remaining"></strong>
        {{ pluralize('item', remaining) }} left
      </span>
      <ul class="filters">
        <li>
          <button
              @click="visibility = 'all'"
              :class="{ selected: visibility === 'all' }"
              class="btn"
          >
            All
          </button>
        </li>
        <li>
          <button
              @click="visibility = 'active'"
              :class="{ selected: visibility === 'active' }"
              class="btn"
          >
            Active
          </button>
        </li>
        <li>
          <button
              @click="visibility = 'completed'"
              :class="{ selected: visibility === 'completed' }"
              class="btn"
          >
            Completed
          </button>
        </li>
      </ul>
      <button
          class="clear-completed"
          @click="removeCompleted"
          v-show="todos.length > remaining"
      >
        Clear completed
      </button>
    </footer>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>
      A Vue 3 iteration on
      <a href="https://todomvc.com/examples/vue/">TodoMVC - Vue</a>
    </p>
  </footer>
  -->
</template>

<style>
@import './styles/todomvc-base.css';
@import './styles/todomvc-index.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  padding: 0 10px;
}
</style>
