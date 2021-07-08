import { getInitialProps } from 'react-i18next';
import { BiStar } from 'react-icons/bi';

const rating = props => {
  return (
    <div className="container-rating">
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <span className="normal-text">4.7 ({props.text})</span>
    </div>
  );
};
export default rating;
