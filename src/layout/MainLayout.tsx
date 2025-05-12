import React from "react";
import classes from "../styles/App.module.scss";
export interface AuxProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: AuxProps) => {
  return <main className={classes.mainContainer}>{children}</main>;
};

export default MainLayout;
