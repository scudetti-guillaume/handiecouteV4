<template>
    <v-card id="card-main">
        <v-card-title class="cm-title">
            <div class="cmt-title">
                <img class="icon-style" id="icone-handi" src="handiecoute.png" height="40px" alt="logo handiecoute" />
                <!-- <img class="icon-style" src="tache.png" height="40px" alt="logo handiecoute" /> -->
                <span class="cmtt-span">Handi Ecoute</span>
                <!-- <img class="icon-style" src="telephone.png" height="40px" alt="logo handiecoute" /> -->
            </div>
        </v-card-title>
        <v-card-text class="cmt-text-1">
            <span class="cmtt1-span"> Sexualités</span><span class="cmtt1-span2">Relation</span><span
                class="cmtt1-span3">Isolement</span>
        </v-card-text>
        <div class="cmt-tel">
            <!-- <img class="icon-style" id="icone-handi" src="handiecoute.png" height="40px" alt="logo handiecoute" /> -->
            <img class="icon-style-tache" src="tache.png" height="40px" alt="logo handiecoute" />
            <span class="cmt-tel-span">06 318 567 24</span>
            <img class="icon-style-telephone" src="telephone.png" height="40px" alt="logo handiecoute" />
        </div>
        <v-card-text class="cmt-text-2">
            <p class="cmtt2-p">
                <span class="cmtt2-span">Accueil, info tous les jeudis matin de 9h à 13h</span>
            </p>
            <p class="cmtt3-p"><span class="cmtt2-span">Personne vivant avec un handicap, aidant.es, professionnel.les</span></p>

        </v-card-text>

    </v-card>
</template>



<script>
export default {
    name: 'acceuil',
    mounted() {
        this.$emit('component-mounted', this.$el);
    },
}
</script>

<style lang="scss">
#card-main {
    background-color: rgb(0, 0, 0) !important;
    color: $primary-color !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
    border-radius: 0px !important;
    font-family: $police;
    font-size: 1.2rem;
}

.cm-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: $tertiary-color;
    text-align: center;
    font-family: $police;
}

.cmt-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 900px;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    font-family: $police;
    color: $tertiary-color;
}



@media screen and (max-width: 410px) {
    .cm-title {
        padding: 2% !important;
    }

    .cmtt-span {
        font-size: 0.8em !important;
    }
}

@media screen and (max-width: 375px) {
    .cm-title {
        padding: 1% !important;
    }

    .cmtt-span {
        font-size: 0.8em !important;
    }
}

.cmtt-span {
    white-space: pre-wrap !important;
    font-family: $police;
}

.cmt-tel {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    border-radius: 50%;
    font-family: $police;
    font-size: 1.8em;
}

.cmt-tel-digit {
    width: 40px;
    height: 40px;
    background-color: $tertiary-color;
    /* Couleur de fond */
    color: $tertiary-color !important;
    border-radius: 50%;
    /* Pour créer un cercle */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    /* Espace entre les chiffres */
    font-size: 1.2em;
    /* Ajustez la taille de police selon vos préférences */
}

.cmt-text-1 {
    background-color: $primary-color;
    color: $tertiary-color !important;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 200px;
    font-weight: bold;
    font-family: $police;
    margin-bottom: 1%;
    white-space: pre-wrap;
    font-size: 1.5em;
    padding: 1%;
    padding-right: 2%;
    border-radius: 0px !important;
    text-shadow: 10px 8px 20px rgb(0, 0, 0)
}

// @media screen and (min-width: 1900px) {
//     .cmt-text-1 {
//         width: 50%;
//     }
// }

@media screen and (max-width: 1260px) {
    .cmt-text-1 {
        width: 60%;
    }
}

@media screen and (max-width: 1080px) {
    .cmt-text-1 {
        width: 60%;
    }
}

@media screen and (max-width: 960px) {
    .cmt-text-1 {
        width: 65%;
    }
}

@media screen and (max-width: 790px) {
    .cmt-text-1 {
        width: 75%;
    }
}

@media screen and (max-width: 700px) {
    .cmt-text-1 {
        width: 85%;
    }
}

@media screen and (max-width: 600px) {
    .cmt-text-1 {
        width: 95%;
        font-size: 1.3em;
        height: 200px;
    }
}

.cmtt1-span {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    font-family: $police;
    font-weight: bold;
    font-size: 2em;
    // color: $primary-color;
    color: $tertiary-color !important;
}

.cmtt1-span2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    color: $tertiary-color !important;
    // color: $primary-color;
    font-family: $police;
    font-weight: bold;
    font-size: 2em;
    margin-left: 2%;
}

.cmtt1-span3 {
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    height: auto;
    // color: $primary-color;
    color: $tertiary-color !important;
    font-family: $police;
    font-weight: bold;
    font-size: 2em;
}

.cmt-text-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    font-weight: bold;
    font-family: $police;
    white-space: pre-wrap;
    font-size: 1.3em;
    text-align: center;
}

.cmtt2-span {
    color: $tertiary-color !important;
    text-align: center;
    font-family: $police;
    font-weight: bolder;
}

.cmt-tel-span {
    text-shadow: 2ch;
    font-weight: bolder;
    font-style: oblique;
    font-size: 2rem;
    color: $tertiary-color !important;
    font-family: $police;
}

.cmt-icone {
    color: $black;
    font-style: italic;
    font-size: 40px;
    font-family: $police;
}

.icon-style-tache {
    filter: invert(10%);
    margin-right: 1%;
}

.icon-style-telephone {
    filter: invert(10%);
    margin-left: 2%;
}

#icone-handi {
    margin-right: 2%;
    height: 70px;
    width: 80px;
}

@media (min-width: 560px) {
    .cmtt2-span {
        font-size: 1.2em;
    }
}

// @media (max-width: 480px) {
//     .cmtt2-span {
//         // font-size: 1.1em;
//     }
// }
</style>