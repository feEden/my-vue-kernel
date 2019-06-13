const pluginName = 'HtmlAfterWebpackPlugin';

function appendAssets(data) {
    const { js, css } = data;
    const jsData = [];
    const cssData = [];

    for (const j of js) {
        jsData.push(appendScript.js(j));
    }
    for (const c of css) {
        cssData.push(appendScript.css(c));
    }

    return {
        jsData,
        cssData
    }
};
const appendScript = {
    js: item => `<script>basket.require({url:'${item}'});</script>`,
    css: item => `<link rel="stylesheet" href="${item}">`
};

class HtmlAfterWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {

            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginData => {
                // html 模板内容 assets 打包后的静态资源
                let { html, assets } = htmlPluginData;
                // 分离出模板需要注入的js和css
                const assetData = appendAssets(assets);
                html = html.replace("<!-- injectscript -->", assetData.jsData.join(""));
                html = html.replace("<!-- injectstyle -->", assetData.cssData.join(""));

                htmlPluginData.html = html;
            });
        });
    };

}

module.exports = HtmlAfterWebpackPlugin;