import { React } from 'react'
import styles from './about.module.css'
import { getImageUrl } from '../../utils'

const About = ({ isSun, toggleTheme }) => {

    const pl_color = isSun ? styles.paragraph_light_isSun : styles.paragraph_light
    const divi = isSun ? styles.divider_isSun : styles.divider
    return (
        <div className={`${styles.section} ${styles.cc_home_wrap}`}>
            <div className={`${styles.intro_header} ${styles.cc_subpage}`}>
                <div className={styles.intro_content}>
                    <div className={styles.heading_jumbo}>
                        About Us<br/></div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.motto_wrap}>
                    <div className={styles.heading_jumbo_small}>Welcome to Indraprastha Engineers and Architects, where passion for design meets commitment to excellence.</div>
                </div>
                <div className={divi}></div>
                <div className={styles.about_story_wrap}>
                    <img src={ getImageUrl("Praveen Singh.jpg") } alt="Founder" className={styles.founder}/>
                    <h2 className={styles.header}>About</h2>
                    <p className={pl_color}>At Indraprastha Engineers & Architects, we specialize in innovative design and exceptional civil engineering. Our mission is to redefine industry standards, transforming visionary concepts into lasting structures. With a focus on sustainability and precision, we create architectural masterpieces that blend functionality with beauty.</p>
                </div>
                <div className={divi}></div>
                <div className={styles.about_story_wrap}>
                    <h2 className={styles.header}>Our Vision</h2>
                    <p className={pl_color}>Founded in 2000, Indraprastha Engineers & Architects was born from a shared passion for creating inspiring, sustainable, and precise spaces. Over the years, we’ve remained committed to excellence, craftsmanship, and a client-focused approach, ensuring each project showcases our dedication to innovation and attention to detail.</p>
                </div>
                <div className={divi}></div>
                <div className={styles.about_story_wrap}>
                    <h2 className={styles.header}>Our Mission</h2>
                    <p className={pl_color}>At Indraprastha Engineers & Architects, our mission is to enhance lives through exceptional design and engineering. We believe in creating spaces that transform the way people live, work, and interact with their environment. Our commitment goes beyond building structures—we aim to enrich the communities we serve, making a lasting impact through every project.</p>
                </div>
                <div className={divi}></div>
            </div>
        </div>
    )
}

export default About