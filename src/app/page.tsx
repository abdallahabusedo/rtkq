"use client";
import WelcomePage from "@/WelcomePage";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <WelcomePage />
    </Provider>
  );
}
