<template>
    <div class="main-ressource">
        <div class="card-ressource">
            <v-card-title class="cr-title">
                <span class="crt-span">Ressources</span>
                <a class="crt-link" href="https://niofarweb.wordpress.com/documentation/" target="_blank">Toutes les
                    ressources
                    sont disponible <span class="crt-link-ici">ici</span> </a>
            </v-card-title>
            <v-card class="cr-w-1">
                <p>#Violences sexuelles faites aux enfants, on dit STOP </p>
                <iframe class="video" width="500" height="300" :src="embedUrlEnfant" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </v-card>
            <v-card class="cr-w-2">
                <p>#Violences conjugales, comment faire ?</p>
                <iframe class="video" width="500" height="300" :src="embedUrlViolence" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </v-card>
            <v-card class="cr-w-3">
                <p>#Consentement sous différents angles</p>
                <iframe class="video" width="500" height="300" :src="embedUrlConsentement" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </v-card>
            <v-card class="cr-w-4">
                <p>#Harcèlement, on en parle ? </p>
                <iframe class="video" width="500" height="300" :src="embedUrlHarcelement" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <a class="cr4-link" href="../static/guide-harcelement.pdf" download="guide-harcelement.pdf">
                    Télécharger la brochure sur le harcèlement
                </a>
            </v-card>
            <v-card class="cr-w-6">
                <p>#IST c’est quoi concrètement ?</p>
                <a href="../static/Les-IST-brochure.pdf" download="guide-IST.pdf"></a>
                <p><a class="cr-w-5-w-link" href="../static/Les-IST-brochure.pdf"
                        download="guide-transidentité.pdf">Telecharger le guide sur les IST</a> </p>
                <p>Retrouvez plus d'informations sur : </p>
                <p>https://www.planningsfps.be/product/les-ist-mieux-vaut-sen-passer-que-se-les-passer/</p>

            </v-card>
            <v-card class="cr-w-5">
                <p>#Transidentité c’est quoi ?</p>
                <div class="cr-w-5-w">
                    <p>Le guide sur la transidentité </p>
                    <p><a class="cr-w-5-w-link" href="../static/Chrysalide-GuideRdR-Volume1.pdf"
                            download="guide-transidentité.pdf">Telecharger le
                            volume 1</a> </p>
                    <p>Retrouvez tous les volumes sur https://chrysalide-asso.fr/nos-documents/</p>

                </div>
            </v-card>

        </div>
    </div>
</template>

<script>
export default {
    name: 'card-ressources',
    data() {
        return {
            videoenfant: 'HoLMc3dlVqQ',
            videoviolence: 'XcO2UbxE4HY',
            videoconsentement: 'S70PvCqtXwU',
            videoharcelement: 'qG4FS4Nm4uw',
        }

    },
    computed: {
        embedUrlEnfant() {
            return `https://www.youtube.com/embed/${this.videoenfant}`
        },

        embedUrlViolence() {
            return `https://www.youtube.com/embed/${this.videoviolence}`
        },

        embedUrlConsentement() {
            return `https://www.youtube.com/embed/${this.videoconsentement}`
        },
        embedUrlHarcelement() {
            return `https://www.youtube.com/embed/${this.videoharcelement}`
        },
        embedUrlViolence() {
            return `https://www.youtube.com/embed/${this.videoviolence}`
        },
        embedUrlViolence() {
            return `https://www.youtube.com/embed/${this.videoviolence}`
        }

    },
    mounted() {

    },
    methods: {

    }
}

</script>

<style lang="scss">

.main-ressource{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color:$white !important;
    margin-bottom: 2%;
    }


.card-ressource {
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    border-radius: 10px;
    border: solid 3px $tertiary-color;
    margin: 0 auto;
    padding-bottom: 2%;
}


@media (max-width: 800px) {
    .video {
        width: 700px;
    }

    .card-ressource {
        width: 100%;
    }
}

@media (max-width: 7500px) {
    .video {
        width: 600px;
        height: 350;
    }
}


@media (max-width: 660px) {
    .video {
        width: 500px;
        height: 250;
    }
}

@media (max-width: 560px) {
    .video {
        width: 400px;
        height: 250;
    }
}

@media (max-width: 460px) {
    .video {
        width: 300px;
        height: 250;
    }
}


.cr-title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.crt-span {
    text-align: center;
    font-size: larger;
}

.crt-link {
    text-decoration: none;
    color: $white !important;
}

.crt-link-ici {
    font-size: 1.2em;
    color: $tertiary-color !important;
}




.cr-w-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2%;
    padding-top: 2%;
    font-weight: bold;

}

.cr-w-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2%;
    padding-top: 2%;
    font-weight: bold;
}

.cr-w-3 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2%;
    padding-top: 2%;
    font-weight: bold;

}

.cr-w-4 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2%;
    padding-top: 2%;
    font-weight: bold;

}

.cr4-link {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: $white !important;
    margin-bottom: 2%;
    padding-top: 2%;
}

.cr-w-5 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.2em;
    margin-bottom: 4%;
    padding-top: 2%;
    font-weight: bold;
    width: 80%;
    height: auto;
    color: $black !important;
    background-color: white !important;
    text-align: center;
}

.cr-w-5-w {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cr-w-5-w-link {
    text-decoration: none;
    color: $primary-color !important;
}

.cr-w-6 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2%;
    padding-top: 2%;
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
    width: 80%;
    height: auto;
    color: $black !important;
    background-color: white !important;
}</style>