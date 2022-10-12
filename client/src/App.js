import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [infoText, setInfoText] = useState("");
  const [infoRadio, setInfoRadio] = useState("");
  const [infoDate, setInfoDate] = useState("");
  const [infoNumber, setInfoNumber] = useState("");
  const [infoList, setInfoList] = useState("");
  const [infoCheckBox, setInfoCheckBox] = useState("");

  const [newinfoText, setNewInfoText] = useState("");
  const [newinfoRadio, setNewInfoRadio] = useState("");
  const [newinfoDate, setNewInfoDate] = useState("");
  const [newinfoNumber, setNewInfoNumber] = useState("");
  const [newinfoList, setNewInfoList] = useState("");
  const [newinfoCheckBox, setNewInfoCheckBox] = useState("");

  const [crudList, setCrudList] = useState([]);

  const [show, setShow] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((Response) => {
      setCrudList(Response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      infoText: infoText,
      infoRadio: infoRadio,
      infoDate: infoDate,
      infoNumber: infoNumber,
      infoList: infoList,
      infoCheckBox: infoCheckBox,
    });
    window.location.reload();
  };

  const EditConfirm = (id) => {
    Axios.put(`http://localhost:3001/update`, {
      id: id,
      newinfoText: newinfoText,
      newinfoRadio: newinfoRadio,
      newinfoDate: newinfoDate,
      newinfoNumber: newinfoNumber,
      newinfoList: newinfoList,
      newinfoCheckBox: newinfoCheckBox,
    });
    window.location.reload();
  };

  const Delete = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
    window.location.reload();
  };

  return (
    <div className="App" >
      {/* LES INPUTS D'AJOUT */}

      <div id="addsection" className="container">
        <h1>Crud App with MERN</h1>

          <label for='InfoText'>Text Input
          <input
          id='InfoText'
            type="text"
            onChange={(event) => {
              setInfoText(event.target.value);
            }}
          />
          </label>

          <label for='InfoRadio'>Radio Input
          <input
          value="Valeur3"
          name='radioinputadd'
          id='InfoRadio'
            type="radio"
            checked={infoRadio === "Valeur3"}
            onChange={(event) => {
              setInfoRadio(event.target.value);
            }}
          />
          <input
          value="Valeur2"
          name='radioinputadd'
          id='InfoRadio'
            type="radio"
            checked={infoRadio === "Valeur2"}
            onChange={(event) => {
              setInfoRadio(event.target.value);
            }}
          />
          <input
          value="Valeur1"
          name='radioinputadd'
          id='InfoRadio'
            type="radio"
            checked={infoRadio === "Valeur1"}
            onChange={(event) => {
              setInfoRadio(event.target.value);
            }}
          />
          </label>
          <label for='InfoDate'>Date Input
          <input
          id='InfoDate'
            type="date"
            onChange={(event) => {
              setInfoDate(event.target.value);
            }}
          />
          </label>
          <label for='InfoNumber'>Number Input
          <input
          id='InfoNumber'
            type="number"
            onChange={(event) => {
              setInfoNumber(event.target.value);
            }}
          />
          </label>
          <label for='InfoList'>List Input
          <select
          id='InfoList'
            onChange={(event) => {
              setInfoList(event.target.value);
            }}>
              <option unselectable="on" value="ChooseElement">--Choose Element--</option>
              <option selected={infoList === "Element1"} value="Element1">Element 1</option>
              <option selected={infoList === "Element2"} value="Element2">Element 2</option>
              <option selected={infoList === "Element3"} value="Element3">Element 3</option>
          </select>
          </label>

          <label>CheckBox Input
          <input
          value={"Checkbox1"}
            type="checkbox"
            onChange={(event) => {
              setInfoCheckBox(event.target.value);
            }}
          />
          <input
          value={"Checkbox2"}
            type="checkbox"
            onChange={(event) => {
              setInfoCheckBox(event.target.value);
            }}
          />
          <input
          value={"Checkbox3"}
            type="checkbox"
            onChange={(event) => {
              setInfoCheckBox(event.target.value);
            }}
          />
          </label>

        <div className="container">
            <button onClick={addToList}>Add</button>
        </div>
      </div>

      {/* LIGNE DE CATEGORIE DU TABLEAU */}
      <h1>CRUD list</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Text</th>
            <th>Radio</th>
            <th>Date</th>
            <th>Number</th>
            <th>List</th>
            <th>CheckBox</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        {/* RENDU DE LA BASE DE DONNEE A TRAVERS UN TABLEAU */}

        <tbody>
          {crudList.map((val, key) => {
            return (
              <tr key={key}>
                <th>
                  <input
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editShowing" : "editHidden"
                    }
                    type="text"
                    onChange={(event) => {
                      setNewInfoText(event.target.value);
                    }}
                    placeholder={val.infoText}
                  />
                  <p
                    id={`onedit${val._id}`}
                    class={
                      `onedit${val._id}` === show ? "editHidden" : "editShowing"
                    }
                  >
                    {val.infoText}
                  </p>
                </th>
                <th >
                  <input
                  name="radioinput"
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editShowing" : "editHidden"
                    }
                    type="radio"
                    onChange={(event) => {
                      setNewInfoRadio(event.target.value);
                    }}
                  />
                  <input
                  name="radioinput"
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editShowing" : "editHidden"
                    }
                    type="radio"
                    onChange={(event) => {
                      setNewInfoRadio(event.target.value);
                    }}
                  />
                  <input
                  name="radioinput"
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editShowing" : "editHidden"
                    }
                    type="radio"
                    onChange={(event) => {
                      setNewInfoRadio(event.target.value);
                    }}
                  />
                  <p
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editHidden" : "editShowing"
                    }
                  >
                    {val.infoRadio}
                  </p>
                </th>
                <th >
                  <input
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editShowing" : "editHidden"
                    }
                    type="date"
                    onChange={(event) => {
                      setNewInfoDate(event.target.value);
                    }}
                    placeholder={val.infoDate}
                  />
                  <p
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editHidden" : "editShowing"
                    }
                  >
                    {val.infoDate}
                  </p>
                </th>
                <th >
                  <input
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editShowing" : "editHidden"
                    }
                    onChange={(event) => {
                      setNewInfoNumber(event.target.value);
                    }}
                    type="number"
                    placeholder={val.infoNumber}
                  />
                  <p
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editHidden" : "editShowing"
                    }
                  >
                    {val.infoNumber}
                  </p>
                </th>
                <th >
                <select
                id={`onedit${val._id}`}
                className={
                  `onedit${val._id}` === show ? "editShowing" : "editHidden"
                }
            type="selector"
            onChange={(event) => {
              setNewInfoList(event.target.value);
            }}>
              <option value="ChooseElement">--Choose Element--</option>
              <option value="Element1">Element 1</option>
              <option value="Element2">Element 2</option>
              <option value="Element3">Element 3</option>
          </select>
                  <p
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editHidden" : "editShowing"
                    }
                  >
                    {val.infoList}
                  </p>
                </th>
                <th >
                <input
                id={`onedit${val._id}`}
                className={
                  `onedit${val._id}` === show ? "editShowing" : "editHidden"
                }
            type="checkbox"
            onChange={(event) => {
              setNewInfoCheckBox(event.target.value);
            }}
          />
          <input
          id={`onedit${val._id}`}
          className={
            `onedit${val._id}` === show ? "editShowing" : "editHidden"
          }
            type="checkbox"
            onChange={(event) => {
              setNewInfoCheckBox(event.target.value);
            }}
          />
          <input
          id={`onedit${val._id}`}
          className={
            `onedit${val._id}` === show ? "editShowing" : "editHidden"
          }
            type="checkbox"
            onChange={(event) => {
              setNewInfoCheckBox(event.target.value);
            }}
          />
                  <p
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editHidden" : "editShowing"
                    }
                  >
                    {val.infoCheckBox}
                  </p>
                </th>

                <th >
                  <button onClick={() => Delete(val._id)}>Delete</button>
                </th>
                <th >
                  <button
                  name='doublebutton'
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editShowing" : "editHidden"
                    }
                    onClick={() => EditConfirm(val._id)}
                  >
                    Modifier
                  </button>
                  <button
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editHidden" : "editShowing"
                    }
                    onClick={() => setShow(`onedit${val._id}`)}
                  >
                    Edit
                  </button>
                  <button
                  name='doublebutton'
                    id={`onedit${val._id}`}
                    className={
                      `onedit${val._id}` === show ? "editShowing" : "editHidden"
                    }
                    onClick={() => setShow(`onedit`)}
                  >
                    Annuler
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
