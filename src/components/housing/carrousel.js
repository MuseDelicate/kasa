import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// on va utiliser useEffect car les images sont dans le json
// ajouter les chevrons sur les onClick avec preview et next
// depuis le site fontawesome on voit comment installer dans react avec npm
const Carrousel = (props) => {
    // Ce useState permettra de suivre l'index de l'image sur laquelle on est
    // on commence par l'image de d'index 0
    const [currentImg, setCurrentImg] = useState(0)
    console.log(props.pictures);
    // let compteur = 0;

    /** TEST */

    return (
        <div className='carrousel'>
            {(props.pictures !== undefined)
                ? 
                    <div className='carrouselInner'>
                        <img src={props.pictures[currentImg]} alt='à compléter'/>
                        <span className='index'>{currentImg + 1}/{props.pictures.length}</span>
                        <div 
                            className='arrow-left' 
                            onClick={() => {
                                    currentImg < 1 ? setCurrentImg(4) : setCurrentImg(currentImg - 1)}}>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                        </div>
                        <div 
                            className='arrow-right' 
                            onClick={() => {
                                    currentImg > 3 ? setCurrentImg(0) : setCurrentImg(currentImg + 1)}}>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                        </div>
                    </div>
                : ''
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