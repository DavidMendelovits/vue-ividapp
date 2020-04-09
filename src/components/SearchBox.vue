<template>
    <div id="search-box">
        <input type="text" placeholder="backflip" class="search" v-model='term' v-on:keyup.enter="search(term)">
    </div>
</template>

<script>
export default {
    name: 'SearchBox',
    props: {
        search: { type: Function }
    },
    data: function() {
        return {
          //  search: this.search
          term: ''
        }
    }
    
}
</script>