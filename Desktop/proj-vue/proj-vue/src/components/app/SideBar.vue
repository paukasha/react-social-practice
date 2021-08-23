<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link tag="li"
                 v-for="link in links"
                 :key='link.url'
                 active-class="active"
                 :to="link.url"
                 :exact="link.exact">
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Счет', url: '/', exact: true},
      {title: 'История', url: '/history'},
      {title: 'Планирование', url: '/planning'},
      {title: 'Новая запись', url: '/record'},
      {title: 'Категория', url: '/categories'},
    ]
  }),
}
</script>