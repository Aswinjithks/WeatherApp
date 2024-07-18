import React, { lazy, Suspense } from "react";
import { toast, ToastContainer } from "react-toastify";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Loader from "@components/loader";

import "react-toastify/dist/ReactToastify.min.css";

const Home = lazy(() => import("@pages/index"));

function App() {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <Home />
          <ToastContainer
            closeOnClick
            style={{ width: "auto", minWidth: "340px", maxWidth: "450px" }}
            position={toast.POSITION.BOTTOM_RIGHT}
            bodyStyle={{ color: "#756f86" }}
          />
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
