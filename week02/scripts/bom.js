const list = document.querySelector('ul');  // you need to fill in the blank to reference the HTML element that is a unordered list element.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    // if (input.value.trim() !== '') { return input.focus() }
        const myChap = input.value;
        input.value = '';
        // Code to execute when the button is clicked

        const listChap = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listChap.appendChild(listText);
        listText.textContent = myChap;
        listChap.appendChild(listBtn);
        listBtn.textContent = '❌';

        list.appendChild(listChap);


        listBtn.addEventListener('click', function () {
            list.removeChild(listChap);
            input.focus();

        });

        input.focus();

        });