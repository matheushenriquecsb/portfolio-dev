"use client";

import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 3.4, ease: "easeInOut" },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src="/assets/profile.png"
            priority
            quality={100}
            fill
            alt="profile-image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
