import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={navigateHandler}>Go to Products Page</button>;
    </>
  );
};

export default Home;
