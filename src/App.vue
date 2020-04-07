<template>
	<div>
		<SearchList />

	</div>
</template>

<script>
//import VideoPlayer from './components/VideoPlayer.vue';
import SearchList from './components/Search.vue';
import 'video.js/dist/video-js.css';
export default {
	name: "VideoExample",
	components: {
		SearchList
	},
	data() {
		return {
    }
	}
};
</script>
