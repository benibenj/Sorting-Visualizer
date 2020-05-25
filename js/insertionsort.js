function insertionsort_helper(){
    if(!finished_sorting){
        disable_buttons();
        heights = [];
        dispatcher = [];
        for(let i = 0; i < bars_amount; i++){
            heights.push(bars[i].offsetHeight);
        }
        insertionsort();
        animate(2);
    }
}

function insertionsort(){
    let len = bars_amount;
    for(let i = 1; i < len; i++){
        for(let j = i; j > 0; j--){
            if(heights[j] < heights[j-1]){
                swap_heights(j-1, j);
                dispatcher.push({left: j-1, right: j, height: 1});
            }
            else{
                break;
            }
        }
    }
}