import refs from "../refs"
const { selektEl } = refs

function creatMarkup(data) {
   return  data.map(({ id, name }) => ({ text: name, value: id }))
   
};

function creatMarkupCat(arr) {
   
   return arr.map(({ url, breeds: ( name, description, temperament ) })) `<img src="${url}" alt="${name}" width = 300px />
      <h1>${name}</h1>
      <p>${description}</p>
      <p>${temperament}</p>`
}

export {creatMarkup, creatMarkupCat}