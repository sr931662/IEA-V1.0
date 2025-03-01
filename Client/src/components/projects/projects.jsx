import React, { useState } from 'react';
import styles from './projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faMapMarkerAlt, faThumbsUp, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { getImageUrl } from '../../utils';
import { Link } from 'react-router-dom';



const Projects = ({ isSun, toggleTheme }) => {
    const statusColors = {
        "Ready to move": "lightgreen",
        "Under construction": "orange",
        "Coming Soon": "lightblue",
        "Sold Out": "gray"
    };

    const initialProjects = [
        { id: 'id_01', name: 'Modern Villa A', link: "/projects/Villa-1", type: 'Residential House', image: "Sellables/Lucknow/Villa1/Villa1-01.jpg", bhk: '2 BHK', location: 'Lucknow, Uttar Pradesh, 226021', area: '1100 sq ft', price: '₹ 60 Lac', status: 'Ready to move', likes: 0, likedBy: [] },
        { id: 'id_02', name: 'Modern Villa B', link: "/projects/Villa-2", type: 'Residential House', image: 'Sellables/Lucknow/Villa1/Villa1-01.jpg', bhk: '2 BHK', location: 'Lucknow, Uttar Pradesh, 226021', area: '1100 sq ft', price: '₹ 60 Lac', status: 'Ready to move', likes: 0, likedBy: [] },
        // { id: 'id_03', name: 'Project C', type: 'Hospital', image: 'hospital.jpg', bhk: '2 BHK', location: 'Kanpur', area: '1200 sq ft', price: '₹ 60 Lac', status: 'Under construction', likes: 0, likedBy: [] },
        // { id: 'id_04', name: 'Project D', type: 'Flyover', image: 'flyover.jpg', bhk: '2 BHK', location: 'Barabanki', area: '1200 sq ft', price: '₹ 60 Lac', status: 'Coming Soon', likes: 0, likedBy: [] },
    ];

    const [projects, setProjects] = useState(initialProjects);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ type: '', location: '', bhk: '', status: '' });

    const handleLike = (id) => {
        setProjects(prevProjects =>
            prevProjects.map(project => {
                if (project.id === id) {
                    if (!project.likedBy.includes(userProfileId)) {
                        return {
                            ...project,
                            likes: project.likes + 1,
                            likedBy: [...project.likedBy, userProfileId]
                        };
                    }
                }
                return project;
            })
        );
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    // Filtering from `projects` instead of `initialProjects`
    const filteredProjects = projects.filter((project) => {
        return (
            project.name.toLowerCase().includes(searchQuery) &&
            (filters.type ? project.type === filters.type : true) &&
            (filters.location ? project.location === filters.location : true) &&
            (filters.bhk ? project.bhk === filters.bhk : true) &&
            (filters.status ? project.status === filters.status : true)
        );
    });

    return (
        <div className={`${styles.section} ${styles.cc_home_wrap}`}>
            <div className={`${styles.intro_header} ${styles.cc_subpage}`}>
                <div className={styles.intro_content}>
                    <div className={styles.heading_jumbo}>Projects</div>
                </div>
            </div>

            {/* Filter Section */}
            <div className={styles.Filters}>
                <div className={styles.F1}>
                    <button className={styles.search_btn}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input
                        type="text"
                        className={styles.search_field}
                        name="search"
                        placeholder="Search your interest..."
                        onChange={handleSearch}
                    />
                </div>
                <div className={styles.F2}>
                    <select name="type" onChange={handleFilterChange} className={styles.filter_dropdown}>
                        <option value="">Any Type</option>
                        {[...new Set(projects.map(item => item.type))].map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <select name="location" onChange={handleFilterChange} className={styles.filter_dropdown}>
                        <option value="">All Locations</option>
                        {[...new Set(projects.map(item => item.location))].map(location => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                    <select name="bhk" onChange={handleFilterChange} className={styles.filter_dropdown}>
                        <option value="">Any Size</option>
                        {[...new Set(projects.map(item => item.bhk))].map(bhk => (
                            <option key={bhk} value={bhk}>{bhk}</option>
                        ))}
                    </select>
                    <select name="status" onChange={handleFilterChange} className={styles.filter_dropdown}>
                        <option value="">All Status</option>
                        {[...new Set(projects.map(item => item.status))].map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
            </div>


            {/* Display Projects */}
            <div className={styles.projectsGrid}>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <Link to={project.link} >
                            <div key={project.id} className={styles.projectCard}>
                                <div className={styles.projectStatus}
                                    style={{ backgroundColor: statusColors[project.status] || "white" }}>
                                    <p>{project.status}</p>
                                </div>

                                {/* Like Button */}
                                {/* <div className={styles.likeContainer}>
                                    <button className={styles.likeButton} onClick={() => handleLike(project.id)}>
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                        {project.likes}
                                    </button>
                                </div> */}

                                <img 
                                    src={getImageUrl(project.image) || "/default-image.jpg"} 
                                    alt={project.name} 
                                    className={styles.projectImage} 
                                    onError={(e) => e.target.src = "/default-image.jpg"} 
                                />
                                <div className={styles.projectDetails}>
                                    <h2 className={styles.projectName}>{project.name}</h2>
                                    <h4 className={styles.projectType}>{project.type}</h4>
                                    <p className={styles.p_loc}><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon_color} /> {project.location}</p>
                                    <div className={styles.proj_dslip}>
                                        <p className={styles.projectPrice}>{project.price}</p>
                                        <p className={styles.projectBHK}>{project.bhk}</p>
                                    </div>
                                    <p className={styles.p_area}><FontAwesomeIcon icon={faRulerCombined} className={styles.icon_color} /> {project.area}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className={styles.noResults}>No projects match your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
