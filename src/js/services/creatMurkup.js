import refs from "../refs"
const { selektEl, catInfo } = refs

function creatMarkup(data) {
   return  data.map(({ id, name }) => ({ text: name, value: id }))
   
};

function creatMarkupCat(arrey) {
      console.log(arrey);
   return arrey.map(arr => `<img class="photo" src="${arr.url}" alt="${arr.breeds[0].name}" width ="300" haight ="300" />
   <div class="card-info">
      <h1 >${arr.breeds[0].name}</h1>
      <p >${arr.breeds[0].description}</p>
      <p >Temperament: ${arr.breeds[0].temperament}</p>
      </div>`) 
}

export {creatMarkup, creatMarkupCat}