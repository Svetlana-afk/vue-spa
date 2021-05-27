<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link 
        v-for="link in links" 
        :key="link.url" 
        active-class="active" 
        :to="link.url" 
        v-slot="{navigate}"
        custom
        exact
    >
    <li>
      <a href="#" @click="navigate" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </li>      
    </router-link>
  </ul>
</template>

<script>
export default {
    props: ['value'],
    data: () => ({
        links: [
            {title: 'Пользователи', url: '/'},
            {title: 'История', url: '/history'}
        ]
    })
}
</script>