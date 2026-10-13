export const coffeeOrigins = {
  Yirgacheffe: {
    id: '01',
    subtitle: 'Coffee from Yirgacheffe',
    description:
      'Yirgacheffe is a coffee-growing area in the Gedeo Zone of southern Ethiopia, known for floral, citrus, and tea-like Arabica coffees.',
    descriptionExtra:
      'Specific variety, processing method, grade, and cup details vary by lot and are confirmed for each offer.',
    map: {
      label: 'Yirgacheffe, Gedeo Zone, Ethiopia',
      search: 'Yirgacheffe, Gedeo Zone, Ethiopia',
      description:
        'Coffee-growing area in Gedeo Zone, southern Ethiopia. The exact sourcing point varies by lot.',
    },
    specs: [
      { label: 'Location', value: 'Gedeo Zone, southern Ethiopia' },
      {
        label: 'Growing elevation',
        value: '1,700–2,200 m (regional range; lot details vary)',
      },
      { label: 'Coffee', value: 'Arabica; variety details are lot-specific' },
      {
        label: 'Processing',
        value: 'Washed and natural lots; availability varies',
      },
      { label: 'Cup profile', value: 'Floral, citrus, and tea-like' },
    ],
    gridSubtitle:
      'Origin, processing, and lot specifications shape the character of Yirgacheffe coffee.',
    items: [
      {
        id: 'origin',
        title: 'Growing Area',
        text: 'Yirgacheffe coffee comes from the Gedeo Zone in southern Ethiopia.',
      },
      {
        id: 'variety',
        title: 'Coffee Type',
        text: 'Arabica lots are offered with variety or landrace details confirmed when available.',
      },
      {
        id: 'processing',
        title: 'Processing',
        text: 'Washed and natural coffees may be available; each offer identifies its process.',
      },
      {
        id: 'grade',
        title: 'Grade',
        text: 'Export grade and physical specifications are confirmed for each available lot.',
      },
      {
        id: 'cup-profile',
        title: 'Cup Profile',
        text: 'Often described through floral aromas, citrus notes, and a tea-like character.',
      },
      {
        id: 'sourcing',
        title: 'Lot Details',
        text: 'Harvest, station, elevation, and availability are provided according to each offer.',
      },
    ],
  },
  Sidama: {
    id: '02',
    subtitle: 'Coffee from Sidama',
    description:
      'Sidama is a major coffee-growing region in southern Ethiopia, known for Arabica coffees with balanced cups and berry and spice notes.',
    descriptionExtra:
      'Processing, grade, and cup specifications depend on the station and lot available for the season.',
    map: {
      label: 'Sidama Region, Ethiopia',
      search: 'Sidama Region, Ethiopia',
      description:
        'Coffee-growing region in southern Ethiopia. The exact sourcing point varies by lot.',
    },
    specs: [
      { label: 'Location', value: 'Sidama Region, southern Ethiopia' },
      {
        label: 'Growing elevation',
        value: '1,550–2,200 m (regional range; lot details vary)',
      },
      { label: 'Coffee', value: 'Arabica; variety details are lot-specific' },
      {
        label: 'Processing',
        value: 'Washed and natural lots; availability varies',
      },
      { label: 'Cup profile', value: 'Balanced, with berry and spice notes' },
    ],
    gridSubtitle:
      'Sidama lots vary by growing area, station, harvest, and processing method.',
    items: [
      {
        id: 'origin',
        title: 'Growing Area',
        text: 'Sidama coffee is sourced from coffee-growing communities in southern Ethiopia.',
      },
      {
        id: 'variety',
        title: 'Coffee Type',
        text: 'Arabica lots are offered with variety or landrace details confirmed when available.',
      },
      {
        id: 'processing',
        title: 'Processing',
        text: 'Washed and natural coffees may be available; each offer identifies its process.',
      },
      {
        id: 'grade',
        title: 'Grade',
        text: 'Export grade and physical specifications are confirmed for each available lot.',
      },
      {
        id: 'cup-profile',
        title: 'Cup Profile',
        text: 'A balanced cup, commonly associated with berry and spice notes.',
      },
      {
        id: 'sourcing',
        title: 'Lot Details',
        text: 'Harvest, station, elevation, and availability are provided according to each offer.',
      },
    ],
  },
  Guji: {
    id: '03',
    subtitle: 'Coffee from Guji',
    description:
      'Guji is a coffee-growing zone in Oromia Region, southern Ethiopia, producing Arabica coffees with floral and fruit-forward character.',
    descriptionExtra:
      'Available lots can differ by sub-area, processing method, grade, and harvest conditions.',
    map: {
      label: 'Guji Zone, Oromia, Ethiopia',
      search: 'Guji Zone, Oromia, Ethiopia',
      description:
        'Coffee-growing zone in Oromia Region, southern Ethiopia. The exact sourcing point varies by lot.',
    },
    specs: [
      { label: 'Location', value: 'Guji Zone, Oromia Region, Ethiopia' },
      {
        label: 'Growing elevation',
        value: '1,800–2,300 m (regional range; lot details vary)',
      },
      { label: 'Coffee', value: 'Arabica; variety details are lot-specific' },
      {
        label: 'Processing',
        value: 'Washed and natural lots; availability varies',
      },
      { label: 'Cup profile', value: 'Floral, with tropical-fruit notes' },
    ],
    gridSubtitle:
      'Guji coffee lots reflect differences in sub-area, harvest, and processing method.',
    items: [
      {
        id: 'origin',
        title: 'Growing Area',
        text: 'Guji coffee comes from the Guji Zone of Oromia Region in southern Ethiopia.',
      },
      {
        id: 'variety',
        title: 'Coffee Type',
        text: 'Arabica lots are offered with variety or landrace details confirmed when available.',
      },
      {
        id: 'processing',
        title: 'Processing',
        text: 'Washed and natural coffees may be available; each offer identifies its process.',
      },
      {
        id: 'grade',
        title: 'Grade',
        text: 'Export grade and physical specifications are confirmed for each available lot.',
      },
      {
        id: 'cup-profile',
        title: 'Cup Profile',
        text: 'Often associated with floral aromas and tropical-fruit character.',
      },
      {
        id: 'sourcing',
        title: 'Lot Details',
        text: 'Harvest, station, elevation, and availability are provided according to each offer.',
      },
    ],
  },
};

export const coffeeOriginNames = Object.keys(coffeeOrigins);
