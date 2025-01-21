const Modal = ({ isOpen, onClose, trailerUrl, loading }) => {
  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative w-full max-w-4xl md:h-[60%] sm:h-[45%]  h-[35%]  bg-black rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 focus:outline-none"
        >
          &times;
        </button>

        {/* Show loading message or the video */}
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
            Loading trailer...
          </div>
        ) : (
          trailerUrl && (
            <iframe
              width="100%"
              height="100%"
              src={trailerUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
