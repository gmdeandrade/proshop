import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

export default function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {error ? (
        <Message variant="danger">{error.message}</Message>
      ) : isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}
