import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mock/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantMenu />
        <Header/>
        <Cart/>
      </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("All Day Breakfast (13)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(13);

  const addBtns = screen.getAllByRole("button",{name:"Add +"});

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart-1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart-2")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  const clearCartBtn = screen.getByRole("button",{name:"Clear Cart"});

  fireEvent.click(clearCartBtn);

  expect(screen.getAllByTestId("foodItems").length).toBe(13);

  expect(screen.getByText("Cart is empty! Add items to the cart.")).toBeInTheDocument();


});
