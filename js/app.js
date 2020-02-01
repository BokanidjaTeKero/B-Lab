
var key = 'AIzaSyBoa3RWEUab5DA_GgxHRpDG40pU0NPraHM';
var searchbtn = document.querySelector('.search button');
var videoList = document.querySelector('.video-list')
var videoPreview = document.querySelector('.video-preview');
var searchField = document.querySelector('.search input');

function onSearch() {
	
	searchField.value.trim() && getVideos(searchField.value);
	searchField.value = '';
}

function getVideos(searchValue) {

	var newRequest = new XMLHttpRequest();

	newRequest.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + searchValue + '&key=' + key);

	newRequest.onload = function() {
		listVideos(JSON.parse(newRequest.responseText).items);		
	}

	newRequest.send();
}

function listVideos(videos) {
	videoList.innerHTML = '';

	videos.forEach(function(video) {
		addVideo(video);
	})	
}

function addVideo(videoData) {
	var videoElement = document.createElement('div');
	var img = '<img src="' + videoData.snippet.thumbnails.medium.url + '" />';
	
	var title = '<h3>' + videoData.snippet.title + '</h3>';
	var desc = '<div class="description">' + videoData.snippet.description + '</div>';

	videoElement.innerHTML = img + '<section>' + title + desc + '</section>';

	videoList.appendChild(videoElement);

	videoElement.querySelectorAll('h3, img').forEach(function(element) {
		element.addEventListener('click', function() {
			openVideo(videoData.id.videoId);
			
		});
		element.addEventListener('click', function() {
			getRelatedVideos(videoData.id.videoId);
		});	
	});
};

function openVideo(id) {
	videoPreview.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ id + '"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
};

function getRelatedVideos(id) {
	
	var relatedVideosRequest = new XMLHttpRequest();

	relatedVideosRequest.open('GET', ' https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId=' + id + '&type=video&key=' + key);

	relatedVideosRequest.onload = function() {
		listVideos(JSON.parse(relatedVideosRequest.responseText).items);		
	}

	relatedVideosRequest.send();
}


searchbtn.addEventListener('click', onSearch);
searchField.addEventListener('keyup', function(event) {
   
    event.keyCode === 13 && onSearch();
});