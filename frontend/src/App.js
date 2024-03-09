import React from "react";
// import Login from "./components/Login2";
// import Register from "./components/Register";
// import "./App.css";

// import { selectUser } from "./slices/userSlice";
// import { useSelector } from "react-redux";
// import Logout from "./components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import BuyerOrders from "./components/BuyerOrders";
// import ViewProducts from "./components/ViewProducts";
// import CreateProduct from "./components/CreateProduct";
const App = () => {

    // const user = useSelector(selectUser);
    // console.log(user);
    const dev = true;
    if(dev === false)
    return (

        <div className="app">
            <Router>
                
                {/* <Header></Header> */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* <Route path="/signin" element={<SignIn></SignIn>} />
                    <Route path="/signup" element={<SignUp></SignUp>} /> */}
                    {/* <Route path="/buyerorders" element={
                        user ? <BuyerOrders></BuyerOrders> : <SignIn /> 
                    } /> */}
                    {/* <Route path="/createproduct" element={
                      <CreateProduct></CreateProduct> 
                    } /> */}

                    {/* <Route path="/products" element={<ViewProducts />}></Route>
                    <Route path="/" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> :
                            <Login />

                    } /> */}
                    {/* <Route path="/logout" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Login />
                    } />

                    <Route path="/register" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Register />
                    } /> */}
                </Routes>
                {/* <Footer></Footer> */}
            </Router>
        </div>

    )
    else
    return (
        <div className="app">
            <Router>
                <h2 style={{ position: 'absolute', top: '0', right: '0', transform: 'rotate(45deg)', backgroundColor: 'green', color: 'red', padding: '5px' }}>DEV MODE</h2>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </div>
    )
};

export default App;