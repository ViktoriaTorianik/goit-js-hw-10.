import { fetchBreeds, fetchCatByBreed } from "./js/services/cat-api";

import creatMarkup from "./js/services/creatMurkup";
import refs from "./js/refs";
import SlimSelect from 'slim-select'

const sel = new SlimSelect({
  select: '.breed-select'
})

const { selektEl } = refs

fetchBreeds()
    .then(element =>
        sel.setData(creatMarkup(element))
    )
    .catch(console.log);

selektEl.addEventListener('change', onSelectCat)
function onSelectCat(e) {
    const id = e.target.value
  fetchCatByBreed(id).then(elem=>console.log(elem))
}