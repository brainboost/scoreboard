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
    }), seg = getUrlParam("alt", 2), $(".possession").removeClass("active"), $("#possession" + seg).addClass("active"), seg = getUrlParam("peri", 1), $("#period").val(Number(seg)), seg = getUrlParam("fls1", 0), $("#fouls1").val(Number(seg)), seg = getUrlParam("fls2", 0), $("#fouls2").val(Number(seg)), (seg = getUrlParam("bgimg", "")).length > 4 && ($("#backgroundImg").val(decodeURI(seg)), updateBgImg()), (seg = getUrlParam("ti1mg", "")).length > 4 && ($("#team1Img").val(decodeURI(seg)), updateTeamImg(1)), (seg = getUrlParam("ti2mg", "")).length > 4 && ($("#team2Img").val(decodeURI(seg)), updateTeamImg(2)), seg = Number(getUrlParam("pushdown", 0)), $("#pushDown").val(seg), $("#fontSelector").css({ top: "" + $("#pushDown").val() + "px" }), (window.location.href.includes("?") || window.location.href.includes("D:")), adjustScoreDigitSize(), adjustRankings(), showHideMiliseconds();
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
    for (x = 1; x <= 2; x++) seg = "#score" + x, 0 != Number($(seg).val()) && (e += "&t" + x + "=" + $(seg).val()), 3 == mode && (e += "&ms" + x + "=" + $(seg).attr("data-ms"));
    if (2 == mode) {
        j = Number($("#wrapScores").attr("class").slice(-1));
        var t = "r";
        for (x = 1; x <= j; x++) t = "&ro" + x + "=", $(".teamScore" + x).each(function () {
            t += $(this).val() + "-";
        }), e += t = t.slice(0, -1);
    }
    $("#teamName1").val() != "Home" && (e += "&n1=" + $("#teamName1").val()), $("#teamName2").val() != "Visitor" && (e += "&n2=" + $("#teamName2").val());
    //for (var x = 3; x <= 10; x++) seg = "#teamName" + x, $(seg).val() != "Team" + x && (e += "&n" + x + "=" + $(seg).val());
    return 1 == countDown ? 10 != Number($("#minutes").val()) && (e += "&mm=" + Number($("#minutes").val())) : 0 != Number($("#minutes").val()) && (e += "&mm=" + Number($("#minutes").val())), 0 != Number($("#seconds").val()) && (e += "&ss=" + Number($("#seconds").val())), 0 != Number($("#hundredth").val()) && (e += "&hh=" + Number($("#hundredth").val())), seg = "1", $("#settings i").each(function () {
        j = $(this).attr("data-button"), $(j).css("display") == "none" ? seg += "0" : seg += "1";
    }), 19767 != (seg = parseInt(seg, 2)) && (e += "&show=" + seg), seg = "", $("ol.centerPanel > li").each(function () {
        seg += $(this).attr("data-li");
    }), seg != "12345" && (e += "&panelord=" + seg), seg = "&stt=", 
        seg += mode, seg += clock, seg += countDown, seg += timeOut1, seg += timeOut2, seg += playSounds, seg += playerFouls, seg += foulsPerQuater, seg += shotClockColorDifferent, 
        seg += shotAutoStart, seg += $(".fontCat.select").attr("data-s"), seg += $(".timerWiewCat.select").attr("data-order"), 
        $("#wrapOvertime").css("display") == "none" ? seg += 0 : seg += 1, seg += 3, 
        -1 == (j = Number($("#wrapScores").attr("class").slice(-1)) - 1) && (j = 9), (seg += j) != "&stt=101000550113011" && (e += seg), 
        $("#shotClock").val() != shot && $("#showShotClock").css("display") != "none" && (e += "&stc=" + $("#shotClock").val()), 
        $("#customCSS").val().length > 3 && (e += "&stl=" + encodeURI($("#customCSS").val())), 
        $("#bgColor").val() == "#69716B" && $("#textColor").val() == "#FFFFFF" && $("#digitColor").val() == "#F70000" && $("#digitBg").val() == "#000000" || (seg = $("#bgColor").val(), seg = seg.substring(1, seg.length), e += "&colors=" + seg + "-", seg = $("#textColor").val(), e += (seg = seg.substring(1, seg.length)) + "-", seg = $("#digitColor").val(), e += (seg = seg.substring(1, seg.length)) + "-", seg = $("#digitBg").val(), e += seg = seg.substring(1, seg.length)), 0 == Number($("#penaltyH1Min").val()) && 0 == Number($("#penaltyH1Sec").val()) || (e += "&ph1nr=" + $("#penaltyH1").val() + "&ph1m=" + $("#penaltyH1Min").val() + "&ph1s=" + $("#penaltyH1Sec").val()), 0 == Number($("#penaltyH2Min").val()) && 0 == Number($("#penaltyH2Sec").val()) || (e += "&ph2nr=" + $("#penaltyH2").val() + "&ph2m=" + $("#penaltyH2Min").val() + "&ph2s=" + $("#penaltyH2Sec").val()), 0 == Number($("#penaltyV1Min").val()) && 0 == Number($("#penaltyV1Sec").val()) || (e += "&pv1nr=" + $("#penaltyV1").val() + "&pv1m=" + $("#penaltyV1Min").val() + "&pv1s=" + $("#penaltyV1Sec").val()), 0 == Number($("#penaltyV2Min").val()) && 0 == Number($("#penaltyV2Sec").val()) || (e += "&pv2nr=" + $("#penaltyV2").val() + "&pv2m=" + $("#penaltyV2Min").val() + "&pv2s=" + $("#penaltyV2Sec").val()), $("#showHidePlayerBoards").hasClass("sp") && (x = 0, hPlayers = [], seg = "&hplayers=", 
        $("#playersHome .phname").each(function () {
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
    }), (seg = seg.substring(0, seg.length - 1)) != "FOULS-PENALTY-TIME%20OUT-PERIOD-PENALTY-TIME%20OUT-FOULS" && (e += seg)), $("#possession1").hasClass("active") && (e += "&alt=1"), $("#period").val() != "1" && (e += "&peri=" + $("#period").val()), $("#fouls1").val() != "0" && (e += "&fls1=" + $("#fouls1").val()), $("#fouls2").val() != "0" && (e += "&fls2=" + $("#fouls2").val()), $("#backgroundImg").val().length > 5 && (e += "&bgimg=" + encodeURI($("#backgroundImg").val())), $("#team1Img").val().length > 5 && (e += "&ti1mg=" + encodeURI($("#team1Img").val())), $("#team2Img").val().length > 5 && (e += "&ti2mg=" + encodeURI($("#team2Img").val())), 0 != $("#pushDown").val() && (e += "&pushdown=" + $("#pushDown").val()), e = "?sport=football" + e.replaceAt(0, "&");
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
    $(".jscolor").colorPicker(),
    resetShotClock(shot);
    for (var e = 1; e <= 2; e++) {
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
    }), $(".possession").click(function (e) {
        $(".possession").toggleClass("active");
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
        1 != mode && $(this).attr("id") != "wrapfouls1" && $(this).attr("id") != "wrapfouls2" && $(this).attr("id") != "wrapperiod" || $("#showCaretOrNot").hasClass("showEditCaret") || (isNaN(x++) ? errorLog("Value must be a number!") : (t.val(x), t.attr("data-ms", x))), $(this).attr("id") == "wrapperiod" && (timeOut1 = 0, $("#timeOut1").removeClass(), timeOut2 = 0, $("#timeOut2").removeClass()), 3 == $("#period").val() && ($("#period").val(1), $("#wrapOvertime").toggle(222)), adjustScoreDigitSize();
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
