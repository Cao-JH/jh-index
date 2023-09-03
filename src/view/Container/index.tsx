import { Outlet } from "react-router-dom";

import SliderBar from "./SliderBar";

export default function Container() {
  return (
    <>
      <div id="container">
        <div className="container-left">{/* 侧边内容，比如日历 */}</div>
        <div className="container-right">
          <div className="top-bar">
            {/* 导航栏 */}
            <SliderBar />
          </div>
          <div className="main">
            {/* 子组件放置的位置 */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
