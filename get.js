if (window.location == "http://geeksrule10.wordpress.com/")
{
	var theLink = $("article:first-of-type > header > h1 > a");
	var link = theLink.attr("href");
	var title = theLink.html();
	
	safari.self.tab.dispatchMessage("setLink",link);
	safari.self.tab.dispatchMessage("setTitle",title);
	
	safari.self.tab.dispatchMessage("reload","");
}