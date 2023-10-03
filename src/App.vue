<template>
  <div id="main" class="m-0 p-0">
    <HeaderSection />
    <router-view />
  </div>
</template>
<script>
import HeaderSection from '@/components/modules/headerSection.vue'
export default ({
  components: {
    HeaderSection
  },
  setup () {

  },
})
</script>

<style lang="scss">
#main {
  font-family: 'cubic-11';
  text-align: center;
  background: black;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
