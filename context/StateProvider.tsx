import { createContext, ReactNode, useContext, useState } from "react";

const useDefaultState = (initial: boolean) => useState(initial);

type State = ReturnType<typeof useDefaultState>[0];
type SetState = ReturnType<typeof useDefaultState>[1];

const v: State = true;
const setV: SetState = () => void 0;

const StateConext = createContext([v, setV] as [State, SetState]);

export default function StateProvider({ children }: { children: ReactNode }) {
  return (
    <StateConext.Provider value={useState(true)}>
      {children}
    </StateConext.Provider>
  );
}

export const useToggleState = () => useContext(StateConext);
