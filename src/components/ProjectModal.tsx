export function ProjectModal({ onClose, title, children }: {
  onClose: () => void,
  title: string,
  children: React.ReactNode
}) {

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"
        onClick={e => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-xl font-semibold mb-4">{title}</h2>
        <div>{children}</div>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
