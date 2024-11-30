import { Gap } from "@alfalab/core-components/gap";
import { Modal } from "@alfalab/core-components/modal";
import { Button } from "@alfalab/core-components/button";
import { Typography } from "@alfalab/core-components/typography";
import { useNavigate } from "react-router";

type ModalOfferProps = {
  open: boolean;
  onClose: () => void;
};

const ModalOffer = ({ open, onClose }: ModalOfferProps) => {
  const navigate = useNavigate();

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header
        title={"Братан, проверь новый метод подписания!"}
        hasCloser={true}
      />
      <Modal.Content>
        <Typography.Text weight="regular">
          Попробуй наш суперпупердумпемегагига метод
        </Typography.Text>
        <Gap size={"2xl"} />
        <Button view="accent" onClick={() => navigate("/subscripe")}>
          Посмотреть
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default ModalOffer;
