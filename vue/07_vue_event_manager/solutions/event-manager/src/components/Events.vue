<template>
  <div class="eventmanager">
    <section class="hero is-primary is-bold has-text-centered py-6">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Which adventures do you expect?
          </h1>
          <div v-for="adventure in adventureList" :key="adventure.id">
            <div class="field">
              <label class="checkbox">
                <input type="checkbox" v-model="selectedAdventure" :value="adventure.id" @change="generateFilteredCantonList">
                {{ adventure.adventure }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns is-multiline mt-3">
        <div v-for="canton in filteredCantonList" :key="canton.id" class="column is-one-third">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title is-uppercase is-size-5">
                {{ canton.canton }}
              </p>
            </header>
            <div class="card-content">
              <div class="content has-text-left">
                <figure class="image is-256x256">
                  <img class="is-rounded" :src="canton.image" :alt="`${canton.canton}`" />
                </figure>
                <p class="is-size-9 mb-4">{{ canton.description }}</p>
                <h4>Adventures:</h4>
                <ul>
                  <li v-for="adventure in canton.adventures" :key="adventure">
                    <p>{{ adventureList[adventure-1].adventure }}</p>
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

interface adventure {
  id: number,
  adventure: string,
  options: string[]
}

interface canton {
  id: number,
  canton: string,
  image: string,
  description: string,
  adventures: number[]
}

export default {
  name: 'EventManager',
  setup() {
    const EVENTMANAGER_BASE = 'http://localhost:3000';
    const adventureList = ref<adventure[]>([]);
    const selectedAdventure = ref<number[]>([]);
    const filteredCantonList = ref<canton[]>([]);
    let cantonList: canton[] = [];

    function generateFilteredCantonList(): void {
      filteredCantonList.value = [];

      for (const canton of cantonList) {
        const cantonAdventuresArray = canton.adventures;
        const selectedAdventuresArray = selectedAdventure.value;

        if (hasAllAdventures(cantonAdventuresArray, selectedAdventuresArray)) {
          filteredCantonList.value.push(canton);
        }
      }
    }

    function hasAllAdventures(cantonAdventures: number[], selectedAdventures: number[]): boolean {
      return selectedAdventures.every(f => cantonAdventures.includes(f));
    }

    // Get the list of skills from the Express API
    async function getAdventureList(): Promise<void> {
      const response = await fetch(`${EVENTMANAGER_BASE}/adventures`);
      adventureList.value = await response.json();
    }

    // Get the list of applications from the Express API
    async function getCantonList(): Promise<void> {
      const response = await fetch(`${EVENTMANAGER_BASE}/cantons`);
      cantonList = await response.json();
      filteredCantonList.value = cantonList;
    }

    getAdventureList();
    getCantonList();

    return {
      adventureList,
      selectedAdventure,
      filteredCantonList,
      generateFilteredCantonList,
    }
  }
}
</script>

<style scoped>
.card {
  height: 100%;
}
label {
  font-size: 20px;
}
a {
  word-break: break-word;
}
</style>
