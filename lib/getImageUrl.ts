const getImageUrl = (imageUrl: string, fullSize?: boolean) => {
    return (
      imageUrl &&
      `https://image.tmdb.org/t/p/${
        fullSize ? "original" : "w500"
      }/${imageUrl}`
    );
  };

  export default getImageUrl