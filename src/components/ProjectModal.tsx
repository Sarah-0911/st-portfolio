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
        className="relative bg-white rounded-lg shadow-lg p-4 md:p-6 m-4 max-w-4xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-xl font-semibold mb-4">{heading}</h2>
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-[40%] w-full">
              <ImageGallery images={images} altText={altText} />
            </div>
          <div className="md:w-[60%] w-full">
            <p className="text-sm mb-4">{description}</p>
            <h3 className="mt-2 mb-1 text-sm md:text-base font-semibold">Technologies</h3>
            <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
              {technologies?.map((tech, index) => (
                <li key={index} className="border border-slate-300 rounded px-2 py-1">{tech}</li>
              ))}
            </ul>
            <h3 className="mt-4 mb-1 text-sm md:text-base font-semibold">Ce que j'ai réalisé</h3>
            <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
              {features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            { href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-xs md:text-sm rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Voir le site
              </a>
            ) : ""}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 rounded-full text-white px-2 py-1 hover:bg-red-700 text-xs"
        >
          X
        </button>
      </div>
    </div>
  );
}
