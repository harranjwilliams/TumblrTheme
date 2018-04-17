(function(root) {

    var ensureString = function(str) {
        return !str ? '' : str;
    };

    var basicVariables = {
      title: ensureString({JSTitle}),
      name: ensureString({JSName}),
      description: ensureString({JSDescription}),
      metaDescription: ensureString({JSMetaDescription}),
      blogUrl: ensureString({JSBlogURL}),
      rss: ensureString({JSRSS}),
      favicon: ensureString({JSFavicon}),
      customCss: ensureString({JSCustomCSS}),
      isPermalinkPage: !!ensureString(/*{block:PermalinkPage}*/true/*{/block:PermalinkPage}*/),
      isIndexPage: !!ensureString(/*{block:IndexPage}*/true/*{/block:IndexPage}*/),
      /*{block:PostTitle}*/
      postTitle: ensureString({JSPostTitle}),
      /*{/block:PostTitle}*/
      /*{block:PostSummary}*/
      postSummary: ensureString({JSPostSummary}),
      /*{/block:PostSummary}*/
      portraitUrl16: ensureString({JSPortraitURL-16}),
      portraitUrl24: ensureString({JSPortraitURL-24}),
      portraitUrl30: ensureString({JSPortraitURL-30}),
      portraitUrl40: ensureString({JSPortraitURL-40}),
      portraitUrl48: ensureString({JSPortraitURL-48}),
      portraitUrl64: ensureString({JSPortraitURL-64}),
      portraitUrl96: ensureString({JSPortraitURL-96}),
      portraitUrl128: ensureString({JSPortraitURL-128}),
      copyrightYears: ensureString({JSCopyrightYears}),
      isSearchPage: !!ensureString(/*{block:SearchPage}*/true/*{/block:SearchPage}*/),
      searchQuery: ensureString({JSSearchQuery}),
      safeSearchQuery: ensureString({JSURLSafeSearchQuery}),
      searchPlaceHolder: ensureString('{lang:Search Blog}'),
      noSearchResults: !!ensureString(/*{block:NoSearchResults}*/true/*{/block:NoSearchResults}*/)
    };

    root.tumblrData = { basicVariables: basicVariables };
    
})(this);
