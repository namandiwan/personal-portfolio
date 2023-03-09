import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { testimonials, meta } from "../../content_option";

export const Testimonials = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Testimonials | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Testimonials </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {testimonials.map((data, i) => {
          return (
            <Row className="sec_sp">
              <Col lg="5">
                <h3 className="color_sec py-4">{data.name}</h3>
                <Row><h5 className="color_sec py-4">{data.title}</h5></Row>
              </Col>
              <Col lg="7" className="d-flex align-items-center">
                <div style={{textAlign: "justify"}}>
                  <p>{data.description}</p>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </HelmetProvider>
  );
};
