<template>
  <div>
    <div class="greeting">Hello {{stateCount}}</div>
    <button @click="mutationDec">-</button>
    <button @click="mutationInc">+</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Mutation, State } from 'vuex-class'

@Component
export default class App extends Vue {
  @State('count') stateCount: number
  @Mutation('inc') mutationInc: () => void
  @Mutation('dec') mutationDec: () => void
}
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>