<script type='text/javascript'>
//<![CDATA[
//Script Redirect CTRL + U
function redircu(e) {
  if (e.ctrlKey && e.which == 85) {
    window.location.replace("http://www.danilrafiqi.xyz/");
    return false;
  }
}
document.onkeydown = redircu;

//Script Redirect Klik Kanan
function redirrc(e) {
  if (e.which == 3) { 
    window.location.replace("http://www.danilrafiqi.xyz/");
    return false;
  }
}
document.oncontextmenu = redirrc;
//]]>
</script>
