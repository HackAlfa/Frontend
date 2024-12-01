import { Typography } from "@alfalab/core-components/typography";
import { Gap } from "@alfalab/core-components/gap";
import UserCard from "./components/userCard/UserCard";

const json = [
  {
    clientId: "client_948749",
    organizationId: "org_1411527",
    segment: "Крупный бизнес",
    role: "Сотрудник",
    organizations: 4,
    currentMethod: "SMS",
    mobileApp: true,
    signatures: {
      common: {
        mobile: 6,
        web: 14,
      },
      special: {
        mobile: 0,
        web: 0,
      },
    },
    availableMethods: [
      "PayControl",
      "SMS",
      "КЭП в приложении",
      "КЭП на токене",
    ],
    claims: 0,
    target: "PayControl",
    context: "бухгалтерия",
  },
  {
    clientId: "cl1235",
    organizationId: "org_7456",
    segment: "Крупный бизнес",
    role: "ЕИО",
    organizations: 7,
    currentMethod: "SMS",
    mobileApp: true,
    signatures: {
      common: {
        mobile: 3,
        web: 10,
      },
      special: {
        mobile: 5,
        web: 6,
      },
    },
    availableMethods: [
      "PayControl",
      "SMS",
      "КЭП в приложении",
      "КЭП на токене",
    ],
    claims: 0,
    context: "бухгалтерия",
  },
  {
    clientId: "client_356787",
    organizationId: "org_734053",
    segment: "Крупный бизнес",
    role: "ЕИО",
    organizations: 72,
    currentMethod: "SMS",
    mobileApp: true,
    signatures: {
      common: {
        mobile: 100,
        web: 18,
      },
      special: {
        mobile: 100,
        web: 9,
      },
    },
    availableMethods: [
      "PayControl",
      "SMS",
      "КЭП в приложении",
      "КЭП на токене",
    ],
    claims: 0,
    context: "главная страница",
  },
];

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
          {json.map((j, i) => {
            return <UserCard key={i} {...j} />;
          })}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
