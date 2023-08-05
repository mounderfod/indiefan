let bar = document.getElementById("topBar")
quotes = [
    "My best friend's a butcher, he has sixteen knives",
    "I got soul, but I'm not a soldier",
    "It's different now that I'm poor and aging",
    "It's High Green mate, via Hillsborough please",
    "The room is on fire while she's fixing her hair",
    "I'm going to Wichita, far from this opera forever more",
    "Coming out of my cage and I've been feeling just fine",
    "I bet that you look good on the dancefloor",
    "Oh baby I feel so down",
    "I'm just trying to find a mountain I can climb",
    "Outside the cafby the cracker factory",
]

let random = Math.floor(Math.random() * quotes.length);
bar.innerText = quotes[random];