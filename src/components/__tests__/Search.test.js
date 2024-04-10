import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
// import { Provider } from "react-redux";
// import appStore from "../../constant/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it(" should loaded body component with search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const card = screen.getAllByTestId("resCard");
  expect(card.length).toBe(1);
  const btn = screen.getByRole("button", { name: "Search" });
  const searchinput = screen.getByTestId("searchInput");
  //console.log(searchinput);
  fireEvent.change(searchinput, { target: { value: "burger" } });
  fireEvent.click(btn);
  const cards = screen.getAllByTestId("resCard");
  //assertion
  //expect(btn).toBeInTheDocument();
  expect(cards.length).toBe(1);
});
