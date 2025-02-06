import React from 'react';
import redDecor from "../../assets/red-decor.jpg";
import floralWall from "../../assets/floral-wall.jpg";
import purpleSetup from "../../assets/purple-setup.jpg";
import redCouch from "../../assets/red-couch.jpg";
import purpleWide from "../../assets/purple-wide.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: redDecor,
      aspectRatio: "aspect-[4/3]",
      gridClasses: {
        mobile: "col-span-1",
        tablet: "md:col-span-1",
        desktop: "lg:col-span-1",
      }
    },
    {
      id: 2,
      image: floralWall,
      aspectRatio: "aspect-square",
      gridClasses: {
        mobile: "col-span-1",
        tablet: "md:col-span-2",
        desktop: "lg:col-span-2 lg:row-span-2",
      }
    },
    {
      id: 3,
      image: purpleSetup,
      aspectRatio: "aspect-[4/3]",
      gridClasses: {
        mobile: "col-span-1",
        tablet: "md:col-span-1",
        desktop: "lg:col-span-1",
      }
    },
    {
      id: 4,
      image: redCouch,
      aspectRatio: "aspect-[3/2]",
      gridClasses: {
        mobile: "col-span-1",
        tablet: "md:col-span-1",
        desktop: "lg:col-span-1",
      }
    },
    {
      id: 5,
      image: purpleWide,
      aspectRatio: "aspect-[16/9]",
      gridClasses: {
        mobile: "col-span-1",
        tablet: "md:col-span-2",
        desktop: "lg:col-span-2",
      }
    }
  ];

  return (
    <section className="w-full px-4 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-auto">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`
                group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl 
                transition-all duration-500 ease-in-out
                ${item.gridClasses.mobile}
                ${item.gridClasses.tablet}
                ${item.gridClasses.desktop}
              `}
            >
              <div className={`relative w-full h-full ${item.aspectRatio}`}>
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div 
                  className="
                    absolute inset-0 
                    bg-gradient-to-b from-transparent via-transparent to-black/50 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500
                  "
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;