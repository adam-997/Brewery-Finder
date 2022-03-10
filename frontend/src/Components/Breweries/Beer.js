import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Typography, Row, Col, Avatar, Card } from "antd";
import { baseUrl } from "../../Shared/baseUrl";
import { Breadcrumb } from "antd";

const { Text, Title } = Typography;
const { Content } = Layout;

class Beer extends Component {
  state = {
    beer: this.props.location.state,
    // reviews: [],
  };
  //   componentDidMount() {
  //     const id = this.state.beer.beer.id;
  //     fetch(baseUrl + `/reviews/${id}`)
  //       .then((res) => res.json())
  //       .then((res) => this.setState({ beers: res }));
  //   }
  render() {
    const { beer } = this.state.beer;
    // const beerMap = this.state.beers.map((beer) => {
    //   return (
    //     <Col xs={24} sm={12} lg={8} className="crypto-card" key={beer.id}>
    //       <RenderBeerCard
    //         beer={beer}
    //         breweryName={brewery.name}
    //         beerId={beer.id}
    //         imgUrl={beer.imgUrl}
    //         name={beer.name}
    //         description={beer.info}
    //         breweryImgUrl={brewery.breweryLogoUrl}
    //         type={beer.type}
    //       />
    //     </Col>
    //   );
    // });

    return (
      <>
        <Layout>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 30 }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <NavLink to="/home">Home</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/breweries">Breweries</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{beer.name}</Breadcrumb.Item>
            </Breadcrumb>
          </Content>{" "}
        </Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title level={2}>Beer Details </Title>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          beer Id is: {beer.beerId}
          <br />
          beer name is: {beer.name} <br />
          beer info is: {beer.info} <br />
          beer type is: {beer.type}{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title level={2}>Reviews </Title>
        </div>
      </>
    );
  }
}

export default Beer;
