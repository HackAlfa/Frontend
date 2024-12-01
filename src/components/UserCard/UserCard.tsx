import { Typography } from "@alfalab/core-components/typography";
import { Input } from "@alfalab/core-components/input";
import { Select } from "@alfalab/core-components/select";
import { Button } from "@alfalab/core-components/button";
import { NumberInput } from "@alfalab/core-components/number-input";
import { Checkbox } from "@alfalab/core-components/checkbox";
import { useNavigate } from "react-router";

// type segmentProps = "Малый бизнес" | "Средний бизнес" | "Крупный бизнес";

// type roleProps = "ЕИО" | "Сотрудник";

// type currentMethodProps =
//   | "SMS"
//   | "PayControl"
//   | "КЭП на токене"
//   | "КЭП в приложении";

type documentCount = {
  mobile: number; // Количество подписанных документов в мобильном приложении
  web: number; // Количество подписанных документов в вебе
};

type signaturesProps = {
  common: documentCount;
  special: documentCount;
};

// type AvailableMethodProps =
//   | "SMS"
//   | "PayControl"
//   | "КЭП на токене"
//   | "КЭП в приложении";

type UserCardProps = {
  clientId: string; // ИД пользователя
  organizationId: string; // ИД организациии
  segment: string; // Сегмент организации: "Малый бизнес", "Средний бизнес", "Крупный бизнес"
  role: string; // Роль уполномоченного лица: "ЕИО", "Сотрудник"
  organizations: number; // Общее количество организаций у уполномоченного лица: 1..300
  currentMethod: string; // Действующий способ подписания."SMS", "PayControl", "КЭП на токене", "КЭП в приложении"
  mobileApp: boolean; // Наличие мобильного приложения
  signatures: signaturesProps;
  availableMethods: string[]; // Уже подключенные способы подписания."SMS", "PayControl", "КЭП на токене", "КЭП в приложении"
  claims: number;
};

const UserCard = (props: UserCardProps) => {
  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const jsonData = {
      props,
    };
    localStorage.setItem("formData", JSON.stringify(jsonData.props));
    navigate("/main");
  };

  return (
    <div
      style={{
        width: 400,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Typography.TitleResponsive tag="h2">
        {`Клиент ${props.clientId}`}
      </Typography.TitleResponsive>
      <Input
        value={props.clientId}
        label="ИД пользователя"
        disabled={true}
        block={true}
      />
      <Input
        value={props.organizationId}
        label="ИД организациии"
        disabled={true}
        block={true}
      />
      <Input
        label="Сегмент организации"
        value={props.segment}
        disabled={true}
        block={true}
      />
      <Input
        label="Роль уполномоченного лица"
        value={props.role}
        disabled={true}
        block={true}
      />
      <NumberInput
        value={props.organizations}
        label="Общее количество организаций у уполномоченного лица"
        disabled={true}
        block={true}
      />
      <Input
        label="Действующий способ подписания"
        value={props.currentMethod}
        disabled={true}
        block={true}
      />
      <Checkbox
        checked={props.mobileApp}
        disabled={true}
        label="Наличие мобильного приложения"
        block={true}
      />
      <Input
        value={`Мобайл: ${props.signatures.common.mobile}, Веб: ${props.signatures.common.web}`}
        label="Подписанные Документы (Базовые)"
        disabled={true}
        block={true}
      />
      <Input
        value={`Мобайл: ${props.signatures.special.mobile}, Веб: ${props.signatures.special.web}`}
        label="Подписанные Документы (Особые)"
        disabled={true}
        block={true}
      />
      <Select
        options={[]}
        label="Уже подключенные способы подписания"
        selected={props.availableMethods.map((a, i) => {
          return { key: String(i), content: a };
        })}
        disabled={true}
        block={true}
      />
      <NumberInput
        value={props.claims}
        label="Уже подключенные способы подписания"
        disabled={true}
        block={true}
      />

      <Button type="submit" view="accent" block={true} onClick={handleSubmit}>
        Войти в приложение
      </Button>
    </div>
  );
};

export default UserCard;
