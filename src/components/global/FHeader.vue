<template>
  <nav>
    <img src="../../assets/logo.svg" alt="" />
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Studies</li>
      <li>Experience</li>
    </ul>
    <button>A</button>
  </nav>
</template>

<script>
export default {
  name: 'FHeader',
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped>
nav {
    background-color: #EDF1FD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}
img {
    width: 40px;
    height: auto;
}
ul {
    width: 550px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    transition: .4s;
}
li:nth-child(1) {
    color: #EF0070;
}
li {
    width: 100%;
    cursor: pointer;
}
li:hover {
    color: #EF0070;
    transition: .4s;
}
</style>
