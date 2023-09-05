<template>
    <div>
        <v-card id="card-presentation">
            <v-card-title class="cp-title">
                <span class="cpt-span">Qui sommes nous ?</span>
            </v-card-title>
            <div class="cp-wrapper"  >
                <v-card v-for="(card, index) in presentationCards" :key="index" id="cp-perso" @click="openModal($event, card)">
                    <v-card-text class="cp-perso-title">
                        <p>
                        <h2 class="cppt-span">{{ card.name }}</h2>
                        </p>
                        <img class="cppt-img" :src="card.picture" alt="Photo de profil" />
                    </v-card-text>
                    <v-card-text class="cp-perso-text">
                        <p class="cp-perso-text-p">{{ card.decriptif }}</p>
                        <p class="cp-perso-text-p">{{ card.decriptif2 }}</p>
                        <a class="cp-perso-text-a" :href="card.lien" target="_blank">
                            <span>{{ card.content }}</span>
                        </a>
                    </v-card-text>
                    <!-- <v-btn>Voir les détails</v-btn> -->
                </v-card>
            </div>
            <modal name="presentation-modal"  >
         <div class="custom-modal-content-perso">
             <p class="cid-p1">
             <h2 class="cppt-span">{{ selectedCard.name }}</h2>
             <img class="cppt-img" :src="selectedCard.picture" alt="Photo de profil" />
             <p class="cp-perso-text-p">{{ selectedCard.decriptif }}</p>
             <p class="cp-perso-text-p">{{ selectedCard.decriptif2 }}</p>
             <a class="cp-perso-text-a" :href="selectedCard.lien" target="_blank">
                 <span>{{ selectedCard.content }}</span>
             </a>
             </p>
         </div>
     </modal>
        </v-card>
     
    </div>
</template>

<script>
import Vue from 'vue';
import VModal from 'vue-js-modal';
Vue.use(VModal);

export default {
    name: 'presentationperson',
    data() {
        return {
            presentationCards: [
                {
                    name: "Marie Eparvier",
                    picture: "photo.jpg",
                    content: "l’association «Nio Far, tous ensemble»",
                    decriptif: "conseillère conjugale et familiale",
                    decriptif2: "Membre de l'ANCCEF",
                    lien: 'https://www.assoniofar.org/'
                },
                {
                    name: "Frédéric Colleuille",
                    picture: "photo.jpg",
                    content: "l’association «Singulier-Pluriel, conseil conjugal et familial»",
                    decriptif: "conseiller conjugal et familial",
                    decriptif2: "Membre de l'ANCCEF",
                    lien: 'https://www.singulier-pluriel.com'
                },
            ],
            selectedCard: '', // Initialisez selectedCard à null
        };
    },
    methods: {
        openModal(event, card) {
           const x = event.clientX;
            const y = event.clientY;
            
            this.selectedCard = card; // Stockez la carte sélectionnée dans selectedCard
            this.$modal.show("presentation-modal",{
                x: x + 'px',
                y: y + 'px',
            });
        },
    },
};
</script>

<style lang="scss">

#card-presentation {
    background-color: rgb(247, 242, 242) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: auto;
    padding-bottom: 2%;
    margin:0 auto;
    margin-bottom: 2%;
}

@media screen and (max-width: 820px) {
    #card-presentation {
        width: 100%;
    }
}
    


.cp-title {
    background-color: $whitebreak;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: $tertiary-color;
    border-radius: 2%;
    
}

.cp-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    //   grid-gap: 10px;
    justify-content: space-between;
    background-color: $whitebreak;
}

.cpt-span{
    color: $black;


}

.cpw-main {
    background-color: $whitebreak;
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
height:100%;
width: 100%;
  color: rgb(255, 255, 255);
  background-color: $primary-color;
  max-height: 400px; /* Par exemple, ajustez la hauteur en pixels selon vos besoins */
  overflow-y: auto; /* Ajoutez une barre de défilement si nécessaire */
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
    white-space: pre-wrap
}

.cp-perso-text-p{
    color: $white;
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 2%;
}

.cp-perso-text-a{
text-decoration: none;
color: $white !important;
}

.cp-perso-text-a:hover{
text-decoration: none;
 color: $tertiary-color !important;
}

.cpt-span {
    font-size: larger;
}


@media (min-width: 1000px) {
    .cp-wrapper {
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