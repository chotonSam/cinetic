export default function AddMovieButton({ onAdd }) {
  return (
    <button
      onClick={onAdd}
      className="bg-red-600 text-white md:px-6 md:py-2 px-3 py-1.5 md:text-base text-sm rounded hover:bg-red-700 transition-colors"
    >
      Add Movie +
    </button>
  );
}
