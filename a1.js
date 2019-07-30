$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b47872b378544aa1bbe8128555a7a542",
        success:function(data){
            
            var out=data.articles;
           
var output="<table class='table'><thead><tr><th>title</th><th>description</th><th>read more</th><th>image</th></tr></thead>"
            for(var j in out){
output +="<tr><td>" +f[j].title+"</td>"
output +="<td>" +f[j].description+"</td>"
output +="<td><A Href=" +f[j].url+">readmore</A></td>"
output +="<td><img src="+f[j].urlToImage+" style=width:100px;height:50px></td></tr>"
            }


            

            output +="</table>"   ;                         
            $(".result").html(output);








            
        }
    })
})