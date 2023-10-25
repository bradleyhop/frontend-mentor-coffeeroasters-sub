const planSelections = [
  {
    id: 0,
    selectionTitle: 'How do you drink your coffee?',
    selectionType: 'how',
    selections: [
      {
        id: 0,
        isSelected: false,
        selectionName: 'Capsule',
        selectionDescription:
          'Compatible with Nespresso systems and similar brewers',
      },
      {
        id: 1,
        isSelected: false,
        selectionName: 'Filter',
        selectionDescription:
          'For pour over or drip methods like Aeropress, Chemex, and V60',
      },
      {
        id: 2,
        isSelected: false,
        selectionName: 'Espresso',
        selectionDescription:
          'Dense and finely ground beans for an intense, flavorful experience',
      },
    ],
  },
  {
    id: 1,
    selectionTitle: 'What type of coffee?',
    selectionType: 'type',
    selections: [
      {
        id: 0,
        isSelected: false,
        selectionName: 'Single Origin',
        selectionDescription:
          'Distinct, high quality coffee from a specific family-owned farm',
      },
      {
        id: 1,
        isSelected: false,
        selectionName: 'Decaf',
        selectionDescription:
          'Just like regular coffee, except the caffeine has been removed',
      },
      {
        id: 2,
        isSelected: false,
        selectionName: 'Blended',
        selectionDescription:
          'Combination of two or three dark roasted beans of organic coffees',
      },
    ],
  },
  {
    id: 2,
    selectionTitle: 'How much would you like?',
    selectionType: 'size',
    selections: [
      {
        id: 0,
        isSelected: false,
        selectionName: '250g',
        selectionDescription:
          'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        id: 1,
        isSelected: false,
        selectionName: '500g',
        selectionDescription:
          'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        id: 2,
        isSelected: false,
        selectionName: '1000g',
        selectionDescription:
          'Perfect for offices and events. Yields about 90 delightful cups.',
      },
    ],
  },
  {
    id: 3,
    selectionTitle: 'Want us to grind them?',
    selectionType: 'grind',
    selections: [
      {
        id: 0,
        isSelected: false,
        selectionName: 'Wholebean',
        selectionDescription:
          'Best choice if you cherish the full sensory experience',
      },
      {
        id: 1,
        isSelected: false,
        selectionName: 'Filter',
        selectionDescription:
          'For drip or pour-over coffee methods such as V60 or Aeropress',
      },
      {
        id: 2,
        isSelected: false,
        selectionName: 'Cafetiére',
        selectionDescription:
          'Course ground beans specially suited for french press coffee',
      },
    ],
  },
  {
    id: 4,
    selectionTitle: 'How often should we deliver?',
    selectionType: 'frequency',
    selections: [
      {
        id: 0,
        isSelected: false,
        selectionName: 'Every week',
        selectionDescription:
          '$14.00 per shipment. Includes free first-class shipping.',
        cost: 14,
      },
      {
        id: 1,
        isSelected: false,
        selectionName: 'Every 2 weeks',
        selectionDescription:
          '$17.25 per shipment. Includes free priority shipping.',
        cost: 17.25,
      },
      {
        id: 2,
        isSelected: false,
        selectionName: 'Every 3 weeks',
        selectionDescription:
          '$22.50 per shipment. Includes free priority shipping.',
        cost: 22.50,
      },
    ],
  },
];

export default planSelections;
