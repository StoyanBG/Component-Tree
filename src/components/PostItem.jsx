
import PropTypes from 'prop-types';

const PostItem = (props) => {
  const { title, description } = props.post;

  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;
