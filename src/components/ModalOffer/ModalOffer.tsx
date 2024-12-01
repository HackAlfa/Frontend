import { Gap } from "@alfalab/core-components/gap";
import { Modal } from "@alfalab/core-components/modal";
import { Button } from "@alfalab/core-components/button";
import { Typography } from "@alfalab/core-components/typography";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Skeleton } from "@alfalab/core-components/skeleton";

type ModalOfferProps = {
  open: boolean;
  onClose: () => void;
  context: string;
};

const ModalOffer = ({ open, onClose, context }: ModalOfferProps) => {
  const json = localStorage.getItem("formData") || "";
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const [modalText, setModalText] = useState("");
  const [titleText, setTitleText] = useState("");
  const backendAddress =
    import.meta.env.BACKEND_ADDRESS || "http://localhost:8010";

  useEffect(() => {
    const fetchBannerText = async () => {
      try {
        const response = await fetch("http://localhost:8010/recomendation/", {
          method: "POST",
          body: json,
        });
        console.log(response);

        console.log(json);

        const data = await response.json();
        console.log(data);

        setTitleText(`Мы реакомендуем Вам ${data.prediction}`);
        setModalText("Подключите более безопасный метод подписания");
      } catch (error) {
        console.error("Ошибка при получении текста баннера:", error);
        setTitleText(`Мы реакомендуем Вам сменить метод подписания`);
        setModalText("Подключите более безопасный метод подписания");
      } finally {
        setLoading(false);
      }
    };

    fetchBannerText();
  }, []);

  return (
    <Modal open={open && !loading} onClose={onClose}>
      <Skeleton visible={loading}>
        <Modal.Header title={titleText} hasCloser={true} />
        <Modal.Content>
          <Typography.Text weight="regular">{modalText}</Typography.Text>
          <Gap size={"2xl"} />
          <Button view="accent" onClick={() => navigate("/subscription")}>
            Посмотреть
          </Button>
        </Modal.Content>
      </Skeleton>
    </Modal>
  );
};

export default ModalOffer;
