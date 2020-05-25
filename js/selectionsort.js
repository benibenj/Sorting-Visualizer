function selectionsort_helper(){
    if(!finished_sorting){
        disable_buttons();
        heights = [];
        dispatcher = [];
        for(let i = 0; i < bars_amount; i++){
            heights.push(bars[i].offsetHeight);
        }
        selectionsort();
        animate(2);
    }
}

function selectionsort(){
    let len = bars_amount;
    for(let i = 0; i < len; i++){
        let min_val = Number.MAX_SAFE_INTEGER;
        let min_indx = 0;
        for(let j = i; j < len; j++){
            dispatcher.push({left: j, right: j, height: 0});
            if(min_val > heights[j]){
                min_val = heights[j];
                min_indx = j;
            }
        }
        swap_heights(i, min_indx);
        dispatcher.push({left: i, right: min_indx, height: 1});
    }
}