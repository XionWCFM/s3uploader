import { type ElementType, forwardRef, ReactNode } from "react";
import { Box, type BoxRef } from "./box";
import type { BoxProps } from "./box";
import { isString } from "./internal/is-string";

type RowProps = {
  left?: React.ReactNode;
  children?: React.ReactNode;
  right?: React.ReactNode;
};

export const Row = forwardRef(function Row<C extends ElementType = "li">(
  { as, className, left, children, right, ...rest }: BoxProps<C> & RowProps,
  ref?: BoxRef<C>
) {
  const typesRest = rest as BoxProps<C>;
  return (
    <Box
      className={`flex w-full justify-between items-center ${className}`}
      ref={ref}
      as={as}
      {...typesRest}
    >
      {isString(left) ? <div>{left}</div> : left}
      {isString(children) ? (
        <div className="w-full text-left flex-grow">{children}</div>
      ) : (
        children
      )}
      {isString(right) ? <div>{right}</div> : right}
    </Box>
  );
}) as <C extends ElementType = "li">(
  props: BoxProps<C> & RowProps & { ref?: BoxRef<C> }
) => ReactNode;
