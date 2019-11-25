<template>
  <div>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/model">v-model</router-link>
      </li>
    </ul>


  </div>
</template>

<style>
  ul{
    display: flex;
  }
  ul > li {
    list-style: none;
    flex:1;
  }
</style>
