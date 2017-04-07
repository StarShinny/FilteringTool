(function filter(){
	/*移除顶部*/
	var banner = document.getElementById("bannerandheader");
	banner.parentNode.removeChild(banner);

	/*移除右侧栏*/
	var secondary_column = document.getElementsByClassName("content__secondary-column")[0];
	secondary_column.parentNode.removeChild(secondary_column);

	/*移除左侧栏*/
	var content_labels = document.getElementsByClassName("content__labels")[0];
	content_labels.parentNode.removeChild(content_labels);

	var meta_container = document.getElementsByClassName("content__meta-container")[0];
	meta_container.parentNode.removeChild(meta_container);

	var aside = document.getElementsByTagName("aside")[0];
	aside.parentNode.removeChild(aside);

	/*移除底部*/
	var submeta = document.getElementsByClassName("submeta")[0];
	submeta.parentNode.removeChild(submeta);

	var content_footer = document.getElementsByClassName("content-footer ")[0];
	content_footer.parentNode.removeChild(content_footer);

	var footer = document.getElementsByTagName("footer")[0];
	footer.parentNode.removeChild(footer);
})();

/*显示分页栏,对原页面内容进行重排版*/
function initPages(){

	var total = Math.ceil(body_height / screen_height);

}

function showPages(page){
	if(page == 1){

	}
}

/*对原有的文章信息进行切分*/
var pageHeight = 34;
var body_height = document.body.clientHeight;
var screen_height = window.screen.availHeight;
var content_array = new Array();
(function paragraphSplit(){
	var header = document.getElementsByClassName("hide-on-mobile")[0];
	var header_mobile = document.getElementsByClassName("mobile-only")[3];
	var figure = document.getElementsByTagName("figure")[0];
	var paragraphs = document.getElementsByTagName("p");

	var header_height = header.offsetHeight + header_mobile.offsetHeight + figure.offsetHeight;
	var height_page = header_height;
	var i = 2;

	while(height_page + pageHeight < screen_height){
		height_page += paragraphs[i].offsetHeight;
		i++;
	}

	content_array.push(i - 1);

	var height_tmp = 0;
	for(var j = i; j < paragraphs.length; j++){
		if(height_tmp + paragraphs[j].offsetHeight + pageHeight < screen_height){
			height_tmp += paragraphs[j].offsetHeight;
		}else{
			content_array.push(j - 1);
			height_tmp = paragraphs[j].offsetHeight;
		}
	}

	console.log(content_array);
})();


function splitArticle(){
	/*清空article中的内容*/
	var article = document.getElementById("article");

	var header = document.getElementsByClassName("hide-on-mobile")[0];
	var header_mobile = document.getElementsByClassName("mobile-only")[3];
	var content = document.getElementsByClassName("content__main")[0];
	var figure = document.getElementsByTagName("figure")[0];
	var article_body = document.getElementsByClassName("content__article-body")[0];
	var paragraphs = document.getElementsByTagName("p");
	/*article_body = article_body.parentNode.removeChild(article_body);

	article.removeChild(header);
	article.removeChild(header_mobile);
	article.removeChild(content);*/

	var header_height = header.offsetHeight + header_mobile.offsetHeight + figure.offsetHeight;
	var height_page = header_height;
	var i = 2;

	while(height_page + pageHeight < screen_height){
		height_page += paragraphs[i].offsetHeight;
		i++;
	}

	content_array.push(i - 1);

	var height_tmp = 0;
	for(var j = i; j < paragraphs.length; j++){
		if(height_tmp + paragraphs[j].offsetHeight + pageHeight < screen_height){
			height_tmp += paragraphs[j].offsetHeight;
		}else{
			content_array.push(j - 1);
			height_tmp = paragraphs[j].offsetHeight;
		}
	}

	console.log(content_array);
};
