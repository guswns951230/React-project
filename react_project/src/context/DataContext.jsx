import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // 유저 정보 ex) {name: "홍길동", profile: null,}
  const [user, setUser] = useState("");

  const value = {
    state: { user },
    action: { setUser },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// DataContext의 값을 가져와서 DataConsumer으로 사용
const { Consuemr: DataConsumer } = DataContext;

export { DataConsumer, DataProvider };
export default DataContext;
