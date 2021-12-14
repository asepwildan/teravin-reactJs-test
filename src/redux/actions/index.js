export const setStepBarAsync = () => ({
    type: "set-step-bar",
});

export const addPersonalDataAsync = (obj1) => ({
    type: "add-personal-data",
    payload: { obj1 },
});

export const addRiwayatAsync = (obj2) => ({
    type: "add-riwayat-pendidikan",
    payload: { obj2 },
});
