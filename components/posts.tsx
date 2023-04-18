import Post from "../interfaces/post";
import PostPreview from "./post-preview";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <>
      <section className="pt-8">
        <div className="grid grid-cols-2 gap-6">
          <PostPreview {...posts[0]} />
          <PostPreview {...posts[1]} />
        </div>
      </section>
      <section className="pt-8">
        <div className="grid grid-cols-1 gap-6">
          <PostPreview {...posts[0]} />
        </div>
      </section>
      <section className="pt-8">
        <div className="grid grid-cols-4 gap-6">
          <PostPreview {...posts[0]} />
          <PostPreview
            {...posts[1]}
            className={
              "col-span-2 col-start-[span_3] col-end-[span_3] row-start-[span_2] row-end-[span_2] max-h-[100vh]"
            }
            style={{
              gridArea: "span 2/span 3/span 2/span 3",
            }}
          />
          <PostPreview {...posts[2]} />
        </div>
      </section>
    </>
  );
};

export default Posts;
