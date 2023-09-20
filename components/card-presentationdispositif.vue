<template>
<div>
    <!-- <v-card id="card-dispo">
        <v-card-text class="cd-title">
            <div class="cpd-span"><p class="cpd-span1">Présentation du dispositif</p><p class="cpd-span2">«Handi Écoute»</p> </div>
            <h4 class="cdt-title">POUR QUI ? </h4>
            <p class="cd-p1">
                Mûri et soutenu par deux associations loi 1901, ce dispositif d’écoute et d’accompagnement
                téléphonique s’adresse aux personnes vivant avec un handicap, à leur entourage familial, amical,
                institutionnel.
            </p>
            <h4 class="cdt-title">POUR QUOI ?</h4>
            <p class="cd-p2">
                Nous proposons une rencontre « sans le regard des yeux », uniquement par téléphone
                avec un.e même interlocuteur.trice, pour aborder les questions de sexualités, relations et d’isolement.
            </p>
            <h4 class="cdt-title">COMMENT ?</h4>
            <p class="cd-p4">
                <span>Nous tenons une permanence téléphonique d’information les jeudis de 9h à 13h au 06 318 567 24.</span>
                <span> Les appelant.e.s peuvent évaluer avec nous si notre mode d’accompagnement leur paraît
                    correspondre à leurs attentes. Si ielles le souhaitent, nous conviendrons d’un rendez-vous téléphonique
                    avec un.e professionnel.le, qui restera leur interlocuteur.trice pour d’autres rendez-vous si besoin.
                </span>
            </p>
            <h4 class="cdt-title"> QUEL FINANCEMENT ?</h4>
            <p class="cd-p5">
                En début de dispositif, nous demandons aux appelant.e.s une participation
                aux frais de 30€ pour un rendez-vous de 3⁄4 d’heure. Si des institutions sont sollicitées par leurs
                adhérent.e.s, (ou par nous-mêmes), elles pourront nous contacter pour mettre en place un partenariat et
                un soutien financier afin de réduire la participation de leurs adhérent.e.s. Outre le temps d’entretien,
                nous
                investissons en temps de : préparation, gestion administrative, communication, réunions en interne,
                rencontres partenariales, supervision pour les écoutant.e.s.
                Paiement des entretiens sur plateforme Hello Asso ou sur un compte dédié.
            </p>
            <h4 class="cdt-title"> PAR QUI ?</h4>
            <p class="cd-p6">
                Un et une conseiller.ère conjugal.e et familial.e expérimenté.e.s constituent pour l’instant le
                pôle « accompagnants ». Ielles sont membres de l’ANCCEF et sont garant.es du cadre des entretiens, de la
                confidentialité, du non jugement vis-à vis des personnes qui leur font confiance.
            </p>
        </v-card-text>
    </v-card> -->
    <v-card id="card-dispo-flyer"  :style="{ width: imageWidth, height: calculatedHeight }"
    >
            <img class="cd-flyer"
                src="flyer-handiecoute.png" 
                alt="flyer handiecoute"
                :style="{ 'max-width': '950px', width: imageWidthfyler, height: calculatedHeightflyer }"
              />
    </v-card>
    </div>
</template>


<script>
export default {
    name: 'presentationtext',
    data() {
        return {
            imageWidthflyer: '100%',
            imageWidth: '100%',
        }
    },
    computed: {
        calculatedHeightflyer() {
            // Calcul de la hauteur comme la moitié de la largeur
            const widthValue = parseFloat(this.imageWidthflyer);
            return `${widthValue * 2}%`;
        },
         calculatedHeight() {
            // Calcul de la hauteur comme la moitié de la largeur
            const widthValue = parseFloat(this.imageWidthflyer);
            return `${widthValue * 0.2}%`;
        },
      
    },
     mounted() {
        this.$emit('component-mounted', this.$el);
    },
    methods: {

    }
}
</script>

<style lang="scss">
#card-dispo {
    background-color:rgb(247, 242, 242) !important; ;
    color: black !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin-bottom: 2%;
    // padding-bottom: 2%;
    border: $border;
    border-radius: $br;

}

#card-dispo-flyer {
    background-color:$black !important; ;
    color: black !important;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    // width: 80%;
    // height: 700px;
    margin-bottom: 2%;
    // padding-bottom: 2%;
    // border: $border;
    // border-radius: $br;
}

// @media screen and (min-width: 820px) {
//     #card-dispo-flyer {
//         width: 60%;
//     }
// }
    


.cd-flyer {
 display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

}
.cd-title {
    background-color: $whitebreak !important;
    width: 100%;
    color: $black;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
}

.cpd-span {
      color: $black;
    margin-bottom: 2%;
}

.cdt-title {
    margin-bottom: 2%;
    color: $black;
}

.cd-p1,
.cd-p2,
.cd-p3,
.cd-p4,
.cd-p5,
.cd-p6,
.cd-p7 {
    font-size: large;
    text-align: center;
    margin-bottom: 2%;
    color: $black;
}</style>