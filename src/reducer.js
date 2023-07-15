export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      // console.log(action.payload);

      return {
        ...state,
        loading: false,
        error: false,

        cocktails: action.payload,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: true };
    case "STARTED_FETCHING":
      return { ...state, loading: true, error: false };

    default:
    // return throw new Error("You're not handling a dispatch", action.type);
  }
};
