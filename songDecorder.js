// "AWUBBWUBC"

let data = "WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB";

function songDecoder(encodedSong) {
  let decodedSong = encodedSong.split("WUB").join(" ").trim();
  function removeSpaces(string) {
    return string.replace(/\s+/g, " ");
  }

  return removeSpaces(decodedSong);
}

console.log(songDecoder(data));
