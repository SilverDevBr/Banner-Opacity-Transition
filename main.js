let bannerContent = document.querySelectorAll('.banner-content');
let bannerIndex = 0;
let maxBanner = bannerContent.length

function nextBanner(){
	bannerContent[bannerIndex].classList.remove('current-banner');
	bannerIndex++

	if(bannerIndex == maxBanner){
		bannerIndex = 0;
	}
	
	bannerContent[bannerIndex].classList.add('current-banner');
}

setInterval(nextBanner, 5000);