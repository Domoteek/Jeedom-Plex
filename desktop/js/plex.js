$('.eqLogicAttr[data-l1key=logicalId]').on( 'change', function() {
	if($('.bt_PlexClient').length>0 && $(this).val()!=''){
		$('.bt_PlexClient').removeClass('btn-primary');
      	var select=$(this).val();
    	$('.bt_PlexClient').each(function( index ) {
        	if($(this).text() == select)
         		$(this).addClass('btn-primary');
      	});
	}
});
$('.bt_PlexClient').on( 'click', function() {
	$('.bt_PlexClient').removeClass('btn-primary');
	$(this).addClass('btn-primary');
	$('.eqLogicAttr[data-l1key=logicalId]').val($(this).text());
});
function addCmdToTable(_cmd) {
    if (!isset(_cmd)) {
        var _cmd = {configuration: {}};
    }
    var tr = '<tr class="cmd" data-cmd_id="' + init(_cmd.id) + '">';
    tr += '<td class="name">';
	tr += '<input class="cmdAttr form-control input-sm" data-l1key="id" style="display : none;">';
	tr += '<input class="cmdAttr form-control input-sm" data-l1key="name">   ';
	tr += '</td>';
	
    tr += '<td class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType();
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span></td>';
    tr += '<td>';
    tr += '<span><input type="checkbox" data-size="mini" data-label-text="{{Historiser}}" class="cmdAttr" data-l1key="isHistorized" />{{Historiser}}</span> ';
    tr += '</td>';
    tr += '<td>';
     if (is_numeric(_cmd.id)) {
        tr += '<a class="btn btn-default btn-xs cmdAction expertModeVisible" data-action="configure"><i class="fa fa-cogs"></i></a> ';
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i> {{Tester}}</a>';
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td>';
    tr += '</tr>';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');
    jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));
}
