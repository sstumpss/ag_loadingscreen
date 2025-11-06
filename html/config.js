/*=================================================================*\
/* By: 			|	Nevera Development  							|
/* FiveM: 		|	https://forum.cfx.re/u/neveradevelopment		|
/* Discord: 	|	https://discord.gg/NeveraDev/tw28AqrgWU  		|
/*=================================================================*/
/* If you have any problems you can contact us via discord. <3     */


var staff_team = [

	{
		"name":"Nevera Owner",
		"image":"https://forum.cfx.re/user_avatar/forum.cfx.re/neveradevelopment/144/4447132_2.png",
		"rank":"Owner"
	},
	{
		"name":"Nevera Admin",
		"image":"https://forum.cfx.re/user_avatar/forum.cfx.re/neveradevelopment/144/4447132_2.png",
		"rank":"Admin"
	}

]

const tipsConfig = [
    {
        title: "Tip 1 (short)",
        text: "Always wear your seatbelt when driving in Los Santos.",
        img: "https://placehold.co/314x176/EEE/31343C",
        timeout: 10 // seconds
    },
    {
        title: "Tip 2 (long)",
        text: "Explore different jobs on the server, like taxi driving, delivery missions, or even criminal activities. Each job has its own rewards and risks. Remember to manage your time wisely, avoid unnecessary conflicts, and cooperate with other players to maximize your gains and enjoy the roleplay experience to the fullest. Take advantage of special events and seasonal activities to earn unique rewards. Always keep an eye on the map for dynamic missions and spontaneous opportunities, and make sure your character is properly equipped for any challenge that comes your way. Building relationships with other players can also unlock new roles and adventures, making every session unpredictable and exciting.",
        img: "https://placehold.co/314x176/EEE/31343C",
        timeout: 10 // seconds
    },
    {
        title: "Tip 3 (empty-image)",
        text: "Keep backup gear: weapons, vehicles, and medical kits are essential for surviving unexpected situations.",
        img: "",
        timeout: 10 // seconds
    },
    {
        title: "Tip 4 (no image)",
        text: "Read the server rules carefully and respect roleplay guidelines. Following the rules ensures a better experience for everyone.",
        timeout: 10 // seconds
    },
    {
        title: "Tip 5 (local-image)",
        text: "Keep backup gear: weapons, vehicles, and medical kits are essential for surviving unexpected situations.",
        img: "/tips/tip1.jpg",
        timeout: 10 // seconds
    },
];


// Image settings
const bgImages = [
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png',
  'images/5.png',
  'images/6.png',
  'images/7.png',
  'images/8.png',
  'images/9.png',
];




// Staff Settings
const showStaffTeam = false
const showTipList = false


// orange
// red
// blue
// green
// pink
// purple
const theme = "purple"

// ==== WINTER UPDATE !! ==== \\
const enableWinterUpdate = true
// ==== WINTER UPDATE !! ==== \\


// Text settings
const name = "<strong>AST</strong>RAL"
const underName = "GAM<b>ING</b>"
const desc = ""


// Social media
const discord = "https://discord.com/astralgaming"  // If = "" then icon will not show up on screen
const instagram = ""	// https://example.com
const youtube = "" 		// https://example.com
const twitter = "" 		// https://example.com
const tiktok = ""  		// https://example.com
const facebook = ""		// https://example.com
const twitch = "" 		// https://example.com
const github = "" 		// https://example.com


// Video Settings
const videoBlur = 0
var videoOpacity = 0.3


// Example link: https://www.youtube.com/watch?v=abcdefgh
const youtubeVideo = ""
const showYoutubeVideo = false

// Local Video
const enableLocalVideo = false

// Local audio
const localAudio = true

// === Slideshow Configuration (v1.6.5) ===
const enableImageSlideshow = true;
const slideshowImages = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
];
const imageDisplayTime = 6000; // milliseconds
const imageFadeTime = 1000; // milliseconds
const imageRandomOrder = true;



// HELP //

//-- YOUTBE
//-- LOCAL AUDIO
// if localAudio is true, then loading will load "audio.mp3" file and play it except youtube audio.
// if localAudio is false, then loading will load youtube audio.

//-- LOCAL VIDEO
// if enableLocalVideo is true, then loading will load "video.webm" file and play it except youtube video.
// If localVideo is enabled, showYoutubeVideo is automatically disabled.
// You can only import a video from either YouTube or local. Local video taking priority.