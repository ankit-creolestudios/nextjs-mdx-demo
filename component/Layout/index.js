import React from "react";
import { Layout, PageHeader } from "antd";
import Link from "next/link";
const { Content } = Layout;
const PageLayout = ({ children }) => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title={<Link href="/">NextJs with MDX</Link>}
      />
      <div className="container">{children}</div>
    </>
  );
};

export default PageLayout;
