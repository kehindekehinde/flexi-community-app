import "./feedpost.css";
import Share from "../share/Share";
import PostTemplate from "../postTemplate/PostTemplate";
import { Posts } from "../../dummyData";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

import {
  getDocs,
  collection,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";

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
