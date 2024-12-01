import { Typography } from "@alfalab/core-components/typography";
import { Skeleton } from "@alfalab/core-components/skeleton";
import { Gap } from "@alfalab/core-components/gap";
import { useEffect, useState } from "react";
import ModalOffer from "./components/ModalOffer/ModalOffer";

const MainPage = () => {
  const [openModalOffer, setOpenModalOffer] = useState(false);

  const closeModalOffer = () => {
    setOpenModalOffer(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModalOffer(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Typography.Title tag="h1">Главная</Typography.Title>
      <Gap size={"m"} />

      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
      </div>

      <ModalOffer
        context="главная страница"
        open={openModalOffer}
        onClose={closeModalOffer}
      />
    </>
  );
};

export default MainPage;
