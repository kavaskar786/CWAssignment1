import { ReactNode } from "react";
interface ChartContainerProps {
  children: ReactNode;
  ariaLabel: string;
}

const ChartContainer = ({ children, ariaLabel }: ChartContainerProps) => (
  <div
    className=" md:w-[70vh] h-[51.3vh] rounded-2xl overflow-hidden shadow-2xl shadow-[#46586e]"
    aria-label={ariaLabel}
  >
    {children}
  </div>
);

export default ChartContainer;
