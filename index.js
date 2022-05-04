function whisper(string) {
    return string.toLowerCase()
}
function shout(string) {
    return string.toUpperCase()
}
function logShout() {
    console.log(shout('hello'));
}
logShout()

function logWhisper() {
    console.log(whisper('HELLO'));
}
logWhisper()
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase())
        return "I can't hear you!";
    if (string === string.toUpperCase())
        return "YES INDEED!";
    if (string === "Let's have dinner together!")
        return "I would love to!";
}