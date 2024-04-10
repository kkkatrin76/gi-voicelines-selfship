var version = "1.4";
var chars = [];
var char = null;
var vlTitle = "";
var vlContent = "";
var tumblrUsername = "[tumblr_username_here]";
var dbResult = null;
var name = "[name]";

function appendVersion() {
    document.getElementById('version').innerHTML = "v" + version;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTumblrUsername(promptText) {
    // Check if username included in url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let tusr = urlParams.get('tumblrUsername');

    if (!tusr) {
        // Get and sent tumblrUsername
        tumblrUsername = localStorage.getItem("tumblrUsername");
        if (!tumblrUsername || tumblrUsername == undefined || tumblrUsername === "null") {
            tumblrUsername = prompt(promptText ? promptText : "Please enter your Tumblr username:", `${tumblrUsername}`);
            tumblrUsername = tumblrUsername.toLowerCase();
            if (!tumblrUsername || tumblrUsername == undefined || tumblrUsername === "null") {
                getTumblrUsername("Please enter a valid Tumblr username:");
                return;
            } else {
                localStorage.setItem("tumblrUsername", tumblrUsername);
            }
        }
    } else {
        tumblrUsername = tusr;
    }

    // Check if username is valid
    dbResult = db[tumblrUsername];
    if (!dbResult || dbResult == undefined || dbResult === "null") {
        alert("That username isn't registered in the list.")
        localStorage.removeItem("tumblrUsername");
        getTumblrUsername("Please enter a valid Tumblr username:");
        return;
    }

    localStorage.setItem("tumblrUsername", tumblrUsername);

    // Alert orientation (has to be landscape)
    if(window.innerHeight > window.innerWidth) {
        alertOrientation();
    }

    initChars();
}

async function initChars() {
    let voicelines = {};

    voicelines[dbResult.foName] = dbResult.voicelines;

    chars = [{
        key: dbResult.foName,
        name: await capitalize(dbResult.foName),
        bg: dbResult.foVideoFile,
        idx: 0,
        voicelines: voicelines[dbResult.foName]
    }];
    char = chars[0];
    
    document.getElementById('char-name').innerHTML = char.name;

    document.getElementById('user-name').innerHTML = dbResult.name;

    await changeVideoSource(char.bg);
    await constructVoicelinesList();
    // getChar();
}

// function getChar() {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);

//     let charKey = urlParams.get('char');
//     charKey = charKey ? charKey : "kazuha"

//     chars.forEach((c) => {
//         if (charKey === c.key) {
//             char = c;
//         }
//     });

//     onChangeCharacter();
// }

// function changeCharacter(dir) {
//     if (dir === "next") {
//         let nextIdx = char.idx + 1;
//         if (nextIdx >= chars.length) {
//             nextIdx = 0;
//         }
//         char = chars[nextIdx];
//     } else if (dir === "prev") {
//         let prevIdx = char.idx - 1;
//         if (prevIdx < 0) {
//             prevIdx = chars.length - 1;
//         }
//         char = chars[prevIdx];
//     }

//     onChangeCharacter();
// }

// function onChangeCharacter() {
//     document.getElementById('char-name').innerHTML = char.name;

//     changeVideoSource(char.bg);
//     constructVoicelinesList();
// }

function changeVideoSource(bg) {
    var video = document.getElementById('video-bg');
    var source = document.getElementById('video-src');
    video.pause();

    source.setAttribute('src', bg);
    source.setAttribute('type', 'video/mp4');

    video.load();

    vlTitle = "";
    vlContent = "";
    constructVoicelineContent();
}

function constructVoicelinesList() {
    let innerHTML = "";

    char.voicelines.forEach((vl) => {
        innerHTML += `
            <div class="vl-title-outer">
                <button class="vl-title-inner" onclick="selectVl('${vl.title}')">${vl.title}</button>
            </div>
        `;
    });

    document.getElementById('vl-list').innerHTML = innerHTML;
}

function selectVl(title) {
    vlTitle = title;
    char.voicelines.forEach((vl) => {
        if (vl.title === title) {
            vlContent = vl.content;
        }
    });

    constructVoicelineContent();
}

function constructVoicelineContent() {
    vlContent = vlContent.replace(/\n/g, "<br>");
    document.getElementById('vl-title').innerHTML = vlTitle;
    document.getElementById('vl-content').innerHTML = vlContent;
    document.getElementById('vl-content').scrollTop = 0;
}

function changeTumblrUsername() {
    tumblrUsername = null;
    localStorage.removeItem("tumblrUsername");
    getTumblrUsername();
}

// Mobile device alert
var warned = false;
var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    // alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
    if (window.orientation === 0 || window.orientation === 180) {
        if (!warned) {
            alertOrientation();
        }
    }
}, false);

function alertOrientation() {
    alert("Attention! Page best viewed in landscape orientation and optimized for PC 2560 × 1600 and iPhone 13 Pro screens.")
    warned = true;
    var video = document.getElementById('video-bg');
    video.play();
}
