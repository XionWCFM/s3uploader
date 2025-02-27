import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type BoxRef } from "./box";
import type { BoxProps } from "./box";

export const Stack = forwardRef(function Stack<C extends ElementType = "div">(
  { as, className, ...rest }: BoxProps<C>,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;
  return <Box className={` flex flex-col ${className}`} ref={ref} as={as} {...typesRest} />;
}) as <C extends ElementType = "div">(props: BoxProps<C> & { ref?: BoxRef<C> }) => ReactNode;
