<template>
    <v-card id="card-dispo">

        <v-card-text class="cd-title">
            <div class="cpd-span">Présentation du dispositif « Handi Écoute »</div>
            <h4 class="cdt-title">POUR QUI ? </h4>
            <p class="cd-p1">
                Mûri et soutenu par deux associations
                1
                , ce dispositif d’écoute et d’accompagnement
                téléphonique s’adresse aux personnes vivant avec un handicap, à leur entourage familial, amical,
                institutionnel.
            </p>
            <h4 class="cdt-title">POUR QUOI ?</h4>
            <p class="cd-p2">
                Nous proposons une rencontre « sans le regard des yeux », uniquement par téléphone
                avec un.e même interlocuteur.trice, pour aborder les questions de relations, d’isolement et de sexualités.
            </p>
            <h4 class="cdt-title">COMMENT ?</h4>
            <p class="cd-p4">
                <span>Nous tenons une permanence téléphonique d’information les jeudis de 9h à 13h au 06
                    318 567 24.</span>
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
                pôle « accompagnants ». Ielles sont membres de l’ANCCEF

                3 et sont garant.es du cadre des entretiens, de la

                confidentialité, du non jugement vis-à vis des personnes qui leur font confiance.
            </p>

            <!-- <h4 class="cdt-title">PLUS D’INFORMATIONS ?</h4>
            <p class="cd-p7">
                Vous pouvez nous appeler sur nos permanences téléphoniques et/ou
                consulter notre page Facebook. Pour nous joindre : ecoutehandi@gmail.com ou 06 318 567 24.

                Marie Eparvier, pour l’association « Nio Far, tous ensemble »
                Frédéric Colleuille, pour l’association « Singulier-Pluriel, conseil conjugal et familial »
            </p> -->
        </v-card-text>
    </v-card>
</template>


<script>
export default {
    name: 'presentationtext',
    data() {
        return {

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
#card-dispo {
    background-color: $primary-color;
    color: $white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin-bottom: 2%;
    padding-bottom: 2%;
    border: $border;
    border-radius: $br;

}

.cd-title {
    background-color: $primary-color;
    width: 100%;
    color: $tertiary-color;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
}

.cpd-span {
    color: $tertiary-color;
    margin-bottom: 2%;
}

.cdt-title {
    margin-bottom: 2%;
    color: $white
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
    color: $white
}</style>