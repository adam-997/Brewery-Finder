import React, { Component, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Shared/baseUrl";
import {
  Breadcrumb,
  Comment,
  Layout,
  Typography,
  Avatar,
  Modal,
  Button,
  Row,
  Col,
} from "antd";
import PostReviews from "../PostForms/PostReview";
import avatar from "../../image/avatar.png";

const { Text, Title } = Typography;
const { Content } = Layout;

function RenderReviewCard({
  review,
  reviewTitle,
  reviewId,
  description,
  rating,
}) {
  return (
    <Comment
      author={<a>Beer Lover</a>}
      avatar={<Avatar src={avatar} alt={"Review id: " + reviewId} />}
      content={<p>{description}</p>}
      datetime={
        <Text style={{ fontWeight: "bold" }}>
          {" "}
          {reviewTitle + " | Rating: " + rating + " / 5"}
        </Text>
      }
    />
  );
}

class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: this.props.location.state,
      reviews: [],
    };
  }

  updateReviews = (review) => {
    this.setState({
      reviews: [...this.state.reviews, review],
    });
  };

  componentDidMount() {
    const id = this.state.beer.beer.beerId;
    fetch(baseUrl + `/reviews/${id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ reviews: res }));
  }
  render() {
    const { beer } = this.state.beer;
    const reviewsMap = this.state.reviews.map((review) => {
      return (
        <Col xs={24} sm={12} lg={8} className="crypto-card" key={review.id}>
          <RenderReviewCard
            review={review}
            reviewTitle={review.name}
            reviewId={review.reviewsId}
            imgUrl={beer.imgUrl}
            name={beer.name}
            description={review.description}
            rating={review.rating}
          />
        </Col>
      );
    });

    return (
      <>
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
            <Title level={2}>{beer.name} </Title>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Row>
              <Col>
                <img
                  src={beer.imgUrl}
                  height="200"
                  padding="200"
                  style={{ justifyContent: "left" }}
                />{" "}
              </Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Col span={18}>
                  <Text strong>{beer.type}</Text> <br />
                  {beer.info}
                  <br />
                  <Text strong>{beer.abv}% ABV</Text> <br />
                </Col>
              </div>
            </Row>
          </div>
        </>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title level={2}>Reviews for {beer.name} </Title>
        </div>
        <div
          className="crypto-card"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            {" "}
            {reviewsMap}
            <PostReviews
              beerId={beer.beerId}
              updateReviews={this.updateReviews}
            />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Beer);
