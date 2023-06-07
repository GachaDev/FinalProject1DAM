import { create } from 'zustand'

export const UseAdmin = create((set) => ({
    isLogged : false,
    Admin: false,
    Cartel: [],
    Partidos: [],
    setAdmin: (Admin) => set({ Admin }),
    setIsLogged: (isLogged) => set({ isLogged }),
    setCartel: (Cartel) => set({ Cartel }),
    setPartidos: (Partidos) => set({ Partidos })
}));