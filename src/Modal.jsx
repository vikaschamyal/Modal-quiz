// Modal.jsx
import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, [onClose]);

  if (!isOpen) return null;

  const handleBackdrop = (e) => {
    if (e.target.classList.contains("backdrop")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop bg-black/50 z-50"
      onClick={handleBackdrop}
    >
      <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg animate-fadeIn relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
