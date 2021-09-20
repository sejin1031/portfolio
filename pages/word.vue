<template>
  <div>
    <button  @click="getWord" >요청</button>
    <div class="word-container">
      {{ words.join(' ') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'word',
  layout: 'basic',
  data () {
    return { 
      words: []
    }
  },
  methods: {
    getWord() {
      fetch('/api/word').then(res => {
        res.json()
        .then(res => {
          console.log(res);
          this.words = res;
        })
      })
    }
  }
}
</script>

<style>
.word-container { font-size: 13px; }
</style>