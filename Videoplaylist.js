const videosList = [
{
	video: 'https://www.udrop.com/file/Lxp5/spy_x_family_S1E1.mp4',
	title: 'Spy x family S1E1'
},
{
	video: 'https://www.udrop.com/file/Lxpb/spy_x_family_S1E2.mp4',
	title: 'Spy x family S1E2'
},
{
	video: 'https://www.udrop.com/file/Lxpe/SPY_x_FAMILY_S01E03_[RareToonsIndia]_720P_HD.compressed.mp4',
	title: 'Spy x family S1E3'
},
{
	video: 'https://www.udrop.com/file/Lxpf/SPY_x_FAMILY_S01E04_[RareToonsIndia]_720P_HD.compressed.mp4',
	title: 'Spy x family S1E4'
},
{
	video: 'https://www.udrop.com/file/Lxpk/SPY_x_FAMILY_S01E05_[RareToonsIndia]_720P_HD.compressed.mp4',
	title: 'Spy x family S1E5'
},
{
	video: 'https://www.udrop.com/file/Lxpp/Spy_X_Family_S01e06_[Raretoonsindia]_720P_Hd.mp4',
	title: 'Spy x family S1E6'
},
{
	video: 'https://www.udrop.com/file/LxpA/Spy_X_Family_S01e07_[Raretoonsindia]_720P_Hd.mp4',
	title: 'Spy x family S1E7'
},
{
	video: 'https://www.udrop.com/file/LxpD/Spy_X_Family_S01e08_[Raretoonsindia]_720P_Hd.mp4',
	title: 'Spy x family S1E8'
},
{
	video: 'https://www.udrop.com/file/LxxR/Spy_X_Family_S01e09_[Raretoonsindia]_720P_Hd.mp4',
	title: 'Spy x family S1E9'
},
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title } = item;
	return (
		`<div class="list active">
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});