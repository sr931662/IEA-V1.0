import React from 'react'
import styles from './services.module.css'
import { getImageUrl } from '../../../utils'

const Service = ({ isSun, toggleTheme }) => {

    const cl = isSun ? styles.cc_light_isSun : styles.cc_light;
    const pb_color = isSun ? styles.paragraph_bigger_isSun : styles.paragraph_bigger;
    const pl_color = isSun ? styles.paragraph_light_isSun : styles.paragraph_light;
    const divi = isSun ? styles.divider_isSun : styles.divider

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.section_heading_wrap}>
                    <div className={`${styles.label} ${cl}`}>What we are best at</div>
                    <h2 className={styles.header2}>Our Services</h2>
                </div>
                <div className={`${styles.w_layout_grid} ${styles.our_services_grid}`}>
                    <div id={styles.id_118e6}>
                        <img src={getImageUrl("building.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Architectural Design</div>
                        <div className={pl_color}>Our visionary architects transform ideas into stunning, functional designs. Whether it's creating personalized residential spaces or impactful commercial structures, we blend creativity with precision to bring your vision to life, ensuring every design is a perfect balance of beauty and functionality.</div>
                    </div>

                    <div id={styles.id_118ec}>
                        <img src={getImageUrl("engineer.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Civil Engineering</div>
                        <div className={pl_color}>Our expert civil engineering team navigates the complexities of infrastructure development with precision. Specializing in site planning, structural design, and project management, we ensure every aspect of your project aligns perfectly for a durable and sustainable outcome.</div>
                    </div>
                    
                    <div id={styles.id_118f2}>
                        <img src={getImageUrl("bricks.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Construction Management</div>
                        <div className={pl_color}>Entrust your project to our skilled construction management experts. From planning and budgeting to quality control, we ensure each phase of construction is meticulously managed, delivering your project on time and within budget, with seamless execution and outstanding results.</div>
                    </div>

                    <div id={styles.id_118f8}>
                        <img src={getImageUrl("plan.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Sustainable Design</div>
                        <div className={pl_color}>Create a greener future with our eco-conscious design solutions. We prioritize energy efficiency, reduce environmental impact, and craft spaces that contribute to sustainability, ensuring a positive environmental footprint with every project.</div>
                    </div>

                    <div id={styles.id_118fe}>
                        <img src={getImageUrl("map.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Interior Design</div>
                        <div className={pl_color}>Transform your space with our expert interior design services. Our team merges aesthetics with functionality, crafting interiors that not only complement architectural elements but also enhance the overall user experience, creating environments that are both beautiful and practical.</div>
                    </div>

                    <div id={styles.id_11905}>
                        <img src={getImageUrl("crane.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Renovation and Restoration</div>
                        <div className={pl_color}>Revitalize your space with our renovation and restoration services. Whether preserving historical charm or modernizing outdated structures, we approach each project with a deep respect for the past and a forward-thinking vision, ensuring a perfect blend of tradition and innovation.</div>
                    </div>
                </div>
            </div>
            <div className={divi}></div>
        </div>
    )
}

export default Service