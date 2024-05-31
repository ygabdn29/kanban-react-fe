import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Boards from "./Boards";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard></Dashboard>}>
      <Route index element={<Boards></Boards>}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
