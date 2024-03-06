interface FPIconProperties {
  className?: string;
}

const FPIcon = (props: FPIconProperties) => {
  return (
    <svg
      xmlns="SVG namespace"
      viewBox="0 0 60.14 60.73"
      fill="currentColor"
      className={props.className}
    >
      <g className="cls-fp-2">
        <path
          className="cls-fp-3"
          d="M10.92,62.37a9,9,0,0,1-9-9V22.47A20.84,20.84,0,0,1,22.77,1.63H53.08a9,9,0,0,1,9,9H22.77A11.85,11.85,0,0,0,10.92,22.47Z"
          transform="translate(-1.93 -1.63)"
        />
        <path
          className="cls-fp-3"
          d="M20.94,62.37V44.13a4.49,4.49,0,0,1,4.49-4.49H48.05a5,5,0,0,0,5-4.94,5.31,5.31,0,0,0-5.31-5.22H25.63A4.63,4.63,0,0,1,21,25.43a4.49,4.49,0,0,1,4.47-4.94h22A14.53,14.53,0,0,1,61.86,32.38,13.85,13.85,0,0,1,48.23,48.62H29.93v4.76a9,9,0,0,1-9,9"
          transform="translate(-1.93 -1.63)"
        />
      </g>
    </svg>
  );
};

export default FPIcon;
