import Categories from "../components/Categories/Categories";

export function loadCategories() {
  return function (dispatch) {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: "LOAD_CATEGORIES",
          payload: res,
        });
      });
  };
}

function categoriesReducer(state = {
    Categories: [],
    },
    action){
    switch (action.type) {
        case "LOAD_CATEGORIES": {
            return {
                ...state,
                Categories: action.payload,
            };
        }
        default:
            return state;
    }
}
export default categoriesReducer;