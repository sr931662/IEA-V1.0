import React, { useState } from 'react'
import styles from './residential.module.css'
import { getImageUrl } from '../../../utils'
import Coming from '../../utility pages/Coming soon/coming';

const ITEMS_PER_PAGE = 10;

const Residential = ({ isSun, toggleTheme }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const residentialProjects = [
        // ... your project data here
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
    ];

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = residentialProjects.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(residentialProjects.length / ITEMS_PER_PAGE);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const div_color = isSun? styles.divider_isSun : styles.divider
    return(
        <div>
            <div className={`${styles.section} ${styles.cc_home_wrap}`}>
                <div className={styles.project_overview_header}>
                    <div className={styles.intro_content}>
                        <div className={styles.heading_jumbo}>Residential Houses</div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={div_color}></div>
                    <div className={`${styles.w_layout_grid} ${styles.project_details_grid}`}>
                        <div id={styles.id_387918}>                            
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Why Explore Our Gallery?</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>When you choose us, you’re not just hiring a construction team; you’re gaining a partner in your journey to create a lifetime sanctuary. Here’s what sets us apart: </div>
                                {/* <br /> */}
                                {/* <strong className={isSun ? styles.label_isSun : styles.label}>How we Work : </strong> */}
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Diverse Designs : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>From luxurious villas to contemporary homes, our projects reflect versatility and innovation.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>High-Quality Craftsmanship : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Each home is built with premium materials and expert precision.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Customer Satisfaction : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>A track record of happy homeowners and successful projects.</p></li>
                                </ul>
                            </div>
                        </div>

                        <div id={styles.id_387928}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Our Promise: Building Dreams with Precision and Heart</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>We know how important your home is to you. That’s why our approach is rooted in listening, planning, and perfecting every detail to bring your vision to life. We partner closely with you from day one, ensuring that every aspect of your dream home aligns with your vision and values. </div>
                                <br />
                                <strong className={isSun ? styles.label_isSun : styles.label}>Built for Comfort & Elegance : </strong>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Spacious & Functional Layouts : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Designed to maximize space utilization while maintaining an open, airy feel.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Natural Light Optimization : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Large windows and strategic placements ensure well-lit interiors.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Aesthetic Interiors : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Elegant finishes, modern designs, and premium materials for a sophisticated look.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Seamless Indoor-Outdoor Experience : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Thoughtfully planned gardens, balconies, and patios for a refreshing ambiance.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Superior Craftsmanship : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Precision engineering and high-quality construction ensure durability and long-term comfort.</p></li>
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

{/*                       Display current items */}
{/*                     <div className={`${styles.w_layout_grid} ${styles.project_gallery_grid}`}> */}
{/*                         {currentItems.map((project, index) => ( */}
{/*                             <div key={index} className={styles.projectItem}> */}
{/*                                 <img src={getImageUrl(project.image)} alt={project.name} className={styles.projectImage} /> */}
{/*                                 <h2 className={isSun ? styles.projectName_isSun : styles.projectName}>{project.name}</h2> */}
{/*                                 <p className={isSun ? styles.projectDescription_isSun : styles.projectDescription}>{project.description}</p> */}
{/*                             </div> */}
{/*                         ))} */}
{/*                     </div> */}
                    {/* Display current items */}
                    {/* <div className={`${styles.w_layout_grid} ${styles.project_gallery_grid}`}>
                        {currentItems.map((project, index) => (
                            <div key={index} className={isSun ? styles.card_isSun : styles.card}>
                                <div className={styles.cont}><img src={getImageUrl(project.image)} alt={project.name} className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                     <ul>
                                        <li><strong>Owner : </strong><p>{project.owner}</p></li>
                                        <li><strong>Location : </strong><p>{project.location}</p></li>
                                        <li><strong>Duration : </strong><p>{project.duration}</p></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    {/* Pagination */}
                    {/* <div className={styles.pagination}>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={currentPage === i + 1 ? styles.activePage : ''}>
                                {i + 1}
                            </button>
                        ))}
                    </div> */}
                    <div className={div_color}></div>
                    <Coming />
                </div>
            </div>
        </div>
    )
}


export default Residential