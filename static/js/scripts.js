window.onload=function(){
    
    
}

let deckA;

//起手抽牌 ->
function draw(){
    let deck=new Set();
    while(deck.size<5){
        deck.add(Math.floor(Math.random()*54)+1)
    }
    deckA=Array.from(deck);
    settext();
}

//設定手牌至div
function settext(){
    $("#showcard1").text(colortext(deckA[0]));
    $("#showcard2").text(colortext(deckA[1]));
    $("#showcard3").text(colortext(deckA[2]));
    $("#showcard4").text(colortext(deckA[3]));
    $("#showcard5").text(colortext(deckA[4]));
}

//input牌號,return牌名
function colortext(a){
    let pre;
    a-=1
    switch(Math.floor(a/13)){
        case 0:
            pre="黑桃";
            break;
        case 1:
            pre="紅心";
            break;
        case 2:
            pre="方塊";
            break;
        case 3:
            pre="梅花";
            break;
        case 4:
            pre="鬼牌";
            break;         
    }
    switch(a%13+1){
        case 1:
            return pre+"A";
        case 11:
            return pre+"J";
        case 12:
            return pre+"Q";
        case 13:
            return pre+"K";
        default:
            return pre+(a%13+1);

    }
}


function sendresult(){
    console.log(nowdata);
    $.ajax({
        type:"POST",
        url:"php/saverecord.php",
        data:{
            "nowdata":nowdata,
        },
        success:function(data){
            
        },
        error:function(){
            alert("發生錯誤 狀態:"+jqXHR.readyState+"   "+jqXHR.status);
        },
    })
}

