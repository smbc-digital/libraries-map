const librariesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Library</span>
  </div>
  <div class="smbc-map__item__body">
  <p class="smbc-body">
    <a class="govuk-link" href="${feature.properties.url}" target="_blank">${feature.properties.facility_name}</a>
  </p>
  <p>Address: ${feature.properties.postal_address}</p>
  <p class="smbc-body">
    <a class="govuk-link" href="${feature.properties.opening__times}" target="_blank">Opening Times</a>
  </p>
  <p class="smbc-body">
    <a class="govuk-link" href="mailto:${feature.properties.email}" target="_blank">Email Library</a>
  </p>
  </div>
  </div>`

  layer.bindPopup(content)
}

export {
  librariesPopup
}