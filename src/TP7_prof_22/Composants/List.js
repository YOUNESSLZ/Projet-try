import { Pen, Pencil, Trash2 } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { supprimer } from "../TutoSlice";
import Recherche from "./Recherche";
import { useState } from "react";

export default function List() {


  const liste = useSelector((st) => st.tutoriel.liste);
  const dispatch = useDispatch();
  const [terme, setTerme] = useState("");
  const filterdList = liste.filter(
    (tuto) =>
      tuto.titre.toLowerCase().includes(terme.toLowerCase()) ||
      tuto.description.toLowerCase().includes(terme.toLowerCase())
  );

  return (
    <div className="container text-center">
      <h2 className="text-center m-4">Liste des tutoriels</h2>
  
      <Recherche chercher={setTerme}></Recherche>
      <table className="table table-bordered w-75 mx-auto">
        <thead>
          <tr>
            <th>Code</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterdList.length === 0 ? (
            <tr>
              <td colspan="4" className="text-center">
                Aucun tutoriel n'est disponible
              </td>
            </tr>
          ) : (
            filterdList.map((tuto) => (
              <tr>
                <td>{tuto.code}</td>
                <td>{tuto.titre}</td>
                <td>{tuto.description}</td>
                <td>
                  <Link to={`/tuto/${tuto.code}`}>
                    <Pen style={{ color: "green" }}></Pen>
                  </Link>
                  <button
                    className="btn"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Voulez vous supprimer le tutoriel : ${tuto.titre}?`
                        )
                      )
                        dispatch(supprimer(tuto.code));
                    }}
                  >
                    <Trash2 style={{ color: "red" }}></Trash2>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
