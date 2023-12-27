import { create } from 'zustand';

interface useStoreModal {
  isOpen: boolean;
  onOpen: () => void;
  closeModal: () => void;
}

export const useStoreModal = create<useStoreModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));