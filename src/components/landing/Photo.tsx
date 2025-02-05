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
      gridArea: "span 1 / span 1",
      aspectRatio: "aspect-[4/3]",
     
    },
    {
      id: 2,
      image: floralWall,
      gridArea: "span 2 / span 2",
      aspectRatio: "aspect-square",
      
    },
    {
      id: 3,
      image: purpleSetup,
      gridArea: "span 1 / span 1",
      aspectRatio: "aspect-[4/3]",
    
    },
    {
      id: 4,
      image: redCouch,
      gridArea: "span 1 / span 1",
      aspectRatio: "aspect-[3/2]",
     
    },
    {
      id: 5,
      image: purpleWide,
      gridArea: "span 1 / span 2",
      aspectRatio: "aspect-[16/9]",
     
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] mx-auto max-w-7xl">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out`}
            style={{
              gridArea: item.gridArea
            }}
          >
            <div className={`relative w-full h-full ${item.aspectRatio || 'aspect-video'}`}>
              <img
                src={item.image}
{/*                 alt={item.title} */}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
