import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import CustomBtn from "./components/Button";
import Dismiss from "./components/Alert-2";
import { useState } from 'react';


function App() {
  const [visible, setVisible] = useState(false);
  const listItem = ["Home", "About", "Contact", "Service", "Skills", "FAQ"];
  const listGroupClass = [
    "active",
    "list-group-item-success",
    "list-group-item-danger",
    "list-group-item-secondary",
    "list-group-item-info",
    "list-group-item-primary",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  
  return (
    <>
      <div>
        <ListGroup
          listItem={listItem}
          heading="Navbar"
          listGroupClass={listGroupClass}
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <Alert text="Alert Button"/>
      </div>
        {visible && <Dismiss onClose={()=> setVisible(false)}></Dismiss>}
      <div>
        <CustomBtn color="success" onClick={()=> setVisible(true)}>Click Here</CustomBtn>
      </div>
    </>
  );
}

export default App;

