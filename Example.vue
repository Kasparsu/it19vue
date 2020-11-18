<template>
<div>

  <button 
  :class="{green: isGreen, red: !isGreen}"
  @click="isGreen=!isGreen">Click me!</button>

</div>
</template>

<script>
export default {
    data(){
        return {
            isGreen: true
        }
    }
}
</script>

<style>
.green {
    background-color: green;
}
.red {
    background-color: red;
}
</style>