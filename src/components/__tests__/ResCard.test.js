import RestaurantCard from "../RestaurantCard";
import { fireEvent, render, screen } from "@testing-library/react";
// import { Provider } from "react-redux";
// import appStore from "../../constant/appStore";
// import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"
it(" should loaded login button inside the RestaurantCard component", () => {
  render(
    // <BrowserRouter>
    //   <Provider store={appStore}>
        <RestaurantCard resData={MOCK_DATA} />
      //</Provider>
    //</BrowserRouter>
  );
  //const btn = screen.getByRole("button", { name: "Login" });
  const btn = screen.getByText("Pizza Hut");

  //assertion
  expect(btn).toBeInTheDocument();
});