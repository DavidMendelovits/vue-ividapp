<template>
    <div class='scrollable-list'>
        <article v-for="(entry, idx) in results" :key="idx">
            <a :href="entry.source"> {{entry.source}}</a>
        </article>
    </div>
</template>

<script>
import { db } from '../main';

export default {
    name: 'playlist',
    props: {
        search: String,
    },
    firestore() {
        return {
            results : db.collection('entries').where('tags', 'array-contains', this.search)
        }
    },
    mounted() {
        console.log("List Mounted" + this.results)
        console.log(this.search)
    },
    updated() {
        console.log("List updated " + this.results)
        this.printList();
    },
    methods: {
        printList() {
            console.log(this.search)
        }
    }
}
</script>