import { BiStar } from 'react-icons/bi';

const rating = () => {
  return (
    <div className="container-rating horizon-left-small">
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <span className="normal-text">4.7 (rating)</span>
    </div>
  );
};
export default rating;
