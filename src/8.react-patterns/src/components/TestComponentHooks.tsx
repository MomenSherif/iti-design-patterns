// import { useCounter } from '../hooks/useCounter';

import axios from 'axios';
import { useQuery } from '../hooks/useQuery';
import { useStepper } from '../hooks/useStepper';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function TestComponentHooks() {
  // const { count, increment, decrement } = useCounter();

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<Post[]>(() =>
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.data),
  );

  if (isLoading) return <div>Loading....</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>TestComponent Hooks</h1>
      {/*
      {posts?.map(post => (
        <div
          key={post.id}
          style={{ borderBottom: '1px solid #ccc', paddingBottom: 20 }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))} */}

      {/* <button onClick={decrement}>-</button>
      <span>Count {count}</span>
      <button onClick={increment}>+</button> */}

      {posts && posts.length > 0 ? (
        <PostPreviewer posts={posts} />
      ) : (
        <div>No posts</div>
      )}
    </div>
  );
}

const PostPreviewer = ({ posts }: { posts: Post[] }) => {
  const { current: post, next, prev } = useStepper(posts);
  return (
    <>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: 20 }}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>

      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};
