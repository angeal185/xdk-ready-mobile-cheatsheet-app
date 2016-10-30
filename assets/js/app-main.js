//load first page
$(function() {
	$( "#pagecontainer" ).load( "partials/index.html" );
	});
//menu
$(document).ready(function( $ ) {
	$("nav#menu").mmenu({
		extensions: ["effect-panels-zoom", "pagedim-black", "theme-dark" ],
		counters: true,
		navbars: [{"position": "top", "content": ["searchfield"]},
		  {"position": "top",
		content		: ['prev','title','close']},
		  {"position": "bottom","content": [
				"<a class='fa fa-github' href='https://angeal185.github.io/'></a>",
				"<a class='fa fa-codepen' href='https://codepen.io/angeal185/'></a>",
				"<a class='fa fa-linkedin' href='#/https://au.linkedin.com/in/ben-eaves-996991125'></a>"
			 ]
		  }
	   ]
	});
});
//Main	
$(document).ready(function() {	
//preload and cache
$(function ($http) {
	$http.get('partials/html-dom.html'), 
	$http.get('partials/git.html'),
	$http.get('partials/css.html'),  
	$http.get('partials/python.html'),
	$http.get('partials/php.html'),
	$http.get('partials/mysql.html'),
	$http.get('partials/javascript.html'),  
	$http.get('partials/index.html'),
	$http.get('partials/ruby.html'), 
	$http.get('partials/nodejs.html');
	});	
//app
$(function(){
	$('#home').click(function(){
		$('#pagecontainer').load('partials/index.html')});
	$('#contact').click(function(){
		$('#pagecontainer').load('partials/contact.html #hp01')});
	$('#about').click(function(){
		$('#pagecontainer').load('partials/about.html #hp01')});
	});
//dom-html          
$(function(){
	$('#h-p').click(function(){
		$('#pagecontainer').load('partials/html-dom.html #hp01')});
	$('#h-p2').click(function(){
		$('#pagecontainer').load('partials/html-dom.html #hp02')});
	$('#h-p3').click(function(){
		$('#pagecontainer').load('partials/html-dom.html #hp03')});
	$('#h-p4').click(function(){
		$('#pagecontainer').load('partials/html-dom.html #hp04')});
	$('#h-p5').click(function(){
		$('#pagecontainer').load('partials/html-dom.html #hp05')});
	$('#h-p6').click(function(){
		$('#pagecontainer').load('partials/html-dom.html #hp06')});
	});
//css
$(function(){
	$('#h-t').click(function(){
		$('#pagecontainer').load('partials/css.html #ht01')});
	$('#h-t2').click(function(){
		$('#pagecontainer').load('partials/css.html #ht02')});
	$('#h-t3').click(function(){
		$('#pagecontainer').load('partials/css.html #ht03')});
	$('#h-t4').click(function(){
		$('#pagecontainer').load('partials/css.html #ht04')});
	$('#h-t5').click(function(){
		$('#pagecontainer').load('partials/css.html #ht05')});
	$('#h-t6').click(function(){
		$('#pagecontainer').load('partials/css.html #ht06')});
	$('#h-t7').click(function(){
		$('#pagecontainer').load('partials/css.html #ht07')});
	$('#h-t8').click(function(){
		$('#pagecontainer').load('partials/css.html #ht08')});
	});
//git
$(function(){
	$('#h-s').click(function(){
		$('#pagecontainer').load('partials/git.html #hs01')});
	$('#h-s2').click(function(){
		$('#pagecontainer').load('partials/git.html #hs02')});
	$('#h-s3').click(function(){
		$('#pagecontainer').load('partials/git.html #hs03')});
	$('#h-s4').click(function(){
		$('#pagecontainer').load('partials/git.html #hs04')});
	$('#h-s5').click(function(){
		$('#pagecontainer').load('partials/git.html #hs05')});
	$('#h-s6').click(function(){
		$('#pagecontainer').load('partials/git.html #hs06')});
	$('#h-s7').click(function(){
		$('#pagecontainer').load('partials/git.html #hs07')});
	});
//javascript
$(function(){
	$('#p-p').click(function(){
		$('#pagecontainer').load('partials/javascript.html #pp01')});
	$('#p-p2').click(function(){
		$('#pagecontainer').load('partials/javascript.html #pp02')});
	$('#p-p3').click(function(){
		$('#pagecontainer').load('partials/javascript.html #pp03')});
	$('#p-p4').click(function(){
		$('#pagecontainer').load('partials/javascript.html #pp04')});
	$('#p-p5').click(function(){
		$('#pagecontainer').load('partials/javascript.html #pp05')});
	$('#p-p6').click(function(){
		$('#pagecontainer').load('partials/javascript.html #pp06')});
	$('#p-p7').click(function(){
		$('#pagecontainer').load('partials/javascript.html #pp07')});
	$('#p-p8').click(function(){
		$('#pagecontainer').load('partials/javascript.html #pp08')});
	});
//jquery	
$(function(){
	$('#p-t').click(function(){
		$('#pagecontainer').load('partials/jquery.html #pt01')});
	$('#p-t2').click(function(){
		$('#pagecontainer').load('partials/jquery.html #pt02')});
	$('#p-t3').click(function(){
		$('#pagecontainer').load('partials/jquery.html #pt03')});
	$('#p-t4').click(function(){
		$('#pagecontainer').load('partials/jquery.html #pt04')});
	$('#p-t5').click(function(){
		$('#pagecontainer').load('partials/jquery.html #pt05')});
	$('#p-t6').click(function(){
		$('#pagecontainer').load('partials/jquery.html #pt06')});
	$('#p-t7').click(function(){
		$('#pagecontainer').load('partials/jquery.html #pt07')});
	$('#p-t8').click(function(){
		$('#pagecontainer').load('partials/jquery.html #pt08')});
	$('#p-t9').click(function(){
		$('#pagecontainer').load('partials/jquery.html #pt09')});
	});
//mysql	
$(function(){
	$('#p-s').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps01')});
	$('#p-s2').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps02')});
	$('#p-s3').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps03')});
	$('#p-s4').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps04')});
	$('#p-s5').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps05')});
	$('#p-s6').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps06')});
	$('#p-s7').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps07')});
	$('#p-s8').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps08')});
	$('#p-s9').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps09')});
	$('#p-s10').click(function(){
		$('#pagecontainer').load('partials/mysql.html #ps10')});
	});
//nodejs
$(function(){
	$('#j-p').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp01')});
	$('#j-p2').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp02')}); 
	$('#j-p3').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp03')});
	$('#j-p4').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp04')});
	$('#j-p5').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp05')});
	$('#j-p6').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp06')});
	$('#j-p7').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp07')});
	$('#j-p8').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp08')});
	$('#j-p9').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp09')});
	$('#j-p10').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp10')});
	$('#j-p11').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp11')});
	$('#j-p12').click(function(){
		$('#pagecontainer').load('partials/nodejs.html #jp12')});
	});
//php
$(function(){
	$('#j-t').click(function(){
		$('#pagecontainer').load('partials/php.html #jt01')});
	$('#j-t2').click(function(){
		$('#pagecontainer').load('partials/php.html #jt02')});
	$('#j-t3').click(function(){
		$('#pagecontainer').load('partials/php.html #jt03')});
	$('#j-t4').click(function(){
		$('#pagecontainer').load('partials/php.html #jt04')});
	$('#j-t5').click(function(){
		$('#pagecontainer').load('partials/php.html #jt05')});
	$('#j-t6').click(function(){
		$('#pagecontainer').load('partials/php.html #jt06')});
	$('#j-t7').click(function(){
		$('#pagecontainer').load('partials/php.html #jt07')});
	$('#j-t8').click(function(){
		$('#pagecontainer').load('partials/php.html #jt08')});
	$('#j-t9').click(function(){
		$('#pagecontainer').load('partials/php.html #jt09')});
	$('#j-t10').click(function(){
		$('#pagecontainer').load('partials/php.html #jt10')});
	$('#j-t11').click(function(){
		$('#pagecontainer').load('partials/php.html #jt11')});
	$('#j-t12').click(function(){
		$('#pagecontainer').load('partials/php.html #jt12')});
	$('#j-t13').click(function(){
		$('#pagecontainer').load('partials/php.html #jt13')});
	$('#j-t14').click(function(){
		$('#pagecontainer').load('partials/php.html #jt14')});
	$('#j-t15').click(function(){
		$('#pagecontainer').load('partials/php.html #jt15')});
	$('#j-t16').click(function(){
		$('#pagecontainer').load('partials/php.html #jt16')});
	$('#j-t17').click(function(){
		$('#pagecontainer').load('partials/php.html #jt17')});
	$('#j-t18').click(function(){
		$('#pagecontainer').load('partials/php.html #jt18')});
	$('#j-t19').click(function(){
		$('#pagecontainer').load('partials/php.html #jt19')});
	$('#j-t20').click(function(){
		$('#pagecontainer').load('partials/php.html #jt20')});
	});
//python
$(function(){
	$('#py-p').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp01')});
	$('#py-p2').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp02')});
	$('#py-p3').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp03')});
	$('#py-p4').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp04')});
	$('#py-p5').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp05')});
	$('#py-p6').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp06')});
	$('#py-p7').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp07')});
	$('#py-p8').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp08')});
	$('#py-p9').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp09')});
	$('#py-p10').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp10')});
	$('#py-p11').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp11')});
	$('#py-p12').click(function(){
		$('#pagecontainer').load('partials/python.html #pyp12')});
	});	
//ruby
$(function(){
	$('#py-t').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt01')});
	$('#py-t2').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt02')});
	$('#py-t3').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt03')});
	$('#py-t4').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt04')});
	$('#py-t5').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt05')});
	$('#py-t6').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt06')});
	$('#py-t7').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt07')});
	$('#py-t8').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt08')});
	$('#py-t9').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt09')});
	$('#py-t10').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt10')});
	$('#py-t11').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt11')});
	$('#py-t12').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt12')});
	$('#py-t13').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt13')});
	$('#py-t14').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt14')});
	$('#py-t15').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt15')});
	$('#py-t16').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt16')});
	$('#py-t17').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt17')});
	$('#py-t18').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt18')});
	$('#py-t19').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt19')});
	$('#py-t20').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt20')});
	$('#py-t21').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt21')});
	$('#py-t22').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt22')});
	$('#py-t23').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt23')});
	$('#py-t24').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt24')});
	$('#py-t25').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt25')});
	$('#py-t26').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt26')});
	$('#py-t27').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt27')});
	$('#py-t28').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt28')});
	$('#py-t29').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt29')});
	$('#py-t30').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt30')});
	$('#py-t31').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt31')});
	$('#py-t32').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt32')});
	$('#py-t33').click(function(){
		$('#pagecontainer').load('partials/ruby.html #pyt33')});
	});
});				
//back to top
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});
	$('.go-top').click(function(event) {
		event.preventDefault();
		
		$('html, body').animate({scrollTop: 0}, 300);
	})
});				
				
				
		












