import React from 'react'
import styles from './Hospitals.module.css'
import { getImageUrl } from '../../../utils'
import Coming from '../../utility pages/Coming soon/coming'

const Hospitals = ({ isSun, toggleTheme }) => {
    const div_color = isSun ? styles.divider_isSun : styles.divider
    return (
        <div>
            <div>
                <div className={`${styles.section} ${styles.cc_home_wrap}`}>
                    <div className={styles.project_overview_header}>
                        <div className={styles.intro_content}>
                            <div className={styles.heading_jumbo}>Hospitals</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={div_color}></div>
                    <div className={`${styles.w_layout_grid} ${styles.project_details_grid}`}>
                        <div id={styles.id_387918}>                            
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>What We Offer in Our Hospital Projects</div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Patient-Centric Design : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Thoughtfully planned spaces for seamless patient care and comfort.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Advanced Infrastructure : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Equipped with modern medical technology and sustainable construction.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Efficient Layouts : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Optimized for smooth workflow, accessibility, and emergency response.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Hygienic & Safe Environments : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Compliance with industry standards for sanitation and safety.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Future-Ready Solutions : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Scalable designs to accommodate medical advancements and growing demands.</p></li>
                                </ul>
                            </div>
                        </div>

                        <div id={styles.id_387928}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Explore More Hospital Projects</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Our Residential House Projects Series is curated with a focus on : </div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Multi-Specialty Hospitals : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Large-scale healthcare facilities designed for comprehensive medical care.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Specialty Clinics : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Tailored infrastructure for specialized treatments and diagnostics.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Emergency & Trauma Centers : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Rapid-response layouts for critical care and emergency services.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Research & Teaching Hospitals : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Advanced spaces supporting medical education and innovation.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Renovation & Expansion Projects : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Upgrading existing facilities to meet modern healthcare standards.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={div_color}></div>
                </div>
            </div>
            
            <div className={styles.section}>
                <div className={styles.container}>
                    <h1>Gallery</h1>
                    <div className={div_color}></div>
                    <Coming />
                </div>
            </div>
        </div>
        
    )
}

export default Hospitals