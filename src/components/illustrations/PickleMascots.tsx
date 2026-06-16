type MascotArtProps = {
  variant: "captain" | "professor" | "dillbert" | "pup" | "money";
  className?: string;
};

const pickleBody = "#6fbf3d";
const pickleShadow = "#3d7a24";

export function MascotArt({ variant, className = "" }: MascotArtProps) {
  if (variant === "pup") {
    return (
      <svg className={className} viewBox="0 0 220 180" role="img" aria-label="Pickle Pup mascot">
        <ellipse cx="112" cy="126" rx="76" ry="34" fill="#1e211f" />
        <circle cx="66" cy="88" r="36" fill="#232725" />
        <path d="M39 70c-17 7-20 29-12 45 18-2 33-16 39-32z" fill="#151817" />
        <circle cx="55" cy="84" r="5" fill="#fffaf0" />
        <circle cx="57" cy="85" r="2" fill="#1e211f" />
        <path d="M78 94c13 2 26-1 37-9" fill="none" stroke="#fffaf0" strokeWidth="5" strokeLinecap="round" />
        <path d="M171 113c17-21 29-20 34-10 5 9-7 22-28 26" fill="none" stroke="#1e211f" strokeWidth="13" strokeLinecap="round" />
        <circle cx="144" cy="103" r="12" fill="#9edc72" />
        <path d="M137 99c8 5 15 4 22-2" fill="none" stroke="#34651f" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "money") {
    return (
      <svg className={className} viewBox="0 0 180 180" role="img" aria-label="Money Jar Jerry mascot">
        <path d="M54 42h72l10 24v74c0 17-14 28-46 28s-46-11-46-28V66z" fill="#9ed8ec" opacity="0.78" />
        <path d="M59 30h62v18H59z" fill="#7fb3c9" />
        <path d="M64 35h52" stroke="#fffaf0" strokeWidth="5" strokeLinecap="round" />
        <circle cx="72" cy="92" r="7" fill="#1e2a1b" />
        <circle cx="108" cy="92" r="7" fill="#1e2a1b" />
        <path d="M76 119c12 12 28 12 40 0" fill="none" stroke="#1e2a1b" strokeWidth="6" strokeLinecap="round" />
        <circle cx="90" cy="135" r="18" fill="#ffd861" stroke="#c58c1d" strokeWidth="5" />
        <text x="90" y="143" textAnchor="middle" fontSize="22" fontWeight="900" fill="#7a5812">$</text>
      </svg>
    );
  }

  const accessories = {
    captain: (
      <>
        <path d="M44 47l39-27 43 27-41 12z" fill="#ff9b45" />
        <path d="M53 125c-22 15-28 30-28 30 24 0 44-7 58-24z" fill="#b89cf5" />
      </>
    ),
    professor: (
      <>
        <rect x="50" y="52" width="30" height="14" rx="7" fill="none" stroke="#1e2a1b" strokeWidth="5" />
        <rect x="101" y="52" width="30" height="14" rx="7" fill="none" stroke="#1e2a1b" strokeWidth="5" />
        <path d="M80 59h21" stroke="#1e2a1b" strokeWidth="5" />
        <path d="M51 32c19-19 52-20 78 0" fill="none" stroke="#ffd861" strokeWidth="10" strokeLinecap="round" />
      </>
    ),
    dillbert: (
      <>
        <path d="M56 35c15-16 43-16 58 0" fill="none" stroke="#76c7f2" strokeWidth="10" strokeLinecap="round" />
        <circle cx="51" cy="75" r="8" fill="#fffaf0" />
        <circle cx="114" cy="70" r="8" fill="#fffaf0" />
      </>
    )
  }[variant];

  return (
    <svg className={className} viewBox="0 0 180 180" role="img" aria-label={`${variant} pickle mascot`}>
      {accessories}
      <path
        d="M88 24c35 0 56 29 56 70 0 43-22 74-56 74s-56-31-56-74c0-41 21-70 56-70z"
        fill={pickleBody}
      />
      <path d="M115 35c18 12 28 34 28 61 0 38-18 66-48 71 16-17 25-47 25-80 0-20-2-37-5-52z" fill={pickleShadow} opacity="0.22" />
      <circle cx="66" cy="79" r="6" fill="#1e2a1b" />
      <circle cx="110" cy="79" r="6" fill="#1e2a1b" />
      <path d="M70 111c13 12 29 12 42 0" fill="none" stroke="#1e2a1b" strokeWidth="6" strokeLinecap="round" />
      <circle cx="58" cy="54" r="4" fill="#34651f" opacity="0.45" />
      <circle cx="121" cy="115" r="5" fill="#34651f" opacity="0.45" />
      <circle cx="86" cy="44" r="3" fill="#34651f" opacity="0.45" />
    </svg>
  );
}

