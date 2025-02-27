import { type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type BoxRef } from "./box";
import type { BoxProps } from "./box";

export const Center = forwardRef(function Center<C extends ElementType = "div">(
  { as, className, ...rest }: BoxProps<C>,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;
  return (
    <Box
      className={` flex justify-center items-center ${className}`}
      ref={ref}
      as={as}
      {...typesRest}
    />
  );
}) as <C extends ElementType = "div">(props: BoxProps<C> & { ref?: BoxRef<C> }) => ReactNode;
