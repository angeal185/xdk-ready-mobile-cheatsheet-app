! function(e) {
    function n() {
        e[t].glbl || (r = {
            $wndw: e(window),
            $docu: e(document),
            $html: e("html"),
            $body: e("body")
        }, i = {}, a = {}, o = {}, e.each([i, a, o], function(e, n) {
            n.add = function(e) {
                e = e.split(" ");
                for (var t = 0, s = e.length; s > t; t++) n[e[t]] = n.mm(e[t])
            }
        }), i.mm = function(e) {
            return "mm-" + e
        }, i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), i.umm = function(e) {
            return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
        }, a.mm = function(e) {
            return "mm-" + e
        }, a.add("parent child"), o.mm = function(e) {
            return e + ".mm"
        }, o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[t]._c = i, e[t]._d = a, e[t]._e = o, e[t].glbl = r)
    }
    var t = "mmenu",
        s = "5.7.4";
    if (!(e[t] && e[t].version > s)) {
        e[t] = function(e, n, t) {
            this.$menu = e, this._api = ["bind", "initPanels", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = n, this.conf = t, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
            var s = this.$pnls.children();
            return this._initAddons(), this.initPanels(s), "function" == typeof this.___debug && this.___debug(), this
        }, e[t].version = s, e[t].addons = {}, e[t].uniqueId = 0, e[t].defaults = {
            extensions: [],
            initMenu: function() {},
            initPanels: function() {},
            navbar: {
                add: !0,
                title: "Menu",
                titleLink: "panel"
            },
            onClick: {
                setSelected: !0
            },
            slidingSubmenus: !0
        }, e[t].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            },
            clone: !1,
            openingInterval: 25,
            panelNodetype: "ul, ol, div",
            transitionDuration: 400
        }, e[t].prototype = {
            init: function(e) {
                this.initPanels(e)
            },
            initPanels: function(e) {
                e = e.not("." + i.nopanel), e = this._initPanels(e), this.opts.initPanels.call(this, e), this.trigger("initPanels", e), this.trigger("update")
            },
            update: function() {
                this.trigger("update")
            },
            setSelected: function(e) {
                this.$menu.find("." + i.listview).children().removeClass(i.selected), e.addClass(i.selected), this.trigger("setSelected", e)
            },
            openPanel: function(n) {
                var s = n.parent(),
                    a = this;
                if (s.hasClass(i.vertical)) {
                    var o = s.parents("." + i.subopened);
                    if (o.length) return void this.openPanel(o.first());
                    s.addClass(i.opened), this.trigger("openPanel", n), this.trigger("openingPanel", n), this.trigger("openedPanel", n)
                } else {
                    if (n.hasClass(i.current)) return;
                    var r = this.$pnls.children("." + i.panel),
                        l = r.filter("." + i.current);
                    r.removeClass(i.highest).removeClass(i.current).not(n).not(l).not("." + i.vertical).addClass(i.hidden), e[t].support.csstransitions || l.addClass(i.hidden), n.hasClass(i.opened) ? n.nextAll("." + i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened) : (n.addClass(i.highest), l.addClass(i.subopened)), n.removeClass(i.hidden).addClass(i.current), a.trigger("openPanel", n), setTimeout(function() {
                        n.removeClass(i.subopened).addClass(i.opened), a.trigger("openingPanel", n), a.__transitionend(n, function() {
                            a.trigger("openedPanel", n)
                        }, a.conf.transitionDuration)
                    }, this.conf.openingInterval)
                }
            },
            closePanel: function(e) {
                var n = e.parent();
                n.hasClass(i.vertical) && (n.removeClass(i.opened), this.trigger("closePanel", e), this.trigger("closingPanel", e), this.trigger("closedPanel", e))
            },
            closeAllPanels: function() {
                this.$menu.find("." + i.listview).children().removeClass(i.selected).filter("." + i.vertical).removeClass(i.opened);
                var e = this.$pnls.children("." + i.panel),
                    n = e.first();
                this.$pnls.children("." + i.panel).not(n).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden), this.openPanel(n)
            },
            togglePanel: function(e) {
                var n = e.parent();
                n.hasClass(i.vertical) && this[n.hasClass(i.opened) ? "closePanel" : "openPanel"](e)
            },
            getInstance: function() {
                return this
            },
            bind: function(e, n) {
                e = "init" == e ? "initPanels" : e, this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(n)
            },
            trigger: function() {
                var e = this,
                    n = Array.prototype.slice.call(arguments),
                    t = n.shift();
                if (t = "init" == t ? "initPanels" : t, this.cbck[t])
                    for (var s = 0, i = this.cbck[t].length; i > s; s++) this.cbck[t][s].apply(e, n)
            },
            _initMenu: function() {
                this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                    e(this).attr("id", i.mm(e(this).attr("id")))
                })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = e('<div class="' + i.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(i.wrapper);
                var n = [i.menu];
                this.opts.slidingSubmenus || n.push(i.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && n.push(this.opts.extensions), this.$menu.addClass(n.join(" "))
            },
            _initPanels: function(n) {
                var t = this,
                    s = this.__findAddBack(n, "ul, ol");
                this.__refactorClass(s, this.conf.classNames.inset, "inset").addClass(i.nolistview + " " + i.nopanel), s.not("." + i.nolistview).addClass(i.listview);
                var o = this.__findAddBack(n, "." + i.listview).children();
                this.__refactorClass(o, this.conf.classNames.selected, "selected"), this.__refactorClass(o, this.conf.classNames.divider, "divider"), this.__refactorClass(o, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(n, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                var r = e(),
                    l = n.add(n.find("." + i.panel)).add(this.__findAddBack(n, "." + i.listview).children().children(this.conf.panelNodetype)).not("." + i.nopanel);
                this.__refactorClass(l, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || l.addClass(i.vertical), l.each(function() {
                    var n = e(this),
                        s = n;
                    n.is("ul, ol") ? (n.wrap('<div class="' + i.panel + '" />'), s = n.parent()) : s.addClass(i.panel);
                    var a = n.attr("id");
                    n.removeAttr("id"), s.attr("id", a || t.__getUniqueId()), n.hasClass(i.vertical) && (n.removeClass(t.conf.classNames.vertical), s.add(s.parent()).addClass(i.vertical)), r = r.add(s)
                });
                var d = e("." + i.panel, this.$menu);
                r.each(function(n) {
                    var s, o, r = e(this),
                        l = r.parent(),
                        d = l.children("a, span").first();
                    if (l.is("." + i.panels) || (l.data(a.child, r), r.data(a.parent, l)), l.children("." + i.next).length || l.parent().is("." + i.listview) && (s = r.attr("id"), o = e('<a class="' + i.next + '" href="#' + s + '" data-target="#' + s + '" />').insertBefore(d), d.is("span") && o.addClass(i.fullsubopen)), !r.children("." + i.navbar).length && !l.hasClass(i.vertical)) {
                        l.parent().is("." + i.listview) ? l = l.closest("." + i.panel) : (d = l.closest("." + i.panel).find('a[href="#' + r.attr("id") + '"]').first(), l = d.closest("." + i.panel));
                        var c = !1,
                            h = e('<div class="' + i.navbar + '" />');
                        if (t.opts.navbar.add && r.addClass(i.hasnavbar), l.length) {
                            switch (s = l.attr("id"), t.opts.navbar.titleLink) {
                                case "anchor":
                                    c = d.attr("href");
                                    break;
                                case "panel":
                                case "parent":
                                    c = "#" + s;
                                    break;
                                default:
                                    c = !1
                            }
                            h.append('<a class="' + i.btn + " " + i.prev + '" href="#' + s + '" data-target="#' + s + '" />').append(e('<a class="' + i.title + '"' + (c ? ' href="' + c + '"' : "") + " />").text(d.text())).prependTo(r)
                        } else t.opts.navbar.title && h.append('<a class="' + i.title + '">' + t.opts.navbar.title + "</a>").prependTo(r)
                    }
                });
                var c = this.__findAddBack(n, "." + i.listview).children("." + i.selected).removeClass(i.selected).last().addClass(i.selected);
                c.add(c.parentsUntil("." + i.menu, "li")).filter("." + i.vertical).addClass(i.opened).end().each(function() {
                    e(this).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).addClass(i.subopened)
                }), c.children("." + i.panel).not("." + i.vertical).addClass(i.opened).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).addClass(i.subopened);
                var h = d.filter("." + i.opened);
                return h.length || (h = r.first()), h.addClass(i.opened).last().addClass(i.current), r.not("." + i.vertical).not(h.last()).addClass(i.hidden).end().filter(function() {
                    return !e(this).parent().hasClass(i.panels)
                }).appendTo(this.$pnls), r
            },
            _initAnchors: function() {
                var n = this;
                r.$body.on(o.click + "-oncanvas", "a[href]", function(s) {
                    var a = e(this),
                        o = !1,
                        r = n.$menu.find(a).length;
                    for (var l in e[t].addons)
                        if (e[t].addons[l].clickAnchor.call(n, a, r)) {
                            o = !0;
                            break
                        }
                    var d = a.attr("href");
                    if (!o && r && d.length > 1 && "#" == d.slice(0, 1)) try {
                        var c = e(d, n.$menu);
                        c.is("." + i.panel) && (o = !0, n[a.parent().hasClass(i.vertical) ? "togglePanel" : "openPanel"](c))
                    } catch (h) {}
                    if (o && s.preventDefault(), !o && r && a.is("." + i.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
                        n.__valueOrFn(n.opts.onClick.setSelected, a) && n.setSelected(e(s.target).parent());
                        var u = n.__valueOrFn(n.opts.onClick.preventDefault, a, "#" == d.slice(0, 1));
                        u && s.preventDefault(), n.__valueOrFn(n.opts.onClick.close, a, u) && n.close()
                    }
                })
            },
            _initAddons: function() {
                var n;
                for (n in e[t].addons) e[t].addons[n].add.call(this), e[t].addons[n].add = function() {};
                for (n in e[t].addons) e[t].addons[n].setup.call(this)
            },
            _getOriginalMenuId: function() {
                var e = this.$menu.attr("id");
                return e && e.length && this.conf.clone && (e = i.umm(e)), e
            },
            __api: function() {
                var n = this,
                    t = {};
                return e.each(this._api, function(e) {
                    var s = this;
                    t[s] = function() {
                        var e = n[s].apply(n, arguments);
                        return "undefined" == typeof e ? t : e
                    }
                }), t
            },
            __valueOrFn: function(e, n, t) {
                return "function" == typeof e ? e.call(n[0]) : "undefined" == typeof e && "undefined" != typeof t ? t : e
            },
            __refactorClass: function(e, n, t) {
                return e.filter("." + n).removeClass(n).addClass(i[t])
            },
            __findAddBack: function(e, n) {
                return e.find(n).add(e.filter(n))
            },
            __filterListItems: function(e) {
                return e.not("." + i.divider).not("." + i.hidden)
            },
            __transitionend: function(n, t, s) {
                var i = !1,
                    a = function(s) {
                        if ("undefined" != typeof s) {
                            if (!e(s.target).is(n)) return !1;
                            n.unbind(o.transitionend), n.unbind(o.webkitTransitionEnd)
                        }
                        i || t.call(n[0]), i = !0
                    };
                n.on(o.transitionend, a), n.on(o.webkitTransitionEnd, a), setTimeout(a, 1.1 * s)
            },
            __getUniqueId: function() {
                return i.mm(e[t].uniqueId++)
            }
        }, e.fn[t] = function(s, i) {
            n(), s = e.extend(!0, {}, e[t].defaults, s), i = e.extend(!0, {}, e[t].configuration, i);
            var a = e();
            return this.each(function() {
                var n = e(this);
                if (!n.data(t)) {
                    var o = new e[t](n, s, i);
                    o.$menu.data(t, o.__api()), a = a.add(o.$menu)
                }
            }), a
        }, e[t].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
            csstransitions: function() {
                if ("undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransitions) return Modernizr.csstransitions;
                var e = document.body || document.documentElement,
                    n = e.style,
                    t = "transition";
                if ("string" == typeof n[t]) return !0;
                var s = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                t = t.charAt(0).toUpperCase() + t.substr(1);
                for (var i = 0; i < s.length; i++)
                    if ("string" == typeof n[s[i] + t]) return !0;
                return !1
            }(),
            csstransforms: function() {
                return "undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransforms ? Modernizr.csstransforms : !0
            }(),
            csstransforms3d: function() {
                return "undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransforms3d ? Modernizr.csstransforms3d : !0
            }()
        };
        var i, a, o, r
    }
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "offCanvas";
    e[n].addons[t] = {
        setup: function() {
            if (this.opts[t]) {
                var i = this.opts[t],
                    a = this.conf[t];
                o = e[n].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), ("top" == i.position || "bottom" == i.position) && (i.zposition = "front"), "string" != typeof a.pageSelector && (a.pageSelector = "> " + a.pageNodetype), o.$allMenus = (o.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
                var r = [s.offcanvas];
                "left" != i.position && r.push(s.mm(i.position)), "back" != i.zposition && r.push(s.mm(i.zposition)), this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper), e[n].support.csstransforms || this.$menu.addClass(s["no-csstransforms"]), e[n].support.csstransforms3d || this.$menu.addClass(s["no-csstransforms3d"]), this.setPage(o.$page), this._initBlocker(), this["_initWindow_" + t](), this.$menu[a.menuInjectMethod + "To"](a.menuWrapperSelector);
                var l = window.location.hash;
                if (l) {
                    var d = this._getOriginalMenuId();
                    d && d == l.slice(1) && this.open()
                }
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), i.add("style"), a.add("resize")
        },
        clickAnchor: function(e, n) {
            var i = this;
            if (this.opts[t]) {
                var a = this._getOriginalMenuId();
                if (a && e.is('[href="#' + a + '"]')) {
                    if (n) return !0;
                    var r = e.closest("." + s.menu);
                    if (r.length) {
                        var l = r.data("mmenu");
                        if (l && l.close) return l.close(), i.__transitionend(r, function() {
                            i.open()
                        }, i.conf.transitionDuration), !0
                    }
                    return this.open(), !0
                }
                if (o.$page) return a = o.$page.first().attr("id"), a && e.is('[href="#' + a + '"]') ? (this.close(), !0) : void 0
            }
        }
    }, e[n].defaults[t] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0
    }, e[n].configuration[t] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    }, e[n].prototype.open = function() {
        if (!this.vars.opened) {
            var e = this;
            this._openSetup(), setTimeout(function() {
                e._openFinish()
            }, this.conf.openingInterval), this.trigger("open")
        }
    }, e[n].prototype._openSetup = function() {
        var n = this,
            r = this.opts[t];
        this.closeAllOthers(), o.$page.each(function() {
            e(this).data(i.style, e(this).attr("style") || "")
        }), o.$wndw.trigger(a.resize + "-" + t, [!0]);
        var l = [s.opened];
        r.blockUI && l.push(s.blocking), "modal" == r.blockUI && l.push(s.modal), r.moveBackground && l.push(s.background), "left" != r.position && l.push(s.mm(this.opts[t].position)), "back" != r.zposition && l.push(s.mm(this.opts[t].zposition)), this.opts.extensions && l.push(this.opts.extensions), o.$html.addClass(l.join(" ")), setTimeout(function() {
            n.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(s.current + " " + s.opened)
    }, e[n].prototype._openFinish = function() {
        var e = this;
        this.__transitionend(o.$page.first(), function() {
            e.trigger("opened")
        }, this.conf.transitionDuration), o.$html.addClass(s.opening), this.trigger("opening")
    }, e[n].prototype.close = function() {
        if (this.vars.opened) {
            var n = this;
            this.__transitionend(o.$page.first(), function() {
                n.$menu.removeClass(s.current + " " + s.opened);
                var a = [s.opened, s.blocking, s.modal, s.background, s.mm(n.opts[t].position), s.mm(n.opts[t].zposition)];
                n.opts.extensions && a.push(n.opts.extensions), o.$html.removeClass(a.join(" ")), o.$page.each(function() {
                    e(this).attr("style", e(this).data(i.style))
                }), n.vars.opened = !1, n.trigger("closed")
            }, this.conf.transitionDuration), o.$html.removeClass(s.opening), this.trigger("close"), this.trigger("closing")
        }
    }, e[n].prototype.closeAllOthers = function() {
        o.$allMenus.not(this.$menu).each(function() {
            var t = e(this).data(n);
            t && t.close && t.close()
        })
    }, e[n].prototype.setPage = function(n) {
        var i = this,
            a = this.conf[t];
        n && n.length || (n = o.$body.find(a.pageSelector), a.noPageSelector.length && (n = n.not(a.noPageSelector.join(", "))), n.length > 1 && a.wrapPageIfNeeded && (n = n.wrapAll("<" + this.conf[t].pageNodetype + " />").parent())), n.each(function() {
            e(this).attr("id", e(this).attr("id") || i.__getUniqueId())
        }), n.addClass(s.page + " " + s.slideout), o.$page = n, this.trigger("setPage", n)
    }, e[n].prototype["_initWindow_" + t] = function() {
        o.$wndw.off(a.keydown + "-" + t).on(a.keydown + "-" + t, function(e) {
            return o.$html.hasClass(s.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
        });
        var e = 0;
        o.$wndw.off(a.resize + "-" + t).on(a.resize + "-" + t, function(n, t) {
            if (1 == o.$page.length && (t || o.$html.hasClass(s.opened))) {
                var i = o.$wndw.height();
                (t || i != e) && (e = i, o.$page.css("minHeight", i))
            }
        })
    }, e[n].prototype._initBlocker = function() {
        var n = this;
        this.opts[t].blockUI && (o.$blck || (o.$blck = e('<div id="' + s.blocker + '" class="' + s.slideout + '" />')), o.$blck.appendTo(o.$body).off(a.touchstart + "-" + t + " " + a.touchmove + "-" + t).on(a.touchstart + "-" + t + " " + a.touchmove + "-" + t, function(e) {
            e.preventDefault(), e.stopPropagation(), o.$blck.trigger(a.mousedown + "-" + t)
        }).off(a.mousedown + "-" + t).on(a.mousedown + "-" + t, function(e) {
            e.preventDefault(), o.$html.hasClass(s.modal) || (n.closeAllOthers(), n.close())
        }))
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "scrollBugFix";
    e[n].addons[t] = {
        setup: function() {
            var i = this,
                r = this.opts[t];
            this.conf[t];
            if (o = e[n].glbl, e[n].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof r && (r = {
                    fix: r
                }), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), r.fix)) {
                var l = this.$menu.attr("id"),
                    d = !1;
                this.bind("opening", function() {
                    this.$pnls.children("." + s.current).scrollTop(0)
                }), o.$docu.on(a.touchmove, function(e) {
                    i.vars.opened && e.preventDefault()
                }), o.$body.on(a.touchstart, "#" + l + "> ." + s.panels + "> ." + s.current, function(e) {
                    i.vars.opened && (d || (d = !0, 0 === e.currentTarget.scrollTop ? e.currentTarget.scrollTop = 1 : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && (e.currentTarget.scrollTop -= 1), d = !1))
                }).on(a.touchmove, "#" + l + "> ." + s.panels + "> ." + s.current, function(n) {
                    i.vars.opened && e(this)[0].scrollHeight > e(this).innerHeight() && n.stopPropagation()
                }), o.$wndw.on(a.orientationchange, function() {
                    i.$pnls.children("." + s.current).scrollTop(0).css({
                        "-webkit-overflow-scrolling": "auto"
                    }).css({
                        "-webkit-overflow-scrolling": "touch"
                    })
                })
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e
        },
        clickAnchor: function(e, n) {}
    }, e[n].defaults[t] = {
        fix: !0
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "autoHeight";
    e[n].addons[t] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var i = this.opts[t];
                this.conf[t];
                if (o = e[n].glbl, "boolean" == typeof i && i && (i = {
                        height: "auto"
                    }), "string" == typeof i && (i = {
                        height: i
                    }), "object" != typeof i && (i = {}), i = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], i), "auto" == i.height || "highest" == i.height) {
                    this.$menu.addClass(s.autoheight);
                    var a = function(n) {
                        if (this.vars.opened) {
                            var t = parseInt(this.$pnls.css("top"), 10) || 0,
                                a = parseInt(this.$pnls.css("bottom"), 10) || 0,
                                o = 0;
                            this.$menu.addClass(s.measureheight), "auto" == i.height ? (n = n || this.$pnls.children("." + s.current), n.is("." + s.vertical) && (n = n.parents("." + s.panel).not("." + s.vertical).first()), o = n.outerHeight()) : "highest" == i.height && this.$pnls.children().each(function() {
                                var n = e(this);
                                n.is("." + s.vertical) && (n = n.parents("." + s.panel).not("." + s.vertical).first()), o = Math.max(o, n.outerHeight())
                            }), this.$menu.height(o + t + a).removeClass(s.measureheight)
                        }
                    };
                    this.bind("opening", a), "highest" == i.height && this.bind("initPanels", a), "auto" == i.height && (this.bind("update", a), this.bind("openPanel", a), this.bind("closePanel", a))
                }
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("autoheight measureheight"), a.add("resize")
        },
        clickAnchor: function(e, n) {}
    }, e[n].defaults[t] = {
        height: "default"
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "backButton";
    e[n].addons[t] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var i = this,
                    a = this.opts[t];
                this.conf[t];
                if (o = e[n].glbl, "boolean" == typeof a && (a = {
                        close: a
                    }), "object" != typeof a && (a = {}), a = e.extend(!0, {}, e[n].defaults[t], a), a.close) {
                    var r = "#" + i.$menu.attr("id");
                    this.bind("opened", function(e) {
                        location.hash != r && history.pushState(null, document.title, r)
                    }), e(window).on("popstate", function(e) {
                        o.$html.hasClass(s.opened) ? (e.stopPropagation(), i.close()) : location.hash == r && (e.stopPropagation(), i.open())
                    })
                }
            }
        },
        add: function() {
            return window.history && window.history.pushState ? (s = e[n]._c, i = e[n]._d, void(a = e[n]._e)) : void(e[n].addons[t].setup = function() {})
        },
        clickAnchor: function(e, n) {}
    }, e[n].defaults[t] = {
        close: !1
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "columns";
    e[n].addons[t] = {
        setup: function() {
            var i = this.opts[t];
            this.conf[t];
            if (o = e[n].glbl, "boolean" == typeof i && (i = {
                    add: i
                }), "number" == typeof i && (i = {
                    add: !0,
                    visible: i
                }), "object" != typeof i && (i = {}), "number" == typeof i.visible && (i.visible = {
                    min: i.visible,
                    max: i.visible
                }), i = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], i), i.add) {
                i.visible.min = Math.max(1, Math.min(6, i.visible.min)), i.visible.max = Math.max(i.visible.min, Math.min(6, i.visible.max)), this.$menu.addClass(s.columns);
                for (var a = this.opts.offCanvas ? this.$menu.add(o.$html) : this.$menu, r = [], l = 0; l <= i.visible.max; l++) r.push(s.columns + "-" + l);
                r = r.join(" ");
                var d = function(e) {
                        u.call(this, this.$pnls.children("." + s.current))
                    },
                    c = function() {
                        var e = this.$pnls.children("." + s.panel).filter("." + s.opened).length;
                        e = Math.min(i.visible.max, Math.max(i.visible.min, e)), a.removeClass(r).addClass(s.columns + "-" + e)
                    },
                    h = function() {
                        this.opts.offCanvas && o.$html.removeClass(r)
                    },
                    u = function(n) {
                        this.$pnls.children("." + s.panel).removeClass(r).filter("." + s.subopened).removeClass(s.hidden).add(n).slice(-i.visible.max).each(function(n) {
                            e(this).addClass(s.columns + "-" + n)
                        })
                    };
                this.bind("open", c), this.bind("close", h), this.bind("initPanels", d), this.bind("openPanel", u), this.bind("openingPanel", c), this.bind("openedPanel", c), this.opts.offCanvas || c.call(this)
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("columns")
        },
        clickAnchor: function(n, i) {
            if (!this.opts[t].add) return !1;
            if (i) {
                var a = n.attr("href");
                if (a.length > 1 && "#" == a.slice(0, 1)) try {
                    var o = e(a, this.$menu);
                    if (o.is("." + s.panel))
                        for (var r = parseInt(n.closest("." + s.panel).attr("class").split(s.columns + "-")[1].split(" ")[0], 10) + 1; r !== !1;) {
                            var l = this.$pnls.children("." + s.columns + "-" + r);
                            if (!l.length) {
                                r = !1;
                                break
                            }
                            r++, l.removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden)
                        }
                } catch (d) {}
            }
        }
    }, e[n].defaults[t] = {
        add: !1,
        visible: {
            min: 1,
            max: 3
        }
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "counters";
    e[n].addons[t] = {
        setup: function() {
            var a = this,
                r = this.opts[t];
            this.conf[t];
            o = e[n].glbl, "boolean" == typeof r && (r = {
                add: r,
                update: r
            }), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), this.bind("initPanels", function(n) {
                this.__refactorClass(e("em", n), this.conf.classNames[t].counter, "counter")
            }), r.add && this.bind("initPanels", function(n) {
                var t;
                switch (r.addTo) {
                    case "panels":
                        t = n;
                        break;
                    default:
                        t = n.filter(r.addTo)
                }
                t.each(function() {
                    var n = e(this).data(i.parent);
                    n && (n.children("em." + s.counter).length || n.prepend(e('<em class="' + s.counter + '" />')))
                })
            }), r.update && this.bind("update", function() {
                this.$pnls.find("." + s.panel).each(function() {
                    var n = e(this),
                        t = n.data(i.parent);
                    if (t) {
                        var o = t.children("em." + s.counter);
                        o.length && (n = n.children("." + s.listview), n.length && o.html(a.__filterListItems(n.children()).length))
                    }
                })
            })
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("counter search noresultsmsg")
        },
        clickAnchor: function(e, n) {}
    }, e[n].defaults[t] = {
        add: !1,
        addTo: "panels",
        update: !1
    }, e[n].configuration.classNames[t] = {
        counter: "Counter"
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "dividers";
    e[n].addons[t] = {
        setup: function() {
            var i = this,
                r = this.opts[t];
            this.conf[t];
            if (o = e[n].glbl, "boolean" == typeof r && (r = {
                    add: r,
                    fixed: r
                }), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), this.bind("initPanels", function(n) {
                    this.__refactorClass(e("li", this.$menu), this.conf.classNames[t].collapsed, "collapsed")
                }), r.add && this.bind("initPanels", function(n) {
                    var t;
                    switch (r.addTo) {
                        case "panels":
                            t = n;
                            break;
                        default:
                            t = n.filter(r.addTo)
                    }
                    e("." + s.divider, t).remove(), t.find("." + s.listview).not("." + s.vertical).each(function() {
                        var n = "";
                        i.__filterListItems(e(this).children()).each(function() {
                            var t = e.trim(e(this).children("a, span").text()).slice(0, 1).toLowerCase();
                            t != n && t.length && (n = t, e('<li class="' + s.divider + '">' + t + "</li>").insertBefore(this))
                        })
                    })
                }), r.collapse && this.bind("initPanels", function(n) {
                    e("." + s.divider, n).each(function() {
                        var n = e(this),
                            t = n.nextUntil("." + s.divider, "." + s.collapsed);
                        t.length && (n.children("." + s.subopen).length || (n.wrapInner("<span />"), n.prepend('<a href="#" class="' + s.subopen + " " + s.fullsubopen + '" />')))
                    })
                }), r.fixed) {
                var l = function(n) {
                    n = n || this.$pnls.children("." + s.current);
                    var t = n.find("." + s.divider).not("." + s.hidden);
                    if (t.length) {
                        this.$menu.addClass(s.hasdividers);
                        var i = n.scrollTop() || 0,
                            a = "";
                        n.is(":visible") && n.find("." + s.divider).not("." + s.hidden).each(function() {
                            e(this).position().top + i < i + 1 && (a = e(this).text())
                        }), this.$fixeddivider.text(a)
                    } else this.$menu.removeClass(s.hasdividers)
                };
                this.$fixeddivider = e('<ul class="' + s.listview + " " + s.fixeddivider + '"><li class="' + s.divider + '"></li></ul>').prependTo(this.$pnls).children(), this.bind("openPanel", l), this.bind("update", l), this.bind("initPanels", function(n) {
                    n.off(a.scroll + "-dividers " + a.touchmove + "-dividers").on(a.scroll + "-dividers " + a.touchmove + "-dividers", function(n) {
                        l.call(i, e(this))
                    })
                })
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("collapsed uncollapsed fixeddivider hasdividers"), a.add("scroll")
        },
        clickAnchor: function(e, n) {
            if (this.opts[t].collapse && n) {
                var i = e.parent();
                if (i.is("." + s.divider)) {
                    var a = i.nextUntil("." + s.divider, "." + s.collapsed);
                    return i.toggleClass(s.opened), a[i.hasClass(s.opened) ? "addClass" : "removeClass"](s.uncollapsed), !0
                }
            }
            return !1
        }
    }, e[n].defaults[t] = {
        add: !1,
        addTo: "panels",
        fixed: !1,
        collapse: !1
    }, e[n].configuration.classNames[t] = {
        collapsed: "Collapsed"
    };
    var s, i, a, o
}(jQuery),
function(e) {
    function n(e, n, t) {
        return n > e && (e = n), e > t && (e = t), e
    }

    function t(t, s, i) {
        var r, l, d, c, h, u = this,
            f = {},
            p = 0,
            v = !1,
            m = !1,
            b = 0,
            g = 0;
        switch (this.opts.offCanvas.position) {
            case "left":
            case "right":
                f.events = "panleft panright", f.typeLower = "x", f.typeUpper = "X", m = "width";
                break;
            case "top":
            case "bottom":
                f.events = "panup pandown", f.typeLower = "y", f.typeUpper = "Y", m = "height"
        }
        switch (this.opts.offCanvas.position) {
            case "right":
            case "bottom":
                f.negative = !0, c = function(e) {
                    e >= i.$wndw[m]() - t.maxStartPos && (p = 1)
                };
                break;
            default:
                f.negative = !1, c = function(e) {
                    e <= t.maxStartPos && (p = 1)
                }
        }
        switch (this.opts.offCanvas.position) {
            case "left":
                f.open_dir = "right", f.close_dir = "left";
                break;
            case "right":
                f.open_dir = "left", f.close_dir = "right";
                break;
            case "top":
                f.open_dir = "down", f.close_dir = "up";
                break;
            case "bottom":
                f.open_dir = "up", f.close_dir = "down"
        }
        switch (this.opts.offCanvas.zposition) {
            case "front":
                h = function() {
                    return this.$menu
                };
                break;
            default:
                h = function() {
                    return e("." + o.slideout)
                }
        }
        var _ = this.__valueOrFn(t.node, this.$menu, i.$page);
        "string" == typeof _ && (_ = e(_));
        var C = new Hammer(_[0], this.opts[a].vendors.hammer);
        C.on("panstart", function(e) {
            c(e.center[f.typeLower]), i.$slideOutNodes = h(), v = f.open_dir
        }).on(f.events + " panend", function(e) {
            p > 0 && e.preventDefault()
        }).on(f.events, function(e) {
            if (r = e["delta" + f.typeUpper], f.negative && (r = -r), r != b && (v = r >= b ? f.open_dir : f.close_dir), b = r, b > t.threshold && 1 == p) {
                if (i.$html.hasClass(o.opened)) return;
                p = 2, u._openSetup(), u.trigger("opening"), i.$html.addClass(o.dragging), g = n(i.$wndw[m]() * s[m].perc, s[m].min, s[m].max)
            }
            2 == p && (l = n(b, 10, g) - ("front" == u.opts.offCanvas.zposition ? g : 0), f.negative && (l = -l), d = "translate" + f.typeUpper + "(" + l + "px )", i.$slideOutNodes.css({
                "-webkit-transform": "-webkit-" + d,
                transform: d
            }))
        }).on("panend", function(e) {
            2 == p && (i.$html.removeClass(o.dragging), i.$slideOutNodes.css("transform", ""), u[v == f.open_dir ? "_openFinish" : "close"]()), p = 0
        })
    }

    function s(n, t, s, i) {
        var l = this;
        n.each(function() {
            var n = e(this),
                t = n.data(r.parent);
            if (t && (t = t.closest("." + o.panel), t.length)) {
                var s = new Hammer(n[0], l.opts[a].vendors.hammer);
                s.on("panright", function(e) {
                    l.openPanel(t)
                })
            }
        })
    }
    var i = "mmenu",
        a = "drag";
    e[i].addons[a] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var n = this.opts[a],
                    o = this.conf[a];
                d = e[i].glbl, "boolean" == typeof n && (n = {
                    menu: n,
                    panels: n
                }), "object" != typeof n && (n = {}), "boolean" == typeof n.menu && (n.menu = {
                    open: n.menu
                }), "object" != typeof n.menu && (n.menu = {}), "boolean" == typeof n.panels && (n.panels = {
                    close: n.panels
                }), "object" != typeof n.panels && (n.panels = {}), n = this.opts[a] = e.extend(!0, {}, e[i].defaults[a], n), n.menu.open && t.call(this, n.menu, o.menu, d), n.panels.close && this.bind("initPanels", function(e) {
                    s.call(this, e, n.panels, o.panels, d)
                })
            }
        },
        add: function() {
            return "function" != typeof Hammer || Hammer.VERSION < 2 ? void(e[i].addons[a].setup = function() {}) : (o = e[i]._c, r = e[i]._d, l = e[i]._e, void o.add("dragging"))
        },
        clickAnchor: function(e, n) {}
    }, e[i].defaults[a] = {
        menu: {
            open: !1,
            maxStartPos: 100,
            threshold: 50
        },
        panels: {
            close: !1
        },
        vendors: {
            hammer: {}
        }
    }, e[i].configuration[a] = {
        menu: {
            width: {
                perc: .8,
                min: 140,
                max: 440
            },
            height: {
                perc: .8,
                min: 140,
                max: 880
            }
        },
        panels: {}
    };
    var o, r, l, d
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "dropdown";
    e[n].addons[t] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var r = this,
                    l = this.opts[t],
                    d = this.conf[t];
                if (o = e[n].glbl, "boolean" == typeof l && l && (l = {
                        drop: l
                    }), "object" != typeof l && (l = {}), "string" == typeof l.position && (l.position = {
                        of: l.position
                    }), l = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], l), l.drop) {
                    if ("string" != typeof l.position.of) {
                        var c = this.$menu.attr("id");
                        c && c.length && (this.conf.clone && (c = s.umm(c)), l.position.of = '[href="#' + c + '"]')
                    }
                    if ("string" == typeof l.position.of) {
                        var h = e(l.position.of);
                        if (h.length) {
                            this.$menu.addClass(s.dropdown), l.tip && this.$menu.addClass(s.tip), l.event = l.event.split(" "), 1 == l.event.length && (l.event[1] = l.event[0]), "hover" == l.event[0] && h.on(a.mouseenter + "-dropdown", function() {
                                r.open()
                            }), "hover" == l.event[1] && this.$menu.on(a.mouseleave + "-dropdown", function() {
                                r.close()
                            }), this.bind("opening", function() {
                                this.$menu.data(i.style, this.$menu.attr("style") || ""), o.$html.addClass(s.dropdown)
                            }), this.bind("closed", function() {
                                this.$menu.attr("style", this.$menu.data(i.style)), o.$html.removeClass(s.dropdown)
                            });
                            var u = function(i, a) {
                                    var r = a[0],
                                        c = a[1],
                                        u = "x" == i ? "scrollLeft" : "scrollTop",
                                        f = "x" == i ? "outerWidth" : "outerHeight",
                                        p = "x" == i ? "left" : "top",
                                        v = "x" == i ? "right" : "bottom",
                                        m = "x" == i ? "width" : "height",
                                        b = "x" == i ? "maxWidth" : "maxHeight",
                                        g = null,
                                        _ = o.$wndw[u](),
                                        C = h.offset()[p] -= _,
                                        y = C + h[f](),
                                        $ = o.$wndw[m](),
                                        w = d.offset.button[i] + d.offset.viewport[i];
                                    if (l.position[i]) switch (l.position[i]) {
                                        case "left":
                                        case "bottom":
                                            g = "after";
                                            break;
                                        case "right":
                                        case "top":
                                            g = "before"
                                    }
                                    null === g && (g = $ / 2 > C + (y - C) / 2 ? "after" : "before");
                                    var x, k;
                                    return "after" == g ? (x = "x" == i ? C : y, k = $ - (x + w), r[p] = x + d.offset.button[i], r[v] = "auto", c.push(s["x" == i ? "tipleft" : "tiptop"])) : (x = "x" == i ? y : C, k = x - w, r[v] = "calc( 100% - " + (x - d.offset.button[i]) + "px )", r[p] = "auto", c.push(s["x" == i ? "tipright" : "tipbottom"])), r[b] = Math.min(e[n].configuration[t][m].max, k), [r, c]
                                },
                                f = function(e) {
                                    if (this.vars.opened) {
                                        this.$menu.attr("style", this.$menu.data(i.style));
                                        var n = [{},
                                            []
                                        ];
                                        n = u.call(this, "y", n), n = u.call(this, "x", n), this.$menu.css(n[0]), l.tip && this.$menu.removeClass(s.tipleft + " " + s.tipright + " " + s.tiptop + " " + s.tipbottom).addClass(n[1].join(" "))
                                    }
                                };
                            this.bind("opening", f), o.$wndw.on(a.resize + "-dropdown", function(e) {
                                f.call(r)
                            }), this.opts.offCanvas.blockUI || o.$wndw.on(a.scroll + "-dropdown", function(e) {
                                f.call(r)
                            })
                        }
                    }
                }
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("dropdown tip tipleft tipright tiptop tipbottom"), a.add("mouseenter mouseleave resize scroll")
        },
        clickAnchor: function(e, n) {}
    }, e[n].defaults[t] = {
        drop: !1,
        event: "click",
        position: {},
        tip: !0
    }, e[n].configuration[t] = {
        offset: {
            button: {
                x: -10,
                y: 10
            },
            viewport: {
                x: 20,
                y: 20
            }
        },
        height: {
            max: 880
        },
        width: {
            max: 440
        }
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "fixedElements";
    e[n].addons[t] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var s = this.opts[t];
                this.conf[t];
                o = e[n].glbl, s = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], s);
                var i = function(e) {
                    var n = this.conf.classNames[t].fixed;
                    this.__refactorClass(e.find("." + n), n, "slideout").appendTo(o.$body)
                };
                i.call(this, o.$page), this.bind("setPage", i)
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("fixed")
        },
        clickAnchor: function(e, n) {}
    }, e[n].configuration.classNames[t] = {
        fixed: "Fixed"
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "iconPanels";
    e[n].addons[t] = {
        setup: function() {
            var i = this,
                a = this.opts[t];
            this.conf[t];
            if (o = e[n].glbl, "boolean" == typeof a && (a = {
                    add: a
                }), "number" == typeof a && (a = {
                    add: !0,
                    visible: a
                }), "object" != typeof a && (a = {}), a = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], a), a.visible++, a.add) {
                this.$menu.addClass(s.iconpanel);
                for (var r = [], l = 0; l <= a.visible; l++) r.push(s.iconpanel + "-" + l);
                r = r.join(" ");
                var d = function(n) {
                    n.hasClass(s.vertical) || i.$pnls.children("." + s.panel).removeClass(r).filter("." + s.subopened).removeClass(s.hidden).add(n).not("." + s.vertical).slice(-a.visible).each(function(n) {
                        e(this).addClass(s.iconpanel + "-" + n)
                    })
                };
                this.bind("openPanel", d), this.bind("initPanels", function(n) {
                    d.call(i, i.$pnls.children("." + s.current)), n.not("." + s.vertical).each(function() {
                        e(this).children("." + s.subblocker).length || e(this).prepend('<a href="#' + e(this).closest("." + s.panel).attr("id") + '" class="' + s.subblocker + '" />')
                    })
                })
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("iconpanel subblocker")
        },
        clickAnchor: function(e, n) {}
    }, e[n].defaults[t] = {
        add: !1,
        visible: 3
    };
    var s, i, a, o
}(jQuery),
function(e) {
    function n(n, t) {
        n || (n = this.$pnls.children("." + a.current));
        var s = e();
        "default" == t && (s = n.children("." + a.listview).find("a[href]").not(":hidden"), s.length || (s = n.find(d).not(":hidden")), s.length || (s = this.$menu.children("." + a.navbar).find(d).not(":hidden"))), s.length || (s = this.$menu.children("." + a.tabstart)), s.first().focus()
    }

    function t(e) {
        e || (e = this.$pnls.children("." + a.current));
        var n = this.$pnls.children("." + a.panel),
            t = n.not(e);
        t.find(d).attr("tabindex", -1), e.find(d).attr("tabindex", 0), e.find("input.mm-toggle, input.mm-check").attr("tabindex", -1)
    }
    var s = "mmenu",
        i = "keyboardNavigation";
    e[s].addons[i] = {
        setup: function() {
            var o = this,
                r = this.opts[i];
            this.conf[i];
            if (l = e[s].glbl, ("boolean" == typeof r || "string" == typeof r) && (r = {
                    enable: r
                }), "object" != typeof r && (r = {}), r = this.opts[i] = e.extend(!0, {}, e[s].defaults[i], r), r.enable) {
                r.enhance && this.$menu.addClass(a.keyboardfocus);
                var c = e('<input class="' + a.tabstart + '" tabindex="0" type="text" />'),
                    h = e('<input class="' + a.tabend + '" tabindex="0" type="text" />');
                this.bind("initPanels", function() {
                    this.$menu.prepend(c).append(h).children("." + a.navbar).find(d).attr("tabindex", 0)
                }), this.bind("open", function() {
                    t.call(this), this.__transitionend(this.$menu, function() {
                        n.call(o, null, r.enable)
                    }, this.conf.transitionDuration)
                }), this.bind("openPanel", function(e) {
                    t.call(this, e), this.__transitionend(e, function() {
                        n.call(o, e, r.enable)
                    }, this.conf.transitionDuration)
                }), this["_initWindow_" + i](r.enhance)
            }
        },
        add: function() {
            a = e[s]._c, o = e[s]._d, r = e[s]._e, a.add("tabstart tabend keyboardfocus"), r.add("focusin keydown")
        },
        clickAnchor: function(e, n) {}
    }, e[s].defaults[i] = {
        enable: !1,
        enhance: !1
    }, e[s].configuration[i] = {}, e[s].prototype["_initWindow_" + i] = function(n) {
        l.$wndw.off(r.keydown + "-offCanvas"), l.$wndw.off(r.focusin + "-" + i).on(r.focusin + "-" + i, function(n) {
            if (l.$html.hasClass(a.opened)) {
                var t = e(n.target);
                t.is("." + a.tabend) && t.parent().find("." + a.tabstart).focus()
            }
        }), l.$wndw.off(r.keydown + "-" + i).on(r.keydown + "-" + i, function(n) {
            var t = e(n.target),
                s = t.closest("." + a.menu);
            if (s.length) {
                s.data("mmenu");
                if (t.is("input, textarea"));
                else switch (n.keyCode) {
                    case 13:
                        (t.is(".mm-toggle") || t.is(".mm-check")) && t.trigger(r.click);
                        break;
                    case 32:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        n.preventDefault()
                }
            }
        }), n && l.$wndw.on(r.keydown + "-" + i, function(n) {
            var t = e(n.target),
                s = t.closest("." + a.menu);
            if (s.length) {
                var i = s.data("mmenu");
                if (t.is("input, textarea")) switch (n.keyCode) {
                    case 27:
                        t.val("")
                } else switch (n.keyCode) {
                    case 8:
                        var r = t.closest("." + a.panel).data(o.parent);
                        r && r.length && i.openPanel(r.closest("." + a.panel));
                        break;
                    case 27:
                        s.hasClass(a.offcanvas) && i.close()
                }
            }
        })
    };
    var a, o, r, l, d = "input, select, textarea, button, label, a[href]"
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "lazySubmenus";
    e[n].addons[t] = {
        setup: function() {
            var a = this.opts[t];
            this.conf[t];
            o = e[n].glbl, "boolean" == typeof a && (a = {
                load: a
            }), "object" != typeof a && (a = {}), a = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], a), a.load && (this.$menu.find("li").find("li").children(this.conf.panelNodetype).each(function() {
                e(this).parent().addClass(s.lazysubmenu).data(i.lazysubmenu, this).end().remove()
            }), this.bind("openingPanel", function(n) {
                var t = n.find("." + s.lazysubmenu);
                t.length && (t.each(function() {
                    e(this).append(e(this).data(i.lazysubmenu)).removeData(i.lazysubmenu).removeClass(s.lazysubmenu)
                }), this.initPanels(n))
            }))
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("lazysubmenu"), i.add("lazysubmenu")
        },
        clickAnchor: function(e, n) {}
    }, e[n].defaults[t] = {
        load: !1
    }, e[n].configuration[t] = {};
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "rtl";
    e[n].addons[t] = {
        setup: function() {
            var i = this.opts[t];
            this.conf[t];
            o = e[n].glbl, "object" != typeof i && (i = {
                use: i
            }), i = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], i), "boolean" != typeof i.use && (i.use = "rtl" == (o.$html.attr("dir") || "").toLowerCase()), i.use && this.$menu.addClass(s.rtl)
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("rtl")
        },
        clickAnchor: function(e, n) {}
    }, e[n].defaults[t] = {
        use: "detect"
    };
    var s, i, a, o
}(jQuery),
function(e) {
    function n(e, n, t) {
        e.prop("aria-" + n, t)[t ? "attr" : "removeAttr"]("aria-" + n, "true")
    }

    function t(e) {
        return '<span class="' + a.sronly + '">' + e + "</span>"
    }
    var s = "mmenu",
        i = "screenReader";
    e[s].addons[i] = {
        setup: function() {
            var o = this.opts[i],
                r = this.conf[i];
            if (l = e[s].glbl, "boolean" == typeof o && (o = {
                    aria: o,
                    text: o
                }), "object" != typeof o && (o = {}), o = this.opts[i] = e.extend(!0, {}, e[s].defaults[i], o), o.aria) {
                if (this.opts.offCanvas) {
                    var d = function() {
                            n(this.$menu, "hidden", !1)
                        },
                        c = function() {
                            n(this.$menu, "hidden", !0)
                        };
                    this.bind("open", d), this.bind("close", c), c.call(this)
                }
                var h = function() {
                        n(this.$menu.find("." + a.hidden), "hidden", !0), n(this.$menu.find('[aria-hidden="true"]').not("." + a.hidden), "hidden", !1)
                    },
                    u = function(e) {
                        n(this.$pnls.children("." + a.panel).not(e).not("." + a.hidden), "hidden", !0), n(e, "hidden", !1)
                    };
                this.bind("update", h), this.bind("openPanel", h), this.bind("openPanel", u);
                var f = function(e) {
                    n(e.find("." + a.prev + ", ." + a.next), "haspopup", !0)
                };
                this.bind("initPanels", f), f.call(this, this.$menu.children("." + a.navbar))
            }
            if (o.text) {
                var p = function(n) {
                    n.children("." + a.navbar).children("." + a.prev).html(t(r.text.closeSubmenu)).end().children("." + a.next).html(t(r.text.openSubmenu)).end().children("." + a.close).html(t(r.text.closeMenu)), n.is("." + a.panel) && n.find("." + a.listview).find("." + a.next).each(function() {
                        e(this).html(t(r.text[e(this).parent().is("." + a.vertical) ? "toggleSubmenu" : "openSubmenu"]))
                    })
                };
                this.bind("initPanels", p), p.call(this, this.$menu)
            }
        },
        add: function() {
            a = e[s]._c, o = e[s]._d, r = e[s]._e, a.add("sronly")
        },
        clickAnchor: function(e, n) {}
    }, e[s].defaults[i] = {
        aria: !1,
        text: !1
    }, e[s].configuration[i] = {
        text: {
            closeMenu: "Close menu",
            closeSubmenu: "Close submenu",
            openSubmenu: "Open submenu",
            toggleSubmenu: "Toggle submenu"
        }
    };
    var a, o, r, l
}(jQuery),
function(e) {
    function n(e) {
        switch (e) {
            case 9:
            case 16:
            case 17:
            case 18:
            case 37:
            case 38:
            case 39:
            case 40:
                return !0
        }
        return !1
    }
    var t = "mmenu",
        s = "searchfield";
    e[t].addons[s] = {
        setup: function() {
            var l = this,
                d = this.opts[s],
                c = this.conf[s];
            r = e[t].glbl, "boolean" == typeof d && (d = {
                add: d
            }), "object" != typeof d && (d = {}), "boolean" == typeof d.resultsPanel && (d.resultsPanel = {
                add: d.resultsPanel
            }), d = this.opts[s] = e.extend(!0, {}, e[t].defaults[s], d), c = this.conf[s] = e.extend(!0, {}, e[t].configuration[s], c), this.bind("close", function() {
                this.$menu.find("." + i.search).find("input").blur()
            }), this.bind("initPanels", function(t) {
                if (d.add) {
                    var r;
                    switch (d.addTo) {
                        case "panels":
                            r = t;
                            break;
                        default:
                            r = this.$menu.find(d.addTo)
                    }
                    if (r.each(function() {
                            var n = e(this);
                            if (!n.is("." + i.panel) || !n.is("." + i.vertical)) {
                                if (!n.children("." + i.search).length) {
                                    var t = l.__valueOrFn(c.clear, n),
                                        s = l.__valueOrFn(c.form, n),
                                        a = l.__valueOrFn(c.input, n),
                                        r = l.__valueOrFn(c.submit, n),
                                        h = e("<" + (s ? "form" : "div") + ' class="' + i.search + '" />'),
                                        u = e('<input placeholder="' + d.placeholder + '" type="text" autocomplete="off" />');
                                    h.append(u);
                                    var f;
                                    if (a)
                                        for (f in a) u.attr(f, a[f]);
                                    if (t && e('<a class="' + i.btn + " " + i.clear + '" href="#" />').appendTo(h).on(o.click + "-searchfield", function(e) {
                                            e.preventDefault(), u.val("").trigger(o.keyup + "-searchfield")
                                        }), s) {
                                        for (f in s) h.attr(f, s[f]);
                                        r && !t && e('<a class="' + i.btn + " " + i.next + '" href="#" />').appendTo(h).on(o.click + "-searchfield", function(e) {
                                            e.preventDefault(), h.submit()
                                        })
                                    }
                                    n.hasClass(i.search) ? n.replaceWith(h) : n.prepend(h).addClass(i.hassearch)
                                }
                                if (d.noResults) {
                                    var p = n.closest("." + i.panel).length;
                                    if (p || (n = l.$pnls.children("." + i.panel).first()), !n.children("." + i.noresultsmsg).length) {
                                        var v = n.children("." + i.listview).first();
                                        e('<div class="' + i.noresultsmsg + " " + i.hidden + '" />').append(d.noResults)[v.length ? "insertAfter" : "prependTo"](v.length ? v : n)
                                    }
                                }
                            }
                        }), d.search) {
                        if (d.resultsPanel.add) {
                            d.showSubPanels = !1;
                            var h = this.$pnls.children("." + i.resultspanel);
                            h.length || (h = e('<div class="' + i.panel + " " + i.resultspanel + " " + i.hidden + '" />').appendTo(this.$pnls).append('<div class="' + i.navbar + " " + i.hidden + '"><a class="' + i.title + '">' + d.resultsPanel.title + "</a></div>").append('<ul class="' + i.listview + '" />').append(this.$pnls.find("." + i.noresultsmsg).first().clone()), this.initPanels(h))
                        }
                        this.$menu.find("." + i.search).each(function() {
                            var t, r, c = e(this),
                                u = c.closest("." + i.panel).length;
                            u ? (t = c.closest("." + i.panel), r = t) : (t = e("." + i.panel, l.$menu), r = l.$menu), d.resultsPanel.add && (t = t.not(h));
                            var f = c.children("input"),
                                p = l.__findAddBack(t, "." + i.listview).children("li"),
                                v = p.filter("." + i.divider),
                                m = l.__filterListItems(p),
                                b = "a",
                                g = b + ", span",
                                _ = "",
                                C = function() {
                                    var n = f.val().toLowerCase();
                                    if (n != _) {
                                        if (_ = n, d.resultsPanel.add && h.children("." + i.listview).empty(), t.scrollTop(0), m.add(v).addClass(i.hidden).find("." + i.fullsubopensearch).removeClass(i.fullsubopen + " " + i.fullsubopensearch), m.each(function() {
                                                var n = e(this),
                                                    t = b;
                                                (d.showTextItems || d.showSubPanels && n.find("." + i.next)) && (t = g);
                                                var s = n.data(a.searchtext) || n.children(t).text();
                                                s.toLowerCase().indexOf(_) > -1 && n.add(n.prevAll("." + i.divider).first()).removeClass(i.hidden)
                                            }), d.showSubPanels && t.each(function(n) {
                                                var t = e(this);
                                                l.__filterListItems(t.find("." + i.listview).children()).each(function() {
                                                    var n = e(this),
                                                        t = n.data(a.child);
                                                    n.removeClass(i.nosubresults), t && t.find("." + i.listview).children().removeClass(i.hidden)
                                                })
                                            }), d.resultsPanel.add)
                                            if ("" === _) this.closeAllPanels(), this.openPanel(this.$pnls.children("." + i.subopened).last());
                                            else {
                                                var s = e();
                                                t.each(function() {
                                                    var n = l.__filterListItems(e(this).find("." + i.listview).children()).not("." + i.hidden).clone(!0);
                                                    n.length && (d.resultsPanel.dividers && (s = s.add('<li class="' + i.divider + '">' + e(this).children("." + i.navbar).text() + "</li>")), s = s.add(n))
                                                }), s.find("." + i.next).remove(), h.children("." + i.listview).append(s), this.openPanel(h)
                                            } else e(t.get().reverse()).each(function(n) {
                                            var t = e(this),
                                                s = t.data(a.parent);
                                            s && (l.__filterListItems(t.find("." + i.listview).children()).length ? (s.hasClass(i.hidden) && s.children("." + i.next).not("." + i.fullsubopen).addClass(i.fullsubopen).addClass(i.fullsubopensearch), s.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("." + i.divider).first().removeClass(i.hidden)) : u || (t.hasClass(i.opened) && setTimeout(function() {
                                                l.openPanel(s.closest("." + i.panel))
                                            }, (n + 1) * (1.5 * l.conf.openingInterval)), s.addClass(i.nosubresults)))
                                        });
                                        r.find("." + i.noresultsmsg)[m.not("." + i.hidden).length ? "addClass" : "removeClass"](i.hidden), this.update()
                                    }
                                };
                            f.off(o.keyup + "-" + s + " " + o.change + "-" + s).on(o.keyup + "-" + s, function(e) {
                                n(e.keyCode) || C.call(l)
                            }).on(o.change + "-" + s, function(e) {
                                C.call(l)
                            });
                            var y = c.children("." + i.btn);
                            y.length && f.on(o.keyup + "-" + s, function(e) {
                                y[f.val().length ? "removeClass" : "addClass"](i.hidden)
                            }), f.trigger(o.keyup + "-" + s)
                        })
                    }
                }
            })
        },
        add: function() {
            i = e[t]._c, a = e[t]._d, o = e[t]._e, i.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"), a.add("searchtext"), o.add("change keyup")
        },
        clickAnchor: function(e, n) {}
    }, e[t].defaults[s] = {
        add: !1,
        addTo: "panels",
        placeholder: "Search",
        noResults: "No results found.",
        resultsPanel: {
            add: !1,
            dividers: !0,
            title: "Search results"
        },
        search: !0,
        showTextItems: !1,
        showSubPanels: !0
    }, e[t].configuration[s] = {
        clear: !1,
        form: !1,
        input: !1,
        submit: !1
    };
    var i, a, o, r
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "sectionIndexer";
    e[n].addons[t] = {
        setup: function() {
            var i = this,
                r = this.opts[t];
            this.conf[t];
            o = e[n].glbl, "boolean" == typeof r && (r = {
                add: r
            }), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), this.bind("initPanels", function(n) {
                if (r.add) {
                    var t;
                    switch (r.addTo) {
                        case "panels":
                            t = n;
                            break;
                        default:
                            t = e(r.addTo, this.$menu).filter("." + s.panel)
                    }
                    t.find("." + s.divider).closest("." + s.panel).addClass(s.hasindexer)
                }
                if (!this.$indexer && this.$pnls.children("." + s.hasindexer).length) {
                    this.$indexer = e('<div class="' + s.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(a.mouseover + "-sectionindexer " + s.touchstart + "-sectionindexer", function(n) {
                        var t = e(this).attr("href").slice(1),
                            a = i.$pnls.children("." + s.current),
                            o = a.find("." + s.listview),
                            r = !1,
                            l = a.scrollTop();
                        a.scrollTop(0), o.children("." + s.divider).not("." + s.hidden).each(function() {
                            r === !1 && t == e(this).text().slice(0, 1).toLowerCase() && (r = e(this).position().top)
                        }), a.scrollTop(r !== !1 ? r : l)
                    });
                    var o = function(e) {
                        i.$menu[(e.hasClass(s.hasindexer) ? "add" : "remove") + "Class"](s.hasindexer)
                    };
                    this.bind("openPanel", o), o.call(this, this.$pnls.children("." + s.current))
                }
            })
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("indexer hasindexer"), a.add("mouseover touchstart")
        },
        clickAnchor: function(e, n) {
            return e.parent().is("." + s.indexer) ? !0 : void 0
        }
    }, e[n].defaults[t] = {
        add: !1,
        addTo: "panels"
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "setSelected";
    e[n].addons[t] = {
        setup: function() {
            var a = this,
                r = this.opts[t];
            this.conf[t];
            if (o = e[n].glbl, "boolean" == typeof r && (r = {
                    hover: r,
                    parent: r
                }), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), "detect" == r.current) {
                var l = function(e) {
                    e = e.split("?")[0].split("#")[0];
                    var n = a.$menu.find('a[href="' + e + '"], a[href="' + e + '/"]');
                    n.length ? a.setSelected(n.parent(), !0) : (e = e.split("/").slice(0, -1), e.length && l(e.join("/")))
                };
                l(window.location.href)
            } else r.current || this.bind("initPanels", function(e) {
                e.find("." + s.listview).children("." + s.selected).removeClass(s.selected)
            });
            if (r.hover && this.$menu.addClass(s.hoverselected), r.parent) {
                this.$menu.addClass(s.parentselected);
                var d = function(e) {
                    this.$pnls.find("." + s.listview).find("." + s.next).removeClass(s.selected);
                    for (var n = e.data(i.parent); n && n.length;) n = n.not("." + s.vertical).children("." + s.next).addClass(s.selected).end().closest("." + s.panel).data(i.parent)
                };
                this.bind("openedPanel", d), this.bind("initPanels", function(e) {
                    d.call(this, this.$pnls.children("." + s.current))
                })
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("hoverselected parentselected")
        },
        clickAnchor: function(e, n) {}
    }, e[n].defaults[t] = {
        current: !0,
        hover: !1,
        parent: !1
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "toggles";
    e[n].addons[t] = {
        setup: function() {
            var i = this;
            this.opts[t], this.conf[t];
            o = e[n].glbl, this.bind("initPanels", function(n) {
                this.__refactorClass(e("input", n), this.conf.classNames[t].toggle, "toggle"), this.__refactorClass(e("input", n), this.conf.classNames[t].check, "check"), e("input." + s.toggle + ", input." + s.check, n).each(function() {
                    var n = e(this),
                        t = n.closest("li"),
                        a = n.hasClass(s.toggle) ? "toggle" : "check",
                        o = n.attr("id") || i.__getUniqueId();
                    t.children('label[for="' + o + '"]').length || (n.attr("id", o), t.prepend(n), e('<label for="' + o + '" class="' + s[a] + '"></label>').insertBefore(t.children("a, span").last()))
                })
            })
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("toggle check")
        },
        clickAnchor: function(e, n) {}
    }, e[n].configuration.classNames[t] = {
        toggle: "Toggle",
        check: "Check"
    };
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "navbars";
    e[n].addons[t] = {
        setup: function() {
            var i = this,
                a = this.opts[t],
                r = this.conf[t];
            if (o = e[n].glbl, "undefined" != typeof a) {
                a instanceof Array || (a = [a]);
                var l = {};
                if (a.length) {
                    e.each(a, function(o) {
                        var d = a[o];
                        "boolean" == typeof d && d && (d = {}), "object" != typeof d && (d = {}), "undefined" == typeof d.content && (d.content = ["prev", "title"]), d.content instanceof Array || (d.content = [d.content]), d = e.extend(!0, {}, i.opts.navbar, d);
                        var c = d.position,
                            h = d.height;
                        "number" != typeof h && (h = 1), h = Math.min(4, Math.max(1, h)), "bottom" != c && (c = "top"), l[c] || (l[c] = 0), l[c]++;
                        var u = e("<div />").addClass(s.navbar + " " + s.navbar + "-" + c + " " + s.navbar + "-" + c + "-" + l[c] + " " + s.navbar + "-size-" + h);
                        l[c] += h - 1;
                        for (var f = 0, p = 0, v = d.content.length; v > p; p++) {
                            var m = e[n].addons[t][d.content[p]] || !1;
                            m ? f += m.call(i, u, d, r) : (m = d.content[p], m instanceof e || (m = e(d.content[p])), u.append(m))
                        }
                        f += Math.ceil(u.children().not("." + s.btn).length / h), f > 1 && u.addClass(s.navbar + "-content-" + f), u.children("." + s.btn).length && u.addClass(s.hasbtns), u.prependTo(i.$menu)
                    });
                    for (var d in l) i.$menu.addClass(s.hasnavbar + "-" + d + "-" + l[d])
                }
            }
        },
        add: function() {
            s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("close hasbtns")
        },
        clickAnchor: function(e, n) {}
    }, e[n].configuration[t] = {
        breadcrumbSeparator: "/"
    }, e[n].configuration.classNames[t] = {};
    var s, i, a, o
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "navbars",
        s = "breadcrumbs";
    e[n].addons[t][s] = function(t, s, i) {
        var a = e[n]._c,
            o = e[n]._d;
        a.add("breadcrumbs separator");
        var r = e('<span class="' + a.breadcrumbs + '" />').appendTo(t);
        this.bind("initPanels", function(n) {
            n.removeClass(a.hasnavbar).each(function() {
                for (var n = [], t = e(this), s = e('<span class="' + a.breadcrumbs + '"></span>'), r = e(this).children().first(), l = !0; r && r.length;) {
                    r.is("." + a.panel) || (r = r.closest("." + a.panel));
                    var d = r.children("." + a.navbar).children("." + a.title).text();
                    n.unshift(l ? "<span>" + d + "</span>" : '<a href="#' + r.attr("id") + '">' + d + "</a>"), l = !1, r = r.data(o.parent)
                }
                s.append(n.join('<span class="' + a.separator + '">' + i.breadcrumbSeparator + "</span>")).appendTo(t.children("." + a.navbar))
            })
        });
        var l = function() {
            r.html(this.$pnls.children("." + a.current).children("." + a.navbar).children("." + a.breadcrumbs).html())
        };
        return this.bind("openPanel", l), this.bind("initPanels", l), 0
    }
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "navbars",
        s = "close";
    e[n].addons[t][s] = function(t, s) {
        var i = e[n]._c,
            a = e[n].glbl,
            o = e('<a class="' + i.close + " " + i.btn + '" href="#" />').appendTo(t),
            r = function(e) {
                o.attr("href", "#" + e.attr("id"))
            };
        return r.call(this, a.$page), this.bind("setPage", r), -1
    }
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "navbars",
        s = "next";
    e[n].addons[t][s] = function(s, i) {
        var a, o, r = e[n]._c,
            l = e('<a class="' + r.next + " " + r.btn + '" href="#" />').appendTo(s),
            d = function(e) {
                e = e || this.$pnls.children("." + r.current);
                var n = e.find("." + this.conf.classNames[t].panelNext);
                a = n.attr("href"), o = n.html(), l[a ? "attr" : "removeAttr"]("href", a), l[a || o ? "removeClass" : "addClass"](r.hidden), l.html(o)
            };
        return this.bind("openPanel", d), this.bind("initPanels", function() {
            d.call(this)
        }), -1
    }, e[n].configuration.classNames[t].panelNext = "Next"
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "navbars",
        s = "prev";
    e[n].addons[t][s] = function(s, i) {
        var a = e[n]._c,
            o = e('<a class="' + a.prev + " " + a.btn + '" href="#" />').appendTo(s);
        this.bind("initPanels", function(e) {
            e.removeClass(a.hasnavbar).children("." + a.navbar).addClass(a.hidden)
        });
        var r, l, d = function(e) {
            if (e = e || this.$pnls.children("." + a.current), !e.hasClass(a.vertical)) {
                var n = e.find("." + this.conf.classNames[t].panelPrev);
                n.length || (n = e.children("." + a.navbar).children("." + a.prev)), r = n.attr("href"), l = n.html(), o[r ? "attr" : "removeAttr"]("href", r), o[r || l ? "removeClass" : "addClass"](a.hidden), o.html(l)
            }
        };
        return this.bind("openPanel", d), this.bind("initPanels", function() {
            d.call(this)
        }), -1
    }, e[n].configuration.classNames[t].panelPrev = "Prev"
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "navbars",
        s = "searchfield";
    e[n].addons[t][s] = function(t, s) {
        var i = e[n]._c,
            a = e('<div class="' + i.search + '" />').appendTo(t);
        return "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = a, 0
    }
}(jQuery),
function(e) {
    var n = "mmenu",
        t = "navbars",
        s = "title";
    e[n].addons[t][s] = function(s, i) {
        var a, o, r = e[n]._c,
            l = e('<a class="' + r.title + '" />').appendTo(s),
            d = function(e) {
                if (e = e || this.$pnls.children("." + r.current), !e.hasClass(r.vertical)) {
                    var n = e.find("." + this.conf.classNames[t].panelTitle);
                    n.length || (n = e.children("." + r.navbar).children("." + r.title)), a = n.attr("href"), o = n.html() || i.title, l[a ? "attr" : "removeAttr"]("href", a), l[a || o ? "removeClass" : "addClass"](r.hidden), l.html(o)
                }
            };
        return this.bind("openPanel", d), this.bind("initPanels", function(e) {
            d.call(this)
        }), 0
    }, e[n].configuration.classNames[t].panelTitle = "Title"
}(jQuery);
