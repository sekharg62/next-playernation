type HeroLoopyArrowProps = {
  className?: string;
};

export default function HeroLoopyArrow({ className }: HeroLoopyArrowProps) {
  return (
    <svg
      viewBox="0 0 128 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path
        d="M 34 50
           
           
         
           C 52 50 82 48 108 44"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="120,44 108,37 108,51" fill="white" />
    </svg>
  );
}
