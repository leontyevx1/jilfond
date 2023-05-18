<template>
  <div>
    <header-section/>
    <main-section/>
  </div>
</template>

<script>
import MainSection from "@/components/MainSection";
import HeaderSection from "@/components/HeaderSection";
export default {
  components: {HeaderSection, MainSection},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  background: white;
  width: 1366px;
  box-sizing: border-box;
}
</style>