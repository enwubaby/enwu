<script>
    var text="";
    var text2="";
    var text3="";
        function p() 
	    {
            
            for(let i = 1; i <= 825; i++) {
            setTimeout(function() {
                text="";
                document.getElementById("demo").innerHTML = text;
                text += "確診人數" + i +" ";
                document.getElementById("demo").innerHTML = text;
                var x = document.getElementById("num");
                x.style.width=(i+100 )/2+"px";}, 3 * i)}

                for(let i = 1; i <= 714; i++) {
                setTimeout(function() {
                text2="";
                document.getElementById("demo2").innerHTML = text2;
                text2 += "康復人數" + i +" ";
                document.getElementById("demo2").innerHTML = text2;
                var x = document.getElementById("num2");
                x.style.width=(i+100 )/2+"px";}, 3 * i)}

                for(let i = 1; i <= 7; i++) {
                setTimeout(function() {
                text3="";
                document.getElementById("demo3").innerHTML = text3;
                text3 += "死亡人數" + i +" ";
                document.getElementById("demo3").innerHTML = text3;
                var x = document.getElementById("num3");
                x.style.width=(i+100)/2+"px";}, 3 * i)}

            /* }  if (n==714){
            for(let i = 1; i <= 714; i++) {
            setTimeout(function() {
                text2="";
                document.getElementById("demo2").innerHTML = text2;
                text2 += "康復人數" + i +" ";
                document.getElementById("demo2").innerHTML = text2;
                var x = document.getElementById("num2");
                x.style.width=(i+100)/2+"px";}, 3 * i)}
        } */
            /* for(let i = 1; i <= 800; i++) {
                text="";
                document.getElementById("demo").innerHTML = text;
                text += "確診人數" + i +" ";
                setTimeout(console.log(i), 1000 * i)
                document.getElementById("demo").innerHTML = text
                } */
			/* for (let i = 0; i < 800; i++)
			{
				text="";
                document.getElementById("demo").innerHTML = text;
                
				text += "確診人數" + i +" ";
                setTimeout(document.getElementById("demo").innerHTML = text,1000*i)
                document.getElementById("demo").innerHTML = text; 
			} */
            
		
	    }

          function on(n)
          {
              if (n==1)
              {
                  var x = document.getElementById("btn1");
                  x.style.color="#ecec88";
                  x.style.height="40px";
              }
              if (n==2)
              {
                  var x2 = document.getElementById("btn2");
                  x2.style.color="#ecec88";
                  x2.style.height="40px";
              }
              if (n==3)
              {
                  var x3 = document.getElementById("btn3");
                  x3.style.color="#ecec88";
                  x3.style.height="40px";
              }
              if (n==4)
              {
                  var x4 = document.getElementById("btn4");
                  x4.style.color="#ecec88";
                  x4.style.height="40px"
              }
              if (n==5)
              {
                  var x4 = document.getElementById("btn5");
                  x4.style.color="#ecec88";
                  x4.style.height="40px"
              }
            
            
          }
          function leave(k)
          {
              
            if (k==1)
              {
                  var x1 = document.getElementById("btn1");
                  x1.style.color="#fff";
                  x1.style.height="30px"
              }
              if (k==2)
              {
                  var x2 = document.getElementById("btn2");
                  x2.style.color="#fff";
                  x2.style.height="30px"
              }
              if (k==3)
              {
                  var x3 = document.getElementById("btn3");
                  x3.style.color="#fff";
                  x3.style.height="30px"
              }
              if (k==4)
              {
                  var x4 = document.getElementById("btn4");
                  x4.style.color="#fff";
                  x4.style.height="30px"
              }
              if (k==5)
              {
                  var x4 = document.getElementById("btn5");
                  x4.style.color="#fff";
                  x4.style.height="30px"
              }
          }
    </script>