<template>
    <div class="overlay-delete">
        <div class="cdp-main">
            <v-card class="cdp-card">
                <v-card-title id="cdp-card-title">{{ selectedCard.name }}</v-card-title>
                <img class="cdp-img-detail" :src="card.picture" alt="Photo de profil" />
                <v-card-text class="cdp-card-text">
                    <p>{{ selectedCard.modale1}}</p>
                    <p>{{ selectedCard.modale2}}</p>
                    <p>{{ selectedCard.modale3}}</p>
                    <p>{{ selectedCard.modale4}}</p>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="$emit('close-modale-detail')">Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'presentationmodal',
    props: {
        card: Object, // Les informations de la personne
    },
    data() {
        return {
            showModal: false,
        };
    },
    watch: {
        card(newCard) {
            // Mettre à jour selectedCard lorsque la prop card change
            this.selectedCard = newCard;
            this.showModal = true; // Ouvrir automatiquement la modale lorsque card change
        },
    },
    computed: {
        selectedCard() {
            return this.card; // Utiliser une propriété calculée pour accéder aux informations de la carte
        },
    },
    methods: {
        // closeModalDetail() {
        //     this.showModal = false;
        // },
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