type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  coverColor: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
