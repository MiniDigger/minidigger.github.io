function gen(numCatRow){
        var numContentRow = Math.round(numCatRow/2);
        if(numContentRow == 0){
          numContentRow = 1;
        }
        log(numCatRow+" : "+numContentRow);
        
      
        var id = 14;
        var front = document.querySelector('#content');
        
        var catCardBegin = id;
        var catContent = "";
        var b = 1;
        for(var i = 0;i<numCatRow;i++){
          catContent+=createRow(10,createBox('card-' +id,'background-color:pink','background-color:purple',"-top"),b);
          if(b==1){
            b=2;
          }else{
            b=1;
          }
          id++;
        }
        
        var contentCardBegin = id;
        var contentContent = createBlock(2,catContent,true) + "";
        var type = 0;
        
        for(var i = 0;i<numContentRow;i++){
          var one = createBox('card-' + id,'background-color:pink','background-color:purple',"");
          id++;
          var two = createBox('card-' + id,'background-color:pink','background-color:purple',"-inv");
          id++;
        
          var size1 = 0;
          var size2 = 0;
          switch(type){
            case 0:
              size1 = 4;
              size2 = 6;
              break;
            case 1:
              size1 = 7;
              size2 = 3;
              break;
            case 2:
              size1 = 6;
              size2 = 4;
              break;
            case 3:
              size1 = 3;
              size2 = 7;
              type = 0;
              break;
            default:
              type = 0;
              size1 = 6;
              size2 = 4;
              break;
          }
          type++;
        
          contentContent+=createRow(20,createBlock(size1,one,false) + createBlock(size2,two,false),0);
        }
        
        front.innerHTML = contentContent;
        
        for(var i = 0;i<numCatRow;i++){
          var card = document.querySelector("#card-"+(catCardBegin+i)+"f");
          card.innerHTML = "<h3>"+(catCardBegin+i)+"f</h3>";
          
          card = document.querySelector("#card-"+(catCardBegin+i)+"b");
          card.innerHTML = "<h3>"+(catCardBegin+i)+"b</h3>";
        }
        
        for(var i = 0;i<(numContentRow*2);i++){
          var card = document.querySelector("#card-"+(contentCardBegin+i)+"f");
          card.innerHTML = "<h3>"+(contentCardBegin+i)+"f</h3>";
          
          card = document.querySelector("#card-"+(contentCardBegin+i)+"b");
          card.innerHTML = "<h3>"+(contentCardBegin+i)+"b</h3>";
        }
			}
			function createBox(id,frontStyle,backStyle,boxStyle){
				return "<div class='box' id='"+id+"' onclick=toggleBox('"+id+"') style='visibility: visible'>" + 
									"<div class='box-front' id='"+id+"f' style='"+frontStyle+"'>" +
									"</div>" +
									"<div class='box-back"+boxStyle+"' id='"+id+"b' style='"+backStyle+"'>" + 		
									"</div>"+   
								"</div>";
			}
			
			function createRow(height,content,cat){
				if(cat == 1){
					return "<div class='row' style='height:"+height+"%; padding:5px; margin:0px; padding-bottom:0px'>"+content+"</div>";
				}else if(cat == 2){
					return "<div class='row' style='height:"+height+"%; padding:5px; margin:0px; margin-bottom:5px;margin-top:5px; padding-bottom:0px'>"+content+"</div>";
				}else{
					return "<div class='row' style='height:"+height+"%; margin:0px'>"+content+"</div>";
				}
			}
			
			function createBlock(size,content,cat){
				if(cat){
					return "<div class='large-"+size+" columns' style='padding:0px; visibility:visible'>"+content+"</div>";
				}else{
					return "<div class='large-"+size+" columns' style='padding:5px; visibility:visible'>"+content+"</div>";
				}
			}
      
      function log(msg) {
      setTimeout(function() {
        throw new Error(msg);
      }, 0);
      }