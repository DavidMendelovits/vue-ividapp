<template>
    <div class='scrollable-list'>
        <v-simple-table
        :dense="dense"
        :fixed-header="fixedHeader"
        :height="height"
        >
        <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Rating</th>
            <th class="text-left">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in results" :key='idx'>
            <td>{{ item.rating }}</td>
            <td>{{ item.source }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </div>
</template>

<script>

export default {
    name: 'playlist',
    props: {
        results: { type: Array }
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