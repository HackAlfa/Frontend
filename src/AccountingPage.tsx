import { Typography } from "@alfalab/core-components/typography";
import { Skeleton } from "@alfalab/core-components/skeleton";
import { Gap } from "@alfalab/core-components/gap";
import Banner from "./components/Banner/Banner";

const AccountingPage = () => {
  return (
    <>
      <Typography.Title tag="h1">Бухгалтерия</Typography.Title>
      <Gap size={"m"} />
      <Banner />
      <Gap size="2xl" />
      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
        <Skeleton visible={true} style={{ width: 300, height: 200 }}></Skeleton>
      </div>
    </>
  );
};

export default AccountingPage;
