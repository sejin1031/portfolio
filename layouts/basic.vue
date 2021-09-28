<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['0']">
        <a-menu-item key="0" @click="$router.push('/')">
          <a-icon type="home" />
          <span class="nav-text" >Home</span>
        </a-menu-item>
        <a-menu-item key="1" @click="$router.push('/word')">
          <a-icon type="container" />
          <span class="nav-text" >션일장 단어 생성</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="user" />
          <span class="nav-text" @click="$router.push('/pick')">추첨기</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0, 'background-image': `url(${logo})`}" >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <span class="title"> {{ headName }} </span>
        <!-- <div class="logo" :style="{'background-image': `url(${logo})`}" /> -->
      </a-layout-header>
      <a-layout-content :style="{ margin: '40px 0', padding: '24px', background: '#fff', minHeight: '280px' }">
        <Nuxt />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'layoutBasic',
  data () {
    return {
      collapsed: false,
      logo: require('../assets/img/logo.png')
    }
  },
  computed: {
    headName () {
      let route = this.$route.path;

      switch (route) {
        case "/" : return '메인 페이지'
        case "/word" : return "단어 생성기"
        case "/pick" : return "추첨기"
      }
    }
  }
}
</script>

<style>
span.title { margin-left: 10px; font-size: 3rem; font-weight: bold; color: black;}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

/* #components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
} */
.logo { background-size: cover; width: 100%; height: 100%; float: right; }
header { background-repeat: no-repeat; }
</style>