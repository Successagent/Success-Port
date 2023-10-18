import { useState } from "react";
import Home from "./Pages/Home/Home";
import { Modal } from "./Components";

function App() {
  const [visible, setVisible] = useState(false);
  const [project, setProject] = useState(null);

  const toggleVisible = (project) => {
    setVisible(!visible);
    setProject(project);
  };

  return (
    <>
      <Home toggleVisible={toggleVisible} />
      {visible && <Modal project={project} toggleVisible={toggleVisible} />}
    </>
  );
}

export default App;
