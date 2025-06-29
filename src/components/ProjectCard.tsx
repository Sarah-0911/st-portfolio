import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { Card as ShadcnCard } from './ui/card';
import { createPortal } from 'react-dom';
import type { Project } from '../lib/types';
import { Eye } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const ProjectCard = ({ project }: ProjectCardProps) => {

const [modalOpen, setModalOpen] = useState(false);
const [isPreloading, setIsPreloading] = useState(true);
const [isClosing, setIsClosing] = useState(false);

const { heading, subheading, images, altText, category } = project;

const handleClick = (e: React.MouseEvent) => {
  setIsPreloading(true);

  Promise.all(
    images.map(
      (src) =>
        new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // ou reject() si je veux bloquer
        })
    )
  ).then(() => {
    setIsPreloading(false);
    setModalOpen(true);
  });
};

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <ShadcnCard
        className="relative m-4 md:m-2 w-80 group overflow-hidden transition duration-300 ease-in-out bg-card rounded-sm">

        {category === "perso" &&
        <div className='absolute left-2 bottom-2 z-10 text-xs font-semibold text-muted-foreground'>
          <p className='bg-primary-soft text-second-gray/70 px-2 py-1 rounded-md'>Projet perso</p>
        </div>}

        <div
          className="h-56 w-full transition-transform duration-700 ease-out group-hover:scale-x-100 cursor-pointer">
          <img
            src={images[0]}
            alt={altText}
            onClick={handleClick}
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-card-foreground/40 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <span className="pointer-events-none text-2xl text-card font-bold transition-opacity duration-1000 ease-out delay-200">
              <Eye />
            </span>
          </div>
        </div>
        <div className={`flex flex-col gap-4 w-full pt-8 ${category === "perso" ? "pb-14" : "pb-10"} text-center`}>
          <h2 className="text-xl md:text-2xl font-semibold font-display">{heading}</h2>
          <p className="text-second-gray/65 px-8">{subheading}</p>
        </div>
      </ShadcnCard>

      {modalOpen && createPortal(<ProjectModal
        onClose={closeModal}
        isClosing={isClosing}
        project={project}
        />, document.getElementById('modal-root') || document.body)
      }
    </>
  );
};

export default ProjectCard;
