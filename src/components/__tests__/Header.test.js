import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the header component with a login button", () => {
    render(
    <BrowserRouter>    
    <Provider store={appStore}>   
      <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Login"});// if there are more than one button, an object can be passed as an argument to specify the name of the button.  
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();

});

it("Should render the header component with Cart-0", () => {
    render(
    <BrowserRouter>    
    <Provider store={appStore}>   
      <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart-0");

    expect(cartItems).toBeInTheDocument();

});

it("Should render the header component with Cart", () => {
    render(
    <BrowserRouter>    
    <Provider store={appStore}>   
      <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/); //Using a regex instead of exact string

    expect(cartItems).toBeInTheDocument();

});

it("Should chnage Login button to Logout on click", () => {
    render(
    <BrowserRouter>    
    <Provider store={appStore}>   
      <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"})

    expect(logoutButton).toBeInTheDocument();

});