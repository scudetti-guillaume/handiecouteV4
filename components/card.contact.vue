<template>
    <v-card id="card-contact">
        <v-card-title class="card-contact-title">
            <span>Pour nous contacter :</span>
        </v-card-title>
        <div class="cc-text-wrapper">
        <v-card-text class="cc-text1">
            <div class="cct1-div"><v-icon size="20px" class="ic-phone">mdi-phone</v-icon><span class="cct1-span1">Par
                    téléphone :</span><span class="cct1-span2">&nbsp06 318 567 24</span><span class="cct1-span3"> *(numero
                    non surtaxé)</span></div>
        </v-card-text>
        <v-card-text class="cc-text2">
            <div class="cct2-div"><v-icon size="20px" class="ic-mail">mdi-at</v-icon><a href="mailto:ecoutehandi@gmail.com"
                    class="cct2-span1">
                    Par mail : ecoutehandi@gmail.com
                </a></div>
        </v-card-text>
        <v-card-text class="cc-text3">
            <div class="cct3-div"><v-icon size="25px" color="blue" class="ic-facebook">mdi-facebook</v-icon><a
                    href="https://www.facebook.com/handiecoute" class="cct3-span1">Par facebook : handiecoute</a></div>
        </v-card-text>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'card-contact',
    data() {
        return {

        }
    },
     methods: {

    },
    computed: {

    },
   mounted() {
        this.$emit('component-mounted', this.$el);
    },
   
}

</script>

<style lang="scss">
#card-contact {
    border: solid 3px $tertiary-color;
    border-radius: 10px;
     display: flex;
    flex-direction: column;
    justify-content: center;

}

.card-contact-title {
    background-color: $primary-color;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: $tertiary-color;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
}

.cc-text-wrapper{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
text-align: center;

}


.ic-phone,
.ic-mail,
.ic-facebook {
    margin-right: 1rem;
}

.cc-text1,
.cc-text2,
.cc-text3 {
    background-color: $primary-color;
}

.cct1-div,
.ctt2-div,
.cct3-div {
    font-size: 1rem;
}

.ctt2-div {
    font-size: 1rem;
}

.cct3-div {
    font-size: 1rem;
}

.cct1-div,
.ctt2-div,
.cct3-div {
    font-size: 1rem;
}

.cct1-span1 {
    margin-right: 1rem;
    color: $white
}

.cct1-span2 {
    color: $white;
    margin-right: 1rem;
    font-size: large;
}

.cct1-span3 {
    color: $white;
    font-size: 0.8rem;
}

.cc-text2 {
    color: $white
}

.cct2-span1 {
    color: $white !important;
    font-size: 1rem;
    text-decoration: none;
}

.cct2-span1:hover{
  color: $tertiary-color !important;
}

.cct3-span1 {
    color: $white !important;
    font-size: 1rem;
    text-decoration: none;
}

.cct3-span1:hover{
  color: $tertiary-color !important;
}



</style>