function imdbTest() {
	var template = '{# This is a comment and will be removed from the output.}{.section songs}<h2>Songs in {playlist-name}</h2>      <table width="100%">      {.repeated section @}        <tr>          <td><a href="{url-base|htmltag}{url|htmltag}">Play</a>          <td><i>{title}</i></td>          <td>{artist}</td>        </tr>      {.end}      </table>    {.or}      <p><em>(No page content matches)</em></p>    {.end}';
	$("[datasource]").each(function(i) {
		var template = $(this).innerHTML;
		$(this).templateRemote($(this).attr('template'));
		$(this).renderRemote($(this).attr('datasource'));
	});	
}