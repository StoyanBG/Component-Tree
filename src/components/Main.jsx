import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Content from './Content';

const Main = (props) => {
  const { posts } = props;

  return (
    <main className="main">
      <Sidebar />
      <Content posts={posts} />
    </main>
  );
};

Main.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Main;
