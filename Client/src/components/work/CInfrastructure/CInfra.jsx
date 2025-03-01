import React from 'react'
import styles from './CInfra.module.css'
import { getImageUrl } from '../../../utils'
import Coming from '../../utility pages/Coming soon/coming'

const CInfra = ({ isSun, toggleTheme }) => {
    const div_color = isSun ? styles.divider_isSun : styles.divider
    return (
        <div>
            <div>
                <div className={`${styles.section} ${styles.cc_home_wrap}`}>
                    <div className={styles.project_overview_header}>
                        <div className={styles.intro_content}>
                            <div className={styles.heading_jumbo}>Commercial Infrastructures</div>
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
                                <div className={isSun ? styles.label_isSun : styles.label}>What We Offer in Our Commercial Infrastructure</div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Cutting-Edge Architecture : </strong>
                                    <p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Modern and innovative designs tailored for diverse business operations.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Robust Construction : </strong>
                                    <p className={isSun ? styles.sub_li_isSun : styles.sub_li}>High-quality materials ensuring durability and sustainability.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Strategic Locations : </strong>
                                    <p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Prime locations to enhance accessibility and business growth.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Smart & Efficient Spaces : </strong>
                                    <p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Optimized layouts to maximize productivity and convenience.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Future-Ready Facilities : </strong>
                                    <p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Integrated with advanced technology and eco-friendly solutions.</p></li>
                                </ul>
                            </div>
                        </div>

                        <div id={styles.id_387928}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Explore More Commercial Infrastructure Projects</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Explore our collection of commercial infrastructure projects built to redefine business landscapes. Each project is designed to offer: </div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Scalability & Flexibility : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Adaptable spaces that evolve with business needs.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Premium Amenities : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>State-of-the-art facilities to support operations.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Exceptional Build Quality : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Ensuring long-lasting performance and safety.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Sustainable Development : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Eco-conscious designs for a greener future.</p></li>
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

export default CInfra;