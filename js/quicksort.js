function quicksort_helper(){
    if(!finished_sorting){
        disable_buttons();
        heights = [];
        dispatcher = [];
        for(let i = 0; i < bars_amount; i++){
            heights.push(bars[i].offsetHeight);
        }
        quicksort(0, bars_amount-1);
        animate(2);
    }
}

function quicksort(left, right){
    if(left < right){
        let pivot_indx = partition(left, right);
        quicksort(left, pivot_indx-1);
        quicksort(pivot_indx+1, right);
    }
}

function partition(left, right){
    let i = left;
    let j = right-1;
    let p = heights[right]
    while(i < j){
        while(i < right && heights[i] <= p){
            dispatcher.push({left: i, right: right, height:0});
            i++;
        }
        while(j > left && heights[j] > p){
            dispatcher.push({left: j, right: right, height:0});
            j--;
        }
        if(i < j){
            swap_heights(i, j);
            dispatcher.push({left: i, right: j, height:1});
        }
    }
    if(heights[i] > p) {
        swap_heights(i, right);
        dispatcher.push({left: i, right: right, height:1});
    }
    return i;
}