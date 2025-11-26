import { createContext, useContext, useState } from "react";

const ServersContext = createContext();

export const useServers = () => useContext(ServersContext);

export const ServersProvider = ({ children }) => {
  const [servers, setServers] = useState([]);  

  const addServer = (server) => {
    setServers((prev) => [
      ...prev,
      { id: Date.now(), ...server },      
    ]);
  };

  return (
    <ServersContext.Provider value={{ servers, addServer }}>
      {children}
    </ServersContext.Provider>
  );
};
