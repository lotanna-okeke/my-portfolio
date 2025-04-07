import { assests } from "../assets/assests";

const handleDownloadCV = (resumeFile, fileName) => {
  const link = document.createElement("a");
  link.href = resumeFile;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadCVModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
    <div className="relative bg-[#1e1e20] text-white w-full max-w-md rounded-2xl shadow-xl p-6 sm:p-8">
      
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        onClick={onClose}
        aria-label="Close modal"
      >
        ✕
      </button>

      {/* Modal Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Download My CV
      </h2>

      {/* Buttons */}
      <div className="flex flex-col gap-4">
        <button
          className="w-full py-3 px-6 rounded-xl bg-[#C8A26B] text-black font-medium hover:bg-[#e6c08d] transition duration-300"
          onClick={() => {
            handleDownloadCV(assests.resumeSWE, "Lotanna Okeke SWE Resume.pdf");
            onClose();
          }}
        >
          Software Engineering Resume
        </button>

        <button
          className="w-full py-3 px-6 rounded-xl bg-[#C8A26B] text-black font-medium hover:bg-[#e6c08d] transition duration-300"
          onClick={() => {
            handleDownloadCV(assests.resumeDS, "Lotanna Okeke DS Resume.pdf");
            onClose();
          }}
        >
          Data Science Resume
        </button>
      </div>
    </div>
  </div>
);

export default DownloadCVModal;
