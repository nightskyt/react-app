import { GameQuery } from "../types/game";

type SetGenreIdAction = {
  type: "SET_GENRE_ID";
  genreId: number;
};

type SetPlatformIdAction = {
  type: "SET_PLATFORM_ID";
  platformId: number;
};

type SetSortOrderAction = {
  type: "SET_SORT_ORDER";
  sortOrder: string;
};

type SetSearchTextAction = {
  type: "SET_SEARCH_TEXT";
  searchText: string;
};

export type GameQueryAction =
  | SetGenreIdAction
  | SetPlatformIdAction
  | SetSortOrderAction
  | SetSearchTextAction;

const gameQueryReducer = (state: GameQuery, action: GameQueryAction) => {
  switch (action.type) {
    case "SET_GENRE_ID":
      return {
        ...state,
        genreId: action.genreId,
      };
    case "SET_PLATFORM_ID":
      return {
        ...state,
        platformId: action.platformId,
      };
    case "SET_SORT_ORDER":
      return {
        ...state,
        sortOrder: action.sortOrder,
      };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.searchText,
      };
    default:
      return state;
  }
};

export default gameQueryReducer;
