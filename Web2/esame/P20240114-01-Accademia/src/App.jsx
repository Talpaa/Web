import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

//response = requests.post(api_url,json=jsonDataRequest,verify=False)


const AxiosExample = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effettua la chiamata HTTP con axios
    axios
      .get('http://localhost:5004/3')
      .then((response) => {
        setUsers(response.data);  // Imposta i dati nel state
        setLoading(false);         // Rimuove il caricamento
      })
      .catch((error) => {
        setError(error.message);  // Gestisce gli errori
        setLoading(false);
      });
  }, []); // L'array vuoto fa sì che la chiamata HTTP venga eseguita solo una volta

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Elenco Utenti</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Posizione</th>
            <th>Stipendio</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.cognome}</td>
              <td>{user.posizione}</td>
              <td>{user.stipendio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default AxiosExample;