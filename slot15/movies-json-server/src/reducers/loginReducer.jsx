export const initialAuth = {
    username: "",
    password: "",
    user: null,
    loading: false,
    error: {},
    message: "",
    showModal: false,
    showToast: false,
};

export function authReducer(state, action) {
    switch (action.type) {
        case "changeUsername":
            return { ...state, username: action.payload };
        case "changePassword":
            return { ...state, password: action.payload };
        case "setError":
            return { ...state, error: action.payload };
        case "setMessage":
            return { ...state, message: action.payload };
        case "showModal":
            return { ...state, showModal: true };
        case "hideModal":
            return { ...state, showModal: false };
        case "showToast":
            return { ...state, showToast: true };

        case "hideToast":
            return { ...state, showToast: false };

        case "LOGIN_START":
            return { ...state, loading: true, message: "", error: {} };

        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                message: "Login successful!",
                username: "",
                password: "",
            };

        case "LOGIN_FAIL":
            return {
                ...state,
                loading: false,
                user: null,
                message: `Login failed: ${action.payload}`,
            };

        case "LOGOUT":
            return { ...initialAuth, message: "You have logged out." };

        default:
            return state;
    }
}
