  import PropTypes from 'prop-types';
import PostList from './PostList';

const Content = (props) => {
  const { posts } = props;

  return <PostList posts={posts} />;
};

Content.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Content;
