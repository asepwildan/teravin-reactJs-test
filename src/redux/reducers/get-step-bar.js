const initialState = {
    setStepBar: 0,
    abc: "waduh",
};

function getstepBarReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "set-step-bar":
            return {
                ...state,
                setStepBar: state.setStepBar + 1,
            };
        default:
            return state;
    }
}

export default getstepBarReducer;
