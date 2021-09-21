<template>
  <div>
    <a-button type="primary" @click="getWord" >단어 생성</a-button>
    <a-modal v-model="visible" title="단어!" @ok="handleClose">
      <div class="word-container">
        <p v-for="word in words" :key="word">{{ word }}</p>
        <span> {{ titleCopy }} </span>
        <a-button type="primary" @click="copy" >제목 복사</a-button>
        <a-button type="primary" @click="getWord" >단어 다시뽑기</a-button>
      </div>
      
    </a-modal>
    <!-- <div class="word-container">
      {{ words.join(' ') }}
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'word',
  layout: 'basic',
  data () {
    return { 
      words: [],
      visible: false,
    }
  },
  computed: {
    titleCopy () {
      return `[션일장] 단어제시 ${this.words.join(' ')}`
    }
  },
  methods: {
    getWord() {
      fetch('/api/word').then(res => {
        res.json()
        .then(res => {
          console.log(res);
          this.words = res;
          this.visible = true
        })
      })
    },
    handleClose() {
      this.visible = false;
    },
    copy () {
      var tempElem = document.createElement('textarea');
      tempElem.value = this.titleCopy;
      document.body.appendChild(tempElem);

      tempElem.select();
      document.execCommand('copy');
      document.body.removeChild(tempElem);
      alert(`클립보드에 복사: ${this.titleCopy}`);
    }
  }
}
</script>

<style>
html { font-size: 62.5%}
.word-container { font-size: 5rem; }
.word-container span {font-size: 1rem}
</style>