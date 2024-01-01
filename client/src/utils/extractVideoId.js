const extractVideoId = (youtubeUrl) => {
  // Regular expression to match YouTube video ID
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  
  // Match the regular expression against the URL
  const match = youtubeUrl.match(regExp);

  // If there is a match, return the video ID, otherwise return null
  return match ? match[1] : null;
}

export default extractVideoId;
