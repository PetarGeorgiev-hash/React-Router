import { Link } from "react-router-dom"

const Home = () => {
  return (
      <>
          <h1>Home</h1>
      <Link to="/products">Go to Products Page</Link>;
    </>
  );
};

export default Home;
