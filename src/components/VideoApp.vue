<template>
    <v-container class='d-flex flex-row'>
    <div id='video-module'>
        <v-row>
        <v-col flex-shrink-1 :cols='4'>
        <div class='searchlist'>
            <div class='search-box'>
                <SearchBox :search='search' />
            </div>
            <div class='list'>
                <playlist :results='searchResults' :selectItem='selectVideo'/>
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
    firebase() {
        return {
            searchResults: db.collection('entries')
        }
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
        },
        selectVideo(index) {
            console.log('select video')
            console.log(index)
            console.log(this.currentVideo)
            console.log(this.searchResults)

            if (index < 0 || index > this.searchResults.length) {
                console.log('impossible!')
            }
            this.currentVideo = {} ;
            this.$set(this.currentVideo, 'src', this.searchResults[index].source)
            console.log(this.currentVideo)
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