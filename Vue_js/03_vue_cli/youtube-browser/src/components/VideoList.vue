<template>
  <ul class="list-group">
    <!-- {{ videos }} -->
    <!-- v-for을 통해 video로 하나의 원소로 만든 후 key를 등록한 것으로 v-for을 순환 -->
    <VideoListItem v-for="video in videos"
     v-bind:key="video.id.videoId"
     v-bind:video="video"
     @selectVideo="onSelectVideo"> 
    <!-- video를 v-bind하여 등록해준다 -->
    <!-- selectVideo 이벤트가 발생하면 onVideoSelect가 실행된다. -->
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  props: {
    videos: {
      type: Array,
      required: true,
    }
  },
  components: {
    VideoListItem,
  },
  // select event가 발생하면 VideoListItem의 video값을 받을 수 있다.
  methods: {
    // SelectVideo 라는 이벤트 발생
    onSelectVideo: function(video) {
      this.$emit('selectVideo', this.video)
    },
  },
}


</script>

<style>

</style>