import { useLayoutEffect, useEffect, useState } from "react";

const HookUseEffectLayout = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");
    setName("Mudou de novo 2!");
  }, []);

  useEffect(() => {
    console.log("3");
    setName("Mudou de novo 3!");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome 1");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useEffectLayout</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseEffectLayout;