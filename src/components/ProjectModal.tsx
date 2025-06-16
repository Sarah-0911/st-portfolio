import ImageGallery from "./ImageGallery";
import type { Project } from '../lib/types';

type ProjectModalProps = {
  onClose: () => void;
  isClosing: boolean;
  project: Project;
};

export function ProjectModal({ onClose, isClosing, project }: ProjectModalProps) {

  const { heading, description, altText, images, technologies, features, href } = project;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-4 md:p-6 m-4 max-w-3xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-xl font-semibold mb-4">{heading}</h2>
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 w-full">
              <ImageGallery images={images} altText={altText} />
            </div>
          <div>
            <p className="">{description}</p>
            <h3 className="mt-2 mb-1 font-semibold">Technologies</h3>
            <ul className="flex gap-2">
              {technologies?.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <h3 className="mt-2 mb-1 font-semibold">Fonctionnalités</h3>
            <ul className="list-disc list-inside">
              {features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
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
