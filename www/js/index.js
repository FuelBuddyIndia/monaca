function toastmessage(msg,timeout,position){
	timeout=timeout||5000;
	position=position||'bottom';
 console.log(timeout);	

	$.toasthide();
			 $.toast({
			title: msg,
			duration: timeout,
			position: position // e.g. top, bottom, middle
			});
}

	 	function ShortCutsuccessfunc(obj)
	{
			        			 toastmessage("Shortcut Created");
	 localStorage.setItem('shortcut', true);
	 console.log("Shortcut Created");
	 console.log(obj);
	}

	function ShortCutfailfunc(obj)
	{
		        			 toastmessage("Failed to create ShortCutsuccessfunc");
	 localStorage.setItem('shortcut', false);
	 console.log ("Failed to Create a Shortcut");
	 console.log(obj);
	}


function getifrCookie (cname){
cookieMaster.getCookieValue('https://fuelbuddy.in', cname, function(data) {
  console.log(data.cookieValue);
  return data.cookieValue;
}, function(error) {
  if (error) {
    console.log('error: ' + error);
	return "";
  }
});
}

function setifrCookie(cname,cvalue) {
	if (ios==false)
	{
	cvalue=cvalue + ";path=/";
	}
		  cookieMaster.setCookieValue('https://fuelbuddy.in', cname, cvalue,
    function() {
        console.log(cname+"::"+cvalue);
    },
    function(error) {
        console.log('Error setting cookie: '+error);
    });
}

function clearifrCookies()
{
   cookieMaster.clearCookies(
    function() {
    console.log('Cookies have been cleared');
    },
    function() {
        console.log('Cookies could not be cleared');
    });
}

// function onDeviceReady()
// {				
		// // navigator.splashscreen.show();
				// loadapp();
				// // setTimeout(function() {
				// // // navigator.splashscreen.hide();
				// // }, 5000);
        // // Now safe to use device APIs
		// console.log ("Device Ready");
		// // alert("device ready");
		
		
			 // // window.open = cordova.InAppBrowser.open; 
	// // pushNotification = window.plugins.pushNotification;

    // // if (networkState == Connection.NONE){
                			 // // $.toast({
			// // title: 'Please Check your Internet Connection and Try Again',
			// // duration: 5000,
			// // position: 'middle' // e.g. top, bottom, middle
			// // });
			// // onOffline();


    // // }
		// // setTimeout(function() {
        // // navigator.splashscreen.hide();
    // // }, 1000);

// // loadapp();
// }

function pingerOffline() {
	onlineshown=0;
					// console.log ("offline");
					$('#iframe-container').css('width',"0");
					$('#iframe-container').css('height',"0");
					$('#iframe-container').css('visibility',"hidden");
					$('#iframe-container').css('display',"none");
					$('#loader').css('display',"none");
					$('#loader').css('visibility',"hidden");
					navigator.splashscreen.hide();
					splashscreenshown=0;
					
					$('#no-network').css('display',"block");
					$('#no-network').css('visibility',"visible");
					offlineshown=1;
					


}

function pingerOnline(pingstat) {
	offlineshown=0;
			if ( pingerlastoffline==true && pingstat==true)
	{
		
		   $("#content").attr("src",curpath);
		 pingerlastoffline=false;
		 if (onlineshown==0)
		 {
		toastmessage("Online Now");
			navigator.splashscreen.show();
			splashscreenshown=1;
	onlineshown=1;
   firstiframeload=true;
		loadapp();
		 }
		
	}
	 $('#iframe-container').css('width',"100%");
			 $('#iframe-container').css('height',"100%");
						$('#iframe-container').css('visibility',"visible");
					$('#iframe-container').css('display',"block");
					 $('#apploader').css('display','none');
			 $('#apploader').css('visibility','hidden');
					$('#no-network').css('display',"none");
					$('#no-network').css('visibility',"hidden");

						// console.log ("online");
						 		

			
}



function onOffline() {
	onlineshown=0;
	pingercode=false;
	if (offlineshown==0)
	{
					console.log ("offline");
									 $('#iframe-container').css('width',"0");
			 $('#iframe-container').css('height',"0");
					$('#iframe-container').css('visibility',"hidden");
					$('#iframe-container').css('display',"none");
					navigator.splashscreen.hide();
					splashscreenshown=0;
					$('#no-network').css('display',"block");
					$('#no-network').css('visibility',"visible");
					 			toastmessage("You are Offline now");
								offlineshown=1;
	}

}

