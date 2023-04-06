import "./feedpost.css";
import Share from "../share/Share";
import PostTemplate from "../postTemplate/PostTemplate";
import { Posts } from "../../dummyData";
const Feedpost = () => {
  return (
    <div className="feedpost">
      <div className="feedpostContainer">
        <Share />
        {Posts.map((p) => (
          <PostTemplate key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feedpost;
