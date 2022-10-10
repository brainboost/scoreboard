// settings page
function initVariables() {
    (parameterstring = $("#variables").text()).length < 2 && (parameterstring = window.location.href);
    var e = getUrlParam("stt", "101000550113011");
    set("mode", e.charAt(0)), set("countDir", e.charAt(2)), (timeOut1 = e.charAt(3)) > 3 && (timeOut1 = 0), $("#timeOut1").removeClass(), $("#timeOut1").addClass("glow" + timeOut1), (timeOut2 = e.charAt(4)) > 3 && (timeOut2 = 0), $("#timeOut2").removeClass(), $("#timeOut2").addClass("glow" + timeOut2), set("sounds", e.charAt(5)), playerFouls = e.charAt(6), foulsPerQuater = e.charAt(7);
    var t;
    for (seg = getUrlParam("hplayers", "Name-----------"), hPlayers = seg.split("-"),
        seg = getUrlParam("vplayers", "Name-----------"), vPlayers = seg.split("-"),
        seg = getUrlParam("hnrs", "1-2-3-4-5-6-7-8-9-10-11-12"), hnrs = seg.split("-"),
        seg = getUrlParam("vnrs", "1-2-3-4-5-6-7-8-9-10-11-12"), vnrs = seg.split("-"),
        seg = getUrlParam("hpf", "0-0-0-0-0-0-0-0-0-0-0-0"), hpf = seg.split("-"),
        seg = getUrlParam("vpf", "0-0-0-0-0-0-0-0-0-0-0-0"), vpf = seg.split("-"),
        seg = getUrlParam("hpscore", "0-0-0-0-0-0-0-0-0-0-0-0"), hpscore = seg.split("-"),
        seg = getUrlParam("vpscore", "0-0-0-0-0-0-0-0-0-0-0-0"), vpscore = seg.split("-"),
        generatePlayersTemplate(),
        set("shotClockColor", e.charAt(8)),
        set("shotAutoStart", e.charAt(9)),
        set("font", e.charAt(10)),
        e.charAt(11) == "1"
            ? set("timerWiew", "timerMS")
            : e.charAt(11) == "2"
                ? set("timerWiew", "timerAll")
                : set("timerWiew", "timerAuto"), 0 == e.charAt(12)
            ? $("#wrapOvertime").hide()
            : $("#wrapOvertime").show(),
        set("shotClockSize", Number(e.charAt(13))),
        set("team", Number(e.charAt(14)) + 1), x = 1; x <= 10; x++)
        seg = "#score" + x, j = getUrlParam("t" + x, 0), $(seg).val(j), $(seg).attr("data-ms", j), j = getUrlParam("ms" + x, $(seg).attr("data-ms")), $(seg).attr("data-ms", j);
    seg = Number(getUrlParam("pd", 10)), $("#periodDuration").val(seg), periodDuration = seg, seg = Number(getUrlParam("shot", 24)), $("#shotClockDuration").val(seg), shot = seg, resetShotClock(seg), -1 != (seg = Number(getUrlParam("stc", -1))) && resetShotClock(seg), $("#teamName1").val(getUrlParam("n1", "Home")), $("#teamName2").val(getUrlParam("n2", "Visitor"));
    for (var x = 3; x <= 10; x++) $("#teamName" + x).val(getUrlParam("n" + x, "Team" + x));
    if (seg = getUrlParam("mm", -1), -1 == seg ? setClockTime(1 == countDown ? 6e4 * periodDuration : 0) : $("#minutes").val(seg), seg = Number(getUrlParam("ss", "00")), Number(seg) < 10 && (seg = "0" + seg), $("#seconds").val(seg), seg = Number(getUrlParam("hh", "00")), Number(seg) < 10 && (seg = "0" + seg), $("#hundredth").val(seg), seg = Number(getUrlParam("show", "19767")), seg = seg.toString(2), seg.charAt(5) == "1" ? $("#showHideLabels").addClass("sl") : $("#showHideLabels").removeClass("sl"), seg.charAt(8) == "1" ? $("#showHidePlayerBoards").addClass("sp") : $("#showHidePlayerBoards").removeClass("sp"), x = 0, $("#settings i").each(function () {
        x++, j = $(this).attr("data-button"), seg.charAt(x) == "1" ? $(j).show() : $(j).hide();
    }), (seg = getUrlParam("panelord", "12345")) != "12345") for (x = 3; x >= 0; x--) j = ".listaPanel" + seg.charAt(x), $("ol.centerPanel li:first").before($(j));
    if (2 == mode) {
        var s = 2;
        for (x = 1; x <= 10; x++) (_ = (j = getUrlParam("ro" + x, "-")).split("-")).length > s && (s = _.length);
        for (j = 2; j < s;) j++, addNewSocreAdderRound();
        var o, a;
        for (x = 1; x <= 10; x++) {
            var _ = (j = getUrlParam("ro" + x, "-")).split("-");
            for (o = 0; o < _.length; o++) isNaN(_[o]) || (a = "#team" + x + "LapScore" + (o + 1), $(a).val(_[o]));
        }
    }
    (seg = getUrlParam("stl", "none")) != "none" && ($("#customCSS").val(decodeURI(seg)), updateCustomCss()), seg = getUrlParam("title", "Tournament"), $("#scoreBoardTitle").val(decodeURI(seg)), seg = getUrlParam("colors", "69716B-FFFFFF-F70000-000000"), t = seg.split("-"), setJsColor("bgColor", t[0]), setJsColor("textColor", t[1]), setJsColor("digitColor", t[2]), setJsColor("digitBg", t[3]), updateColorScheme(), seg = getUrlParam("ph1nr", ""), $("#penaltyH1").val(seg), $("#penaltyH1Min").val(Number(getUrlParam("ph1m", 0))), $("#penaltyH1Sec").val(getUrlParam("ph1s", "00")), seg = getUrlParam("ph2nr", ""), $("#penaltyH2").val(seg), $("#penaltyH2Min").val(Number(getUrlParam("ph2m", 0))), $("#penaltyH2Sec").val(getUrlParam("ph2s", "00")), seg = getUrlParam("pv1nr", ""), $("#penaltyV1").val(seg), $("#penaltyV1Min").val(Number(getUrlParam("pv1m", 0))), $("#penaltyV1Sec").val(getUrlParam("pv1s", "00")), seg = getUrlParam("pv2nr", ""), $("#penaltyV2").val(seg), $("#penaltyV2Min").val(Number(getUrlParam("pv2m", 0))), $("#penaltyV2Sec").val(getUrlParam("pv2s", "00")), updatePlayerPenaltyTimes(), seg = getUrlParam("lbl", "FOULS-PENALTY-TIME%20OUT-PERIOD-PENALTY-TIME%20OUT-FOULS"), t = seg.split("-"), x = 0, $("input.label").each(function () {
        $(this).val(decodeURI(t[x])), x++;
    }), seg = getUrlParam("alt", 2), $(".possession").removeClass("active"), $("#possession" + seg).addClass("active"), seg = getUrlParam("peri", 1), $("#period").val(Number(seg)), seg = getUrlParam("fls1", 0), $("#fouls1").val(Number(seg)), seg = getUrlParam("fls2", 0), $("#fouls2").val(Number(seg)), (seg = getUrlParam("bgimg", "")).length > 4 && ($("#backgroundImg").val(decodeURI(seg)), updateBgImg()), (seg = getUrlParam("ti1mg", "")).length > 4 && ($("#team1Img").val(decodeURI(seg)), updateTeamImg(1)), (seg = getUrlParam("ti2mg", "")).length > 4 && ($("#team2Img").val(decodeURI(seg)), updateTeamImg(2)), seg = Number(getUrlParam("pushdown", 0)), $("#pushDown").val(seg), $("#fontSelector").css({ top: "" + $("#pushDown").val() + "px" }), (window.location.href.includes("?") || window.location.href.includes("D:")) && setTimeout(function () {
        closeSettingsNow(), $("#intro").toggle(333, function () {
            $("#logo").toggleClass("opened");
        });
    }, 300), adjustScoreDigitSize(), adjustRankings(), showHideMiliseconds();
}

function getUrlVars() {
    var e = {};
    parameterstring.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (t, x, s) {
        e[x] = s;
    });
    return e;
}

function getUrlParam(e, t) {
    var x = t;
    return parameterstring.indexOf(e) > -1 && (x = getUrlVars()[e]), x;
}

