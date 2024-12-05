import React from "react";
import Search from "../Component/Search";
import IntroPost from "../Component/IntroPost";
import Blogs from "../Component/Blogs";

function Home() {
  return (
    <div className=" p-[7px] md:p-[20px]">
      {/*Search */}
      <Search />
      {/*IntroPost*/}
      <IntroPost />
      {/*Blog*/}
      <Blogs />
      {/* Footer
      <Footer /> */}
    </div>
  );
}

export default Home;
