<template>
  <li @click="onVideoSelect" class="list-group-item">
    <img :src="thumbnailUrl" alt="img">
    <div class="media-body" v-html="video.snippet.title"></div>
  </li>
</template>

<script>
  export default {
    name: 'VideoListItem',
    props: {
      video: {
        type: Object,
        required: true,
      },
    },
    methods: {
      onVideoSelect() {
        this.$emit('videoSelect', this.video)
      }
    },
    computed: {
      thumbnailUrl() {
        return this.video.snippet.thumbnails.default.url
      }
    },
  }
</script>

<style scoped>
 li {
   display: flex;
   cursor: pointer;
 }

 li:hover {
   background-color: #eee;
 }
</style>
