import ImageGallery from "./ImageGallery";
// import { motion } from 'framer-motion';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

type ProjectModalProps = {
  onClose: () => void;
  title: string;
  description: string;
  altText: string;
  images: string[];
  href: string;
};

export function ProjectModal({ onClose, title, images, altText, description, href }: ProjectModalProps) {

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-4 md:p-6 m-4 max-w-3xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-xl font-semibold mb-4">{title}</h2>
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 w-full">
              <ImageGallery images={images} altText={altText} />
            </div>
          <div>
            <p className="">{description}</p>
            <h3 className="mt-2 mb-1 font-semibold">Technologies</h3>
            <p>React, Tailwind</p>
            <h3 className="mt-2 mb-1 font-semibold">Fonctionnalités</h3>
            <ul className="list-disc list-inside">
              <li>Design responsive</li>
              <li>Mode sombre</li>
              <li>Animations personnalisées</li>
            </ul>
            { href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="mt-2 border border-slate-600">
                Voir le site
              </a>
            ) : ""}
          </div>
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
