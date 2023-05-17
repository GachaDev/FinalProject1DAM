import { create } from 'zustand'

export const UseAdmin = create((set) => ({
    Admin: false,
    setAdmin: (Admin) => set({ Admin }),
}));