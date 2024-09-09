import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="flex h-[90%]">
          <Sidebar/>
          <Display/>
        </div>
        <Player/>
      </div>
    </>
  );
}

export default App;
