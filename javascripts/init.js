(function() {

    $(document).ready(function() {

        if ($(window).width() < 768) {
            $(".button-sidenav").sideNav({
                menuWidth: 300, // Default is 240
                //edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
            });

            $('.side-nav a').click(function() {
                $('.button-sidenav').trigger('click');
            });

            $('a[data-toggle="tab"]').on('click', function(e) {
                $('.divpagination').addClass('hiddentab');
            });
            $('#sidenavOverlay').addClass('side-nav').removeClass('sections-links col-md-2 col-sm-2');
        } else {
            $('a[data-toggle="tab"]').on('click', function(e) {
                $('.divpagination').addClass('hiddentab');
            });
            $("#sidenavOverlay").addClass('sections-links col-md-2 col-sm-2').removeClass('side-nav').removeAttr("style");
        }
    });
    $(document).ready(function() {
        //debugger;
        $('.pagination li').click(function() {
            if ($(this).text().trim() == "caret_right") {
                if ($(this).parent().find('li.active').next().text().trim() != "caret_right") {
                    $(this).parent().find('li.active').next().click();
                } else {
                    $(this).parent().find('li')[$(this).parent().find('li').length - 2].click();
                }
            } else if ($(this).text().trim() == "caret_left") {
                if ($(this).parent().find('li.active').prev().text().trim() != "caret_left") {
                    $(this).parent().find('li.active').prev().click();
                } else {
                    $(this).parent().find('li')[1].click();
                }
            } else {
                $(this).parent().find('li').removeClass('active');
                $(this).addClass('active');
                var dataid = $(this).find('a')[0].attributes["data-linkpagination"].value;
                $(this).parent().parent().prev().find('div[data-navigation=' + dataid + ']').removeClass('hiddentab');
            }
        });
    });

    $(document).on('click', 'a.showPagetab', function() {
        var dataid = $(this)[0].attributes["href"].value;
        $($(dataid).find('.pagination li')[1]).click();
    });

    // store the currently selected tab in the hash value


    /*$("li a").click(function () {
            $(this).parent().removeClass("active");
        });*/

    $(document).ready(function() {
        $('.pagination li a, .showPagi a, .showPagetab').on('click', function(e) {
            var $this = $(this),
                $dataNavigation = $('.divpagination').attr("data-navigation"),
                targetLink = $this.attr('data-linkpagination');
            //alert(targetLink);
            $('.inqueary-container').removeClass('hiddentab');
            $('.user-tab-sidebar').removeClass('active');
            $('.divpagination').addClass('hiddentab');

            $('.divpagination[data-navigation="' + targetLink + '"]').removeClass('hiddentab');
            e.preventDefault();
        });

        // for changes check go http://amsul.ca/pickadate.js/date/
    }); // end of document ready

    $(document).ready(function() {

        var headerHight = $('.brand').height(),
            sidebrHight = $('.detail-page-section').height();

        function checkWidth() {
            var windowSize = $(window).height();
            //$('.panelsbg').css();
            $(".panelsbg").css("min-height", windowSize + ('-' + headerHight));
        }

        checkWidth();

        $("li > a").on("shown.bs.tab", function(e) {
            //alert(e.currentTarget.id);
            var currentTab = e.currentTarget.hash;
            //alert(currentTab);
            if (currentTab != null && currentTab != undefined && currentTab != "#benefits") {
                $($(currentTab).find(".nav-tabs li")[0]).find("a").click();
            } else if (currentTab != null && currentTab != undefined && currentTab == "#benefits") {
                $($(currentTab).find(".nav-tabs li")).find("a").parent("li").removeClass("active");
                $("#benefits-hidden").parent("div").find("div.tab-pane").removeClass("active");
                $("#benefits-hidden").addClass("active");
            }
            if ($(window).width() > 768) {
                if ($(currentTab).find(".home-content").length == 1) {
                    //$(".home-content").addClass("sjahsjahjsahs");
                    $('.homeInner').hide().delay(1000).fadeIn();
                    $(".home-content").animate({
                        width: "508px"
                    }, 20);
                    $('.pagetabs-contant').hide().delay(2800).fadeOut();
                    $(currentTab).animate({
                        width: "508px"
                    }, 20);
                    $(".panelsbg").animate({
                        width: "508px"
                    }, 30);

                } else if ($(currentTab).find(".home-content").length == 0) {
                    $('.pagetabs-contant').fadeIn();
                    $(".home-content").animate({
                        width: "778px"
                    }, 30);
                    $(".panelsbg").animate({
                        width: "778px"
                    }, 30);
                }
            }

        });

        $(document).ready(function() {
            $("li a").click(function() {
                $(this).parent().removeClass("active");
            });
            $('.showPagetab').click(function() {
                $($(this.attributes['href'].value).find('.divpagination')[0]).removeClass('hiddentab');
            });
            $('.modal-dialog').each(function() {
                if ($(this).find('.alert-modal').length > 0) {
                    $(this).css('margin', '20% auto');
                } else {
                    $(this).removeAttr('style');
                }
            });
        });
        /*$(document).ready(function () {
            //Disable full page
            $("body").on("contextmenu", function (e) {
                return false;
            });

            //Disable part of page
            $("#id").on("contextmenu", function (e) {
                return false;
            });
        });

        $(document).ready(function () {
            //Disable full page
            $('body').bind('cut copy paste', function (e) {
                e.preventDefault();
            });

            //Disable part of page
            $('#id').bind('cut copy paste', function (e) {
                e.preventDefault();
            });
        });*/
    });
})(jQuery); // end of jQuery name space