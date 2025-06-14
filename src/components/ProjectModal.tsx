type ProjectModalProps = {
  onClose: () => void;
  title: string;
  subheading: string;
  altText: string;
  images: string[];
};

export function ProjectModal({ onClose, title, images, altText, subheading }: ProjectModalProps) {

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-6 m-4 max-w-lg w-full"
        onClick={e => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-xl font-semibold mb-4">{title}</h2>
        <div className="grid grid-cols-1 gap-4">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Project image ${index + 1}`} className="w-full rounded-lg" />
          ))}
        </div>
        <p className="mt-4 text-center">{subheading}</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          X
        </button>
      </div>
    </div>
  );
}
