<template>
<div>
  <input type="text" v-model="message">
  <button @click="add()">add</button>
  <h1>{{message}}</h1>
  <h1>{{reversed}}</h1>
  <h2>{{text}}</h2>

  <ul>
      <li v-for="item in items" :key="item">{{item}}</li>
  </ul>
  
</div>
</template>

<script>
export default {
    props: ["text"],
    data(){
        return {
            message: "Hello it19",
            items: ['Sai', 'Piim', 'Viin', 'Coca']
        }
    },
    computed: {
        reversed(){
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        add(){
            if(this.message !== ''){
                this.items.push(this.message);
                this.message = '';
            }
        }
    }
}
</script>

<style>

</style>