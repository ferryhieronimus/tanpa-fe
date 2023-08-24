"use client";
import { useState } from "react";
import SignupModal from "../modal/signup-modal";

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
        className='px-4 py-2 text-sm h-full font-dmSans'
      >
        Create account
      </button>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
