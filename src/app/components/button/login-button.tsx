"use client";
import { useState } from "react";
import LoginModal from "../modal/login-modal";

export default function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className='rounded-full bg-[#8eb47b] text-white px-4 py-2 text-sm h-full font-dmSans'
      >
        Start writing
      </button>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
