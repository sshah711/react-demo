import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../constant/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it(" should loaded login button inside the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const btn = screen.getByRole("button", { name: "Login" });
  //const btn = screen.getByText("Login");

  //assertion
  expect(btn).toBeInTheDocument();
});

it(" should loaded cart items inside the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const crt = screen.getByText("Cart 🛒 - ( 0 )");
  //const btn = screen.getByText("Login");

  //assertion
  expect(crt).toBeInTheDocument();
});

it(" should loaded cart item inside the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const crt = screen.getByText(/Cart/);
  //const btn = screen.getByText("Login");

  //assertion
  expect(crt).toBeInTheDocument();
});

it(" should loaded login to logout button on click inside the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const btn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(btn);
    
  const btn1 = screen.getByRole("button", { name: "Logout" });

  //assertion
  expect(btn1).toBeInTheDocument();
});
