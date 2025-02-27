import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  type Ref,
  forwardRef,
  useState,
} from "react";

export type ObjectFit =
  | "cover"
  | "contain"
  | "fill"
  | "none"
  | "scale-down"
  | "center"
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

const matchObjectFit = (objectFit?: ObjectFit) => {
  if (!objectFit) {
    return "";
  }
  switch (objectFit) {
    case "cover":
      return "object-cover";
    case "contain":
      return "object-contain";
    case "fill":
      return "object-fill";
    case "none":
      return "object-none";
    case "scale-down":
      return "object-scale-down";
    case "center":
      return "object-center";
    case "left":
      return "object-left";
    case "right":
      return "object-right";
    case "top":
      return "object-top";
    case "bottom":
      return "object-bottom";
    case "top-left":
      return "object-top-left";
    case "top-right":
      return "object-top-right";
    case "bottom-left":
      return "object-bottom-left";
    case "bottom-right":
      return "object-bottom-right";
    default:
      return "";
  }
};

export const Image = forwardRef(function Image(
  props: Omit<ComponentPropsWithoutRef<"img">, "alt"> & {
    alt: string;
    /**
     * objectFit 속성은 대체 요소의 내용이 컨테이너에 맞게 크기를 조정하는 방법을 설정합니다.
     * 다음과 같은 값이 있을 수 있습니다:
     * - "cover": 대체 콘텐츠는 요소의 전체 콘텐츠 상자를 채우면서 종횡비를 유지하도록 크기가 조정됩니다.
     * - "contain": 대체 콘텐츠는 요소의 콘텐츠 상자 내에 맞게 크기가 조정되면서 종횡비를 유지합니다.
     * - "fill": 대체 콘텐츠는 요소의 전체 콘텐츠 상자를 채우도록 크기가 조정됩니다. 객체의 종횡비가 상자의 종횡비와 일치하지 않는 경우 객체가 잘립니다.
     * - "none": 대체 콘텐츠는 크기가 조정되지 않습니다.
     * - "scale-down": 콘텐츠는 none 또는 contain이 지정된 것처럼 크기가 조정됩니다 (더 작은 구체적인 객체 크기로 결과).
     */
    objectFit?: ObjectFit;
    fallback?: ReactNode;
    errorFallback?: ReactNode;
    isError?: boolean;
    isLoading?: boolean;
  },
  ref: Ref<HTMLImageElement>,
) {
  const {
    alt,
    isLoading: injectIsLoading,
    isError: injectIsError,
    className,
    onLoad,
    onError,
    src,
    fallback,
    errorFallback,
    ...rest
  } = props;
  const [_isLoading, setIsLoading] = useState(true);
  const [_isError, setIsError] = useState(false);
  const isError = typeof injectIsError === "boolean" ? injectIsError : _isError;
  const isLoading = typeof injectIsLoading === "boolean" ? injectIsLoading : _isLoading;

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsError(true);
    onError?.(e);
  };

  const Component = (
    <img
      loading="lazy"
      onLoad={handleLoad}
      onError={handleError}
      src={src}
      aria-labelledby={alt}
      {...rest}
      alt={alt}
      aria-label={alt}
      ref={ref}
      className={`${matchObjectFit(rest.objectFit)} ${className}`}
    />
  );

  if (isLoading) {
    return (
      <>
        {fallback}
        <div className=" absolute invisible">{Component}</div>
      </>
    );
  }

  if (isError) {
    return errorFallback ?? Component;
  }

  return Component;
});
