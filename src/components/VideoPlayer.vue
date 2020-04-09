<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import videojs from 'video.js';
import framebyframe from '../videojs.framebyframe';
import hotkeys from 'videojs-hotkeys';
console.log(framebyframe);
console.log(hotkeys);

export default {
    name: "VideoPlayer",
    props: {
        currentVideo: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    watch: {
        currentVideo: function (item) {
            console.log("watching")
            console.log(item)
            this.player.src(item.src)
            this.$forceUpdate()
        }
    },
    mounted() {
        let playerOptions = {
            autoplay: true,
            controls: true,
            fluid: true,
            sources: [
                {
                    src: this.currentVideo.src,
                    type: 'video/mp4'
                }
            ],
            plugins: {
                framebyframe: {
                    fps: 23.98,
                    steps: [
                        { text: '-5', step: -5 },
                        { text: '-1', step: -1 },
                        { text: '+1', step: 1 },
                        { text: '+5', step: 5 }
                    ]
                },
                hotkeys: {
                    volumeStep: 0.1,
                    seekStep: (1/24),
                    enableMute: true,
                    enableFullscreen: true,
                    enableNumbers: false,
                    enableVolumeScroll: true,
                    enableHoverScroll: true   
                }
            }
        }
        this.player = videojs(this.$refs.videoPlayer, playerOptions, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
    },
    updated() {
        console.log('currentvideo updated')
        console.log(this.player.src + this.currentVideo.src)
        this.player.src(this.currentVideo.src)
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }  
}
</script>