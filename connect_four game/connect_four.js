//var x = $('h1');
//x.css('color','blue');
//
//$('h3').on('click',function(){
//    $(this).toggleClass('jumbotron');
//})

var x=$('.tb');
$('.tb').append(insert);

function insert(){
    var tab ="<table align='center'>";
    for(var i=0;i<6;i++)
    {
        tab+='<tr>';
        for(var j=0;j<6;j++)
            {
                tab+='<td><button class="but"  style="background-color:rgb(110, 107, 108);height:70px;width:70px;border-radius:50%;"></button></td>';
            }
        tab+='</tr>';
    }
    return tab; 
}



var boxes = $('.but');

var grey ='rgb(110, 107, 108)';
var blue = 'rgb(5, 9, 245)';
var red ='rgb(242, 0, 28)';

for(var i=0;i<boxes.length;i++)
    {
        $(boxes[i]).click(function(){
            
            var row_num = Math.floor($(boxes).index(this))+1;
            
            var column_num = parseInt($(this).parent().index() )+1; 
            
//            console.log(String(row_num) +" "+ String(column_num));  
            
            if($(this).css('background-color')==grey){
            $(this).css('background-color',blue);  
                winner(row_num,blue);
            }
            
            else if($(this).css('background-color')==blue){
            $(this).css('background-color',red);
                winner(row_num,red);
            }
            
            else{
                 $(this).css('background-color',grey)
            }  
            
        })
    }

function winner(row_num,color){
    var count=0;
    console.log(row_num);
    if(row_num%6<=3 && row_num%6!=0 ){
        console.log("inside if");
                for(var i=0;i<3;i++)
                {
            if($('.but').eq(row_num+i).css('background-color')==color){
                count++;
                 console.log("one");
                    }
                    else{ break;}
                }
                if(count===3){
                    console.log("winner");
                }
    }
    
    else if(row_num%6>=3 || row_num%6==0){
        console.log("inside else if");
                for(var i=4;i>=2;i--)
                {
            if($('.but').eq(row_num-i).css('background-color')==color){
                count++;
                 console.log("one");
                    }
                    else{break;}
                }
                if(count===3){
                    console.log("winner");
                }
    }
} 
                    
