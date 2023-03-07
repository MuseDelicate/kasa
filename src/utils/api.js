// fichier qui permet de communiquer avec le backend simulé

const baseUrl = '../data/logement.json'

// fonction pour récupérer la liste des logements
export const loadHousingDatas = async() => {
    return await fetch(baseUrl)
        .then((res) => {
            return res.json()
        }) // sans {} c'est un return
        .catch((error) => console.log(error))
    };    

// // fonction pour récupérer un seul logement
// export const oneHousingData = async(id) => {
//     loadHousingDatas()
//     .then((data) => data.filter(element => element.id === id))
// }

