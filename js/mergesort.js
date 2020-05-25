let array = new Array(bars_amount);
function mergesort_helper(){
    if(!finished_sorting){
        disable_buttons();
        heights = [];
        dispatcher = [];
        for(let i = 0; i < bars_amount; i++){
            heights.push(bars[i].offsetHeight);
        }
        mergesort(0, bars_amount-1);
        animate(1);
    }
}

function mergesort(left, right){
    if(true){
        if(left < right) {
            let mid = Math.floor((left + right)/2);
            mergesort(left, mid);
            mergesort(mid+1, right);
            merge(left, mid, right);
		}
    }   
}

function merge(left, mid, right){
    let i = left;
    let j = mid+1;
    let k = 0;
    let array = new Array(right-left+1);
    let local_dispatcher = [];
    while(i <= mid && j <= right){
        local_dispatcher.push({left: i, right: j});
        if(heights[i] < heights[j]){
            array[k] = heights[i];
            k++;
            i++;
        }
        else{
            array[k] = heights[j];
            k++;
            j++;
        }
    }

    while(i <= mid){
        local_dispatcher.push({right: j-1});
        array[k] = heights[i];
        k++;
        i++;
    }

    while(j <= right){
        local_dispatcher.push({right: j});
        array[k] = heights[j];
        k++;
        j++;
    }

    for(let h = 0; h < array.length; h++){
        dispatcher.push({left:left+h, right: local_dispatcher[h].right, height:array[h]})
        heights[left+h] = array[h];
    }
}