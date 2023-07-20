import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

HomeScreen.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default function HomeScreen({ products }) {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
