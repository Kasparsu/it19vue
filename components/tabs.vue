<template>
    <div class="tabs">
        <ul>
            <li v-for="(item, index) in items"
             :key="index" :class="{'is-active': index == active}">
                <a @click="active=index">{{item}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['items'],
    data(){
        return {
            active: 0
        }
    }
}
</script>

<style>

</style>