import { create } from 'zustand'

export const UseAdmin = create((set) => ({
    isLogged : false,
    Admin: false,
    setAdmin: (Admin) => set({ Admin }),
    setIsLogged: (isLogged) => set({ isLogged }),
}));