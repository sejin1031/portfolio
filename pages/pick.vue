<template>
  <div>
    <div class="pick-container">
      <div class="pick-header">
        댓글 추첨기
        <span @click="isFoldComment = !isFoldComment" style="float: right">
          <a-icon type="down" v-if="isFoldComment" />
          <a-icon type="up" v-else />
        </span>
      </div>
      <div class="pick-body" v-show="!isFoldComment">
        <div>
          <a-input v-model="commentLink" placeholder="link" class="input" /> <br/>
          <a-input v-model="commentNum" placeholder="추첨 인원" type="number" class="input" />
          <a-input v-model="commentExclude" placeholder="제외닉네임 ,로 구분 ex) 나,너,우리" class="input" /> <br/>
          <a-button @click="pickComment" type="primary" >추첨</a-button>
        </div>
      </div>
    </div>

    <!-- <div class="pick-container">
      <div class="pick-header">
        검색 키워드로 추첨하기
      </div>
      <div class="pick-body">
        <div>
          <a-input v-model="commentLink" placeholder="검색키워드" class="input" /> <br/>
          <a-input v-model="commentNum" placeholder="추첨 인원" type="number" class="input" />
          <a-button @click="pickComment" type="primary" >추첨</a-button>
        </div>
      </div>
    </div>   -->

    <a-modal v-model="commentVisible" title="단어!" @ok="commentVisible = false">
      <!-- <div class="word-container">
        <p v-for="word in words" :key="word">{{ word }}</p>
        <span> {{ titleCopy }} </span>
        <a-button type="primary" @click="copy" >제목 복사</a-button>
        <a-button type="primary" @click="getWord" >단어 다시뽑기</a-button>
      </div> -->
      
    </a-modal>

    <!-- <a-modal v-model="visible" title="단어!" @ok="handleClose">
      <div class="word-container">
        <p v-for="word in words" :key="word">{{ word }}</p>
        <span> {{ titleCopy }} </span>
        <a-button type="primary" @click="copy" >제목 복사</a-button>
        <a-button type="primary" @click="getWord" >단어 다시뽑기</a-button>
      </div>
      
    </a-modal> -->
  </div>
</template>

<script>


export default {
  name: 'pick',
  layout: 'basic',
  data() {
    return { 
      commentLink: 'https://gall.dcinside.com/mgallery/board/view/?id=idolsy&no=150621&page=1',
      commentNum: '',
      commentExclude: '',
      commentVisible: false,
      isFoldComment: false,

    }
  },
  methods: {
    pickComment () {
      let excludeList = this.commentExclude.split(',');

      this.$axios.post('/api/pickComment', {
        url: this.commentLink,
        number: this.commentNum,
        exclude: this.excludeList
      })
      .then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
.pick-container { margin-top: 40px; padding: 30px 20px; border: 1px solid rgb(194, 193, 193); border-radius: 10px;  }
.pick-header { font-size: 2em; margin-bottom: 30px; }
.input { max-width: 1000px ; margin: 10px 0 }
</style>