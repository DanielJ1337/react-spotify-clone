export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null,
  token:
    "BQBlyo5GnU7jmW8eJXlnnHkMrQupHPd6sEAUkvraOMWUWjt0vc…KFOQeVoc7WrcMFok_dXfnF0-yArt8mjOnpiaLAS3k0UhtQOer",
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};
