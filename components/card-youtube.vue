<template >
    <div id="main-youtube">
        <div class="card-youtube">
            <v-card-title class="cy-title"><span class="cyt-span">Que faisons nous ?</span></v-card-title>
            <iframe class="video" width="760" height="450" :src="embedUrl" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-youtube',
    data() {
        return {
            videoId: 'j-wxTBml628'
        }
    },
    computed: {
        embedUrl() {
            return `https://www.youtube.com/embed/${this.videoId}`
        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>

<style lang="scss">
#main-youtube {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: $white !important;
    margin-bottom: 2%;
}

.card-youtube {
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
    // margin-bottom: 2%;
    padding-bottom: 2%;
}

.cy-title {
     font-family: $police;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.cyt-span {
    color: $tertiary-color;

}

@media (max-width: 800px) {
    .video {
        width: 700px;
    }

    .card-youtube {
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

// @media (max-width: 630px) {
//     .video {
//         width: 500px;
//     }
// }
// @media (max-width: 630px) {
//     .video {
//         width: 500px;
//     }
// }</style>