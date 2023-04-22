import Post from "../interfaces/post";
import PostPreview from "./post-preview";
import classNames from "classnames";

import styles from "./posts.module.css";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <>
      <section className="grid gap-[1.5vw] pt-8">
        <div className={classNames("grid gap-[1.5vw]", styles.grid2Columns)}>
          <PostPreview {...posts[0]} className={styles.featured} />
          <PostPreview {...posts[1]} />
          <PostPreview {...posts[0]} />
        </div>
        <div
          className={classNames(
            "grid gap-y-[1.5vw] lg:gap-[1.5vw]",
            styles.grid4Columns
          )}
        >
          <PostPreview
            {...posts[0]}
            className={classNames("lg:h-auto", styles.details)}
          />
          <PostPreview
            {...posts[1]}
            className={classNames(
              "col-span-2 col-start-[span_3] col-end-[span_3] row-start-[span_2] row-end-[span_2] max-h-[100vh]",
              styles.showcase
            )}
          />
          <PostPreview
            {...posts[2]}
            className={classNames("lg:h-auto", styles.details)}
          />
        </div>
      </section>
    </>
  );
};

export default Posts;
