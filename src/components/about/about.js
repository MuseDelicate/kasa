import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Collapse from '../Collapse'


const About = () => {
    return (
    <div>
        <Header />
        <div>
            <Collapse title='Fiabilité' >
                <p>"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."</p>
            </Collapse>
            {/* <CollapseString 
                title='Fiabilité'
                details='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
            />
            <CollapseString 
                title='Respect'
                details='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
            />
            <CollapseString 
                title='Service'
                details="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <CollapseString 
                title='Sécurité'
                details="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            /> */}
        </div>
        <Footer />
    </div>
    )
}


export default About;