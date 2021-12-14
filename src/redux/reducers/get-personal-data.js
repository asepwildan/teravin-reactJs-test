const initialState = {
    personalData2: {},
};

function getPersonalDataReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "add-personal-data":
            return {
                ...state,
                personalData2: payload.obj1,
            };
        case "add-riwayat-pendidikan":
            return {
                ...state,
                personalData2: { ...state.personalData2, ...payload.obj2 },
            };
        default:
            return state;
    }
}

export default getPersonalDataReducer;
