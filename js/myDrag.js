(function(w){
	w.$={};
	w.$.drag=function(testNode,callBack){
		testNode.onmousedown=function(ev){
			ev = ev||event;
			//抽象元素一开始的位置
			var startPoint = {x:0,y:0}
			//抽象鼠标一开始的位置
			var elemenPoint = {x:0,y:0}
			
			if(testNode.setCapture){
				testNode.setCapture();
			}
			
			
			startPoint.x = testNode.offsetLeft
			startPoint.y = testNode.offsetTop	
			
			elemenPoint.x = ev.clientX
			elemenPoint.t = ev.clientY
			
			document.onmousemove=function(ev){
				ev = ev||event;
				var nowPoint = {x:0,y:0}
				nowPoint.x = ev.clientX
				nowPoint.y = ev.clientY
				
				
				var L = startPoint.x+nowPoint.x-elemenPoint.x
				if(L<0){
					L = 0
				}else(L>testNode.parentNode.clientWidth-testNode.offsetWidth){
					L = testNode.parentNode.clientWidth-testNode.offsetWidth
				}
				testNode.style.left = L + "px"
			}
			
			document.onmouseup=function(){
				document.onmousemove = document.onmouseup =null;
				if(document.releaseCapture){
					document.releaseCapture();
				}
			}
			
			return false;
		}
	}
})(window)
