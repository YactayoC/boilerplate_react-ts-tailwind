import { atom } from "jotai";

interface IUserAtom {
  name: string;
  email: string;
  token: string;
}

export const userAtom = atom<IUserAtom>({
  name: "",
  email: "",
  token: "",
});
