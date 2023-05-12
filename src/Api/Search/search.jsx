import config from "../config";

const GetSearch = (debounced) => {

    return config.get("users/search", {
        params: {
            q: debounced,
            type: "less"
        }
    })
}
export { GetSearch }