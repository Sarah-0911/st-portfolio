import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { Card as ShadcnCard } from './ui/card';
import { createPortal } from 'react-dom';
import type { Project } from '../lib/types';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const ProjectCard = ({ project, className}: ProjectCardProps) => {

const [modalOpen, setModalOpen] = useState(false);
const [isPreloading, setIsPreloading] = useState(true);
const [isClosing, setIsClosing] = useState(false);

const { heading, subheading, images, altText } = project;

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
      <div className="group hover:border-primary rounded-lg px-4 py-6">
        <ShadcnCard
          className="transform-y-[-40%] align-start perspective-1200 group relative flex-none transform justify-start shadow-lg transition duration-300 ease-in-out overflow-hidden"
        >
        <div onClick={handleClick} className="h-56 w-full transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer rounded-md">
          <img
            src={images[0]}
            alt={altText}
            className="h-full w-full object-cover rounded-md transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-card-foreground"
            loading="eager"
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-card-foreground/30 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 rounded-md">
            <span className="text-2xl text-card font-bold transition-opacity duration-1000 ease-out delay-200">+</span>
          </div>
        </div>
          <slot />
        </ShadcnCard>
        <div className="flex flex-col gap-y-0.5 px-10 py-4 text-center">
          <h1 className="text-2xl font-semibold mt-4 mb-2 font-display">{heading}</h1>
          <h2 className="text-muted-foreground">{subheading}</h2>
        </div>
      </div>

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
