<template>
  <v-footer
    dark
    padless
    absolute
  >
      <v-card-text class="py-2 white--text text-center">
        Copyright &copy; {{ new Date().getFullYear() }} — <a :href="linkedin"><strong>Alan Tanaka</strong></a>
      </v-card-text>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-linkedin',
        'mdi-facebook',
        'mdi-instagram',
      ],
      linkedin: 'https://github.com/alanctnk',    
    }),
  }
</script>
<style lang="css" scoped>
  a {
    text-decoration: none;
    color: white;
  }
</style>
