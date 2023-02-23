import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Service from './service'
import About from './about'
import Props from '../Pages/Props';
import Event from '../Pages/Event';
import Form from '../Pages/Form';
import Hook from '../Pages/Hook';
import List from '../Pages/List';
import Counter from '../Pages/Counter';
import FetchGet from '../Pages/FetchGet';
import FetchPost from '../Pages/FetchPost';
import Axios from '../Pages/Axios';
import SearchFiler from '../Pages/SearchFilter';
import Conditionals from '../Pages/Conditionals';
import OneWayDataBinding from '../Pages/OneWayDataBinding';
import TwoWayDataBinding from '../Pages/TwoWayDataBinding';
import UseContext from '../Pages/UseContext';
import DynamicRendering from '../Pages/DynamicRendering';
import OnClick from '../Pages/OnClick';
import BindComponent from '../Pages/BindComponent';
import FunctionalComp from '../Pages/FunctionalComp';
import UseEffect from '../Pages/UseEffect';
import XMLHttpReq from '../Pages/XMLHttpReq';
import DynamicDemo from '../Pages/DynamicDemo';
import ReactTransitions from '../Pages/ReactTransitions';
import ExcelData from '../Pages/ExcelData';
import TableData from '../Pages/TableData';
import TeacherLogin from '../Pages/TeacherLogin';
import AdminLogin from '../Pages/AdminLogin';
import HomePage from '../Pages/HomePage';
import LandingPage from '../Pages/LandingPage';
import StudentEntry from '../Pages/StudentEntry';
import PackagesEntry from '../Pages/PackagesEntry';




export default function IndexPages() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/about" element={<About />} />
                <Route path="/Props" element={<Props />} />
                <Route path="/Event" element={<Event />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/Hook" element={<Hook />} />
                <Route path="/List" element={<List />} />
                <Route path="/Counter" element={<Counter />} />
                <Route path="/FetchGet" element={<FetchGet />} />
                <Route path="/FetchPost" element={<FetchPost />} />
                <Route path="/LandingPage" element={<LandingPage />} />
                <Route path="/TeacherLogin" element={<TeacherLogin />} />
                <Route path="/AdminLogin" element={<AdminLogin />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/TableData" element={<TableData />} />
                <Route path="/Axios" element={<Axios />} />
                <Route path="/SearchFiler" element={<SearchFiler />} />
                <Route path="/Conditionals" element={<Conditionals />} />
                <Route path="/OneWayDataBinding" element={<OneWayDataBinding />} />
                <Route path="/TwoWayDataBinding" element={<TwoWayDataBinding />} />
                <Route path="/UseContext" element={<UseContext />} />
                <Route path="/DynamicRendering" element={<DynamicRendering />} />
                <Route path="/BindComponent" element={<BindComponent />} />
                <Route path="/OnClick" element={<OnClick />} />
                <Route path="/FunctionalComp" element={<FunctionalComp />} />
                <Route path="/UseEffect" element={<UseEffect />} />
                <Route path="/XMLHttpReq" element={<XMLHttpReq />} />
                <Route path="/DynamicDemo" element={<DynamicDemo />} />
                <Route path="/ReactTransitions" element={<ReactTransitions />} />
                <Route path="/ExcelData" element={<ExcelData />} />
                <Route path="/StudentEntry" element={<StudentEntry />} />
                <Route path="/PackagesEntry" element={<PackagesEntry />} />
                
            </Routes>
        </>
    );
}