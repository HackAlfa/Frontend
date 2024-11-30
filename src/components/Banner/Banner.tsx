import { Button } from "@alfalab/core-components/button";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <Button
      view="accent"
      block={true}
      style={{ textAlign: "left" }}
      onClick={() => navigate("/subscripe")}
    >
      Братан, проверь новый метод подписания!
    </Button>
  );
};

export default Banner;
