import React, {useState} from "react";
import AssignPropertyEditor from './AssignPropertyEditor'
import LogPropertyEditor from './LogPropertyEditor';

const Config = {
    assign: AssignPropertyEditor,
    log: LogPropertyEditor
  }
  
export default function DynamicRendering() {
    const [activeData, setActiveData] = useState();
  
    const onUpdateCodeData = (data) => {
      // react to data update from dynamic components
    };
  
    const renderPropertyEditor = () => {
      if (activeData && activeData.type !== null && Config[activeData.type]) {
        const PropertyEditor = Config[activeData.type];
        return (<PropertyEditor codeData={activeData} updateData={onUpdateCodeData} />);
      } else {
        return (<em>Select an element type to display.</em>);
      }
    };
  
    const onDisplayAssignEditor = () => {
      setActiveData({ type: "assign", data: { variable: "a", value: "100" } });
    };
  
    const onDisplayLogEditor = () => {
      setActiveData({ type: "log", data: { message: "hello world!" } });
    };
  
    return (
      <div>
        <div>
          <h1>Toolbox</h1>
          <ul>
            <li><button onClick={onDisplayAssignEditor}>Update to ASSIGN</button></li>
            <li><button onClick={onDisplayLogEditor}>Update to LOG</button></li>
          </ul>
        </div>
        <div>
          <h1>Property Editor</h1>
          {renderPropertyEditor()}
        </div>
      </div >
    );
  }
  

//https://blog.projectkenneth.com/dynamic-component-rendering-in-react