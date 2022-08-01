/**
 * Icon Picker Definitions
 */

/**
 * FontAwesome 5.15.4
 */
// Obtain JSON object with a class list from the FA Cheatsheet
// https://fontawesome.com/v5/cheatsheet
// https://stackoverflow.com/questions/27992992/i-need-list-of-all-class-name-of-font-awesome
// const titleCase = (string) => {
//   let sentence = string.toLowerCase().split('-')
//   for (let i = 0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
//   }

//   return sentence.join(' ')
// }

// const groups = []
// const sections = document.querySelectorAll('.cheatsheet-set')
// for (const section of sections) {
//   const options = []
//   groups.push({
//     label: section.id.charAt(0).toUpperCase() + section.id.slice(1),
//     options,
//   })
//   const icons = section.querySelectorAll('.icon')
//   for (const icon of icons) {
//     const iconName = icon.querySelectorAll('dd')[0].innerText
//     let className
//     if (section.id === 'solid') className = 'fas'
//     if (section.id === 'regular') className = 'far'
//     if (section.id === 'brands') className = 'fab'
//     options.push({
//       label: titleCase(iconName),
//       value: className + ' fa-' + iconName,
//     })
//   }
// }
// console.table(JSON.stringify(groups))

export const fontAwesomeIcons = [
  {
    label: 'Solid',
    options: [
      {
        label: 'Ad',
        value: 'fas fa-ad',
      },
      {
        label: 'Address Book',
        value: 'fas fa-address-book',
      },
      {
        label: 'Address Card',
        value: 'fas fa-address-card',
      },
      {
        label: 'Adjust',
        value: 'fas fa-adjust',
      },
      {
        label: 'Air Freshener',
        value: 'fas fa-air-freshener',
      },
      {
        label: 'Align Center',
        value: 'fas fa-align-center',
      },
      {
        label: 'Align Justify',
        value: 'fas fa-align-justify',
      },
      {
        label: 'Align Left',
        value: 'fas fa-align-left',
      },
      {
        label: 'Align Right',
        value: 'fas fa-align-right',
      },
      {
        label: 'Allergies',
        value: 'fas fa-allergies',
      },
      {
        label: 'Ambulance',
        value: 'fas fa-ambulance',
      },
      {
        label: 'American Sign Language Interpreting',
        value: 'fas fa-american-sign-language-interpreting',
      },
      {
        label: 'Anchor',
        value: 'fas fa-anchor',
      },
      {
        label: 'Angle Double Down',
        value: 'fas fa-angle-double-down',
      },
      {
        label: 'Angle Double Left',
        value: 'fas fa-angle-double-left',
      },
      {
        label: 'Angle Double Right',
        value: 'fas fa-angle-double-right',
      },
      {
        label: 'Angle Double Up',
        value: 'fas fa-angle-double-up',
      },
      {
        label: 'Angle Down',
        value: 'fas fa-angle-down',
      },
      {
        label: 'Angle Left',
        value: 'fas fa-angle-left',
      },
      {
        label: 'Angle Right',
        value: 'fas fa-angle-right',
      },
      {
        label: 'Angle Up',
        value: 'fas fa-angle-up',
      },
      {
        label: 'Angry',
        value: 'fas fa-angry',
      },
      {
        label: 'Ankh',
        value: 'fas fa-ankh',
      },
      {
        label: 'Apple Alt',
        value: 'fas fa-apple-alt',
      },
      {
        label: 'Archive',
        value: 'fas fa-archive',
      },
      {
        label: 'Archway',
        value: 'fas fa-archway',
      },
      {
        label: 'Arrow Alt Circle Down',
        value: 'fas fa-arrow-alt-circle-down',
      },
      {
        label: 'Arrow Alt Circle Left',
        value: 'fas fa-arrow-alt-circle-left',
      },
      {
        label: 'Arrow Alt Circle Right',
        value: 'fas fa-arrow-alt-circle-right',
      },
      {
        label: 'Arrow Alt Circle Up',
        value: 'fas fa-arrow-alt-circle-up',
      },
      {
        label: 'Arrow Circle Down',
        value: 'fas fa-arrow-circle-down',
      },
      {
        label: 'Arrow Circle Left',
        value: 'fas fa-arrow-circle-left',
      },
      {
        label: 'Arrow Circle Right',
        value: 'fas fa-arrow-circle-right',
      },
      {
        label: 'Arrow Circle Up',
        value: 'fas fa-arrow-circle-up',
      },
      {
        label: 'Arrow Down',
        value: 'fas fa-arrow-down',
      },
      {
        label: 'Arrow Left',
        value: 'fas fa-arrow-left',
      },
      {
        label: 'Arrow Right',
        value: 'fas fa-arrow-right',
      },
      {
        label: 'Arrow Up',
        value: 'fas fa-arrow-up',
      },
      {
        label: 'Arrows Alt',
        value: 'fas fa-arrows-alt',
      },
      {
        label: 'Arrows Alt H',
        value: 'fas fa-arrows-alt-h',
      },
      {
        label: 'Arrows Alt V',
        value: 'fas fa-arrows-alt-v',
      },
      {
        label: 'Assistive Listening Systems',
        value: 'fas fa-assistive-listening-systems',
      },
      {
        label: 'Asterisk',
        value: 'fas fa-asterisk',
      },
      {
        label: 'At',
        value: 'fas fa-at',
      },
      {
        label: 'Atlas',
        value: 'fas fa-atlas',
      },
      {
        label: 'Atom',
        value: 'fas fa-atom',
      },
      {
        label: 'Audio Description',
        value: 'fas fa-audio-description',
      },
      {
        label: 'Award',
        value: 'fas fa-award',
      },
      {
        label: 'Baby',
        value: 'fas fa-baby',
      },
      {
        label: 'Baby Carriage',
        value: 'fas fa-baby-carriage',
      },
      {
        label: 'Backspace',
        value: 'fas fa-backspace',
      },
      {
        label: 'Backward',
        value: 'fas fa-backward',
      },
      {
        label: 'Bacon',
        value: 'fas fa-bacon',
      },
      {
        label: 'Bacteria',
        value: 'fas fa-bacteria',
      },
      {
        label: 'Bacterium',
        value: 'fas fa-bacterium',
      },
      {
        label: 'Bahai',
        value: 'fas fa-bahai',
      },
      {
        label: 'Balance Scale',
        value: 'fas fa-balance-scale',
      },
      {
        label: 'Balance Scale Left',
        value: 'fas fa-balance-scale-left',
      },
      {
        label: 'Balance Scale Right',
        value: 'fas fa-balance-scale-right',
      },
      {
        label: 'Ban',
        value: 'fas fa-ban',
      },
      {
        label: 'Band Aid',
        value: 'fas fa-band-aid',
      },
      {
        label: 'Barcode',
        value: 'fas fa-barcode',
      },
      {
        label: 'Bars',
        value: 'fas fa-bars',
      },
      {
        label: 'Baseball Ball',
        value: 'fas fa-baseball-ball',
      },
      {
        label: 'Basketball Ball',
        value: 'fas fa-basketball-ball',
      },
      {
        label: 'Bath',
        value: 'fas fa-bath',
      },
      {
        label: 'Battery Empty',
        value: 'fas fa-battery-empty',
      },
      {
        label: 'Battery Full',
        value: 'fas fa-battery-full',
      },
      {
        label: 'Battery Half',
        value: 'fas fa-battery-half',
      },
      {
        label: 'Battery Quarter',
        value: 'fas fa-battery-quarter',
      },
      {
        label: 'Battery Three Quarters',
        value: 'fas fa-battery-three-quarters',
      },
      {
        label: 'Bed',
        value: 'fas fa-bed',
      },
      {
        label: 'Beer',
        value: 'fas fa-beer',
      },
      {
        label: 'Bell',
        value: 'fas fa-bell',
      },
      {
        label: 'Bell Slash',
        value: 'fas fa-bell-slash',
      },
      {
        label: 'Bezier Curve',
        value: 'fas fa-bezier-curve',
      },
      {
        label: 'Bible',
        value: 'fas fa-bible',
      },
      {
        label: 'Bicycle',
        value: 'fas fa-bicycle',
      },
      {
        label: 'Biking',
        value: 'fas fa-biking',
      },
      {
        label: 'Binoculars',
        value: 'fas fa-binoculars',
      },
      {
        label: 'Biohazard',
        value: 'fas fa-biohazard',
      },
      {
        label: 'Birthday Cake',
        value: 'fas fa-birthday-cake',
      },
      {
        label: 'Blender',
        value: 'fas fa-blender',
      },
      {
        label: 'Blender Phone',
        value: 'fas fa-blender-phone',
      },
      {
        label: 'Blind',
        value: 'fas fa-blind',
      },
      {
        label: 'Blog',
        value: 'fas fa-blog',
      },
      {
        label: 'Bold',
        value: 'fas fa-bold',
      },
      {
        label: 'Bolt',
        value: 'fas fa-bolt',
      },
      {
        label: 'Bomb',
        value: 'fas fa-bomb',
      },
      {
        label: 'Bone',
        value: 'fas fa-bone',
      },
      {
        label: 'Bong',
        value: 'fas fa-bong',
      },
      {
        label: 'Book',
        value: 'fas fa-book',
      },
      {
        label: 'Book Dead',
        value: 'fas fa-book-dead',
      },
      {
        label: 'Book Medical',
        value: 'fas fa-book-medical',
      },
      {
        label: 'Book Open',
        value: 'fas fa-book-open',
      },
      {
        label: 'Book Reader',
        value: 'fas fa-book-reader',
      },
      {
        label: 'Bookmark',
        value: 'fas fa-bookmark',
      },
      {
        label: 'Border All',
        value: 'fas fa-border-all',
      },
      {
        label: 'Border None',
        value: 'fas fa-border-none',
      },
      {
        label: 'Border Style',
        value: 'fas fa-border-style',
      },
      {
        label: 'Bowling Ball',
        value: 'fas fa-bowling-ball',
      },
      {
        label: 'Box',
        value: 'fas fa-box',
      },
      {
        label: 'Box Open',
        value: 'fas fa-box-open',
      },
      {
        label: 'Box Tissue',
        value: 'fas fa-box-tissue',
      },
      {
        label: 'Boxes',
        value: 'fas fa-boxes',
      },
      {
        label: 'Braille',
        value: 'fas fa-braille',
      },
      {
        label: 'Brain',
        value: 'fas fa-brain',
      },
      {
        label: 'Bread Slice',
        value: 'fas fa-bread-slice',
      },
      {
        label: 'Briefcase',
        value: 'fas fa-briefcase',
      },
      {
        label: 'Briefcase Medical',
        value: 'fas fa-briefcase-medical',
      },
      {
        label: 'Broadcast Tower',
        value: 'fas fa-broadcast-tower',
      },
      {
        label: 'Broom',
        value: 'fas fa-broom',
      },
      {
        label: 'Brush',
        value: 'fas fa-brush',
      },
      {
        label: 'Bug',
        value: 'fas fa-bug',
      },
      {
        label: 'Building',
        value: 'fas fa-building',
      },
      {
        label: 'Bullhorn',
        value: 'fas fa-bullhorn',
      },
      {
        label: 'Bullseye',
        value: 'fas fa-bullseye',
      },
      {
        label: 'Burn',
        value: 'fas fa-burn',
      },
      {
        label: 'Bus',
        value: 'fas fa-bus',
      },
      {
        label: 'Bus Alt',
        value: 'fas fa-bus-alt',
      },
      {
        label: 'Business Time',
        value: 'fas fa-business-time',
      },
      {
        label: 'Calculator',
        value: 'fas fa-calculator',
      },
      {
        label: 'Calendar',
        value: 'fas fa-calendar',
      },
      {
        label: 'Calendar Alt',
        value: 'fas fa-calendar-alt',
      },
      {
        label: 'Calendar Check',
        value: 'fas fa-calendar-check',
      },
      {
        label: 'Calendar Day',
        value: 'fas fa-calendar-day',
      },
      {
        label: 'Calendar Minus',
        value: 'fas fa-calendar-minus',
      },
      {
        label: 'Calendar Plus',
        value: 'fas fa-calendar-plus',
      },
      {
        label: 'Calendar Times',
        value: 'fas fa-calendar-times',
      },
      {
        label: 'Calendar Week',
        value: 'fas fa-calendar-week',
      },
      {
        label: 'Camera',
        value: 'fas fa-camera',
      },
      {
        label: 'Camera Retro',
        value: 'fas fa-camera-retro',
      },
      {
        label: 'Campground',
        value: 'fas fa-campground',
      },
      {
        label: 'Candy Cane',
        value: 'fas fa-candy-cane',
      },
      {
        label: 'Cannabis',
        value: 'fas fa-cannabis',
      },
      {
        label: 'Capsules',
        value: 'fas fa-capsules',
      },
      {
        label: 'Car',
        value: 'fas fa-car',
      },
      {
        label: 'Car Alt',
        value: 'fas fa-car-alt',
      },
      {
        label: 'Car Battery',
        value: 'fas fa-car-battery',
      },
      {
        label: 'Car Crash',
        value: 'fas fa-car-crash',
      },
      {
        label: 'Car Side',
        value: 'fas fa-car-side',
      },
      {
        label: 'Caravan',
        value: 'fas fa-caravan',
      },
      {
        label: 'Caret Down',
        value: 'fas fa-caret-down',
      },
      {
        label: 'Caret Left',
        value: 'fas fa-caret-left',
      },
      {
        label: 'Caret Right',
        value: 'fas fa-caret-right',
      },
      {
        label: 'Caret Square Down',
        value: 'fas fa-caret-square-down',
      },
      {
        label: 'Caret Square Left',
        value: 'fas fa-caret-square-left',
      },
      {
        label: 'Caret Square Right',
        value: 'fas fa-caret-square-right',
      },
      {
        label: 'Caret Square Up',
        value: 'fas fa-caret-square-up',
      },
      {
        label: 'Caret Up',
        value: 'fas fa-caret-up',
      },
      {
        label: 'Carrot',
        value: 'fas fa-carrot',
      },
      {
        label: 'Cart Arrow Down',
        value: 'fas fa-cart-arrow-down',
      },
      {
        label: 'Cart Plus',
        value: 'fas fa-cart-plus',
      },
      {
        label: 'Cash Register',
        value: 'fas fa-cash-register',
      },
      {
        label: 'Cat',
        value: 'fas fa-cat',
      },
      {
        label: 'Certificate',
        value: 'fas fa-certificate',
      },
      {
        label: 'Chair',
        value: 'fas fa-chair',
      },
      {
        label: 'Chalkboard',
        value: 'fas fa-chalkboard',
      },
      {
        label: 'Chalkboard Teacher',
        value: 'fas fa-chalkboard-teacher',
      },
      {
        label: 'Charging Station',
        value: 'fas fa-charging-station',
      },
      {
        label: 'Chart Area',
        value: 'fas fa-chart-area',
      },
      {
        label: 'Chart Bar',
        value: 'fas fa-chart-bar',
      },
      {
        label: 'Chart Line',
        value: 'fas fa-chart-line',
      },
      {
        label: 'Chart Pie',
        value: 'fas fa-chart-pie',
      },
      {
        label: 'Check',
        value: 'fas fa-check',
      },
      {
        label: 'Check Circle',
        value: 'fas fa-check-circle',
      },
      {
        label: 'Check Double',
        value: 'fas fa-check-double',
      },
      {
        label: 'Check Square',
        value: 'fas fa-check-square',
      },
      {
        label: 'Cheese',
        value: 'fas fa-cheese',
      },
      {
        label: 'Chess',
        value: 'fas fa-chess',
      },
      {
        label: 'Chess Bishop',
        value: 'fas fa-chess-bishop',
      },
      {
        label: 'Chess Board',
        value: 'fas fa-chess-board',
      },
      {
        label: 'Chess King',
        value: 'fas fa-chess-king',
      },
      {
        label: 'Chess Knight',
        value: 'fas fa-chess-knight',
      },
      {
        label: 'Chess Pawn',
        value: 'fas fa-chess-pawn',
      },
      {
        label: 'Chess Queen',
        value: 'fas fa-chess-queen',
      },
      {
        label: 'Chess Rook',
        value: 'fas fa-chess-rook',
      },
      {
        label: 'Chevron Circle Down',
        value: 'fas fa-chevron-circle-down',
      },
      {
        label: 'Chevron Circle Left',
        value: 'fas fa-chevron-circle-left',
      },
      {
        label: 'Chevron Circle Right',
        value: 'fas fa-chevron-circle-right',
      },
      {
        label: 'Chevron Circle Up',
        value: 'fas fa-chevron-circle-up',
      },
      {
        label: 'Chevron Down',
        value: 'fas fa-chevron-down',
      },
      {
        label: 'Chevron Left',
        value: 'fas fa-chevron-left',
      },
      {
        label: 'Chevron Right',
        value: 'fas fa-chevron-right',
      },
      {
        label: 'Chevron Up',
        value: 'fas fa-chevron-up',
      },
      {
        label: 'Child',
        value: 'fas fa-child',
      },
      {
        label: 'Church',
        value: 'fas fa-church',
      },
      {
        label: 'Circle',
        value: 'fas fa-circle',
      },
      {
        label: 'Circle Notch',
        value: 'fas fa-circle-notch',
      },
      {
        label: 'City',
        value: 'fas fa-city',
      },
      {
        label: 'Clinic Medical',
        value: 'fas fa-clinic-medical',
      },
      {
        label: 'Clipboard',
        value: 'fas fa-clipboard',
      },
      {
        label: 'Clipboard Check',
        value: 'fas fa-clipboard-check',
      },
      {
        label: 'Clipboard List',
        value: 'fas fa-clipboard-list',
      },
      {
        label: 'Clock',
        value: 'fas fa-clock',
      },
      {
        label: 'Clone',
        value: 'fas fa-clone',
      },
      {
        label: 'Closed Captioning',
        value: 'fas fa-closed-captioning',
      },
      {
        label: 'Cloud',
        value: 'fas fa-cloud',
      },
      {
        label: 'Cloud Download Alt',
        value: 'fas fa-cloud-download-alt',
      },
      {
        label: 'Cloud Meatball',
        value: 'fas fa-cloud-meatball',
      },
      {
        label: 'Cloud Moon',
        value: 'fas fa-cloud-moon',
      },
      {
        label: 'Cloud Moon Rain',
        value: 'fas fa-cloud-moon-rain',
      },
      {
        label: 'Cloud Rain',
        value: 'fas fa-cloud-rain',
      },
      {
        label: 'Cloud Showers Heavy',
        value: 'fas fa-cloud-showers-heavy',
      },
      {
        label: 'Cloud Sun',
        value: 'fas fa-cloud-sun',
      },
      {
        label: 'Cloud Sun Rain',
        value: 'fas fa-cloud-sun-rain',
      },
      {
        label: 'Cloud Upload Alt',
        value: 'fas fa-cloud-upload-alt',
      },
      {
        label: 'Cocktail',
        value: 'fas fa-cocktail',
      },
      {
        label: 'Code',
        value: 'fas fa-code',
      },
      {
        label: 'Code Branch',
        value: 'fas fa-code-branch',
      },
      {
        label: 'Coffee',
        value: 'fas fa-coffee',
      },
      {
        label: 'Cog',
        value: 'fas fa-cog',
      },
      {
        label: 'Cogs',
        value: 'fas fa-cogs',
      },
      {
        label: 'Coins',
        value: 'fas fa-coins',
      },
      {
        label: 'Columns',
        value: 'fas fa-columns',
      },
      {
        label: 'Comment',
        value: 'fas fa-comment',
      },
      {
        label: 'Comment Alt',
        value: 'fas fa-comment-alt',
      },
      {
        label: 'Comment Dollar',
        value: 'fas fa-comment-dollar',
      },
      {
        label: 'Comment Dots',
        value: 'fas fa-comment-dots',
      },
      {
        label: 'Comment Medical',
        value: 'fas fa-comment-medical',
      },
      {
        label: 'Comment Slash',
        value: 'fas fa-comment-slash',
      },
      {
        label: 'Comments',
        value: 'fas fa-comments',
      },
      {
        label: 'Comments Dollar',
        value: 'fas fa-comments-dollar',
      },
      {
        label: 'Compact Disc',
        value: 'fas fa-compact-disc',
      },
      {
        label: 'Compass',
        value: 'fas fa-compass',
      },
      {
        label: 'Compress',
        value: 'fas fa-compress',
      },
      {
        label: 'Compress Alt',
        value: 'fas fa-compress-alt',
      },
      {
        label: 'Compress Arrows Alt',
        value: 'fas fa-compress-arrows-alt',
      },
      {
        label: 'Concierge Bell',
        value: 'fas fa-concierge-bell',
      },
      {
        label: 'Cookie',
        value: 'fas fa-cookie',
      },
      {
        label: 'Cookie Bite',
        value: 'fas fa-cookie-bite',
      },
      {
        label: 'Copy',
        value: 'fas fa-copy',
      },
      {
        label: 'Copyright',
        value: 'fas fa-copyright',
      },
      {
        label: 'Couch',
        value: 'fas fa-couch',
      },
      {
        label: 'Credit Card',
        value: 'fas fa-credit-card',
      },
      {
        label: 'Crop',
        value: 'fas fa-crop',
      },
      {
        label: 'Crop Alt',
        value: 'fas fa-crop-alt',
      },
      {
        label: 'Cross',
        value: 'fas fa-cross',
      },
      {
        label: 'Crosshairs',
        value: 'fas fa-crosshairs',
      },
      {
        label: 'Crow',
        value: 'fas fa-crow',
      },
      {
        label: 'Crown',
        value: 'fas fa-crown',
      },
      {
        label: 'Crutch',
        value: 'fas fa-crutch',
      },
      {
        label: 'Cube',
        value: 'fas fa-cube',
      },
      {
        label: 'Cubes',
        value: 'fas fa-cubes',
      },
      {
        label: 'Cut',
        value: 'fas fa-cut',
      },
      {
        label: 'Database',
        value: 'fas fa-database',
      },
      {
        label: 'Deaf',
        value: 'fas fa-deaf',
      },
      {
        label: 'Democrat',
        value: 'fas fa-democrat',
      },
      {
        label: 'Desktop',
        value: 'fas fa-desktop',
      },
      {
        label: 'Dharmachakra',
        value: 'fas fa-dharmachakra',
      },
      {
        label: 'Diagnoses',
        value: 'fas fa-diagnoses',
      },
      {
        label: 'Dice',
        value: 'fas fa-dice',
      },
      {
        label: 'Dice D20',
        value: 'fas fa-dice-d20',
      },
      {
        label: 'Dice D6',
        value: 'fas fa-dice-d6',
      },
      {
        label: 'Dice Five',
        value: 'fas fa-dice-five',
      },
      {
        label: 'Dice Four',
        value: 'fas fa-dice-four',
      },
      {
        label: 'Dice One',
        value: 'fas fa-dice-one',
      },
      {
        label: 'Dice Six',
        value: 'fas fa-dice-six',
      },
      {
        label: 'Dice Three',
        value: 'fas fa-dice-three',
      },
      {
        label: 'Dice Two',
        value: 'fas fa-dice-two',
      },
      {
        label: 'Digital Tachograph',
        value: 'fas fa-digital-tachograph',
      },
      {
        label: 'Directions',
        value: 'fas fa-directions',
      },
      {
        label: 'Disease',
        value: 'fas fa-disease',
      },
      {
        label: 'Divide',
        value: 'fas fa-divide',
      },
      {
        label: 'Dizzy',
        value: 'fas fa-dizzy',
      },
      {
        label: 'Dna',
        value: 'fas fa-dna',
      },
      {
        label: 'Dog',
        value: 'fas fa-dog',
      },
      {
        label: 'Dollar Sign',
        value: 'fas fa-dollar-sign',
      },
      {
        label: 'Dolly',
        value: 'fas fa-dolly',
      },
      {
        label: 'Dolly Flatbed',
        value: 'fas fa-dolly-flatbed',
      },
      {
        label: 'Donate',
        value: 'fas fa-donate',
      },
      {
        label: 'Door Closed',
        value: 'fas fa-door-closed',
      },
      {
        label: 'Door Open',
        value: 'fas fa-door-open',
      },
      {
        label: 'Dot Circle',
        value: 'fas fa-dot-circle',
      },
      {
        label: 'Dove',
        value: 'fas fa-dove',
      },
      {
        label: 'Download',
        value: 'fas fa-download',
      },
      {
        label: 'Drafting Compass',
        value: 'fas fa-drafting-compass',
      },
      {
        label: 'Dragon',
        value: 'fas fa-dragon',
      },
      {
        label: 'Draw Polygon',
        value: 'fas fa-draw-polygon',
      },
      {
        label: 'Drum',
        value: 'fas fa-drum',
      },
      {
        label: 'Drum Steelpan',
        value: 'fas fa-drum-steelpan',
      },
      {
        label: 'Drumstick Bite',
        value: 'fas fa-drumstick-bite',
      },
      {
        label: 'Dumbbell',
        value: 'fas fa-dumbbell',
      },
      {
        label: 'Dumpster',
        value: 'fas fa-dumpster',
      },
      {
        label: 'Dumpster Fire',
        value: 'fas fa-dumpster-fire',
      },
      {
        label: 'Dungeon',
        value: 'fas fa-dungeon',
      },
      {
        label: 'Edit',
        value: 'fas fa-edit',
      },
      {
        label: 'Egg',
        value: 'fas fa-egg',
      },
      {
        label: 'Eject',
        value: 'fas fa-eject',
      },
      {
        label: 'Ellipsis H',
        value: 'fas fa-ellipsis-h',
      },
      {
        label: 'Ellipsis V',
        value: 'fas fa-ellipsis-v',
      },
      {
        label: 'Envelope',
        value: 'fas fa-envelope',
      },
      {
        label: 'Envelope Open',
        value: 'fas fa-envelope-open',
      },
      {
        label: 'Envelope Open Text',
        value: 'fas fa-envelope-open-text',
      },
      {
        label: 'Envelope Square',
        value: 'fas fa-envelope-square',
      },
      {
        label: 'Equals',
        value: 'fas fa-equals',
      },
      {
        label: 'Eraser',
        value: 'fas fa-eraser',
      },
      {
        label: 'Ethernet',
        value: 'fas fa-ethernet',
      },
      {
        label: 'Euro Sign',
        value: 'fas fa-euro-sign',
      },
      {
        label: 'Exchange Alt',
        value: 'fas fa-exchange-alt',
      },
      {
        label: 'Exclamation',
        value: 'fas fa-exclamation',
      },
      {
        label: 'Exclamation Circle',
        value: 'fas fa-exclamation-circle',
      },
      {
        label: 'Exclamation Triangle',
        value: 'fas fa-exclamation-triangle',
      },
      {
        label: 'Expand',
        value: 'fas fa-expand',
      },
      {
        label: 'Expand Alt',
        value: 'fas fa-expand-alt',
      },
      {
        label: 'Expand Arrows Alt',
        value: 'fas fa-expand-arrows-alt',
      },
      {
        label: 'External Link Alt',
        value: 'fas fa-external-link-alt',
      },
      {
        label: 'External Link Square Alt',
        value: 'fas fa-external-link-square-alt',
      },
      {
        label: 'Eye',
        value: 'fas fa-eye',
      },
      {
        label: 'Eye Dropper',
        value: 'fas fa-eye-dropper',
      },
      {
        label: 'Eye Slash',
        value: 'fas fa-eye-slash',
      },
      {
        label: 'Fan',
        value: 'fas fa-fan',
      },
      {
        label: 'Fast Backward',
        value: 'fas fa-fast-backward',
      },
      {
        label: 'Fast Forward',
        value: 'fas fa-fast-forward',
      },
      {
        label: 'Faucet',
        value: 'fas fa-faucet',
      },
      {
        label: 'Fax',
        value: 'fas fa-fax',
      },
      {
        label: 'Feather',
        value: 'fas fa-feather',
      },
      {
        label: 'Feather Alt',
        value: 'fas fa-feather-alt',
      },
      {
        label: 'Female',
        value: 'fas fa-female',
      },
      {
        label: 'Fighter Jet',
        value: 'fas fa-fighter-jet',
      },
      {
        label: 'File',
        value: 'fas fa-file',
      },
      {
        label: 'File Alt',
        value: 'fas fa-file-alt',
      },
      {
        label: 'File Archive',
        value: 'fas fa-file-archive',
      },
      {
        label: 'File Audio',
        value: 'fas fa-file-audio',
      },
      {
        label: 'File Code',
        value: 'fas fa-file-code',
      },
      {
        label: 'File Contract',
        value: 'fas fa-file-contract',
      },
      {
        label: 'File Csv',
        value: 'fas fa-file-csv',
      },
      {
        label: 'File Download',
        value: 'fas fa-file-download',
      },
      {
        label: 'File Excel',
        value: 'fas fa-file-excel',
      },
      {
        label: 'File Export',
        value: 'fas fa-file-export',
      },
      {
        label: 'File Image',
        value: 'fas fa-file-image',
      },
      {
        label: 'File Import',
        value: 'fas fa-file-import',
      },
      {
        label: 'File Invoice',
        value: 'fas fa-file-invoice',
      },
      {
        label: 'File Invoice Dollar',
        value: 'fas fa-file-invoice-dollar',
      },
      {
        label: 'File Medical',
        value: 'fas fa-file-medical',
      },
      {
        label: 'File Medical Alt',
        value: 'fas fa-file-medical-alt',
      },
      {
        label: 'File Pdf',
        value: 'fas fa-file-pdf',
      },
      {
        label: 'File Powerpoint',
        value: 'fas fa-file-powerpoint',
      },
      {
        label: 'File Prescription',
        value: 'fas fa-file-prescription',
      },
      {
        label: 'File Signature',
        value: 'fas fa-file-signature',
      },
      {
        label: 'File Upload',
        value: 'fas fa-file-upload',
      },
      {
        label: 'File Video',
        value: 'fas fa-file-video',
      },
      {
        label: 'File Word',
        value: 'fas fa-file-word',
      },
      {
        label: 'Fill',
        value: 'fas fa-fill',
      },
      {
        label: 'Fill Drip',
        value: 'fas fa-fill-drip',
      },
      {
        label: 'Film',
        value: 'fas fa-film',
      },
      {
        label: 'Filter',
        value: 'fas fa-filter',
      },
      {
        label: 'Fingerprint',
        value: 'fas fa-fingerprint',
      },
      {
        label: 'Fire',
        value: 'fas fa-fire',
      },
      {
        label: 'Fire Alt',
        value: 'fas fa-fire-alt',
      },
      {
        label: 'Fire Extinguisher',
        value: 'fas fa-fire-extinguisher',
      },
      {
        label: 'First Aid',
        value: 'fas fa-first-aid',
      },
      {
        label: 'Fish',
        value: 'fas fa-fish',
      },
      {
        label: 'Fist Raised',
        value: 'fas fa-fist-raised',
      },
      {
        label: 'Flag',
        value: 'fas fa-flag',
      },
      {
        label: 'Flag Checkered',
        value: 'fas fa-flag-checkered',
      },
      {
        label: 'Flag Usa',
        value: 'fas fa-flag-usa',
      },
      {
        label: 'Flask',
        value: 'fas fa-flask',
      },
      {
        label: 'Flushed',
        value: 'fas fa-flushed',
      },
      {
        label: 'Folder',
        value: 'fas fa-folder',
      },
      {
        label: 'Folder Minus',
        value: 'fas fa-folder-minus',
      },
      {
        label: 'Folder Open',
        value: 'fas fa-folder-open',
      },
      {
        label: 'Folder Plus',
        value: 'fas fa-folder-plus',
      },
      {
        label: 'Font',
        value: 'fas fa-font',
      },
      {
        label: 'Football Ball',
        value: 'fas fa-football-ball',
      },
      {
        label: 'Forward',
        value: 'fas fa-forward',
      },
      {
        label: 'Frog',
        value: 'fas fa-frog',
      },
      {
        label: 'Frown',
        value: 'fas fa-frown',
      },
      {
        label: 'Frown Open',
        value: 'fas fa-frown-open',
      },
      {
        label: 'Funnel Dollar',
        value: 'fas fa-funnel-dollar',
      },
      {
        label: 'Futbol',
        value: 'fas fa-futbol',
      },
      {
        label: 'Gamepad',
        value: 'fas fa-gamepad',
      },
      {
        label: 'Gas Pump',
        value: 'fas fa-gas-pump',
      },
      {
        label: 'Gavel',
        value: 'fas fa-gavel',
      },
      {
        label: 'Gem',
        value: 'fas fa-gem',
      },
      {
        label: 'Genderless',
        value: 'fas fa-genderless',
      },
      {
        label: 'Ghost',
        value: 'fas fa-ghost',
      },
      {
        label: 'Gift',
        value: 'fas fa-gift',
      },
      {
        label: 'Gifts',
        value: 'fas fa-gifts',
      },
      {
        label: 'Glass Cheers',
        value: 'fas fa-glass-cheers',
      },
      {
        label: 'Glass Martini',
        value: 'fas fa-glass-martini',
      },
      {
        label: 'Glass Martini Alt',
        value: 'fas fa-glass-martini-alt',
      },
      {
        label: 'Glass Whiskey',
        value: 'fas fa-glass-whiskey',
      },
      {
        label: 'Glasses',
        value: 'fas fa-glasses',
      },
      {
        label: 'Globe',
        value: 'fas fa-globe',
      },
      {
        label: 'Globe Africa',
        value: 'fas fa-globe-africa',
      },
      {
        label: 'Globe Americas',
        value: 'fas fa-globe-americas',
      },
      {
        label: 'Globe Asia',
        value: 'fas fa-globe-asia',
      },
      {
        label: 'Globe Europe',
        value: 'fas fa-globe-europe',
      },
      {
        label: 'Golf Ball',
        value: 'fas fa-golf-ball',
      },
      {
        label: 'Gopuram',
        value: 'fas fa-gopuram',
      },
      {
        label: 'Graduation Cap',
        value: 'fas fa-graduation-cap',
      },
      {
        label: 'Greater Than',
        value: 'fas fa-greater-than',
      },
      {
        label: 'Greater Than Equal',
        value: 'fas fa-greater-than-equal',
      },
      {
        label: 'Grimace',
        value: 'fas fa-grimace',
      },
      {
        label: 'Grin',
        value: 'fas fa-grin',
      },
      {
        label: 'Grin Alt',
        value: 'fas fa-grin-alt',
      },
      {
        label: 'Grin Beam',
        value: 'fas fa-grin-beam',
      },
      {
        label: 'Grin Beam Sweat',
        value: 'fas fa-grin-beam-sweat',
      },
      {
        label: 'Grin Hearts',
        value: 'fas fa-grin-hearts',
      },
      {
        label: 'Grin Squint',
        value: 'fas fa-grin-squint',
      },
      {
        label: 'Grin Squint Tears',
        value: 'fas fa-grin-squint-tears',
      },
      {
        label: 'Grin Stars',
        value: 'fas fa-grin-stars',
      },
      {
        label: 'Grin Tears',
        value: 'fas fa-grin-tears',
      },
      {
        label: 'Grin Tongue',
        value: 'fas fa-grin-tongue',
      },
      {
        label: 'Grin Tongue Squint',
        value: 'fas fa-grin-tongue-squint',
      },
      {
        label: 'Grin Tongue Wink',
        value: 'fas fa-grin-tongue-wink',
      },
      {
        label: 'Grin Wink',
        value: 'fas fa-grin-wink',
      },
      {
        label: 'Grip Horizontal',
        value: 'fas fa-grip-horizontal',
      },
      {
        label: 'Grip Lines',
        value: 'fas fa-grip-lines',
      },
      {
        label: 'Grip Lines Vertical',
        value: 'fas fa-grip-lines-vertical',
      },
      {
        label: 'Grip Vertical',
        value: 'fas fa-grip-vertical',
      },
      {
        label: 'Guitar',
        value: 'fas fa-guitar',
      },
      {
        label: 'H Square',
        value: 'fas fa-h-square',
      },
      {
        label: 'Hamburger',
        value: 'fas fa-hamburger',
      },
      {
        label: 'Hammer',
        value: 'fas fa-hammer',
      },
      {
        label: 'Hamsa',
        value: 'fas fa-hamsa',
      },
      {
        label: 'Hand Holding',
        value: 'fas fa-hand-holding',
      },
      {
        label: 'Hand Holding Heart',
        value: 'fas fa-hand-holding-heart',
      },
      {
        label: 'Hand Holding Medical',
        value: 'fas fa-hand-holding-medical',
      },
      {
        label: 'Hand Holding Usd',
        value: 'fas fa-hand-holding-usd',
      },
      {
        label: 'Hand Holding Water',
        value: 'fas fa-hand-holding-water',
      },
      {
        label: 'Hand Lizard',
        value: 'fas fa-hand-lizard',
      },
      {
        label: 'Hand Middle Finger',
        value: 'fas fa-hand-middle-finger',
      },
      {
        label: 'Hand Paper',
        value: 'fas fa-hand-paper',
      },
      {
        label: 'Hand Peace',
        value: 'fas fa-hand-peace',
      },
      {
        label: 'Hand Point Down',
        value: 'fas fa-hand-point-down',
      },
      {
        label: 'Hand Point Left',
        value: 'fas fa-hand-point-left',
      },
      {
        label: 'Hand Point Right',
        value: 'fas fa-hand-point-right',
      },
      {
        label: 'Hand Point Up',
        value: 'fas fa-hand-point-up',
      },
      {
        label: 'Hand Pointer',
        value: 'fas fa-hand-pointer',
      },
      {
        label: 'Hand Rock',
        value: 'fas fa-hand-rock',
      },
      {
        label: 'Hand Scissors',
        value: 'fas fa-hand-scissors',
      },
      {
        label: 'Hand Sparkles',
        value: 'fas fa-hand-sparkles',
      },
      {
        label: 'Hand Spock',
        value: 'fas fa-hand-spock',
      },
      {
        label: 'Hands',
        value: 'fas fa-hands',
      },
      {
        label: 'Hands Helping',
        value: 'fas fa-hands-helping',
      },
      {
        label: 'Hands Wash',
        value: 'fas fa-hands-wash',
      },
      {
        label: 'Handshake',
        value: 'fas fa-handshake',
      },
      {
        label: 'Handshake Alt Slash',
        value: 'fas fa-handshake-alt-slash',
      },
      {
        label: 'Handshake Slash',
        value: 'fas fa-handshake-slash',
      },
      {
        label: 'Hanukiah',
        value: 'fas fa-hanukiah',
      },
      {
        label: 'Hard Hat',
        value: 'fas fa-hard-hat',
      },
      {
        label: 'Hashtag',
        value: 'fas fa-hashtag',
      },
      {
        label: 'Hat Cowboy',
        value: 'fas fa-hat-cowboy',
      },
      {
        label: 'Hat Cowboy Side',
        value: 'fas fa-hat-cowboy-side',
      },
      {
        label: 'Hat Wizard',
        value: 'fas fa-hat-wizard',
      },
      {
        label: 'Hdd',
        value: 'fas fa-hdd',
      },
      {
        label: 'Head Side Cough',
        value: 'fas fa-head-side-cough',
      },
      {
        label: 'Head Side Cough Slash',
        value: 'fas fa-head-side-cough-slash',
      },
      {
        label: 'Head Side Mask',
        value: 'fas fa-head-side-mask',
      },
      {
        label: 'Head Side Virus',
        value: 'fas fa-head-side-virus',
      },
      {
        label: 'Heading',
        value: 'fas fa-heading',
      },
      {
        label: 'Headphones',
        value: 'fas fa-headphones',
      },
      {
        label: 'Headphones Alt',
        value: 'fas fa-headphones-alt',
      },
      {
        label: 'Headset',
        value: 'fas fa-headset',
      },
      {
        label: 'Heart',
        value: 'fas fa-heart',
      },
      {
        label: 'Heart Broken',
        value: 'fas fa-heart-broken',
      },
      {
        label: 'Heartbeat',
        value: 'fas fa-heartbeat',
      },
      {
        label: 'Helicopter',
        value: 'fas fa-helicopter',
      },
      {
        label: 'Highlighter',
        value: 'fas fa-highlighter',
      },
      {
        label: 'Hiking',
        value: 'fas fa-hiking',
      },
      {
        label: 'Hippo',
        value: 'fas fa-hippo',
      },
      {
        label: 'History',
        value: 'fas fa-history',
      },
      {
        label: 'Hockey Puck',
        value: 'fas fa-hockey-puck',
      },
      {
        label: 'Holly Berry',
        value: 'fas fa-holly-berry',
      },
      {
        label: 'Home',
        value: 'fas fa-home',
      },
      {
        label: 'Horse',
        value: 'fas fa-horse',
      },
      {
        label: 'Horse Head',
        value: 'fas fa-horse-head',
      },
      {
        label: 'Hospital',
        value: 'fas fa-hospital',
      },
      {
        label: 'Hospital Alt',
        value: 'fas fa-hospital-alt',
      },
      {
        label: 'Hospital Symbol',
        value: 'fas fa-hospital-symbol',
      },
      {
        label: 'Hospital User',
        value: 'fas fa-hospital-user',
      },
      {
        label: 'Hot Tub',
        value: 'fas fa-hot-tub',
      },
      {
        label: 'Hotdog',
        value: 'fas fa-hotdog',
      },
      {
        label: 'Hotel',
        value: 'fas fa-hotel',
      },
      {
        label: 'Hourglass',
        value: 'fas fa-hourglass',
      },
      {
        label: 'Hourglass End',
        value: 'fas fa-hourglass-end',
      },
      {
        label: 'Hourglass Half',
        value: 'fas fa-hourglass-half',
      },
      {
        label: 'Hourglass Start',
        value: 'fas fa-hourglass-start',
      },
      {
        label: 'House Damage',
        value: 'fas fa-house-damage',
      },
      {
        label: 'House User',
        value: 'fas fa-house-user',
      },
      {
        label: 'Hryvnia',
        value: 'fas fa-hryvnia',
      },
      {
        label: 'I Cursor',
        value: 'fas fa-i-cursor',
      },
      {
        label: 'Ice Cream',
        value: 'fas fa-ice-cream',
      },
      {
        label: 'Icicles',
        value: 'fas fa-icicles',
      },
      {
        label: 'Icons',
        value: 'fas fa-icons',
      },
      {
        label: 'Id Badge',
        value: 'fas fa-id-badge',
      },
      {
        label: 'Id Card',
        value: 'fas fa-id-card',
      },
      {
        label: 'Id Card Alt',
        value: 'fas fa-id-card-alt',
      },
      {
        label: 'Igloo',
        value: 'fas fa-igloo',
      },
      {
        label: 'Image',
        value: 'fas fa-image',
      },
      {
        label: 'Images',
        value: 'fas fa-images',
      },
      {
        label: 'Inbox',
        value: 'fas fa-inbox',
      },
      {
        label: 'Indent',
        value: 'fas fa-indent',
      },
      {
        label: 'Industry',
        value: 'fas fa-industry',
      },
      {
        label: 'Infinity',
        value: 'fas fa-infinity',
      },
      {
        label: 'Info',
        value: 'fas fa-info',
      },
      {
        label: 'Info Circle',
        value: 'fas fa-info-circle',
      },
      {
        label: 'Italic',
        value: 'fas fa-italic',
      },
      {
        label: 'Jedi',
        value: 'fas fa-jedi',
      },
      {
        label: 'Joint',
        value: 'fas fa-joint',
      },
      {
        label: 'Journal Whills',
        value: 'fas fa-journal-whills',
      },
      {
        label: 'Kaaba',
        value: 'fas fa-kaaba',
      },
      {
        label: 'Key',
        value: 'fas fa-key',
      },
      {
        label: 'Keyboard',
        value: 'fas fa-keyboard',
      },
      {
        label: 'Khanda',
        value: 'fas fa-khanda',
      },
      {
        label: 'Kiss',
        value: 'fas fa-kiss',
      },
      {
        label: 'Kiss Beam',
        value: 'fas fa-kiss-beam',
      },
      {
        label: 'Kiss Wink Heart',
        value: 'fas fa-kiss-wink-heart',
      },
      {
        label: 'Kiwi Bird',
        value: 'fas fa-kiwi-bird',
      },
      {
        label: 'Landmark',
        value: 'fas fa-landmark',
      },
      {
        label: 'Language',
        value: 'fas fa-language',
      },
      {
        label: 'Laptop',
        value: 'fas fa-laptop',
      },
      {
        label: 'Laptop Code',
        value: 'fas fa-laptop-code',
      },
      {
        label: 'Laptop House',
        value: 'fas fa-laptop-house',
      },
      {
        label: 'Laptop Medical',
        value: 'fas fa-laptop-medical',
      },
      {
        label: 'Laugh',
        value: 'fas fa-laugh',
      },
      {
        label: 'Laugh Beam',
        value: 'fas fa-laugh-beam',
      },
      {
        label: 'Laugh Squint',
        value: 'fas fa-laugh-squint',
      },
      {
        label: 'Laugh Wink',
        value: 'fas fa-laugh-wink',
      },
      {
        label: 'Layer Group',
        value: 'fas fa-layer-group',
      },
      {
        label: 'Leaf',
        value: 'fas fa-leaf',
      },
      {
        label: 'Lemon',
        value: 'fas fa-lemon',
      },
      {
        label: 'Less Than',
        value: 'fas fa-less-than',
      },
      {
        label: 'Less Than Equal',
        value: 'fas fa-less-than-equal',
      },
      {
        label: 'Level Down Alt',
        value: 'fas fa-level-down-alt',
      },
      {
        label: 'Level Up Alt',
        value: 'fas fa-level-up-alt',
      },
      {
        label: 'Life Ring',
        value: 'fas fa-life-ring',
      },
      {
        label: 'Lightbulb',
        value: 'fas fa-lightbulb',
      },
      {
        label: 'Link',
        value: 'fas fa-link',
      },
      {
        label: 'Lira Sign',
        value: 'fas fa-lira-sign',
      },
      {
        label: 'List',
        value: 'fas fa-list',
      },
      {
        label: 'List Alt',
        value: 'fas fa-list-alt',
      },
      {
        label: 'List Ol',
        value: 'fas fa-list-ol',
      },
      {
        label: 'List Ul',
        value: 'fas fa-list-ul',
      },
      {
        label: 'Location Arrow',
        value: 'fas fa-location-arrow',
      },
      {
        label: 'Lock',
        value: 'fas fa-lock',
      },
      {
        label: 'Lock Open',
        value: 'fas fa-lock-open',
      },
      {
        label: 'Long Arrow Alt Down',
        value: 'fas fa-long-arrow-alt-down',
      },
      {
        label: 'Long Arrow Alt Left',
        value: 'fas fa-long-arrow-alt-left',
      },
      {
        label: 'Long Arrow Alt Right',
        value: 'fas fa-long-arrow-alt-right',
      },
      {
        label: 'Long Arrow Alt Up',
        value: 'fas fa-long-arrow-alt-up',
      },
      {
        label: 'Low Vision',
        value: 'fas fa-low-vision',
      },
      {
        label: 'Luggage Cart',
        value: 'fas fa-luggage-cart',
      },
      {
        label: 'Lungs',
        value: 'fas fa-lungs',
      },
      {
        label: 'Lungs Virus',
        value: 'fas fa-lungs-virus',
      },
      {
        label: 'Magic',
        value: 'fas fa-magic',
      },
      {
        label: 'Magnet',
        value: 'fas fa-magnet',
      },
      {
        label: 'Mail Bulk',
        value: 'fas fa-mail-bulk',
      },
      {
        label: 'Male',
        value: 'fas fa-male',
      },
      {
        label: 'Map',
        value: 'fas fa-map',
      },
      {
        label: 'Map Marked',
        value: 'fas fa-map-marked',
      },
      {
        label: 'Map Marked Alt',
        value: 'fas fa-map-marked-alt',
      },
      {
        label: 'Map Marker',
        value: 'fas fa-map-marker',
      },
      {
        label: 'Map Marker Alt',
        value: 'fas fa-map-marker-alt',
      },
      {
        label: 'Map Pin',
        value: 'fas fa-map-pin',
      },
      {
        label: 'Map Signs',
        value: 'fas fa-map-signs',
      },
      {
        label: 'Marker',
        value: 'fas fa-marker',
      },
      {
        label: 'Mars',
        value: 'fas fa-mars',
      },
      {
        label: 'Mars Double',
        value: 'fas fa-mars-double',
      },
      {
        label: 'Mars Stroke',
        value: 'fas fa-mars-stroke',
      },
      {
        label: 'Mars Stroke H',
        value: 'fas fa-mars-stroke-h',
      },
      {
        label: 'Mars Stroke V',
        value: 'fas fa-mars-stroke-v',
      },
      {
        label: 'Mask',
        value: 'fas fa-mask',
      },
      {
        label: 'Medal',
        value: 'fas fa-medal',
      },
      {
        label: 'Medkit',
        value: 'fas fa-medkit',
      },
      {
        label: 'Meh',
        value: 'fas fa-meh',
      },
      {
        label: 'Meh Blank',
        value: 'fas fa-meh-blank',
      },
      {
        label: 'Meh Rolling Eyes',
        value: 'fas fa-meh-rolling-eyes',
      },
      {
        label: 'Memory',
        value: 'fas fa-memory',
      },
      {
        label: 'Menorah',
        value: 'fas fa-menorah',
      },
      {
        label: 'Mercury',
        value: 'fas fa-mercury',
      },
      {
        label: 'Meteor',
        value: 'fas fa-meteor',
      },
      {
        label: 'Microchip',
        value: 'fas fa-microchip',
      },
      {
        label: 'Microphone',
        value: 'fas fa-microphone',
      },
      {
        label: 'Microphone Alt',
        value: 'fas fa-microphone-alt',
      },
      {
        label: 'Microphone Alt Slash',
        value: 'fas fa-microphone-alt-slash',
      },
      {
        label: 'Microphone Slash',
        value: 'fas fa-microphone-slash',
      },
      {
        label: 'Microscope',
        value: 'fas fa-microscope',
      },
      {
        label: 'Minus',
        value: 'fas fa-minus',
      },
      {
        label: 'Minus Circle',
        value: 'fas fa-minus-circle',
      },
      {
        label: 'Minus Square',
        value: 'fas fa-minus-square',
      },
      {
        label: 'Mitten',
        value: 'fas fa-mitten',
      },
      {
        label: 'Mobile',
        value: 'fas fa-mobile',
      },
      {
        label: 'Mobile Alt',
        value: 'fas fa-mobile-alt',
      },
      {
        label: 'Money Bill',
        value: 'fas fa-money-bill',
      },
      {
        label: 'Money Bill Alt',
        value: 'fas fa-money-bill-alt',
      },
      {
        label: 'Money Bill Wave',
        value: 'fas fa-money-bill-wave',
      },
      {
        label: 'Money Bill Wave Alt',
        value: 'fas fa-money-bill-wave-alt',
      },
      {
        label: 'Money Check',
        value: 'fas fa-money-check',
      },
      {
        label: 'Money Check Alt',
        value: 'fas fa-money-check-alt',
      },
      {
        label: 'Monument',
        value: 'fas fa-monument',
      },
      {
        label: 'Moon',
        value: 'fas fa-moon',
      },
      {
        label: 'Mortar Pestle',
        value: 'fas fa-mortar-pestle',
      },
      {
        label: 'Mosque',
        value: 'fas fa-mosque',
      },
      {
        label: 'Motorcycle',
        value: 'fas fa-motorcycle',
      },
      {
        label: 'Mountain',
        value: 'fas fa-mountain',
      },
      {
        label: 'Mouse',
        value: 'fas fa-mouse',
      },
      {
        label: 'Mouse Pointer',
        value: 'fas fa-mouse-pointer',
      },
      {
        label: 'Mug Hot',
        value: 'fas fa-mug-hot',
      },
      {
        label: 'Music',
        value: 'fas fa-music',
      },
      {
        label: 'Network Wired',
        value: 'fas fa-network-wired',
      },
      {
        label: 'Neuter',
        value: 'fas fa-neuter',
      },
      {
        label: 'Newspaper',
        value: 'fas fa-newspaper',
      },
      {
        label: 'Not Equal',
        value: 'fas fa-not-equal',
      },
      {
        label: 'Notes Medical',
        value: 'fas fa-notes-medical',
      },
      {
        label: 'Object Group',
        value: 'fas fa-object-group',
      },
      {
        label: 'Object Ungroup',
        value: 'fas fa-object-ungroup',
      },
      {
        label: 'Oil Can',
        value: 'fas fa-oil-can',
      },
      {
        label: 'Om',
        value: 'fas fa-om',
      },
      {
        label: 'Otter',
        value: 'fas fa-otter',
      },
      {
        label: 'Outdent',
        value: 'fas fa-outdent',
      },
      {
        label: 'Pager',
        value: 'fas fa-pager',
      },
      {
        label: 'Paint Brush',
        value: 'fas fa-paint-brush',
      },
      {
        label: 'Paint Roller',
        value: 'fas fa-paint-roller',
      },
      {
        label: 'Palette',
        value: 'fas fa-palette',
      },
      {
        label: 'Pallet',
        value: 'fas fa-pallet',
      },
      {
        label: 'Paper Plane',
        value: 'fas fa-paper-plane',
      },
      {
        label: 'Paperclip',
        value: 'fas fa-paperclip',
      },
      {
        label: 'Parachute Box',
        value: 'fas fa-parachute-box',
      },
      {
        label: 'Paragraph',
        value: 'fas fa-paragraph',
      },
      {
        label: 'Parking',
        value: 'fas fa-parking',
      },
      {
        label: 'Passport',
        value: 'fas fa-passport',
      },
      {
        label: 'Pastafarianism',
        value: 'fas fa-pastafarianism',
      },
      {
        label: 'Paste',
        value: 'fas fa-paste',
      },
      {
        label: 'Pause',
        value: 'fas fa-pause',
      },
      {
        label: 'Pause Circle',
        value: 'fas fa-pause-circle',
      },
      {
        label: 'Paw',
        value: 'fas fa-paw',
      },
      {
        label: 'Peace',
        value: 'fas fa-peace',
      },
      {
        label: 'Pen',
        value: 'fas fa-pen',
      },
      {
        label: 'Pen Alt',
        value: 'fas fa-pen-alt',
      },
      {
        label: 'Pen Fancy',
        value: 'fas fa-pen-fancy',
      },
      {
        label: 'Pen Nib',
        value: 'fas fa-pen-nib',
      },
      {
        label: 'Pen Square',
        value: 'fas fa-pen-square',
      },
      {
        label: 'Pencil Alt',
        value: 'fas fa-pencil-alt',
      },
      {
        label: 'Pencil Ruler',
        value: 'fas fa-pencil-ruler',
      },
      {
        label: 'People Arrows',
        value: 'fas fa-people-arrows',
      },
      {
        label: 'People Carry',
        value: 'fas fa-people-carry',
      },
      {
        label: 'Pepper Hot',
        value: 'fas fa-pepper-hot',
      },
      {
        label: 'Percent',
        value: 'fas fa-percent',
      },
      {
        label: 'Percentage',
        value: 'fas fa-percentage',
      },
      {
        label: 'Person Booth',
        value: 'fas fa-person-booth',
      },
      {
        label: 'Phone',
        value: 'fas fa-phone',
      },
      {
        label: 'Phone Alt',
        value: 'fas fa-phone-alt',
      },
      {
        label: 'Phone Slash',
        value: 'fas fa-phone-slash',
      },
      {
        label: 'Phone Square',
        value: 'fas fa-phone-square',
      },
      {
        label: 'Phone Square Alt',
        value: 'fas fa-phone-square-alt',
      },
      {
        label: 'Phone Volume',
        value: 'fas fa-phone-volume',
      },
      {
        label: 'Photo Video',
        value: 'fas fa-photo-video',
      },
      {
        label: 'Piggy Bank',
        value: 'fas fa-piggy-bank',
      },
      {
        label: 'Pills',
        value: 'fas fa-pills',
      },
      {
        label: 'Pizza Slice',
        value: 'fas fa-pizza-slice',
      },
      {
        label: 'Place Of Worship',
        value: 'fas fa-place-of-worship',
      },
      {
        label: 'Plane',
        value: 'fas fa-plane',
      },
      {
        label: 'Plane Arrival',
        value: 'fas fa-plane-arrival',
      },
      {
        label: 'Plane Departure',
        value: 'fas fa-plane-departure',
      },
      {
        label: 'Plane Slash',
        value: 'fas fa-plane-slash',
      },
      {
        label: 'Play',
        value: 'fas fa-play',
      },
      {
        label: 'Play Circle',
        value: 'fas fa-play-circle',
      },
      {
        label: 'Plug',
        value: 'fas fa-plug',
      },
      {
        label: 'Plus',
        value: 'fas fa-plus',
      },
      {
        label: 'Plus Circle',
        value: 'fas fa-plus-circle',
      },
      {
        label: 'Plus Square',
        value: 'fas fa-plus-square',
      },
      {
        label: 'Podcast',
        value: 'fas fa-podcast',
      },
      {
        label: 'Poll',
        value: 'fas fa-poll',
      },
      {
        label: 'Poll H',
        value: 'fas fa-poll-h',
      },
      {
        label: 'Poo',
        value: 'fas fa-poo',
      },
      {
        label: 'Poo Storm',
        value: 'fas fa-poo-storm',
      },
      {
        label: 'Poop',
        value: 'fas fa-poop',
      },
      {
        label: 'Portrait',
        value: 'fas fa-portrait',
      },
      {
        label: 'Pound Sign',
        value: 'fas fa-pound-sign',
      },
      {
        label: 'Power Off',
        value: 'fas fa-power-off',
      },
      {
        label: 'Pray',
        value: 'fas fa-pray',
      },
      {
        label: 'Praying Hands',
        value: 'fas fa-praying-hands',
      },
      {
        label: 'Prescription',
        value: 'fas fa-prescription',
      },
      {
        label: 'Prescription Bottle',
        value: 'fas fa-prescription-bottle',
      },
      {
        label: 'Prescription Bottle Alt',
        value: 'fas fa-prescription-bottle-alt',
      },
      {
        label: 'Print',
        value: 'fas fa-print',
      },
      {
        label: 'Procedures',
        value: 'fas fa-procedures',
      },
      {
        label: 'Project Diagram',
        value: 'fas fa-project-diagram',
      },
      {
        label: 'Pump Medical',
        value: 'fas fa-pump-medical',
      },
      {
        label: 'Pump Soap',
        value: 'fas fa-pump-soap',
      },
      {
        label: 'Puzzle Piece',
        value: 'fas fa-puzzle-piece',
      },
      {
        label: 'Qrcode',
        value: 'fas fa-qrcode',
      },
      {
        label: 'Question',
        value: 'fas fa-question',
      },
      {
        label: 'Question Circle',
        value: 'fas fa-question-circle',
      },
      {
        label: 'Quidditch',
        value: 'fas fa-quidditch',
      },
      {
        label: 'Quote Left',
        value: 'fas fa-quote-left',
      },
      {
        label: 'Quote Right',
        value: 'fas fa-quote-right',
      },
      {
        label: 'Quran',
        value: 'fas fa-quran',
      },
      {
        label: 'Radiation',
        value: 'fas fa-radiation',
      },
      {
        label: 'Radiation Alt',
        value: 'fas fa-radiation-alt',
      },
      {
        label: 'Rainbow',
        value: 'fas fa-rainbow',
      },
      {
        label: 'Random',
        value: 'fas fa-random',
      },
      {
        label: 'Receipt',
        value: 'fas fa-receipt',
      },
      {
        label: 'Record Vinyl',
        value: 'fas fa-record-vinyl',
      },
      {
        label: 'Recycle',
        value: 'fas fa-recycle',
      },
      {
        label: 'Redo',
        value: 'fas fa-redo',
      },
      {
        label: 'Redo Alt',
        value: 'fas fa-redo-alt',
      },
      {
        label: 'Registered',
        value: 'fas fa-registered',
      },
      {
        label: 'Remove Format',
        value: 'fas fa-remove-format',
      },
      {
        label: 'Reply',
        value: 'fas fa-reply',
      },
      {
        label: 'Reply All',
        value: 'fas fa-reply-all',
      },
      {
        label: 'Republican',
        value: 'fas fa-republican',
      },
      {
        label: 'Restroom',
        value: 'fas fa-restroom',
      },
      {
        label: 'Retweet',
        value: 'fas fa-retweet',
      },
      {
        label: 'Ribbon',
        value: 'fas fa-ribbon',
      },
      {
        label: 'Ring',
        value: 'fas fa-ring',
      },
      {
        label: 'Road',
        value: 'fas fa-road',
      },
      {
        label: 'Robot',
        value: 'fas fa-robot',
      },
      {
        label: 'Rocket',
        value: 'fas fa-rocket',
      },
      {
        label: 'Route',
        value: 'fas fa-route',
      },
      {
        label: 'Rss',
        value: 'fas fa-rss',
      },
      {
        label: 'Rss Square',
        value: 'fas fa-rss-square',
      },
      {
        label: 'Ruble Sign',
        value: 'fas fa-ruble-sign',
      },
      {
        label: 'Ruler',
        value: 'fas fa-ruler',
      },
      {
        label: 'Ruler Combined',
        value: 'fas fa-ruler-combined',
      },
      {
        label: 'Ruler Horizontal',
        value: 'fas fa-ruler-horizontal',
      },
      {
        label: 'Ruler Vertical',
        value: 'fas fa-ruler-vertical',
      },
      {
        label: 'Running',
        value: 'fas fa-running',
      },
      {
        label: 'Rupee Sign',
        value: 'fas fa-rupee-sign',
      },
      {
        label: 'Sad Cry',
        value: 'fas fa-sad-cry',
      },
      {
        label: 'Sad Tear',
        value: 'fas fa-sad-tear',
      },
      {
        label: 'Satellite',
        value: 'fas fa-satellite',
      },
      {
        label: 'Satellite Dish',
        value: 'fas fa-satellite-dish',
      },
      {
        label: 'Save',
        value: 'fas fa-save',
      },
      {
        label: 'School',
        value: 'fas fa-school',
      },
      {
        label: 'Screwdriver',
        value: 'fas fa-screwdriver',
      },
      {
        label: 'Scroll',
        value: 'fas fa-scroll',
      },
      {
        label: 'Sd Card',
        value: 'fas fa-sd-card',
      },
      {
        label: 'Search',
        value: 'fas fa-search',
      },
      {
        label: 'Search Dollar',
        value: 'fas fa-search-dollar',
      },
      {
        label: 'Search Location',
        value: 'fas fa-search-location',
      },
      {
        label: 'Search Minus',
        value: 'fas fa-search-minus',
      },
      {
        label: 'Search Plus',
        value: 'fas fa-search-plus',
      },
      {
        label: 'Seedling',
        value: 'fas fa-seedling',
      },
      {
        label: 'Server',
        value: 'fas fa-server',
      },
      {
        label: 'Shapes',
        value: 'fas fa-shapes',
      },
      {
        label: 'Share',
        value: 'fas fa-share',
      },
      {
        label: 'Share Alt',
        value: 'fas fa-share-alt',
      },
      {
        label: 'Share Alt Square',
        value: 'fas fa-share-alt-square',
      },
      {
        label: 'Share Square',
        value: 'fas fa-share-square',
      },
      {
        label: 'Shekel Sign',
        value: 'fas fa-shekel-sign',
      },
      {
        label: 'Shield Alt',
        value: 'fas fa-shield-alt',
      },
      {
        label: 'Shield Virus',
        value: 'fas fa-shield-virus',
      },
      {
        label: 'Ship',
        value: 'fas fa-ship',
      },
      {
        label: 'Shipping Fast',
        value: 'fas fa-shipping-fast',
      },
      {
        label: 'Shoe Prints',
        value: 'fas fa-shoe-prints',
      },
      {
        label: 'Shopping Bag',
        value: 'fas fa-shopping-bag',
      },
      {
        label: 'Shopping Basket',
        value: 'fas fa-shopping-basket',
      },
      {
        label: 'Shopping Cart',
        value: 'fas fa-shopping-cart',
      },
      {
        label: 'Shower',
        value: 'fas fa-shower',
      },
      {
        label: 'Shuttle Van',
        value: 'fas fa-shuttle-van',
      },
      {
        label: 'Sign',
        value: 'fas fa-sign',
      },
      {
        label: 'Sign In Alt',
        value: 'fas fa-sign-in-alt',
      },
      {
        label: 'Sign Language',
        value: 'fas fa-sign-language',
      },
      {
        label: 'Sign Out Alt',
        value: 'fas fa-sign-out-alt',
      },
      {
        label: 'Signal',
        value: 'fas fa-signal',
      },
      {
        label: 'Signature',
        value: 'fas fa-signature',
      },
      {
        label: 'Sim Card',
        value: 'fas fa-sim-card',
      },
      {
        label: 'Sink',
        value: 'fas fa-sink',
      },
      {
        label: 'Sitemap',
        value: 'fas fa-sitemap',
      },
      {
        label: 'Skating',
        value: 'fas fa-skating',
      },
      {
        label: 'Skiing',
        value: 'fas fa-skiing',
      },
      {
        label: 'Skiing Nordic',
        value: 'fas fa-skiing-nordic',
      },
      {
        label: 'Skull',
        value: 'fas fa-skull',
      },
      {
        label: 'Skull Crossbones',
        value: 'fas fa-skull-crossbones',
      },
      {
        label: 'Slash',
        value: 'fas fa-slash',
      },
      {
        label: 'Sleigh',
        value: 'fas fa-sleigh',
      },
      {
        label: 'Sliders H',
        value: 'fas fa-sliders-h',
      },
      {
        label: 'Smile',
        value: 'fas fa-smile',
      },
      {
        label: 'Smile Beam',
        value: 'fas fa-smile-beam',
      },
      {
        label: 'Smile Wink',
        value: 'fas fa-smile-wink',
      },
      {
        label: 'Smog',
        value: 'fas fa-smog',
      },
      {
        label: 'Smoking',
        value: 'fas fa-smoking',
      },
      {
        label: 'Smoking Ban',
        value: 'fas fa-smoking-ban',
      },
      {
        label: 'Sms',
        value: 'fas fa-sms',
      },
      {
        label: 'Snowboarding',
        value: 'fas fa-snowboarding',
      },
      {
        label: 'Snowflake',
        value: 'fas fa-snowflake',
      },
      {
        label: 'Snowman',
        value: 'fas fa-snowman',
      },
      {
        label: 'Snowplow',
        value: 'fas fa-snowplow',
      },
      {
        label: 'Soap',
        value: 'fas fa-soap',
      },
      {
        label: 'Socks',
        value: 'fas fa-socks',
      },
      {
        label: 'Solar Panel',
        value: 'fas fa-solar-panel',
      },
      {
        label: 'Sort',
        value: 'fas fa-sort',
      },
      {
        label: 'Sort Alpha Down',
        value: 'fas fa-sort-alpha-down',
      },
      {
        label: 'Sort Alpha Down Alt',
        value: 'fas fa-sort-alpha-down-alt',
      },
      {
        label: 'Sort Alpha Up',
        value: 'fas fa-sort-alpha-up',
      },
      {
        label: 'Sort Alpha Up Alt',
        value: 'fas fa-sort-alpha-up-alt',
      },
      {
        label: 'Sort Amount Down',
        value: 'fas fa-sort-amount-down',
      },
      {
        label: 'Sort Amount Down Alt',
        value: 'fas fa-sort-amount-down-alt',
      },
      {
        label: 'Sort Amount Up',
        value: 'fas fa-sort-amount-up',
      },
      {
        label: 'Sort Amount Up Alt',
        value: 'fas fa-sort-amount-up-alt',
      },
      {
        label: 'Sort Down',
        value: 'fas fa-sort-down',
      },
      {
        label: 'Sort Numeric Down',
        value: 'fas fa-sort-numeric-down',
      },
      {
        label: 'Sort Numeric Down Alt',
        value: 'fas fa-sort-numeric-down-alt',
      },
      {
        label: 'Sort Numeric Up',
        value: 'fas fa-sort-numeric-up',
      },
      {
        label: 'Sort Numeric Up Alt',
        value: 'fas fa-sort-numeric-up-alt',
      },
      {
        label: 'Sort Up',
        value: 'fas fa-sort-up',
      },
      {
        label: 'Spa',
        value: 'fas fa-spa',
      },
      {
        label: 'Space Shuttle',
        value: 'fas fa-space-shuttle',
      },
      {
        label: 'Spell Check',
        value: 'fas fa-spell-check',
      },
      {
        label: 'Spider',
        value: 'fas fa-spider',
      },
      {
        label: 'Spinner',
        value: 'fas fa-spinner',
      },
      {
        label: 'Splotch',
        value: 'fas fa-splotch',
      },
      {
        label: 'Spray Can',
        value: 'fas fa-spray-can',
      },
      {
        label: 'Square',
        value: 'fas fa-square',
      },
      {
        label: 'Square Full',
        value: 'fas fa-square-full',
      },
      {
        label: 'Square Root Alt',
        value: 'fas fa-square-root-alt',
      },
      {
        label: 'Stamp',
        value: 'fas fa-stamp',
      },
      {
        label: 'Star',
        value: 'fas fa-star',
      },
      {
        label: 'Star And Crescent',
        value: 'fas fa-star-and-crescent',
      },
      {
        label: 'Star Half',
        value: 'fas fa-star-half',
      },
      {
        label: 'Star Half Alt',
        value: 'fas fa-star-half-alt',
      },
      {
        label: 'Star Of David',
        value: 'fas fa-star-of-david',
      },
      {
        label: 'Star Of Life',
        value: 'fas fa-star-of-life',
      },
      {
        label: 'Step Backward',
        value: 'fas fa-step-backward',
      },
      {
        label: 'Step Forward',
        value: 'fas fa-step-forward',
      },
      {
        label: 'Stethoscope',
        value: 'fas fa-stethoscope',
      },
      {
        label: 'Sticky Note',
        value: 'fas fa-sticky-note',
      },
      {
        label: 'Stop',
        value: 'fas fa-stop',
      },
      {
        label: 'Stop Circle',
        value: 'fas fa-stop-circle',
      },
      {
        label: 'Stopwatch',
        value: 'fas fa-stopwatch',
      },
      {
        label: 'Stopwatch 20',
        value: 'fas fa-stopwatch-20',
      },
      {
        label: 'Store',
        value: 'fas fa-store',
      },
      {
        label: 'Store Alt',
        value: 'fas fa-store-alt',
      },
      {
        label: 'Store Alt Slash',
        value: 'fas fa-store-alt-slash',
      },
      {
        label: 'Store Slash',
        value: 'fas fa-store-slash',
      },
      {
        label: 'Stream',
        value: 'fas fa-stream',
      },
      {
        label: 'Street View',
        value: 'fas fa-street-view',
      },
      {
        label: 'Strikethrough',
        value: 'fas fa-strikethrough',
      },
      {
        label: 'Stroopwafel',
        value: 'fas fa-stroopwafel',
      },
      {
        label: 'Subscript',
        value: 'fas fa-subscript',
      },
      {
        label: 'Subway',
        value: 'fas fa-subway',
      },
      {
        label: 'Suitcase',
        value: 'fas fa-suitcase',
      },
      {
        label: 'Suitcase Rolling',
        value: 'fas fa-suitcase-rolling',
      },
      {
        label: 'Sun',
        value: 'fas fa-sun',
      },
      {
        label: 'Superscript',
        value: 'fas fa-superscript',
      },
      {
        label: 'Surprise',
        value: 'fas fa-surprise',
      },
      {
        label: 'Swatchbook',
        value: 'fas fa-swatchbook',
      },
      {
        label: 'Swimmer',
        value: 'fas fa-swimmer',
      },
      {
        label: 'Swimming Pool',
        value: 'fas fa-swimming-pool',
      },
      {
        label: 'Synagogue',
        value: 'fas fa-synagogue',
      },
      {
        label: 'Sync',
        value: 'fas fa-sync',
      },
      {
        label: 'Sync Alt',
        value: 'fas fa-sync-alt',
      },
      {
        label: 'Syringe',
        value: 'fas fa-syringe',
      },
      {
        label: 'Table',
        value: 'fas fa-table',
      },
      {
        label: 'Table Tennis',
        value: 'fas fa-table-tennis',
      },
      {
        label: 'Tablet',
        value: 'fas fa-tablet',
      },
      {
        label: 'Tablet Alt',
        value: 'fas fa-tablet-alt',
      },
      {
        label: 'Tablets',
        value: 'fas fa-tablets',
      },
      {
        label: 'Tachometer Alt',
        value: 'fas fa-tachometer-alt',
      },
      {
        label: 'Tag',
        value: 'fas fa-tag',
      },
      {
        label: 'Tags',
        value: 'fas fa-tags',
      },
      {
        label: 'Tape',
        value: 'fas fa-tape',
      },
      {
        label: 'Tasks',
        value: 'fas fa-tasks',
      },
      {
        label: 'Taxi',
        value: 'fas fa-taxi',
      },
      {
        label: 'Teeth',
        value: 'fas fa-teeth',
      },
      {
        label: 'Teeth Open',
        value: 'fas fa-teeth-open',
      },
      {
        label: 'Temperature High',
        value: 'fas fa-temperature-high',
      },
      {
        label: 'Temperature Low',
        value: 'fas fa-temperature-low',
      },
      {
        label: 'Tenge',
        value: 'fas fa-tenge',
      },
      {
        label: 'Terminal',
        value: 'fas fa-terminal',
      },
      {
        label: 'Text Height',
        value: 'fas fa-text-height',
      },
      {
        label: 'Text Width',
        value: 'fas fa-text-width',
      },
      {
        label: 'Th',
        value: 'fas fa-th',
      },
      {
        label: 'Th Large',
        value: 'fas fa-th-large',
      },
      {
        label: 'Th List',
        value: 'fas fa-th-list',
      },
      {
        label: 'Theater Masks',
        value: 'fas fa-theater-masks',
      },
      {
        label: 'Thermometer',
        value: 'fas fa-thermometer',
      },
      {
        label: 'Thermometer Empty',
        value: 'fas fa-thermometer-empty',
      },
      {
        label: 'Thermometer Full',
        value: 'fas fa-thermometer-full',
      },
      {
        label: 'Thermometer Half',
        value: 'fas fa-thermometer-half',
      },
      {
        label: 'Thermometer Quarter',
        value: 'fas fa-thermometer-quarter',
      },
      {
        label: 'Thermometer Three Quarters',
        value: 'fas fa-thermometer-three-quarters',
      },
      {
        label: 'Thumbs Down',
        value: 'fas fa-thumbs-down',
      },
      {
        label: 'Thumbs Up',
        value: 'fas fa-thumbs-up',
      },
      {
        label: 'Thumbtack',
        value: 'fas fa-thumbtack',
      },
      {
        label: 'Ticket Alt',
        value: 'fas fa-ticket-alt',
      },
      {
        label: 'Times',
        value: 'fas fa-times',
      },
      {
        label: 'Times Circle',
        value: 'fas fa-times-circle',
      },
      {
        label: 'Tint',
        value: 'fas fa-tint',
      },
      {
        label: 'Tint Slash',
        value: 'fas fa-tint-slash',
      },
      {
        label: 'Tired',
        value: 'fas fa-tired',
      },
      {
        label: 'Toggle Off',
        value: 'fas fa-toggle-off',
      },
      {
        label: 'Toggle On',
        value: 'fas fa-toggle-on',
      },
      {
        label: 'Toilet',
        value: 'fas fa-toilet',
      },
      {
        label: 'Toilet Paper',
        value: 'fas fa-toilet-paper',
      },
      {
        label: 'Toilet Paper Slash',
        value: 'fas fa-toilet-paper-slash',
      },
      {
        label: 'Toolbox',
        value: 'fas fa-toolbox',
      },
      {
        label: 'Tools',
        value: 'fas fa-tools',
      },
      {
        label: 'Tooth',
        value: 'fas fa-tooth',
      },
      {
        label: 'Torah',
        value: 'fas fa-torah',
      },
      {
        label: 'Torii Gate',
        value: 'fas fa-torii-gate',
      },
      {
        label: 'Tractor',
        value: 'fas fa-tractor',
      },
      {
        label: 'Trademark',
        value: 'fas fa-trademark',
      },
      {
        label: 'Traffic Light',
        value: 'fas fa-traffic-light',
      },
      {
        label: 'Trailer',
        value: 'fas fa-trailer',
      },
      {
        label: 'Train',
        value: 'fas fa-train',
      },
      {
        label: 'Tram',
        value: 'fas fa-tram',
      },
      {
        label: 'Transgender',
        value: 'fas fa-transgender',
      },
      {
        label: 'Transgender Alt',
        value: 'fas fa-transgender-alt',
      },
      {
        label: 'Trash',
        value: 'fas fa-trash',
      },
      {
        label: 'Trash Alt',
        value: 'fas fa-trash-alt',
      },
      {
        label: 'Trash Restore',
        value: 'fas fa-trash-restore',
      },
      {
        label: 'Trash Restore Alt',
        value: 'fas fa-trash-restore-alt',
      },
      {
        label: 'Tree',
        value: 'fas fa-tree',
      },
      {
        label: 'Trophy',
        value: 'fas fa-trophy',
      },
      {
        label: 'Truck',
        value: 'fas fa-truck',
      },
      {
        label: 'Truck Loading',
        value: 'fas fa-truck-loading',
      },
      {
        label: 'Truck Monster',
        value: 'fas fa-truck-monster',
      },
      {
        label: 'Truck Moving',
        value: 'fas fa-truck-moving',
      },
      {
        label: 'Truck Pickup',
        value: 'fas fa-truck-pickup',
      },
      {
        label: 'Tshirt',
        value: 'fas fa-tshirt',
      },
      {
        label: 'Tty',
        value: 'fas fa-tty',
      },
      {
        label: 'Tv',
        value: 'fas fa-tv',
      },
      {
        label: 'Umbrella',
        value: 'fas fa-umbrella',
      },
      {
        label: 'Umbrella Beach',
        value: 'fas fa-umbrella-beach',
      },
      {
        label: 'Underline',
        value: 'fas fa-underline',
      },
      {
        label: 'Undo',
        value: 'fas fa-undo',
      },
      {
        label: 'Undo Alt',
        value: 'fas fa-undo-alt',
      },
      {
        label: 'Universal Access',
        value: 'fas fa-universal-access',
      },
      {
        label: 'University',
        value: 'fas fa-university',
      },
      {
        label: 'Unlink',
        value: 'fas fa-unlink',
      },
      {
        label: 'Unlock',
        value: 'fas fa-unlock',
      },
      {
        label: 'Unlock Alt',
        value: 'fas fa-unlock-alt',
      },
      {
        label: 'Upload',
        value: 'fas fa-upload',
      },
      {
        label: 'User',
        value: 'fas fa-user',
      },
      {
        label: 'User Alt',
        value: 'fas fa-user-alt',
      },
      {
        label: 'User Alt Slash',
        value: 'fas fa-user-alt-slash',
      },
      {
        label: 'User Astronaut',
        value: 'fas fa-user-astronaut',
      },
      {
        label: 'User Check',
        value: 'fas fa-user-check',
      },
      {
        label: 'User Circle',
        value: 'fas fa-user-circle',
      },
      {
        label: 'User Clock',
        value: 'fas fa-user-clock',
      },
      {
        label: 'User Cog',
        value: 'fas fa-user-cog',
      },
      {
        label: 'User Edit',
        value: 'fas fa-user-edit',
      },
      {
        label: 'User Friends',
        value: 'fas fa-user-friends',
      },
      {
        label: 'User Graduate',
        value: 'fas fa-user-graduate',
      },
      {
        label: 'User Injured',
        value: 'fas fa-user-injured',
      },
      {
        label: 'User Lock',
        value: 'fas fa-user-lock',
      },
      {
        label: 'User Md',
        value: 'fas fa-user-md',
      },
      {
        label: 'User Minus',
        value: 'fas fa-user-minus',
      },
      {
        label: 'User Ninja',
        value: 'fas fa-user-ninja',
      },
      {
        label: 'User Nurse',
        value: 'fas fa-user-nurse',
      },
      {
        label: 'User Plus',
        value: 'fas fa-user-plus',
      },
      {
        label: 'User Secret',
        value: 'fas fa-user-secret',
      },
      {
        label: 'User Shield',
        value: 'fas fa-user-shield',
      },
      {
        label: 'User Slash',
        value: 'fas fa-user-slash',
      },
      {
        label: 'User Tag',
        value: 'fas fa-user-tag',
      },
      {
        label: 'User Tie',
        value: 'fas fa-user-tie',
      },
      {
        label: 'User Times',
        value: 'fas fa-user-times',
      },
      {
        label: 'Users',
        value: 'fas fa-users',
      },
      {
        label: 'Users Cog',
        value: 'fas fa-users-cog',
      },
      {
        label: 'Users Slash',
        value: 'fas fa-users-slash',
      },
      {
        label: 'Utensil Spoon',
        value: 'fas fa-utensil-spoon',
      },
      {
        label: 'Utensils',
        value: 'fas fa-utensils',
      },
      {
        label: 'Vector Square',
        value: 'fas fa-vector-square',
      },
      {
        label: 'Venus',
        value: 'fas fa-venus',
      },
      {
        label: 'Venus Double',
        value: 'fas fa-venus-double',
      },
      {
        label: 'Venus Mars',
        value: 'fas fa-venus-mars',
      },
      {
        label: 'Vest',
        value: 'fas fa-vest',
      },
      {
        label: 'Vest Patches',
        value: 'fas fa-vest-patches',
      },
      {
        label: 'Vial',
        value: 'fas fa-vial',
      },
      {
        label: 'Vials',
        value: 'fas fa-vials',
      },
      {
        label: 'Video',
        value: 'fas fa-video',
      },
      {
        label: 'Video Slash',
        value: 'fas fa-video-slash',
      },
      {
        label: 'Vihara',
        value: 'fas fa-vihara',
      },
      {
        label: 'Virus',
        value: 'fas fa-virus',
      },
      {
        label: 'Virus Slash',
        value: 'fas fa-virus-slash',
      },
      {
        label: 'Viruses',
        value: 'fas fa-viruses',
      },
      {
        label: 'Voicemail',
        value: 'fas fa-voicemail',
      },
      {
        label: 'Volleyball Ball',
        value: 'fas fa-volleyball-ball',
      },
      {
        label: 'Volume Down',
        value: 'fas fa-volume-down',
      },
      {
        label: 'Volume Mute',
        value: 'fas fa-volume-mute',
      },
      {
        label: 'Volume Off',
        value: 'fas fa-volume-off',
      },
      {
        label: 'Volume Up',
        value: 'fas fa-volume-up',
      },
      {
        label: 'Vote Yea',
        value: 'fas fa-vote-yea',
      },
      {
        label: 'Vr Cardboard',
        value: 'fas fa-vr-cardboard',
      },
      {
        label: 'Walking',
        value: 'fas fa-walking',
      },
      {
        label: 'Wallet',
        value: 'fas fa-wallet',
      },
      {
        label: 'Warehouse',
        value: 'fas fa-warehouse',
      },
      {
        label: 'Water',
        value: 'fas fa-water',
      },
      {
        label: 'Wave Square',
        value: 'fas fa-wave-square',
      },
      {
        label: 'Weight',
        value: 'fas fa-weight',
      },
      {
        label: 'Weight Hanging',
        value: 'fas fa-weight-hanging',
      },
      {
        label: 'Wheelchair',
        value: 'fas fa-wheelchair',
      },
      {
        label: 'Wifi',
        value: 'fas fa-wifi',
      },
      {
        label: 'Wind',
        value: 'fas fa-wind',
      },
      {
        label: 'Window Close',
        value: 'fas fa-window-close',
      },
      {
        label: 'Window Maximize',
        value: 'fas fa-window-maximize',
      },
      {
        label: 'Window Minimize',
        value: 'fas fa-window-minimize',
      },
      {
        label: 'Window Restore',
        value: 'fas fa-window-restore',
      },
      {
        label: 'Wine Bottle',
        value: 'fas fa-wine-bottle',
      },
      {
        label: 'Wine Glass',
        value: 'fas fa-wine-glass',
      },
      {
        label: 'Wine Glass Alt',
        value: 'fas fa-wine-glass-alt',
      },
      {
        label: 'Won Sign',
        value: 'fas fa-won-sign',
      },
      {
        label: 'Wrench',
        value: 'fas fa-wrench',
      },
      {
        label: 'X Ray',
        value: 'fas fa-x-ray',
      },
      {
        label: 'Yen Sign',
        value: 'fas fa-yen-sign',
      },
      {
        label: 'Yin Yang',
        value: 'fas fa-yin-yang',
      },
    ],
  },
  {
    label: 'Regular',
    options: [
      {
        label: 'Address Book',
        value: 'far fa-address-book',
      },
      {
        label: 'Address Card',
        value: 'far fa-address-card',
      },
      {
        label: 'Angry',
        value: 'far fa-angry',
      },
      {
        label: 'Arrow Alt Circle Down',
        value: 'far fa-arrow-alt-circle-down',
      },
      {
        label: 'Arrow Alt Circle Left',
        value: 'far fa-arrow-alt-circle-left',
      },
      {
        label: 'Arrow Alt Circle Right',
        value: 'far fa-arrow-alt-circle-right',
      },
      {
        label: 'Arrow Alt Circle Up',
        value: 'far fa-arrow-alt-circle-up',
      },
      {
        label: 'Bell',
        value: 'far fa-bell',
      },
      {
        label: 'Bell Slash',
        value: 'far fa-bell-slash',
      },
      {
        label: 'Bookmark',
        value: 'far fa-bookmark',
      },
      {
        label: 'Building',
        value: 'far fa-building',
      },
      {
        label: 'Calendar',
        value: 'far fa-calendar',
      },
      {
        label: 'Calendar Alt',
        value: 'far fa-calendar-alt',
      },
      {
        label: 'Calendar Check',
        value: 'far fa-calendar-check',
      },
      {
        label: 'Calendar Minus',
        value: 'far fa-calendar-minus',
      },
      {
        label: 'Calendar Plus',
        value: 'far fa-calendar-plus',
      },
      {
        label: 'Calendar Times',
        value: 'far fa-calendar-times',
      },
      {
        label: 'Caret Square Down',
        value: 'far fa-caret-square-down',
      },
      {
        label: 'Caret Square Left',
        value: 'far fa-caret-square-left',
      },
      {
        label: 'Caret Square Right',
        value: 'far fa-caret-square-right',
      },
      {
        label: 'Caret Square Up',
        value: 'far fa-caret-square-up',
      },
      {
        label: 'Chart Bar',
        value: 'far fa-chart-bar',
      },
      {
        label: 'Check Circle',
        value: 'far fa-check-circle',
      },
      {
        label: 'Check Square',
        value: 'far fa-check-square',
      },
      {
        label: 'Circle',
        value: 'far fa-circle',
      },
      {
        label: 'Clipboard',
        value: 'far fa-clipboard',
      },
      {
        label: 'Clock',
        value: 'far fa-clock',
      },
      {
        label: 'Clone',
        value: 'far fa-clone',
      },
      {
        label: 'Closed Captioning',
        value: 'far fa-closed-captioning',
      },
      {
        label: 'Comment',
        value: 'far fa-comment',
      },
      {
        label: 'Comment Alt',
        value: 'far fa-comment-alt',
      },
      {
        label: 'Comment Dots',
        value: 'far fa-comment-dots',
      },
      {
        label: 'Comments',
        value: 'far fa-comments',
      },
      {
        label: 'Compass',
        value: 'far fa-compass',
      },
      {
        label: 'Copy',
        value: 'far fa-copy',
      },
      {
        label: 'Copyright',
        value: 'far fa-copyright',
      },
      {
        label: 'Credit Card',
        value: 'far fa-credit-card',
      },
      {
        label: 'Dizzy',
        value: 'far fa-dizzy',
      },
      {
        label: 'Dot Circle',
        value: 'far fa-dot-circle',
      },
      {
        label: 'Edit',
        value: 'far fa-edit',
      },
      {
        label: 'Envelope',
        value: 'far fa-envelope',
      },
      {
        label: 'Envelope Open',
        value: 'far fa-envelope-open',
      },
      {
        label: 'Eye',
        value: 'far fa-eye',
      },
      {
        label: 'Eye Slash',
        value: 'far fa-eye-slash',
      },
      {
        label: 'File',
        value: 'far fa-file',
      },
      {
        label: 'File Alt',
        value: 'far fa-file-alt',
      },
      {
        label: 'File Archive',
        value: 'far fa-file-archive',
      },
      {
        label: 'File Audio',
        value: 'far fa-file-audio',
      },
      {
        label: 'File Code',
        value: 'far fa-file-code',
      },
      {
        label: 'File Excel',
        value: 'far fa-file-excel',
      },
      {
        label: 'File Image',
        value: 'far fa-file-image',
      },
      {
        label: 'File Pdf',
        value: 'far fa-file-pdf',
      },
      {
        label: 'File Powerpoint',
        value: 'far fa-file-powerpoint',
      },
      {
        label: 'File Video',
        value: 'far fa-file-video',
      },
      {
        label: 'File Word',
        value: 'far fa-file-word',
      },
      {
        label: 'Flag',
        value: 'far fa-flag',
      },
      {
        label: 'Flushed',
        value: 'far fa-flushed',
      },
      {
        label: 'Folder',
        value: 'far fa-folder',
      },
      {
        label: 'Folder Open',
        value: 'far fa-folder-open',
      },
      {
        label: 'Frown',
        value: 'far fa-frown',
      },
      {
        label: 'Frown Open',
        value: 'far fa-frown-open',
      },
      {
        label: 'Futbol',
        value: 'far fa-futbol',
      },
      {
        label: 'Gem',
        value: 'far fa-gem',
      },
      {
        label: 'Grimace',
        value: 'far fa-grimace',
      },
      {
        label: 'Grin',
        value: 'far fa-grin',
      },
      {
        label: 'Grin Alt',
        value: 'far fa-grin-alt',
      },
      {
        label: 'Grin Beam',
        value: 'far fa-grin-beam',
      },
      {
        label: 'Grin Beam Sweat',
        value: 'far fa-grin-beam-sweat',
      },
      {
        label: 'Grin Hearts',
        value: 'far fa-grin-hearts',
      },
      {
        label: 'Grin Squint',
        value: 'far fa-grin-squint',
      },
      {
        label: 'Grin Squint Tears',
        value: 'far fa-grin-squint-tears',
      },
      {
        label: 'Grin Stars',
        value: 'far fa-grin-stars',
      },
      {
        label: 'Grin Tears',
        value: 'far fa-grin-tears',
      },
      {
        label: 'Grin Tongue',
        value: 'far fa-grin-tongue',
      },
      {
        label: 'Grin Tongue Squint',
        value: 'far fa-grin-tongue-squint',
      },
      {
        label: 'Grin Tongue Wink',
        value: 'far fa-grin-tongue-wink',
      },
      {
        label: 'Grin Wink',
        value: 'far fa-grin-wink',
      },
      {
        label: 'Hand Lizard',
        value: 'far fa-hand-lizard',
      },
      {
        label: 'Hand Paper',
        value: 'far fa-hand-paper',
      },
      {
        label: 'Hand Peace',
        value: 'far fa-hand-peace',
      },
      {
        label: 'Hand Point Down',
        value: 'far fa-hand-point-down',
      },
      {
        label: 'Hand Point Left',
        value: 'far fa-hand-point-left',
      },
      {
        label: 'Hand Point Right',
        value: 'far fa-hand-point-right',
      },
      {
        label: 'Hand Point Up',
        value: 'far fa-hand-point-up',
      },
      {
        label: 'Hand Pointer',
        value: 'far fa-hand-pointer',
      },
      {
        label: 'Hand Rock',
        value: 'far fa-hand-rock',
      },
      {
        label: 'Hand Scissors',
        value: 'far fa-hand-scissors',
      },
      {
        label: 'Hand Spock',
        value: 'far fa-hand-spock',
      },
      {
        label: 'Handshake',
        value: 'far fa-handshake',
      },
      {
        label: 'Hdd',
        value: 'far fa-hdd',
      },
      {
        label: 'Heart',
        value: 'far fa-heart',
      },
      {
        label: 'Hospital',
        value: 'far fa-hospital',
      },
      {
        label: 'Hourglass',
        value: 'far fa-hourglass',
      },
      {
        label: 'Id Badge',
        value: 'far fa-id-badge',
      },
      {
        label: 'Id Card',
        value: 'far fa-id-card',
      },
      {
        label: 'Image',
        value: 'far fa-image',
      },
      {
        label: 'Images',
        value: 'far fa-images',
      },
      {
        label: 'Keyboard',
        value: 'far fa-keyboard',
      },
      {
        label: 'Kiss',
        value: 'far fa-kiss',
      },
      {
        label: 'Kiss Beam',
        value: 'far fa-kiss-beam',
      },
      {
        label: 'Kiss Wink Heart',
        value: 'far fa-kiss-wink-heart',
      },
      {
        label: 'Laugh',
        value: 'far fa-laugh',
      },
      {
        label: 'Laugh Beam',
        value: 'far fa-laugh-beam',
      },
      {
        label: 'Laugh Squint',
        value: 'far fa-laugh-squint',
      },
      {
        label: 'Laugh Wink',
        value: 'far fa-laugh-wink',
      },
      {
        label: 'Lemon',
        value: 'far fa-lemon',
      },
      {
        label: 'Life Ring',
        value: 'far fa-life-ring',
      },
      {
        label: 'Lightbulb',
        value: 'far fa-lightbulb',
      },
      {
        label: 'List Alt',
        value: 'far fa-list-alt',
      },
      {
        label: 'Map',
        value: 'far fa-map',
      },
      {
        label: 'Meh',
        value: 'far fa-meh',
      },
      {
        label: 'Meh Blank',
        value: 'far fa-meh-blank',
      },
      {
        label: 'Meh Rolling Eyes',
        value: 'far fa-meh-rolling-eyes',
      },
      {
        label: 'Minus Square',
        value: 'far fa-minus-square',
      },
      {
        label: 'Money Bill Alt',
        value: 'far fa-money-bill-alt',
      },
      {
        label: 'Moon',
        value: 'far fa-moon',
      },
      {
        label: 'Newspaper',
        value: 'far fa-newspaper',
      },
      {
        label: 'Object Group',
        value: 'far fa-object-group',
      },
      {
        label: 'Object Ungroup',
        value: 'far fa-object-ungroup',
      },
      {
        label: 'Paper Plane',
        value: 'far fa-paper-plane',
      },
      {
        label: 'Pause Circle',
        value: 'far fa-pause-circle',
      },
      {
        label: 'Play Circle',
        value: 'far fa-play-circle',
      },
      {
        label: 'Plus Square',
        value: 'far fa-plus-square',
      },
      {
        label: 'Question Circle',
        value: 'far fa-question-circle',
      },
      {
        label: 'Registered',
        value: 'far fa-registered',
      },
      {
        label: 'Sad Cry',
        value: 'far fa-sad-cry',
      },
      {
        label: 'Sad Tear',
        value: 'far fa-sad-tear',
      },
      {
        label: 'Save',
        value: 'far fa-save',
      },
      {
        label: 'Share Square',
        value: 'far fa-share-square',
      },
      {
        label: 'Smile',
        value: 'far fa-smile',
      },
      {
        label: 'Smile Beam',
        value: 'far fa-smile-beam',
      },
      {
        label: 'Smile Wink',
        value: 'far fa-smile-wink',
      },
      {
        label: 'Snowflake',
        value: 'far fa-snowflake',
      },
      {
        label: 'Square',
        value: 'far fa-square',
      },
      {
        label: 'Star',
        value: 'far fa-star',
      },
      {
        label: 'Star Half',
        value: 'far fa-star-half',
      },
      {
        label: 'Sticky Note',
        value: 'far fa-sticky-note',
      },
      {
        label: 'Stop Circle',
        value: 'far fa-stop-circle',
      },
      {
        label: 'Sun',
        value: 'far fa-sun',
      },
      {
        label: 'Surprise',
        value: 'far fa-surprise',
      },
      {
        label: 'Thumbs Down',
        value: 'far fa-thumbs-down',
      },
      {
        label: 'Thumbs Up',
        value: 'far fa-thumbs-up',
      },
      {
        label: 'Times Circle',
        value: 'far fa-times-circle',
      },
      {
        label: 'Tired',
        value: 'far fa-tired',
      },
      {
        label: 'Trash Alt',
        value: 'far fa-trash-alt',
      },
      {
        label: 'User',
        value: 'far fa-user',
      },
      {
        label: 'User Circle',
        value: 'far fa-user-circle',
      },
      {
        label: 'Window Close',
        value: 'far fa-window-close',
      },
      {
        label: 'Window Maximize',
        value: 'far fa-window-maximize',
      },
      {
        label: 'Window Minimize',
        value: 'far fa-window-minimize',
      },
      {
        label: 'Window Restore',
        value: 'far fa-window-restore',
      },
    ],
  },
  {
    label: 'Brands',
    options: [
      {
        label: '500px',
        value: 'fab fa-500px',
      },
      {
        label: 'Accessible Icon',
        value: 'fab fa-accessible-icon',
      },
      {
        label: 'Accusoft',
        value: 'fab fa-accusoft',
      },
      {
        label: 'Acquisitions Incorporated',
        value: 'fab fa-acquisitions-incorporated',
      },
      {
        label: 'Adn',
        value: 'fab fa-adn',
      },
      {
        label: 'Adversal',
        value: 'fab fa-adversal',
      },
      {
        label: 'Affiliatetheme',
        value: 'fab fa-affiliatetheme',
      },
      {
        label: 'Airbnb',
        value: 'fab fa-airbnb',
      },
      {
        label: 'Algolia',
        value: 'fab fa-algolia',
      },
      {
        label: 'Alipay',
        value: 'fab fa-alipay',
      },
      {
        label: 'Amazon',
        value: 'fab fa-amazon',
      },
      {
        label: 'Amazon Pay',
        value: 'fab fa-amazon-pay',
      },
      {
        label: 'Amilia',
        value: 'fab fa-amilia',
      },
      {
        label: 'Android',
        value: 'fab fa-android',
      },
      {
        label: 'Angellist',
        value: 'fab fa-angellist',
      },
      {
        label: 'Angrycreative',
        value: 'fab fa-angrycreative',
      },
      {
        label: 'Angular',
        value: 'fab fa-angular',
      },
      {
        label: 'App Store',
        value: 'fab fa-app-store',
      },
      {
        label: 'App Store Ios',
        value: 'fab fa-app-store-ios',
      },
      {
        label: 'Apper',
        value: 'fab fa-apper',
      },
      {
        label: 'Apple',
        value: 'fab fa-apple',
      },
      {
        label: 'Apple Pay',
        value: 'fab fa-apple-pay',
      },
      {
        label: 'Artstation',
        value: 'fab fa-artstation',
      },
      {
        label: 'Asymmetrik',
        value: 'fab fa-asymmetrik',
      },
      {
        label: 'Atlassian',
        value: 'fab fa-atlassian',
      },
      {
        label: 'Audible',
        value: 'fab fa-audible',
      },
      {
        label: 'Autoprefixer',
        value: 'fab fa-autoprefixer',
      },
      {
        label: 'Avianex',
        value: 'fab fa-avianex',
      },
      {
        label: 'Aviato',
        value: 'fab fa-aviato',
      },
      {
        label: 'Aws',
        value: 'fab fa-aws',
      },
      {
        label: 'Bandcamp',
        value: 'fab fa-bandcamp',
      },
      {
        label: 'Battle Net',
        value: 'fab fa-battle-net',
      },
      {
        label: 'Behance',
        value: 'fab fa-behance',
      },
      {
        label: 'Behance Square',
        value: 'fab fa-behance-square',
      },
      {
        label: 'Bimobject',
        value: 'fab fa-bimobject',
      },
      {
        label: 'Bitbucket',
        value: 'fab fa-bitbucket',
      },
      {
        label: 'Bitcoin',
        value: 'fab fa-bitcoin',
      },
      {
        label: 'Bity',
        value: 'fab fa-bity',
      },
      {
        label: 'Black Tie',
        value: 'fab fa-black-tie',
      },
      {
        label: 'Blackberry',
        value: 'fab fa-blackberry',
      },
      {
        label: 'Blogger',
        value: 'fab fa-blogger',
      },
      {
        label: 'Blogger B',
        value: 'fab fa-blogger-b',
      },
      {
        label: 'Bluetooth',
        value: 'fab fa-bluetooth',
      },
      {
        label: 'Bluetooth B',
        value: 'fab fa-bluetooth-b',
      },
      {
        label: 'Bootstrap',
        value: 'fab fa-bootstrap',
      },
      {
        label: 'Btc',
        value: 'fab fa-btc',
      },
      {
        label: 'Buffer',
        value: 'fab fa-buffer',
      },
      {
        label: 'Buromobelexperte',
        value: 'fab fa-buromobelexperte',
      },
      {
        label: 'Buy N Large',
        value: 'fab fa-buy-n-large',
      },
      {
        label: 'Buysellads',
        value: 'fab fa-buysellads',
      },
      {
        label: 'Canadian Maple Leaf',
        value: 'fab fa-canadian-maple-leaf',
      },
      {
        label: 'Cc Amazon Pay',
        value: 'fab fa-cc-amazon-pay',
      },
      {
        label: 'Cc Amex',
        value: 'fab fa-cc-amex',
      },
      {
        label: 'Cc Apple Pay',
        value: 'fab fa-cc-apple-pay',
      },
      {
        label: 'Cc Diners Club',
        value: 'fab fa-cc-diners-club',
      },
      {
        label: 'Cc Discover',
        value: 'fab fa-cc-discover',
      },
      {
        label: 'Cc Jcb',
        value: 'fab fa-cc-jcb',
      },
      {
        label: 'Cc Mastercard',
        value: 'fab fa-cc-mastercard',
      },
      {
        label: 'Cc Paypal',
        value: 'fab fa-cc-paypal',
      },
      {
        label: 'Cc Stripe',
        value: 'fab fa-cc-stripe',
      },
      {
        label: 'Cc Visa',
        value: 'fab fa-cc-visa',
      },
      {
        label: 'Centercode',
        value: 'fab fa-centercode',
      },
      {
        label: 'Centos',
        value: 'fab fa-centos',
      },
      {
        label: 'Chrome',
        value: 'fab fa-chrome',
      },
      {
        label: 'Chromecast',
        value: 'fab fa-chromecast',
      },
      {
        label: 'Cloudflare',
        value: 'fab fa-cloudflare',
      },
      {
        label: 'Cloudscale',
        value: 'fab fa-cloudscale',
      },
      {
        label: 'Cloudsmith',
        value: 'fab fa-cloudsmith',
      },
      {
        label: 'Cloudversify',
        value: 'fab fa-cloudversify',
      },
      {
        label: 'Codepen',
        value: 'fab fa-codepen',
      },
      {
        label: 'Codiepie',
        value: 'fab fa-codiepie',
      },
      {
        label: 'Confluence',
        value: 'fab fa-confluence',
      },
      {
        label: 'Connectdevelop',
        value: 'fab fa-connectdevelop',
      },
      {
        label: 'Contao',
        value: 'fab fa-contao',
      },
      {
        label: 'Cotton Bureau',
        value: 'fab fa-cotton-bureau',
      },
      {
        label: 'Cpanel',
        value: 'fab fa-cpanel',
      },
      {
        label: 'Creative Commons',
        value: 'fab fa-creative-commons',
      },
      {
        label: 'Creative Commons By',
        value: 'fab fa-creative-commons-by',
      },
      {
        label: 'Creative Commons Nc',
        value: 'fab fa-creative-commons-nc',
      },
      {
        label: 'Creative Commons Nc Eu',
        value: 'fab fa-creative-commons-nc-eu',
      },
      {
        label: 'Creative Commons Nc Jp',
        value: 'fab fa-creative-commons-nc-jp',
      },
      {
        label: 'Creative Commons Nd',
        value: 'fab fa-creative-commons-nd',
      },
      {
        label: 'Creative Commons Pd',
        value: 'fab fa-creative-commons-pd',
      },
      {
        label: 'Creative Commons Pd Alt',
        value: 'fab fa-creative-commons-pd-alt',
      },
      {
        label: 'Creative Commons Remix',
        value: 'fab fa-creative-commons-remix',
      },
      {
        label: 'Creative Commons Sa',
        value: 'fab fa-creative-commons-sa',
      },
      {
        label: 'Creative Commons Sampling',
        value: 'fab fa-creative-commons-sampling',
      },
      {
        label: 'Creative Commons Sampling Plus',
        value: 'fab fa-creative-commons-sampling-plus',
      },
      {
        label: 'Creative Commons Share',
        value: 'fab fa-creative-commons-share',
      },
      {
        label: 'Creative Commons Zero',
        value: 'fab fa-creative-commons-zero',
      },
      {
        label: 'Critical Role',
        value: 'fab fa-critical-role',
      },
      {
        label: 'Css3',
        value: 'fab fa-css3',
      },
      {
        label: 'Css3 Alt',
        value: 'fab fa-css3-alt',
      },
      {
        label: 'Cuttlefish',
        value: 'fab fa-cuttlefish',
      },
      {
        label: 'D And D',
        value: 'fab fa-d-and-d',
      },
      {
        label: 'D And D Beyond',
        value: 'fab fa-d-and-d-beyond',
      },
      {
        label: 'Dailymotion',
        value: 'fab fa-dailymotion',
      },
      {
        label: 'Dashcube',
        value: 'fab fa-dashcube',
      },
      {
        label: 'Deezer',
        value: 'fab fa-deezer',
      },
      {
        label: 'Delicious',
        value: 'fab fa-delicious',
      },
      {
        label: 'Deploydog',
        value: 'fab fa-deploydog',
      },
      {
        label: 'Deskpro',
        value: 'fab fa-deskpro',
      },
      {
        label: 'Dev',
        value: 'fab fa-dev',
      },
      {
        label: 'Deviantart',
        value: 'fab fa-deviantart',
      },
      {
        label: 'Dhl',
        value: 'fab fa-dhl',
      },
      {
        label: 'Diaspora',
        value: 'fab fa-diaspora',
      },
      {
        label: 'Digg',
        value: 'fab fa-digg',
      },
      {
        label: 'Digital Ocean',
        value: 'fab fa-digital-ocean',
      },
      {
        label: 'Discord',
        value: 'fab fa-discord',
      },
      {
        label: 'Discourse',
        value: 'fab fa-discourse',
      },
      {
        label: 'Dochub',
        value: 'fab fa-dochub',
      },
      {
        label: 'Docker',
        value: 'fab fa-docker',
      },
      {
        label: 'Draft2digital',
        value: 'fab fa-draft2digital',
      },
      {
        label: 'Dribbble',
        value: 'fab fa-dribbble',
      },
      {
        label: 'Dribbble Square',
        value: 'fab fa-dribbble-square',
      },
      {
        label: 'Dropbox',
        value: 'fab fa-dropbox',
      },
      {
        label: 'Drupal',
        value: 'fab fa-drupal',
      },
      {
        label: 'Dyalog',
        value: 'fab fa-dyalog',
      },
      {
        label: 'Earlybirds',
        value: 'fab fa-earlybirds',
      },
      {
        label: 'Ebay',
        value: 'fab fa-ebay',
      },
      {
        label: 'Edge',
        value: 'fab fa-edge',
      },
      {
        label: 'Edge Legacy',
        value: 'fab fa-edge-legacy',
      },
      {
        label: 'Elementor',
        value: 'fab fa-elementor',
      },
      {
        label: 'Ello',
        value: 'fab fa-ello',
      },
      {
        label: 'Ember',
        value: 'fab fa-ember',
      },
      {
        label: 'Empire',
        value: 'fab fa-empire',
      },
      {
        label: 'Envira',
        value: 'fab fa-envira',
      },
      {
        label: 'Erlang',
        value: 'fab fa-erlang',
      },
      {
        label: 'Ethereum',
        value: 'fab fa-ethereum',
      },
      {
        label: 'Etsy',
        value: 'fab fa-etsy',
      },
      {
        label: 'Evernote',
        value: 'fab fa-evernote',
      },
      {
        label: 'Expeditedssl',
        value: 'fab fa-expeditedssl',
      },
      {
        label: 'Facebook',
        value: 'fab fa-facebook',
      },
      {
        label: 'Facebook F',
        value: 'fab fa-facebook-f',
      },
      {
        label: 'Facebook Messenger',
        value: 'fab fa-facebook-messenger',
      },
      {
        label: 'Facebook Square',
        value: 'fab fa-facebook-square',
      },
      {
        label: 'Fantasy Flight Games',
        value: 'fab fa-fantasy-flight-games',
      },
      {
        label: 'Fedex',
        value: 'fab fa-fedex',
      },
      {
        label: 'Fedora',
        value: 'fab fa-fedora',
      },
      {
        label: 'Figma',
        value: 'fab fa-figma',
      },
      {
        label: 'Firefox',
        value: 'fab fa-firefox',
      },
      {
        label: 'Firefox Browser',
        value: 'fab fa-firefox-browser',
      },
      {
        label: 'First Order',
        value: 'fab fa-first-order',
      },
      {
        label: 'First Order Alt',
        value: 'fab fa-first-order-alt',
      },
      {
        label: 'Firstdraft',
        value: 'fab fa-firstdraft',
      },
      {
        label: 'Flickr',
        value: 'fab fa-flickr',
      },
      {
        label: 'Flipboard',
        value: 'fab fa-flipboard',
      },
      {
        label: 'Fly',
        value: 'fab fa-fly',
      },
      {
        label: 'Font Awesome',
        value: 'fab fa-font-awesome',
      },
      {
        label: 'Font Awesome Alt',
        value: 'fab fa-font-awesome-alt',
      },
      {
        label: 'Font Awesome Flag',
        value: 'fab fa-font-awesome-flag',
      },
      {
        label: 'Fonticons',
        value: 'fab fa-fonticons',
      },
      {
        label: 'Fonticons Fi',
        value: 'fab fa-fonticons-fi',
      },
      {
        label: 'Fort Awesome',
        value: 'fab fa-fort-awesome',
      },
      {
        label: 'Fort Awesome Alt',
        value: 'fab fa-fort-awesome-alt',
      },
      {
        label: 'Forumbee',
        value: 'fab fa-forumbee',
      },
      {
        label: 'Foursquare',
        value: 'fab fa-foursquare',
      },
      {
        label: 'Free Code Camp',
        value: 'fab fa-free-code-camp',
      },
      {
        label: 'Freebsd',
        value: 'fab fa-freebsd',
      },
      {
        label: 'Fulcrum',
        value: 'fab fa-fulcrum',
      },
      {
        label: 'Galactic Republic',
        value: 'fab fa-galactic-republic',
      },
      {
        label: 'Galactic Senate',
        value: 'fab fa-galactic-senate',
      },
      {
        label: 'Get Pocket',
        value: 'fab fa-get-pocket',
      },
      {
        label: 'Gg',
        value: 'fab fa-gg',
      },
      {
        label: 'Gg Circle',
        value: 'fab fa-gg-circle',
      },
      {
        label: 'Git',
        value: 'fab fa-git',
      },
      {
        label: 'Git Alt',
        value: 'fab fa-git-alt',
      },
      {
        label: 'Git Square',
        value: 'fab fa-git-square',
      },
      {
        label: 'Github',
        value: 'fab fa-github',
      },
      {
        label: 'Github Alt',
        value: 'fab fa-github-alt',
      },
      {
        label: 'Github Square',
        value: 'fab fa-github-square',
      },
      {
        label: 'Gitkraken',
        value: 'fab fa-gitkraken',
      },
      {
        label: 'Gitlab',
        value: 'fab fa-gitlab',
      },
      {
        label: 'Gitter',
        value: 'fab fa-gitter',
      },
      {
        label: 'Glide',
        value: 'fab fa-glide',
      },
      {
        label: 'Glide G',
        value: 'fab fa-glide-g',
      },
      {
        label: 'Gofore',
        value: 'fab fa-gofore',
      },
      {
        label: 'Goodreads',
        value: 'fab fa-goodreads',
      },
      {
        label: 'Goodreads G',
        value: 'fab fa-goodreads-g',
      },
      {
        label: 'Google',
        value: 'fab fa-google',
      },
      {
        label: 'Google Drive',
        value: 'fab fa-google-drive',
      },
      {
        label: 'Google Pay',
        value: 'fab fa-google-pay',
      },
      {
        label: 'Google Play',
        value: 'fab fa-google-play',
      },
      {
        label: 'Google Plus',
        value: 'fab fa-google-plus',
      },
      {
        label: 'Google Plus G',
        value: 'fab fa-google-plus-g',
      },
      {
        label: 'Google Plus Square',
        value: 'fab fa-google-plus-square',
      },
      {
        label: 'Google Wallet',
        value: 'fab fa-google-wallet',
      },
      {
        label: 'Gratipay',
        value: 'fab fa-gratipay',
      },
      {
        label: 'Grav',
        value: 'fab fa-grav',
      },
      {
        label: 'Gripfire',
        value: 'fab fa-gripfire',
      },
      {
        label: 'Grunt',
        value: 'fab fa-grunt',
      },
      {
        label: 'Guilded',
        value: 'fab fa-guilded',
      },
      {
        label: 'Gulp',
        value: 'fab fa-gulp',
      },
      {
        label: 'Hacker News',
        value: 'fab fa-hacker-news',
      },
      {
        label: 'Hacker News Square',
        value: 'fab fa-hacker-news-square',
      },
      {
        label: 'Hackerrank',
        value: 'fab fa-hackerrank',
      },
      {
        label: 'Hips',
        value: 'fab fa-hips',
      },
      {
        label: 'Hire A Helper',
        value: 'fab fa-hire-a-helper',
      },
      {
        label: 'Hive',
        value: 'fab fa-hive',
      },
      {
        label: 'Hooli',
        value: 'fab fa-hooli',
      },
      {
        label: 'Hornbill',
        value: 'fab fa-hornbill',
      },
      {
        label: 'Hotjar',
        value: 'fab fa-hotjar',
      },
      {
        label: 'Houzz',
        value: 'fab fa-houzz',
      },
      {
        label: 'Html5',
        value: 'fab fa-html5',
      },
      {
        label: 'Hubspot',
        value: 'fab fa-hubspot',
      },
      {
        label: 'Ideal',
        value: 'fab fa-ideal',
      },
      {
        label: 'Imdb',
        value: 'fab fa-imdb',
      },
      {
        label: 'Innosoft',
        value: 'fab fa-innosoft',
      },
      {
        label: 'Instagram',
        value: 'fab fa-instagram',
      },
      {
        label: 'Instagram Square',
        value: 'fab fa-instagram-square',
      },
      {
        label: 'Instalod',
        value: 'fab fa-instalod',
      },
      {
        label: 'Intercom',
        value: 'fab fa-intercom',
      },
      {
        label: 'Internet Explorer',
        value: 'fab fa-internet-explorer',
      },
      {
        label: 'Invision',
        value: 'fab fa-invision',
      },
      {
        label: 'Ioxhost',
        value: 'fab fa-ioxhost',
      },
      {
        label: 'Itch Io',
        value: 'fab fa-itch-io',
      },
      {
        label: 'Itunes',
        value: 'fab fa-itunes',
      },
      {
        label: 'Itunes Note',
        value: 'fab fa-itunes-note',
      },
      {
        label: 'Java',
        value: 'fab fa-java',
      },
      {
        label: 'Jedi Order',
        value: 'fab fa-jedi-order',
      },
      {
        label: 'Jenkins',
        value: 'fab fa-jenkins',
      },
      {
        label: 'Jira',
        value: 'fab fa-jira',
      },
      {
        label: 'Joget',
        value: 'fab fa-joget',
      },
      {
        label: 'Joomla',
        value: 'fab fa-joomla',
      },
      {
        label: 'Js',
        value: 'fab fa-js',
      },
      {
        label: 'Js Square',
        value: 'fab fa-js-square',
      },
      {
        label: 'Jsfiddle',
        value: 'fab fa-jsfiddle',
      },
      {
        label: 'Kaggle',
        value: 'fab fa-kaggle',
      },
      {
        label: 'Keybase',
        value: 'fab fa-keybase',
      },
      {
        label: 'Keycdn',
        value: 'fab fa-keycdn',
      },
      {
        label: 'Kickstarter',
        value: 'fab fa-kickstarter',
      },
      {
        label: 'Kickstarter K',
        value: 'fab fa-kickstarter-k',
      },
      {
        label: 'Korvue',
        value: 'fab fa-korvue',
      },
      {
        label: 'Laravel',
        value: 'fab fa-laravel',
      },
      {
        label: 'Lastfm',
        value: 'fab fa-lastfm',
      },
      {
        label: 'Lastfm Square',
        value: 'fab fa-lastfm-square',
      },
      {
        label: 'Leanpub',
        value: 'fab fa-leanpub',
      },
      {
        label: 'Less',
        value: 'fab fa-less',
      },
      {
        label: 'Line',
        value: 'fab fa-line',
      },
      {
        label: 'Linkedin',
        value: 'fab fa-linkedin',
      },
      {
        label: 'Linkedin In',
        value: 'fab fa-linkedin-in',
      },
      {
        label: 'Linode',
        value: 'fab fa-linode',
      },
      {
        label: 'Linux',
        value: 'fab fa-linux',
      },
      {
        label: 'Lyft',
        value: 'fab fa-lyft',
      },
      {
        label: 'Magento',
        value: 'fab fa-magento',
      },
      {
        label: 'Mailchimp',
        value: 'fab fa-mailchimp',
      },
      {
        label: 'Mandalorian',
        value: 'fab fa-mandalorian',
      },
      {
        label: 'Markdown',
        value: 'fab fa-markdown',
      },
      {
        label: 'Mastodon',
        value: 'fab fa-mastodon',
      },
      {
        label: 'Maxcdn',
        value: 'fab fa-maxcdn',
      },
      {
        label: 'Mdb',
        value: 'fab fa-mdb',
      },
      {
        label: 'Medapps',
        value: 'fab fa-medapps',
      },
      {
        label: 'Medium',
        value: 'fab fa-medium',
      },
      {
        label: 'Medium M',
        value: 'fab fa-medium-m',
      },
      {
        label: 'Medrt',
        value: 'fab fa-medrt',
      },
      {
        label: 'Meetup',
        value: 'fab fa-meetup',
      },
      {
        label: 'Megaport',
        value: 'fab fa-megaport',
      },
      {
        label: 'Mendeley',
        value: 'fab fa-mendeley',
      },
      {
        label: 'Microblog',
        value: 'fab fa-microblog',
      },
      {
        label: 'Microsoft',
        value: 'fab fa-microsoft',
      },
      {
        label: 'Mix',
        value: 'fab fa-mix',
      },
      {
        label: 'Mixcloud',
        value: 'fab fa-mixcloud',
      },
      {
        label: 'Mixer',
        value: 'fab fa-mixer',
      },
      {
        label: 'Mizuni',
        value: 'fab fa-mizuni',
      },
      {
        label: 'Modx',
        value: 'fab fa-modx',
      },
      {
        label: 'Monero',
        value: 'fab fa-monero',
      },
      {
        label: 'Napster',
        value: 'fab fa-napster',
      },
      {
        label: 'Neos',
        value: 'fab fa-neos',
      },
      {
        label: 'Nimblr',
        value: 'fab fa-nimblr',
      },
      {
        label: 'Node',
        value: 'fab fa-node',
      },
      {
        label: 'Node Js',
        value: 'fab fa-node-js',
      },
      {
        label: 'Npm',
        value: 'fab fa-npm',
      },
      {
        label: 'Ns8',
        value: 'fab fa-ns8',
      },
      {
        label: 'Nutritionix',
        value: 'fab fa-nutritionix',
      },
      {
        label: 'Octopus Deploy',
        value: 'fab fa-octopus-deploy',
      },
      {
        label: 'Odnoklassniki',
        value: 'fab fa-odnoklassniki',
      },
      {
        label: 'Odnoklassniki Square',
        value: 'fab fa-odnoklassniki-square',
      },
      {
        label: 'Old Republic',
        value: 'fab fa-old-republic',
      },
      {
        label: 'Opencart',
        value: 'fab fa-opencart',
      },
      {
        label: 'Openid',
        value: 'fab fa-openid',
      },
      {
        label: 'Opera',
        value: 'fab fa-opera',
      },
      {
        label: 'Optin Monster',
        value: 'fab fa-optin-monster',
      },
      {
        label: 'Orcid',
        value: 'fab fa-orcid',
      },
      {
        label: 'Osi',
        value: 'fab fa-osi',
      },
      {
        label: 'Page4',
        value: 'fab fa-page4',
      },
      {
        label: 'Pagelines',
        value: 'fab fa-pagelines',
      },
      {
        label: 'Palfed',
        value: 'fab fa-palfed',
      },
      {
        label: 'Patreon',
        value: 'fab fa-patreon',
      },
      {
        label: 'Paypal',
        value: 'fab fa-paypal',
      },
      {
        label: 'Penny Arcade',
        value: 'fab fa-penny-arcade',
      },
      {
        label: 'Perbyte',
        value: 'fab fa-perbyte',
      },
      {
        label: 'Periscope',
        value: 'fab fa-periscope',
      },
      {
        label: 'Phabricator',
        value: 'fab fa-phabricator',
      },
      {
        label: 'Phoenix Framework',
        value: 'fab fa-phoenix-framework',
      },
      {
        label: 'Phoenix Squadron',
        value: 'fab fa-phoenix-squadron',
      },
      {
        label: 'Php',
        value: 'fab fa-php',
      },
      {
        label: 'Pied Piper',
        value: 'fab fa-pied-piper',
      },
      {
        label: 'Pied Piper Alt',
        value: 'fab fa-pied-piper-alt',
      },
      {
        label: 'Pied Piper Hat',
        value: 'fab fa-pied-piper-hat',
      },
      {
        label: 'Pied Piper Pp',
        value: 'fab fa-pied-piper-pp',
      },
      {
        label: 'Pied Piper Square',
        value: 'fab fa-pied-piper-square',
      },
      {
        label: 'Pinterest',
        value: 'fab fa-pinterest',
      },
      {
        label: 'Pinterest P',
        value: 'fab fa-pinterest-p',
      },
      {
        label: 'Pinterest Square',
        value: 'fab fa-pinterest-square',
      },
      {
        label: 'Playstation',
        value: 'fab fa-playstation',
      },
      {
        label: 'Product Hunt',
        value: 'fab fa-product-hunt',
      },
      {
        label: 'Pushed',
        value: 'fab fa-pushed',
      },
      {
        label: 'Python',
        value: 'fab fa-python',
      },
      {
        label: 'Qq',
        value: 'fab fa-qq',
      },
      {
        label: 'Quinscape',
        value: 'fab fa-quinscape',
      },
      {
        label: 'Quora',
        value: 'fab fa-quora',
      },
      {
        label: 'R Project',
        value: 'fab fa-r-project',
      },
      {
        label: 'Raspberry Pi',
        value: 'fab fa-raspberry-pi',
      },
      {
        label: 'Ravelry',
        value: 'fab fa-ravelry',
      },
      {
        label: 'React',
        value: 'fab fa-react',
      },
      {
        label: 'Reacteurope',
        value: 'fab fa-reacteurope',
      },
      {
        label: 'Readme',
        value: 'fab fa-readme',
      },
      {
        label: 'Rebel',
        value: 'fab fa-rebel',
      },
      {
        label: 'Red River',
        value: 'fab fa-red-river',
      },
      {
        label: 'Reddit',
        value: 'fab fa-reddit',
      },
      {
        label: 'Reddit Alien',
        value: 'fab fa-reddit-alien',
      },
      {
        label: 'Reddit Square',
        value: 'fab fa-reddit-square',
      },
      {
        label: 'Redhat',
        value: 'fab fa-redhat',
      },
      {
        label: 'Renren',
        value: 'fab fa-renren',
      },
      {
        label: 'Replyd',
        value: 'fab fa-replyd',
      },
      {
        label: 'Researchgate',
        value: 'fab fa-researchgate',
      },
      {
        label: 'Resolving',
        value: 'fab fa-resolving',
      },
      {
        label: 'Rev',
        value: 'fab fa-rev',
      },
      {
        label: 'Rocketchat',
        value: 'fab fa-rocketchat',
      },
      {
        label: 'Rockrms',
        value: 'fab fa-rockrms',
      },
      {
        label: 'Rust',
        value: 'fab fa-rust',
      },
      {
        label: 'Safari',
        value: 'fab fa-safari',
      },
      {
        label: 'Salesforce',
        value: 'fab fa-salesforce',
      },
      {
        label: 'Sass',
        value: 'fab fa-sass',
      },
      {
        label: 'Schlix',
        value: 'fab fa-schlix',
      },
      {
        label: 'Scribd',
        value: 'fab fa-scribd',
      },
      {
        label: 'Searchengin',
        value: 'fab fa-searchengin',
      },
      {
        label: 'Sellcast',
        value: 'fab fa-sellcast',
      },
      {
        label: 'Sellsy',
        value: 'fab fa-sellsy',
      },
      {
        label: 'Servicestack',
        value: 'fab fa-servicestack',
      },
      {
        label: 'Shirtsinbulk',
        value: 'fab fa-shirtsinbulk',
      },
      {
        label: 'Shopify',
        value: 'fab fa-shopify',
      },
      {
        label: 'Shopware',
        value: 'fab fa-shopware',
      },
      {
        label: 'Simplybuilt',
        value: 'fab fa-simplybuilt',
      },
      {
        label: 'Sistrix',
        value: 'fab fa-sistrix',
      },
      {
        label: 'Sith',
        value: 'fab fa-sith',
      },
      {
        label: 'Sketch',
        value: 'fab fa-sketch',
      },
      {
        label: 'Skyatlas',
        value: 'fab fa-skyatlas',
      },
      {
        label: 'Skype',
        value: 'fab fa-skype',
      },
      {
        label: 'Slack',
        value: 'fab fa-slack',
      },
      {
        label: 'Slack Hash',
        value: 'fab fa-slack-hash',
      },
      {
        label: 'Slideshare',
        value: 'fab fa-slideshare',
      },
      {
        label: 'Snapchat',
        value: 'fab fa-snapchat',
      },
      {
        label: 'Snapchat Ghost',
        value: 'fab fa-snapchat-ghost',
      },
      {
        label: 'Snapchat Square',
        value: 'fab fa-snapchat-square',
      },
      {
        label: 'Soundcloud',
        value: 'fab fa-soundcloud',
      },
      {
        label: 'Sourcetree',
        value: 'fab fa-sourcetree',
      },
      {
        label: 'Speakap',
        value: 'fab fa-speakap',
      },
      {
        label: 'Speaker Deck',
        value: 'fab fa-speaker-deck',
      },
      {
        label: 'Spotify',
        value: 'fab fa-spotify',
      },
      {
        label: 'Squarespace',
        value: 'fab fa-squarespace',
      },
      {
        label: 'Stack Exchange',
        value: 'fab fa-stack-exchange',
      },
      {
        label: 'Stack Overflow',
        value: 'fab fa-stack-overflow',
      },
      {
        label: 'Stackpath',
        value: 'fab fa-stackpath',
      },
      {
        label: 'Staylinked',
        value: 'fab fa-staylinked',
      },
      {
        label: 'Steam',
        value: 'fab fa-steam',
      },
      {
        label: 'Steam Square',
        value: 'fab fa-steam-square',
      },
      {
        label: 'Steam Symbol',
        value: 'fab fa-steam-symbol',
      },
      {
        label: 'Sticker Mule',
        value: 'fab fa-sticker-mule',
      },
      {
        label: 'Strava',
        value: 'fab fa-strava',
      },
      {
        label: 'Stripe',
        value: 'fab fa-stripe',
      },
      {
        label: 'Stripe S',
        value: 'fab fa-stripe-s',
      },
      {
        label: 'Studiovinari',
        value: 'fab fa-studiovinari',
      },
      {
        label: 'Stumbleupon',
        value: 'fab fa-stumbleupon',
      },
      {
        label: 'Stumbleupon Circle',
        value: 'fab fa-stumbleupon-circle',
      },
      {
        label: 'Superpowers',
        value: 'fab fa-superpowers',
      },
      {
        label: 'Supple',
        value: 'fab fa-supple',
      },
      {
        label: 'Suse',
        value: 'fab fa-suse',
      },
      {
        label: 'Swift',
        value: 'fab fa-swift',
      },
      {
        label: 'Symfony',
        value: 'fab fa-symfony',
      },
      {
        label: 'Teamspeak',
        value: 'fab fa-teamspeak',
      },
      {
        label: 'Telegram',
        value: 'fab fa-telegram',
      },
      {
        label: 'Telegram Plane',
        value: 'fab fa-telegram-plane',
      },
      {
        label: 'Tencent Weibo',
        value: 'fab fa-tencent-weibo',
      },
      {
        label: 'The Red Yeti',
        value: 'fab fa-the-red-yeti',
      },
      {
        label: 'Themeco',
        value: 'fab fa-themeco',
      },
      {
        label: 'Themeisle',
        value: 'fab fa-themeisle',
      },
      {
        label: 'Think Peaks',
        value: 'fab fa-think-peaks',
      },
      {
        label: 'Tiktok',
        value: 'fab fa-tiktok',
      },
      {
        label: 'Trade Federation',
        value: 'fab fa-trade-federation',
      },
      {
        label: 'Trello',
        value: 'fab fa-trello',
      },
      {
        label: 'Tumblr',
        value: 'fab fa-tumblr',
      },
      {
        label: 'Tumblr Square',
        value: 'fab fa-tumblr-square',
      },
      {
        label: 'Twitch',
        value: 'fab fa-twitch',
      },
      {
        label: 'Twitter',
        value: 'fab fa-twitter',
      },
      {
        label: 'Twitter Square',
        value: 'fab fa-twitter-square',
      },
      {
        label: 'Typo3',
        value: 'fab fa-typo3',
      },
      {
        label: 'Uber',
        value: 'fab fa-uber',
      },
      {
        label: 'Ubuntu',
        value: 'fab fa-ubuntu',
      },
      {
        label: 'Uikit',
        value: 'fab fa-uikit',
      },
      {
        label: 'Umbraco',
        value: 'fab fa-umbraco',
      },
      {
        label: 'Uncharted',
        value: 'fab fa-uncharted',
      },
      {
        label: 'Uniregistry',
        value: 'fab fa-uniregistry',
      },
      {
        label: 'Unity',
        value: 'fab fa-unity',
      },
      {
        label: 'Unsplash',
        value: 'fab fa-unsplash',
      },
      {
        label: 'Untappd',
        value: 'fab fa-untappd',
      },
      {
        label: 'Ups',
        value: 'fab fa-ups',
      },
      {
        label: 'Usb',
        value: 'fab fa-usb',
      },
      {
        label: 'Usps',
        value: 'fab fa-usps',
      },
      {
        label: 'Ussunnah',
        value: 'fab fa-ussunnah',
      },
      {
        label: 'Vaadin',
        value: 'fab fa-vaadin',
      },
      {
        label: 'Viacoin',
        value: 'fab fa-viacoin',
      },
      {
        label: 'Viadeo',
        value: 'fab fa-viadeo',
      },
      {
        label: 'Viadeo Square',
        value: 'fab fa-viadeo-square',
      },
      {
        label: 'Viber',
        value: 'fab fa-viber',
      },
      {
        label: 'Vimeo',
        value: 'fab fa-vimeo',
      },
      {
        label: 'Vimeo Square',
        value: 'fab fa-vimeo-square',
      },
      {
        label: 'Vimeo V',
        value: 'fab fa-vimeo-v',
      },
      {
        label: 'Vine',
        value: 'fab fa-vine',
      },
      {
        label: 'Vk',
        value: 'fab fa-vk',
      },
      {
        label: 'Vnv',
        value: 'fab fa-vnv',
      },
      {
        label: 'Vuejs',
        value: 'fab fa-vuejs',
      },
      {
        label: 'Watchman Monitoring',
        value: 'fab fa-watchman-monitoring',
      },
      {
        label: 'Waze',
        value: 'fab fa-waze',
      },
      {
        label: 'Weebly',
        value: 'fab fa-weebly',
      },
      {
        label: 'Weibo',
        value: 'fab fa-weibo',
      },
      {
        label: 'Weixin',
        value: 'fab fa-weixin',
      },
      {
        label: 'Whatsapp',
        value: 'fab fa-whatsapp',
      },
      {
        label: 'Whatsapp Square',
        value: 'fab fa-whatsapp-square',
      },
      {
        label: 'Whmcs',
        value: 'fab fa-whmcs',
      },
      {
        label: 'Wikipedia W',
        value: 'fab fa-wikipedia-w',
      },
      {
        label: 'Windows',
        value: 'fab fa-windows',
      },
      {
        label: 'Wix',
        value: 'fab fa-wix',
      },
      {
        label: 'Wizards Of The Coast',
        value: 'fab fa-wizards-of-the-coast',
      },
      {
        label: 'Wodu',
        value: 'fab fa-wodu',
      },
      {
        label: 'Wolf Pack Battalion',
        value: 'fab fa-wolf-pack-battalion',
      },
      {
        label: 'Wordpress',
        value: 'fab fa-wordpress',
      },
      {
        label: 'Wordpress Simple',
        value: 'fab fa-wordpress-simple',
      },
      {
        label: 'Wpbeginner',
        value: 'fab fa-wpbeginner',
      },
      {
        label: 'Wpexplorer',
        value: 'fab fa-wpexplorer',
      },
      {
        label: 'Wpforms',
        value: 'fab fa-wpforms',
      },
      {
        label: 'Wpressr',
        value: 'fab fa-wpressr',
      },
      {
        label: 'Xbox',
        value: 'fab fa-xbox',
      },
      {
        label: 'Xing',
        value: 'fab fa-xing',
      },
      {
        label: 'Xing Square',
        value: 'fab fa-xing-square',
      },
      {
        label: 'Y Combinator',
        value: 'fab fa-y-combinator',
      },
      {
        label: 'Yahoo',
        value: 'fab fa-yahoo',
      },
      {
        label: 'Yammer',
        value: 'fab fa-yammer',
      },
      {
        label: 'Yandex',
        value: 'fab fa-yandex',
      },
      {
        label: 'Yandex International',
        value: 'fab fa-yandex-international',
      },
      {
        label: 'Yarn',
        value: 'fab fa-yarn',
      },
      {
        label: 'Yelp',
        value: 'fab fa-yelp',
      },
      {
        label: 'Yoast',
        value: 'fab fa-yoast',
      },
      {
        label: 'Youtube',
        value: 'fab fa-youtube',
      },
      {
        label: 'Youtube Square',
        value: 'fab fa-youtube-square',
      },
      {
        label: 'Zhihu',
        value: 'fab fa-zhihu',
      },
    ],
  },
]
