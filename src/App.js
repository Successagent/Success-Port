import { useState } from "react";
import Home from "./Pages/Home/Home";
import { Modal } from "./Components";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);

  return (
    <>
      <Home toggleVisible={toggleVisible} />
      {visible && <Modal toggleVisible={toggleVisible} />}
    </>
  );
}

export default App;