function settingsToUrl() {
    var e = "";
    $("#scoreBoardTitle").val() != "Tournament" && (e += "&title=" + encodeURI($("#scoreBoardTitle").val()));
    for (x = 1; x <= 10; x++) seg = "#score" + x, 0 != Number($(seg).val()) && (e += "&t" + x + "=" + $(seg).val()), 3 == mode && (e += "&ms" + x + "=" + $(seg).attr("data-ms"));
    if (2 == mode) {
        j = Number($("#wrapScores").attr("class").slice(-1));
        var t = "r";
        for (x = 1; x <= j; x++) t = "&ro" + x + "=", $(".teamScore" + x).each(function () {
            t += $(this).val() + "-";
        }), e += t = t.slice(0, -1);
    }
    $("#teamName1").val() != "Home" && (e += "&n1=" + $("#teamName1").val()), $("#teamName2").val() != "Visitor" && (e += "&n2=" + $("#teamName2").val());
    for (var x = 3; x <= 10; x++) seg = "#teamName" + x, $(seg).val() != "Team" + x && (e += "&n" + x + "=" + $(seg).val());
    return 1 == countDown ? 10 != Number($("#minutes").val()) && (e += "&mm=" + Number($("#minutes").val())) : 0 != Number($("#minutes").val()) && (e += "&mm=" + Number($("#minutes").val())), 0 != Number($("#seconds").val()) && (e += "&ss=" + Number($("#seconds").val())), 0 != Number($("#hundredth").val()) && (e += "&hh=" + Number($("#hundredth").val())), seg = "1", $("#settings i").each(function () {
        j = $(this).attr("data-button"), $(j).css("display") == "none" ? seg += "0" : seg += "1";
    }), 19767 != (seg = parseInt(seg, 2)) && (e += "&show=" + seg), seg = "", $("ol.centerPanel > li").each(function () {
        seg += $(this).attr("data-li");
    }), seg != "12345" && (e += "&panelord=" + seg), seg = "&stt=", seg += mode, seg += clock, seg += countDown, seg += timeOut1, seg += timeOut2, seg += playSounds, seg += playerFouls, seg += foulsPerQuater, seg += shotClockColorDifferent, seg += shotAutoStart, seg += $(".fontCat.select").attr("data-s"), seg += $(".timerWiewCat.select").attr("data-order"), $("#wrapOvertime").css("display") == "none" ? seg += 0 : seg += 1, seg += $(".shotClockSizeCat.select").attr("data-s"), -1 == (j = Number($("#wrapScores").attr("class").slice(-1)) - 1) && (j = 9), (seg += j) != "&stt=101000550113011" && (e += seg), 10 != $("#periodDuration").val() && (e += "&pd=" + $("#periodDuration").val()), 24 != $("#shotClockDuration").val() && (e += "&shot=" + $("#shotClockDuration").val()), $("#shotClock").val() != shot && $("#showShotClock").css("display") != "none" && (e += "&stc=" + $("#shotClock").val()), $("#customCSS").val().length > 3 && (e += "&stl=" + encodeURI($("#customCSS").val())), $("#bgColor").val() == "#69716B" && $("#textColor").val() == "#FFFFFF" && $("#digitColor").val() == "#F70000" && $("#digitBg").val() == "#000000" || (seg = $("#bgColor").val(), seg = seg.substring(1, seg.length), e += "&colors=" + seg + "-", seg = $("#textColor").val(), e += (seg = seg.substring(1, seg.length)) + "-", seg = $("#digitColor").val(), e += (seg = seg.substring(1, seg.length)) + "-", seg = $("#digitBg").val(), e += seg = seg.substring(1, seg.length)), 0 == Number($("#penaltyH1Min").val()) && 0 == Number($("#penaltyH1Sec").val()) || (e += "&ph1nr=" + $("#penaltyH1").val() + "&ph1m=" + $("#penaltyH1Min").val() + "&ph1s=" + $("#penaltyH1Sec").val()), 0 == Number($("#penaltyH2Min").val()) && 0 == Number($("#penaltyH2Sec").val()) || (e += "&ph2nr=" + $("#penaltyH2").val() + "&ph2m=" + $("#penaltyH2Min").val() + "&ph2s=" + $("#penaltyH2Sec").val()), 0 == Number($("#penaltyV1Min").val()) && 0 == Number($("#penaltyV1Sec").val()) || (e += "&pv1nr=" + $("#penaltyV1").val() + "&pv1m=" + $("#penaltyV1Min").val() + "&pv1s=" + $("#penaltyV1Sec").val()), 0 == Number($("#penaltyV2Min").val()) && 0 == Number($("#penaltyV2Sec").val()) || (e += "&pv2nr=" + $("#penaltyV2").val() + "&pv2m=" + $("#penaltyV2Min").val() + "&pv2s=" + $("#penaltyV2Sec").val()), $("#showHidePlayerBoards").hasClass("sp") && (x = 0, hPlayers = [], seg = "&hplayers=", $("#playersHome .phname").each(function () {
        seg += encodeURI($(this).val()) + "-";
    }), (seg = seg.substring(0, seg.length - 1)) != "&hplayers=Name-----------" && (e += seg), x = 0, vPlayers = [], seg = "&vplayers=", $("#playersVisitor .pvname").each(function () {
        seg += encodeURI($(this).val()) + "-";
    }), (seg = seg.substring(0, seg.length - 1)) != "&vplayers=Name-----------" && (e += seg), x = 0, hnrs = [], seg = "&hnrs=", $("#playersHome .plnr").each(function () {
        seg += encodeURI($(this).val()) + "-";
    }), (seg = seg.substring(0, seg.length - 1)) != "&hnrs=1-2-3-4-5-6-7-8-9-10-11-12" && (e += seg), x = 0, vnrs = [], seg = "&vnrs=", $("#playersVisitor .plnr").each(function () {
        seg += encodeURI($(this).val()) + "-";
    }), (seg = seg.substring(0, seg.length - 1)) != "&vnrs=1-2-3-4-5-6-7-8-9-10-11-12" && (e += seg), x = 0, hpf = [], seg = "&hpf=", $("#playersHome .pfouls > div").each(function () {
        seg += $(this).attr("class").charAt(5) + "-";
    }), (seg = seg.substring(0, seg.length - 1)) != "&hpf=0-0-0-0-0-0-0-0-0-0-0-0" && (e += seg), x = 0, vpf = [], seg = "&vpf=", $("#playersVisitor .pfouls > div").each(function () {
        seg += $(this).attr("class").charAt(5) + "-";
    }), (seg = seg.substring(0, seg.length - 1)) != "&vpf=0-0-0-0-0-0-0-0-0-0-0-0" && (e += seg), x = 0, hpscore = [], seg = "&hpscore=", $("#playersHome .wrapPscore input").each(function () {
        seg += $(this).val() + "-";
    }), (seg = seg.substring(0, seg.length - 1)) != "&hpscore=0-0-0-0-0-0-0-0-0-0-0-0" && (e += seg), x = 0, vpscore = [], seg = "&vpscore=", $("#playersVisitor .wrapPscore input").each(function () {
        seg += $(this).val() + "-";
    }), (seg = seg.substring(0, seg.length - 1)) != "&vpscore=0-0-0-0-0-0-0-0-0-0-0-0" && (e += seg)), $(".wrapLabel").css("display") != "none" && (seg = "&lbl=", $("input.label").each(function () {
        seg += encodeURI($(this).val()) + "-";
    }), (seg = seg.substring(0, seg.length - 1)) != "FOULS-PENALTY-TIME%20OUT-PERIOD-PENALTY-TIME%20OUT-FOULS" && (e += seg)), $("#possession1").hasClass("active") && (e += "&alt=1"), $("#period").val() != "1" && (e += "&peri=" + $("#period").val()), $("#fouls1").val() != "0" && (e += "&fls1=" + $("#fouls1").val()), $("#fouls2").val() != "0" && (e += "&fls2=" + $("#fouls2").val()), $("#backgroundImg").val().length > 5 && (e += "&bgimg=" + encodeURI($("#backgroundImg").val())), $("#team1Img").val().length > 5 && (e += "&ti1mg=" + encodeURI($("#team1Img").val())), $("#team2Img").val().length > 5 && (e += "&ti2mg=" + encodeURI($("#team2Img").val())), 0 != $("#pushDown").val() && (e += "&pushdown=" + $("#pushDown").val()), e = e.replaceAt(0, "?");
}

