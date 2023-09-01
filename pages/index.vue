<template>
  
  <div class="main">
       <accueil ref="first"/>
      <presentation ref="accueil" />
      <youtube ref="presentation" />
      <presentationdispo ref="dispositif" />
      <contact ref="contact" />
  </div>
  
</template>

<script>
import accueil from '../components/card-acceuil.vue';
import presentation from '../components/card-presentationperso.vue';
import youtube from '../components/card-youtube.vue';
import contact from '../components/card.contact.vue';
import presentationdispo from '../components/card-presentationdispositif.vue';
import DefaultLayout from '../layouts/default.vue';


export default {
  name: 'IndexPage',
  components: {
    accueil,
    contact,
    presentation,
    youtube,
    presentationdispo,
    DefaultLayout,
 
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

.v-main__wrap{
  background-color: $secondary-color;
}


#card-main{
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>