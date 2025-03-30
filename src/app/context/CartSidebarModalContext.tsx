'use client';
import React, { createContext, useContext, useState } from 'react';

interface CartModalContextType {
  isCartModalOpen: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
}

interface CartModalProviderProps {
  children: React.ReactNode;
}

const CartModalContext = createContext<CartModalContextType | undefined>(undefined);

export const useCartModalContext = () => {
  const context = useContext(CartModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

export const CartModalProvider = (props: CartModalProviderProps) => {
  const { children } = props;
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <CartModalContext.Provider value={{ isCartModalOpen, openCartModal, closeCartModal }}>
      {children}
    </CartModalContext.Provider>
  );
};
