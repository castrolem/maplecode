import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FormattedDate } from "./formattedDate";
import classNames from "classnames";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

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
      className={classNames("group block lg:h-[90vh]", className)}
    >
      <div
        className="relative mb-3 mr-6 flex h-full max-h-[90vh] w-full flex-col-reverse overflow-hidden transition duration-700 ease-out sm:mb-0 lg:rounded-lg lg:border lg:border-gray-100 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:shadow"
        key={`${title}-${date}`}
      >
        <div className="opacity-1 left-0 top-0 z-10 flex max-w-full items-center justify-center transition duration-700 ease-out lg:absolute lg:h-full lg:w-full lg:bg-accent-4 lg:blur-0 lg:group-hover:opacity-25 lg:group-hover:blur-sm">
          <Image
            className="relative"
            src={coverImage}
            width={800}
            height={600}
            alt={title}
          />
        </div>
        <div className="left-0 top-0 z-20 transform py-8 transition duration-700 ease-out lg:absolute lg:h-full lg:w-full lg:-translate-y-24 lg:bg-accent-1 lg:bg-transparent lg:bg-opacity-50 lg:p-8 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <h3 className="mb-0 text-xl leading-snug text-white">{title}</h3>
          <FormattedDate date={date} />
          {excerpt && <p className="my-4 text-sm text-white">{excerpt}</p>}
          <div
            // href="https://www.cameo.com"
            // rel="nofollow"
            // target="_blank"
            className="inline-flex items-center justify-center rounded-2xl bg-white bg-opacity-60 px-4 py-2 text-sm text-accent-1"
          >
            <ArrowUpRightIcon className="mr-2 h-3 w-3" />
            <span className="mt-0.5 leading-none">cameo.com</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
