import { useState } from 'react';

const messages = [
  "Bonjour!",
  "Encore un clic?",
  "Toujours là?",
  "Quelle persévérance!",
  "Pourquoi donc?",
  "Encore? Vraiment?",
  "Quelle curiosité!",
  "Pas sympa!",
  "Une petite pause?",
  "C'est agaçant!",
  "Bas les pattes!",
  "Assez cliqué!",
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

  const toggle = () => {
    setVisible(!visible);
    if (!visible) setCount(prev => prev + 1);
  };

  const message = messages[Math.min(count, messages.length - 1)];

  return (
    <div
    className="relative inline-block"
    onMouseDown={toggle}
    onMouseUp={() => setVisible(false)}
    onTouchStart={toggle}
    onTouchEnd={() => setVisible(false)}
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
