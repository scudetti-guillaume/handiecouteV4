<template>
<div>
    <v-card id="card-dispo-flyer"  :style="{ width: imageWidth, height: calculatedHeight }"
    >
            <img class="cd-flyer"
                src="tract.png" 
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
            const widthValue = parseFloat(this.imageWidthflyer);
            return `${widthValue * 2}%`;
        },
         calculatedHeight() {
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
    background-color:rgb(247, 242, 242) !important;
    color: black !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin-bottom: 2%;
    border: $border;
    border-radius: $br;

}

#card-dispo-flyer {
    background-color:$black !important; 
    color: black !important;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2%;
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
    font-family: $police;
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