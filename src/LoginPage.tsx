import { Typography } from "@alfalab/core-components/typography";
import { Gap } from "@alfalab/core-components/gap";
import UserCard from "./components/userCard/UserCard";

const LoginPage = () => {
  return (
    <>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Typography.Title tag="h1">
          Страница входа (под каким пользователем залогиниться)
        </Typography.Title>
        <Gap size={"m"} />
        <div
          style={{
            display: "flex",
            columnGap: 10,
            rowGap: 30,
            flexWrap: "wrap",
          }}
        >
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
