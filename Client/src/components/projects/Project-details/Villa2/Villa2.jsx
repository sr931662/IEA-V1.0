import React, { useState, useRef } from 'react';
import styles from "./Villa2.module.css";
import { getImageUrl } from "../../../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Icons for navigation
import { faMapMarkerAlt, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../../store/auth';

const Villa2 = ({isSun}) => {
  const { isLoggedIn } = useAuth()
  const [selectedImage, setSelectedImage] = useState(getImageUrl("Sellables/Lucknow/Villa1/Villa1-01.jpg"));
  const scrollContainerRef = useRef(null);
  const divi = isSun ? styles.divider_isSun : styles.divider
  const str = isSun ? styles.str_isSun : styles.str;
  
  const {user} = useAuth()

  const initialProjects = { id: 'id_01', name: 'Modern Villa B', link: "/projects/Villa-1", type: 'Residential House', image: "Sellables/Lucknow/Villa1/Villa1-01.jpg", bhk: '2 BHK', location: '26.956113659688544, 80.94164919453078, Tiwaripur, Uttar Pradesh 226021', area: '1100 sq ft', price: '₹ 60 Lac', status: 'Ready to move', bedrooms: 2, bathrooms: 2, year_built: 2024, likes: 0, likedBy: [] };
  const images = [
    "Villa1-01.jpg", "Villa1-02.jpg", "Villa1-03.jpg", "Villa1-04.jpg",
    "Villa1-05.jpg", "Villa1-06.jpg", "Villa1-07.jpg", "Villa1-08.jpg",
    "Villa1-09.jpg", "Villa1-10.jpg", "Villa1-11.jpg", "Villa1-12.jpg",
    "Villa1-13.jpg", "Villa1-14.jpg"
  ];
  // Function to open an email with pre-filled details
  const scheduleTour = () => {
    const recipientEmail = "sr931662@gmail.com"; // Replace with your email
    const subject = encodeURIComponent(`Schedule a Tour - ${initialProjects.name} at ${initialProjects.location}`);
    const body = encodeURIComponent(
    `Dear Indraprastha Engineers & Architects Team,\n\n` +
    `I hope this email finds you well. I am interested in scheduling a tour for the villa listed as ${initialProjects.name} in Lucknow, Uttar Pradesh, India. ` +
    `I would appreciate the opportunity to visit the property at a convenient time.\n\n` +
    `Could you please provide available dates and times for the tour? Additionally, if there are any specific documents or requirements ` +
    `I should be aware of before the visit, kindly let me know.\n\n` +
    `Looking forward to your response.\n\n` +
    `Best regards,\n` +
    `${user.fname}\n` +
    `${user.phone}\n` +
    `${user.email}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust as needed
      scrollContainerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projLeftC}>
        {/* Main Image Preview */}
        <div className={styles.imgPrev}>
          <img src={selectedImage} alt="Selected Villa" className={styles.headImg} />
        </div>

        {/* Scrollable Thumbnail List */}
        <div className={styles.imgSliderContainer}>
          <button className={styles.scrollButton} onClick={() => scroll("left")}>
            <ChevronLeft size={24} />
          </button>

          <div className={styles.imgList} ref={scrollContainerRef}>
            {images.map((img, index) => (
              <img 
                key={index}
                src={getImageUrl(`Sellables/Lucknow/Villa1/${img}`)}
                alt={img}
                className={styles.miniImg}
                onClick={() => setSelectedImage(getImageUrl(`Sellables/Lucknow/Villa1/${img}`))}
                style={{ border: selectedImage.includes(img) ? "2px solid #000" : "none" }}
              />
            ))}
          </div>

          <button className={styles.scrollButton} onClick={() => scroll("right")}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className={styles.projRightC}>
        <h3 className={styles.p_name}>
          {initialProjects.name}
        </h3>
        <h3 className={styles.p_loc}>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {initialProjects.location}
        </h3>

        <div className={styles.price_and_area}>
          <h1 className={styles.p_price}>{initialProjects.price}</h1>
          <h3 className={styles.p_area}>
            <FontAwesomeIcon icon={faRulerCombined} /> {initialProjects.area}
          </h3>
        </div>
        <div className={divi}>
        </div>
        <h2 className={styles.p_pd_header}>Property Details</h2>

        <div className={styles.p_pd_container}>
          <div>
            <p className={styles.p_bd}>Bedrooms</p>
            <p className={styles.p_bd_val}>{initialProjects.bedrooms}</p>
          </div>

          <div>
            <p className={styles.p_bd}>Bathrooms</p>
            <p className={styles.p_bd_val}>{initialProjects.bathrooms}</p>
          </div>

          <div>
            <p className={styles.p_bd}>Year Built</p>
            <p className={styles.p_bd_val}>{initialProjects.year_built}</p>
          </div>

          <div>
            <p className={styles.p_bd}>Property Type</p>
            <p className={styles.p_bd_val}>{initialProjects.type}</p>
          </div>
        </div>

        <div className={divi}></div>
        <h2 className={styles.p_desc_header}>Description</h2>
        <p>Nestled in a serene and well-connected neighborhood, this thoughtfully designed <strong className={str}>modern villa</strong> offers the perfect blend of comfort, functionality, and contemporary aesthetics. Built with a focus on <strong className={str}>efficient space utilization and modern living standards</strong>, the villa features a <strong className={str}>well-ventilated layout, ample natural light, and high-quality materials</strong> that ensure durability and style.<br /><br />
          With <strong className={str}>spacious bedrooms, a functional kitchen, and an inviting living area</strong>, this home is ideal for families seeking <strong className={str}>a peaceful yet convenient lifestyle</strong>. The villa incorporates <strong className={str}>smart design elements</strong>, ensuring a balance between practicality and modern appeal. Whether it's the <strong className={str}>open-plan interiors</strong>, the <strong className={str}>well-crafted exteriors</strong>, or the <strong className={str}>landscaped surroundings</strong>, every detail has been carefully considered to create a <strong className={str}>warm and welcoming ambiance</strong>.<br/><br />
          Perfect for those looking for a <strong className={str}>modern yet affordable villa</strong>, this property is designed to cater to the needs of contemporary homeowners who value both <strong className={str}>comfort and quality living</strong>.</p>
            
          <button className={styles.scheduleTourButton} onClick={scheduleTour}>
            Schedule a Tour
          </button>
      </div>
    </div>
  );
};

export default Villa2;
