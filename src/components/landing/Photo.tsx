import React from 'react';

interface GalleryItem {
  id: number;
  image: string;
  aspectRatio?: string;
  gridArea?: string;
}

const Gallery = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/red-decor.jpg",
      gridArea: "span 1 / span 1",
      aspectRatio: "aspect-[4/3]"
    },
    {
      id: 2,
      image: "/floral-wall.jpg",
      gridArea: "span 2 / span 2",
      aspectRatio: "aspect-square"
    },
    {
      id: 3,
      image: "/purple-setup.jpg",
      gridArea: "span 1 / span 1",
      aspectRatio: "aspect-[4/3]"
    },
    {
      id: 4,
      image: "/red-couch.jpg",
      gridArea: "span 1 / span 1",
      aspectRatio: "aspect-[3/2]"
    },
    {
      id: 5,
      image: "/purple-wide.jpg",
      gridArea: "span 1 / span 2",
      aspectRatio: "aspect-[16/9]"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] mx-auto max-w-7xl">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className={`group relative overflow-hidden  shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out ${item.gridArea}`}
            style={{
              gridArea: item.gridArea
            }}
          >
            <div className={`relative w-full h-full ${item.aspectRatio || 'aspect-video'}`}>
              <img
                src={item.image}
                alt="Event decoration setup"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    
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