import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [user, setUser] = useState("");
  // 접속시 설정된 값으로 login된 상태로 나와서 주석처리
  // useState({
  //   name: "홍길동",
  //   profile: null,
  // });

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
