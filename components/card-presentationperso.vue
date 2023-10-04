<template>
    <div class="main-presentation">
        <v-card id="card-presentation">
            <v-card-title class="cp-title">
                <span class="cpt-span">Qui sommes nous ?</span>
            </v-card-title>
            <div class="cp-wrapper">
                <v-card v-for="(card, index) in presentationCards" :key="index" id="cp-perso">
                    <v-card-text class="cp-perso-title">
                        <p>
                        <h2 class="cppt-span">{{ card.name }}</h2>
                        </p>
                        <img class="cppt-img" :src="card.picture" alt="Photo de profil" />
                    </v-card-text>
                    <v-card-text class="cp-perso-text">
                        <p class="cp-perso-text-p">{{ card.decriptif }}</p>
                        <a class="cp-perso-text-a" :href="card.lien" target="_blank">
                            <span>{{ card.content }}</span>
                        </a>

                        <p class="cp-perso-text-p">{{ card.decriptif2 }}</p>

                    </v-card-text>
                    <v-btn @click="openModalDetailAction(card)">Voir les détails</v-btn>
                </v-card>
            </div>
        </v-card>
        <presentationCardsDetails v-if="openModalDetail" v-show="openModalDetail"
            @close-modale-detail="openModalDetail = false" :card="selectedCard" />
    </div>
</template>

<script>
// import presentationCardsDetails from '../components/card-detail-presentation.vue';

export default {
    name: 'presentationperson',
    components: {
        presentationCardsDetails: () => import("../components/card-detail-presentation.vue"),

    },
    data() {
        return {
            selectedCard: '',
            openModalDetail: false,
            presentationCards: [
                {
                    name: "Marie Eparvier",
                    picture: "photo.jpg",
                    content: "l’association «Nio Far, tous ensemble»",
                    decriptif: "conseillère conjugale et familiale",
                    decriptif2: "Membre de l'ANCCEF",
                    lien: 'https://www.assoniofar.org/',
                    modale1: "Depuis 2019 conseillère conjugale et familiale, accompagnement en individuel, couple et famille ainsi qu’intervenante en santé sexuelle au sein d’établissement.",
                    modale2: "Formation d’infirmière initial et divers expériences dans le champ social",
                    modale3: "Formation spécifique sur  le consentement pour intervenir",
                    modale4: "Formée sur les questions LGBTQUIA"
                },
                {
                    name: "Frédéric Colleuille",
                    picture: "photo.jpg",
                    content: "l’association «Singulier-Pluriel, conseil conjugal et familial»",
                    decriptif: "conseiller conjugal et familial",
                    decriptif2: "Membre de l'ANCCEF",
                    lien: 'https://www.singulier-pluriel.com',
                    modale1: "Une longue expérience d’Éducateur Spécialisé",
                    modale2: "Depuis 2012 Conseiller Conjugal et Familial, accompagnements individuels, couples et dispositifs parents/enfants",
                    modale3: "Supervision (APP) d'équipes dans le champ sanitaire et social",
                },
            ],

        };
    },
    methods: {
        openModalDetailAction(card) {
            this.selectedCard = card; // Stockez la carte sélectionnée dans selectedCard
            this.openModalDetail = true;
        },


    },
};
</script>

<style lang="scss">
.main-presentation {
    background-color: $white;

}

#card-presentation {
    background-color: $white !important;
    color: $white !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: auto;
    padding-bottom: 2%;
    margin: 0 auto;
    margin-bottom: 2%;
    box-shadow: 10px 50px 20px 20px rgba(0, 0, 0, 0.2); 
}

@media screen and (max-width: 820px) {
    #card-presentation {
        width: 100%;
    }
}



.cp-title {
    background-color: $white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: $black !important;
    border-radius: 2%;
}

.cpt-span {
    color: $black;
    font-size: larger;
}

.cp-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    background-color:  $white ;
}

.cpw-main {
    background-color: $white ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    margin: 2%;

}

.custom-modal-content-perso {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    width: 100%;
    color: rgb(255, 255, 255);
    background-color: $primary-color;
    max-height: 400px;
    overflow-y: auto;
}

#cp-perso {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: solid 5px $tertiary-color;
    box-sizing: border-box;
    transition: height 0.3s;
    background-color: $primary-color;
    word-wrap: break-word;
    white-space: pre-wrap;
    margin-bottom: 2%;
    margin-top: 2%;
    border-radius: 5%;
    font-family: $police;
}

.cp-perso-title {
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0%;
}

.cppt-span {
    color: $white;
    text-align: center;
}

.cppt-img {
    width: 100px;
    height: 100px;
    border-radius: 10%;
}

.cp-perso-text {
    background-color: $primary-color;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-family: $police;
}

.cp-perso-text-p {
    color: $white;
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    font-family: $police;
    margin-bottom: 1% !important;
}

.cp-perso-text-a {
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    font-family: $police;
    margin-bottom: 1%;
    text-decoration: none;
    color: $white !important;
}

.cp-perso-text-a:hover {
    text-decoration: none;
    color: $tertiary-color !important;
}




@media (min-width: 1000px) {
    .cp-wrapper {
        grid-gap: 20px;
    }
}

@media (max-width: 760px) {
    .cp-wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 20px;
        
    }
}

@media (max-width: 440px) {
    .cppt-span {
        font-size: 1.4em;
    }
}

@media (max-width: 410px) {
    .cppt-span {
        font-size: 1.2em;
    }
}

@media (max-width: 370px) {
    .cppt-span {
        font-size: 1em;
    }
}
</style>