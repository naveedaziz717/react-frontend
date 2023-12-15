interface SwiperSlideChildrenProps {
  src: string;
  alt: string;
}

export default function SwiperSlideChildren({
  src,
  alt,
}: SwiperSlideChildrenProps) {
  return (
    <img
      className="w-full h-[250px] md:h-[500px] object-cover bg-center"
      src={src}
      alt={alt}
    />
  );
}
