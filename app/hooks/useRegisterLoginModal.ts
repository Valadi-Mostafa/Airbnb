import { create } from "zustand";

interface RegisterLoginModelStore {
  isRegisterOpen: boolean;
  isLoginOpen: boolean;
  onRegisterOpen: () => void;
  onRegisterClose: () => void;
  onLoginOpen: () => void;
  onLoginClose: () => void;
  onRegisterOpenLoginClose: () => void;
  onRegisterCloseLoginOpen: () => void;
}

const useRegisterLoginModel = create<RegisterLoginModelStore>((set) => ({
  isRegisterOpen: false,
  isLoginOpen: false,
  onRegisterOpen: () => set({ isRegisterOpen: true }),
  onRegisterClose: () => set({ isRegisterOpen: false }),
  onLoginOpen: () => set({ isLoginOpen: true }),
  onLoginClose: () => set({ isLoginOpen: false }),
  onRegisterOpenLoginClose: () =>
    set({ isRegisterOpen: true, isLoginOpen: false }),
  onRegisterCloseLoginOpen: () =>
    set({ isRegisterOpen: false, isLoginOpen: true }),
}));

export default useRegisterLoginModel;
