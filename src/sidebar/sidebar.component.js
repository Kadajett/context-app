import React from "react";
import classNames from "classnames";
import SidebarButton from "./sidebarButton.component";
import { SidebarConsumer } from "./sidebar.context";
import { IoIosMenu, GiSkullCrossedBones } from "react-icons/all";

import "./sidebar.scss";

function RenderButtons({ buttons }) {
  
  return (
    <ul className="SidebarList">
      {buttons.map(({ copy, path }) => <SidebarButton copy={copy} path={path} />)}
    </ul>
  );
}

function Icon({ isOpen }) {
  return isOpen ? <GiSkullCrossedBones /> : <IoIosMenu />;
}

export default function SideBar({ buttons = [] }) {
  return (
    <SidebarConsumer>
      {({ isOpen, setIsOpen }) => {
        return (
          <div
            className={classNames({
              SidebarContainer: true,
              isOpen
            })}
          >
            <div
              className="SidebarIcon"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {" "}
              <Icon isOpen={isOpen} />{" "}
            </div>
            <RenderButtons buttons={buttons} />
          </div>
        );
      }}
    </SidebarConsumer>
  );
}
