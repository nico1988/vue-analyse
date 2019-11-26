<template>
  <div>
    <ul>
      <li>
        <router-link to="/">依赖收集</router-link>
      </li>
      <li>
        <router-link to="/model">v-model</router-link>
      </li>
      <li>
        <router-link to="/slot">slot</router-link>
      </li>
      <li>
        <router-link to="/keep-alive">keep-alive</router-link>
      </li>
      <li>
        <router-link to="/transition">transition</router-link>
      </li>
      <li>
        <router-link to="/transition-group">transition-group</router-link>
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
