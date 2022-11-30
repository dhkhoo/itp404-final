function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchMakeupList() {
  return _fetch("http://localhost:3000/products");
}

export function fetchMakeup(makeupId) {
  return _fetch(`http://localhost:3000/products/${makeupId}`);
}

// POST /addProduct
export function addMakeup(
  name,
  brand,
  link,
  image,
  type,
  variant,
  price,
  expiry,
  open,
  notes,
  added,
  favorite,
  dateFavorited
) {
  return fetch("http://localhost:3000/products", {
    method: "POST",
    body: JSON.stringify({
      productName: name,
      brand: brand,
      link: link,
      imageLink: image,
      type: type,
      variant: variant,
      price: price,
      expiry: expiry,
      open: open,
      notes: notes,
      dateAdded: added,
      favorite: favorite,
      dateFavorited: dateFavorited
    }),
    headers: {
      "Content-type": "application/json"
    }
  }).then((response) => {
    return response.json();
  });
}

// PATCH /products/:id
export function updateMakeup(
  makeupId,
  name,
  brand,
  link,
  image,
  type,
  variant,
  price,
  expiry,
  open,
  notes
) {
  return fetch(`http://localhost:3000/products/${makeupId}`, {
    method: "PATCH",
    body: JSON.stringify({
      productName: name,
      brand: brand,
      link: link,
      imageLink: image,
      type: type,
      variant: variant,
      price: price,
      expiry: expiry,
      open: open,
      notes: notes
    }),
    headers: {
      "Content-type": "application/json"
    }
  }).then((response) => {
    if (response.status >= 400) {
      return Promise.reject();
    }

    return response.json();
  });
}

// DELETE /products/:id
export function deleteProduct(makeupId) {
  return fetch(`http://localhost:3000/products/${makeupId}`, {
    method: "DELETE"
  });
}

// UPDATE FAVORITES
// PATCH /products/:id
export function updateFavorite(makeupId, favorite, dateFavorited) {
  return fetch(`http://localhost:3000/products/${makeupId}`, {
    method: "PATCH",
    body: JSON.stringify({
      favorite: favorite,
      dateFavorited: dateFavorited
    }),
    headers: {
      "Content-type": "application/json"
    }
  }).then((response) => {
    if (response.status >= 400) {
      return Promise.reject();
    }

    return response.json();
  });
}
