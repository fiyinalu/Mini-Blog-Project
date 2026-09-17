import type { Post } from '../../types/Post';

const PostList = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: 'Building Better Communities in Tech',
      author: 'Fiyin Akin-Oladiran',
      content:
        'Strong communities help technology products grow by creating spaces where users can learn, share ideas, and support one another.',
      date: 'September 15, 2026',
    },
    {
      id: 2,
      title: 'Why Product Feedback Matters',
      author: 'Ada Nwosu',
      content:
        'Product feedback gives development teams valuable insight into what users need and helps them make better decisions.',
      date: 'September 14, 2026',
    },
    {
      id: 3,
      title: 'Getting Started with TypeScript',
      author: 'Michael Chen',
      content:
        'TypeScript adds static typing to JavaScript and can make React applications easier to maintain as projects become larger.',
      date: 'September 12, 2026',
    },
  ];

  return (
    <section>
      <h2>Latest Posts</h2>

      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.author}</p>
          <p>{post.content.split(' ').slice(0, 12).join(' ')}...</p>
          <p>{post.date}</p>
        </article>
      ))}
    </section>
  );
};

export default PostList;