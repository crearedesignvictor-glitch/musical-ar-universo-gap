import React, { useEffect, useRef } from 'react';
import { ShowCardData } from '../types';

interface ShowModalProps {
  show: ShowCardData | null;
  onClose: () => void;
}

export const ShowModal: React.FC<ShowModalProps> = ({ show, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (show) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [show]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (e.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        onClose();
      }
    }
  };

  if (!show) return null;

  return (
    <dialog
      ref={dialogRef}
      id="insp-dialog"
      aria-labelledby="insp-dialog-title"
      onClick={handleBackdropClick}
      onClose={onClose}
    >
      <button
        className="insp-close"
        type="button"
        aria-label="Fechar"
        onClick={onClose}
      >
        ×
      </button>
      <h3 id="insp-dialog-title">
        {show.name} — {show.titlePrefix}
        {show.titleHighlight}
      </h3>
      <p className="insp-modal-venue">
        {show.dateTime} · {show.venue}
      </p>
      <p className="insp-modal-description">{show.blurb}</p>
      <a
        href="#solidario"
        onClick={() => {
          onClose();
        }}
      >
        Saiba como garantir seu ingresso
      </a>
    </dialog>
  );
};
