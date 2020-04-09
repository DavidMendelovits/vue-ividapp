<template>
    <v-container class='d-flex flex-row'>
    <div id='video-module'>
        <v-row>
        <v-col>
        <div class='searchlist'>
            <div class='search-box'>
                <SearchBox :search='search' />
            </div>
            <div class='list'>
                <playlist :results='searchResults' />
            </div>
        </div>
        </v-col>
        <v-col>
        <div class='video-player'>
            <VideoPlayer :currentVideo='currentVideo' />
        </div>
        </v-col>
        </v-row>
    </div>
    </v-container>
</template>

<style>
.flex-container {
    display: flex;
    flex-direction: row;
}
.video-player {
    width: 100%;
}
#video-module {
    width: 100%;
}
</style>

<script>
import playlist from './List.vue';
import { db } from '../main'
import SearchBox from './SearchBox.vue'
import VideoPlayer from './VideoPlayer.vue'
export default {
    name: 'VideoApp',
    components: {
        SearchBox,
        playlist,
        VideoPlayer
    },
    data() {
        return {
            searchResults: [],
            currentVideo: {src: 'http://www.parkourtheory.com/api/browse/idrb.mp4'}
        }
    },
    props: {

    },
    firebase: {
        
    },
    methods: {
        search(term) {
            console.log("searching")
            console.log(term)
            if (!term || term == '') {
                return ;
            }
            this.searchResults = []
            db.collection('entries').where('tags', 'array-contains', term).get()
            .then(snapshot => {
                this.searchResults = snapshot.docs.map(doc => doc.data());
            })
        }
    },
    mounted() {
    },
    updated() {
    },
    watch: {

    },
    computed: {

    }
}
</script>