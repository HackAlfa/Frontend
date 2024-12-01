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
  let json = JSON.parse(localStorage.getItem("formData") || "");
  json = { ...json, centext: context };
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const [modalText, setModalText] = useState("");
  const backendAddress =
    import.meta.env.BACKEND_ADDRESS || "http://localhost:8010";

  useEffect(() => {
    const fetchModalText = async () => {
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

        setModalText(data.text);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при получении текста модалки:", error);
        setLoading(false);
      }
    };

    fetchModalText();
  }, []);

  return (
    <Modal open={open && !loading} onClose={onClose}>
      <Skeleton visible={loading}>
        <Modal.Header
          title={"Братан, проверь новый метод подписания!"}
          hasCloser={true}
        />
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
