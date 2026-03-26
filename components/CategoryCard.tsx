import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  image: string;
};

export function CategoryCard({ title, image }: CategoryCardProps) {
  const categoryParam = encodeURIComponent(title);
  return (
    <Link
      href={`/shop?category=${categoryParam}`}
      className="group block"
      aria-label={`Browse ${title} products`}
    >
      <div className="relative h-60 overflow-hidden rounded-2xl shadow-card transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl md:h-64">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 20vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          priority
        />
        <div className="overlay-gradient absolute inset-0" />
        <div className="absolute bottom-4 left-4">
          <p className="text-white text-lg font-semibold drop-shadow-md md:text-xl">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
