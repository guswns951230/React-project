import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    profile: null,
  });

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
