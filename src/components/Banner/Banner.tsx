import { Button } from "@alfalab/core-components/button";
import { Skeleton } from "@alfalab/core-components/skeleton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type BannerProps = {
  centext: string;
};

const Banner = ({ centext }: BannerProps) => {
  let json = JSON.parse(localStorage.getItem("formData") || "");
  json = { ...json, centext: centext };

  const navigate = useNavigate();

  const [bannerText, setBannerText] = useState("");
  const [loading, setLoading] = useState(true);
  const backendAddress =
    import.meta.env.BACKEND_ADDRESS || "http://localhost:8010";

  useEffect(() => {
    const fetchBannerText = async () => {
      try {
        const response = await fetch(backendAddress + "/recomendation/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(json),
        });
        console.log(response);

        const data = await response.json();
        console.log(data);

        setBannerText(data.text);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при получении текста баннера:", error);
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
