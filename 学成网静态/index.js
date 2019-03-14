

var data = [
  {"key":"前端开发","qre":6544},
  
  {"key":"后端开发","qre":712319},
  
  {"key":"移动开发","qre":45073},
  
  {"key":"人工智能","qre":154098},
  
  {"key":"商业预测","qre":31726},
  
  {"key":"电云计算&大数据","qre":7497},
  
  {"key":"运维&从测试","qre":7491},
  
  {"key":"UI设计","qre":32393},
  
  {"key":"电产品","qre":144712},
];
var sousuo = document.getElementById('sousuo');

var ul = document.createElement('ul');

sousuo.appendChild(ul)  

var i = 0; len = data.length;

var input = document.getElementById('search');

input.onfocus = function () {
  
  var i = 0; len = data.length;
  
  // sousuo.style.border = '1px solid lightgray';
  
  sousuo.className = 'sousuo';
  
  for (; i < len; i++) {
    
    var li = document.createElement('li');
    
    ul.appendChild(li);
    
    li.innerText = data[i].key;
    
    li.style.color = '#666';
    
    li.style.borderBottom = '1px solid lightgray' 
    
    li.onmouseover = function () {
      
      this.style.backgroundColor = 'lightgray';
      
      this.style.cursor = 'pointer';

    }
    li.onmouseout = function () {
      
      this.style.backgroundColor = '';
      
      this.style.cursor = '';

    }
  }
  
  var lis = document.querySelectorAll('#sousuo ul li');
  
  input.onblur = function () {
    
    var i = 0; len = lis.length;
   
    for (; i < len; i++) {
      
      var li = lis[i];
      
      li.innerText = '';
      
      li.style.borderBottom = '';
      
      sousuo.style.border = '';

    }
  }
}