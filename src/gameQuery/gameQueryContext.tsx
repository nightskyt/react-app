import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { GameQuery } from "../types/game";
import gameQueryReducer, { GameQueryAction } from "./gameQueryReducer";

const GameQueryContext = createContext<GameQuery>({} as GameQuery);
const GameQueryDispatchContext = createContext<Dispatch<GameQueryAction>>(
  () => {}
);

interface Props {
  children: ReactNode;
}

const GameQueryProvider = ({ children }: Props) => {
  const [gameQuery, dispatch] = useReducer(gameQueryReducer, {} as GameQuery);

  return (
    <GameQueryContext.Provider value={gameQuery}>
      <GameQueryDispatchContext.Provider value={dispatch}>
        {children}
      </GameQueryDispatchContext.Provider>
    </GameQueryContext.Provider>
  );
};

export default GameQueryProvider;
export { GameQueryContext, GameQueryDispatchContext };

