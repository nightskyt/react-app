import { useContext } from "react";
import { GameQueryContext, GameQueryDispatchContext } from "./gameQueryContext";

export const useGameQuery = () => useContext(GameQueryContext);
export const useGameQueryDispatch = () => useContext(GameQueryDispatchContext);
