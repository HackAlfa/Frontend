import { Typography } from "@alfalab/core-components/typography";
import { Input } from "@alfalab/core-components/input";
import { Select } from "@alfalab/core-components/select";
import { Button } from "@alfalab/core-components/button";
import { NumberInput } from "@alfalab/core-components/number-input";
import { Checkbox } from "@alfalab/core-components/checkbox";
import { useNavigate } from "react-router";

const UserCard = () => {
  const segmentOptions = [
    { key: "1", content: "Малый бизнес" },
    { key: "2", content: "Средний бизнес" },
    { key: "3", content: "Крупный бизнес" },
  ];

  const roleOptions = [
    { key: "1", content: "ЕИО" },
    { key: "2", content: "Сотрудник" },
  ];

  const methodOptions = [
    { key: "1", content: "SMS" },
    { key: "2", content: "PayControl" },
    { key: "3", content: "КЭП на токене" },
    { key: "4", content: "КЭП в приложении" },
  ];

  const navigate = useNavigate();

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
      <Typography.TitleResponsive tag="h2">Клиент 1</Typography.TitleResponsive>
      <Input
        value="clientId"
        label="ИД пользователя"
        disabled={true}
        block={true}
      />
      <Input
        value="organizationId"
        label="ИД организациии"
        disabled={true}
        block={true}
      />
      <Select
        options={segmentOptions}
        label="Сегмент организации"
        selected={{ key: "2", content: "Средний бизнес" }}
        disabled={true}
        block={true}
      />
      <Select
        options={roleOptions}
        label="Роль уполномоченного лица"
        selected={{ key: "2", content: "Сотрудник" }}
        disabled={true}
        block={true}
      />
      <NumberInput
        value={4545}
        label="Общее количество организаций у уполномоченного лица"
        disabled={true}
        block={true}
      />
      <Select
        options={methodOptions}
        label="Действующий способ подписания"
        selected={{ key: "1", content: "SMS" }}
        disabled={true}
        block={true}
      />
      <Checkbox
        checked={true}
        disabled={true}
        label="Наличие мобильного приложения"
        block={true}
      />
      <Input
        value="Мобайл: 3, Веб: 10"
        label="Подписанные Документы (Базовые)"
        disabled={true}
        block={true}
      />
      <Input
        value="Мобайл: 5, Веб: 6"
        label="Подписанные Документы (Особые)"
        disabled={true}
        block={true}
      />
      <Select
        options={methodOptions}
        label="Уже подключенные способы подписания"
        selected={[
          { key: "1", content: "SMS" },
          { key: "2", content: "PayControl" },
        ]}
        disabled={true}
        block={true}
      />
      <NumberInput
        value={34}
        label="Уже подключенные способы подписания"
        disabled={true}
        block={true}
      />

      <Button
        type="submit"
        view="accent"
        block={true}
        onClick={() => navigate("/main")}
      >
        Войти в приложение
      </Button>
    </div>
  );
};

export default UserCard;
