<template>
    <v-dialog v-model="showModal" max-width="600">
        <v-card>
            <v-card-title>{{ selectedCard.name }}</v-card-title>
            <v-card-text>
                <p>{{ selectedCard.decriptif }}</p>
                <p>{{ selectedCard.decriptif2 }}</p>
                <!-- <a :href="selectedCard.lien" target="_blank">{{ selectedCard.content }}</a> -->
                <!-- Vous pouvez ajouter d'autres détails ici -->
            </v-card-text>
            <v-card-actions>
                <v-btn @click="closeModal">Fermer</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
name: 'presentationmodal',
    props: {
        card: Object, // Les informations de la personne
    },
    data() {
        return {
            showModal: false,
        };
    },
    watch: {
        card(newCard) {
            // Mettre à jour selectedCard lorsque la prop card change
            this.selectedCard = newCard;
            this.showModal = true; // Ouvrir automatiquement la modale lorsque card change
        },
    },
    computed: {
        selectedCard() {
            return this.card; // Utiliser une propriété calculée pour accéder aux informations de la carte
        },
    },
    methods: {
        closeModal() {
            this.showModal = false;
        },
    },
};
</script>