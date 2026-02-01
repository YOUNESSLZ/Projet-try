import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifier } from "../TutoSlice";

export default function Modification() {
  const { code } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const liste = useSelector((st) => st.tutoriel.liste);
  const tutoriel = liste.find((tuto) => tuto.code == code);

  const [editedTuto, setEditedTuto] = useState(tutoriel);
  function handleSubmit(e) {
    e.preventDefault();
    if (editedTuto.titre !== "" && editedTuto.description !== "") {
      dispatch(modifier(editedTuto));
      navigate("/", { state: { message: "Modification réussie !" } });
    }
  }

  return (
    <div className="container w-75 mx-auto">
      {console.log(editedTuto)}
      <h2>Modifier tutoriel</h2>
      {tutoriel ? (
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
              defaultValue={tutoriel.code}
              disabled
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
              defaultValue={tutoriel.titre}
              onChange={(e) =>
                setEditedTuto({ ...editedTuto, titre: e.target.value })
              }
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
              onChange={(e) =>
                setEditedTuto({ ...editedTuto, description: e.target.value })
              }
              defaultValue={tutoriel.description}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enregistrer
          </button>
        </form>
      ) : (
        <p>Aucun tutoriel n'est trouvé</p>
      )}
    </div>
  );
}
