//saving statis data in reducer

const INITIAL_STATE = {
    //static data
    window: [
        { name: "left shooping window", acc: "12", status: "on" },
        { name: "right shooping window", acc: "10", status: "on" },
        { name: "botton shooping window", acc: "8", status: "off" },
        { name: "top shooping window", acc: "18", status: "on" },
    ],
};

//function which return static object ,for dynamic data with payload passing through specific action
const windowReducer = (state = INITIAL_STATE.window, action) => {
    const type = action.type;
    const payload = action.payload;
    console.log(state);
    switch (type) {
        //action type Product
        case "Products": {
            return state;
        }

        default:
            return state;
    }
};

export default windowReducer;
