import { Button } from "@alfalab/core-components/button";
import { Skeleton } from "@alfalab/core-components/skeleton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type BannerProps = {
  centext: string;
};

const Banner = ({ centext }: BannerProps) => {
  const json = localStorage.getItem("formData") || "";

  const navigate = useNavigate();

  const [bannerText, setBannerText] = useState("");
  const [loading, setLoading] = useState(true);
  const backendAddress =
    import.meta.env.BACKEND_ADDRESS || "http://localhost:8010";

  useEffect(() => {
    const fetchBannerText = async () => {
      try {
        const response = await fetch("http://localhost:8010/recomendation/", {
          method: "POST",
          body: JSON.stringify({ ...JSON.parse(json), context: centext }),
        });
        console.log(response);

        console.log(json);

        const data = await response.json();
        console.log(data);

        setBannerText(`Мы реакомендуем Вам ${data.prediction}`);
      } catch (error) {
        console.error("Ошибка при получении текста баннера:", error);
        setBannerText("Подключите более безопасный метод подписания");
      } finally {
        setLoading(false);
      }
    };

    fetchBannerText();
  }, []);

  return (
    <Skeleton visible={loading}>
      <Button
        view="accent"
        block={true}
        style={{ textAlign: "left" }}
        onClick={() => navigate("/subscription")}
      >
        {bannerText}
      </Button>
    </Skeleton>
  );
};

export default Banner;
