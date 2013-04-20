function hide() {
	if ($('#menu').css('margin-bottom').match('-75px')) {
		while(1) {
			if ($('#menu').css('margin-bottom').match('-75px')) {
				$('#warp').css('margin-top','-78px');
				$('#menu').css('margin-bottom','75px');
				$('#menu').css('bottom','-75px');
			}
			function hidemenu() {lamp=0; $('#warp').click(function () {
				$('#warp').css('margin-top','0px');
				$('#menu').css('margin-bottom','-75px');
				$('#menu').css('bottom','75px');
			});

			}
			if ($('#menu').css('margin-bottom').match('-75px')) {
					hidemenu();
					break;

			}
			break;	
		}

		}
	else  {
		$('#warp').css('margin-top','0px');
		$('#menu').css('margin-bottom','-75px');
		$('#menu').css('bottom','75px');

	};
}