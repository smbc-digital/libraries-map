const librariesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-book" aria-hidden="true"></i><p class="title">Library</p>
  <p></p>
  <p class="info"><a href="${feature.properties.url}" target="_blank">${feature.properties.facility_name}</a></p>
  <p class="info">Address: ${feature.properties.postal_address}</p>
  <p class="info"><a href="${feature.properties.opening__times}" target="_blank">Opening Times</a></p>
  <p></p>
  <p class="title"><a href="mailto:${feature.properties.email}" target="_blank">Email Library</a></p>
  </div>`

  layer.bindPopup(content)
}

export {
  librariesPopup
}