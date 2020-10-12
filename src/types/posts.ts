export interface Post {
  id: string;
  date: string;
  link: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
}

export const isPost = (post: Post | {}): post is Post => {
  return (post as Post).id !== undefined;
};

export type Posts = Post[];
