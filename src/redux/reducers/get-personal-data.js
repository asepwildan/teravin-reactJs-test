const initialState = {
    namaLengkap: "",
    email: "",
    telepon: "",
    alamat: "",
    repo: "",
    riwayatPendidikan: [],
    pengalamanKerja: [],
    skills: [],
};

function getPersonalDataReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "add-personal-data":
            console.log(payload.obj1, "obj1");
            return {
                ...state,
                namaLengkap: payload.obj1.namaLengkap,
                email: payload.obj1.email,
                telepon: payload.obj1.telepon,
                alamat: payload.obj1.alamat,
                repo: payload.obj1.repo,
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
