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
  coverColor: string;
  className?: string;
};

const PostPreview = ({
  title,
  excerpt,
  date,
  slug,
  coverImage,
  coverColor,
  className,
}: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className={classNames("group block xl:h-[90vh]", className)}
    >
      <div
        className="relative mb-3 mr-6 flex h-full max-h-[90vh] w-full flex-col-reverse overflow-hidden transition duration-700 ease-out sm:mb-0 xl:rounded-2xl xl:border xl:border-gray-100 xl:group-hover:translate-x-0 xl:group-hover:translate-y-0 xl:group-hover:opacity-100 xl:group-hover:shadow"
        key={`${title}-${date}`}
      >
        <div
          className={classNames(
            "opacity-1 left-0 top-0 z-10 flex max-w-full items-center justify-center transition duration-700 ease-out xl:absolute xl:h-full xl:w-full xl:blur-0 xl:group-hover:opacity-25 xl:group-hover:blur-sm",
            getBackgroundColors(coverColor)
          )}
        >
          <Image
            className="relative w-[75%] rounded-xl"
            src={coverImage}
            width={1200}
            height={800}
            alt={title}
          />
        </div>
        <div
          className={classNames(
            "left-0 top-0 z-20 transform py-8 transition duration-700 ease-out xl:absolute xl:h-full xl:w-full xl:-translate-y-24 xl:bg-transparent xl:bg-opacity-50 xl:p-8 xl:opacity-0 xl:group-hover:translate-y-0 xl:group-hover:opacity-100",
            getBackgroundColors(coverColor)
          )}
        >
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

function getBackgroundColors(color: string) {
  return {
    ["accent-1"]: "xl:bg-accent-1",
    ["accent-2"]: "xl:bg-accent-2",
    ["accent-3"]: "xl:bg-accent-3",
    ["accent-4"]: "xl:bg-accent-4",
    ["accent-5"]: "xl:bg-accent-5",
    ["accent-6"]: "xl:bg-accent-6",
    ["accent-7"]: "xl:bg-accent-7",
  }[color];
}

export default PostPreview;
