import React from 'react';
// on va utiliser useEffect car les images sont dans le json
// .map pour afficher les images
// ajouter les chevrons sur les onClick avec preview et next
// depuis le site fontawesome on voit comment installer dans react avec npm
const Carrousel = (props) => {
    console.log(props);
    let compteur = 0;

    return(
        <div>
            {(props.pictures !== undefined) 
                ? props.pictures.map((elem) => (
                    <img key={props.id + `${compteur++}`} src={elem} alt={`${elem}`} />
                ))
                :''
            }
        </div>
    )
}

export default Carrousel;

// function Survey() {
//     const { questionNumber } = useParams()
//     const questionNumberInt = parseInt(questionNumber)
//     const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
//     const nextQuestionNumber = questionNumberInt + 1
//     const [surveyData, setSurveyData] = useState({})
 
//     useEffect(() => {
//         setDataLoading(true)
//         fetch(`http://localhost:8000/survey`)
//             .then((response) => response.json()
//             .then(({ surveyData }) => console.log(surveyData))
//             .catch((error) => console.log(error))
//         )
//     }, [])
 
//     return (
//         <SurveyContainer>
//             <QuestionTitle>Question {questionNumber}</QuestionTitle>
//             <QuestionContent>{surveyData[questionNumber]}   </QuestionContent>
//             <LinkWrapper>
//                 <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
//                 {surveyData[questionNumberInt + 1] ? (
//                     <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
//                 ) : (
//                     <Link to="/results">Résultats</Link>
//                 )}
//             </LinkWrapper>
//         </SurveyContainer>
//     )
// }
 
// export default Survey