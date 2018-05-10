var button = document.getElementById('button');

//sendmail, callback

function sendmail() 
{

	$.post(
		'http://mintymint.u3262.lime.elastictech.org/form.php', 
		{
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		subject: document.getElementById('subject').value,
		message: document.getElementById('message').value
		}, 
		function(data)
		{
			if (data == 'success')
			{
				$(".contact__success").css('display','block');
			}
			else
			{
				$(".contact__error").css('display','block');
			}
		});
		window.setTimeout(function(){ window.location = "http://mintymint.u3262.lime.elastictech.org/"; },3000);
};


function addEvent(el, event, callback)
{
	if (window.attachEvent)
	{
		el.attachEvent('on' + event, callback);
	}
	else
	{
		el.addEventListener(event, callback);
	}
};

addEvent(button, 'click', sendmail);


//end mail
// Start animate

$('header .container').animated("fadeIn");
$('.awward .container').animated("fadeInUp");
$('.details .container').animated("fadeInUp");
$('.testimonials .container').animated("fadeInUp");
$('.features .container').animated("fadeInUp");
$('.blog .container').animated("fadeInUp");
$('.coa .container').animated("fadeInUp");
$('.contact .container').animated("fadeInUp");

//end animate

//start scroll

$('a[href^="#button"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 2000);
        return false;
        }); 
		
//end scroll
