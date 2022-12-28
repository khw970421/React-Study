import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import InfiniteScroll from "../pages/InfiniteScrollPage";
import BtnCount from "../pages/BtnCountPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/infiniteScroll" element={<InfiniteScroll />} />
      <Route path="/btnCount" element={<BtnCount />} />
    </Routes>
  );
}

export default Router;
