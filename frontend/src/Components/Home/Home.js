import React from "react";
import { Breadcrumb, Layout } from "antd";
import { withRouter } from "react-router-dom";
const { Content } = Layout;

const Home = (props) => {
  return (
    <div>
      <Layout>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 30 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
      </Layout>
    </div>
  );
};

export default withRouter(Home);
