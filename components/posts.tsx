import Post from "../interfaces/post";
import PostPreview from "./post-preview";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <>
      <section className="grid gap-[1.5vw] pt-8">
        <div
          className="grid gap-[1.5vw]"
          style={{ gridAutoColumns: "1fr", gridTemplateColumns: "1fr 1fr" }}
        >
          <PostPreview
            {...posts[0]}
            style={{
              gridArea: "span 1/span 2/span 1/span 2",
            }}
          />
          <PostPreview
            {...posts[1]}
            style={{
              gridArea: "span 1/span 1/span 1/span 1",
            }}
          />
          <PostPreview
            {...posts[0]}
            style={{
              gridArea: "span 1/span 1/span 1/span 1",
            }}
          />
        </div>
        <div
          className="grid gap-[1.5vw]"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "auto",
          }}
        >
          <PostPreview
            {...posts[0]}
            className="h-auto"
            style={{
              gridArea: "span 1/span 1/span 1/span 1",
            }}
          />
          <PostPreview
            {...posts[1]}
            className={
              "col-span-2 col-start-[span_3] col-end-[span_3] row-start-[span_2] row-end-[span_2] max-h-[100vh]"
            }
            style={{
              gridArea: "span 2/span 3/span 2/span 3",
            }}
          />
          <PostPreview
            {...posts[2]}
            className="h-auto"
            style={{ gridArea: "span 1/span 1/span 1/span 1" }}
          />
        </div>
      </section>
    </>
  );
};

export default Posts;
