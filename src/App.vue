<script setup>
  import { ref } from 'vue' 
  import { nanoid } from 'nanoid'
  import { useStorage } from '@vueuse/core'
  import confetti from 'canvas-confetti'

  const newGrocery = ref('')
  const groceries = useStorage('groceries', [])

  const addGrocery = () => {
    if(newGrocery.value){
      groceries.value.push({ id: nanoid(), name: newGrocery.value })
      newGrocery.value = ''
    } 
  } 

  const deleteGrocery = id =>{
    const removeIndex = groceries.value.findIndex(grocery => grocery.id === id)
    groceries.value.splice(removeIndex, 1)
    confetti({particleCount: 300, spread: 1000, origin: { y: 1 } })
  }
</script>

<template>
  <main>
    <h1 class="title">&#x1F34E;Vue Grocery List&#x1F36A;</h1>
    <form class="newGroceryForm" @submit.prevent="addGrocery">
        <input 
            id="newGrocery"
            autocomplete="off"
            type="text" 
            placeholder="Add an item to your list" 
            v-model = "newGrocery"
        />
        <button id="addBtn" type="submit">Add</button>
    </form>
    <h3>Pending Items: {{ groceries.length }}</h3>
    <ul>
      <li v-for="grocery in groceries" @click="deleteGrocery(grocery.id)">
        {{ grocery.name }}
      </li>
    </ul>
  </main>
</template>

<style lang="postcss" scoped>
  main{
    @apply mt-8 flex flex-col justify-center items-center gap-8;
    .title{
      @apply m-2 text-6xl font-bold tracking-wider text-yellowish;
    }
    form {
      @apply flex focus-within:ring-8 focus-within:ring-orangish focus-within:rounded-lg;   
      input {
        @apply bg-accent text-comment p-2 w-80 text-2xl rounded-l-md outline-none;
      }
      button {
        @apply bg-orangish text-accent p-2 text-2xl font-bold rounded-r-md;
        &:hover {
          @apply bg-yellowish;
        }
      }
    }
    ul {
      @apply flex flex-col items-center justify-center rounded-lg bg-orangish;
      li {
        @apply bg-accent text-comment m-2 p-2 w-96 text-center;
        &:hover {
          @apply bg-yellowish text-accent font-bold cursor-pointer;
        }
      }
    }
  }
</style>
