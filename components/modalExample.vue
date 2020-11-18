<template>
<div class="section">
  <modal v-show="isOpen" @close="isOpen=false">
        <p class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
        </p>
  </modal>

    <modal v-show="isOpen2" @close="isOpen2=false">
        <p class="image is-4by3">
            <img src="http://placekitten.com/1280/960" alt="">
        </p>
  </modal>
  <button class="button is-primary is-fullwidth" @click="isOpen=true">Open Modal</button>
  <button class="button is-primary is-fullwidth" @click="isOpen2=true">Open Cat Img</button>
</div>
</template>

<script>
import Modal from './modal'
export default {
    components: {
        modal: Modal
    },
    data(){
        return {
            isOpen: false,
            isOpen2: false
        }
    }
}
</script>

<style>

</style>