fetch("http://127.0.0.1:5500/Artistas.json")
    .then((response) => response.json())
    .then((Artistas) => {
        const nombreasDeArtistas = Artistas.map((artista) => artista.nombre);
        console.log(nombreasDeArtistas);
    })