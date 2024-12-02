const ProfileImage = ({ src, className, alt }) => {
  return (
    <img
      src={src || "NIA.jpg"}
      className={className}
      alt={alt || "Profile"}
      loading="lazy"
    />
  );
};

export default ProfileImage;
