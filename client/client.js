if (Meteor.isClient) {

    Router.map(function () {
        this.route('home', {path: '/admin'})

        this.route('posts', {
            path: '/admin/posts',
            template: 'posts',
            data: function () {
                return {
                    posts: Posts.find({}, {}),
                    appConf: AppConfiguration.getPageBg()
                };
            }
        });

        this.route('post', {
            path: '/admin/post/:id',
            template: 'post',
            data: function () {
                return {
                    post: Posts.findOne(this.params.id),
                    appConf: AppConfiguration.getPageBg()
                };
            }
        })

        this.route('post_new', {
            path: '/admin/new/post',
            template: 'post_new',
            data: function () {
                return {
                    appConf: AppConfiguration.getPageBg()
                };
            }
        })

        this.route('table', {
            path: '/table',
            template: 'table',
            data: function () {
                return {
                    appConf: AppConfiguration.getPageBg()
                };
            }
        });

        this.route('patternsbg', {
            path: '/patternsbg',
            template: 'patternsbg',
            data: function () {
                return {
                    appConf: AppConfiguration.getPageBg()
                };
            }
        });
    });

    Template.post_new.events = {
        'click #add': function () {
            Posts.insert({
                name: $("#name").val(),
                desc: $("#desc").val()
            });
            $("#name").val("");
            $("#desc").val("");
        }
    };

    Template.post.events = {
        'click .updata': function () {
            Posts.update({_id: $(".updata").attr("_id")}, {
                name: $("#name").val(),
                desc: $("#desc").val()
            });
        }
    };

    Template.posts.events = {
        'click .remove': function () {
            Posts.remove($(this).attr("_id"));
        }
    };

    Template.table.events = {
        'click #table-grey': function () {
            $("table").removeClass();
            $("table").addClass("table table-bordered table-grey");
        },
        'click #table-blue': function () {
            $("table").removeClass();
            $("table").addClass("table table-bordered table-blue");
        },
        'click #table-red': function () {
            $("table").removeClass();
            $("table").addClass("table table-bordered table-red");
        },
        'click #table-def': function () {
            $("table").removeClass();
            $("table").addClass("table table-bordered");
        }
    };

    Template.patternsbg.events = {

        'click #stairs': function () {
            AppConfiguration.updatePageBg("stairs");
        },
        'click #half-rombes': function () {
            AppConfiguration.updatePageBg("half-rombes");
        },
        'click #arrows': function () {
            AppConfiguration.updatePageBg("arrows");
        },
        'click #def': function () {
            AppConfiguration.updatePageBg("");
        }
    };

}
