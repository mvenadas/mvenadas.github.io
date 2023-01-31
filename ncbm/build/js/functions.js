var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		
		// Init Isotope on every filter container
		if ( $('.filter-container').length ) {

			$('.filter-container').each( function(){

				var $this = $(this);

				$this.find('.owl-carousel').owlCarousel({
					loop  : true,
					margin: 5,
					nav   : true,
					navText: ['<', '>'],
					responsive:{
						0:{
							items:1
						},
						600:{
							items:3
						},
						1000:{
							items:5
						}
					}
				});
				
				var loadFilter = $this.find('.grid').data('filter');
				var options = {
					itemSelector   : '.tile',
					layoutMode     : 'fitRows',
					percentPosition: true,
					fitRows        : {
						gutter: 10
					}
				};

				if  ( loadFilter ) {
					options.filter = '.' + loadFilter;
				}  
				
				$this.find('.grid').isotope( options );
			});


			// Handle filtering
			$('.filter a').on('click', function(event) {
				event.preventDefault();

				var currentFilter = $(this).data('filter');
				var $container    = $(this).parents('.filter-container'); 
				var $grid         = $container.find('.grid');
				
				$grid.isotope({
					filter: currentFilter
				});

				$container.find('a.current').removeClass('current')
				$(this).addClass('current');
			});
		}		
	});

})(jQuery, window, document);

}