"use client";

import type { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: ()=>void
};

function Modal({children, isOpen, onClose}: ModalProps) {
  const modalStyle ="fixed top-0 left-0 w-full h-full flex justify-center items-center";
  const overlayStyle ="fixed top-0 left-0 w-full h-full bg-black/50 z-0";
  const contentStyle ="p-[var(--spacing-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[8px] text-[var(--color-text)] shadow-[0_4px_12px_rgba(0,0,0,0.12)] z-[1]";
  if(!isOpen){
  return null;
  } 
  return (
    <div className={modalStyle}>
      <div className={overlayStyle} onClick={onClose}></div>
      <div className={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default Modal;