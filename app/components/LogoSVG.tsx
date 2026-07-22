export default function LogoSVG({ className }: { className?: string }) {
  return (
    <>
      { }
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}</style>
      <svg
        viewBox="0 0 420 90"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Sneha Enterprises Logo"
        role="img"
      >
        {/* "Sneha" — red script */}
        <text
          x="5"
          y="74"
          fontFamily="'Great Vibes', cursive"
          fontSize="80"
          fill="#cc1111"
        >
          Sneha
        </text>

        {/* "ENTERPRISES" — closer, inherits CSS color */}
        <text
          x="210"
          y="68"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="23"
          fill="currentColor"
          letterSpacing="2"
        >
          ENTERPRISES
        </text>

        {/* Decorative underline */}
        <line
          x1="5"
          y1="82"
          x2="415"
          y2="82"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.5"
        />
      </svg>
    </>
  );
}
