﻿$(document).ready(function(){
      $("h1,h2,h3,h4,h5,h6").each(function(i,item){
        var tag = $(item).get(0).localName;
        $(item).attr("id","wow"+i);
        $("#category").append('<a class="new'+tag+'" href="#wow'+i+'">'+$(this).text()+'</a></br>');
        $(".newh2").css("margin-left",0);
		$(".newh2").css("margin-left",20);
        $(".newh3").css("margin-left",40);
        $(".newh4").css("margin-left",60);
        $(".newh5").css("margin-left",80);
        $(".newh6").css("margin-left",100);
      });
 });