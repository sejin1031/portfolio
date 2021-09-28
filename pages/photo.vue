<template>
  <div>
    <a-button type="primary" @click="worldCupStart" >4강 시작</a-button>
    <a-modal v-model="visible" title="션드컵!" @ok="completeWorldCup">
      {{ `${round + 1} round / ${maxRound}` }}
      <div class="img-container" v-if="round < maxRound">
        <div class="img" @click="selectPhoto(0)" :style="{backgroundImage: `url(${ imgList[round*2 + 0] })`}"></div>

        <div class="img" @click="selectPhoto(1)" :style="{backgroundImage: `url(${ imgList[round*2 + 1] })`}"></div>
       
        
      </div>
      <br/>
      <input v-if="maxRound === round" v-model="nick" placeholder="닉네임 입력"/>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'WorldCup',
  layout: 'basic',
  data() {
    return {
      visible: false,

      nick: '',

      round: 0,
      photoList: [
        '00',
        '01',
        '02',
        '03'
      ],
      selectedPhotos: []
    }
  },
  computed: {
    maxRound () {
      return Math.floor(this.photoList.length / 2)
    },
    imgList () {
      if(process.server) return []
      return this.photoList.map(name => {
        return `${location.origin}/img/${name}.jpg`
      })
    }
  },
  methods: {
    worldCupStart () {
      this.round = 0;
      this.selectedPhotos = [];
      this.visible = true;
    },
    selectPhoto(index) {
      this.selectedPhotos.push(this.round * 2 + index);
      this.round = this.round+1;
    },

    completeWorldCup () {
      if(this.round === this.maxRound) {
        //

        this.visible = false;
      } else{
        return;
      }
    }
  }
  
}
</script>

<style>
.img-container{width: 100%; height: 100%; }
.img-container .img { width: 100%; height: 300px; background-size: cover; margin: 10px 10px}
</style>