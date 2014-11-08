function toggleBox(id){
				var f = document.querySelector('#' + id + 'f');
				var b = document.querySelector('#' + id + 'b');
			
				if(b.classList.contains('box-back')){
					f.classList.toggle('box-front-toggle');
					b.classList.toggle('box-back-toggle');
				} else if(b.classList.contains('box-back-inv')){
					f.classList.toggle('box-front-inv-toggle');
					b.classList.toggle('box-back-inv-toggle');
				} else if(b.classList.contains('box-back-top')){
					f.classList.toggle('box-front-top-toggle');
					b.classList.toggle('box-back-top-toggle');
				} else if(b.classList.contains('box-back-top-inv')){
					f.classList.toggle('box-front-top-inv-toggle');
					b.classList.toggle('box-back-top-inv-toggle');
				} 
			}