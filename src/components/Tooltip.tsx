import { useState } from 'react';

const messages = [
  "Bonjour!",
  "Encore un clic?",
  "Toujours là?",
  "Vous êtes persistant!",
  "Encore? Vraiment?",
  "Quelle curiosité!",
  "Une petite pause?",
  "Pas très sympa!",
  "Sérieusement?!",
  "Assez cliqué!",
  "Bas les pattes!",
  "Vous êtes tenace!",
  "C'est agaçant!",
  "Aïe, ça fait mal!",
  "Je commence à fatiguer...",
  "Un peu de répit?",
  "J'en ai assez!",
  "Ça suffit maintenant!",
  "Essayez autre chose!",
  "Stop, s'il vous plaît!",
  "D'accord, dernier clic!",
  "C'est bon, j'arrête là!",
];

export default function Tooltip({ children } : { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [touched, setTouched] = useState(false);

  const hideTooltipAndIncrement = () => {
    setTimeout(() => {
      setVisible(false);
      setCount((prev) => prev + 1);
    }, 150);
  };

  const handleTouchStart = () => {
    setTouched(true);
    setVisible(true);
  };

  const handleTouchEnd = () => {
    hideTooltipAndIncrement();
  };

  const handleMouseDown = () => {
    if (!touched) setVisible(true);
  };

  const handleMouseUp = () => {
    if (!touched) hideTooltipAndIncrement();
    else setTouched(false); // reset après un cycle
  };

  const message = messages[Math.min(count, messages.length - 1)];

  return (
    <div
      className="relative inline-block hover:animate-wiggle-x"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
      {visible && (
        <div
        className="inline-block text-center absolute left-1/2 -translate-x-1/2 -translate-y-[44px] mt-1 p-2 bg-card-foreground whitespace-nowrap text-card rounded-sm z-10 shadow-lg text-xs after:content-[''] after:block after:rotate-45 after:w-3 after:h-3 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-1 after:-translate-x-1/2 after:left-1/2 after:bg-card-foreground after:z-20"
        role='tooltip'
        aria-hidden={!visible}>
          {message}
        </div>
      )}
    </div>
  );
}