function onOnline() {
						console.log ("online");
						offlineshown=0;
						 				 // $('#iframe-container').css('width',"100%");
			 // $('#iframe-container').css('height',"100%");
						// $('#iframe-container').css('visibility',"visible");
					// $('#iframe-container').css('display',"block");
					
					$('#no-network').css('display',"none");
					$('#no-network').css('visibility',"hidden");
					pingerlastoffline=false;
					pingercode=true;
					if (onlineshown==0)
					{
					navigator.splashscreen.show();
					splashscreenshown=1;
					 		        			toastmessage("You are Online Now");
												
												 $("#content").attr("src",curpath);
		 
		 firstiframeload=true;
		 onlineshown=1;
		 loadapp();
					}
}




/*
var pinger=function(){
console.log("ping");
var code=false;
 var randomNum = Math.round(Math.random() * 10000);
var jqxhr = $.ajax({ 
	 method: 'GET',
	 dataType: 'application/json',
	 async: false,
	 timeout: 5000,
	 url: 'https://fuelbuddy.in/mobile/pinger.php?rand='+ randomNum, 
	 })
	 .done(function(data) {
		 console.log(data);
		 if (data.status=="success")
		 {
		code=true;
		 }
	
	 })
	.fail(function() {
    console.log( "connection error" );
	//alert ("pinger failed fail");
	// toastmessage("Connection error");
	
	code=false;
  })
return code;
}
*/

var pinger=function() {
// console.log("pinger");

    var xhr = new XMLHttpRequest();
    var file = "https://fuelbuddy.in/mobile/pinger.php";
    var randomNum = Math.round(Math.random() * 10000);
	xhr.timeout = 5000;
 
    xhr.open('HEAD', file + "?rand=" + randomNum, true);
    xhr.send();
     
    xhr.addEventListener("readystatechange", function(e){
 
    
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 304) {
         pingercode=true;
		 //console.log("ready");
        } else {
          pingercode=false;
        }
      }
    }
	, false);
	
}

var Foreground=function(){
	
// alert ("here");	
if (splashscreenshown==1)
{
	navigator.splashscreen.show();
	splashscreenshown=1;
}
}


function onResume()
{
    console.log("resuming..");
 pinger();
  onlineshown=1;
  if (pingercode==false)
  {
  console.log("pingercode:"+pingercode);
	  pingerOffline();
	  pingerlastoffline=true;
  }
	if (pingercode==true)
  {
	  pingerOnline(pingerlastoffline);
	  onlineshown=1;
  } 

}


var initservertimer;
var initincluded=false;
function initserverjs()
{
    try
    {
        console.log("trying initserverincludes");
        
        if (typeof initserverincludes === "function")
        {
         initserverincludes();
        clearInterval(initservertimer);
        }
        else
        {
            if( initincluded==false)
            {
            var jsElm = document.createElement("script");
            // set the type attribute
            jsElm.type = "application/javascript";
            // make the script element load file
            jsElm.src = "https://fuelbuddy.in/mobile/assets/js/serverincludes.js?v="+Math.floor(Math.random() * 1000);;
            // finally insert the element to the body element in order to load the script
            document.body.appendChild(jsElm);
            initincluded=true;
            }

        }
       

    }
    catch (err) 
    {
            console.log(err);
    }

}
initservertimer=setInterval(initserverjs,2000);
	
function handleOpenURL(url) {
  console.log("received url: " + url);
  var urlobj=new URL(url)
  var qstring=urlobj.search;

    console.log(qstring);
    if (url.includes("fuelbuddy://fullpath"))
    {

        // url of form fuelbuddy://fullpath?path=https://fuelbuddy.in/mobile/orders.php?v=1 -- note no quotes
        var newurl=urlobj.search;
        newurl=decodeURI(newurl);
        newurl=newurl.replace("?path=","");
        curpath=newurl;
    }
    else
    {
    if (url.includes("fuelbuddy://myprofile.php"))
    {
        curpath="https://fuelbuddy.in/mobile/myprofile.php";
    }
     if (url.includes("fuelbuddy://orders.php"))
    {
        curpath="https://fuelbuddy.in/mobile/orders.php";
    }

     if (url.includes("fuelbuddy://wallet.php"))
    {
        curpath="https://fuelbuddy.in/mobiconnect/app_wallet";
    }

     if (url.includes("fuelbuddy://map.php"))
    {
        curpath="https://fuelbuddy.in/mobile/map.php";
    }

   
    if (url.includes("fuelbuddy://grouporders.php"))
    {
        curpath="https://fuelbuddy.in/mobiconnect/app_grouporders";
    }
    curpath=curpath+urlobj.search;
    }
    console.log("going to:"+curpath);

    $("#content").attr("src",curpath);
		 
		 firstiframeload=true;
		 onlineshown=1;
		 loadapp();
}



//**dataURL to blob**
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

//**blob to dataURL**
function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
    a.readAsDataURL(blob);
}

//test:
//var blob = dataURLtoBlob('data:text/plain;base64,YWFhYWFhYQ==');
//blobToDataURL(blob, function(dataurl){
 //   console.log(dataurl);
//});

