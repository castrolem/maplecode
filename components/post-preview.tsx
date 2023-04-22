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
};

const PostPreview = ({
  title,
  excerpt,
  date,
  slug,
  coverImage,
  className,
}: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className={classNames("group block h-[90vh]", className)}
    >
      <div
        className="relative mb-3 mr-6 h-full max-h-[90vh] w-full overflow-hidden rounded-lg border border-gray-100 transition duration-700 ease-out sm:mb-0 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:shadow"
        key={`${title}-${date}`}
      >
        <div className="opacity-1 absolute left-0 top-0 z-10 flex h-full w-full max-w-full items-center justify-center bg-accent-4 blur-sm transition duration-700 ease-out lg:blur-0 lg:group-hover:opacity-25 lg:group-hover:blur-sm">
          <Image
            className="relative"
            src={coverImage}
            width={800}
            height={600}
            alt={title}
          />
        </div>
        <div className="absolute left-0 top-0 z-20 h-full w-full transform bg-accent-1 bg-opacity-50 p-8 transition duration-700 ease-out lg:-translate-y-24 lg:bg-transparent lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <h3 className="mb-0 text-xl leading-snug text-white">{title}</h3>
          <FormattedDate date={date} />
          {excerpt && <p className="my-4 text-sm text-white">{excerpt}</p>}
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
