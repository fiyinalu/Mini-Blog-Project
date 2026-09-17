import type { Post as PostType } from '../../types/Post';

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const preview = post.content.split(' ').slice(0, 12).join(' ');

  return (
    <article>
      <h3>{post.title}</h3>
      <p>By {post.author}</p>
      <p>{preview}...</p>
      <p>{post.date}</p>
    </article>
  );
};

export default Post;