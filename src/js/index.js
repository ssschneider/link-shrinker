const linkToShrink = document.querySelector(".input input");
const btnShrink = document.querySelector(".input button");
const output = document.querySelector(".card > .output-link");
const shrunkLink = document.querySelector(".output-link .short-link");

async function shrinkLink (link) {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`
    const data = await fetch(url)
    const results = await data.json()
    const shortLink = results.result.full_short_link

    return shortLink
};

btnShrink.addEventListener("click", async () => {
    const link = linkToShrink.value;
    const shortLink = await shrinkLink(link)
    output.classList.add("show")
    shrunkLink.textContent = shortLink
});