/*=================================================================*\
/* By: 			|	Nevera Development  							|
/* FiveM: 		|	https://forum.cfx.re/u/neveradevelopment		|
/* Discord: 	|	https://discord.gg/NeveraDev/tw28AqrgWU  		|
/*=================================================================*/
/* If you have any problems you can contact us via discord. <3     */


var staff_team = [

	{
		"name":"Sasha",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Owner / Dev"
	},
	{
		"name":"Chace",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Owner"
	},
    {
		"name":"Kyzn",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Owner"
	},
    {
		"name":"Amoura",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Leadership"
	},
    {
		"name":"KLAUS",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Leadership"
	},
    {
		"name":"stumps",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Developer"
	},
    {
		"name":"Roger",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Developer"
	},
    {
		"name":"Dawn",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Management"
	},
    {
		"name":"Jonty",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Management"
	},
    {
		"name":"Clipz",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Management"
	},
    {
		"name":"Mik",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Staff Manager"
	},
    {
		"name":"Saint",
		"image":"https://i.ibb.co/hJ2SsHnn/Astral-Logo-2.gif",
		"rank":"Staff Manager"
	},

]

const tipsConfig = [
    {
        title: "Rules",
        text: "Make sure to check the rules, it is your responsibility to know them.",
        img: "",
        timeout: 10 // seconds
    },
    {
        title: "Need Help?",
        text: "Our community is here to help! Whether that be staff via the support tickets or from members of the community in Discord!",
        img: "",
        timeout: 10 // seconds
    },
    {
        title: "Need Help In City?",
        text: "Create a /report so that staff can assist you with your issue as soon as possible. Please describe your issue in as much detail as you can, simply asking for help will not get you it.",
        img: "",
        timeout: 10 // seconds
    },
    {
        title: "Have a player or issue to report?",
        text: "We require clips to help you! For most cases, we require 30 seconds of video evidence including prior engagements or conversations that led to the situation.",
        img: "",
        timeout: 10 // seconds
    },
    {
        title: "Businesses",
        text: "Need something from a business? Contact them via the in-city phone or in emails.",
        img: "",
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
const showStaffTeam = true
const showTipList = false


// orange
// red
// blue
// green
// pink
// purple
const theme = "red"

// ==== WINTER UPDATE !! ==== \\
const enableWinterUpdate = true
// ==== WINTER UPDATE !! ==== \\


// Text settings
const name = "<strong>AST</strong>RAL"
const underName = "GAM<b>ING</b>"
const desc = ""


// Font / typography settings
// You can provide Google font URLs (or other stylesheet URLs) in `fontsToLoad` to be injected into the page.
// `fontSettings` accepts CSS properties as strings for each text role.
const fontsToLoad = [
    // Load Audiowide for a uniform test font across the loading screen
    "https://fonts.googleapis.com/css2?family=Audiowide&display=swap",
];

const fontSettings = {
    // Upper title (the `name` from config)
    name: {
        fontFamily: "'Audiowide', cursive",
        fontSize: "5vw",
        fontWeight: "900",
        fontStyle: "italic",
        color: "#ffffff",
        letterSpacing: "0.25vw"
    },
    // Lower title (the `underName` from config)
    underName: {
        fontFamily: "'Audiowide', cursive",
        fontSize: "2vw",
        fontWeight: "800",
        fontStyle: "italic",
        color: "#ffffff",
        letterSpacing: "0.2vw"
    },
    // Description (the `desc` from config)
    desc: {
        fontFamily: "'Audiowide', cursive",
        fontSize: "0.75vw",
        fontWeight: "400",
        color: "#dbdbdb"
    },
    // Tips list title (tipsConfig[].title)
    tipTitle: {
        fontFamily: "'Audiowide', cursive",
        fontSize: "1.3vw",
        fontWeight: "600",
        color: "#ffffff"
    },
    // Tips list description (tipsConfig[].text)
    tipText: {
        fontFamily: "'Audiowide', cursive",
        fontSize: "0.7vw",
        fontWeight: "300",
        color: "#9f9f9f"
    },
    // Staff team name (staff_team[].name)
    staffName: {
        fontFamily: "'Audiowide', cursive",
        fontSize: "0.7vw",
        fontWeight: "700",
        color: "#ffffff"
    },
    // Staff team rank (staff_team[].rank)
    staffRank: {
        fontFamily: "'Audiowide', cursive",
        fontSize: "0.7vw",
        fontWeight: "700",
        color: "rgba(193, 67, 255, 1)" // default uses --main color in CSS; keep a visible default here
    }
};


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
// Default volume level (0-100). This sets the initial slider value and media volume on load.
const defaultVolume = 30

// === Slideshow Configuration (v1.6.5) ===
const enableImageSlideshow = true;
const slideshowImages = [
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
const imageDisplayTime = 6000; // milliseconds
const imageFadeTime = 1000; // milliseconds
const imageRandomOrder = true;


// UPDATE CHECKER
const checkForUpdates = true;
const repoUrl = 'https://github.com/sstumpss/ag_loadingscreen';


// HELP //

//-- YOUTBE
//-- LOCAL AUDIO
// if localAudio is true, then loading will load "audio.mp3" file and play it except youtube audio.
// if localAudio is false, then loading will load youtube audio.

//-- LOCAL VIDEO
// if enableLocalVideo is true, then loading will load "video.webm" file and play it except youtube video.
// If localVideo is enabled, showYoutubeVideo is automatically disabled.
// You can only import a video from either YouTube or local. Local video taking priority.