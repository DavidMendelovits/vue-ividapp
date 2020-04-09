<template>
	<div>
		<VideoApp />

	</div>
</template>

<script>
//import VideoPlayer from './components/VideoPlayer.vue';
import VideoApp from './components/VideoApp.vue';
import 'video.js/dist/video-js.css';
export default {
	name: "VideoExample",
	components: {
		VideoApp	
	},
	data() {
		return {
    }
	}
};
</script>
