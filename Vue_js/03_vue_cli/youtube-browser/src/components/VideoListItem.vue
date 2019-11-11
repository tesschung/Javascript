<template>
  <!-- Click이벤트가 발생하면 onClick함수를 실행 -->
  <li @click="onClick" class="list-group-item">
  <!-- video 객체에서 가져오므로 바인딩(:)한다 -->
  <img :src="thumbnailUrl" alt="youtube-thumbnail-url"> <br>
  <span class="media-body" v-html="video.snippet.title"></span>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: {
      type: Object,
      required: true,
    }
  },
  methods:{
    onClick: function() {
      // selectVideo라는 이벤트가 발생(emit)하면, 자신의 비디오 정보를 넘겨준다.
      this.$emit('selectVideo', this.video)
    } 
  },
  computed: {
    thumbnailUrl: function() {
      return this.video.snippet.thumbnails.default.url
    }
  },
}
</script>

<style>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: lightblue
}

</style>