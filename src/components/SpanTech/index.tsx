import { ReactNode } from "react";
import { SpanComponent } from "./style";

interface ISpanTechProps {
  children: ReactNode;
}

const SpanTech = ({ children }: ISpanTechProps) => {
  return <SpanComponent>{children}</SpanComponent>;
};
export default SpanTech;