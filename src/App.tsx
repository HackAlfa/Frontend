import { useState } from "react";
import { Tabs, Tab } from "@alfalab/core-components/tabs";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import MainPage from "./MainPage";
import AccountingPage from "./AccountingPage";
import SubscriptionPage from "./SubscriptionPage";
import { Gap } from "@alfalab/core-components/gap";
import { Button } from "@alfalab/core-components/button";
import PaymentsPage from "./PaymentsPage";
import InstalmentsPage from "./InstalmentsPage";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const TABS = [
    { title: "Главная", id: "main" },
    { title: "Бухгалтерия", id: "accounting" },
    { title: "Платежи", id: "payments" },
    { title: "Процесс подписания", id: "instalments" },
    { title: "Способы подписания", id: "subscription" },
  ];

  const getActiveTabId = () => {
    if (location.pathname.includes("accounting")) return "accounting";
    if (location.pathname.includes("payments")) return "payments";
    if (location.pathname.includes("instalments")) return "instalments";
    if (location.pathname.includes("subscription")) return "subscription";
    return "main";
  };

  const [selectedId, setSelectedId] = useState(getActiveTabId());
  //@ts-expect-error пример из UIKit
  const handleChange = (event, { selectedId }) => {
    setSelectedId(selectedId);
    navigate("/" + selectedId);
  };

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Tabs
          selectedId={selectedId}
          onChange={handleChange}
          textStyle={"headline-system-small"}
        >
          {TABS.slice(0, TABS.length).map((item) => (
            <Tab title={item.title} id={item.id} key={item.id} />
          ))}
        </Tabs>
        <Button size={"s"}>Выйти</Button>
      </div>

      <Gap size={"m"} />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/accounting" element={<AccountingPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/instalments" element={<InstalmentsPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
    </div>
  );
}

export default App;