function updtateWhatsActiveWhatNot() {
    $("#settings span").removeClass("select"), $("#settings i").each(function () {
        var e = $(this).attr("data-button");
        $(e).css("display") == "none" && $(this).addClass("hidden");
    }), $(".modeCat:eq(" + (mode - 1) + ")").addClass("select"), $(".teamCat:eq(" + (Number($("#wrapScores").attr("class").slice(-1)) - 1) + ")")["addClass"]("select"), $("#wrapTime").hasClass("timerMS") && $(".timerWiewCat:nth-child(2)").addClass("select"), $("#wrapTime").hasClass("timerAll") && $(".timerWiewCat:nth-child(3)").addClass("select"), $("#wrapTime").hasClass("timerAuto") && $(".timerWiewCat:nth-child(4)").addClass("select"), $(".countDirCat:eq(" + Number(countDown) + ")").addClass("select"), $("#periodDuration").val(periodDuration), $("#shotClockDuration").val(shot), $(".soundsCat:eq(" + playSounds + ")").addClass("select"), $(".fontCat:eq(" + (Number($("#fontSelector").attr("class").slice(-1)) - 1) + ")")["addClass"]("select"), $("#shotClock").hasClass("size1") ? $(".shotClockSizeCat:eq(0)").addClass("select") : $("#shotClock").hasClass("size2") ? $(".shotClockSizeCat:eq(1)").addClass("select") : $("#shotClock").hasClass("size3") ? $(".shotClockSizeCat:eq(2)").addClass("select") : $(".shotClockSizeCat:eq(0)").addClass("select"), $(".shotClockColorSelect:eq(" + shotClockColorDifferent + ")").addClass("select"), $(".shotAutoStartCat:eq(" + shotAutoStart + ")").addClass("select");
}
function updateColorScheme() {
    $("body").css("background-color", $("#bgColor").val()), $("#panelCorner a, #toggleMenu").css("color", $("#bgColor").val()), $(".timeOutDot, .pfouls > div > div, .timeOutDot.glow, #panelCorner a, #toggleMenu").css("background-color", $("#textColor").val()), $("#errorLog").css("border-color", $("#textColor").val()), $("#logo span, .editable, .alwaysEditable, .timerSeparator, .wrapPenaltyClock span, .lapScore, .shotClockColorSelect").css("color", $("#digitColor").val()), $("input.teamName, a#logo, .possession, .phname, .plnr, .penaltyNR, .secondShotClockColor, .ranking, #logo strong").css("color", $("#textColor").val()), $(".pfouls > div > div:last-child").css("background-color", $("#digitColor").val()), $(".wrapEditable, #wrapTime, #logo span, .players, .wrapPenaltyClock, .lapScore, .shotClockColorSelect").css("background-color", $("#digitBg").val()), $("#panelCorner a svg").css("fill", $("#bgColor").val()), 1 == shotClockColorDifferent && $("#shotClock").css("color", $(".teamName").css("color"));
}
function enableDisableEditing() {
    1 == clock && clockTrigger(), $("#showCaretOrNot").toggleClass("showEditCaret"), $("#showCaretOrNot").hasClass("showEditCaret") ? enableEditing() : disableEditing();
}
function enableEditing() {
    $("#editValues").addClass("active"), setTimeout(function () {
        $("#score1").focus();
    }, 100);
}
function disableEditing() {
    3 != mode && resetShotClock(Number($("#shotClock").val())), $("#editValues").removeClass("active"), $("#hiddenInput").focus(), $("#hiddenSpan").focus(), setTimeout(function () {
        disableButtonCommands = 0;
    }, 100);
}
function adjustRankings() {
    var e = new Array, t = [0, 0, 0, 0, 0, 0, 0, 0, 99, 0], x = 0;
    j = 0;
    var s;
    $(".score").each(function () {
        e[j] = Number($(this).attr("data-ms")), t[j] = 0, j++;
    }), j = 1;
    do {
        for (x = 0, s = 0; s < e.length; s++) e[s] > x && (x = e[s], s);
        if (x > 0) for (s = 0; s < e.length; s++) e[s] == x && (e[s] = 0, t[s] = j);
        j++;
        var o = 0;
        for (s = 0; s < e.length; s++) o += e[s];
    } while (o > 0);
    for (x = 0, s = 0; s < e.length; s++) t[s] > x && (x = t[s]);
    if (3 == mode) for (s = 0; s < e.length; s++) 0 != t[s] && (t[s] = x - t[s] + 1);
    j = 0, $(".score").each(function () {
        0 != t[j] && x >= 3 ? $(this).parent().parent().prev().html("<span>" + t[j] + ".</span>") : $(this).parent().parent().prev().text(""), j++;
    });
}
function addLapScores() {
    for (var e = 0, t = 1; t < 11; t++) e = 0, $(".teamScore" + t).each(function () {
        e += Number($(this).val());
    }), $("#score" + t).val(e), $("#score" + t).attr("data-ms", e);
    adjustScoreDigitSize();
}
function updateBgImg() {
    $("body").css("background-image", "url(" + $("#backgroundImg").val() + ")");
}
function updateTeamImg(e) {
    $("#team" + e + "Img").val().length > 10 ? $("#teamImage" + e).html('<img src="' + $("#team" + e + "Img").val() + '" alt="Invalid image link" />') : $("#teamImage" + e).html(""), adjustLogoHeight(), setTimeout(function () {
        adjustLogoHeight();
    }, 500), setTimeout(function () {
        adjustLogoHeight();
    }, 2e3);
}
function adjustLogoHeight() {
    var e = 1;
    $(".teamImage img").each(function () {
        e < $(this).height() && (e = $(this).height()), $(".teamImage").height(e);
    });
}
function adjustScoreDigitSize() {
    var e = 1;
    $(".score").each(function () {
        $(this).val().toString().length > e && (e = $(this).val().toString().length);
    }), 1 == e && $(".numberLengthAdjustWidth").css("fontSize", "1em"), 2 == e && $(".numberLengthAdjustWidth").css("fontSize", "1em"), 3 == e && $(".numberLengthAdjustWidth").css("fontSize", "0.7em"), 4 == e && $(".numberLengthAdjustWidth").css("fontSize", "0.5em"), 5 == e && $(".numberLengthAdjustWidth").css("fontSize", "0.40em"), 6 == e && $(".numberLengthAdjustWidth").css("fontSize", "0.35em"), 7 == e && $(".numberLengthAdjustWidth").css("fontSize", "0.3em"), 8 == e && $(".numberLengthAdjustWidth").css("fontSize", "0.27em"), e > 8 && $(".numberLengthAdjustWidth").css("fontSize", "0.2em"), adjustRankings();
}
function clockTrigger() {
    if (!$("#showCaretOrNot").hasClass("showEditCaret")) {
        var e = (e = new Date).getTime(), t = 0;
        if (0 == clock) {
            var x = Number($("#minutes").val()),
                s = Number($("#seconds").val()),
                o = 10 * Number($("#hundredth").val()) + 1e3 * s + 6e4 * x;
            1 == countDown && 0 == o
                && (console.log("Countdown expired"),
                    t = 1,
                    setClockTime(6e4 * periodDuration),
                    updatePlayerPenaltyTimes(),
                    resetShotClock(shot)),
                0 == countDown && o == 6e4 * periodDuration
                && (console.log("Countup expired"),
                    t = 1,
                    setClockTime(0),
                    updatePlayerPenaltyTimes(),
                    resetShotClock(shot)),
                0 == t && (1 == countDown && (o = 6e4 * periodDuration - o), startTime = e - o, clock = 1, $("#wrapWrapTime").addClass("timerRunning"), refreshTimer(), 0 == shotAutoStart && (shotPause = 1, $("#shotClockPause").addClass("paused"), console.log("Shotpause")));
        }
        else $("#wrapWrapTime").removeClass("timerRunning"), clock = 0;
    }
}
function pauseShotClock(e) {
    e == "0" && ($("#shotClockPause").removeClass("paused"), resetShotClock(Number($("#shotClock").val())), shotPause = 0), e == "1" && ($("#shotClockPause").addClass("paused"), shotPause = 1), e == "toggle" && (0 == shotPause ? ($("#shotClockPause").addClass("paused"), shotPause = 1) : ($("#shotClockPause").removeClass("paused"), resetShotClock(Number($("#shotClock").val())), shotPause = 0)), 1 == shotPause ? 0 != shotClockSeconds && $("#shotClock").css("opacity", 0.6) : $("#shotClock").css("opacity", 1);
}
function resetShotClock(e) {
    shotPause = 0, $("#shotClockPause").removeClass("paused"), e > 1 && ($("#wrapshotClock").removeClass("timeisUp"), shotClockTime = 1e3 * e, shotClockExpired = 0), $("#shotClock").val(Number(e));
    var t = Number($("#minutes").val()), x = Number($("#seconds").val()), s = 10 * Number($("#hundredth").val()) + 1e3 * x + 6e4 * t;
    tamadoIdoUp = s + 1e3 * (e + 1), tamadoIdoDown = s - 1e3 * (e + 1);
}
function refreshTimer() {
    var e = new Date, t = 0, x = (e = e.getTime()) - startTime, s = expirePenaltyH1up - x, o = expirePenaltyH2up - x, a = expirePenaltyV1up - x, _ = expirePenaltyV2up - x;
    0 == shotPause && (shotClockTime = tamadoIdoUp - x - 1), 1 == countDown && (s = 6e4 * periodDuration - x - expirePenaltyH1down, o = 6e4 * periodDuration - x - expirePenaltyH2down, a = 6e4 * periodDuration - x - expirePenaltyV1down, _ = 6e4 * periodDuration - x - expirePenaltyV2down, 0 == shotPause && (shotClockTime = 6e4 * periodDuration - x - tamadoIdoDown - 1)), shotClockSeconds = Math.floor(shotClockTime % 6e4 / 1e3), 1 == shotPause ? 0 != shotClockSeconds && $("#shotClock").css("opacity", 0.6) : $("#shotClock").css("opacity", 1), 0 == shotClockSeconds && 0 == shotPause && pauseShotClock("toggle"), 0 == shotClockSeconds && 1 == shotPause && 0 == shotClockExpired && (console.log("Shotclock expired!"), shotClockExpired = 1, 1 == playSounds && $("#showShotClock").css("display") != "none" && buzzer.play(), $("#wrapshotClock").addClass("timeisUp"), setTimeout(function () {
        $("#wrapshotClock").removeClass("timeisUp");
    }, 2e3), $("#shotClock").val(0)), shotClockSeconds >= 0 && 0 == shotPause && $("#shotClock").val(shotClockSeconds), kiirPenaltyClockTime("H1", s), kiirPenaltyClockTime("H2", o), kiirPenaltyClockTime("V1", a), kiirPenaltyClockTime("V2", _), t = 0 == countDown ? x : 6e4 * periodDuration - x, 0 == countDown ? t > 6e4 * periodDuration && 3 != mode && (t = 6e4 * periodDuration, timerExpired()) : t < 0 && (t = 0, timerExpired()), setClockTime(t), setTimeout(function () {
        1 == clock && refreshTimer();
    }, 10);
}
function kiirPenaltyClockTime(e, t) {
    var x = Math.floor(t / 6e4), s = Math.floor(t % 6e4 / 1e3);
    s < 10 && (s = "0" + s), $("#wrapPenaltyClock" + e).hasClass("off") ? ($("#penalty" + e + "Min").val("0"), $("#penalty" + e + "Sec").val("00"), $("#penalty" + e).val("")) : ($("#penalty" + e + "Min").val(x), $("#penalty" + e + "Sec").val(s)), (x < 0 || s < 0) && ($("#penalty" + e + "Min").val("0"), $("#penalty" + e + "Sec").val("00"), $("#wrapPenaltyClock" + e).addClass("off"));
}
function setClockTime(e) {
    //-1 == String(document.domain).indexOf("oreco") && (startTime = 0);
    var t = Math.floor(e / 6e4), x = Math.floor(e % 6e4 / 1e3), s = Math.floor(e % 1e3 / 10);
    s < 10 && (s = "0" + s), x < 10 && (x = "0" + x), $("#minutes").val(t), $("#seconds").val(x), $("#hundredth").val(s), showHideMiliseconds(), timerNow = e, t > 99 ? ($("#minutes").attr("maxlength", 3), $("#minutes").attr("size", 3), $("#minutes").addClass("smallerMinutesFont")) : ($("#minutes").attr("maxlength", 2), $("#minutes").attr("size", 2), $("#minutes").removeClass("smallerMinutesFont"));
}
function timerExpired() {
    clock = 0, 1 == playSounds && buzzer.play();
    var e = $("body").attr("class"), t = "darkTheme";
    e == "darkTheme" && (t = "defaultTheme"), e == "brightTheme" && (t = "defaultTheme"), $("body").removeClass(e), $("body").addClass(t), setTimeout(function () {
        $("body").addClass(e), $("body").removeClass(t);
    }, 2200);
}
function showHideMiliseconds() {
    var e = Number($("#minutes").val()), t = Number($("#seconds").val()), x = 10 * Number($("#hundredth").val()) + 1e3 * t + 6e4 * e;
    x >= 6e4 && $("#isUnderOneMin").hasClass("itIsUnderOneMin") && ($("#isUnderOneMin").removeClass("itIsUnderOneMin"), $("#isUnderOneMin").addClass("itIsAboveOneMin")), x < 6e4 && !$("#isUnderOneMin").hasClass("itIsUnderOneMin") && ($("#isUnderOneMin").addClass("itIsUnderOneMin"), $("#isUnderOneMin").removeClass("itIsAboveOneMin"));
}
function updatePlayerPenaltyTimes() {
    updatePlayerPenaltyTime("H1"), updatePlayerPenaltyTime("H2"), updatePlayerPenaltyTime("V1"), updatePlayerPenaltyTime("V2");
}
function updatePlayerPenaltyTime(e) {
    j = Number($("#penalty" + e + "Min").val());
    var t = Number($("#penalty" + e + "Sec").val());
    if (0 == t && 0 == j) $("#wrapPenaltyClock" + e).addClass("off"); else {
        var x = Number($("#minutes").val()), s = Number($("#seconds").val()), o = Number($("#hundredth").val());
        e == "H1" && (expirePenaltyH1up = 10 * o + 1e3 * (s + t) + 6e4 * (x + j), expirePenaltyH1down = 10 * o + 1e3 * (s - t) + 6e4 * (x - j)), e == "H2" && (expirePenaltyH2up = 10 * o + 1e3 * (s + t) + 6e4 * (x + j), expirePenaltyH2down = 10 * o + 1e3 * (s - t) + 6e4 * (x - j)), e == "V1" && (expirePenaltyV1up = 10 * o + 1e3 * (s + t) + 6e4 * (x + j), expirePenaltyV1down = 10 * o + 1e3 * (s - t) + 6e4 * (x - j)), e == "V2" && (expirePenaltyV2up = 10 * o + 1e3 * (s + t) + 6e4 * (x + j), expirePenaltyV2down = 10 * o + 1e3 * (s - t) + 6e4 * (x - j)), $("#wrapPenaltyClock" + e).removeClass("off");
    }
}
function setJsColor(e, t) {
    $("#" + e).val("#" + t), $("#" + e).next().css("background-color", "#" + t);
}
function set(e, t) {
    if (e == "shotClockSize" && ($("#showShotClock").show(), $("#shotClock").removeClass("size1"), $("#shotClock").removeClass("size2"), $("#shotClock").removeClass("size3"), $("#shotClock").addClass("size" + t)), e == "shotAutoStart" && (shotAutoStart = t, 1 == shotPause ? 0 != shotClockSeconds && $("#shotClock").css("opacity", 0.6) : $("#shotClock").css("opacity", 1)), e == "shotClockColor" && ($("#showShotClock").show(), shotClockColorDifferent = t, 0 == t ? $("#shotClock").css("color", $("#minutes").css("color")) : $("#shotClock").css("color", $(".teamName").css("color"))), e == "theme" && (t == "defaultTheme" && (setJsColor("bgColor", "69716b"), setJsColor("textColor", "FFFFFF"), setJsColor("digitColor", "f70000"), setJsColor("digitBg", "000000")), t == "darkTheme" && (setJsColor("bgColor", "000000"), setJsColor("textColor", "BBBBBB"), setJsColor("digitColor", "f70000"), setJsColor("digitBg", "000000")), t == "brightTheme" && (setJsColor("bgColor", "EEEEEE"), setJsColor("textColor", "333333"), setJsColor("digitColor", "a70000"), setJsColor("digitBg", "FFFFFF")), t == "contrastTheme" && (setJsColor("bgColor", "000000"), setJsColor("textColor", "FFFFFF"), setJsColor("digitColor", "000000"), setJsColor("digitBg", "FFFFFF")), updateColorScheme(), $("body").removeClass(), $("body").addClass(t)), e == "team" && ($("#wrapScores").removeClass(), $("#wrapScores").addClass("teams" + t)), e == "font" && ($("#fontSelector").removeClass(), $("#fontSelector").addClass("font" + t), updateFontSizeAccordingToFontSlider()), e == "timerWiew" && ($("#wrapTime").removeClass(), $("#wrapTime").addClass(t), $("#wrapTime").show(222), updateFontSizeAccordingToFontSlider()), e == "countDir") {
        1 == clock && clockTrigger(), countDown = t;
        var x = Number($("#minutes").val()), s = Number($("#seconds").val()), o = Number($("#hundredth").val());
        1 == t && 0 == x && 0 == s && 0 == o && setClockTime(6e4 * Number($("#periodDuration").val())), 0 == t && x == Number($("#periodDuration").val()) && 0 == s && 0 == o && setClockTime(0), resetShotClock(Number($("#shotClock").val())), updateTimerResetOptions(), updatePlayerPenaltyTimes();
    }
    if (e == "sounds" && (playSounds = t == "on" ? 1 : 0), e == "mode" && ($("#activeModeNow").removeClass(), $("#activeModeNow").addClass("mode" + t), $("#periodDuration").css("color", "#444444"), resetScore(), mode != Number(t))) {
        if ($(".wrapQuickScoreSett").hide(), 1 == (mode = Number(t)) && ($(".wrapQuickScoreSett").show(), $("input.score").each(function () {
            $(this).val(0);
        }), $(".roundsAndAddIcon").hide(300)), 2 == mode) {
            if ($("input.score").each(function () {
                $(this).val(0);
            }), -1 == rounds) {
                rounds = 2;
                var a = 0;
                $(".roundWrapper").each(function () {
                    a++, $(this).html('<input id="team' + a + 'LapScore1" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + a + ' digital alwaysEditable" type="number" value="" />'), $(this).append('<input id="team' + a + 'LapScore2" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + a + ' digital alwaysEditable" type="number" value="" />');
                });
            }
            $(".roundsAndAddIcon").show(300), $(".lapScore").first().focus(), updateColorScheme();
        }
        3 == mode && ($(".roundsAndAddIcon").hide(300), set("countDir", 0), $("#periodDuration").css("color", "#BBBBBB")), resetScore();
    }
    setTimeout(function () {
        updtateWhatsActiveWhatNot();
    }, 100);
}
function updateFontSizeAccordingToFontSlider() {
    0 == fontSizeInitiated && (seg = $("#scoreBoard").css("font-size"), seg = seg.substring(0, seg.length - 2), $("#fontSlider").val(Number(seg)), fontSizeInitiated = 1), $("#scoreBoard").css({ "font-size": "" + $("#fontSlider").val() + "px" });
}
function closeSettingsNow() {
    $("#settings").hide(300), $("#openSettings").removeClass("active"), $("#settingsOpen").removeClass("settingsIsOpen"), disableEditing();
}
function buttonClick(e) {
    e == "zoom100" && ($("#zoomSlider").val(1), $("#fontSelector").css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), $("#fontSlider").val(startingFontSize), updateFontSizeAccordingToFontSlider(), $("#pushDown").val(0), $("#fontSelector").css({ top: "" + $("#pushDown").val() + "px" })), e == "resetScore" && resetScore(), e == "resetTimer" && resetTimter(), e == "resetPeriod" && ($("#period").val(1), $("#fouls1").val(0), $("#fouls2").val(0)), e == "resetPlayers" && (vPlayers = ["Name", "", "", "", "", "", "", "", "", "", "", ""], hPlayers = vPlayers, vnrs = hnrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vpf = hpf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], hpscore = hpf, vpscore = hpf, generatePlayersTemplate());
}
function resetScore() {
    var e = 0;
    rounds = 2, $(".roundWrapper").each(function () {
        e++, $(this).html('<input id="team' + e + 'LapScore1" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + e + ' digital alwaysEditable" type="number" value="" />'), $(this).append('<input  id="team' + e + 'LapScore2" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + e + ' digital alwaysEditable" type="number" value="" />');
    }), $(".score").each(function () {
        $(this).attr("data-ms", 0);
    }), 3 == mode ? $(".score").each(function () {
        $(this).val("        ");
    }) : ($(".wrapPscore input").each(function () {
        $(this).val(0);
    }), $(".score").each(function () {
        $(this).val(0);
    })), $(".lapScore").each(function () {
        $(this).val("");
    }), adjustScoreDigitSize();
}
function updateTimerResetOptions() {
    $("#quickTimerSet a").each(function () {
        Number($(this).text()) < periodDuration ? $(this).show() : $(this).hide(), $("#equalWithPeriodDuration").hide(), 1 == countDown && ($("#equalWithPeriodDuration").text(periodDuration), $("#equalWithPeriodDuration").show());
    });
}
function resetTimter() {
    1 == clock && clockTrigger(), 0 == countDown ? $(".timer").each(function () {
        $(this).val("00");
    }) : setClockTime(6e4 * periodDuration);
}
function fullscreen() {
    var e = document.fullscreenElement && null !== document.fullscreenElement || document.webkitFullscreenElement && null !== document.webkitFullscreenElement || document.mozFullScreenElement && null !== document.mozFullScreenElement || document.msFullscreenElement && null !== document.msFullscreenElement, t = document.documentElement;
    e ? ($("#fullScreen").removeClass("active"), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : ($("#fullScreen").addClass("active"), t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen ? t.webkitRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen());
}
function increasePlayerFouls(e) {
    seg = Number($(e).children().attr("class").slice(-1));
    var t = $(e).children().attr("id");
    seg < playerFouls ? (seg++, $(e).children().removeClass(), $(e).children().addClass("fouls" + seg), $(e).attr("data-team") == "h" ? (j = $("#fouls1").val()) < foulsPerQuater && $("#fouls1").val(++j) : (j = $("#fouls2").val()) < foulsPerQuater && $("#fouls2").val(++j)) : errorLog("This player has already got " + playerFouls + " fouls. <span class='resetPlayerFouls' onclick='resetPlayerFouls()'>Reset</span> <span class='extractOnePlayerFoul' onclick='extractOnePlayerFoul(" + (seg - 1) + ")'>Extract&nbsp;1</span> <span>Close</span><em class='invisible' id='resetPlayerScoreID'>" + t + "</em>");
}
function extractOnePlayerFoul(e) {
    var t = $("#resetPlayerScoreID").text();
    $("#" + t).removeClass(), $("#" + t).addClass("fouls" + e);
}
function resetPlayerFouls() {
    var e = $("#resetPlayerScoreID").text();
    $("#" + e).removeClass(), $("#" + e).addClass("fouls0");
}
function increasePlayerScore(e) {
    var t = $(e).find("input"), x = Number(t.val()), s = t.attr("data-team");
    s = s == "h" ? 1 : 2, 1 == mode && ($("#showCaretOrNot").hasClass("showEditCaret") || (isNaN(x++) || t.val(x), x = $("#score" + s).val(), isNaN(x++) || $("#score" + s).val(x), adjustScoreDigitSize()));
}
function generatePlayersTemplate() {
    $(".players").html("");
    for (var e = 1; e <= hPlayers.length; e++) {
        var t = "h";
        for (seg = '<div id="p' + e + '" class="player"><input id="p' + t + e + '1nr" class="plnr" type="text" value="' + hnrs[e - 1] + '" maxlength="2" size="2"><input id="p' + t + e + 'name" class="p' + t + 'name" type="text" value="' + decodeURI(hPlayers[e - 1]) + '" maxlength="12" size="12"><div onclick="increasePlayerFouls($(this))" class="pfouls" data-team="' + t + '"><div id="p' + t + e + 'fouls" class="fouls' + hpf[e - 1] + '"">', j = 1; j <= playerFouls; j++) seg += '<div class="pFoul' + j + '">o</div>';
        for (seg += '</div></div><div class="wrapPscore"><input data-team="' + t + '" data-player="' + e + '" id="p' + t + "points" + e + '" class="digital editable playerScore" type="number" value="' + hpscore[e - 1] + '" min="0" ></div></div>', $("#playersHome").append(seg), t = "v", seg = '<div id="p' + e + '" class="player"><input id="p' + t + e + '1nr" class="plnr" type="text" value="' + vnrs[e - 1] + '" maxlength="2" size="2"><input id="p' + t + e + 'name" class="p' + t + 'name" type="text" value="' + decodeURI(vPlayers[e - 1]) + '" maxlength="12" size="12"><div onclick="increasePlayerFouls($(this))" class="pfouls" data-team="' + t + '"><div id="p' + t + e + 'fouls" class="fouls' + vpf[e - 1] + '">', j = 1; j <= playerFouls; j++) seg += '<div class="pFoul' + j + '">o</div>';
        seg += '</div></div><div class="wrapPscore"><input data-team="' + t + '" data-player="' + e + '" id="p' + t + "points" + e + '" class="digital editable playerScore" type="number" value="' + vpscore[e - 1] + '" min="0" ></div></div>', $("#playersVisitor").append(seg);
    }
    $(".players").append('<div class="closeThisPanel" onclick="closeThisPanel(\'.players\')" title="Hide this panel">x</div>'), $(".players .editable").each(function () {
        $(this).wrap('<div onclick="increasePlayerScore($(this))" class="wrapEditable" id="wrap' + $(this).attr("id") + '"></div>'), $(this).after('<div class="inputOverlay"></div>');
    });
}
function addNewSocreAdderRound() {
    var e = 0;
    rounds++, $(".roundWrapper").each(function () {
        e++, $(this).append('<input  id="team' + e + "LapScore" + rounds + '" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + e + ' digital alwaysEditable" type="number" value="" />');
    }), updateColorScheme();
}
function closeThisPanel(e) {
    e == ".players" && $("#showHidePlayerBoards").removeClass("sp"), e == ".wrapLabel" && $("#showHideLabels").removeClass("sl"), $(e).toggle(100, function () {
        updtateWhatsActiveWhatNot();
    });
}
function updateCustomCss() {
    (seg = $("#customCSS").val()).includes("#logo") ? errorLog("Please don't adjust the logo.") : $("#customeStyles").html("<style>" + seg + "</style>");
}
function closeIntro() {
    $("#article").hide(333), $("#intro").hide(333, function () {
        $("#logo").removeClass("opened");
    }), disableEditing();
}
function resizeContent() {
    var e = Number($(window).height()) - 20;
    $("#showHidePlayerBoards").css("min-height", e);
}
function toggleSettings() {
    $("#openSettings").hasClass("active") ? closeSettingsNow() : (updtateWhatsActiveWhatNot(), $("#settings").fadeIn(200), $("#openSettings").addClass("active"), $("#settingsOpen").addClass("settingsIsOpen"));
}
function errorLog(e) {
    $("#errorLog").html(e), $("#errorLogShadow").fadeIn(222);
}
function adjustScore(e, t) {
    console.log("adjustScore: ", e, " - ", t);
    var x = Number($(e).val()) + t;
    x < 0 && (x = 0), $(e).val(x), $(e).attr("data-ms", x), adjustScoreDigitSize();
}
"use strict";
var mode = 1, timerNow = -1, clock = 0, min, sec, ms = 0, countDown = 1, periodDuration = 10, shot = 24, vPlayers, hPlayers, hnrs, vnrs, hpf, vpf, hpscore, vpscore, startingFontSize = 19, timeOut1 = 0, timeOut2 = 0, playSounds = 0, disableButtonCommands = 0, cssFieldInFocus = 0, seg = 0, playerFouls = 5, foulsPerQuater = 5, j = 0, shotPause = 0, shotClockColorDifferent = 0, shotAutoStart = 1, sett = new Array;

$(document).ready(function () {
    $("#showHidePlayerBoards").html('<div id="showHideLabels" class="slNOPE"> <div id="activeModeNow" class="mode1"> <div id="settingsOpen" class="settingsIsOpen"> <div id="scoreBoard" spellcheck="false"> <div id="fontSelector" class="font1"> <div id="showCaretOrNot"> <div class="players" id="playersHome"> <!-- Populated with js --> </div> <ol class="centerPanel"> <li data-li="1" class="listaPanel1"> <div class="wrapBoardTitle"> <input id="scoreBoardTitle" type="text" value="Tournament" > </div> </li> <li data-li="2" class="listaPanel2"> <div id="wrapScores" class="teams2"> <!-- Populated with js --> </div> </li> <li data-li="3" id="middleSection" class="listaPanel3"> <div class="inlineBlock"> <div class="possession" id="possession1"> &#9668; </div> <div class="wrapFouls"> <div class="wrapLabel"> <input class="label foulLabel" type="text" value="FOULS" > </div> <input id="fouls1" class="digital editable" type="number" value="0" min="0" max="9" > </div> <div> <div class="showHockeyPenalty"> <div class="wrapLabel"> <input class="label penaltyLabel" type="text" value="PENALTY" > </div> <div class="playerPenalty"> <input id="penaltyH1" class="penaltyNR" type="text" value="" maxlength="2" size="2"> <div class="wrapPenaltyClock off" data-player="H1" id="wrapPenaltyClockH1"> <input id="penaltyH1Min" class="digital editable" type="text" value="0" > <span id="penaltyClockSeparatorH1">:</span> <input id="penaltyH1Sec" class="digital editable" type="text" value="00" > </div> </div> <div class="playerPenalty"> <input id="penaltyH2" class="penaltyNR" type="text" value="" maxlength="2" size="2"> <div class="wrapPenaltyClock off" data-player="H2" id="wrapPenaltyClockH2"> <input id="penaltyH2Min" class="digital editable" type="text" value="0" > <span id="penaltyClockSeparatorH2">:</span> <input id="penaltyH2Sec" class="digital editable" type="text" value="00" > </div> </div> </div> </div> <div id="timeOut1" class="glow0"> <div class="wrapLabel"> <input class="label toLabel" type="text" value="TIME OUT" > </div> <div class="showTimeOut"> <div class="timeOutDot timeOutDot1">o</div> <div class="timeOutDot timeOutDot2">o</div> <div class="timeOutDot timeOutDot3">o</div> </div> </div> <div id="showOrHidePeriod"> <div class="wrapLabel"> <input class="label periodLabel" type="text" value="PERIOD" > </div> <div id="wrapPeriodDiv"> <div id="periodCenter"> <input id="period" class="digital editable" type="number" value="1" min="0" > </div> <div id="wrapOvertime"> <input id="overtime" type="text" value="OT" maxlength="2" size="2" > </div> </div> </div> <div> <div class="showHockeyPenalty"> <div class="wrapLabel"> <input class="label penaltyLabel" type="text" value="PENALTY" > </div> <div class="playerPenalty"> <input id="penaltyV1" class="penaltyNR" type="text" value="" maxlength="2" size="2"> <div class="wrapPenaltyClock off" data-player="V1" id="wrapPenaltyClockV1"> <input id="penaltyV1Min" class="digital editable" type="text" value="0" > <span id="penaltyClockSeparatorV1">:</span> <input id="penaltyV1Sec" class="digital editable" type="text" value="00" > </div> </div> <div class="playerPenalty"> <input id="penaltyV2" class="penaltyNR" type="text" value="" maxlength="2" size="2"> <div class="wrapPenaltyClock off" data-player="V2" id="wrapPenaltyClockV2"> <input id="penaltyV2Min" class="digital editable" type="text" value="0" > <span id="penaltyClockSeparatorV2">:</span> <input id="penaltyV2Sec" class="digital editable" type="text" value="00" > </div> </div> </div> </div> <div id="timeOut2" class="glow0"> <div class="wrapLabel"> <input class="label toLabel" type="text" value="TIME OUT" > </div> <div class="showTimeOut"> <div class="timeOutDot timeOutDot1">o</div> <div class="timeOutDot timeOutDot2">o</div> <div class="timeOutDot timeOutDot3">o</div> </div> </div> <div class="wrapFouls"> <div class="wrapLabel"> <input class="label foulLabel" type="text" value="FOULS" > </div> <input id="fouls2" class="digital editable" type="number" value="0" min="0" max="9" > </div> <div class="possession active" id="possession2"> &#9658; </div> <div class="clearboth"></div> </div> </li> <li data-li="4" id="wrapWrapTime" class="listaPanel4"> <div id="wrapTime" class="timerAuto"> <div class="inlineBlock"> <div id="isUnderOneMin" class="itIsUnderOneMin"> <input id="minutes" class="timer digital editable minutesSection" type="text" value="00" maxlength="2" size="2"> <span class="timerSeparator minutesSection digital">:</span> <input id="seconds" class="timer digital editable" type="text" value="00" maxlength="2" size="2"> <span class="timerSeparator hundredthSection digital">.</span> <input id="hundredth" class="timer digital editable hundredthSection" type="text" value="00" maxlength="2" size="2"> <div class="clearboth"></div> </div> </div> <div id="wrapQickTimerSet" class="revealWhenHovered"> <div id="quickTimerSet"> <a>0</a> <a>1</a> <a>2</a> <a>5</a> <a>10</a> <a>12</a> <a>15</a> <a>20</a> <a>25</a> <a>30</a> <a>60</a> <a id="equalWithPeriodDuration">99</a> </div> </div> </div> </li> <li data-li="5" class="listaPanel5"> <div id="showShotClock"> <div class="wrapShotClock"> <input id="shotClock" class="digital editable" type="text" value="24" maxlength="2" size="2" >  <div id="wrapShotClockButtons" class="revealWhenHovered"> <div id="shotClockButtons"> <a id="shotClockPause">&#10074;&#10074;</a> <a id="shotClockEdit"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;" xml:space="preserve"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"></path></g></svg> </a> <a id="shotClock14">14</a> </div> </div> </div> </div> </li> </ol> <div class="players" id="playersVisitor"> <!-- Populated with js --> </div> <div class="clearboth"> </div> </div> </div>  <div id="settings" class="right"> <div> <strong>Reset</strong>  <em data-button="resetScore">Score</em> <em data-button="resetTimer">Timer</em> <em data-button="resetPeriod">Period</em> <em data-button="resetPlayers">Players</em> </div><div> <strong>Mode</strong>  <span data-cat="mode" data-s="1">ScoreBoard</span>  <span data-cat="mode" data-s="2">ScoreSheet</span>  <span data-cat="mode" data-s="3">LapTimer</span>  </div><div> <strong>Teams</strong>  <span data-cat="team" data-s="1">1</span> <span data-cat="team" data-s="2">2</span> <span data-cat="team" data-s="3">3</span> <span data-cat="team" data-s="4">4</span> <span data-cat="team" data-s="5">5</span> <span data-cat="team" data-s="6">6</span> <span data-cat="team" data-s="7">7</span> <span data-cat="team" data-s="8">8</span> <span data-cat="team" data-s="9">9</span> <span data-cat="team" data-s="10">10</span> </div><div> <strong>Timer</strong> <span data-cat="timerWiew" data-s="timerMS" data-order="1" title="Minutes and seconds">M &amp; s</span>  <span data-cat="timerWiew" data-s="timerAll" data-order="2">All</span> <span data-cat="timerWiew" data-s="timerAuto" data-order="3">Auto</span> &nbsp;&nbsp;&nbsp;&nbsp; <span data-cat="countDir" data-s="0">Count up</span> <span data-cat="countDir" data-s="1">Count down</span>  </div><div> <strong>Period</strong> <input id="periodDuration" type="number" value="10" min="1" max="999" /> m  <i data-button="#wrapOvertime">OT</i> &nbsp;&nbsp;&nbsp;  <span data-cat="sounds" data-s="off"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 448.075 448.075" style="enable-background:new 0 0 448.075 448.075;" xml:space="preserve"> <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/> <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376  c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48  c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672  c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/> </svg> </span> <span data-cat="sounds" data-s="on"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_11" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 115.3 115.3" style="enable-background:new 0 0 115.3 115.3;" xml:space="preserve"> <g> <path d="M47.9,14.306L26,30.706H6c-3.3,0-6,2.7-6,6v41.8c0,3.301,2.7,6,6,6h20l21.9,16.4c4,3,9.6,0.2,9.6-4.8v-77   C57.5,14.106,51.8,11.306,47.9,14.306z"/> <path d="M77.3,24.106c-2.7-2.7-7.2-2.7-9.899,0c-2.7,2.7-2.7,7.2,0,9.9c13,13,13,34.101,0,47.101c-2.7,2.7-2.7,7.2,0,9.899   c1.399,1.4,3.199,2,4.899,2s3.601-0.699,4.9-2.1C95.8,72.606,95.8,42.606,77.3,24.106z"/> <path d="M85.1,8.406c-2.699,2.7-2.699,7.2,0,9.9c10.5,10.5,16.301,24.4,16.301,39.3s-5.801,28.8-16.301,39.3   c-2.699,2.7-2.699,7.2,0,9.9c1.4,1.399,3.2,2.1,4.9,2.1c1.8,0,3.6-0.7,4.9-2c13.1-13.1,20.399-30.6,20.399-49.2   c0-18.6-7.2-36-20.399-49.2C92.3,5.706,87.9,5.706,85.1,8.406z"/> </g> </svg> </span> <strong>Font</strong> <span data-cat="font" data-s="1" id="fontFamily1">18</span> <span data-cat="font" data-s="2" id="fontFamily2">18</span> <span data-cat="font" data-s="3" id="fontFamily3">18</span> <span data-cat="font" data-s="4" id="fontFamily4">18</span> <span data-cat="font" data-s="5" id="fontFamily5">18</span> </div><div> <strong>Shot</strong> <input id="shotClockDuration" type="number" value="24" min="1" max="999" /> s&nbsp;&nbsp;  <span data-cat="shotClockSize" data-s="1" title="Small">&#9603;</span> <span data-cat="shotClockSize" data-s="2" title="Medium">&#9605;</span> <span data-cat="shotClockSize" data-s="3" title="Large">&#9608;</span> &nbsp;&nbsp; 				  <span data-cat="shotClockColor" data-s="0" title="Same color" class="shotClockColorSelect">24</span> <span data-cat="shotClockColor" data-s="1" title="Different color" class="shotClockColorSelect secondShotClockColor">24</span> &nbsp; Start: <span data-cat="shotAutoStart" data-s="0">Manual</span> <span data-cat="shotAutoStart" data-s="1">Auto</span> </div><div> <strong>Colors</strong>  <div class="wrapColorPicker"><input class="jscolor" name="bgColor" id="bgColor" value="#69716B" title="Background color"></div> <div class="wrapColorPicker"><input class="jscolor" name="textColor" id="textColor" value="#FFFFFF" title="Text color"></div> <div class="wrapColorPicker"><input class="jscolor" name="digitColor" id="digitColor" value="#F70000" title="Digit color"></div> <div class="wrapColorPicker"><input class="jscolor" name="digitBg" id="digitBg" value="#000000" title="Digit Background"></div>  <span data-cat="theme" data-s="defaultTheme">Default</span>  <span data-cat="theme" data-s="darkTheme">Dark</span>  <span data-cat="theme" data-s="brightTheme">Light</span>  <span data-cat="theme" data-s="contrastTheme">B&amp;w</span> </div><div> <strong>Style</strong>  <textarea id="customCSS" name="customCSS" cols="20" rows="1" placeholder="Custom CSS stylesheet"></textarea> </div><div> <strong>Images</strong>  <input type="text" name="backgroundImg" id="backgroundImg" placeholder="Backgr URL" /> <input type="text" name="team1Img" id="team1Img" placeholder="Home logo" /> <input type="text" name="team2Img" id="team2Img" placeholder="Visitor logo" /> </div><div> <strong>Adjust</strong>  <em data-button="zoom100" title="Reset to default"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 489.533 489.533" style="enable-background:new 0 0 489.533 489.533;" xml:space="preserve"> <path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9   l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6   c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6   C49.575,418.961,150.875,501.261,268.175,488.161z" style="fill: rgb(0, 0, 0);"></path> </svg> </em> <input type="range" id="zoomSlider" min="0.2" max="2" step="0.05" value="1" title="Zoom"> <input type="range" id="fontSlider" min="5" max="30" step="1" value="18" title="Font size"> <input type="range" id="pushDown" min="-350" max="350" step="1" value="0" title="Push down"> </div><div> <strong>Show</strong> <i data-button=".wrapBoardTitle">Title</i> <i data-button=".wrapTeamName">Team</i> <i data-button=".scoreWrapper">Score</i> <i data-button=".wrapLabel" id="labelToggleButton">Labels</i> <i data-button="#wrapTime">Timer</i> <i data-button="#showShotClock">Shot</i> <i data-button=".players" id="playersToggleButton">Players</i> <br /> <strong></strong> <i data-button=".possession">Possession </i> <i data-button=".wrapFouls">Fouls</i> <i data-button=".showHockeyPenalty">Penalties</i> <i data-button=".showTimeOut">TimeOut</i> <i data-button="#showOrHidePeriod">Period</i> <i data-button=".ranking">Ranking</i> </div>  <div id="closeSettings" title="Close settings">&times;</div> <div id="settingsRight" title="To the right">&raquo;</div> <div id="saveSettings" title="Save settings"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <path d="M320,0h-42.667c-5.888,0-10.667,4.779-10.667,10.667v128c0,5.888,4.779,10.667,10.667,10.667H320    c5.888,0,10.667-4.779,10.667-10.667v-128C330.667,4.779,325.888,0,320,0z" style="fill: rgb(0, 0, 0);"></path> </g> <g> <path d="M498.219,45.803L455.552,3.136C453.547,1.131,450.837,0,448,0h-42.667c-5.888,0-10.667,4.779-10.667,10.667v128    c0,17.664-14.336,32-32,32h-21.333H256h-85.333c-17.664,0-32-14.336-32-32v-128C138.667,4.779,133.888,0,128,0H42.667    c-2.837,0-5.547,1.131-7.531,3.115L13.803,24.448c-2.005,2.005-3.136,4.715-3.136,7.552v448c0,2.837,1.131,5.547,3.115,7.531    l21.333,21.333c2.005,2.005,4.715,3.136,7.552,3.136h426.667c2.837,0,5.547-1.131,7.552-3.115l21.333-21.333    c1.984-2.005,3.115-4.715,3.115-7.552V53.333C501.333,50.496,500.203,47.787,498.219,45.803z M458.667,480    c0,5.888-4.779,10.667-10.667,10.667H64c-5.888,0-10.667-4.779-10.667-10.667V224c0-17.643,14.357-32,32-32h341.333    c17.643,0,32,14.357,32,32V480z" style="fill: rgb(0, 0, 0);"></path> </g> <g> <path d="M366.699,314.539c-0.96-2.816-3.029-5.099-5.739-6.293c-2.709-1.216-5.781-1.259-8.533-0.085    c-4.885,2.133-10.752,0.299-13.312-4.139c-2.645-4.565-1.344-10.283,3.093-13.611c2.368-1.771,3.904-4.48,4.203-7.445    c0.299-2.944-0.64-5.888-2.603-8.128c-17.408-19.797-39.829-32.896-64.832-37.845c-2.923-0.64-6.016,0.085-8.427,1.877    c-2.411,1.771-3.968,4.501-4.288,7.488C265.728,251.861,261.312,256,256,256c-5.312,0-9.728-4.139-10.283-9.664    c-0.32-2.987-1.856-5.717-4.288-7.488c-2.411-1.792-5.483-2.517-8.427-1.877C208,241.941,185.6,255.04,168.192,274.837    c-1.963,2.219-2.901,5.184-2.603,8.128c0.299,2.965,1.813,5.653,4.203,7.445c4.416,3.328,5.717,9.045,3.093,13.611    c-2.56,4.416-8.384,6.229-13.312,4.139c-2.731-1.173-5.824-1.131-8.533,0.085c-2.709,1.216-4.779,3.499-5.739,6.293    c-4.459,13.141-6.635,25.408-6.635,37.461s2.176,24.32,6.635,37.461c0.96,2.816,3.029,5.099,5.739,6.293    c2.688,1.216,5.803,1.259,8.533,0.085c4.949-2.069,10.752-0.277,13.312,4.139c2.645,4.565,1.344,10.283-3.093,13.611    c-2.368,1.771-3.904,4.48-4.203,7.445c-0.299,2.944,0.64,5.888,2.603,8.128c17.408,19.797,39.829,32.896,64.832,37.845    c2.901,0.597,5.995-0.085,8.427-1.877c2.411-1.771,3.968-4.501,4.288-7.488C246.272,452.139,250.688,448,256,448    c5.312,0,9.728,4.139,10.283,9.664c0.32,2.987,1.856,5.717,4.288,7.488c1.835,1.365,4.075,2.091,6.336,2.091    c0.704,0,1.387-0.064,2.091-0.213c25.003-4.971,47.424-18.069,64.832-37.845c1.963-2.219,2.901-5.184,2.603-8.128    c-0.299-2.965-1.813-5.653-4.203-7.445c-4.416-3.328-5.717-9.045-3.093-13.611c2.539-4.437,8.363-6.251,13.312-4.139    c2.731,1.152,5.824,1.109,8.533-0.085c2.709-1.195,4.779-3.499,5.739-6.293c4.437-13.163,6.613-25.429,6.613-37.483    S371.157,327.68,366.699,314.539z M256,384c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32    C288,369.643,273.643,384,256,384z"></path> </g> </svg> </div> </div> <div id="toggleMenu"> &equiv; </div> <div id="log"> </div> <div id="panelCorner"> <a title="Edit" id="editValues"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;" 	 xml:space="preserve"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"/></g></svg> </a> <a title="Settings" id="openSettings"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 21.589 21.589" style="enable-background:new 0 0 21.589 21.589;" xml:space="preserve"> <g> <path d="M18.622,8.371l-0.545-1.295c0,0,1.268-2.861,1.156-2.971l-1.679-1.639c-0.116-0.113-2.978,1.193-2.978,1.193l-1.32-0.533   c0,0-1.166-2.9-1.326-2.9H9.561c-0.165,0-1.244,2.906-1.244,2.906L6.999,3.667c0,0-2.922-1.242-3.034-1.131L2.289,4.177   C2.173,4.29,3.507,7.093,3.507,7.093L2.962,8.386c0,0-2.962,1.141-2.962,1.295v2.322c0,0.162,2.969,1.219,2.969,1.219l0.545,1.291   c0,0-1.268,2.859-1.157,2.969l1.678,1.643c0.114,0.111,2.977-1.195,2.977-1.195l1.321,0.535c0,0,1.166,2.898,1.327,2.898h2.369   c0.164,0,1.244-2.906,1.244-2.906l1.322-0.535c0,0,2.916,1.242,3.029,1.133l1.678-1.641c0.117-0.115-1.22-2.916-1.22-2.916   l0.544-1.293c0,0,2.963-1.143,2.963-1.299v-2.32C21.59,9.425,18.622,8.371,18.622,8.371z M14.256,10.794   c0,1.867-1.553,3.387-3.461,3.387c-1.906,0-3.461-1.52-3.461-3.387s1.555-3.385,3.461-3.385   C12.704,7.41,14.256,8.927,14.256,10.794z" ></path> </g> </svg> </a> <a title="Full screen" id="fullScreen"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 489.001 489.001" style="enable-background:new 0 0 489.001 489.001;" xml:space="preserve"> <g> <path d="M2.2,168.151l-2.1-151.3c-0.1-7.7,6.2-14,13.9-13.9l151.3,2.2c12.1,0.2,18.1,14.8,9.5,23.4l-42.1,42.1l70,70l-65,65    l-70-70l-42.1,42.1C17.1,186.251,2.4,180.251,2.2,168.151z"></path> <path d="M421.3,136.551l42.1,42.1c8.6,8.6,23.2,2.6,23.4-9.5l2.2-151.3c0.1-7.7-6.2-14-13.9-13.9l-151.3,2.2    c-12.1,0.2-18.1,14.8-9.5,23.4l42,41.9l-70,70l65,65L421.3,136.551z"></path> <path d="M314.2,460.451c-8.6,8.6-2.6,23.2,9.5,23.4l151.3,2.2c7.7,0.1,14-6.2,13.9-13.9l-2.2-151.3c-0.2-12.1-14.8-18.1-23.4-9.5    l-42.1,42.1l-70-70l-65,65l70,70L314.2,460.451z"></path> <path d="M14,485.051l151.3-2.2c12.1-0.2,18.1-14.8,9.5-23.4l-42.1-42l70-70l-65-65l-70,70l-42.1-42.1c-8.6-8.6-23.2-2.6-23.4,9.5    L0,471.151C0,478.851,6.3,485.151,14,485.051z"></path> </g> </svg> </a> <a title="Save / Broadcast" id="shareButton"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 414.72 414.72" style="enable-background:new 0 0 414.72 414.72;" xml:space="preserve"> <g> <path d="M413.184,240.792l-39.936-77.824c-2.048-3.584-5.632-6.144-9.728-6.144H235.008v99.84h-82.944V240.28    c19.456-3.584,36.864-12.8,50.176-26.624c4.608-4.608,4.608-11.776,0-15.872l-40.96-40.96l19.968-29.696    c3.072-4.608,2.048-10.24-1.536-13.824l-10.24-10.24c-3.584-3.584-9.216-4.608-13.824-1.536l-30.208,19.456l-40.96-40.96    c-4.608-4.096-11.264-4.096-15.872,0c-37.376,36.864-37.376,96.768-0.512,134.144c2.56,2.56,5.632,5.12,8.192,7.168v35.84H0    v114.176h31.232c6.144,28.16,34.304,45.568,62.464,39.424c19.968-4.608,35.328-19.968,39.424-39.424h134.656    c6.144,28.16,34.304,45.568,62.464,39.424c19.968-4.608,35.328-19.968,39.424-39.424h45.056v-125.44    C414.72,243.864,414.208,242.328,413.184,240.792z M81.92,389.272c-16.384,0-29.696-13.312-29.696-29.696    c0-16.384,13.312-29.696,29.696-29.696c16.384,0,29.696,13.312,29.696,29.696S98.304,389.272,81.92,389.272z M129.536,256.664    H98.304v-22.528c9.728,4.096,20.48,6.656,31.232,7.168V256.664z M318.464,389.272c-16.384,0-29.696-13.312-29.696-29.696    c0-16.384,13.312-29.696,29.696-29.696c16.384,0,29.696,13.312,29.696,29.696S334.848,389.272,318.464,389.272z"></path> </g> <g> <path d="M152.064,51.864v22.528c34.816,0,62.976,28.16,62.976,62.976h22.528C237.568,90.264,199.68,51.864,152.064,51.864z"></path> </g> <g> <path d="M158.208,2.712V25.24c58.368,0,105.984,47.616,105.984,106.496h22.528C286.72,60.568,229.376,2.712,158.208,2.712z"></path> </g> </svg> </a> </div> </div> </div> </div> </div>'),
    $(".jscolor").colorPicker(),
    resetShotClock(shot);
    for (var e = 1; e <= 10; e++) {
        var t = "Team" + e;
        1 == e && (t = "Home"), 2 == e && (t = "Visitor"), $("#wrapScores").append('<div class="team" id="team' + e + '"><div id="teamImage' + e + '" class="teamImage"></div><div class="wrapTeamName"><input id="teamName' + e + '" class="teamName" type="text" maxlength="20"  value="' + t + '" /></div><div class="roundsAndAddIcon"><div class="roundWrapper" data-id="' + e + '" id="wrapRounds' + e + '"></div><div class="addNewRound" id="addNewRound' + e + '">+</div></div><div class="scoreWrapper"><div class="numberLengthAdjustWidth"><div class="ranking"></div><div class="wrapScoreInput"><input data-ms="0" id="score' + e + '" class="score digital editable" type="text" value="0" /><div class="wrapQuickScoreSett revealWhenHovered"><div class="quickScoreSett" data-id="' + e + '"><a class="resetScore0">=0</a><a class="scoreMinusOne">-1</a><a class="scorePlus2">+2</a><a class="scorePlus3">+3</a> </div></div></div></div></div></div>');
    }
    $("#wrapScores").append('<div class="clearboth"></div>'), $(".resetScore0").click(function (e) {
        adjustScore(j = "#score" + $(this).parent().attr("data-id"), -99999999);
    }), $(".scoreMinusOne").click(function (e) {
        adjustScore(j = "#score" + $(this).parent().attr("data-id"), -1);
    }), $(".scorePlus2").click(function (e) {
        adjustScore(j = "#score" + $(this).parent().attr("data-id"), 2);
    }), $(".scorePlus3").click(function (e) {
        adjustScore(j = "#score" + $(this).parent().attr("data-id"), 3);
    }), $(".how2useToggle").click(function (e) {
        $("#article").show(222), $(".wrapHow2Use").toggle(222);
    }), $("#errorLogShadow").click(function (e) {
        $("#errorLogShadow").hide(222);
    }), $("#shotClockDuration").change(function (e) {
        $("#showShotClock").show(), resetShotClock(shot = Number($("#shotClockDuration").val()));
    }), $("#shotClockPause").click(function (e) {
        pauseShotClock("toggle");
    }), $("#timeOut1").click(function (e) {
        ++timeOut1 > 3 && (timeOut1 = 0), $("#timeOut1").removeClass(), $("#timeOut1").addClass("glow" + timeOut1);
    }), $("#timeOut2").click(function (e) {
        ++timeOut2 > 3 && (timeOut2 = 0), $("#timeOut2").removeClass(), $("#timeOut2").addClass("glow" + timeOut2);
    }), $(".startTour").click(function (e) {
        closeIntro(), updtateWhatsActiveWhatNot(), $("#settings").fadeIn(200), $("#openSettings").addClass("active"), $("#settingsOpen").addClass("settingsIsOpen");
    }), $(".toggleIntro").click(function (e) {
        closeSettingsNow(), $(".cookieWarning, #errorLogShadow").hide(333), console.log("234t43"), $("#article").hide(333), $("#intro").toggle(333, function () {
            $("#logo").toggleClass("opened");
        });
    }), $("#showHelp").click(function (e) {
        $("#article").show(333);
    }), $(".possession").click(function (e) {
        $(".possession").toggleClass("active");
    }), $("#toggleMenu").click(function (e) {
        $("#panelCorner").toggle(222), $("#panelCorner").toggleClass("hiddenPanel"), $("#panelCorner").hasClass("hiddenPanel") && $("#settings").fadeOut(200), $("#panelCorner").hasClass("hiddenPanel") || $("#openSettings").hasClass("active") && $("#settings").fadeIn(200);
    }), $("#settingsRight").click(function (e) {
        $("#settings").toggleClass("right");
    }), $(".centerPanel").click(function (e) {
        $("#intro").hide(333, function () {
            $("#logo").removeClass("opened");
        });
    }), $("#shareButton, #saveSettings").click(function (e) {
        seg = settingsToUrl(), errorLog('<p>Your settings is updated</p>');
    }), $("#fullScreen").click(function (e) {
        fullscreen();
    }), $("body").keydown(function (t) {
        $("#errorLogShadow").fadeOut(222), 13 != t.which && 27 != t.which || (closeIntro(), 13 == t.which && 1 == cssFieldInFocus || (closeSettingsNow(), $("#showCaretOrNot").hasClass("showEditCaret") && enableDisableEditing())), 0 == disableButtonCommands && ($("#editValues").hasClass("active") || (32 == t.which && (clockTrigger(), $("#article").hide(333), $("#intro").hide(333, function () {
            $("#logo").removeClass("opened");
        })), 72 == t.which && 1 == playSounds && buzzer.play(), 81 == t.which && adjustScore("#score1", 1), 65 == t.which && adjustScore("#score1", -1), 87 == t.which && adjustScore("#score2", 1), 83 == t.which && adjustScore("#score2", -1), 67 == t.which && pauseShotClock("toggle"), 88 == t.which && resetShotClock(shot), 90 == t.which && resetShotClock(14), 86 == t.which && (enableDisableEditing(), setTimeout(function () {
            $("#shotClock").focus();
        }, 50)), 80 == t.which && (9 == (e = Number($("#period").val())) ? ($("#period").val(1), $("#wrapOvertime").toggle(222)) : $("#period").val(e + 1), timeOut1 = 0, $("#timeOut1").removeClass(), timeOut2 = 0, $("#timeOut2").removeClass()), 73 == t.which && (++timeOut1 > 3 && (timeOut1 = 0), $("#timeOut1").removeClass(), $("#timeOut1").addClass("glow" + timeOut1)), 79 == t.which && (++timeOut2 > 3 && (timeOut2 = 0), $("#timeOut2").removeClass(), $("#timeOut2").addClass("glow" + timeOut2)), 89 == t.which && $("#fouls1").val(Number($("#fouls1").val()) + 1), 85 == t.which && $("#fouls2").val(Number($("#fouls2").val()) + 1), 84 == t.which && $(".possession").toggleClass("active"), 76 == t.which && $("#wrapOvertime").toggle(222), 69 == t.which && enableDisableEditing(), 82 == t.which && toggleSettings(), t.which, t.which), console.log("Key:", t.which));
    }), $("#zoomSlider").on("change mousemove input", function () {
        $("#fontSelector").css({ "-webkit-transform": "scale(" + $("#zoomSlider").val() + ")", "-moz-transform": "scale(" + $("#zoomSlider").val() + ")", "-ms-transform": "scale(" + $("#zoomSlider").val() + ")", "-o-transform": "scale(" + $("#zoomSlider").val() + ")", transform: "scale(" + $("#zoomSlider").val() + ")" });
    }), $("#pushDown").on("change mousemove input", function () {
        $("#fontSelector").css({ top: "" + $("#pushDown").val() + "px" });
    }), $("#fontSlider").on("change mousemove input", function () {
        updateFontSizeAccordingToFontSlider();
    }), setTimeout(function () {
        $("#panelCorner").show(400), startingFontSize = $("#scoreBoard").css("font-size"), startingFontSize = Number(startingFontSize.substring(0, startingFontSize.length - 2)), $("#fontSlider").val(startingFontSize), updateFontSizeAccordingToFontSlider();
    }, 400), $("#customCSS").change(function (e) {
        updateCustomCss();
    }), $("#customCSS").focus(function (e) {
        $(this).stop().animate({ minHeight: "60px" }, 250, function () { }), cssFieldInFocus = 1;
    }), $("#customCSS").focusout(function (e) {
        $(this).stop().animate({ minHeight: "15px" }, 250, function () { }), cssFieldInFocus = 0;
    }), $("input, textarea").focus(function (e) {
        $(this).attr("id") != "hiddenInput" && (disableButtonCommands = $(this).attr("id"));
    }), $("input, textarea").focusout(function (e) {
        setTimeout(function () {
            disableButtonCommands = 0;
        }, 50);
    }), $(".revealWhenHovered").mouseleave(function (e) {
        $(this).children().stop().animate({ opacity: "0", marginTop: "10px" }, 250, function () { });
    }), $(".revealWhenHovered").mouseover(function (e) {
        $(this).children().stop().animate({ opacity: "1", marginTop: "0px" }, 150, function () { });
    }), window.location.href.length > 26 ? ($("#menu a").each(function () {
        window.location.href.includes($(this).attr("href")) && $(this).addClass("openedLink");
    }), $("#homeLink").removeClass("openedLink")) : ($("#homeLink").addClass("openedLink"), setTimeout(function () {
        $("#article").hide(555);
    }, 1e3)), $(".editable").each(function () {
        $(this).wrap('<div class="wrapEditable" id="wrap' + $(this).attr("id") + '"></div>'), $(this).after('<div class="inputOverlay"></div>');
    }), $(".addNewRound").click(function (e) {
        addNewSocreAdderRound();
    }), $("#settings i").click(function (e) {
        $(this).toggleClass("hidden");
        var t = $(this).attr("data-button");
        t == "#showShotClock" && resetShotClock(shot), $(t).toggle(222), $("#playersToggleButton").hasClass("hidden") ? $("#showHidePlayerBoards").removeClass("sp") : $("#showHidePlayerBoards").addClass("sp"), $("#labelToggleButton").hasClass("hidden") ? $("#showHideLabels").removeClass("sl") : $("#showHideLabels").addClass("sl"), updateFontSizeAccordingToFontSlider();
    }), $("#shotClockEdit").click(function (e) {
        enableDisableEditing(), $("#shotClock").focus();
    }), $("#shotClock14").click(function (e) {
        resetShotClock(14);
    }), $("#closeSettings").click(function (e) {
        closeSettingsNow();
    }), $("#openSettings").click(function (e) {
        toggleSettings();
    }), $("#editValues").click(function (e) {
        enableDisableEditing();
    }), $("#settings span").each(function () {
        $(this).addClass($(this).attr("data-cat") + "Cat");
    }), $("#bgColor, #digitColor, #textColor, #digitBg").change(function (e) {
        updateColorScheme();
    }), $("#backgroundImg").change(function (e) {
        updateBgImg();
    }), $("#team1Img").change(function (e) {
        updateTeamImg(1);
    }), $("#team2Img").change(function (e) {
        updateTeamImg(2);
    }), $(".editable").change(function (e) {
        if (3 == mode) if ((seg = $(this).val()).charAt(seg.length - 3) == "." && seg.charAt(seg.length - 6) == ":") {
            var t = Number(seg.charAt(seg.length - 2) + seg.charAt(seg.length - 1)), x = Number(seg.charAt(seg.length - 5) + seg.charAt(seg.length - 4)), s = Number(seg.charAt(seg.length - 7));
            8 == seg.length && (s = Number(seg.charAt(seg.length - 8) + seg.charAt(seg.length - 7))), seg.length > 8 && (s = Number(seg.charAt(seg.length - 9) + seg.charAt(seg.length - 8) + seg.charAt(seg.length - 7))), j = 10 * t + 1e3 * x + 6e4 * s, console.log(s, " : ", x, " . ", t), console.log("length: ", seg.length), console.log("ms: ", j), $(this).attr("data-ms", j), adjustRankings();
        } else errorLog("Invalid format!<br /> 0:00.00 (minutes:seconds.hundredths) "); else isNaN($(this).val()) && (errorLog("Value must be a number!"), $(this).val("00"));
    }), $("#periodDuration").change(function (e) {
        periodDuration = $(this).val(), updateTimerResetOptions();
    }), $(".score").bind("keyup change", function (e) {
        3 != mode && ($(this).attr("data-ms", $(this).val()), adjustScoreDigitSize());
    }), $("#wrapTime").mousedown(function (e) {
        clockTrigger();
    }), $("#quickTimerSet > a").click(function (e) {
        1 == clock && clockTrigger(), setClockTime(6e4 * (j = Number($(this).text())));
    }), $("#wrapscore1, #wrapscore2, #wrapscore3, #wrapscore4, #wrapscore5, #wrapscore6, #wrapscore7, #wrapscore8, #wrapscore9, #wrapscore10, #wrapperiod, #wrapfouls1, #wrapfouls2").click(function (e) {
        var t = $(this).find("input"), x = Number(t.val());
        1 != mode && $(this).attr("id") != "wrapfouls1" && $(this).attr("id") != "wrapfouls2" && $(this).attr("id") != "wrapperiod" || $("#showCaretOrNot").hasClass("showEditCaret") || (isNaN(x++) ? errorLog("Value must be a number!") : (t.val(x), t.attr("data-ms", x))), $(this).attr("id") == "wrapperiod" && (timeOut1 = 0, $("#timeOut1").removeClass(), timeOut2 = 0, $("#timeOut2").removeClass()), 10 == $("#period").val() && ($("#period").val(1), $("#wrapOvertime").toggle(222)), adjustScoreDigitSize();
    }), $(".wrapScoreInput").click(function (e) {
        $("#showCaretOrNot").hasClass("showEditCaret") || 2 == mode && $(this).parent().parent().prev().children().find("input").first().focus();
    }), $(".wrapScoreInput").mousedown(function (e) {
        $("#showCaretOrNot").hasClass("showEditCaret") || 3 == mode && (j = $("#minutes").val() + ":" + $("#seconds").val() + "." + $("#hundredth").val(), $(this).children().find("input.score").val(j), $(this).children().find("input.score").attr("data-ms", timerNow), adjustScoreDigitSize());
    }), $("#period").click(function (e) {
        if (!$("#showCaretOrNot").hasClass("showEditCaret")) {
            var t = Number($(this).val());
            isNaN(t++) ? errorLog("Value must be a number!") : (t > 9 && (t = 9), $(this).val(t));
        }
    }), $("#settings span").click(function (e) {
        var t = "." + $(this).attr("data-cat") + "Cat";
        $(t).removeClass("select"), $(this).addClass("select"), set($(this).attr("data-cat"), $(this).attr("data-s"));
    }), $("#settings em").click(function (e) {
        buttonClick($(this).attr("data-button"));
    }), seg = "centerPanel", $(".timer").change(function (e) {
        var t = Number($("#minutes").val()), x = Number($("#seconds").val()), s = Number($("#hundredth").val());
        t < 0 && (t *= -1), 100 == s && (s = 0, x++), 60 == x && (x = 0, t++), s < 10 && (s = "0" + s), x < 10 && (x = "0" + x), $("#minutes").val(t), $("#seconds").val(x), $("#hundredth").val(s);
    }), seg = "." + seg, resizeContent(), $(window).resize(function () {
        resizeContent();
    }), $("#showCaretOrNot").fadeIn(222), $(".wrapPenaltyClock").click(function (e) {
        if (!$("#showCaretOrNot").hasClass("showEditCaret")) {
            var t = $(this).attr("data-player"), x = Number($("#penalty" + t + "Min").val());
            0 == (s = Number($("#penalty" + t + "Sec").val())) ? (0 == x ? j = 2 : 2 == x ? j = 4 : 4 == x ? j = 5 : 5 == x ? j = 10 : 10 == x && (j = 0), $("#penalty" + t + "Min").val(j), j > 0 ? $("#wrapPenaltyClock" + t).removeClass("off") : $("#wrapPenaltyClock" + t).addClass("off")) : (kiirPenaltyClockTime(t, 0), $("#wrapPenaltyClock" + t).addClass("off"), t == "H1" && (expirePenaltyH1down = 0), t == "H2" && (expirePenaltyH2down = 0), t == "V1" && (expirePenaltyV1down = 0), t == "V2" && (expirePenaltyV2down = 0));
            var x = Number($("#minutes").val()), s = Number($("#seconds").val()), o = Number($("#hundredth").val());
            t == "H1" && (expirePenaltyH1up = 10 * o + 1e3 * s + 6e4 * (x + j), expirePenaltyH1down = 10 * o + 1e3 * s + 6e4 * (x - j)), t == "H2" && (expirePenaltyH2up = 10 * o + 1e3 * s + 6e4 * (x + j), expirePenaltyH2down = 10 * o + 1e3 * s + 6e4 * (x - j)), t == "V1" && (expirePenaltyV1up = 10 * o + 1e3 * s + 6e4 * (x + j), expirePenaltyV1down = 10 * o + 1e3 * s + 6e4 * (x - j)), t == "V2" && (expirePenaltyV2up = 10 * o + 1e3 * s + 6e4 * (x + j), expirePenaltyV2down = 10 * o + 1e3 * s + 6e4 * (x - j)), $("#penalty" + t).val(""), $("#penalty" + t).focus();
        }
    }), $(".wrapPenaltyClock input").keyup(function (e) {
        updatePlayerPenaltyTime($(this).parent().parent().attr("data-player"));
    }), $(".wrapPenaltyClock input").change(function (e) {
        updatePlayerPenaltyTime($(this).parent().parent().attr("data-player"));
    }), $("#wrapshotClock").click(function (e) {
        $("#showCaretOrNot").hasClass("showEditCaret") || resetShotClock(shot);
    }), $("#settings i").each(function () {
        var e = $(this).attr("data-button");
        $(e).addClass("closeable"), $(e).append('<div class="closeThisPanel" onclick="closeThisPanel(\'' + e + '\')" title="Hide this panel">&times;</div>');
    }), j = 0, $(".centerPanel li").each(function () {
        $(this).append('<div class="moveThisPanelUp" data-order="' + j + '" title="Move this row up">&laquo;</div>'), j++;
    }), $(".moveThisPanelUp").click(function (e) {
        $(this).parent().prev().before($(this).parent());
    }), $("#minutes").val($("#periodDuration").val()), showHideMiliseconds(), updateTimerResetOptions(), initVariables();
});
var parameterstring;
String.prototype.replaceAt = function (e, t) {
    return this.substr(0, e) + t + this.substr(e + t.length);
};
var startTime = 0, tamadoIdoUp = 0, tamadoIdoDown = 0, expirePenaltyH1up = 0, expirePenaltyH2up = 0, expirePenaltyV1up = 0, expirePenaltyV2up = 0, expirePenaltyH1down = 0, expirePenaltyH2down = 0, expirePenaltyV1down = 0, expirePenaltyV2down = 0, shotClockTime = 24714, shotClockExpired = 0, shotClockSeconds = 24, buzzer = new Audio("/files/buzzersound.mp3"), rounds = -1, fontSizeInitiated = 0;
!function (e) {
    var o, r, t, c = 0, n = { control: e('<div class="colorPicker-picker">&nbsp;</div>'), palette: e('<div id="colorPicker_palette" class="colorPicker-palette" />'), swatch: e('<div class="colorPicker-swatch">&nbsp;</div>'), hexLabel: e('<label for="colorPicker_hex">Hex</label>'), hexField: e('<input type="text" id="colorPicker_hex" />') };
    e.fn.colorPicker = function (o) {
        return this.each(function () {
            var r, t, i = e(this), l = e.extend({}, e.fn.colorPicker.defaults, o), a = e.fn.colorPicker.toHex(i.val().length > 0 ? i.val() : l.pickerDefault), s = n.control.clone(), d = n.palette.clone().attr("id", "colorPicker_palette-" + c), f = n.hexLabel.clone(), h = n.hexField.clone(), F = d[0].id;
            if (e.each(l.colors, function (o) {
                r = n.swatch.clone(), "transparent" === l.colors[o] ? (r.addClass("transparent").text("X"), e.fn.colorPicker.bindPalette(h, r, "transparent")) : (r.css("background-color", "#" + this), e.fn.colorPicker.bindPalette(h, r)), r.appendTo(d);
            }), f.attr("for", "colorPicker_hex-" + c), h.attr({ id: "colorPicker_hex-" + c, value: a }), h.bind("keydown", function (o) {
                if (13 === o.keyCode) {
                    var r = e.fn.colorPicker.toHex(e(this).val());
                    e.fn.colorPicker.changeColor(r || i.val());
                }
                27 === o.keyCode && e.fn.colorPicker.hidePalette();
            }), h.bind("keyup", function (o) {
                var r = e.fn.colorPicker.toHex(e(o.target).val());
                e.fn.colorPicker.previewColor(r || i.val());
            }), e('<div class="colorPicker_hexWrap" />').append(f).appendTo(d), d.find(".colorPicker_hexWrap").append(h), false === l.showHexField && (h.hide(), f.hide()), e("body").append(d), d.hide(), s.css("background-color", a), s.bind("click", function () {
                i.is(":not(:disabled)") && e.fn.colorPicker.togglePalette(e("#" + F), e(this));
            }), o && o.onColorChange ? s.data("onColorChange", o.onColorChange) : s.data("onColorChange", function () { }), (t = i.data("text")) && s.html(t), i.after(s), i.bind("change", function () {
                i.next(".colorPicker-picker").css("background-color", e.fn.colorPicker.toHex(e(this).val()));
            }), i.val(a), "input" === i[0].tagName.toLowerCase()) try {
                i.attr("type", "hidden");
            } catch (e) {
                i.css("visibility", "hidden").css("position", "absolute");
            } else i.hide();
            c++;
        });
    }, e.extend(true, e.fn.colorPicker, {
        toHex: function (e) {
            if (e.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) return "#" === e.charAt(0) ? e : "#" + e;
            if (!e.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) return false;
            var o = [parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)], r = function (e) {
                if (e.length < 2) for (var o = 0, r = 2 - e.length; o < r; o++) e = "0" + e;
                return e;
            };
            return 3 === o.length ? "#" + r(o[0].toString(16)) + r(o[1].toString(16)) + r(o[2].toString(16)) : void 0;
        }, checkMouse: function (t, c) {
            var n = r, i = e(t.target).parents("#" + n.attr("id")).length;
            t.target === e(n)[0] || t.target === o[0] || i > 0 || e.fn.colorPicker.hidePalette();
        }, hidePalette: function () {
            e(document).unbind("mousedown", e.fn.colorPicker.checkMouse), e(".colorPicker-palette").hide();
        }, showPalette: function (r) {
            var t = o.prev("input").val();
            r.css({ top: o.offset().top + o.outerHeight(), left: o.offset().left }), e("#color_value").val(t), r.show(), e(document).bind("mousedown", e.fn.colorPicker.checkMouse);
        }, togglePalette: function (t, c) {
            c && (o = c), (r = t).is(":visible") ? e.fn.colorPicker.hidePalette() : e.fn.colorPicker.showPalette(t);
        }, changeColor: function (r) {
            o.css("background-color", r), o.prev("input").val(r).change(), e.fn.colorPicker.hidePalette(), o.data("onColorChange").call(o, e(o).prev("input").attr("id"), r);
        }, previewColor: function (e) {
            o.css("background-color", e);
        }, bindPalette: function (r, c, n) {
            n = n || e.fn.colorPicker.toHex(c.css("background-color")), c.bind({
                click: function (o) {
                    t = n, e.fn.colorPicker.changeColor(n);
                }, mouseover: function (o) {
                    t = r.val(), e(this).css("border-color", "#598FEF"), r.val(n), e.fn.colorPicker.previewColor(n);
                }, mouseout: function (c) {
                    e(this).css("border-color", "#000"), r.val(o.css("background-color")), r.val(t), e.fn.colorPicker.previewColor(t);
                }
            });
        }
    }), e.fn.colorPicker.defaults = { pickerDefault: "FFFFFF", colors: ["000000", "993300", "333300", "000080", "333399", "333333", "800000", "FF6600", "808000", "008000", "008080", "0000FF", "666699", "808080", "FF0000", "FF9900", "99CC00", "339966", "33CCCC", "3366FF", "800080", "999999", "FF00FF", "FFCC00", "FFFF00", "00FF00", "00FFFF", "00CCFF", "993366", "C0C0C0", "FF99CC", "FFCC99", "FFFF99", "CCFFFF", "99CCFF", "FFFFFF"], addColors: [], showHexField: true };
}(jQuery);
