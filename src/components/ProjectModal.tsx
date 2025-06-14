import ImageGallery from "./ImageGallery";

type ProjectModalProps = {
  onClose: () => void;
  title: string;
  description: string;
  altText: string;
  images: string[];
};

export function ProjectModal({ onClose, title, images, altText, description }: ProjectModalProps) {

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
        <div className="flex">
          <ImageGallery images={images} altText={altText} />
          <p className="mt-4 text-center">{description}</p>
        </div>
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
