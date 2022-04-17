import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Image from "../components/Image";

import { getRandomImages } from "../unsplash";

function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getRandomImages()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(
          data.map((image) => ({
            id: image.id,
            imageUrl: image.urls.regular,
            downloadUrl: image.urls.full,
            username: image.user.username,
            userImageUrl: image.user.profile_image.medium,
            profileUrl: image.user.links.html,
          }))
        );
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <>
      <Hero />

      <div className="wrapper">
        <div className="container">
          <div className="images__container">
            {images.map((image) => (
              <Image key={image.imageUrl} data={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
