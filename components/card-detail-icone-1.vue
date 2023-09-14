<template>
    <div class="overlay-delete">
        <div class="cdp-main">
            <v-card class="cdp-card">
                  <div class="custom-modal-content">
                          <p class="cid-p1">Les intervenants sont des professionnels du conseil conjugal et familial, membres de l’Association Nationale des Conseillers Conjugaux et Familiaux (ANCCEF).</p>
                        </div>
                           <v-btn  @click="closeModalDetail()" >FERMER</v-btn>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'iconemodal1',
    props: {
        card: Object, // Les informations de la personne
    },
    data() {
        return {
          
        };
    },
    watch: {
      
    },
    computed: {
      
    },
    methods: {
        closeModalDetail() {
        this.$emit('close-modale-detail1');
        },
    },
};
</script>

<style lang="scss">
.overlay-delete {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    // margin: 0 auto;
    position: fixed;
    visibility: visible;
    // opacity: 1;
    // background-color: rgba(0, 0, 0, 0.7);
    // transition: opacity 0.4s;
    z-index: 1000;
}


.cdp-main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.cdp-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: $primary-color !important;
    max-width: 650px !important;
    width: 40vw !important;
    text-align: center;
    border-radius: 5% !important;
}

@media screen and (max-width: 820px) {
    .cdp-card {
        width: 80vw !important;
    }
}





#cdp-card-title {
    display: flex;
    justify-content: center;
    align-items: center;

}

.cdp-img-detail {
    width: 150px;
    height: 150px;
    border-radius: 10%;
}

.cdp-card-text {
    color: $white !important;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 1.2em;

}
</style>