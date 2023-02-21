// fichier qui permet de communiquer avec le backend simulé

// fonction pour récupérer la liste des logements
const baseUrl = './data/logement.json'

export const loadHousingDatas = async() => {
    return await fetch(baseUrl)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
    };

// fonction pour récupérer un seul logement
export const oneHousingData = async(id) => {
    const data = loadHousingDatas();
    return data.filter(element => element.id === id);
}

