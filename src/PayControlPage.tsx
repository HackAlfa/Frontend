import { Typography } from "@alfalab/core-components/typography";
import { Skeleton } from "@alfalab/core-components/skeleton";
import { Gap } from "@alfalab/core-components/gap";

const PayControlPage = () => {
  return (
    <>
      <Typography.Title tag="h1">
        Приложение Альфа-бизнес (PayControl)
      </Typography.Title>
      <Gap size={"m"} />
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

export default PayControlPage;
