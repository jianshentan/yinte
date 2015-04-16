function setBrandingHeight() {
  $( ".advertisement_branding" ).each( function() {
    var adImage = $( this ).parent().parent().find( '.advertisement_image' );
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

