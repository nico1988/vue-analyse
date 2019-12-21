<template>
  <div>
    <ul id="header">
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
      <li>
        <router-link to="/next-tick">next-tick</router-link>
      </li>
      <li>
        <router-link to="/event">event</router-link>
      </li>
      <li>
        <router-link to="/render">render</router-link>
      </li>
    </ul>
  </div>
</template>

<style>
  ul#header{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    margin-bottom: 1em;
    border-bottom: 1px solid blueviolet;
  }
  ul#header > li {
    list-style: none;
    flex:1;
    min-width: 10%;
  }
</style>
