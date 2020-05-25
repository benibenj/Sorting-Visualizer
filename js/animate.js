function animate(type){ // 1: mergesort, 2: quicksort
    let i = 0;
    let interval = setInterval(function(){
        if(type === 1)
            animate_overrride_bars(dispatcher[i].left, dispatcher[i].right, dispatcher[i].height);
        else
            animate_swap(dispatcher[i].left, dispatcher[i].right, dispatcher[i].height);
        i++;
        if(i >= dispatcher.length){
            clearInterval(interval);
            setTimeout(function(){
                for(let k = 0; k < bars_amount; k++){
                    bars[k].style.backgroundColor = "purple";
                }
                finished_sorting = true;
                enable_buttons();
            }, timeout_time);
        }
    }, timeout_time);
}

function animate_swap(a, b, swap){
    bars[a].style.backgroundColor = "purple";
    bars[b].style.backgroundColor = "purple";
    setTimeout(function(){
        bars[a].style.backgroundColor = "turquoise";
        bars[b].style.backgroundColor = "turquoise";
    }, timeout_time);
    setTimeout(function(){
        if(swap === 1){
            let tmp = bars[a].style.height;
            bars[a].style.height = bars[b].style.height;
            bars[b].style.height = tmp;
        }
    }, timeout_time/2);   
}

function animate_overrride_bars(a, b, height){
    bars[a].style.backgroundColor = "purple";
    bars[b].style.backgroundColor = "purple";
    setTimeout(function(){
        bars[a].style.backgroundColor = "turquoise";
        bars[b].style.backgroundColor = "turquoise";
    }, timeout_time);
    bars[a].style.height = `${height}px`;
}