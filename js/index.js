let main;
let bars;
let bars_amount = 50;
var timeout_time = 2;
var finished_sorting;
let dispatcher = [];
let heights = [];
let buttons_disabled = false;

window.onload = function() {
    create_bars(bars_amount);
};

window.onresize = function(){
    if(!buttons_disabled){
        create_bars(bars_amount);
    }
};

function create_bars(size){
    finished_sorting = false
    bars_amount = (size === -1) ? bars_amount:size;
    main = document.getElementById('bars-container');
    main.innerHTML = '';
    bars = new Array(bars_amount);

    let bar_width = Math.ceil(window.innerWidth * 0.8 *0.9/ bars_amount);
    let margin_left = Math.ceil(window.innerWidth * 0.8 *0.1/ bars_amount);

    let heights_list = [];
    for(let i = 5; i <= 500; i++)
        heights_list.push(i);

    shuffleArray(heights_list);

    for(let i = 0; i < bars_amount; i++){
        let bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${heights_list.pop()}px`;
        bar.style.width = `${bar_width}`;
        bar.style.marginLeft = `${margin_left}`;
        bars[i] = bar;
        main.appendChild(bar);
    }
}

function change_speed(level){
    switch(level){
        case "0": timeout_time = 500;
            break;
        case "1": timeout_time = 20;
            break;
        case "2": timeout_time = 7;
            break;
        case "3": timeout_time = 3;
            break;
        default: timeout_time = 0;
    }
}

function random_height(lowerbound, upperbound){
    return Math.floor(Math.random() * (upperbound-lowerbound + 1) + lowerbound);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function disable_buttons(){
    buttons_disabled = true;
    document.querySelectorAll("button").forEach(b => b.disabled = true);
    document.getElementById('new_array').style.display = "none";
    document.getElementById('stop').style.display = "block";
    document.getElementById('stop').disabled = false;
}

function enable_buttons(){
    buttons_disabled = false;
    document.querySelectorAll("button").forEach(b => b.disabled = false);
    document.getElementById('stop').style.display = "none";
    document.getElementById('new_array').style.display = "block";
}

function swap_heights(i, j){
    let tmp = heights[i];
    heights[i] = heights[j];
    heights[j] = tmp;
}