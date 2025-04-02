import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Clipboard, X, AppWindow } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "lotannaokeke44@gmail.com";

  // Copy to Clipboard Function (Modal stays open)
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2s
    });
  };

  // Open email clients & close modal
  const openEmailClient = (client) => {
    let mailUrl = "";
    switch (client) {
      case "gmail":
        mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
        break;
      case "outlook":
        mailUrl = `https://outlook.live.com/mail/deeplink/compose?to=${email}`;
        break;
      case "yahoo":
        mailUrl = `https://compose.mail.yahoo.com/?to=${email}`;
        break;
      case "default":
        mailUrl = `mailto:${email}`;
        break;
      default:
        return;
    }
    window.open(mailUrl, "_blank");
    onClose(); // Close modal after opening email client
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="bg-[#0f0f0f] p-6 rounded-lg shadow-lg w-[350px] md:w-[400px] relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-5 border-b border-gray-700 pb-3">
          <p className="text-white text-lg font-medium">Compose new email with</p>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition duration-300">
            <X size={20} />
          </button>
        </div>

        {/* Email Client Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => openEmailClient("gmail")}
            className="flex items-center gap-3 p-3 bg-[#1b1b1c] text-white rounded-md hover:bg-[#C8A26B] hover:text-black transition duration-300"
          >
            <Globe size={20} />
            Gmail in browser
          </button>
          <button
            onClick={() => openEmailClient("outlook")}
            className="flex items-center gap-3 p-3 bg-[#1b1b1c] text-white rounded-md hover:bg-[#C8A26B] hover:text-black transition duration-300"
          >
            <Globe size={20} />
            Outlook in browser
          </button>
          <button
            onClick={() => openEmailClient("yahoo")}
            className="flex items-center gap-3 p-3 bg-[#1b1b1c] text-white rounded-md hover:bg-[#C8A26B] hover:text-black transition duration-300"
          >
            <Globe size={20} />
            Yahoo in browser
          </button>
          <button
            onClick={() => openEmailClient("default")}
            className="flex items-center gap-3 p-3 bg-[#1b1b1c] text-white rounded-md hover:bg-[#C8A26B] hover:text-black transition duration-300"
          >
            <AppWindow size={20} />
            Default email app
          </button>

          {/* Copy Email Section */}
          <div className="flex items-center gap-4 rounded-md">
            <button
              onClick={handleCopy} // Modal stays open on copy
              className="flex items-center bg-[#1b1b1c] py-4 px-5 gap-2 text-white font-medium rounded-md hover:bg-[#C8A26B] hover:text-black transition duration-300"
            >
              <Clipboard size={18} />
              Copy
            </button>
            <span className="text-gray-400 text-sm">{email}</span>
          </div>

          {/* Copy Success Tooltip */}
          {copySuccess && (
            <span className="absolute bottom-[-30px] right-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactModal;
