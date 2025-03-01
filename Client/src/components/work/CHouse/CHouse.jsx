import React from 'react'
import styles from './CHouse.module.css'
import { getImageUrl } from '../../../utils'
import Coming from "../../utility pages/Coming soon/coming"

const CHouse = ({ isSun, toggleTheme }) => {
    const div_color = isSun ? styles.divider_isSun : styles.divider
    return (
        <div>
            <div>
                <div className={`${styles.section} ${styles.cc_home_wrap}`}>
                    <div className={styles.project_overview_header}>
                        <div className={styles.intro_content}>
                            <div className={styles.heading_jumbo}>Commercial Houses</div>
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
                                <div className={isSun ? styles.label_isSun : styles.label}>Explore more Residential House Projects</div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Innovative Designs : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Blending functionality with aesthetics.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>High-Quality Construction : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Ensuring durability and long-term value.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Strategic Locations : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Positioned for maximum accessibility and growth.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Tailored Solutions : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Customizable spaces to meet diverse business needs.</p></li>
                                </ul>
                            </div>
                        </div>

                        <div id={styles.id_387928}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>What We Offer in Our Commercial Houses</div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Modern Architecture : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Thoughtfully designed commercial spaces with sleek, contemporary aesthetics.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Optimized Layouts : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Smart space utilization for maximum efficiency and functionality.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Premium Quality Materials : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Durable construction with high-end finishes for long-lasting appeal.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Energy-Efficient Design : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Sustainable solutions to reduce operational costs and environmental impact.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Customizable Interiors : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Tailored designs to suit diverse business needs and branding.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Strategic Locations : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Prime commercial hubs for maximum visibility and accessibility.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={div_color}></div>
                </div>
            </div>
            
            <div className={styles.section}>
                <div className={isSun ? styles.container : styles.container_isSun}>
                    <h1>Gallery</h1>
                    <div className={div_color}></div>
                    <Coming />
                </div>
            </div>
        </div>
        
    )
}

export default CHouse