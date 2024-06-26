import classNames from "classnames";
import Image, {ImageProps} from "next/image";
import {ImgHTMLAttributes} from "react";

const DEFAULT_IMAGE = "./images/connectors/default-service-icon.webp";
interface ConnectorImageProps extends ImageProps {
  width?: number;
  height?: number;
}
export default function ConnectorImage(props: ConnectorImageProps) {
  const replaceImgWithError = (e) => {
    e.target.onerror = null;
    e.target.src = DEFAULT_IMAGE;
  };
  const {className, ...rest} = props;
  return (
    <Image
      width={32}
      height={32}
      className={classNames("w-8 h-8 object-contain", className)}
      onError={replaceImgWithError}
      {...rest}
    />
  );
}
