import { list } from "postcss";
import { useState } from "react";

const App = () => {
  const [Task, setTask] = useState([]);
  const [NewTask, setNewTask] = useState("");
  const [Data, setData] = useState([]);

  const Addtotask = () => {
    Task.push(NewTask);
    setNewTask("");
    setTask([...Task]);
  };

  const RemoveItem = (Index) => {
    Task.splice(Index, 1);
    setTask([...Task]);
  };
  const handleComplete = (text) => {
    setTask(Task.filter((item) => item !== text));
    setData([...Data, text]);
  };

  return (
    <div className=" bg-purple-300 grid place-items-center h-screen">
      <h1 className=" text-6xl   font-semibold font-light text-lg hover:scale-105 hover:text-8xl">
        My Todo List
      </h1>

      <div className="  grid place-items-cols">
        <input
          className=" h-12 w-[1000px] py-3 px-6 rounded bg-white  hover:bg-amber-200 hover:scale-105 cursor-pointer duration-300 "
          type="text"
          placeholder="Enter The New Task"
          value={NewTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className=" bg-yellow-50 mt-5 ml-[400px] w-[150px] px-4 py-2 text-sm text-purple-700 font-semibold rounded-full border border-purple-700 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
          onClick={Addtotask}
        >
          ADD TASK
        </button>
      </div>

      <ul className="  mb-96  shadow-2xl font-[poppins]   overflow-hidden">
        <li className=" text-lg text-white text-center ">
          {Task.length !== 0 ? (
            Task.map((Element, Index) => {
              return (
                // eslint-disable-next-line react/jsx-key

                // eslint-disable-next-line react/jsx-key
                <tr className=" justify-between  gap-4">
                  <td className=" rounded-lg  border-2  border-purple-700  border-p w-6/12      w-[800px] bg-purple-500   hover:bg-text-white hover:scale-20  cursor-pointer duration-300 py-2 px-6 ">
                    {Element}
                  </td>

                  <button
                    className=" font-semibold text-sm  bg-yellow-50 text-purple-700 p-[100px]  w-[150px]  px-4 py-2 text-sm  hover:text-white font-semibold rounded-full border border-red-700 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-4"
                    onClick={() => {
                      RemoveItem(Index);
                    }}
                  >
                    REMOVE
                  </button>

                  <button
                    className="font-semibold text-sm  bg-yellow-50 text-purple-700 p-[100px]  w-[150px] px-4 py-2 text-sm  hover:text-white font-semibold rounded-full border border-green-700 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-4"
                    onClick={() => handleComplete(Element)}
                  >
                    COMPLETE
                  </button>
                </tr>
              );
            })
          ) : (
            <li> </li>
          )}
        </li>
      </ul>
      <tbody>
        <div className=" mb-40 bg-purple-300 grid place-items-center ">
          <h1 className=" text-4xl">Complete Box</h1>
          {Data.map((item, index) => (
            <p className=" rounded-lg text-white  border-2  border-purple-700  border-p w-6/12  w-[800px] bg-purple-500   hover:bg-text-white hover:scale-20  cursor-pointer duration-300 py-2 px-6 ">
              {item}
            </p>
          ))}
        </div>
      </tbody>
    </div>
  );
}

export default App;
