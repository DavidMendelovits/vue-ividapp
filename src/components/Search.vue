<template>
    <div class='playlist-container'>
        <div id='query-bar'>
            <input v-model="uinput">
        </div>
        <div id='query-results'>
            <playlist :search="uinput" />
        </div>
    </div>
    

</template>

<script>
import playlist from './List.vue';

export default {
    name: 'SearchList',
    components: {
        playlist
    },
    data() {
        return {
            uinput: ''
        }
    },
    props: {
        searchTerm: String
    },
    methods: {

    },
    mounted() {
        console.log("Search rendered")
    },
    updated() {
        console.log("search updated")
    },
    watch: {
        uinput(old, _new) {
            console.log(this.uinput)
            console.log(old + " -> " + _new);
        }
    },
    computed: {
        defaultTerm() {
            console.log('defaultTerm = ' + this.uinput)
            if (this.uinput == '' || !this.uinput) {
                return ('backflip')
            } else {
                return this.uinput
            }
        }
    }
}
</script>