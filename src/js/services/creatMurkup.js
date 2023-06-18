import refs from "../refs"
const { selektEl, catInfo } = refs

function creatMarkup(data) {
   return  data.map(({ id, name }) => ({ text: name, value: id }))
   
};

function creatMarkupCat(arr) {
   
   return `<img src="${arr.url}" alt="${arr.breeds
.name}" width = 300px />
      <h1>${arr.breeds.
name}</h1>
      <p>${arr.breeds.description}</p>
      <p>${arr.breeds.temperament}</p>`
}

export {creatMarkup, creatMarkupCat}