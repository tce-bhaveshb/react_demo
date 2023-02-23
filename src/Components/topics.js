import "bootstrap/dist/js/bootstrap.bundle.js";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";

const Dropdown_menu = () => {
  return (
    <div className="btn-group dropstart">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">Topics</Dropdown.Toggle>
        <Dropdown.Menu style={{ height: "550px", overflowY: "scroll" }}>
        <LinkContainer to="/FunctionalComp"><Dropdown.Item>FunctionalComp</Dropdown.Item></LinkContainer>
        <LinkContainer to="/Props"><Dropdown.Item>Props</Dropdown.Item></LinkContainer>
        <LinkContainer to="/Event"><Dropdown.Item>Event</Dropdown.Item></LinkContainer>
        <LinkContainer to="/Form"><Dropdown.Item>Form</Dropdown.Item></LinkContainer>
        <LinkContainer to="/Hook"><Dropdown.Item>Hook</Dropdown.Item></LinkContainer>
        <LinkContainer to="/List"><Dropdown.Item>List</Dropdown.Item></LinkContainer>
        <LinkContainer to="/Counter"><Dropdown.Item>Counter</Dropdown.Item></LinkContainer>
        <LinkContainer to="/FetchGet"><Dropdown.Item>FetchGet</Dropdown.Item></LinkContainer>
        <LinkContainer to="/FetchPost"><Dropdown.Item>FetchPost</Dropdown.Item></LinkContainer>
        <LinkContainer to="/LandingPage"><Dropdown.Item>LandingPage</Dropdown.Item></LinkContainer>
        <LinkContainer to="/TeacherLogin"><Dropdown.Item>TeacherLogin</Dropdown.Item></LinkContainer>
        <LinkContainer to="/AdminLogin"><Dropdown.Item>AdminLogin</Dropdown.Item></LinkContainer>
        <LinkContainer to="/HomePage"><Dropdown.Item>HomePage</Dropdown.Item></LinkContainer>
        <LinkContainer to="/TableData"><Dropdown.Item>TableData</Dropdown.Item></LinkContainer>
        <LinkContainer to="/Axios"><Dropdown.Item>Axios</Dropdown.Item></LinkContainer>
        <LinkContainer to="/SearchFiler"><Dropdown.Item>SearchFiler</Dropdown.Item></LinkContainer>
        <LinkContainer to="/Conditionals"><Dropdown.Item>Conditionals</Dropdown.Item></LinkContainer>
        <LinkContainer to="/OnClick"><Dropdown.Item>OnClick</Dropdown.Item></LinkContainer>
        <LinkContainer to="/DynamicDemo"><Dropdown.Item>DynamicDemo</Dropdown.Item></LinkContainer>
        <LinkContainer to="/UseContext"><Dropdown.Item>UseContext</Dropdown.Item></LinkContainer>
        <LinkContainer to="/BindComponent"><Dropdown.Item>BindComponent</Dropdown.Item></LinkContainer>
        <LinkContainer to="/DynamicRendering"><Dropdown.Item>DynamicRendering</Dropdown.Item></LinkContainer>
        <LinkContainer to="/UseEffect"><Dropdown.Item>UseEffect</Dropdown.Item></LinkContainer>
        <LinkContainer to="/ReactTransitions"><Dropdown.Item>ReactTransitions</Dropdown.Item></LinkContainer>
        <LinkContainer to="/OneWayDataBinding"><Dropdown.Item>OneWayDataBinding</Dropdown.Item></LinkContainer>
        <LinkContainer to="/TwoWayDataBinding"><Dropdown.Item>TwoWayDataBinding</Dropdown.Item></LinkContainer>
        <LinkContainer to="/XMLHttpReq"><Dropdown.Item>XMLHttpReq</Dropdown.Item></LinkContainer>
        <LinkContainer to="/ExcelData"><Dropdown.Item>ExcelData</Dropdown.Item></LinkContainer>
        <LinkContainer to="/StudentEntry"><Dropdown.Item>StudentEntry</Dropdown.Item></LinkContainer>
        <LinkContainer to="/PackagesEntry"><Dropdown.Item>PackagesEntry</Dropdown.Item></LinkContainer>
        
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Dropdown_menu;
