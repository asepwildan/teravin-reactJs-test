const initialState = {
    personalData2: {},
    riwayatPendidikan: [],
    pengalamanKerja: [],
    skills: [],
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
                riwayatPendidikan: payload.obj2,
            };
        case "add-pengalaman-kerja":
            return {
                ...state,
                pengalamanKerja: payload.obj3,
            };
        case "add-skills":
            return {
                ...state,
                skills: payload.obj4,
            };
        default:
            return state;
    }
}

export default getPersonalDataReducer;
