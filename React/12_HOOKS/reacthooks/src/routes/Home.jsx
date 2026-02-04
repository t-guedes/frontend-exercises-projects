import HookUseEffect from "../components/HookUseEffect";
import HooksUseState from "../components/HooksUseState";
import HookUseReducer from "../components/HookUseReducer";
import { HookUseContext } from "../components/HookUseContext";

import { SomeContext } from "../components/HookUseContext";
import { useContext } from "react";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseEffectLayout from "../components/HookUseEffectLayout";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from "../components/HookCustom";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>Home</h1>
    <HooksUseState />
    <HookUseReducer />
    <HookUseEffect />
    <HookUseContext />
    <h2>useContext</h2>
    <p>Valor do contexto: {contextValue}</p>
    < hr />
    <HookUseRef />  
    <HookUseCallback />
    <HookUseMemo />
    <HookUseEffectLayout />
    <HookUseImperativeHandle />
    <HookCustom />
    
    <hr />

    </div>
  );
};

export default Home;