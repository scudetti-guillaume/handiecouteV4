<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(partItem, i) in part" :key="i" @click="emitScrollEvent(partItem.ref)" router exact>
  
          <v-list-item-content>
            <v-list-item-title>{{ partItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer/>
      <v-toolbar-title class="title-style">
        <a class="title-style" href="/">
          <img class="icon-style" src="handiecoute.png" height="40px" alt="logo handiecoute" />
          <div>{{ title }}</div>
        </a>
      </v-toolbar-title>
      <v-spacer/>
      <!-- <v-list-item class="itemlist" v-for="(partItem, index) in part" :key="index" @click="emitScrollEvent(partItem.ref)">
        <v-list-item-title>{{ partItem.title }}</v-list-item-title>
      </v-list-item> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>handiecoute.fr &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
    methods: {
    emitScrollEvent(refName) {
      this.scrollToRef = refName;
      this.$root.$emit('scroll-to-component', refName);
    },
  }, 
  data() {
    return {
    scrollToRef: null,
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: true,
      title: 'Handi Ecoute',
      part: [
      {
          title: 'Acceuil',
          ref: 'first'
        },
        {
          title: 'Qui sommes nous ?',
          ref: 'accueil'
        },
        {
          title: 'Que faisons nous ?',
          ref: 'presentation',
        },
        {
          title: 'Presentation dispositif',
          ref: 'dispositif',
        },
        {
          title: 'Contact',
          ref: 'contact',
        },
      ],
    }
  }
}
</script>

<style lang="scss">
.title-style {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $tertiary-color;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  width: 10vw;
  justify-content: space-around;
  text-decoration: none;
  color: $tertiary-color !important;
  font-family: 'Montserrat', sans-serif;
}

.itemlist{
display: flex;
align-items: center;
justify-content: center;
width: 100%;

margin-left: 10%;

}
</style>