"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden fixed right-5 top-5 z-10 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-[0.85rem] font-medium text-paper-pure shadow-card transition-colors hover:bg-clay-deep sm:right-8 sm:top-8"
    >
      Imprimer / Enregistrer en PDF
    </button>
  );
}
