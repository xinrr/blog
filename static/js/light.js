var arr=["#39c5bb","#f14747","#f1a247","#f1ee47","#b347f1","#1edbff","#ed709b","#5636ed"],idx=0;function changeLightColor(){if("dark"==document.getElementsByTagName("html")[0].getAttribute("data-theme")){document.getElementById("site-name")&&(document.getElementById("site-name").style.textShadow=arr[idx]+" 0 0 15px"),document.getElementById("site-title")&&(document.getElementById("site-title").style.textShadow=arr[idx]+" 0 0 15px"),document.getElementById("site-subtitle")&&(document.getElementById("site-subtitle").style.textShadow=arr[idx]+" 0 0 10px"),document.getElementById("post-info")&&(document.getElementById("post-info").style.textShadow=arr[idx]+" 0 0 5px");try{document.getElementsByClassName("author-info__name")[0].style.textShadow=arr[idx]+" 0 0 12px",document.getElementsByClassName("author-info__description")[0].style.textShadow=arr[idx]+" 0 0 12px"}catch{}8==++idx&&(idx=0)}else{document.getElementById("site-name")&&(document.getElementById("site-name").style.textShadow="#1e1e1ee0 1px 1px 1px"),document.getElementById("site-title")&&(document.getElementById("site-title").style.textShadow="#1e1e1ee0 1px 1px 1px"),document.getElementById("site-subtitle")&&(document.getElementById("site-subtitle").style.textShadow="#1e1e1ee0 1px 1px 1px"),document.getElementById("post-info")&&(document.getElementById("post-info").style.textShadow="#1e1e1ee0 1px 1px 1px");try{document.getElementsByClassName("author-info__name")[0].style.textShadow="",document.getElementsByClassName("author-info__description")[0].style.textShadow=""}catch{}}}