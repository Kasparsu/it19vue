<template>
<div>

    <tabs :items="menuItems"></tabs>
    <modal-example></modal-example>
</div>
</template>

<script>
import ModalExample from './components/modalExample.vue';
import Tabs from './components/tabs';
export default {
    components: {
        tabs:Tabs,
        'modal-example': ModalExample
    },
    data(){
        return {
            menuItems: [
                'Modal'
            ],
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