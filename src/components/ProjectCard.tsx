import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { Card as ShadcnCard } from './ui/card';
import { createPortal } from 'react-dom';

type ProjectCardProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  href?: string;
  heading: string;
  subheading: string;
  images: string[];
  altText: string;
  description: string;
};

const ProjectCard = ({
  // as: Tag = 'a',
  className,
  href,
  heading,
  subheading,
  images,
  altText,
  description,
}: ProjectCardProps) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [isPreloading, setIsPreloading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

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
      <div className="group hover:bg-slate-200 rounded-lg p-6">
        <ShadcnCard
          className="transform-y-[-40%] align-start perspective-1200 group relative flex-none transform justify-start shadow-lg transition duration-300 ease-in-out"
        >
          <img
            src={images[0]}
            alt={altText}
            className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer rounded-md"
            loading="eager"
            onClick={handleClick}
          />
          <slot />
        </ShadcnCard>
        <div className="flex flex-col gap-y-0.5 px-5 py-4 text-center">
          <h1 className="text-xl font-medium mt-4 mb-2">{heading}</h1>
          <h2 className="text-muted-foreground">{subheading}</h2>
        </div>
      </div>

      {modalOpen && createPortal(<ProjectModal
        onClose={closeModal}
        isClosing={isClosing}
        title={heading}
        images={images}
        altText={altText}
        description={description}
        href={href ?? ''}
        />, document.getElementById('modal-root') || document.body)
      }
    </>
  );
};

export default ProjectCard;
