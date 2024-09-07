import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="flex h-[90%]">
          <Sidebar/>
        </div>
        <Player/>
      </div>
    </>
  );
}

export default App;
