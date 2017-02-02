
        $(function() {


            //GALLERY SPECIFIC JS
            $(".gallery").fancybox({
                wrapCSS: 'customGallery',
                padding:0,
                nextEffect: 'none',
                prevEffect: 'none',
                nextSpeed: 500,
                fitToView:true,
                tpl: {
                    closeBtn: '<div class="centerTitle"><div title="Back to gallery" class="fancybox-item fancybox-close"><span>Back to gallery</span></div></div>'
                },
                helpers : {
                 overlay : {
                  css : {
                   'background' : 'rgba(255,255,255, 0.95)'
               }
           },

           title: {
            type: 'outside'
        }
    },

});
			
	
        // Hide gallery select box

       if ($("#filter-list option").length > 1) {
            $('#filters').addClass('enable');
            $('#filters').removeClass('disable');
        } 
        
		// init ISOTOPE
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
		  columnWidth: '.grid-sizer',
		  gutter: '.gutter-sizer'
  }
});

$select = $('#filters select');
$select.change(function() {
        var filters = $(this).val();
;
        $grid.isotope({
            filter: filters
        });
    });

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $grid.isotope({ filter: selector });
  return false;
});

var $container = $('#container'),
        $select = $('#filters select');

    $container.isotope({
        itemSelector: '.item'
    });

    $select.change(function() {
        var filters = $(this).val();
        $container.isotope({
            filter: filters
        });
    });

	// layout Masonry after each image loads
		$grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
     });
		

    $("#loadMoreButton").click(function() {
      var $moreImages = $('.moreImages div.grid-item:lt(5)');
	  $('.grid').isotope( 'insert', $moreImages );
      if(!$('.moreImages > div').length) { $( "#loadMoreButton").addClass('hide'); }

        });     
        //Gallery mouseover
        $( ".grid-item" ).mouseover(function() {
            $( this ).css("background-color", "#000")
            $( this ).find( ".caption p" ).css("display", "block");
        });
        $( ".grid-item" ).mouseout(function() {
            $( this ).find( ".caption p" ).css("display", "none");
        });
	
        //Vars
        var $nav = $('.nav ul');
        var $searchBody = $('.widget-search .widget-body')

        //Search
        $('.widget-search .widget-head').on('click', function() {
            var $this = $(this);

            $this.toggleClass('active');
            $this.next().toggleClass('visible');
            $('.section-news').toggleClass('moved');

        });

 








    });

