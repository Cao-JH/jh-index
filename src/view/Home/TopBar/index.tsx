import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { UrlObject } from "../type.tsx"; // 引入接口
import "./index.scss"; // 引入样式

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // 控制菜单显示
  const open = Boolean(anchorEl);

  // 打开菜单
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const engineArr: Array<UrlObject> = [
    { label: "百度", engineUrl: "baidu.com/s?wd=" },
    { label: "谷歌", engineUrl: "google.com/search?q=" },
    { label: "必应", engineUrl: "bing.com/search?q=" },
  ];

  const [currentUrl, setCurrentUrl] = useState<null | String>(
    "baidu.com/s?wd="
  ); // 当前URL
  const [currentLabel, setCurrentLabel] = useState<null | String>("百度"); // 当前URL

  // 关闭菜单
  const handleClose = (value?: UrlObject) => {
    if (value) {
      setCurrentUrl(value.engineUrl);
      setCurrentLabel(value.label);
    }
    console.log(currentUrl);
    setAnchorEl(null);
  };

  return (
    <>
      <div id="top-bar">
        <div className="input-container">
          <div className="input-left">
            <span onClick={handleClick}>{currentLabel}</span>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose()}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {engineArr.map((engine: UrlObject, index) => {
                return (
                  <MenuItem onClick={() => handleClose(engine)} key={index}>
                    {engine.label}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
          <div className="input-center">
            <input type="text" placeholder="开始你的搜索" />
          </div>
          <div className="input-right">
            <div>
              <span>搜索</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
