import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouter } from "../TutoSlice";
import { useNavigate } from "react-router-dom";

export default function Ajout() {
  const [tutoriel, setTutoriel] = useState({
    code: 0,
    titre: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setTutoriel({ ...tutoriel, [e.target.name]: e.target.value });

  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      tutoriel.code !== "" &&
      tutoriel.titre !== "" &&
      tutoriel.description !== ""
    )
      {dispatch(ajouter(tutoriel));

            navigate("/");
      }
  }
  return (
    <div className="container w-75 mx-auto">
      {console.log(tutoriel)}
      <h2>Nouveau tutoriel</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            Code
          </label>
          <input
            type="text"
            className="form-control"
            id="code"
            name="code"
            onChange={handleChange}
            // value={tutoriel.code}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">
            Titre
          </label>
          <input
            type="text"
            className="form-control"
            id="titre"
            name="titre"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
      </form>
    </div>
  );
}
