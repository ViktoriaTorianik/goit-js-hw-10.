import { fetchBreeds, fetchCatByBreed } from "./js/services/cat-api";
import { creatMarkup, creatMarkupCat } from "./js/services/creatMurkup";
// import creatMarkup from "./js/services/creatMurkup";
import refs from "./js/refs";
import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';

const sel = new SlimSelect({
  select: '.breed-select'
})

const { selektEl, catInfo, loaderEl,errorEl } = refs


fetchBreeds()
    .then(element =>
        sel.setData(creatMarkup(element))
    )
  .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
  })
  .finally(()=>loaderEl.classList.add('js-style'));

selektEl.addEventListener('change', onSelectCat)

function onSelectCat(e) {
  const id = e.target.value
  console.log(id);
  loaderEl.classList.remove('js-style')
  catInfo.innerHTML = " ";
  fetchCatByBreed(id).then(data =>
  // console.log(data))
    catInfo.innerHTML = (creatMarkupCat(data))
  )
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(()=>loaderEl.classList.add('js-style'))
  
}