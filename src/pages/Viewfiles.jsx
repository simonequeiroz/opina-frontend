import { useEffect, useState } from "react";

function ViewFiles() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/files")
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch((err) => console.error("Erro ao buscar arquivos:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📂 Arquivos Enviados</h2>
      {files.length === 0 ? (
        <p>Nenhum arquivo enviado ainda.</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file._id}>
              {file.filename} -{" "}
              <a
                href={`http://localhost:5000/files/${file._id}`}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewFiles;
