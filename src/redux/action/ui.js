export const TOGGLE_PROFESSION_MODE = "TOGGLE_PROFESSION_MODE";

export const toggleProfessionaMode = professionalModeId => {
    return {
        type: TOGGLE_PROFESSION_MODE,
        meta: null,
        payload: professionalModeId
    };
};
