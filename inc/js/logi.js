/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    loadTemplates();
});

//GLoabls
var article = '';

function loadTemplates()
{
    tmp_article();
    
    
    var tmp_info = new Array();
    var index = 0;
    
    //item 1
    tmp_info[index] = new Object();
    tmp_info[index].t1 = 'ART work';
    tmp_info[index].t2 = 'tmplate 2';
    tmp_info[index].t3 = 'tmplate 3';
    tmp_info[index].img = 'img/IMG_8183.JPG';
    tmp_info[index].p = '326 Fern St.<br/>West Palm Beach, FL 33401';
    tmp_info[index].url = 'detail.html';
    index++;
    
    //item 2
    tmp_info[index] = new Object();
    tmp_info[index].t1 = 'tmplate 1';
    tmp_info[index].t2 = 'tmplate 2';
    tmp_info[index].t3 = 'tmplate 3';
    tmp_info[index].img = 'img/IMG_8182.JPG';
    tmp_info[index].p = '326 Fern St.<br/>West Palm Beach, FL 33401';
    tmp_info[index].url = 'detail.html';
    index++;
    
    //item 3
    tmp_info[index] = new Object();
    tmp_info[index].t1 = 'tmplate 1';
    tmp_info[index].t2 = 'tmplate 2';
    tmp_info[index].t3 = 'tmplate 3';
    tmp_info[index].img = 'img/IMG_8181.JPG';
    tmp_info[index].p = '326 Fern St.<br/>West Palm Beach, FL 33401';
    tmp_info[index].url = 'detail.html';
    index++;
    
  for(var i =0; i  < tmp_info.length; i++)
  {
    var str = article; 
    console.log(str);
    str  = str.replace(':t1:',tmp_info[i].t1);
    str  = str.replace(':t2:',tmp_info[i].t2);
    str  = str.replace(':t3:',tmp_info[i].t3);
    str  = str.replace(':p:',tmp_info[i].p);
    str  = str.replace(':img:',tmp_info[i].img);

    str  = str.replace(':url:',tmp_info[i].url);
    str  = str.replace(':url:',tmp_info[i].url);
    str  = str.replace(':url:',tmp_info[i].url);
    //console.log(str);
    $('#content').append(str);
  }
}
function tmp_article()
{
    article = $('#content').html();
    $('#content').html('');
}
