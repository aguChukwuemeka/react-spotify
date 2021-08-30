export const initialState = {
  user: null,
  playerList: [],
  playing: false,
  item: null,
  token: null,
  // token:
  //   "BQDLK1TkviFCzRXCjPsrS18-Tj7xf_n3kW9wt1fmutLsuWHW44qeuSd4p1AHO9fe3gEFpbNESKzVnEZRUYcqTRwnrPNlABd0S6T2fMptXTM8l7r8KaZM4dUhfDA6lxUepL4R_YrMy6Ag4foSIblOaiWCKJsqlXDs9Yt2Z07K4ruaHIO8GgGf",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      // console.log("from reducer", action.token);
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playerlist: action.playerlist,
      };

      case 'SET_DISCOVERY_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
