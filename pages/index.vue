<template>
  
  <div class="card-main">
       <accueil ref="first"/>
      <presentation ref="accueil" />
      <presentationicone ref="icone" />
      <youtube ref="presentation" />
      <presentationdispo ref="dispositif" />
      <ressource ref="ressources" />
      <contact ref="contact" />
  </div>
  
</template>

<script>
import accueil from '../components/card-acceuil.vue';
import presentation from '../components/card-presentationperso.vue';
import youtube from '../components/card-youtube.vue';
import contact from '../components/card.contact.vue';
import presentationdispo from '../components/card-presentationdispositif.vue';
import presentationicone from '../components/card-presentationicone.vue';
import DefaultLayout from '../layouts/default.vue';
import ressource from '../components/card-ressources.vue';
import VueSpeech from 'vue-speech';
import presentationModal from '../components/card-detail-presentation.vue';


export default {
  name: 'IndexPage',
  components: {
    accueil,
    contact,
    presentation,
    youtube,
    presentationdispo,
    DefaultLayout,
    presentationModal,
    presentationicone,
    ressource,
  },
  data() {
    return {
    };
  },
 created() {
    this.$root.$on('scroll-to-component', this.scrollToComponent);
  },
  beforeDestroy() {
    this.$root.$off('scroll-to-component', this.scrollToComponent);
  },
  methods: {
    scrollToComponent(refName) {
      console.log('Scrolling to:', refName);
      const targetElement = this.$refs[refName].$el;
      console.log(targetElement);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
  },
}
</script>

<style lang="scss">

.v-main__wrap {
display: flex;
justify-content: center;
align-items: center;
background-color:$background;
}

.container {
max-width: 100%;
margin: 0 auto;
overflow: hidden;
padding: 0;
}
// body {

// }
#card-main{
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}


</style>