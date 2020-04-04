<template>
  <div>
		<VideoPlayer :itemInfo="item" ></VideoPlayer>
	</div>
</template>

<script>
import VideoPlayer from './components/VideoPlayer.vue';
import 'video.js/dist/video-js.css';
export default {
	name: "VideoExample",
	components: {
		VideoPlayer
	},
	data() {
		return {
      item: {
        src: "http://www.parkourtheory.com/api/browse/kong_side_full.mp4",
        type: "video/mp4"
      }
    }
	}
};
</script>
