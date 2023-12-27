"use-client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const { isOpen, closeModal } = useStoreModal();

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={closeModal}
    >
      children
    </Modal>
  );
}