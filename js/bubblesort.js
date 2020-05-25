function bubblesort_helper(){
    if(!finished_sorting){
        disable_buttons();
        heights = [];
        dispatcher = [];
        for(let i = 0; i < bars_amount; i++){
            heights.push(bars[i].offsetHeight);
        }
        bubblesort();
        animate(2);
    }
    
}

function bubblesort(){
    let len = bars_amount;
    for(let i = 0; i < len; i++){
        for(let j = 1; j < len-i; j++){
            if(heights[j] < heights[j-1]){
                swap_heights(j-1, j);
                dispatcher.push({left: j-1, right: j, height: 1});
            }
            else
                dispatcher.push({left: j-1, right: j, height: 0});
        }
    }
}
