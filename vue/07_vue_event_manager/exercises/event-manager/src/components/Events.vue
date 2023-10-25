<template>
  <div class="eventmanager">
    <section class="hero is-primary is-bold has-text-centered py-6">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Which adventures do you expect?
          </h1>
          <div <!-- your code here --> >
            <div class="field">
              <label class="checkbox">
                <input type="checkbox" <!-- your code here --> >
                <!-- your code here -->
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns is-multiline mt-3">
        <div <!-- your code here -->>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title is-uppercase is-size-5">
                <!-- your code here -->
              </p>
            </header>
            <div class="card-content">
              <div class="content has-text-left">
                <figure class="image is-256x256">
                  <img <!-- your code here --> />
                </figure>
                <p class="is-size-9 mb-4"><!-- your code here --></p>
                <h4>Adventures:</h4>
                <ul <!-- your code here -->>
                  <li>
                    <p><!-- your code here --></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'Events'
}
</script>

<style>
</style>
