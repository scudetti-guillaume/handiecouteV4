<template>
    <v-card id="card-presentation">

        <v-card-title class="cp-title">
            <span class="cpt-span">Qui sommes nous ?</span>
        </v-card-title>
        <div class="cp-wrapper">
            <v-card v-for="(card, index) in presentationCards" :key="index" id="cp-perso">
                <v-card-text class="cp-perso-title">
                    <p>
                    <h2 class="cppt-span">{{ card.name }}</h2>
                    <!-- <span class="cppt-span">{{ card.firstname }} {{ card.lastname }}</span> -->
                    </p>
                    <img class="cppt-img" :src="card.picture" alt="Photo de profil" />
                </v-card-text>
                <v-card-text class="cp-perso-text">
                    <p>
                        <span>{{ card.content }}</span>
                    </p>
                </v-card-text>
            </v-card>
        </div>
    </v-card>
</template>


<script>
export default {
    name: 'presentationperson',
    data() {
        return {
            presentationCards: [
                {
                    name: "Marie Eparvier",
                    picture: "photo.jpg",
                    content: "l’association « Nio Far, tous ensemble »"
                },
                {
                    name: "Frédéric Colleuille ",
                    picture: "photo.jpg",
                    content: "l’association « Singulier-Pluriel, conseil conjugal et familial »"
                },
            ]
        }
    },
   mounted() {
        this.$emit('component-mounted', this.$el);
    },
    methods: {

    }
}
</script>

<style lang="scss">

#card-presentation {
    background-color: rgb(247, 242, 242) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 2%;
    padding-bottom: 2%;
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