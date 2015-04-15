function setBrandingHeight() {
  var adImage = $( ".advertisement_image" );
  $( ".advertisement_branding" ).each( function() {
    $( this ).css( "height", adImage.height() + "px" );
  });
}

$( document ).ready( function() {
  setBrandingHeight(); 
});

$( window ).on( 'resize', function() {
  setBrandingHeight(); 
});

$( window ).load( function() {
  setBrandingHeight(); 
  $( ".loading_overlay" ).fadeOut();
});

