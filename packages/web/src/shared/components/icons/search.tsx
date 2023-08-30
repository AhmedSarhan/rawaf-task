
import clsx from "clsx";


export const Search = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      aria-labelledby="title desc"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.9 19.7"
      className={clsx("w-4 h-4", props.className)}
    >
      <title id="title">Search Icon</title>
      <desc id="desc">A magnifying glass icon.</desc>
      <g fill="none" stroke="currentColor">
        <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
        <circle cx="8" cy="8" r="7" />
      </g>
    </svg>
  );
};
