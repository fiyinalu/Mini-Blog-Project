import './Post.css';
import type { Post as PostType } from '../../types/Post';

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const preview = post.content.split(' ').slice(0, 12).join(' ');
  const isHighlighted = post.author === 'Victor Akin-Oladiran';

  return (
    <article
      className={`post-card ${isHighlighted ? 'post-card--highlighted' : ''}`}
    >
      <h3>{post.title}</h3>

      <p className="post-author">By {post.author}</p>

      <p className="post-preview">{preview}...</p>

      <p
        className="post-date"
        style={{ fontStyle: 'italic' }}
      >
        {post.date}
      </p>
    </article>
  );
};

export default Post;