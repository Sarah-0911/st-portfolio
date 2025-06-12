import { useState } from 'react';

const messages = [
  "Bonjour!",
  "Encore un clic?",
  "Toujours là?",
  "Quelle persévérance!",
  "Encore? Vraiment?",
  "Pourquoi donc?",
  "Quelle curiosité!",
  "Une petite pause?",
  "Pas très sympa!",
  "C'est agaçant!",
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
        className="absolute left-1/2 -translate-x-1/2 -translate-y-24 mt-1 p-2 bg-black text-white text-center rounded-lg z-10 shadow-lg border border-white text-sm"
        role='tooltip'
        aria-hidden={!visible}>
          {message}
        </div>
      )}
    </div>
  );
}

// "absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
