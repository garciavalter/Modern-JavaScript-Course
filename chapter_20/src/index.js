import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';

// create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns

const dropdowns = document.querySelectorAll('.dropdown');
console.log(dropdowns);

dropdowns.forEach( dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
    console.log('instance initialized');
});
