<template>
    <v-card id="card-main">
        <v-card-title class="cm-title">
            <div class="cmt-title">
                <img class="icon-style" src="tache.png" height="40px" alt="logo handiecoute" />
                <span class="cmtt-span">Handi Ecoute</span>
                <img class="icon-style" src="telephone.png" height="40px" alt="logo handiecoute" />
            </div>
        </v-card-title>
            <v-card-text class="cmt-text-1">
                <span class="cmtt1-span">Relation, Isolement, Sexualités</span>
            </v-card-text>
            <div class="cmt-tel">
                <img class="icon-style" id="icone-handi" src="handiecoute.png" height="40px" alt="logo handiecoute" />
                <span class="cmt-tel-span">0631856724</span>
            </div>
            <v-card-text class="cmt-text-2">
                <p class="cmtt2-p"><span  class="cmtt2-span">Accueil, info tous les jeudis matin de 9h à 13h</span></p>
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
.v-main__wrap {
    background-color: $secondary-color;
}

#card-main {
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     margin-bottom: 2%;
}

.cm-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: $tertiary-color;
    text-align: center;
    font-style: italic;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
}

.cmt-title {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 2em;
}

.cmtt-span{
white-space: pre-wrap !important;
}

.cmt-tel {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    // margin-right: 10%;
    font-size: 1.8em;
}

.cmt-text-1 {
    color: $white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    font-size: 100%;
    font-style: italic;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 2%;
    white-space: pre-wrap;
    font-size: 1.5em;
    color:$white;
}

.cmtt1-span{
  color:$white;
}

.cmt-text-2 {
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 60%;
    font-style: italic;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 2%;
    margin-bottom: 2%;
    white-space: pre-wrap;
    font-size: 1.3em;
    color:$white;
    text-align: center;
}

.cmtt2-span{
   color:$white
}


.cmt-icone {
    color: $black;
    font-size: 2em;
    font-style: italic;
    font-size: 40px;
    font-family: 'Times New Roman', Times, serif;
}

#icone-handi {
    margin-right: 2%;
    height: 50px;
    width: 60px;
}
</style>