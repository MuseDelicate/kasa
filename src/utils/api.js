// fichier qui permet de communiquer avec le backend simulé

const baseUrl = '../data/logement.json'

export const loadHousingDatas = async() => {
    return await fetch(baseUrl)
        .then((res) => {
            return res.json()
        }) // sans {} c'est un return
        .catch((error) => console.log(error))
    };    

