
import React,{useState,useEffect} from "react";

//include images into your bundle

//create your first component
export const Home = () => {
  const [tarea, setTarea] = useState([
    "Tomar vitaminas",
    "alimentar gatos",
    "ir al supermercado",
    "llevar el auto al taller",
    "comprar Tickets aereos",
    "lavar ropa",
  ]);

  return (
   
      <div className="text-center text-info m-5">
        <h1> ✨ Lista deberes 📝</h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setTarea([...tarea, event.target[0].value]);
            event.target[0].value = "";
          }}
        >
          <input placeholder="Nueva Tarea" />
        </form>
        <div className="list-group container col-4">
          {tarea.map((value, index, arr) => {
            return (
              <li key={index}>
                {value}{" "}
                <button
                  onClick={() =>
                    setTarea(tarea.filter((item, idx) => idx !== index))
                  }
                >
                  🗑
                </button>{" "}
              </li>
            );
          })}
        </div>
      </div>
    
  );
};
