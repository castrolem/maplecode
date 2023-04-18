import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FormattedDate } from "./formattedDate";
import classNames from "classnames";

type Props = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  className?: string;
  style?: any;
};

const PostPreview = ({
  title,
  excerpt,
  date,
  slug,
  coverImage,
  className,
  style = {},
}: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className={classNames("block hover:underline", className)}
      style={style}
    >
      <div
        className="relative mb-3 mr-6 hidden h-[100%] w-full transform overflow-hidden rounded-lg border border-gray-100 transition duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:shadow sm:mb-0 md:block"
        key={`${title}-${date}`}
      >
        <Image
          className="absolute"
          src={coverImage}
          width={300}
          height={300}
          alt={title}
        />
        <h3 className="mb-0 text-xl leading-snug text-zinc-900">{title}</h3>
        <FormattedDate date={date} />
        {excerpt && <p className="my-4 text-sm">{excerpt}</p>}
      </div>
    </Link>
  );
};

export default PostPreview;
