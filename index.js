import { addArt, getAllArt } from "./src/art.js";

await addArt({
    artist: "Van Gogh",
    title: "Irises",
    media: "Oil",
});

await addArt({
    artist: "da Vinci",
    title: "Last Supper",
    media: "Oil"
});

await getAllArt();