safari.self.browserWindow.addEventListener("message",respondToMessage,false);

function respondToMessage(messageEvent)
{
	if (messageEvent.name == "reload") reload();
}

function reload()
{
	const global = safari.extension.globalPage.contentWindow;
	
	var link = global.link;
	var title = global.title;
	
	if (title != null) $("#recentArticle").html(title);
	if (link != null) $("#recentArticle").attr("href", link);
}