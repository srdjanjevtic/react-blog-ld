import { IKImage } from "imagekitio-react";
const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={src}
      className={className}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 30 }}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        }
      ]}
    />
  );
};

export default Image;
