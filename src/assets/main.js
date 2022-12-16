const API = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=64DeIu3fuAjVT0sixhWc8D&offset=0&limit=100';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': 'a5fe56e887msh9a7cf7cc7c977e3p1f171djsnfe5d4e2efe65',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch (urlApi, options);
  const data = await response.json();
  return data;
} console.log(fetchData(API));

(async () => {
  try{
    const playlist = await fetchData(API);
    let view = `
    ${playlist.items.map(music => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${music.track.album.images[1].url}" alt="${music.track.name}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${music.track.name}
          </h3>
        </div>
      </div>
    `).slice(0, 80).join('')}
    `;
    content.innerHTML = view;
  } catch (error){
    console.error(error);
  }
})();