import { useState } from 'react';

const messages = [
  "Bonjour!",
  "Encore un clic?",
  "Toujours là?",
  "Vous êtes persistant!",
  "Encore? Vraiment?",
  "Quelle curiosité!",
  "Pourquoi donc?",
  "C'est agaçant!",
  "Une petite pause?",
  "Pas très sympa!",
  "Assez cliqué!",
  "Bas les pattes!",
  "Sérieusement?!",
  "Aïe, ça fait mal!",
  "Quelle ténacité!",
  "Un peu de répit?",
  "Je commence à fatiguer...",
  "J'en ai assez!",
  "Ça suffit maintenant!",
  "Essayez autre chose!",
  "Stop, s'il vous plaît!",
  "D'accord, dernier clic!",
  "C'est bon, j'arrête là!",
];

export default function Tooltip({ children }) {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

   const handleMouseDown = () => {
    setVisible(true);
  };

  const handleMouseUp = () => {
    setVisible(false);
    setCount(prev => prev + 1);
  };

  const message = messages[Math.min(count, messages.length - 1)];

  return (
    <div
      className="relative inline-block"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {children}
      {visible && (
        <div
        className="inline-block text-center absolute left-1/2 -translate-x-1/2 -translate-y-[52px] mt-1 p-2 bg-black whitespace-nowrap text-white rounded-sm z-10 shadow-lg text-sm after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20"
        role='tooltip'
        aria-hidden={!visible}>
          {message}
        </div>
      )}
    </div>
  );
}
