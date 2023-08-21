!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
    "use strict";
    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    function s() {
        return "undefined" != typeof window;
    }
    function t() {
        return B || (s() && (B = window.gsap) && B.registerPlugin && B);
    }
    function w() {
        return String.fromCharCode.apply(null, arguments);
    }
    function D(e) {
        return V.maxScroll(e || L);
    }
    var B,
        F,
        L,
        q,
        I,
        j,
        W,
        Y,
        V,
        $,
        Q,
        X,
        K,
        G,
        J,
        i = "ScrollSmoother",
        a = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        l = w(103, 115, 97, 112, 46, 99, 111, 109),
        c = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
        r =
            ((function (e) {
                var t = "undefined" != typeof window,
                    r = 0 === (t ? window.location.href : "").indexOf(w(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(w(108, 111, 99, 97, 108, 104, 111, 115, 116)) || c.test(e),
                    n = [
                        a,
                        l,
                        w(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
                        w(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103),
                        w(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
                        w(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
                        w(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101),
                        w(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
                        w(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
                        w(99, 100, 112, 110, 46, 105, 111),
                        w(112, 101, 110, 115, 46, 105, 111),
                        w(103, 97, 110, 110, 111, 110, 46, 116, 118),
                        w(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
                        w(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116),
                        w(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
                        w(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
                        w(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
                        w(112, 108, 110, 107, 114, 46, 99, 111),
                        w(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
                        w(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
                        w(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
                        w(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
                        w(99, 115, 98, 46, 97, 112, 112),
                        w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
                        w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
                        w(99, 111, 100, 105, 101, 114, 46, 105, 111),
                        w(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
                        w(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109),
                        w(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109),
                        w(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109),
                        w(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111),
                        w(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
                    ],
                    o = n.length;
               
                    if (-1 !== e.indexOf(n[o])) return;
                r ||
                    setTimeout(function () {
                        t && (window.location.href = w(104, 116, 116, 112, 115, 58, 47, 47) + a + w(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + i + "&source=trial");
                    }, 4e3);
            })("undefined" != typeof window ? window.location.host : ""),
            (ScrollSmoother.register = function register(e) {
                return (
                    F ||
                        ((B = e || t()),
                        s() && window.document && ((L = window), (q = document), (I = q.documentElement), (j = q.body)),
                        B &&
                            ((W = B.utils.toArray),
                            (Y = B.utils.clamp),
                            (Q = B.parseEase("expo")),
                            (G = B.core.context || function () {}),
                            (V = B.core.globals().ScrollTrigger),
                            B.core.globals("ScrollSmoother", ScrollSmoother),
                            j &&
                                V &&
                                ((J = B.delayedCall(0.2, function () {
                                    return V.isRefreshing || ($ && $.refresh());
                                }).pause()),
                                (X = V.core._getVelocityProp),
                                (K = V.core._inputObserver),
                                (ScrollSmoother.refresh = V.refresh),
                                (F = 1)))),
                    F
                );
            }),
            (function _createClass(e, t, r) {
                return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
            })(ScrollSmoother, [
                {
                    key: "progress",
                    get: function get() {
                        return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
                    },
                },
            ]),
            ScrollSmoother);
    function ScrollSmoother(t) {
        var o = this;
        F || ScrollSmoother.register(B) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), (t = this.vars = t || {}), $ && $.kill(), G(($ = this));
        function Oa() {
            return U.update(-A);
        }
        function Qa() {
            return (n.style.overflow = "visible");
        }
        function Sa(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)), (h = !1), e.animation.progress(e.progress, !0);
        }
        function Ta(e, t) {
            ((e !== A && !f) || t) &&
                (C && (e = Math.round(e)),
                R && ((n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"), (n._gsap.y = e + "px")),
                (H = e - A),
                (A = e),
                V.isUpdating || ScrollSmoother.isRefreshing || V.update());
        }
        function Ua(e) {
            return arguments.length ? (e < 0 && (e = 0), (M.y = -e), (h = !0), f ? (A = -e) : Ta(-e), V.isRefreshing ? i.update() : P(e / k), this) : -A;
        }
        function Xa(e) {
            (w.scrollTop = 0), (e.target.contains && e.target.contains(w)) || (T && !1 === T(o, e)) || (V.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, "center center"), (g = e.target));
        }
        function Ya(t, e) {
            if (t < e.start) return t;
            var r = isNaN(e.ratio) ? 1 : e.ratio,
                n = e.end - e.start,
                o = t - e.start,
                i = e.offset || 0,
                a = e.pins || [],
                s = a.offset || 0,
                l = (e._startClamp && e.start <= 0) || (e.pins && e.pins.offset) ? 0 : e._endClamp && e.end === D() ? 1 : 0.5;
            return (
                a.forEach(function (e) {
                    (n -= e.distance), e.nativeStart <= t && (o -= e.distance);
                }),
                s && (o *= (n - s / r) / n),
                t + (o - i * l) / r - o
            );
        }
        function $a(t, r) {
            S.forEach(function (e) {
                return (function adjustEffectRelatedTriggers(e, t, r) {
                    r || (e.pins.length = e.pins.offset = 0);
                    var n,
                        o,
                        i,
                        a,
                        s,
                        l,
                        c,
                        f,
                        u = e.pins,
                        d = e.markers;
                    for (c = 0; c < t.length; c++)
                        if (
                            ((f = t[c]),
                            e.trigger &&
                                f.trigger &&
                                e !== f &&
                                (f.trigger === e.trigger || f.pinnedContainer === e.trigger || e.trigger.contains(f.trigger)) &&
                                ((s = f._startNative || f._startClamp || f.start),
                                (l = f._endNative || f._endClamp || f.end),
                                (i = Ya(s, e)),
                                (a = f.pin && 0 < l ? i + (l - s) : Ya(l, e)),
                                f.setPositions(i, a, !0, (f._startClamp ? Math.max(0, i) : i) - s),
                                f.markerStart && d.push(B.quickSetter([f.markerStart, f.markerEnd], "y", "px")),
                                f.pin && 0 < f.end && !r))
                        ) {
                            if (((n = f.end - f.start), (o = e._startClamp && f.start < 0))) {
                                if (0 < e.start) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void adjustEffectRelatedTriggers(e, t);
                                (n += f.start), (u.offset = -f.start);
                            }
                            u.push({ start: f.start, nativeStart: s, end: f.end, distance: n, trig: f }), e.setPositions(e.start, e.end + (o ? -f.start : n), !0);
                        }
                })(e, t, r);
            });
        }
        function _a() {
            Qa(),
                requestAnimationFrame(Qa),
                S &&
                    (V.getAll().forEach(function (e) {
                        (e._startNative = e.start), (e._endNative = e.end);
                    }),
                    S.forEach(function (e) {
                        var t = e._startClamp || e.start,
                            r = e.autoSpeed ? Math.min(D(), e.end) : t + Math.abs((e.end - t) / e.ratio),
                            n = r - e.end;
                        if ((r -= n / 2) < (t -= n / 2)) {
                            var o = t;
                            (t = r), (r = o);
                        }
                        e._startClamp && t < 0
                            ? ((n = (r = e.ratio < 0 ? D() : e.end / e.ratio) - e.end), (t = 0))
                            : (e.ratio < 0 || (e._endClamp && r >= D())) && (n = ((r = D()) - (t = e.ratio < 0 || 1 < e.ratio ? 0 : r - (r - e.start) / e.ratio)) * e.ratio - (e.end - e.start)),
                            (e.offset = n || 1e-4),
                            (e.pins.length = e.pins.offset = 0),
                            e.setPositions(t, r, !0);
                    }),
                    $a(V.sort())),
                U.reset();
        }
        function ab() {
            return V.addEventListener("refresh", _a);
        }
        function bb() {
            return (
                S &&
                S.forEach(function (e) {
                    return e.vars.onRefresh(e);
                })
            );
        }
        function cb() {
            return (
                S &&
                    S.forEach(function (e) {
                        return e.vars.onRefreshInit(e);
                    }),
                bb
            );
        }
        function db(r, n, o, i) {
            return function () {
                var e = "function" == typeof n ? n(o, i) : n;
                e || 0 === e || (e = i.getAttribute("data-" + E + r) || ("speed" === r ? 1 : 0)), i.setAttribute("data-" + E + r, e);
                var t = "clamp(" === (e + "").substr(0, 6);
                return { clamp: t, value: t ? e.substr(6, e.length - 7) : e };
            };
        }
        function eb(r, e, t, n, o) {
            function pc() {
                (e = u()),
                    (t = parseFloat(d().value)),
                    (i = parseFloat(e.value) || 1),
                    (s = "auto" === e.value),
                    (c = s || (a && a._startClamp && a.start <= 0) || p.offset ? 0 : a && a._endClamp && a.end === D() ? 1 : 0.5),
                    l && l.kill(),
                    (l = t && B.to(r, { ease: Q, overwrite: !1, y: "+=0", duration: t })),
                    a && ((a.ratio = i), (a.autoSpeed = s));
            }
            function qc() {
                (g.y = h + "px"), g.renderTransform(1), pc();
            }
            function tc(e) {
                if (s) {
                    qc();
                    var t = (function _autoDistance(e, t) {
                        var r,
                            n,
                            o = e.parentNode || I,
                            i = e.getBoundingClientRect(),
                            a = o.getBoundingClientRect(),
                            s = a.top - i.top,
                            l = a.bottom - i.bottom,
                            c = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t),
                            f = -c * t;
                        return (
                            0 < c && ((n = 0.5 == (r = a.height / (L.innerHeight + a.height)) ? 2 * a.height : 2 * Math.min(a.height, Math.abs((-c * r) / (2 * r - 1))) * (t || 1)), (f += t ? -n * t : -n / 2), (c += n)),
                            { change: c, offset: f }
                        );
                    })(r, Y(0, 1, -e.start / (e.end - e.start)));
                    (v = t.change), (f = t.offset);
                } else (f = p.offset || 0), (v = (e.end - e.start - f) * (1 - i));
                p.forEach(function (e) {
                    return (v -= e.distance * (1 - i));
                }),
                    (e.offset = v || 0.001),
                    e.vars.onUpdate(e),
                    l && l.progress(1);
            }
            o = ("function" == typeof o ? o(n, r) : o) || 0;
            var i,
                a,
                s,
                l,
                c,
                f,
                u = db("speed", e, n, r),
                d = db("lag", t, n, r),
                h = B.getProperty(r, "y"),
                g = r._gsap,
                p = [],
                m = [],
                v = 0;
            return (
                pc(),
                (1 !== i || s || l) &&
                    (tc(
                        (a = V.create({
                            trigger: s ? r.parentNode : r,
                            start: function start() {
                                return e.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o;
                            },
                            end: function end() {
                                return e.value < 0 ? "max" : e.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o;
                            },
                            scroller: w,
                            scrub: !0,
                            refreshPriority: -999,
                            onRefreshInit: qc,
                            onRefresh: tc,
                            onKill: function onKill(e) {
                                var t = S.indexOf(e);
                                0 <= t && S.splice(t, 1), qc();
                            },
                            onUpdate: function onUpdate(e) {
                                var t,
                                    r,
                                    n,
                                    o = h + v * (e.progress - c),
                                    i = p.length,
                                    a = 0;
                                if (e.offset) {
                                    if (i) {
                                        for (r = -A, n = e.end; i--; ) {
                                            if ((t = p[i]).trig.isActive || (r >= t.start && r <= t.end))
                                                return void (l && ((t.trig.progress += t.trig.direction < 0 ? 0.001 : -0.001), t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(g.y), -H, !0), O && l.progress(1)));
                                            r > t.end && (a += t.distance), (n -= t.distance);
                                        }
                                        o = h + a + v * ((B.utils.clamp(e.start, e.end, r) - e.start - a) / (n - e.start) - c);
                                    }
                                    m.length &&
                                        !s &&
                                        m.forEach(function (e) {
                                            return e(o - a);
                                        }),
                                        (o = (function _round(e) {
                                            return Math.round(1e5 * e) / 1e5 || 0;
                                        })(o + f)),
                                        l ? (l.resetTo("y", o, -H, !0), O && l.progress(1)) : ((g.y = o + "px"), g.renderTransform(1));
                                }
                            },
                        }))
                    ),
                    (B.core.getCache(a.trigger).stRevert = cb),
                    (a.startY = h),
                    (a.pins = p),
                    (a.markers = m),
                    (a.ratio = i),
                    (a.autoSpeed = s),
                    (r.style.willChange = "transform")),
                a
            );
        }
        var n,
            w,
            e,
            i,
            S,
            a,
            s,
            l,
            c,
            f,
            r,
            u,
            d,
            h,
            g,
            p = t.smoothTouch,
            m = t.onUpdate,
            v = t.onStop,
            b = t.smooth,
            T = t.onFocusIn,
            _ = t.normalizeScroll,
            C = t.wholePixels,
            x = this,
            E = t.effectsPrefix || "",
            P = V.getScrollFunc(L),
            R = 1 === V.isTouch ? (!0 === p ? 0.8 : parseFloat(p) || 0) : 0 === b || !1 === b ? 0 : parseFloat(b) || 0.8,
            k = (R && +t.speed) || 1,
            A = 0,
            H = 0,
            O = 1,
            U = X(0),
            M = { y: 0 },
            N =
                "undefined" != typeof ResizeObserver &&
                !1 !== t.autoResize &&
                new ResizeObserver(function () {
                    if (!V.isRefreshing) {
                        var e = D(w) * k;
                        e < -A && Ua(e), J.restart(!0);
                    }
                });
        function refreshHeight() {
            return (e = n.clientHeight), (n.style.overflow = "visible"), (j.style.height = L.innerHeight + (e - L.innerHeight) / k + "px"), e - L.innerHeight;
        }
        ab(),
            V.addEventListener("killAll", ab),
            B.delayedCall(0.5, function () {
                return (O = 0);
            }),
            (this.scrollTop = Ua),
            (this.scrollTo = function (e, t, r) {
                var n = B.utils.clamp(0, D(), isNaN(e) ? o.offset(e, r, !!t && !f) : +e);
                t ? (f ? B.to(o, { duration: R, scrollTop: n, overwrite: "auto", ease: Q }) : P(n)) : Ua(n);
            }),
            (this.offset = function (e, t, r) {
                var n,
                    o = (e = W(e)[0]).style.cssText,
                    i = V.create({ trigger: e, start: t || "top top" });
                return S && (O ? V.refresh() : $a([i], !0)), (n = i.start / (r ? k : 1)), i.kill(!1), (e.style.cssText = o), (B.core.getCache(e).uncache = 1), n;
            }),
            (this.content = function (e) {
                if (arguments.length) {
                    var t = W(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || j.children[0];
                    return t !== n && ((c = (n = t).getAttribute("style") || ""), N && N.observe(n), B.set(n, { overflow: "visible", width: "100%", boxSizing: "border-box", y: "+=0" }), R || B.set(n, { clearProps: "transform" })), this;
                }
                return n;
            }),
            (this.wrapper = function (e) {
                return arguments.length
                    ? ((w =
                          W(e || "#smooth-wrapper")[0] ||
                          (function _wrap(e) {
                              var t = q.querySelector(".ScrollSmoother-wrapper");
                              return t || ((t = q.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t;
                          })(n)),
                      (l = w.getAttribute("style") || ""),
                      refreshHeight(),
                      B.set(
                          w,
                          R
                              ? { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 }
                              : { overflow: "visible", position: "relative", width: "100%", height: "auto", top: "auto", bottom: "auto", left: "auto", right: "auto" }
                      ),
                      this)
                    : w;
            }),
            (this.effects = function (e, t) {
                if (((S = S || []), !e)) return S.slice(0);
                (e = W(e)).forEach(function (e) {
                    for (var t = S.length; t--; ) S[t].trigger === e && S[t].kill();
                });
                t = t || {};
                var r,
                    n,
                    o = t.speed,
                    i = t.lag,
                    a = t.effectsPadding,
                    s = [];
                for (r = 0; r < e.length; r++) (n = eb(e[r], o, i, r, a)) && s.push(n);
                return S.push.apply(S, s), s;
            }),
            (this.sections = function (e, t) {
                if (((a = a || []), !e)) return a.slice(0);
                var r = W(e).map(function (t) {
                    return V.create({
                        trigger: t,
                        start: "top 120%",
                        end: "bottom -20%",
                        onToggle: function onToggle(e) {
                            (t.style.opacity = e.isActive ? "1" : "0"), (t.style.pointerEvents = e.isActive ? "all" : "none");
                        },
                    });
                });
                return t && t.add ? a.push.apply(a, r) : (a = r.slice(0)), r;
            }),
            this.content(t.content),
            this.wrapper(t.wrapper),
            (this.render = function (e) {
                return Ta(e || 0 === e ? e : A);
            }),
            (this.getVelocity = function () {
                return U.getVelocity(-A);
            }),
            V.scrollerProxy(w, {
                scrollTop: Ua,
                scrollHeight: function scrollHeight() {
                    return refreshHeight() && j.scrollHeight;
                },
                fixedMarkers: !1 !== t.fixedMarkers && !!R,
                content: n,
                getBoundingClientRect: function getBoundingClientRect() {
                    return { top: 0, left: 0, width: L.innerWidth, height: L.innerHeight };
                },
            }),
            V.defaults({ scroller: w });
        var z = V.getAll().filter(function (e) {
            return e.scroller === L || e.scroller === w;
        });
        z.forEach(function (e) {
            return e.revert(!0, !0);
        }),
            (i = V.create({
                animation: B.fromTo(
                    M,
                    { y: 0 },
                    {
                        y: function y() {
                            return -refreshHeight();
                        },
                        immediateRender: !1,
                        ease: "none",
                        data: "ScrollSmoother",
                        duration: 100,
                        onUpdate: function onUpdate() {
                            if (this._dur) {
                                var e = h;
                                e && (Sa(i), (M.y = A)), Ta(M.y, e), Oa(), m && !f && m(x);
                            }
                        },
                    }
                ),
                onRefreshInit: function onRefreshInit(e) {
                    if (!ScrollSmoother.isRefreshing) {
                        if (((ScrollSmoother.isRefreshing = !0), S)) {
                            var t = V.getAll().filter(function (e) {
                                return !!e.pin;
                            });
                            S.forEach(function (r) {
                                r.vars.pinnedContainer ||
                                    t.forEach(function (e) {
                                        if (e.pin.contains(r.trigger)) {
                                            var t = r.vars;
                                            (t.pinnedContainer = e.pin), (r.vars = null), r.init(t, r.animation);
                                        }
                                    });
                            });
                        }
                        var r = e.getTween();
                        (d = r && r._end > r._dp._time), (u = A), (M.y = 0), R && (1 === V.isTouch && (w.style.position = "absolute"), (w.scrollTop = 0), 1 === V.isTouch && (w.style.position = "fixed"));
                    }
                },
                onRefresh: function onRefresh(e) {
                    e.animation.invalidate(),
                        e.setPositions(e.start, refreshHeight() / k),
                        d || Sa(e),
                        (M.y = -P() * k),
                        Ta(M.y),
                        O || e.animation.progress(B.utils.clamp(0, 1, u / k / -e.end)),
                        d && ((e.progress -= 0.001), e.update()),
                        (ScrollSmoother.isRefreshing = !1);
                },
                id: "ScrollSmoother",
                scroller: L,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: function end() {
                    return refreshHeight() / k;
                },
                onScrubComplete: function onScrubComplete() {
                    U.reset(), v && v(o);
                },
                scrub: R || !0,
            })),
            (this.smooth = function (e) {
                return arguments.length && ((k = ((R = e || 0) && +t.speed) || 1), i.scrubDuration(e)), i.getTween() ? i.getTween().duration() : 0;
            }),
            i.getTween() && (i.getTween().vars.ease = t.ease || Q),
            (this.scrollTrigger = i),
            t.effects && this.effects(!0 === t.effects ? "[data-" + E + "speed], [data-" + E + "lag]" : t.effects, { effectsPadding: t.effectsPadding }),
            t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections),
            z.forEach(function (e) {
                (e.vars.scroller = w), e.revert(!1, !0), e.init(e.vars, e.animation);
            }),
            (this.paused = function (e, t) {
                return arguments.length
                    ? (!!f !== e &&
                          (e
                              ? (i.getTween() && i.getTween().pause(),
                                P(-A / k),
                                U.reset(),
                                (r = V.normalizeScroll()) && r.disable(),
                                ((f = V.observe({
                                    preventDefault: !0,
                                    type: "wheel,touch,scroll",
                                    debounce: !1,
                                    allowClicks: !0,
                                    onChangeY: function onChangeY() {
                                        return Ua(-A);
                                    },
                                })).nested = K(I, "wheel,touch,scroll", !0, !1 !== t)))
                              : (f.nested.kill(), f.kill(), (f = 0), r && r.enable(), (i.progress = (-A / k - i.start) / (i.end - i.start)), Sa(i))),
                      this)
                    : !!f;
            }),
            (this.kill = this.revert = function () {
                o.paused(!1), Sa(i), i.kill();
                for (var e = (S || []).concat(a || []), t = e.length; t--; ) e[t].kill();
                V.scrollerProxy(w), V.removeEventListener("killAll", ab), V.removeEventListener("refresh", _a), (w.style.cssText = l), (n.style.cssText = c);
                var r = V.defaults({});
                r && r.scroller === w && V.defaults({ scroller: L }), o.normalizer && V.normalizeScroll(!1), clearInterval(s), ($ = null), N && N.disconnect(), j.style.removeProperty("height"), L.removeEventListener("focusin", Xa);
            }),
            (this.refresh = function (e, t) {
                return i.refresh(e, t);
            }),
            _ && (this.normalizer = V.normalizeScroll(!0 === _ ? { debounce: !0, content: !R && n } : _)),
            V.config(t),
            "overscrollBehavior" in L.getComputedStyle(j) && B.set([j, I], { overscrollBehavior: "none" }),
            "scrollBehavior" in L.getComputedStyle(j) && B.set([j, I], { scrollBehavior: "auto" }),
            L.addEventListener("focusin", Xa),
            (s = setInterval(Oa, 250)),
            "loading" === q.readyState ||
                requestAnimationFrame(function () {
                    return V.refresh();
                });
    }
    (r.version = "3.12.3"),
        (r.create = function (e) {
            return $ && e && $.content() === W(e.content)[0] ? $ : new r(e);
        }),
        (r.get = function () {
            return $;
        }),
        t() && B.registerPlugin(r),
        (e.ScrollSmoother = r),
        (e.default = r);
    if (typeof window === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
    } else {
        delete e.default;
    }
});
