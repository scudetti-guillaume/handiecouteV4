export const state = () => ({
    scrollToRef: null,
});

export const mutations = {
    SET_SCROLL_TO_REF(state, refName) {
        state.scrollToRef = refName;
    },
    CLEAR_SCROLL_TO_REF(state) {
        state.scrollToRef = null;
    },
};