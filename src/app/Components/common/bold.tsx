/** @format */

type PropTypes = { children: React.ReactNode };

export default function Bold({ children }: PropTypes) {
  return <span className="font-bold"> {children} </span>;
}
