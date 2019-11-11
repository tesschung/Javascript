
<template>
  <div class="container">
    <!-- step 3: 사용 self-closing 반드시 필요-->
    <SearchBar @inputChange="onInputChange"/>
    <!-- 상세 비디오 -->
    <VideoDetail :video="selectedVideo"/>
    <!-- 검색한 비디오 목록 -->
    <VideoList @selectVideo="onSelectVideo" v-bind:videos="videos"/>

  </div>
</template>

<script>
// const axios = require('axios') // node.js
import axios from 'axios'

// step 1: import 호출
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

// YOTUBE API KEY: .env.local
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'


// Vue
export default {
  name: 'App',  // Component의 이름을 저장
  // step 2: components에 아래와 같이 등록
  data() {
    return {
      videos: [],
      // 처음 접속시 비디오가 선택되지 않도록
      selectedVideo: null
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  methods: {
    // inputChange라는 이벤트가 발생할때마다 실행
    onInputChange: function(inputValue) {
      console.log(inputValue)
      axios.get(API_URL, {
        params:{
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: inputValue,
        }
      })
      .then(response => {
        this.videos = response.data.items
        // console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    },
    onSelectVideo: function(video) {
      this.selectedVideo = video
    }
  }
}
</script>

<style>
</style>
