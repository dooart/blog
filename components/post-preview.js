import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { generateBackground } from "../lib/background";
import DateFormatter from "./date-formatter";

const COLORS_BY_CATEGORY = {
  art: "bg-pastel-red",
  code: "bg-pastel-blue",
  words: "bg-pastel-yellow",
};

export default function PostPreview({ title, image, summary, category, slug }) {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <a>
        <div className="border-4 border-zinc-800 bg-white w-[268px] mx-auto p-5 shadow-pixel group transition-all">
          <PostPreviewBackground category={category} />
          <div className="w-[180px] h-[140px] mx-auto border-4 border-zinc-800 relative overflow-hidden m-5 mb-10">
            <PostPreviewImage
              title={title}
              src={image}
              width={180}
              height={140}
            />
          </div>
          <h3 className="text-md font-bold font-mono pb-2 pt-5 group-hover:underline">
            {title}
          </h3>
          <p className="text-sm">{summary}</p>
        </div>
      </a>
    </Link>
  );
}

function PostPreviewImage({ title, src, height, width }) {
  return (
    <Image
      src={src}
      alt={`${title} blog thumbnail`}
      layout="responsive"
      width={width}
      height={height}
    />
  );
}

function PostPreviewBackground({ category }) {
  const tiles = generateBackground()
    .map((n) => Number(n).toString(2).padStart(32, "0"))
    .reduce((r, n) => r + n, "");
  return (
    <div className="absolute grid grid-cols-11 grid-rows-9">
      {tiles
        .split("")
        .slice(0, 110)
        .map((tile, index) => (
          <div
            key={index}
            className={cn("w-5 h-5", {
              [COLORS_BY_CATEGORY[category]]: tile == "1",
            })}
          ></div>
        ))}
    </div>
  );
}
