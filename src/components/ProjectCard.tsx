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
  as: Tag = 'a',
  className,
  href,
  heading,
  subheading,
  images,
  altText,
  description,
}: ProjectCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault(); // Empêche la navigation
    }
    setModalOpen(true);
  };

  return (
    <>
      <div className="group hover:bg-slate-200 rounded-lg p-6">
        <Tag href={href} className={className} style={{ cursor: 'pointer' }}>
          <ShadcnCard
            className={`transform-y-[-40%] align-start perspective-1200 group relative flex-none transform justify-start overflow-hidden shadow-lg transition duration-75 ease-in-out ${
              href ? 'cursor-pointer hover:border-primary' : ''
            }`}
          >
            <img
              src={images[0]}
              alt={altText}
              className="h-60 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              loading="eager"
              onClick={handleClick}
            />
            <slot />
          </ShadcnCard>
          <div className="flex flex-col gap-y-0.5 px-5 py-4 text-center">
            <h1 className="text-xl font-medium mt-4 mb-2">{heading}</h1>
            <h2 className="text-muted-foreground">{subheading}</h2>
          </div>
        </Tag>
      </div>

      {modalOpen && createPortal(<ProjectModal
        onClose={() => setModalOpen(false)}
        title={heading}
        images={images}
        altText={altText}
        description={description}
        />, document.getElementById('modal-root') || document.body)
      }
    </>
  );
};

export default ProjectCard;
