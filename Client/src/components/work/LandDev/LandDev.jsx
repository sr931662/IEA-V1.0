import React from 'react'
import styles from './LandDev.module.css'
import { getImageUrl } from '../../../utils'
import Coming from '../../utility pages/Coming soon/coming'

const LandDev = ({ isSun, toggleTheme }) => {
    const div_color = isSun ? styles.divider_isSun : styles.divider
    return (
        <div>
            <div>
                <div className={`${styles.section} ${styles.cc_home_wrap}`}>
                    <div className={styles.project_overview_header}>
                        <div className={styles.intro_content}>
                            <div className={styles.heading_jumbo}>Land Developments</div>
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
                                <div className={isSun ? styles.label_isSun : styles.label}>What We Offer in Our Land Development Projectss</div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Strategic Planning : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Thoughtfully designed layouts that optimize land use for residential, commercial, and mixed-use developments.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Infrastructure Development : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Roads, drainage systems, and utility setups for a well-connected and sustainable environment.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Eco-Friendly Solutions : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Green spaces, water conservation methods, and sustainable construction practices.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Legal & Regulatory Compliance : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Ensuring every project meets zoning laws, environmental regulations, and local guidelines.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Customizable Spaces : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Flexible land development solutions tailored to diverse needs, from residential townships to commercial hubs.</p></li>
                                </ul>
                            </div>
                        </div>

                        <div id={styles.id_387928}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Explore More Land Development Projects</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Our Residential House Projects Series is curated with a focus on : </div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Residential Land Development : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Well-planned plots for housing communities with essential amenities.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Commercial & Industrial Zones : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Infrastructure-ready spaces for business growth and industrial expansion.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Mixed-Use Developments : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Integrated projects combining residential, retail, and office spaces.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Agricultural & Farmland Development : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Modernized agricultural layouts with sustainable practices.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Smart City & Township Planning : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>High-tech urban developments with future-ready infrastructure.</p></li>
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
                    <Coming />
                    <div className={div_color}></div>
                </div>
            </div>
        </div>
    )
}

export default LandDev