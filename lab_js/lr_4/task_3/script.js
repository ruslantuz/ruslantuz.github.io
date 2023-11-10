var tab;
var tabContent;

window.onload=function(){
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
    generate();
    generateVa();
    generateVis();
}

function hideTabsContent(a){
    for(var i = a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick= function(event){
    var target = event.target;
    if (target.className == 'tab'){
        for(var i = 0; i< tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b){
    if(tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

function generate(){
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbr = document.getElementById('rbr').value;
    var rbl = document.getElementById('rbl').value;

    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');

    var codeText = document.getElementById('codeText');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    

    cssCode = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";

    codeText.textContent = "border-radius: "+  cssCode + ";";
    block.style.borderRadius = cssCode;
    
}

function generateVa(){
    var rVa = document.getElementById('rVa').value;

    var tVa = document.getElementById('tVa');

    var alignedPic = document.getElementById('alignedPic');

    var codeTextVa = document.getElementById('codeTextVa');

    tVa.value = rVa;

    cssCode = rVa + "px";

    codeTextVa.textContent = "vertical-align: "+  cssCode + ";";
    alignedPic.style.verticalAlign = cssCode;   
}

function generateVis(){
    var rVis = document.getElementById('rVis');

    var tVis = document.getElementById('tVis');

    var blockVis = document.getElementById('blockVis');

    var codeTextVis = document.getElementById('codeTextVis');

    tVis.value = rVis.checked;

    console.log(rVis)
    cssCode = rVis.checked ? "visible" : "hidden";

    codeTextVis.textContent = "visibility: "+  cssCode + ";";
    blockVis.style.visibility = cssCode;   
}