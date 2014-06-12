Posts = new Meteor.Collection('posts');
AppConfiguration = new Meteor.Collection('appconfiguration');

AppConfiguration.updatePageBg = function (newBgForPage) {
    var pageBg = AppConfiguration.findOne("pageBg");
    if (pageBg == undefined) {
        AppConfiguration.insert({_id: "pageBg", css: newBgForPage});
    } else {
        AppConfiguration.update({_id: "pageBg"}, {css: newBgForPage});
    }
}

AppConfiguration.getPageBg = function () {
    var pageBg = AppConfiguration.findOne("pageBg");
    if (pageBg == undefined) {
        return "";
    }
    return pageBg.css;
}