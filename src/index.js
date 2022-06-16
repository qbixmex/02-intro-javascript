import './index.css';

/* ===================================== */
/* ============= FETCH API ============= */
/* ===================================== */

const getImagePromise = (exists = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      exists 
        ? resolve('https://somedomain.com')
        : reject('Domain does not exist!')
    }, 1500);
  });
};

getImagePromise()
  .then((url) => {
    console.log('-'.repeat(12), 'THEN - CATCH', '-'.repeat(12));
    console.log('URL:', url)
  })
  .catch(console.error);

  
const getGiphy = async () => {
  try {

    const apiKey = 'oomM6BITz3sj9qYBePGd2lsEYVvEaQzc';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await response.json();
  
    const { url } = data.images.original;
    
    return url;

  } catch (error) {
    console.error(error);
  }
};

(async() => {
  const url = await getGiphy();
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
})();
