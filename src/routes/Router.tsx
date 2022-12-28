import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import InfiniteScroll from "../pages/InfiniteScrollPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/infiniteScroll" element={<InfiniteScroll />} />
    </Routes>
  );
}

export default Router;
