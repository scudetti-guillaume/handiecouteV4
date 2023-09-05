<template>
    <div>
        <v-card id="card-icone">
            <v-card-title class="ci-title"><h3>Des questions ?</h3></v-card-title>
            <v-card-text>
               <img class="icon-style-hd1" id="icon-style-hd1" src="hd1.png" height="60px" alt="logo handiecoute" @click="openModal($event, 'modal-hd1')"/>
               <div class="modal-wrapper">
                <modal name="modal-hd1" id="modal1">
                  <div class="custom-modal-content">
                  <p class="cid-p1">Les intervenants sont des professionnels du conseil conjugal et familial, membres de l’Association Nationale des Conseillers Conjugaux et Familiaux (ANCCEF).</p>
                </div>
                </modal>
                </div>
                <div class="cid-pdiv"><p class="cid-p1">Les intervenants sont des professionnels du conseil conjugal et familial, membres de l’Association Nationale des Conseillers Conjugaux et Familiaux (ANCCEF).</p>
                <div class="icon-style-wrapper">
                  <img class="icon-style-hd2" id="icon-style-hd2" src="hd2.png" height="60px" alt="logo handiecoute"  @click="openModal($event, 'modal-hd2')" />
                  <modal name="modal-hd2" id="modal2">
                      <div class="custom-modal-content">
                      <p class="cid-p1">Les intervenants sont des professionnels du conseil conjugal et familial, membres de l’Association Nationale des Conseillers Conjugaux et Familiaux (ANCCEF).</p>
                    </div>
                    </modal>
                         <img class="icon-style-hd31" id="icon-style-hd31" src="hd3.png" height="60px" alt="logo handiecoute"  @click="openModal($event, 'modal-hd3')" />
                         <modal name="modal-hd3" id="modal3">
                      <div class="custom-modal-content">
                      <p class="cid-p1">Les intervenants sont des professionnels du conseil conjugal et familial, membres de l’Association Nationale des Conseillers Conjugaux et Familiaux (ANCCEF).</p>
                    </div>
                    </modal>
                         </div>
               <p class="cid-p2"> Ils sont formés à l’écoute et à l’accompagnement des personnes en difficulté dans leur vie affective et relationnelle</p>
                  <img class="icon-style-hd5" id="icon-style-hd5" src="hd5.png" height="60px" alt="logo handiecoute"  @click="openModal($event, 'modal-hd4')" />
                           <modal name="modal-hd4" id="modal4">
                          <div class="custom-modal-content">
                          <p class="cid-p1">Les intervenants sont des professionnels du conseil conjugal et familial, membres de l’Association Nationale des Conseillers Conjugaux et Familiaux (ANCCEF).</p>
                        </div>
                        </modal>
              <p class="cid-p3">Ils sont tenus au secret professionnel</p> 
              <div class="icon-style-hd4-wrapper">
                <img class="icon-style-hd4" id="icon-style-hd4" src="hd4.png" height="60px" alt="logo handiecoute" @click="openModal($event, 'modal-hd5')" />
                 <modal name="modal-hd5" id="modal5">
                              <div class="custom-modal-content">
                              <p class="cid-p1">Les intervenants sont des professionnels du conseil conjugal et familial, membres de l’Association Nationale des Conseillers Conjugaux et Familiaux (ANCCEF).</p>
                            </div>
                            </modal>
               </div>
               </div>
            </v-card-text>
              
                   
                 
        </v-card>

    </div>
</template>


<script>
import Vue from 'vue';
import VModal from 'vue-js-modal';

Vue.use(VModal);

export default {
    methods: {
        openModal(event, name) {
            // Obtenez les coordonnées de l'événement de clic
            const x = event.clientX;
            const y = event.clientY;

            // Définissez la position de la modal en utilisant les coordonnées
            this.$modal.show(name, {
                x: x + 'px',
                y: y + 'px',
            });
        },},

    name: 'presentationicone',
    components: {
      
    },
    data() {
        return {
            

        }
    },
    
    mounted() {
       
    },
}
</script>

<style lang="scss">



#card-icone {
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: $tertiary-color;
color: black;
text-align: center;
margin-bottom: 2%;
}

.ci-title{
text-align: center;
font-size: larger;
}
 
 
.icon-style-hd1{
display: flex;
justify-content: left;
height: 150px;
width: 250px;
margin-right: 0;
}

.icon-style-wrapper{
display: flex;
justify-content: space-evenly;

}

.icon-style-hd2{
display: flex;
justify-content: left;
height: 150px;
width: 250px;
margin-right: 0;
}


#icon-style-hd31{
display: flex;
align-items: right;
justify-content: right;
height: 150px !important;
width: 250px !important;
margin-right: 0;
}

.cid-p3{
margin-left: 20%;
font-size: large;
font-weight: bolder;
font-family: Georgia, 'Times New Roman', Times, serif;

}
.cid-p2{
font-size: large;
font-weight: bolder;
font-family: Georgia, 'Times New Roman', Times, serif;

}
.cid-p1{
font-size: large;
font-weight: bolder;
font-family: Georgia, 'Times New Roman', Times, serif;

}


.icon-style-hd4-wrapper{
display: flex;
justify-content: right;  
width: 100%;

}

.icon-style-hd4{
height: 150px !important;
width: 250px !important;
// margin-left: 100%;
}

.icon-style-hd5{
height: 150px !important;
width: 250px !important;
margin-right: 0;
}

.cid-pdiv{
color: $black;
}

.vm--modal{
display: flex;
justify-content: center;
align-items: center;
height:300px !important;
width: 400px !important;
border-radius: 20%;
margin-left:0% ; 
// margin:0 auto;
}


@media screen and (min-width: 1200px) {
    .vm--modal {
        margin-left:5% !important;
    }
}
@media screen and (min-width: 615px) {
    .vm--modal {
        margin-left:10% !important;;
    }}


@media screen and (max-width: 615px) {
    .vm--modal {
        margin-left:15%;
    }
}


@media screen and (max-width: 550px) {
    .vm--modal {
        margin-left:25%;
    }
}

@media screen and (max-width: 500px) {
    .vm--modal {
        height:300px !important;
        width: 300px !important;
        margin-left:40% !important;
        // margin:  0 auto;
    }
}

@media screen and (max-width: 450px) {
    .vm--modal {
        margin-left:60% !important;
          height:300px !important;
        width: 250px !important;
    }
    }
@media screen and (max-width: 380px) {
    .vm--modal {
        margin-left:60% !important;
          height:300px !important;
        width: 250px !important;
    }
    }

    


.modal-hd1{
display: flex;
align-items: center;
justify-content: center;
}

.custom-modal-content {
  /* Réglez la hauteur maximale de la modal ici */
display: flex;
align-items: center;
justify-content: center;
height:100%;
width: 100%;
  color: rgb(255, 255, 255);
  background-color: $primary-color;
  max-height: 400px; /* Par exemple, ajustez la hauteur en pixels selon vos besoins */
  overflow-y: auto; /* Ajoutez une barre de défilement si nécessaire */
}


</style>