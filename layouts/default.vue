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
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
       <div class="btn-menu"  @click.stop="drawer = !drawer" >Menu</div>
      <v-spacer/>
      <v-toolbar-title class="title-style">
        <a class="title-style" href="/">
          <img class="icon-style" src="handiecoute.png" height="40px" alt="logo handiecoute" />
          <div>{{ title }}</div>
        </a>
      </v-toolbar-title>
      <v-spacer/>
    <!-- <div>
        <button @click="lirePageEntiere">Lire la page</button>
    </div> -->

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
// import VueSpeech from 'vue-speech';
export default {
  name: 'DefaultLayout',
  //  mixins: [VueSpeech], // Utilisez la mixin Vue Speec
    methods: {
    emitScrollEvent(refName) {
      this.scrollToRef = refName;
      this.$root.$emit('scroll-to-component', refName);
    },
    //  lirePageEntiere() {
    //   // Sélectionnez tous les éléments de texte dans le document
    //   const elementsTextuels = Array.from(document.querySelectorAll('*')).filter(element => {
    //     const isTextElement = element.nodeType === Node.TEXT_NODE && element.textContent.trim() !== '';
    //     const isHidden = window.getComputedStyle(element).display === 'none';
    //     return isTextElement && !isHidden;
    //   });

    //   // Créez un seul texte à partir de tous les éléments de texte
    //   const textePage = elementsTextuels.map(element => element.textContent).join(' ');

    //   // Créez une synthèse vocale
    //   // const utterance = new SpeechSynthesisUtterance(textePage);
    //   window.speechSynthesis.speak(textePage);
    // }
  }, 
  data() {
    return {
    scrollToRef: null,
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: false,
      rightDrawer: false,
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
          title: 'Des questions ?',
          ref: 'icone'
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
          title: 'Ressources',
          ref: 'ressources',
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
.v-toolbar__content {
  display: flex;
  justify-content: center;
  max-width: 100vw;

}

v-container {
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
//  width:100%;
 
}

.title-style {
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  width: 10vw;
  justify-content: space-around;
  text-decoration: none;
  color: $tertiary-color !important;
  font-family: $police;
  font-size: 1.6rem;
}

.itemlist{
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-left: 10%;
}

.btn-menu:hover{
  cursor: pointer;
}


</style>