import { Typography } from "@alfalab/core-components/typography";
import { Gap } from "@alfalab/core-components/gap";
import { Button } from "@alfalab/core-components/button";
import { useEffect, useState } from "react";
import { Modal } from "@alfalab/core-components/modal";
import {
  Confirmation,
  useConfirmation,
} from "@alfalab/core-components/confirmation";
import { Select } from "@alfalab/core-components/select";
import { SuperEllipse } from "@alfalab/core-components/icon-view/super-ellipse";
import { CrossMediumMIcon } from "@alfalab/icons-glyph/CrossMediumMIcon";
import { CheckmarkMIcon } from "@alfalab/icons-glyph/CheckmarkMIcon";
import { Link } from "@alfalab/core-components/link";
import { StarMIcon } from "@alfalab/icons-glyph/StarMIcon";

const InstalmentsPage = () => {
  const variants = [
    { key: "success", content: "Корректный код" },
    { key: "error", content: "Некорректный код" },
    {
      key: "temp-block",
      content: "Сценарий, когда произошла ошибка подписания",
    },
  ];

  const [variant, setVariant] = useState(variants[0]);
  const [shownSuccessScreen, setShownSuccessScreen] = useState(false);
  const [shownErrorScreen, setShownErrorScreen] = useState(false);
  const json = JSON.parse(localStorage.getItem("formData") || "");

  const {
    confirmationState,
    confirmationScreen,
    confirmationBlockSmsRetry,
    setConfirmationState,
    setConfirmationScreen,
  } = useConfirmation();

  const handleInputFinished = () => {
    setTimeout(() => {
      switch (variant.key) {
        case "success":
          setShownSuccessScreen(true);
          setConfirmationState("INITIAL");
          break;
        case "error":
          setConfirmationState("CODE_ERROR");
          break;
        case "temp-block":
          setShownErrorScreen(true);
          setConfirmationScreen("INITIAL");
          break;
        default:
          break;
      }
    }, 1000);
  };

  const handleSmsRetryClick = () => {
    setTimeout(() => {
      setConfirmationState("INITIAL");
    }, 1000);
  };

  const handleTempBlockFinished = () => {
    setConfirmationScreen("INITIAL");
    setConfirmationState("CODE_SENDING");
  };

  const [open, setOpen] = useState(false);

  const mobileAppUrl = "https://alfabank.ru/apps/amobile/";
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShowLink(true); // Устанавливаем состояние в true через 3 секунды после открытия модалки
      }, 5000);

      // Очистка таймера при закрытии модалки
      return () => {
        clearTimeout(timer);
        setShowLink(false); // Сброс состояния при закрытии
      };
    }
  }, [open]);

  return (
    <>
      <Typography.Title tag="h1">Процесс подписания</Typography.Title>
      <Gap size={"m"} />
      <Button view="accent" onClick={() => setOpen(true)}>
        Подписать
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header hasCloser={true} />
        <Modal.Content>
          <Select
            block={true}
            options={variants}
            onChange={({ selected }) => {
              setShownSuccessScreen(false);
              setShownErrorScreen(false);
              setConfirmationState("INITIAL");
              setConfirmationScreen("INITIAL");
              //@ts-expect-error это пример из библиотеки компонентов
              setVariant(selected);
            }}
            selected={variant.key}
            optionsListWidth="field"
          />
          <Gap size={"2xl"} />
          {shownSuccessScreen ? (
            <div
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                height: 266,
              }}
            >
              <Gap size="2xl" />
              <div
                style={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <SuperEllipse
                    size={80}
                    backgroundColor="var(--color-light-status-positive)"
                  >
                    <CheckmarkMIcon style={{ fill: "#fff" }} />
                  </SuperEllipse>

                  <Gap size="m" />

                  <Typography.Text view="primary-medium" weight="bold">
                    Введён корректный код
                  </Typography.Text>

                  <Typography.Text view="primary-medium">
                    <Link
                      view="default"
                      leftAddons={<StarMIcon />}
                      href={
                        json?.props.mobileApp ? "/subscription" : mobileAppUrl
                      }
                      target="_blank"
                    >
                      В приложении подписание в два раза быстрее
                    </Link>
                  </Typography.Text>
                </div>
              </div>
            </div>
          ) : shownErrorScreen ? (
            <div
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                height: 266,
              }}
            >
              <Gap size="2xl" />
              <div
                style={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <SuperEllipse
                    size={80}
                    backgroundColor="var(--color-light-status-negative)"
                  >
                    <CrossMediumMIcon style={{ fill: "#fff" }} />
                  </SuperEllipse>

                  <Gap size="m" />

                  <Typography.Text view="primary-medium" weight="bold">
                    Не удалось подписать
                  </Typography.Text>

                  <Typography.Text view="primary-medium">
                    <Link
                      view="default"
                      leftAddons={<StarMIcon />}
                      href={
                        json?.props.mobileApp ? "/subscription" : mobileAppUrl
                      }
                      target="_blank"
                    >
                      В приложении подписание без возможных ошибок
                    </Link>
                  </Typography.Text>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <Confirmation
                screen={confirmationScreen}
                state={confirmationState}
                alignContent="center"
                blockSmsRetry={confirmationBlockSmsRetry}
                onChangeState={setConfirmationState}
                onChangeScreen={setConfirmationScreen}
                onInputFinished={handleInputFinished}
                onSmsRetryClick={handleSmsRetryClick}
                onTempBlockFinished={handleTempBlockFinished}
                phone="+7 ··· ··· 07 24"
              />
              {showLink && (
                <>
                  <Gap size={"m"} />
                  <Typography.Text view="primary-medium">
                    <Link
                      view="default"
                      leftAddons={<StarMIcon />}
                      href={
                        json?.props.mobileApp ? "/subscription" : mobileAppUrl
                      }
                      target="_blank"
                    >
                      В приложении подписание без ожидания
                    </Link>
                  </Typography.Text>
                </>
              )}
            </div>
          )}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default InstalmentsPage;
