/* eslint-disable */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  'use strict';
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function s() {
    return 'undefined' != typeof window;
  }
  function t() {
    return z || (s() && (z = window.gsap) && z.registerPlugin && z);
  }
  function w() {
    return String.fromCharCode.apply(null, arguments);
  }
  var z,
    M,
    B,
    F,
    W,
    I,
    V,
    Y,
    j,
    q,
    D,
    J,
    X,
    K,
    G,
    i = 'ScrollSmoother',
    a = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    r =
      ((function (e) {
        var t = 'undefined' != typeof window,
          r =
            0 === (t ? window.location.href : '').indexOf(w(102, 105, 108, 101, 58, 47, 47)) ||
            -1 !== e.indexOf(w(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
            -1 !== e.indexOf(w(49, 50, 55, 46, 48, 32, 48, 46, 49)),
          n = [
            a,
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
            w(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
          ],
          o = n.length;
        for (
          setTimeout(function checkWarn() {
            t &&
              ('loading' === document.readyState || 'interactive' === document.readyState
                ? document.addEventListener('readystatechange', checkWarn)
                : (document.removeEventListener('readystatechange', checkWarn),
                  t &&
                    window.console &&
                    !window._gsapWarned &&
                    'object' == typeof window.gsap &&
                    !1 !== window.gsap.config().trialWarn &&
                    (console.log(
                      w(37, 99, 87, 97, 114, 110, 105, 110, 103),
                      w(
                        102,
                        111,
                        110,
                        116,
                        45,
                        115,
                        105,
                        122,
                        101,
                        58,
                        51,
                        48,
                        112,
                        120,
                        59,
                        99,
                        111,
                        108,
                        111,
                        114,
                        58,
                        114,
                        101,
                        100,
                        59
                      )
                    ),
                    console.log(
                      w(
                        65,
                        32,
                        116,
                        114,
                        105,
                        97,
                        108,
                        32,
                        118,
                        101,
                        114,
                        115,
                        105,
                        111,
                        110,
                        32,
                        111,
                        102,
                        32
                      ) +
                        i +
                        w(
                          32,
                          105,
                          115,
                          32,
                          108,
                          111,
                          97,
                          100,
                          101,
                          100,
                          32,
                          116,
                          104,
                          97,
                          116,
                          32,
                          111,
                          110,
                          108,
                          121,
                          32,
                          119,
                          111,
                          114,
                          107,
                          115,
                          32,
                          108,
                          111,
                          99,
                          97,
                          108,
                          108,
                          121,
                          32,
                          97,
                          110,
                          100,
                          32,
                          111,
                          110,
                          32,
                          100,
                          111,
                          109,
                          97,
                          105,
                          110,
                          115,
                          32,
                          108,
                          105,
                          107,
                          101,
                          32,
                          99,
                          111,
                          100,
                          101,
                          112,
                          101,
                          110,
                          46,
                          105,
                          111,
                          32,
                          97,
                          110,
                          100,
                          32,
                          99,
                          111,
                          100,
                          101,
                          115,
                          97,
                          110,
                          100,
                          98,
                          111,
                          120,
                          46,
                          105,
                          111,
                          46,
                          32,
                          42,
                          42,
                          42,
                          32,
                          68,
                          79,
                          32,
                          78,
                          79,
                          84,
                          32,
                          68,
                          69,
                          80,
                          76,
                          79,
                          89,
                          32,
                          84,
                          72,
                          73,
                          83,
                          32,
                          70,
                          73,
                          76,
                          69,
                          32,
                          42,
                          42,
                          42,
                          32,
                          76,
                          111,
                          97,
                          100,
                          105,
                          110,
                          103,
                          32,
                          105,
                          116,
                          32,
                          111,
                          110,
                          32,
                          97,
                          110,
                          32,
                          117,
                          110,
                          97,
                          117,
                          116,
                          104,
                          111,
                          114,
                          105,
                          122,
                          101,
                          100,
                          32,
                          115,
                          105,
                          116,
                          101,
                          32,
                          118,
                          105,
                          111,
                          108,
                          97,
                          116,
                          101,
                          115,
                          32,
                          116,
                          104,
                          101,
                          32,
                          108,
                          105,
                          99,
                          101,
                          110,
                          115,
                          101,
                          32,
                          97,
                          110,
                          100,
                          32,
                          119,
                          105,
                          108,
                          108,
                          32,
                          99,
                          97,
                          117,
                          115,
                          101,
                          32,
                          97,
                          32,
                          114,
                          101,
                          100,
                          105,
                          114,
                          101,
                          99,
                          116,
                          46,
                          32,
                          80,
                          108,
                          101,
                          97,
                          115,
                          101,
                          32,
                          106,
                          111,
                          105,
                          110,
                          32,
                          67,
                          108,
                          117,
                          98,
                          32,
                          71,
                          114,
                          101,
                          101,
                          110,
                          83,
                          111,
                          99,
                          107,
                          32,
                          116,
                          111,
                          32,
                          103,
                          101,
                          116,
                          32,
                          102,
                          117,
                          108,
                          108,
                          32,
                          97,
                          99,
                          99,
                          101,
                          115,
                          115,
                          32,
                          116,
                          111,
                          32,
                          116,
                          104,
                          101,
                          32,
                          98,
                          111,
                          110,
                          117,
                          115,
                          32,
                          112,
                          108,
                          117,
                          103,
                          105,
                          110,
                          115,
                          32,
                          116,
                          104,
                          97,
                          116,
                          32,
                          98,
                          111,
                          111,
                          115,
                          116,
                          32,
                          121,
                          111,
                          117,
                          114,
                          32,
                          97,
                          110,
                          105,
                          109,
                          97,
                          116,
                          105,
                          111,
                          110,
                          32,
                          115,
                          117,
                          112,
                          101,
                          114,
                          112,
                          111,
                          119,
                          101,
                          114,
                          115,
                          46,
                          32,
                          68,
                          105,
                          115,
                          97,
                          98,
                          108,
                          101,
                          32,
                          116,
                          104,
                          105,
                          115,
                          32,
                          119,
                          97,
                          114,
                          110,
                          105,
                          110,
                          103,
                          32,
                          119,
                          105,
                          116,
                          104,
                          32,
                          103,
                          115,
                          97,
                          112,
                          46,
                          99,
                          111,
                          110,
                          102,
                          105,
                          103,
                          40,
                          123,
                          116,
                          114,
                          105,
                          97,
                          108,
                          87,
                          97,
                          114,
                          110,
                          58,
                          32,
                          102,
                          97,
                          108,
                          115,
                          101,
                          125,
                          41,
                          59
                        )
                    ),
                    console.log(
                      w(
                        37,
                        99,
                        71,
                        101,
                        116,
                        32,
                        117,
                        110,
                        114,
                        101,
                        115,
                        116,
                        114,
                        105,
                        99,
                        116,
                        101,
                        100,
                        32,
                        102,
                        105,
                        108,
                        101,
                        115,
                        32,
                        97,
                        116,
                        32,
                        104,
                        116,
                        116,
                        112,
                        115,
                        58,
                        47,
                        47,
                        103,
                        114,
                        101,
                        101,
                        110,
                        115,
                        111,
                        99,
                        107,
                        46,
                        99,
                        111,
                        109,
                        47,
                        99,
                        108,
                        117,
                        98
                      ),
                      w(
                        102,
                        111,
                        110,
                        116,
                        45,
                        115,
                        105,
                        122,
                        101,
                        58,
                        49,
                        54,
                        112,
                        120,
                        59,
                        99,
                        111,
                        108,
                        111,
                        114,
                        58,
                        35,
                        52,
                        101,
                        57,
                        56,
                        49,
                        53
                      )
                    ),
                    (window._gsapWarned = 1))));
          }, 50);
          -1 < --o;

        )
          if (-1 !== e.indexOf(n[o])) return;
        r ||
          setTimeout(function () {
            t &&
              (window.location.href =
                w(104, 116, 116, 112, 115, 58, 47, 47) +
                a +
                w(
                  47,
                  114,
                  101,
                  113,
                  117,
                  105,
                  114,
                  101,
                  115,
                  45,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114,
                  115,
                  104,
                  105,
                  112,
                  47
                ) +
                '?plugin=' +
                i +
                '&source=trial');
          }, 3e3);
      })('undefined' != typeof window ? window.location.host : ''),
      (ScrollSmoother.register = function register(e) {
        return (
          M ||
            ((z = e || t()),
            s() &&
              window.document &&
              ((B = window), (F = document), (W = F.documentElement), (I = F.body)),
            z &&
              ((V = z.utils.toArray),
              (Y = z.utils.clamp),
              (D = z.parseEase('expo')),
              (K = z.core.context || function () {}),
              (G = z
                .delayedCall(0.2, function () {
                  return j.isRefreshing || (q && q.refresh());
                })
                .pause()),
              (j = z.core.globals().ScrollTrigger),
              z.core.globals('ScrollSmoother', ScrollSmoother),
              I &&
                j &&
                ((J = j.core._getVelocityProp),
                (X = j.core._inputObserver),
                (ScrollSmoother.refresh = j.refresh),
                (M = 1)))),
          M
        );
      }),
      (function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
      })(ScrollSmoother, [
        {
          key: 'progress',
          get: function get() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
          },
        },
      ]),
      ScrollSmoother);
  function ScrollSmoother(t) {
    var o = this;
    M || ScrollSmoother.register(z) || console.warn('Please gsap.registerPlugin(ScrollSmoother)'),
      (t = this.vars = t || {}),
      q && q.kill(),
      K((q = this));
    function Ja() {
      return N.update(-O);
    }
    function La() {
      return (n.style.overflow = 'visible');
    }
    function Na(e) {
      e.update();
      var t = e.getTween();
      t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
        (h = !1),
        e.animation.progress(e.progress, !0);
    }
    function Oa(e, t) {
      ((e !== O && !u) || t) &&
        (_ &&
          ((n.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + e + ', 0, 1)'),
          (n._gsap.y = e + 'px')),
        (H = e - O),
        (O = e),
        j.isUpdating || j.update());
    }
    function Pa(e) {
      return arguments.length
        ? (e < 0 && (e = 0),
          (L.y = -e),
          (h = !0),
          u ? (O = -e) : Oa(-e),
          j.isRefreshing ? i.update() : k(e),
          this)
        : -O;
    }
    function Ra(e) {
      (v.scrollTop = 0),
        (e.target.contains && e.target.contains(v)) ||
          (T && !1 === T(o, e)) ||
          (j.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, 'center center'),
          (g = e.target));
    }
    function Sa(e) {
      var r, n, o, i;
      S.forEach(function (t) {
        (r = t.pins),
          (i = t.markers),
          e.forEach(function (e) {
            t.trigger &&
              e.trigger &&
              t !== e &&
              (e.trigger === t.trigger ||
                e.pinnedContainer === t.trigger ||
                t.trigger.contains(e.trigger)) &&
              ((n = e.start),
              (o = (n - t.start - t.offset) / t.ratio - (n - t.start)),
              r.forEach(function (e) {
                return (o -= e.distance / t.ratio - e.distance);
              }),
              e.setPositions(n + o, e.end + o),
              e.markerStart && i.push(z.quickSetter([e.markerStart, e.markerEnd], 'y', 'px')),
              e.pin &&
                0 < e.end &&
                ((o = e.end - e.start),
                r.push({ start: e.start, end: e.end, distance: o, trig: e }),
                t.setPositions(t.start, t.end + o),
                t.vars.onRefresh(t)));
          });
      });
    }
    function Ta() {
      La(),
        requestAnimationFrame(La),
        S &&
          (S.forEach(function (e) {
            var t = e.start,
              r = e.auto ? Math.min(j.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
              n = (r - e.end) / 2;
            (t -= n),
              (r -= n),
              (e.offset = n || 1e-4),
              (e.pins.length = 0),
              e.setPositions(Math.min(t, r), Math.max(t, r)),
              e.vars.onRefresh(e);
          }),
          Sa(j.sort())),
        N.reset();
    }
    function Ua() {
      return j.addEventListener('refresh', Ta);
    }
    function Va() {
      return (
        S &&
        S.forEach(function (e) {
          return e.vars.onRefresh(e);
        })
      );
    }
    function Wa() {
      return (
        S &&
          S.forEach(function (e) {
            return e.vars.onRefreshInit(e);
          }),
        Va
      );
    }
    function Xa(t, r, n, o) {
      return function () {
        var e = 'function' == typeof r ? r(n, o) : r;
        return (
          e || 0 === e || (e = o.getAttribute('data-' + R + t) || ('speed' === t ? 1 : 0)),
          o.setAttribute('data-' + R + t, e),
          'auto' === e ? e : parseFloat(e)
        );
      };
    }
    function Ya(r, e, t, n, o) {
      function Nb() {
        (e = f()),
          (t = d()),
          (i = parseFloat(e) || 1),
          (c = (a = 'auto' === e) ? 0 : 0.5),
          l && l.kill(),
          (l = t && z.to(r, { ease: D, overwrite: !1, y: '+=0', duration: t })),
          s && ((s.ratio = i), (s.autoSpeed = a));
      }
      function Ob() {
        (g.y = h + 'px'), g.renderTransform(1), Nb();
      }
      function Sb(e) {
        if (a) {
          Ob();
          var t = (function _autoDistance(e, t) {
            var r,
              n,
              o = e.parentNode || W,
              i = e.getBoundingClientRect(),
              s = o.getBoundingClientRect(),
              a = s.top - i.top,
              l = s.bottom - i.bottom,
              c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t),
              u = -c * t;
            return (
              0 < c &&
                ((n =
                  0.5 == (r = s.height / (B.innerHeight + s.height))
                    ? 2 * s.height
                    : 2 * Math.min(s.height, (-c * r) / (2 * r - 1)) * (t || 1)),
                (u += t ? -n * t : -n / 2),
                (c += n)),
              { change: c, offset: u }
            );
          })(r, Y(0, 1, -e.start / (e.end - e.start)));
          (m = t.change), (u = t.offset);
        } else (m = (e.end - e.start) * (1 - i)), (u = 0);
        p.forEach(function (e) {
          return (m -= e.distance * (1 - i));
        }),
          e.vars.onUpdate(e),
          l && l.progress(1);
      }
      o = ('function' == typeof o ? o(n, r) : o) || 0;
      var i,
        s,
        a,
        l,
        c,
        u,
        f = Xa('speed', e, n, r),
        d = Xa('lag', t, n, r),
        h = z.getProperty(r, 'y'),
        g = r._gsap,
        p = [],
        w = [],
        m = 0;
      return (
        Nb(),
        (1 !== i || a || l) &&
          (Sb(
            (s = j.create({
              trigger: a ? r.parentNode : r,
              start: 'top bottom+=' + o,
              end: 'bottom top-=' + o,
              scroller: v,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: Ob,
              onRefresh: Sb,
              onKill: function onKill(e) {
                var t = S.indexOf(e);
                0 <= t && S.splice(t, 1), Ob();
              },
              onUpdate: function onUpdate(e) {
                var t,
                  r,
                  n,
                  o = h + m * (e.progress - c),
                  i = p.length,
                  s = 0;
                if (e.offset) {
                  if (i) {
                    for (r = -O, n = e.end; i--; ) {
                      if ((t = p[i]).trig.isActive || (r >= t.start && r <= t.end))
                        return void (
                          l &&
                          ((t.trig.progress += t.trig.direction < 0 ? 0.001 : -0.001),
                          t.trig.update(0, 0, 1),
                          l.resetTo('y', parseFloat(g.y), -H, !0),
                          A && l.progress(1))
                        );
                      r > t.end && (s += t.distance), (n -= t.distance);
                    }
                    o =
                      h +
                      s +
                      m * ((z.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c);
                  }
                  (o = (function _round(e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                  })(o + u)),
                    w.length &&
                      !a &&
                      w.forEach(function (e) {
                        return e(o - s);
                      }),
                    l
                      ? (l.resetTo('y', o, -H, !0), A && l.progress(1))
                      : ((g.y = o + 'px'), g.renderTransform(1));
                }
              },
            }))
          ),
          (z.core.getCache(s.trigger).stRevert = Wa),
          (s.startY = h),
          (s.pins = p),
          (s.markers = w),
          (s.ratio = i),
          (s.autoSpeed = a),
          (r.style.willChange = 'transform')),
        s
      );
    }
    var n,
      v,
      e,
      i,
      S,
      s,
      a,
      l,
      c,
      u,
      r,
      f,
      d,
      h,
      g,
      p = t.smoothTouch,
      w = t.onUpdate,
      m = t.onStop,
      b = t.smooth,
      T = t.onFocusIn,
      x = t.normalizeScroll,
      P = this,
      E =
        'undefined' != typeof ResizeObserver &&
        !1 !== t.autoResize &&
        new ResizeObserver(function () {
          return j.isRefreshing || G.restart(!0);
        }),
      R = t.effectsPrefix || '',
      k = j.getScrollFunc(B),
      _ =
        1 === j.isTouch
          ? !0 === p
            ? 0.8
            : parseFloat(p) || 0
          : 0 === b || !1 === b
          ? 0
          : parseFloat(b) || 0.8,
      C = (_ && +t.speed) || 1,
      O = 0,
      H = 0,
      A = 1,
      N = J(0),
      L = { y: 0 };
    function refreshHeight() {
      return (
        (e = n.clientHeight),
        (n.style.overflow = 'visible'),
        (I.style.height = B.innerHeight + (e - B.innerHeight) / C + 'px'),
        e - B.innerHeight
      );
    }
    Ua(),
      j.addEventListener('killAll', Ua),
      z.delayedCall(0.5, function () {
        return (A = 0);
      }),
      (this.scrollTop = Pa),
      (this.scrollTo = function (e, t, r) {
        var n = z.utils.clamp(0, j.maxScroll(B), isNaN(e) ? o.offset(e, r) : +e);
        t ? (u ? z.to(o, { duration: _, scrollTop: n, overwrite: 'auto', ease: D }) : k(n)) : Pa(n);
      }),
      (this.offset = function (e, t) {
        var r,
          n = (e = V(e)[0]).style.cssText,
          o = j.create({ trigger: e, start: t || 'top top' });
        return (
          S && Sa([o]),
          (r = o.start),
          o.kill(!1),
          (e.style.cssText = n),
          (z.core.getCache(e).uncache = 1),
          r
        );
      }),
      (this.content = function (e) {
        if (arguments.length) {
          var t =
            V(e || '#smooth-content')[0] ||
            console.warn('ScrollSmoother needs a valid content element.') ||
            I.children[0];
          return (
            t !== n &&
              ((c = (n = t).getAttribute('style') || ''),
              E && E.observe(n),
              z.set(n, { overflow: 'visible', width: '100%', boxSizing: 'border-box', y: '+=0' }),
              _ || z.set(n, { clearProps: 'transform' })),
            this
          );
        }
        return n;
      }),
      (this.wrapper = function (e) {
        return arguments.length
          ? ((v =
              V(e || '#smooth-wrapper')[0] ||
              (function _wrap(e) {
                var t = F.querySelector('.ScrollSmoother-wrapper');
                return (
                  t ||
                    ((t = F.createElement('div')).classList.add('ScrollSmoother-wrapper'),
                    e.parentNode.insertBefore(t, e),
                    t.appendChild(e)),
                  t
                );
              })(n)),
            (l = v.getAttribute('style') || ''),
            refreshHeight(),
            z.set(
              v,
              _
                ? {
                    overflow: 'hidden',
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {
                    overflow: 'visible',
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    top: 'auto',
                    bottom: 'auto',
                    left: 'auto',
                    right: 'auto',
                  }
            ),
            this)
          : v;
      }),
      (this.effects = function (e, t) {
        if (((S = S || []), !e)) return S.slice(0);
        (e = V(e)).forEach(function (e) {
          for (var t = S.length; t--; ) S[t].trigger === e && S[t].kill();
        });
        t = t || {};
        var r,
          n,
          o = t.speed,
          i = t.lag,
          s = t.effectsPadding,
          a = [];
        for (r = 0; r < e.length; r++) (n = Ya(e[r], o, i, r, s)) && a.push(n);
        return S.push.apply(S, a), a;
      }),
      (this.sections = function (e, t) {
        if (((s = s || []), !e)) return s.slice(0);
        var r = V(e).map(function (t) {
          return j.create({
            trigger: t,
            start: 'top 120%',
            end: 'bottom -20%',
            onToggle: function onToggle(e) {
              (t.style.opacity = e.isActive ? '1' : '0'),
                (t.style.pointerEvents = e.isActive ? 'all' : 'none');
            },
          });
        });
        return t && t.add ? s.push.apply(s, r) : (s = r.slice(0)), r;
      }),
      this.content(t.content),
      this.wrapper(t.wrapper),
      (this.render = function (e) {
        return Oa(e || 0 === e ? e : O);
      }),
      (this.getVelocity = function () {
        return N.getVelocity(-O);
      }),
      j.scrollerProxy(v, {
        scrollTop: Pa,
        scrollHeight: function scrollHeight() {
          return refreshHeight() && I.scrollHeight;
        },
        fixedMarkers: !1 !== t.fixedMarkers && !!_,
        content: n,
        getBoundingClientRect: function getBoundingClientRect() {
          return { top: 0, left: 0, width: B.innerWidth, height: B.innerHeight };
        },
      }),
      j.defaults({ scroller: v });
    var U = j.getAll().filter(function (e) {
      return e.scroller === B || e.scroller === v;
    });
    U.forEach(function (e) {
      return e.revert(!0, !0);
    }),
      (i = j.create({
        animation: z.fromTo(
          L,
          { y: 0 },
          {
            y: function y() {
              return -refreshHeight();
            },
            immediateRender: !1,
            ease: 'none',
            data: 'ScrollSmoother',
            duration: 100,
            onUpdate: function onUpdate() {
              if (this._dur) {
                var e = h;
                e && (Na(i), (L.y = O)), Oa(L.y, e), Ja(), w && !u && w(P);
              }
            },
          }
        ),
        onRefreshInit: function onRefreshInit(e) {
          if (S) {
            var t = j.getAll().filter(function (e) {
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
          (d = r && r._end > r._dp._time),
            (f = O),
            (L.y = 0),
            _ &&
              ((v.style.pointerEvents = 'none'),
              (v.scrollTop = 0),
              setTimeout(function () {
                return v.style.removeProperty('pointer-events');
              }, 50));
        },
        onRefresh: function onRefresh(e) {
          e.animation.invalidate(),
            e.setPositions(e.start, refreshHeight() / C),
            d || Na(e),
            (L.y = -k()),
            Oa(L.y),
            A || e.animation.progress(z.utils.clamp(0, 1, f / -e.end)),
            d && ((e.progress -= 0.001), e.update());
        },
        id: 'ScrollSmoother',
        scroller: B,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: function end() {
          return refreshHeight() / C;
        },
        onScrubComplete: function onScrubComplete() {
          N.reset(), m && m(o);
        },
        scrub: _ || !0,
      })),
      (this.smooth = function (e) {
        return (
          arguments.length && ((C = ((_ = e || 0) && +t.speed) || 1), i.scrubDuration(e)),
          i.getTween() ? i.getTween().duration() : 0
        );
      }),
      i.getTween() && (i.getTween().vars.ease = t.ease || D),
      (this.scrollTrigger = i),
      t.effects &&
        this.effects(!0 === t.effects ? '[data-' + R + 'speed], [data-' + R + 'lag]' : t.effects, {
          effectsPadding: t.effectsPadding,
        }),
      t.sections && this.sections(!0 === t.sections ? '[data-section]' : t.sections),
      U.forEach(function (e) {
        (e.vars.scroller = v), e.revert(!1, !0), e.init(e.vars, e.animation);
      }),
      (this.paused = function (e, t) {
        return arguments.length
          ? (!!u !== e &&
              (e
                ? (i.getTween() && i.getTween().pause(),
                  k(-O),
                  N.reset(),
                  (r = j.normalizeScroll()) && r.disable(),
                  ((u = j.observe({
                    preventDefault: !0,
                    type: 'wheel,touch,scroll',
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function onChangeY() {
                      return Pa(-O);
                    },
                  })).nested = X(W, 'wheel,touch,scroll', !0, !1 !== t)))
                : (u.nested.kill(),
                  u.kill(),
                  (u = 0),
                  r && r.enable(),
                  (i.progress = (-O - i.start) / (i.end - i.start)),
                  Na(i))),
            this)
          : !!u;
      }),
      (this.kill = this.revert =
        function () {
          o.paused(!1), Na(i), i.kill();
          for (var e = (S || []).concat(s || []), t = e.length; t--; ) e[t].kill();
          j.scrollerProxy(v),
            j.removeEventListener('killAll', Ua),
            j.removeEventListener('refresh', Ta),
            (v.style.cssText = l),
            (n.style.cssText = c);
          var r = j.defaults({});
          r && r.scroller === v && j.defaults({ scroller: B }),
            o.normalizer && j.normalizeScroll(!1),
            clearInterval(a),
            (q = null),
            E && E.disconnect(),
            I.style.removeProperty('height'),
            B.removeEventListener('focusin', Ra);
        }),
      (this.refresh = function (e, t) {
        return i.refresh(e, t);
      }),
      x && (this.normalizer = j.normalizeScroll(!0 === x ? { debounce: !0, content: !_ && n } : x)),
      j.config(t),
      'overscrollBehavior' in B.getComputedStyle(I) &&
        z.set([I, W], { overscrollBehavior: 'none' }),
      'scrollBehavior' in B.getComputedStyle(I) && z.set([I, W], { scrollBehavior: 'auto' }),
      B.addEventListener('focusin', Ra),
      (a = setInterval(Ja, 250)),
      'loading' === F.readyState ||
        requestAnimationFrame(function () {
          return j.refresh();
        });
  }
  (r.version = '3.11.4'),
    (r.create = function (e) {
      return q && e && q.content() === V(e.content)[0] ? q : new r(e);
    }),
    (r.get = function () {
      return q;
    }),
    t() && z.registerPlugin(r),
    (e.ScrollSmoother = r),
    (e.default = r);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    delete e.default;
  }
});
