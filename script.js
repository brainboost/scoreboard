function initVariables() {
  (parameterstring = $("#variables").text()).length < 2 && (parameterstring = window.location.href);
  var b = getUrlParam("stt", "101000550113011");
  set("mode", b.charAt(0)), set("countDir", b.charAt(2)), (timeOut1 = b.charAt(3)) > 3 && (timeOut1 = 0), $("#timeOut1").removeClass(), $("#timeOut1").addClass("glow" + timeOut1), (timeOut2 = b.charAt(4)) > 3 && (timeOut2 = 0), $("#timeOut2").removeClass(), $("#timeOut2").addClass("glow" + timeOut2), set("sounds", b.charAt(5)), playerFouls = b.charAt(6), foulsPerQuater = b.charAt(7);
  var e;
  for (seg = getUrlParam("hplayers", "Name-----------"), hPlayers = seg.split("-"), seg = getUrlParam("vplayers", "Name-----------"), vPlayers = seg.split("-"), seg = getUrlParam("hnrs", "1-2-3-4-5-6-7-8-9-10-11-12"), hnrs = seg.split("-"), seg = getUrlParam("vnrs", "1-2-3-4-5-6-7-8-9-10-11-12"), vnrs = seg.split("-"), seg = getUrlParam("hpf", "0-0-0-0-0-0-0-0-0-0-0-0"), hpf = seg.split("-"), seg = getUrlParam("vpf", "0-0-0-0-0-0-0-0-0-0-0-0"), vpf = seg.split("-"), seg = getUrlParam("hpscore", "0-0-0-0-0-0-0-0-0-0-0-0"), hpscore = seg.split("-"), seg = getUrlParam("vpscore", "0-0-0-0-0-0-0-0-0-0-0-0"), vpscore = seg.split("-"), generatePlayersTemplate(), set("shotClockColor", b.charAt(8)), set("shotAutoStart", b.charAt(9)), set("font", b.charAt(10)), b.charAt(11) == "1" ? set("timerWiew", "timerMS") : b.charAt(11) == "2" ? set("timerWiew", "timerAll") : set("timerWiew", "timerAuto"), 0 == b.charAt(12) ? $("#wrapOvertime").hide() : $("#wrapOvertime").show(), set("shotClockSize", Number(b.charAt(13))), set("team", Number(b.charAt(14)) + 1), t = 1; t <= 10; t++) seg = "#score" + t, j = getUrlParam("t" + t, 0), $(seg).val(j), $(seg).attr("data-ms", j), j = getUrlParam("ms" + t, $(seg).attr("data-ms")), $(seg).attr("data-ms", j);
  seg = Number(getUrlParam("pd", 10)), $("#periodDuration").val(seg), periodDuration = seg, seg = Number(getUrlParam("shot", 24)), $("#shotClockDuration").val(seg), shot = seg, resetShotClock(seg), -1 != (seg = Number(getUrlParam("stc", -1))) && resetShotClock(seg), $("#teamName1").val(getUrlParam("n1", "Home")), $("#teamName2").val(getUrlParam("n2", "Visitor"));
  for (var t = 3; t <= 10; t++) $("#teamName" + t).val(getUrlParam("n" + t, "Team" + t));
  if (seg = getUrlParam("mm", -1), -1 == seg ? setClockTime(1 == countDown ? 6e4 * periodDuration : 0) : $("#minutes").val(seg), seg = Number(getUrlParam("ss", "00")), Number(seg) < 10 && (seg = "0" + seg), $("#seconds").val(seg), seg = Number(getUrlParam("hh", "00")), Number(seg) < 10 && (seg = "0" + seg), $("#hundredth").val(seg), seg = Number(getUrlParam("show", "19767")), seg = seg.toString(2), seg.charAt(5) == "1" ? $("#showHideLabels").addClass("sl") : $("#showHideLabels").removeClass("sl"), seg.charAt(8) == "1" ? $("#showHidePlayerBoards").addClass("sp") : $("#showHidePlayerBoards").removeClass("sp"), t = 0, $("#settings i").each(function () {
    t++, j = $(this).attr("data-button"), seg.charAt(t) == "1" ? $(j).show() : $(j).hide();
  }), (seg = getUrlParam("panelord", "12345")) != "12345") for (t = 3; t >= 0; t--) j = ".listaPanel" + seg.charAt(t), $("ol.centerPanel li:first").before($(j));
  if (2 == mode) {
    var x = 2;
    for (t = 1; t <= 10; t++) (a = (j = getUrlParam("ro" + t, "-")).split("-")).length > x && (x = a.length);
    for (j = 2; j < x;) j++, addNewSocreAdderRound();
    var _, s;
    for (t = 1; t <= 10; t++) {
      var a = (j = getUrlParam("ro" + t, "-")).split("-");
      for (_ = 0; _ < a.length; _++) isNaN(a[_]) || (s = "#team" + t + "LapScore" + (_ + 1), $(s).val(a[_]));
    }
  }
  (seg = getUrlParam("stl", "none")) != "none" && ($("#customCSS").val(decodeURI(seg)), updateCustomCss()), seg = getUrlParam("title", "Tournament"), $("#scoreBoardTitle").val(decodeURI(seg)), seg = getUrlParam("colors", "69716B-FFFFFF-F70000-000000"), e = seg.split("-"), setJsColor("bgColor", e[0]), setJsColor("textColor", e[1]), setJsColor("digitColor", e[2]), setJsColor("digitBg", e[3]), updateColorScheme(), seg = getUrlParam("ph1nr", ""), $("#penaltyH1").val(seg), $("#penaltyH1Min").val(Number(getUrlParam("ph1m", 0))), $("#penaltyH1Sec").val(getUrlParam("ph1s", "00")), seg = getUrlParam("ph2nr", ""), $("#penaltyH2").val(seg), $("#penaltyH2Min").val(Number(getUrlParam("ph2m", 0))), $("#penaltyH2Sec").val(getUrlParam("ph2s", "00")), seg = getUrlParam("pv1nr", ""), $("#penaltyV1").val(seg), $("#penaltyV1Min").val(Number(getUrlParam("pv1m", 0))), $("#penaltyV1Sec").val(getUrlParam("pv1s", "00")), seg = getUrlParam("pv2nr", ""), $("#penaltyV2").val(seg), $("#penaltyV2Min").val(Number(getUrlParam("pv2m", 0))), $("#penaltyV2Sec").val(getUrlParam("pv2s", "00")), updatePlayerPenaltyTimes(), seg = getUrlParam("lbl", "FOULS-PENALTY-TIME%20OUT-PERIOD-PENALTY-TIME%20OUT-FOULS"), e = seg.split("-"), t = 0, $("input.label").each(function () {
    $(this).val(decodeURI(e[t])), t++;
  }), seg = getUrlParam("alt", 2), $(".possession").removeClass("active"), $("#possession" + seg).addClass("active"), seg = getUrlParam("peri", 1), $("#period").val(Number(seg)), seg = getUrlParam("fls1", 0), $("#fouls1").val(Number(seg)), seg = getUrlParam("fls2", 0), $("#fouls2").val(Number(seg)), (seg = getUrlParam("bgimg", "")).length > 4 && ($("#backgroundImg").val(decodeURI(seg)), updateBgImg()), (seg = getUrlParam("ti1mg", "")).length > 4 && ($("#team1Img").val(decodeURI(seg)), updateTeamImg(1)), (seg = getUrlParam("ti2mg", "")).length > 4 && ($("#team2Img").val(decodeURI(seg)), updateTeamImg(2)), seg = Number(getUrlParam("pushdown", 0)), $("#pushDown").val(seg), $("#fontSelector").css({ top: "" + $("#pushDown").val() + "px" }), (window.location.href.includes("?") || window.location.href.includes("D:")) && setTimeout(function () {
    closeSettingsNow(), $("#intro").toggle(333, function () {
      $("#logo").toggleClass("opened");
    });
  }, 300), adjustScoreDigitSize(), adjustRankings(), showHideMiliseconds();
}

function settingsToUrl() {
  var b = "";
  $("#scoreBoardTitle").val() != "Tournament" && (b += "&title=" + encodeURI($("#scoreBoardTitle").val()));
  for (t = 1; t <= 10; t++) seg = "#score" + t, 0 != Number($(seg).val()) && (b += "&t" + t + "=" + $(seg).val()), 3 == mode && (b += "&ms" + t + "=" + $(seg).attr("data-ms"));
  if (2 == mode) {
    j = Number($("#wrapScores").attr("class").slice(-1));
    var e = "r";
    for (t = 1; t <= j; t++) e = "&ro" + t + "=", $(".teamScore" + t).each(function () {
      e += $(this).val() + "-";
    }), b += e = e.slice(0, -1);
  }
  $("#teamName1").val() != "Home" && (b += "&n1=" + $("#teamName1").val()), $("#teamName2").val() != "Visitor" && (b += "&n2=" + $("#teamName2").val());
  for (var t = 3; t <= 10; t++) seg = "#teamName" + t, $(seg).val() != "Team" + t && (b += "&n" + t + "=" + $(seg).val());
  return 1 == countDown ? 10 != Number($("#minutes").val()) && (b += "&mm=" + Number($("#minutes").val())) : 0 != Number($("#minutes").val()) && (b += "&mm=" + Number($("#minutes").val())), 0 != Number($("#seconds").val()) && (b += "&ss=" + Number($("#seconds").val())), 0 != Number($("#hundredth").val()) && (b += "&hh=" + Number($("#hundredth").val())), seg = "1", $("#settings i").each(function () {
    j = $(this).attr("data-button"), $(j).css("display") == "none" ? seg += "0" : seg += "1";
  }), 19767 != (seg = parseInt(seg, 2)) && (b += "&show=" + seg), seg = "", $("ol.centerPanel > li").each(function () {
    seg += $(this).attr("data-li");
  }), seg != "12345" && (b += "&panelord=" + seg), seg = "&stt=", seg += mode, seg += clock, seg += countDown, seg += timeOut1, seg += timeOut2, seg += playSounds, seg += playerFouls, seg += foulsPerQuater, seg += shotClockColorDifferent, seg += shotAutoStart, seg += $(".fontCat.select").attr("data-s"), seg += $(".timerWiewCat.select").attr("data-order"), $("#wrapOvertime").css("display") == "none" ? seg += 0 : seg += 1, seg += $(".shotClockSizeCat.select").attr("data-s"), -1 == (j = Number($("#wrapScores").attr("class").slice(-1)) - 1) && (j = 9), (seg += j) != "&stt=101000550113011" && (b += seg), 10 != $("#periodDuration").val() && (b += "&pd=" + $("#periodDuration").val()), 24 != $("#shotClockDuration").val() && (b += "&shot=" + $("#shotClockDuration").val()), $("#shotClock").val() != shot && $("#showShotClock").css("display") != "none" && (b += "&stc=" + $("#shotClock").val()), $("#customCSS").val().length > 3 && (b += "&stl=" + encodeURI($("#customCSS").val())), $("#bgColor").val() == "#69716B" && $("#textColor").val() == "#FFFFFF" && $("#digitColor").val() == "#F70000" && $("#digitBg").val() == "#000000" || (seg = $("#bgColor").val(), seg = seg.substring(1, seg.length), b += "&colors=" + seg + "-", seg = $("#textColor").val(), b += (seg = seg.substring(1, seg.length)) + "-", seg = $("#digitColor").val(), b += (seg = seg.substring(1, seg.length)) + "-", seg = $("#digitBg").val(), b += seg = seg.substring(1, seg.length)), 0 == Number($("#penaltyH1Min").val()) && 0 == Number($("#penaltyH1Sec").val()) || (b += "&ph1nr=" + $("#penaltyH1").val() + "&ph1m=" + $("#penaltyH1Min").val() + "&ph1s=" + $("#penaltyH1Sec").val()), 0 == Number($("#penaltyH2Min").val()) && 0 == Number($("#penaltyH2Sec").val()) || (b += "&ph2nr=" + $("#penaltyH2").val() + "&ph2m=" + $("#penaltyH2Min").val() + "&ph2s=" + $("#penaltyH2Sec").val()), 0 == Number($("#penaltyV1Min").val()) && 0 == Number($("#penaltyV1Sec").val()) || (b += "&pv1nr=" + $("#penaltyV1").val() + "&pv1m=" + $("#penaltyV1Min").val() + "&pv1s=" + $("#penaltyV1Sec").val()), 0 == Number($("#penaltyV2Min").val()) && 0 == Number($("#penaltyV2Sec").val()) || (b += "&pv2nr=" + $("#penaltyV2").val() + "&pv2m=" + $("#penaltyV2Min").val() + "&pv2s=" + $("#penaltyV2Sec").val()), $("#showHidePlayerBoards").hasClass("sp") && (t = 0, hPlayers = [], seg = "&hplayers=", $("#playersHome .phname").each(function () {
    seg += encodeURI($(this).val()) + "-";
  }), (seg = seg.substring(0, seg.length - 1)) != "&hplayers=Name-----------" && (b += seg), t = 0, vPlayers = [], seg = "&vplayers=", $("#playersVisitor .pvname").each(function () {
    seg += encodeURI($(this).val()) + "-";
  }), (seg = seg.substring(0, seg.length - 1)) != "&vplayers=Name-----------" && (b += seg), t = 0, hnrs = [], seg = "&hnrs=", $("#playersHome .plnr").each(function () {
    seg += encodeURI($(this).val()) + "-";
  }), (seg = seg.substring(0, seg.length - 1)) != "&hnrs=1-2-3-4-5-6-7-8-9-10-11-12" && (b += seg), t = 0, vnrs = [], seg = "&vnrs=", $("#playersVisitor .plnr").each(function () {
    seg += encodeURI($(this).val()) + "-";
  }), (seg = seg.substring(0, seg.length - 1)) != "&vnrs=1-2-3-4-5-6-7-8-9-10-11-12" && (b += seg), t = 0, hpf = [], seg = "&hpf=", $("#playersHome .pfouls > div").each(function () {
    seg += $(this).attr("class").charAt(5) + "-";
  }), (seg = seg.substring(0, seg.length - 1)) != "&hpf=0-0-0-0-0-0-0-0-0-0-0-0" && (b += seg), t = 0, vpf = [], seg = "&vpf=", $("#playersVisitor .pfouls > div").each(function () {
    seg += $(this).attr("class").charAt(5) + "-";
  }), (seg = seg.substring(0, seg.length - 1)) != "&vpf=0-0-0-0-0-0-0-0-0-0-0-0" && (b += seg), t = 0, hpscore = [], seg = "&hpscore=", $("#playersHome .wrapPscore input").each(function () {
    seg += $(this).val() + "-";
  }), (seg = seg.substring(0, seg.length - 1)) != "&hpscore=0-0-0-0-0-0-0-0-0-0-0-0" && (b += seg), t = 0, vpscore = [], seg = "&vpscore=", $("#playersVisitor .wrapPscore input").each(function () {
    seg += $(this).val() + "-";
  }), (seg = seg.substring(0, seg.length - 1)) != "&vpscore=0-0-0-0-0-0-0-0-0-0-0-0" && (b += seg)), $(".wrapLabel").css("display") != "none" && (seg = "&lbl=", $("input.label").each(function () {
    seg += encodeURI($(this).val()) + "-";
  }), (seg = seg.substring(0, seg.length - 1)) != "FOULS-PENALTY-TIME%20OUT-PERIOD-PENALTY-TIME%20OUT-FOULS" && (b += seg)), $("#possession1").hasClass("active") && (b += "&alt=1"), $("#period").val() != "1" && (b += "&peri=" + $("#period").val()), $("#fouls1").val() != "0" && (b += "&fls1=" + $("#fouls1").val()), $("#fouls2").val() != "0" && (b += "&fls2=" + $("#fouls2").val()), $("#backgroundImg").val().length > 5 && (b += "&bgimg=" + encodeURI($("#backgroundImg").val())), $("#team1Img").val().length > 5 && (b += "&ti1mg=" + encodeURI($("#team1Img").val())), $("#team2Img").val().length > 5 && (b += "&ti2mg=" + encodeURI($("#team2Img").val())), 0 != $("#pushDown").val() && (b += "&pushdown=" + $("#pushDown").val()), b = b.replaceAt(0, "?");
}

function updtateWhatsActiveWhatNot() {
  $("#settings span").removeClass("select"), $("#settings i").each(function () {
    var b = $(this).attr("data-button");
    $(b).css("display") == "none" && $(this).addClass("hidden");
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
  var b = new Array, e = [0, 0, 0, 0, 0, 0, 0, 0, 99, 0], t = 0;
  j = 0;
  var x;
  $(".score").each(function () {
    b[j] = Number($(this).attr("data-ms")), e[j] = 0, j++;
  }), j = 1;
  do {
    for (t = 0, x = 0; x < b.length; x++) b[x] > t && (t = b[x], x);
    if (t > 0) for (x = 0; x < b.length; x++) b[x] == t && (b[x] = 0, e[x] = j);
    j++;
    var _ = 0;
    for (x = 0; x < b.length; x++) _ += b[x];
  } while (_ > 0);
  for (t = 0, x = 0; x < b.length; x++) e[x] > t && (t = e[x]);
  if (3 == mode) for (x = 0; x < b.length; x++) 0 != e[x] && (e[x] = t - e[x] + 1);
  j = 0, $(".score").each(function () {
    0 != e[j] && t >= 3 ? $(this).parent().parent().prev().html("<span>" + e[j] + ".</span>") : $(this).parent().parent().prev().text(""), j++;
  });
}

function addLapScores() {
  for (var b = 0, e = 1; e < 11; e++) b = 0, $(".teamScore" + e).each(function () {
    b += Number($(this).val());
  }), $("#score" + e).val(b), $("#score" + e).attr("data-ms", b);
  adjustScoreDigitSize();
}

function updateBgImg() {
  $("body").css("background-image", "url(" + $("#backgroundImg").val() + ")");
}

function updateTeamImg(b) {
  $("#team" + b + "Img").val().length > 10 ? $("#teamImage" + b).html('<img src="' + $("#team" + b + "Img").val() + '" alt="Invalid image link" />') : $("#teamImage" + b).html(""), adjustLogoHeight(), setTimeout(function () {
    adjustLogoHeight();
  }, 500), setTimeout(function () {
    adjustLogoHeight();
  }, 2e3);
}

function adjustLogoHeight() {
  var b = 1;
  $(".teamImage img").each(function () {
    b < $(this).height() && (b = $(this).height()), $(".teamImage").height(b);
  });
}

function adjustScoreDigitSize() {
  var b = 1;
  $(".score").each(function () {
    $(this).val().toString().length > b && (b = $(this).val().toString().length);
  }), 1 == b && $(".numberLengthAdjustWidth").css("fontSize", "1em"), 2 == b && $(".numberLengthAdjustWidth").css("fontSize", "1em"), 3 == b && $(".numberLengthAdjustWidth").css("fontSize", "0.7em"), 4 == b && $(".numberLengthAdjustWidth").css("fontSize", "0.5em"), 5 == b && $(".numberLengthAdjustWidth").css("fontSize", "0.40em"), 6 == b && $(".numberLengthAdjustWidth").css("fontSize", "0.35em"), 7 == b && $(".numberLengthAdjustWidth").css("fontSize", "0.3em"), 8 == b && $(".numberLengthAdjustWidth").css("fontSize", "0.27em"), b > 8 && $(".numberLengthAdjustWidth").css("fontSize", "0.2em"), adjustRankings();
}

function clockTrigger() {
  if (!$("#showCaretOrNot").hasClass("showEditCaret")) {
    var b = (b = new Date).getTime(), e = 0;
    if (0 == clock) {
      var t = Number($("#minutes").val()), x = Number($("#seconds").val()), _ = 10 * Number($("#hundredth").val()) + 1e3 * x + 6e4 * t;
      1 == countDown && 0 == _ && (console.log("Countdown expired"), e = 1, setClockTime(6e4 * periodDuration), updatePlayerPenaltyTimes(), resetShotClock(shot)), 0 == countDown && _ == 6e4 * periodDuration && (console.log("Countup expired"), e = 1, setClockTime(0), updatePlayerPenaltyTimes(), resetShotClock(shot)), 0 == e && (1 == countDown && (_ = 6e4 * periodDuration - _), startTime = b - _, clock = 1, $("#wrapWrapTime").addClass("timerRunning"), refreshTimer(), 0 == shotAutoStart && (shotPause = 1, $("#shotClockPause").addClass("paused"), console.log("Shotpause")));
    } else $("#wrapWrapTime").removeClass("timerRunning"), clock = 0;
  }
}

function pauseShotClock(b) {
  b == "0" && ($("#shotClockPause").removeClass("paused"), resetShotClock(Number($("#shotClock").val())), shotPause = 0), b == "1" && ($("#shotClockPause").addClass("paused"), shotPause = 1), b == "toggle" && (0 == shotPause ? ($("#shotClockPause").addClass("paused"), shotPause = 1) : ($("#shotClockPause").removeClass("paused"), resetShotClock(Number($("#shotClock").val())), shotPause = 0)), 1 == shotPause ? 0 != shotClockSeconds && $("#shotClock").css("opacity", 0.6) : $("#shotClock").css("opacity", 1);
}

function resetShotClock(b) {
  shotPause = 0, $("#shotClockPause").removeClass("paused"), b > 1 && ($("#wrapshotClock").removeClass("timeisUp"), shotClockTime = 1e3 * b, shotClockExpired = 0), $("#shotClock").val(Number(b));
  var e = Number($("#minutes").val()), t = Number($("#seconds").val()), x = 10 * Number($("#hundredth").val()) + 1e3 * t + 6e4 * e;
  tamadoIdoUp = x + 1e3 * (b + 1), tamadoIdoDown = x - 1e3 * (b + 1);
}

function refreshTimer() {
  var b = new Date, e = 0, t = (b = b.getTime()) - startTime, x = expirePenaltyH1up - t, _ = expirePenaltyH2up - t, s = expirePenaltyV1up - t, a = expirePenaltyV2up - t;
  0 == shotPause && (shotClockTime = tamadoIdoUp - t - 1), 1 == countDown && (x = 6e4 * periodDuration - t - expirePenaltyH1down, _ = 6e4 * periodDuration - t - expirePenaltyH2down, s = 6e4 * periodDuration - t - expirePenaltyV1down, a = 6e4 * periodDuration - t - expirePenaltyV2down, 0 == shotPause && (shotClockTime = 6e4 * periodDuration - t - tamadoIdoDown - 1)), shotClockSeconds = Math.floor(shotClockTime % 6e4 / 1e3), 1 == shotPause ? 0 != shotClockSeconds && $("#shotClock").css("opacity", 0.6) : $("#shotClock").css("opacity", 1), 0 == shotClockSeconds && 0 == shotPause && pauseShotClock("toggle"), 0 == shotClockSeconds && 1 == shotPause && 0 == shotClockExpired && (console.log("Shotclock expired!"), shotClockExpired = 1, 1 == playSounds && $("#showShotClock").css("display") != "none" && buzzer.play(), $("#wrapshotClock").addClass("timeisUp"), setTimeout(function () {
    $("#wrapshotClock").removeClass("timeisUp");
  }, 2e3), $("#shotClock").val(0)), shotClockSeconds >= 0 && 0 == shotPause && $("#shotClock").val(shotClockSeconds), kiirPenaltyClockTime("H1", x), kiirPenaltyClockTime("H2", _), kiirPenaltyClockTime("V1", s), kiirPenaltyClockTime("V2", a), e = 0 == countDown ? t : 6e4 * periodDuration - t, 0 == countDown ? e > 6e4 * periodDuration && 3 != mode && (e = 6e4 * periodDuration, timerExpired()) : e < 0 && (e = 0, timerExpired()), setClockTime(e), setTimeout(function () {
    1 == clock && refreshTimer();
  }, 10);
}

function kiirPenaltyClockTime(b, e) {
  var t = Math.floor(e / 6e4), x = Math.floor(e % 6e4 / 1e3);
  x < 10 && (x = "0" + x), $("#wrapPenaltyClock" + b).hasClass("off") ? ($("#penalty" + b + "Min").val("0"), $("#penalty" + b + "Sec").val("00"), $("#penalty" + b).val("")) : ($("#penalty" + b + "Min").val(t), $("#penalty" + b + "Sec").val(x)), (t < 0 || x < 0) && ($("#penalty" + b + "Min").val("0"), $("#penalty" + b + "Sec").val("00"), $("#wrapPenaltyClock" + b).addClass("off"));
}

function setClockTime(b) {
  -1 == String(document.domain).indexOf("oreco") && (startTime = 0);
  var e = Math.floor(b / 6e4), t = Math.floor(b % 6e4 / 1e3), x = Math.floor(b % 1e3 / 10);
  x < 10 && (x = "0" + x), t < 10 && (t = "0" + t), $("#minutes").val(e), $("#seconds").val(t), $("#hundredth").val(x), showHideMiliseconds(), timerNow = b, e > 99 ? ($("#minutes").attr("maxlength", 3), $("#minutes").attr("size", 3), $("#minutes").addClass("smallerMinutesFont")) : ($("#minutes").attr("maxlength", 2), $("#minutes").attr("size", 2), $("#minutes").removeClass("smallerMinutesFont"));
}

function timerExpired() {
  clock = 0, 1 == playSounds && buzzer.play();
  var b = $("body").attr("class"), e = "darkTheme";
  b == "darkTheme" && (e = "defaultTheme"), b == "brightTheme" && (e = "defaultTheme"), $("body").removeClass(b), $("body").addClass(e), setTimeout(function () {
    $("body").addClass(b), $("body").removeClass(e);
  }, 2200);
}

function showHideMiliseconds() {
  var b = Number($("#minutes").val()), e = Number($("#seconds").val()), t = 10 * Number($("#hundredth").val()) + 1e3 * e + 6e4 * b;
  t >= 6e4 && $("#isUnderOneMin").hasClass("itIsUnderOneMin") && ($("#isUnderOneMin").removeClass("itIsUnderOneMin"), $("#isUnderOneMin").addClass("itIsAboveOneMin")), t < 6e4 && !$("#isUnderOneMin").hasClass("itIsUnderOneMin") && ($("#isUnderOneMin").addClass("itIsUnderOneMin"), $("#isUnderOneMin").removeClass("itIsAboveOneMin"));
}

function updatePlayerPenaltyTimes() {
  updatePlayerPenaltyTime("H1"), updatePlayerPenaltyTime("H2"), updatePlayerPenaltyTime("V1"), updatePlayerPenaltyTime("V2");
}

function updatePlayerPenaltyTime(b) {
  j = Number($("#penalty" + b + "Min").val());
  var e = Number($("#penalty" + b + "Sec").val());
  if (0 == e && 0 == j) $("#wrapPenaltyClock" + b).addClass("off"); else {
    var t = Number($("#minutes").val()), x = Number($("#seconds").val()), _ = Number($("#hundredth").val());
    b == "H1" && (expirePenaltyH1up = 10 * _ + 1e3 * (x + e) + 6e4 * (t + j), expirePenaltyH1down = 10 * _ + 1e3 * (x - e) + 6e4 * (t - j)), b == "H2" && (expirePenaltyH2up = 10 * _ + 1e3 * (x + e) + 6e4 * (t + j), expirePenaltyH2down = 10 * _ + 1e3 * (x - e) + 6e4 * (t - j)), b == "V1" && (expirePenaltyV1up = 10 * _ + 1e3 * (x + e) + 6e4 * (t + j), expirePenaltyV1down = 10 * _ + 1e3 * (x - e) + 6e4 * (t - j)), b == "V2" && (expirePenaltyV2up = 10 * _ + 1e3 * (x + e) + 6e4 * (t + j), expirePenaltyV2down = 10 * _ + 1e3 * (x - e) + 6e4 * (t - j)), $("#wrapPenaltyClock" + b).removeClass("off");
  }
}

function setJsColor(b, e) {
  $("#" + b).val("#" + e), $("#" + b).next().css("background-color", "#" + e);
}

function set(b, e) {
  if (b == "shotClockSize" && ($("#showShotClock").show(), $("#shotClock").removeClass("size1"), $("#shotClock").removeClass("size2"), $("#shotClock").removeClass("size3"), $("#shotClock").addClass("size" + e)), b == "shotAutoStart" && (shotAutoStart = e, 1 == shotPause ? 0 != shotClockSeconds && $("#shotClock").css("opacity", 0.6) : $("#shotClock").css("opacity", 1)), b == "shotClockColor" && ($("#showShotClock").show(), shotClockColorDifferent = e, 0 == e ? $("#shotClock").css("color", $("#minutes").css("color")) : $("#shotClock").css("color", $(".teamName").css("color"))), b == "theme" && (e == "defaultTheme" && (setJsColor("bgColor", "69716b"), setJsColor("textColor", "FFFFFF"), setJsColor("digitColor", "f70000"), setJsColor("digitBg", "000000")), e == "darkTheme" && (setJsColor("bgColor", "000000"), setJsColor("textColor", "BBBBBB"), setJsColor("digitColor", "f70000"), setJsColor("digitBg", "000000")), e == "brightTheme" && (setJsColor("bgColor", "EEEEEE"), setJsColor("textColor", "333333"), setJsColor("digitColor", "a70000"), setJsColor("digitBg", "FFFFFF")), e == "contrastTheme" && (setJsColor("bgColor", "000000"), setJsColor("textColor", "FFFFFF"), setJsColor("digitColor", "000000"), setJsColor("digitBg", "FFFFFF")), updateColorScheme(), $("body").removeClass(), $("body").addClass(e)), b == "team" && ($("#wrapScores").removeClass(), $("#wrapScores").addClass("teams" + e)), b == "font" && ($("#fontSelector").removeClass(), $("#fontSelector").addClass("font" + e), updateFontSizeAccordingToFontSlider()), b == "timerWiew" && ($("#wrapTime").removeClass(), $("#wrapTime").addClass(e), $("#wrapTime").show(222), updateFontSizeAccordingToFontSlider()), b == "countDir") {
    1 == clock && clockTrigger(), countDown = e;
    var t = Number($("#minutes").val()), x = Number($("#seconds").val()), _ = Number($("#hundredth").val());
    1 == e && 0 == t && 0 == x && 0 == _ && setClockTime(6e4 * Number($("#periodDuration").val())), 0 == e && t == Number($("#periodDuration").val()) && 0 == x && 0 == _ && setClockTime(0), resetShotClock(Number($("#shotClock").val())), updateTimerResetOptions(), updatePlayerPenaltyTimes();
  }
  if (b == "sounds" && (playSounds = e == "on" ? 1 : 0), b == "mode" && ($("#activeModeNow").removeClass(), $("#activeModeNow").addClass("mode" + e), $("#periodDuration").css("color", "#444444"), resetScore(), mode != Number(e))) {
    if ($(".wrapQuickScoreSett").hide(), 1 == (mode = Number(e)) && ($(".wrapQuickScoreSett").show(), $("input.score").each(function () {
      $(this).val(0);
    }), $(".roundsAndAddIcon").hide(300)), 2 == mode) {
      if ($("input.score").each(function () {
        $(this).val(0);
      }), -1 == rounds) {
        rounds = 2;
        var s = 0;
        $(".roundWrapper").each(function () {
          s++, $(this).html('<input id="team' + s + 'LapScore1" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + s + ' digital alwaysEditable" type="number" value="" />'), $(this).append('<input id="team' + s + 'LapScore2" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + s + ' digital alwaysEditable" type="number" value="" />');
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

function buttonClick(b) {
  b == "zoom100" && ($("#zoomSlider").val(1), $("#fontSelector").css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), $("#fontSlider").val(startingFontSize), updateFontSizeAccordingToFontSlider(), $("#pushDown").val(0), $("#fontSelector").css({ top: "" + $("#pushDown").val() + "px" })), b == "resetScore" && resetScore(), b == "resetTimer" && resetTimter(), b == "resetPeriod" && ($("#period").val(1), $("#fouls1").val(0), $("#fouls2").val(0)), b == "resetPlayers" && (vPlayers = ["Name", "", "", "", "", "", "", "", "", "", "", ""], hPlayers = vPlayers, vnrs = hnrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vpf = hpf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], hpscore = hpf, vpscore = hpf, generatePlayersTemplate());
}

function resetScore() {
  var b = 0;
  rounds = 2, $(".roundWrapper").each(function () {
    b++, $(this).html('<input id="team' + b + 'LapScore1" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + b + ' digital alwaysEditable" type="number" value="" />'), $(this).append('<input  id="team' + b + 'LapScore2" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + b + ' digital alwaysEditable" type="number" value="" />');
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
  var b = document.fullscreenElement && null !== document.fullscreenElement || document.webkitFullscreenElement && null !== document.webkitFullscreenElement || document.mozFullScreenElement && null !== document.mozFullScreenElement || document.msFullscreenElement && null !== document.msFullscreenElement, e = document.documentElement;
  b ? ($("#fullScreen").removeClass("active"), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : ($("#fullScreen").addClass("active"), e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen());
}

function increasePlayerFouls(b) {
  seg = Number($(b).children().attr("class").slice(-1));
  var e = $(b).children().attr("id");
  seg < playerFouls ? (seg++, $(b).children().removeClass(), $(b).children().addClass("fouls" + seg), $(b).attr("data-team") == "h" ? (j = $("#fouls1").val()) < foulsPerQuater && $("#fouls1").val(++j) : (j = $("#fouls2").val()) < foulsPerQuater && $("#fouls2").val(++j)) : errorLog("This player has already got " + playerFouls + " fouls. <span class='resetPlayerFouls' onclick='resetPlayerFouls()'>Reset</span> <span class='extractOnePlayerFoul' onclick='extractOnePlayerFoul(" + (seg - 1) + ")'>Extract&nbsp;1</span> <span>Close</span><em class='invisible' id='resetPlayerScoreID'>" + e + "</em>");
}

function extractOnePlayerFoul(b) {
  var e = $("#resetPlayerScoreID").text();
  $("#" + e).removeClass(), $("#" + e).addClass("fouls" + b);
}

function resetPlayerFouls() {
  var b = $("#resetPlayerScoreID").text();
  $("#" + b).removeClass(), $("#" + b).addClass("fouls0");
}

function increasePlayerScore(b) {
  var e = $(b).find("input"), t = Number(e.val()), x = e.attr("data-team");
  x = x == "h" ? 1 : 2, 1 == mode && ($("#showCaretOrNot").hasClass("showEditCaret") || (isNaN(t++) || e.val(t), t = $("#score" + x).val(), isNaN(t++) || $("#score" + x).val(t), adjustScoreDigitSize()));
}

function generatePlayersTemplate() {
  $(".players").html("");
  for (var b = 1; b <= hPlayers.length; b++) {
    var e = "h";
    for (seg = '<div id="p' + b + '" class="player"><input id="p' + e + b + '1nr" class="plnr" type="text" value="' + hnrs[b - 1] + '" maxlength="2" size="2"><input id="p' + e + b + 'name" class="p' + e + 'name" type="text" value="' + decodeURI(hPlayers[b - 1]) + '" maxlength="12" size="12"><div onclick="increasePlayerFouls($(this))" class="pfouls" data-team="' + e + '"><div id="p' + e + b + 'fouls" class="fouls' + hpf[b - 1] + '"">', j = 1; j <= playerFouls; j++) seg += '<div class="pFoul' + j + '">o</div>';
    for (seg += '</div></div><div class="wrapPscore"><input data-team="' + e + '" data-player="' + b + '" id="p' + e + "points" + b + '" class="digital editable playerScore" type="number" value="' + hpscore[b - 1] + '" min="0" ></div></div>', $("#playersHome").append(seg), e = "v", seg = '<div id="p' + b + '" class="player"><input id="p' + e + b + '1nr" class="plnr" type="text" value="' + vnrs[b - 1] + '" maxlength="2" size="2"><input id="p' + e + b + 'name" class="p' + e + 'name" type="text" value="' + decodeURI(vPlayers[b - 1]) + '" maxlength="12" size="12"><div onclick="increasePlayerFouls($(this))" class="pfouls" data-team="' + e + '"><div id="p' + e + b + 'fouls" class="fouls' + vpf[b - 1] + '">', j = 1; j <= playerFouls; j++) seg += '<div class="pFoul' + j + '">o</div>';
    seg += '</div></div><div class="wrapPscore"><input data-team="' + e + '" data-player="' + b + '" id="p' + e + "points" + b + '" class="digital editable playerScore" type="number" value="' + vpscore[b - 1] + '" min="0" ></div></div>', $("#playersVisitor").append(seg);
  }
  $(".players").append('<div class="closeThisPanel" onclick="closeThisPanel(\'.players\')" title="Hide this panel">x</div>'), $(".players .editable").each(function () {
    $(this).wrap('<div onclick="increasePlayerScore($(this))" class="wrapEditable" id="wrap' + $(this).attr("id") + '"></div>'), $(this).after('<div class="inputOverlay"></div>');
  });
}

function getUrlVars() {
  var b = {};
  parameterstring.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, t, x) {
    b[t] = x;
  });
  return b;
}

function getUrlParam(b, e) {
  var t = e;
  return parameterstring.indexOf(b) > -1 && (t = getUrlVars()[b]), t;
}

function addNewSocreAdderRound() {
  var b = 0;
  rounds++, $(".roundWrapper").each(function () {
    b++, $(this).append('<input  id="team' + b + "LapScore" + rounds + '" onChange="addLapScores()" onKeyUp="addLapScores()" class="lapScore teamScore' + b + ' digital alwaysEditable" type="number" value="" />');
  }), updateColorScheme();
}

function closeThisPanel(b) {
  b == ".players" && $("#showHidePlayerBoards").removeClass("sp"), b == ".wrapLabel" && $("#showHideLabels").removeClass("sl"), $(b).toggle(100, function () {
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
  var b = Number($(window).height()) - 20;
  $("#showHidePlayerBoards").css("min-height", b);
}

function toggleSettings() {
  $("#openSettings").hasClass("active") ? closeSettingsNow() : (updtateWhatsActiveWhatNot(), $("#settings").fadeIn(200), $("#openSettings").addClass("active"), $("#settingsOpen").addClass("settingsIsOpen"));
}

function errorLog(b) {
  $("#errorLog").html(b), $("#errorLogShadow").fadeIn(222);
}

function adjustScore(b, e) {
  console.log("adjustScore: ", b, " - ", e);
  var t = Number($(b).val()) + e;
  t < 0 && (t = 0), $(b).val(t), $(b).attr("data-ms", t), adjustScoreDigitSize();
}

"use strict";
var mode = 1, timerNow = -1, clock = 0, min, sec, ms = 0, countDown = 1, periodDuration = 10, shot = 24, vPlayers, hPlayers, hnrs, vnrs, hpf, vpf, hpscore, vpscore, startingFontSize = 19, timeOut1 = 0, timeOut2 = 0, playSounds = 0, disableButtonCommands = 0, cssFieldInFocus = 0, seg = 0, playerFouls = 5, foulsPerQuater = 5, j = 0, shotPause = 0, shotClockColorDifferent = 0, shotAutoStart = 1, sett = new Array;
$(document).ready(function () {
  $("#menu").html('<div><em>&nbsp;</em><a href="/" id="homeLink">Default</a><a href="/tournament/">Tournament</a><a href="/click-counter/">Counter</a><a href="/timer/">Timer</a><a href="/cricket/">Cricket</a></div><div><em>&nbsp;</em><a href="/football/">Football</a><a href="/ice-hockey/">Ice Hockey</a><a href="/field-hockey/">Field Hockey</a><a href="/handball/">Handball</a><a href="/rugby/">Rugby</a></div><div><em>&nbsp;</em><a href="/basketball/">Basketball</a><a href="/basketball/nba/">NBA</a><a href="/basketball/shot-clock/">Shot clock</a><a href="/basketball/half-time-clock/">Half time</a><a href="/basketball/final-score-result/">Result ex.</a></div><div><em>&nbsp;</em><a href="/board-game/">Board games</a><a href="/board-game/7-wonders/">7 Wonders</a><a href="/volleyball/">Volleyball</a><a href="/tennis/">Tennis</a><a href="/table-tennis-ping-pong/">Table Tennis</a></div><div><em>&nbsp;</em><a href="/race-timer/">Race timer</a><a href="/race-timer/athletics/">Athletics</a><a href="https://ruwix.com/online-rubiks-stopwatch-timer/" target="_blank" rel="nofollow">Rubik\'s Cube</a><a href="/chess-clock/">Chess Clock</a><a href="/box/">Boxing</a></div><div class="designYourOwn"><em>&nbsp;</em><span>Configure your own scoreboard in the settings.</span><a class="startTour">Customize</a><a class="how2useToggle">Read more <strong>&ddarr;</strong></a></div><div id="closeWelcome" class="toggleIntro">&times;</div>'), $("#showHidePlayerBoards").html('<div id="showHideLabels" class="slNOPE"> <div id="activeModeNow" class="mode1"> <div id="settingsOpen" class=""> <div id="scoreBoard" spellcheck="false"> <div id="fontSelector" class="font1"> <div id="showCaretOrNot"> <div class="players" id="playersHome"> <!-- Populated with js --> </div> <ol class="centerPanel"> <li data-li="1" class="listaPanel1"> <div class="wrapBoardTitle"> <input id="scoreBoardTitle" type="text" value="Tournament" > </div> </li> <li data-li="2" class="listaPanel2"> <div id="wrapScores" class="teams2"> <!-- Populated with js --> </div> </li> <li data-li="3" id="middleSection" class="listaPanel3"> <div class="inlineBlock"> <div class="possession" id="possession1"> &#9668; </div> <div class="wrapFouls"> <div class="wrapLabel"> <input class="label foulLabel" type="text" value="FOULS" > </div> <input id="fouls1" class="digital editable" type="number" value="0" min="0" max="9" > </div> <div> <div class="showHockeyPenalty"> <div class="wrapLabel"> <input class="label penaltyLabel" type="text" value="PENALTY" > </div> <div class="playerPenalty"> <input id="penaltyH1" class="penaltyNR" type="text" value="" maxlength="2" size="2"> <div class="wrapPenaltyClock off" data-player="H1" id="wrapPenaltyClockH1"> <input id="penaltyH1Min" class="digital editable" type="text" value="0" > <span id="penaltyClockSeparatorH1">:</span> <input id="penaltyH1Sec" class="digital editable" type="text" value="00" > </div> </div> <div class="playerPenalty"> <input id="penaltyH2" class="penaltyNR" type="text" value="" maxlength="2" size="2"> <div class="wrapPenaltyClock off" data-player="H2" id="wrapPenaltyClockH2"> <input id="penaltyH2Min" class="digital editable" type="text" value="0" > <span id="penaltyClockSeparatorH2">:</span> <input id="penaltyH2Sec" class="digital editable" type="text" value="00" > </div> </div> </div> </div> <div id="timeOut1" class="glow0"> <div class="wrapLabel"> <input class="label toLabel" type="text" value="TIME OUT" > </div> <div class="showTimeOut"> <div class="timeOutDot timeOutDot1">o</div> <div class="timeOutDot timeOutDot2">o</div> <div class="timeOutDot timeOutDot3">o</div> </div> </div> <div id="showOrHidePeriod"> <div class="wrapLabel"> <input class="label periodLabel" type="text" value="PERIOD" > </div> <div id="wrapPeriodDiv"> <div id="periodCenter"> <input id="period" class="digital editable" type="number" value="1" min="0" > </div> <div id="wrapOvertime"> <input id="overtime" type="text" value="OT" maxlength="2" size="2" > </div> </div> </div> <div> <div class="showHockeyPenalty"> <div class="wrapLabel"> <input class="label penaltyLabel" type="text" value="PENALTY" > </div> <div class="playerPenalty"> <input id="penaltyV1" class="penaltyNR" type="text" value="" maxlength="2" size="2"> <div class="wrapPenaltyClock off" data-player="V1" id="wrapPenaltyClockV1"> <input id="penaltyV1Min" class="digital editable" type="text" value="0" > <span id="penaltyClockSeparatorV1">:</span> <input id="penaltyV1Sec" class="digital editable" type="text" value="00" > </div> </div> <div class="playerPenalty"> <input id="penaltyV2" class="penaltyNR" type="text" value="" maxlength="2" size="2"> <div class="wrapPenaltyClock off" data-player="V2" id="wrapPenaltyClockV2"> <input id="penaltyV2Min" class="digital editable" type="text" value="0" > <span id="penaltyClockSeparatorV2">:</span> <input id="penaltyV2Sec" class="digital editable" type="text" value="00" > </div> </div> </div> </div> <div id="timeOut2" class="glow0"> <div class="wrapLabel"> <input class="label toLabel" type="text" value="TIME OUT" > </div> <div class="showTimeOut"> <div class="timeOutDot timeOutDot1">o</div> <div class="timeOutDot timeOutDot2">o</div> <div class="timeOutDot timeOutDot3">o</div> </div> </div> <div class="wrapFouls"> <div class="wrapLabel"> <input class="label foulLabel" type="text" value="FOULS" > </div> <input id="fouls2" class="digital editable" type="number" value="0" min="0" max="9" > </div> <div class="possession active" id="possession2"> &#9658; </div> <div class="clearboth"></div> </div> </li> <li data-li="4" id="wrapWrapTime" class="listaPanel4"> <div id="wrapTime" class="timerAuto"> <div class="inlineBlock"> <div id="isUnderOneMin" class="itIsUnderOneMin"> <input id="minutes" class="timer digital editable minutesSection" type="text" value="00" maxlength="2" size="2"> <span class="timerSeparator minutesSection digital">:</span> <input id="seconds" class="timer digital editable" type="text" value="00" maxlength="2" size="2"> <span class="timerSeparator hundredthSection digital">.</span> <input id="hundredth" class="timer digital editable hundredthSection" type="text" value="00" maxlength="2" size="2"> <div class="clearboth"></div> </div> </div> <div id="wrapQickTimerSet" class="revealWhenHovered"> <div id="quickTimerSet"> <a>0</a> <a>1</a> <a>2</a> <a>5</a> <a>10</a> <a>12</a> <a>15</a> <a>20</a> <a>25</a> <a>30</a> <a>60</a> <a id="equalWithPeriodDuration">99</a> </div> </div> </div> </li> <li data-li="5" class="listaPanel5"> <div id="showShotClock"> <div class="wrapShotClock"> <input id="shotClock" class="digital editable" type="text" value="24" maxlength="2" size="2" >  <div id="wrapShotClockButtons" class="revealWhenHovered"> <div id="shotClockButtons"> <a id="shotClockPause">&#10074;&#10074;</a> <a id="shotClockEdit"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;" xml:space="preserve"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"></path></g></svg> </a> <a id="shotClock14">14</a> </div> </div> </div> </div> </li> </ol> <div class="players" id="playersVisitor"> <!-- Populated with js --> </div> <div class="clearboth"> </div> </div> </div>  <div id="settings" class="right"> <div> <strong>Reset</strong>  <em data-button="resetScore">Score</em> <em data-button="resetTimer">Timer</em> <em data-button="resetPeriod">Period</em> <em data-button="resetPlayers">Players</em> </div><div> <strong>Mode</strong>  <span data-cat="mode" data-s="1">ScoreBoard</span>  <span data-cat="mode" data-s="2">ScoreSheet</span>  <span data-cat="mode" data-s="3">LapTimer</span>  </div><div> <strong>Teams</strong>  <span data-cat="team" data-s="1">1</span> <span data-cat="team" data-s="2">2</span> <span data-cat="team" data-s="3">3</span> <span data-cat="team" data-s="4">4</span> <span data-cat="team" data-s="5">5</span> <span data-cat="team" data-s="6">6</span> <span data-cat="team" data-s="7">7</span> <span data-cat="team" data-s="8">8</span> <span data-cat="team" data-s="9">9</span> <span data-cat="team" data-s="10">10</span> </div><div> <strong>Timer</strong> <span data-cat="timerWiew" data-s="timerMS" data-order="1" title="Minutes and seconds">M &amp; s</span>  <span data-cat="timerWiew" data-s="timerAll" data-order="2">All</span> <span data-cat="timerWiew" data-s="timerAuto" data-order="3">Auto</span> &nbsp;&nbsp;&nbsp;&nbsp; <span data-cat="countDir" data-s="0">Count up</span> <span data-cat="countDir" data-s="1">Count down</span>  </div><div> <strong>Period</strong> <input id="periodDuration" type="number" value="10" min="1" max="999" /> m  <i data-button="#wrapOvertime">OT</i> &nbsp;&nbsp;&nbsp;  <span data-cat="sounds" data-s="off"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 448.075 448.075" style="enable-background:new 0 0 448.075 448.075;" xml:space="preserve"> <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/> <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376  c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48  c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672  c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/> </svg> </span> <span data-cat="sounds" data-s="on"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_11" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 115.3 115.3" style="enable-background:new 0 0 115.3 115.3;" xml:space="preserve"> <g> <path d="M47.9,14.306L26,30.706H6c-3.3,0-6,2.7-6,6v41.8c0,3.301,2.7,6,6,6h20l21.9,16.4c4,3,9.6,0.2,9.6-4.8v-77   C57.5,14.106,51.8,11.306,47.9,14.306z"/> <path d="M77.3,24.106c-2.7-2.7-7.2-2.7-9.899,0c-2.7,2.7-2.7,7.2,0,9.9c13,13,13,34.101,0,47.101c-2.7,2.7-2.7,7.2,0,9.899   c1.399,1.4,3.199,2,4.899,2s3.601-0.699,4.9-2.1C95.8,72.606,95.8,42.606,77.3,24.106z"/> <path d="M85.1,8.406c-2.699,2.7-2.699,7.2,0,9.9c10.5,10.5,16.301,24.4,16.301,39.3s-5.801,28.8-16.301,39.3   c-2.699,2.7-2.699,7.2,0,9.9c1.4,1.399,3.2,2.1,4.9,2.1c1.8,0,3.6-0.7,4.9-2c13.1-13.1,20.399-30.6,20.399-49.2   c0-18.6-7.2-36-20.399-49.2C92.3,5.706,87.9,5.706,85.1,8.406z"/> </g> </svg> </span> <strong>Font</strong> <span data-cat="font" data-s="1" id="fontFamily1">18</span> <span data-cat="font" data-s="2" id="fontFamily2">18</span> <span data-cat="font" data-s="3" id="fontFamily3">18</span> <span data-cat="font" data-s="4" id="fontFamily4">18</span> <span data-cat="font" data-s="5" id="fontFamily5">18</span> </div><div> <strong>Shot</strong> <input id="shotClockDuration" type="number" value="24" min="1" max="999" /> s&nbsp;&nbsp;  <span data-cat="shotClockSize" data-s="1" title="Small">&#9603;</span> <span data-cat="shotClockSize" data-s="2" title="Medium">&#9605;</span> <span data-cat="shotClockSize" data-s="3" title="Large">&#9608;</span> &nbsp;&nbsp; 				  <span data-cat="shotClockColor" data-s="0" title="Same color" class="shotClockColorSelect">24</span> <span data-cat="shotClockColor" data-s="1" title="Different color" class="shotClockColorSelect secondShotClockColor">24</span> &nbsp; Start: <span data-cat="shotAutoStart" data-s="0">Manual</span> <span data-cat="shotAutoStart" data-s="1">Auto</span> </div><div> <strong>Colors</strong>  <div class="wrapColorPicker"><input class="jscolor" name="bgColor" id="bgColor" value="#69716B" title="Background color"></div> <div class="wrapColorPicker"><input class="jscolor" name="textColor" id="textColor" value="#FFFFFF" title="Text color"></div> <div class="wrapColorPicker"><input class="jscolor" name="digitColor" id="digitColor" value="#F70000" title="Digit color"></div> <div class="wrapColorPicker"><input class="jscolor" name="digitBg" id="digitBg" value="#000000" title="Digit Background"></div>  <span data-cat="theme" data-s="defaultTheme">Default</span>  <span data-cat="theme" data-s="darkTheme">Dark</span>  <span data-cat="theme" data-s="brightTheme">Light</span>  <span data-cat="theme" data-s="contrastTheme">B&amp;w</span> </div><div> <strong>Style</strong>  <textarea id="customCSS" name="customCSS" cols="20" rows="1" placeholder="Custom CSS stylesheet"></textarea> </div><div> <strong>Images</strong>  <input type="text" name="backgroundImg" id="backgroundImg" placeholder="Backgr URL" /> <input type="text" name="team1Img" id="team1Img" placeholder="Home logo" /> <input type="text" name="team2Img" id="team2Img" placeholder="Visitor logo" /> </div><div> <strong>Adjust</strong>  <em data-button="zoom100" title="Reset to default"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 489.533 489.533" style="enable-background:new 0 0 489.533 489.533;" xml:space="preserve"> <path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9   l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6   c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6   C49.575,418.961,150.875,501.261,268.175,488.161z" style="fill: rgb(0, 0, 0);"></path> </svg> </em> <input type="range" id="zoomSlider" min="0.2" max="2" step="0.05" value="1" title="Zoom"> <input type="range" id="fontSlider" min="5" max="30" step="1" value="18" title="Font size"> <input type="range" id="pushDown" min="-350" max="350" step="1" value="0" title="Push down"> </div><div> <strong>Show</strong> <i data-button=".wrapBoardTitle">Title</i> <i data-button=".wrapTeamName">Team</i> <i data-button=".scoreWrapper">Score</i> <i data-button=".wrapLabel" id="labelToggleButton">Labels</i> <i data-button="#wrapTime">Timer</i> <i data-button="#showShotClock">Shot</i> <i data-button=".players" id="playersToggleButton">Players</i> <br /> <strong></strong> <i data-button=".possession">Possession </i> <i data-button=".wrapFouls">Fouls</i> <i data-button=".showHockeyPenalty">Penalties</i> <i data-button=".showTimeOut">TimeOut</i> <i data-button="#showOrHidePeriod">Period</i> <i data-button=".ranking">Ranking</i> </div>  <div id="closeSettings" title="Close settings">&times;</div> <div id="settingsRight" title="To the right">&raquo;</div> <div id="saveSettings" title="Save settings"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <path d="M320,0h-42.667c-5.888,0-10.667,4.779-10.667,10.667v128c0,5.888,4.779,10.667,10.667,10.667H320    c5.888,0,10.667-4.779,10.667-10.667v-128C330.667,4.779,325.888,0,320,0z" style="fill: rgb(0, 0, 0);"></path> </g> <g> <path d="M498.219,45.803L455.552,3.136C453.547,1.131,450.837,0,448,0h-42.667c-5.888,0-10.667,4.779-10.667,10.667v128    c0,17.664-14.336,32-32,32h-21.333H256h-85.333c-17.664,0-32-14.336-32-32v-128C138.667,4.779,133.888,0,128,0H42.667    c-2.837,0-5.547,1.131-7.531,3.115L13.803,24.448c-2.005,2.005-3.136,4.715-3.136,7.552v448c0,2.837,1.131,5.547,3.115,7.531    l21.333,21.333c2.005,2.005,4.715,3.136,7.552,3.136h426.667c2.837,0,5.547-1.131,7.552-3.115l21.333-21.333    c1.984-2.005,3.115-4.715,3.115-7.552V53.333C501.333,50.496,500.203,47.787,498.219,45.803z M458.667,480    c0,5.888-4.779,10.667-10.667,10.667H64c-5.888,0-10.667-4.779-10.667-10.667V224c0-17.643,14.357-32,32-32h341.333    c17.643,0,32,14.357,32,32V480z" style="fill: rgb(0, 0, 0);"></path> </g> <g> <path d="M366.699,314.539c-0.96-2.816-3.029-5.099-5.739-6.293c-2.709-1.216-5.781-1.259-8.533-0.085    c-4.885,2.133-10.752,0.299-13.312-4.139c-2.645-4.565-1.344-10.283,3.093-13.611c2.368-1.771,3.904-4.48,4.203-7.445    c0.299-2.944-0.64-5.888-2.603-8.128c-17.408-19.797-39.829-32.896-64.832-37.845c-2.923-0.64-6.016,0.085-8.427,1.877    c-2.411,1.771-3.968,4.501-4.288,7.488C265.728,251.861,261.312,256,256,256c-5.312,0-9.728-4.139-10.283-9.664    c-0.32-2.987-1.856-5.717-4.288-7.488c-2.411-1.792-5.483-2.517-8.427-1.877C208,241.941,185.6,255.04,168.192,274.837    c-1.963,2.219-2.901,5.184-2.603,8.128c0.299,2.965,1.813,5.653,4.203,7.445c4.416,3.328,5.717,9.045,3.093,13.611    c-2.56,4.416-8.384,6.229-13.312,4.139c-2.731-1.173-5.824-1.131-8.533,0.085c-2.709,1.216-4.779,3.499-5.739,6.293    c-4.459,13.141-6.635,25.408-6.635,37.461s2.176,24.32,6.635,37.461c0.96,2.816,3.029,5.099,5.739,6.293    c2.688,1.216,5.803,1.259,8.533,0.085c4.949-2.069,10.752-0.277,13.312,4.139c2.645,4.565,1.344,10.283-3.093,13.611    c-2.368,1.771-3.904,4.48-4.203,7.445c-0.299,2.944,0.64,5.888,2.603,8.128c17.408,19.797,39.829,32.896,64.832,37.845    c2.901,0.597,5.995-0.085,8.427-1.877c2.411-1.771,3.968-4.501,4.288-7.488C246.272,452.139,250.688,448,256,448    c5.312,0,9.728,4.139,10.283,9.664c0.32,2.987,1.856,5.717,4.288,7.488c1.835,1.365,4.075,2.091,6.336,2.091    c0.704,0,1.387-0.064,2.091-0.213c25.003-4.971,47.424-18.069,64.832-37.845c1.963-2.219,2.901-5.184,2.603-8.128    c-0.299-2.965-1.813-5.653-4.203-7.445c-4.416-3.328-5.717-9.045-3.093-13.611c2.539-4.437,8.363-6.251,13.312-4.139    c2.731,1.152,5.824,1.109,8.533-0.085c2.709-1.195,4.779-3.499,5.739-6.293c4.437-13.163,6.613-25.429,6.613-37.483    S371.157,327.68,366.699,314.539z M256,384c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32    C288,369.643,273.643,384,256,384z"></path> </g> </svg> </div> </div> <a id="logo" class="opened toggleIntro"> 5core<br /><span>&nbsp;Count&nbsp;</span><br /><strong>.co<em>3</em></strong> </a> <div id="toggleMenu"> &equiv; </div> <div id="log"> </div> <div id="panelCorner"> <a title="Edit" id="editValues"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;" 	 xml:space="preserve"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"/></g></svg> </a> <a title="Settings" id="openSettings"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 21.589 21.589" style="enable-background:new 0 0 21.589 21.589;" xml:space="preserve"> <g> <path d="M18.622,8.371l-0.545-1.295c0,0,1.268-2.861,1.156-2.971l-1.679-1.639c-0.116-0.113-2.978,1.193-2.978,1.193l-1.32-0.533   c0,0-1.166-2.9-1.326-2.9H9.561c-0.165,0-1.244,2.906-1.244,2.906L6.999,3.667c0,0-2.922-1.242-3.034-1.131L2.289,4.177   C2.173,4.29,3.507,7.093,3.507,7.093L2.962,8.386c0,0-2.962,1.141-2.962,1.295v2.322c0,0.162,2.969,1.219,2.969,1.219l0.545,1.291   c0,0-1.268,2.859-1.157,2.969l1.678,1.643c0.114,0.111,2.977-1.195,2.977-1.195l1.321,0.535c0,0,1.166,2.898,1.327,2.898h2.369   c0.164,0,1.244-2.906,1.244-2.906l1.322-0.535c0,0,2.916,1.242,3.029,1.133l1.678-1.641c0.117-0.115-1.22-2.916-1.22-2.916   l0.544-1.293c0,0,2.963-1.143,2.963-1.299v-2.32C21.59,9.425,18.622,8.371,18.622,8.371z M14.256,10.794   c0,1.867-1.553,3.387-3.461,3.387c-1.906,0-3.461-1.52-3.461-3.387s1.555-3.385,3.461-3.385   C12.704,7.41,14.256,8.927,14.256,10.794z" ></path> </g> </svg> </a> <a title="Full screen" id="fullScreen"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 489.001 489.001" style="enable-background:new 0 0 489.001 489.001;" xml:space="preserve"> <g> <path d="M2.2,168.151l-2.1-151.3c-0.1-7.7,6.2-14,13.9-13.9l151.3,2.2c12.1,0.2,18.1,14.8,9.5,23.4l-42.1,42.1l70,70l-65,65    l-70-70l-42.1,42.1C17.1,186.251,2.4,180.251,2.2,168.151z"></path> <path d="M421.3,136.551l42.1,42.1c8.6,8.6,23.2,2.6,23.4-9.5l2.2-151.3c0.1-7.7-6.2-14-13.9-13.9l-151.3,2.2    c-12.1,0.2-18.1,14.8-9.5,23.4l42,41.9l-70,70l65,65L421.3,136.551z"></path> <path d="M314.2,460.451c-8.6,8.6-2.6,23.2,9.5,23.4l151.3,2.2c7.7,0.1,14-6.2,13.9-13.9l-2.2-151.3c-0.2-12.1-14.8-18.1-23.4-9.5    l-42.1,42.1l-70-70l-65,65l70,70L314.2,460.451z"></path> <path d="M14,485.051l151.3-2.2c12.1-0.2,18.1-14.8,9.5-23.4l-42.1-42l70-70l-65-65l-70,70l-42.1-42.1c-8.6-8.6-23.2-2.6-23.4,9.5    L0,471.151C0,478.851,6.3,485.151,14,485.051z"></path> </g> </svg> </a> <a title="Save / Broadcast" id="shareButton"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 414.72 414.72" style="enable-background:new 0 0 414.72 414.72;" xml:space="preserve"> <g> <path d="M413.184,240.792l-39.936-77.824c-2.048-3.584-5.632-6.144-9.728-6.144H235.008v99.84h-82.944V240.28    c19.456-3.584,36.864-12.8,50.176-26.624c4.608-4.608,4.608-11.776,0-15.872l-40.96-40.96l19.968-29.696    c3.072-4.608,2.048-10.24-1.536-13.824l-10.24-10.24c-3.584-3.584-9.216-4.608-13.824-1.536l-30.208,19.456l-40.96-40.96    c-4.608-4.096-11.264-4.096-15.872,0c-37.376,36.864-37.376,96.768-0.512,134.144c2.56,2.56,5.632,5.12,8.192,7.168v35.84H0    v114.176h31.232c6.144,28.16,34.304,45.568,62.464,39.424c19.968-4.608,35.328-19.968,39.424-39.424h134.656    c6.144,28.16,34.304,45.568,62.464,39.424c19.968-4.608,35.328-19.968,39.424-39.424h45.056v-125.44    C414.72,243.864,414.208,242.328,413.184,240.792z M81.92,389.272c-16.384,0-29.696-13.312-29.696-29.696    c0-16.384,13.312-29.696,29.696-29.696c16.384,0,29.696,13.312,29.696,29.696S98.304,389.272,81.92,389.272z M129.536,256.664    H98.304v-22.528c9.728,4.096,20.48,6.656,31.232,7.168V256.664z M318.464,389.272c-16.384,0-29.696-13.312-29.696-29.696    c0-16.384,13.312-29.696,29.696-29.696c16.384,0,29.696,13.312,29.696,29.696S334.848,389.272,318.464,389.272z"></path> </g> <g> <path d="M152.064,51.864v22.528c34.816,0,62.976,28.16,62.976,62.976h22.528C237.568,90.264,199.68,51.864,152.064,51.864z"></path> </g> <g> <path d="M158.208,2.712V25.24c58.368,0,105.984,47.616,105.984,106.496h22.528C286.72,60.568,229.376,2.712,158.208,2.712z"></path> </g> </svg> </a> <a title="Help" class="toggleIntro" id="showHelp">?</a> </div> </div> </div> </div> </div>'), $(".wrapHow2Use").html('<div class="dividerLine how2use"></div><div class="col how2use"><h2>How to use</h2><p>Close this intro text or scroll down to unveil the scoreboard. The gear icon in the menu opens the settings where you can experiment with the available options. You can always refresh the page (F5 key) to come back to the default&nbsp;configuartion.</p><p>Click the panels to increase the score and other counters and to start/stop the timer. Hover the bottom right corner of the panels to reveal additional shotcuts. </p><p>There art three main modes of operation: the default score counter, the score adder where the porgram automatically adds the scores and the lap timer. </p></div><div class="col how2use"><h2 id="keyboardCommandsAnchor">Keyboard commands</h2><p><span class="inline"><strong>Space</strong> &ndash; start / stop timer</span><span class="inline"><strong>Esc, Enter</strong> &ndash; exit settings and edit mode</span><span class="inline"><strong>E</strong> &ndash; enter edit mode</span><span class="inline"><strong>R</strong> &ndash; toggle settings</span><span class="inline"><strong>Q</strong> &ndash; increase home team score</span><span class="inline"><strong>A</strong> &ndash; decrease home score</span><span class="inline"><strong>W</strong> &ndash; increase visitor team score</span><span class="inline"><strong>S</strong> &ndash; decrease visitor score</span><span class="inline"><strong>P</strong> &ndash; increase period counter</span><span class="inline"><strong>I</strong> &ndash; home team timeout</span><span class="inline"><strong>O</strong> &ndash; visitor timeout</span><span class="inline"><strong>Y</strong> &ndash; home team foul/shot counter</span></p></div><div class="col how2use"><p><span class="inline"><strong>U</strong> &ndash; visitor team foul/shot counter</span><span class="inline"><strong>T</strong> &ndash; change alternating posession</span><span class="inline"><strong>L</strong> &ndash; toggle overtime</span><span class="inline"><strong>C</strong> &ndash; pause shot clock</span><span class="inline"><strong>X</strong> &ndash; reset shot clock to maximum</span><span class="inline"><strong>Z</strong> &ndash; set shot clock to 14 seconds</span><span class="inline"><strong>V</strong> &ndash; edit shot clock value </span></p><div class="dividerLine how2use"></div><p>This website is using cookies to provide the best user experience. Turn them off in your browser settings if you&nbsp;wish to disallow&nbsp;them.</p><p><strong>Contact:</strong> <img src="/files/cont.png" alt="cookie policy" /></p></div><div class="dividerLine how2use"></div><div class="col how2use"><h2>The settings</h2><p><strong>Open the menu (&equiv;) in the top right corner of the screen and click the gear icon to access the settings:</strong></p><p><strong>Reset</strong> &ndash; restore the default values with a click<br /><strong>Mode</strong> &ndash; beside the default score counter we can add the scores of different rounds and measure lap times. Start the timer when the lap timer mode is active and click the team/player to record his time.<br /><strong>Teams</strong> &ndash; add up to 10 players or teams the the game. The default is 2: Homve vs. Visitors.<br /><strong>Timer</strong> &ndash; set the timer to show the minutes and seconds, minutes-seconds-hundredths or automatically show the hundredths when the clock is under one minute. Decide whether to count down or up.<br /><strong>Period</strong> &ndash; adjust the period duration and toggle the overtime mark<br /><strong>Sounds</strong> &ndash; turn on to sound horn at the end of the period or when the shot clock expires<br /><strong>Font</strong> &ndash; beside the default 7-segment display you can use other font styles</p></div><div class="col how2use"><p><strong>Shot clock</strong> &ndash; a secondary <a href="https://en.wikipedia.org/wiki/Shot_clock" target="_blank" rel="external nofollow">24 second timer</a> is used to measure the play in basketball. Set up its duration, size, colors and whether you wish to start it automatically with the main timer.<br /><strong>Colors</strong> &ndash; activate one of the predefined templates or set your custom 4 colors to style the scoreboard <br /><strong>Style</strong> &ndash; an advanced field that requires <a href="https://htmlcheatsheet.com/css/" target="_blank" rel="external nofollow">CSS code</a> and allows you to style the board without limitations <br /><strong>Images</strong> &ndash; add an image background and display the logos of the two opposing teams specifying the URL of the images. You can not upload your image files to our server so I recommend using a thrid party file sharing service such as <a href="https://postimages.org/" target="_blank" rel="external nofollow">PostImages.org</a> or <a href="https://imgbb.com/" target="_blank" rel="external nofollow">ibb.co</a>. The recommended file format is png with transparent background. <br /><strong>Adjust</strong> &ndash; set the perfect layout for your board adjusting its size, font size and top margin. Use the <br /><strong>Show</strong> &ndash; pick which panels you wish to hide and show. Each panel group has a close button which shows up when the settins are open and you hover a display with your mouse.<br />Open the settings to reorganize the order of the rows and hover the section you would like to move up. Click the top arrows that show up on the right of a panel while hovering it. This way you can move the clock to the top and the score to the bottom.</p></div><div class="col how2use"><h2>Edit mode</h2><p>Toggle edit mode with the pencil icon in the menu. A cursor starts blinking in the first score counter when the edit mode is activated. Use your keyboard to set the values easily. Make sure to enter number values in the counters, otherwise they will be set to zero. </p><p>The <a href="#keyboardCommandsAnchor">keyboard shortcuts</a> are disabled when the edit mode is turned on.</p><h2>Full screen</h2><p>Toggle full screen mode to hide the browser frame. You can also do this pressing the F11 key in most web browsers. You might need to adjust the zoom and top margin in the settings.</p><h2>Save / Broadcast</h2><p>This option collects every current variable on your scoreboard and encodes it in a web link. Every value that differs from the default will be added as a URL parameter. This way you can save your settings and share a game.</p><div class="dividerLine how2use"></div><p>This website is using third party cookies to collect anonymous visitor analytics and&nbsp;to&nbsp;show tailored&nbsp;ads.</p><p><a href="/m/#contact">Contact</a> | <a href="/sitemap/">SiteMap</a> &copy;ScoreCount.com</p></div>'), $(".jscolor").colorPicker(), resetShotClock(shot);
  for (var b = 1; b <= 10; b++) {
    var e = "Team" + b;
    1 == b && (e = "Home"), 2 == b && (e = "Visitor"), $("#wrapScores").append('<div class="team" id="team' + b + '"><div id="teamImage' + b + '" class="teamImage"></div><div class="wrapTeamName"><input id="teamName' + b + '" class="teamName" type="text" maxlength="20"  value="' + e + '" /></div><div class="roundsAndAddIcon"><div class="roundWrapper" data-id="' + b + '" id="wrapRounds' + b + '"></div><div class="addNewRound" id="addNewRound' + b + '">+</div></div><div class="scoreWrapper"><div class="numberLengthAdjustWidth"><div class="ranking"></div><div class="wrapScoreInput"><input data-ms="0" id="score' + b + '" class="score digital editable" type="text" value="0" /><div class="wrapQuickScoreSett revealWhenHovered"><div class="quickScoreSett" data-id="' + b + '"><a class="resetScore0">=0</a><a class="scoreMinusOne">-1</a><a class="scorePlus2">+2</a><a class="scorePlus3">+3</a> </div></div></div></div></div></div>');
  }
  $("#wrapScores").append('<div class="clearboth"></div>'), $(".resetScore0").click(function (b) {
    adjustScore(j = "#score" + $(this).parent().attr("data-id"), -99999999);
  }), $(".scoreMinusOne").click(function (b) {
    adjustScore(j = "#score" + $(this).parent().attr("data-id"), -1);
  }), $(".scorePlus2").click(function (b) {
    adjustScore(j = "#score" + $(this).parent().attr("data-id"), 2);
  }), $(".scorePlus3").click(function (b) {
    adjustScore(j = "#score" + $(this).parent().attr("data-id"), 3);
  }), $(".how2useToggle").click(function (b) {
    $("#article").show(222), $(".wrapHow2Use").toggle(222);
  }), $("#errorLogShadow").click(function (b) {
    $("#errorLogShadow").hide(222);
  }), $("#shotClockDuration").change(function (b) {
    $("#showShotClock").show(), resetShotClock(shot = Number($("#shotClockDuration").val()));
  }), $("#shotClockPause").click(function (b) {
    pauseShotClock("toggle");
  }), $("#timeOut1").click(function (b) {
    ++timeOut1 > 3 && (timeOut1 = 0), $("#timeOut1").removeClass(), $("#timeOut1").addClass("glow" + timeOut1);
  }), $("#timeOut2").click(function (b) {
    ++timeOut2 > 3 && (timeOut2 = 0), $("#timeOut2").removeClass(), $("#timeOut2").addClass("glow" + timeOut2);
  }), $(".startTour").click(function (b) {
    closeIntro(), updtateWhatsActiveWhatNot(), $("#settings").fadeIn(200), $("#openSettings").addClass("active"), $("#settingsOpen").addClass("settingsIsOpen");
  }), $(".toggleIntro").click(function (b) {
    closeSettingsNow(), $(".cookieWarning, #errorLogShadow").hide(333), console.log("234t43"), $("#article").hide(333), $("#intro").toggle(333, function () {
      $("#logo").toggleClass("opened");
    });
  }), $("#showHelp").click(function (b) {
    $("#article").show(333);
  }), $(".possession").click(function (b) {
    $(".possession").toggleClass("active");
  }), $("#toggleMenu").click(function (b) {
    $("#panelCorner").toggle(222), $("#panelCorner").toggleClass("hiddenPanel"), $("#panelCorner").hasClass("hiddenPanel") && $("#settings").fadeOut(200), $("#panelCorner").hasClass("hiddenPanel") || $("#openSettings").hasClass("active") && $("#settings").fadeIn(200);
  }), $("#settingsRight").click(function (b) {
    $("#settings").toggleClass("right");
  }), $(".centerPanel").click(function (b) {
    $("#intro").hide(333, function () {
      $("#logo").removeClass("opened");
    });
  }), $("#shareButton, #saveSettings").click(function (b) {
    closeSettingsNow(), seg = settingsToUrl(), errorLog('<p>Your settings and current standings are encoded in the link below:</p><a href="https://scorecount.com/' + seg + '">https://scorecount.com/' + seg + "</a><h2>Live broadcast coming soon!</h2>");
  }), $("#fullScreen").click(function (b) {
    fullscreen();
  }), $("body").keydown(function (e) {
    $("#errorLogShadow").fadeOut(222), 13 != e.which && 27 != e.which || (closeIntro(), 13 == e.which && 1 == cssFieldInFocus || (closeSettingsNow(), $("#showCaretOrNot").hasClass("showEditCaret") && enableDisableEditing())), 0 == disableButtonCommands && ($("#editValues").hasClass("active") || (32 == e.which && (clockTrigger(), $("#article").hide(333), $("#intro").hide(333, function () {
      $("#logo").removeClass("opened");
    })), 72 == e.which && 1 == playSounds && buzzer.play(), 81 == e.which && adjustScore("#score1", 1), 65 == e.which && adjustScore("#score1", -1), 87 == e.which && adjustScore("#score2", 1), 83 == e.which && adjustScore("#score2", -1), 67 == e.which && pauseShotClock("toggle"), 88 == e.which && resetShotClock(shot), 90 == e.which && resetShotClock(14), 86 == e.which && (enableDisableEditing(), setTimeout(function () {
      $("#shotClock").focus();
    }, 50)), 80 == e.which && (9 == (b = Number($("#period").val())) ? ($("#period").val(1), $("#wrapOvertime").toggle(222)) : $("#period").val(b + 1), timeOut1 = 0, $("#timeOut1").removeClass(), timeOut2 = 0, $("#timeOut2").removeClass()), 73 == e.which && (++timeOut1 > 3 && (timeOut1 = 0), $("#timeOut1").removeClass(), $("#timeOut1").addClass("glow" + timeOut1)), 79 == e.which && (++timeOut2 > 3 && (timeOut2 = 0), $("#timeOut2").removeClass(), $("#timeOut2").addClass("glow" + timeOut2)), 89 == e.which && $("#fouls1").val(Number($("#fouls1").val()) + 1), 85 == e.which && $("#fouls2").val(Number($("#fouls2").val()) + 1), 84 == e.which && $(".possession").toggleClass("active"), 76 == e.which && $("#wrapOvertime").toggle(222), 69 == e.which && enableDisableEditing(), 82 == e.which && toggleSettings(), e.which, e.which), console.log("Key:", e.which));
  }), $("#zoomSlider").on("change mousemove input", function () {
    $("#fontSelector").css({ "-webkit-transform": "scale(" + $("#zoomSlider").val() + ")", "-moz-transform": "scale(" + $("#zoomSlider").val() + ")", "-ms-transform": "scale(" + $("#zoomSlider").val() + ")", "-o-transform": "scale(" + $("#zoomSlider").val() + ")", transform: "scale(" + $("#zoomSlider").val() + ")" });
  }), $("#pushDown").on("change mousemove input", function () {
    $("#fontSelector").css({ top: "" + $("#pushDown").val() + "px" });
  }), $("#fontSlider").on("change mousemove input", function () {
    updateFontSizeAccordingToFontSlider();
  }), setTimeout(function () {
    $("#panelCorner").show(400), startingFontSize = $("#scoreBoard").css("font-size"), startingFontSize = Number(startingFontSize.substring(0, startingFontSize.length - 2)), $("#fontSlider").val(startingFontSize), updateFontSizeAccordingToFontSlider();
  }, 400), $("#customCSS").change(function (b) {
    updateCustomCss();
  }), $("#customCSS").focus(function (b) {
    $(this).stop().animate({ minHeight: "60px" }, 250, function () { }), cssFieldInFocus = 1;
  }), $("#customCSS").focusout(function (b) {
    $(this).stop().animate({ minHeight: "15px" }, 250, function () { }), cssFieldInFocus = 0;
  }), $("input, textarea").focus(function (b) {
    $(this).attr("id") != "hiddenInput" && (disableButtonCommands = $(this).attr("id"));
  }), $("input, textarea").focusout(function (b) {
    setTimeout(function () {
      disableButtonCommands = 0;
    }, 50);
  }), $(".revealWhenHovered").mouseleave(function (b) {
    $(this).children().stop().animate({ opacity: "0", marginTop: "10px" }, 250, function () { });
  }), $(".revealWhenHovered").mouseover(function (b) {
    $(this).children().stop().animate({ opacity: "1", marginTop: "0px" }, 150, function () { });
  }), window.location.href.length > 26 ? ($("#menu a").each(function () {
    window.location.href.includes($(this).attr("href")) && $(this).addClass("openedLink");
  }), $("#homeLink").removeClass("openedLink")) : ($("#homeLink").addClass("openedLink"), setTimeout(function () {
    $("#article").hide(555);
  }, 1e3)), $(".editable").each(function () {
    $(this).wrap('<div class="wrapEditable" id="wrap' + $(this).attr("id") + '"></div>'), $(this).after('<div class="inputOverlay"></div>');
  }), $(".addNewRound").click(function (b) {
    addNewSocreAdderRound();
  }), $("#settings i").click(function (b) {
    $(this).toggleClass("hidden");
    var e = $(this).attr("data-button");
    e == "#showShotClock" && resetShotClock(shot), $(e).toggle(222), $("#playersToggleButton").hasClass("hidden") ? $("#showHidePlayerBoards").removeClass("sp") : $("#showHidePlayerBoards").addClass("sp"), $("#labelToggleButton").hasClass("hidden") ? $("#showHideLabels").removeClass("sl") : $("#showHideLabels").addClass("sl"), updateFontSizeAccordingToFontSlider();
  }), $("#shotClockEdit").click(function (b) {
    enableDisableEditing(), $("#shotClock").focus();
  }), $("#shotClock14").click(function (b) {
    resetShotClock(14);
  }), $("#closeSettings").click(function (b) {
    closeSettingsNow();
  }), $("#openSettings").click(function (b) {
    toggleSettings();
  }), $("#editValues").click(function (b) {
    enableDisableEditing();
  }), $("#settings span").each(function () {
    $(this).addClass($(this).attr("data-cat") + "Cat");
  }), $("#bgColor, #digitColor, #textColor, #digitBg").change(function (b) {
    updateColorScheme();
  }), $("#backgroundImg").change(function (b) {
    updateBgImg();
  }), $("#team1Img").change(function (b) {
    updateTeamImg(1);
  }), $("#team2Img").change(function (b) {
    updateTeamImg(2);
  }), $(".editable").change(function (b) {
    if (3 == mode) if ((seg = $(this).val()).charAt(seg.length - 3) == "." && seg.charAt(seg.length - 6) == ":") {
      var e = Number(seg.charAt(seg.length - 2) + seg.charAt(seg.length - 1)), t = Number(seg.charAt(seg.length - 5) + seg.charAt(seg.length - 4)), x = Number(seg.charAt(seg.length - 7));
      8 == seg.length && (x = Number(seg.charAt(seg.length - 8) + seg.charAt(seg.length - 7))), seg.length > 8 && (x = Number(seg.charAt(seg.length - 9) + seg.charAt(seg.length - 8) + seg.charAt(seg.length - 7))), j = 10 * e + 1e3 * t + 6e4 * x, console.log(x, " : ", t, " . ", e), console.log("length: ", seg.length), console.log("ms: ", j), $(this).attr("data-ms", j), adjustRankings();
    } else errorLog("Invalid format!<br /> 0:00.00 (minutes:seconds.hundredths) "); else isNaN($(this).val()) && (errorLog("Value must be a number!"), $(this).val("00"));
  }), $("#periodDuration").change(function (b) {
    periodDuration = $(this).val(), updateTimerResetOptions();
  }), $(".score").bind("keyup change", function (b) {
    3 != mode && ($(this).attr("data-ms", $(this).val()), adjustScoreDigitSize());
  }), $("#wrapTime").mousedown(function (b) {
    clockTrigger();
  }), $("#quickTimerSet > a").click(function (b) {
    1 == clock && clockTrigger(), setClockTime(6e4 * (j = Number($(this).text())));
  }), $("#wrapscore1, #wrapscore2, #wrapscore3, #wrapscore4, #wrapscore5, #wrapscore6, #wrapscore7, #wrapscore8, #wrapscore9, #wrapscore10, #wrapperiod, #wrapfouls1, #wrapfouls2").click(function (b) {
    var e = $(this).find("input"), t = Number(e.val());
    1 != mode && $(this).attr("id") != "wrapfouls1" && $(this).attr("id") != "wrapfouls2" && $(this).attr("id") != "wrapperiod" || $("#showCaretOrNot").hasClass("showEditCaret") || (isNaN(t++) ? errorLog("Value must be a number!") : (e.val(t), e.attr("data-ms", t))), $(this).attr("id") == "wrapperiod" && (timeOut1 = 0, $("#timeOut1").removeClass(), timeOut2 = 0, $("#timeOut2").removeClass()), 10 == $("#period").val() && ($("#period").val(1), $("#wrapOvertime").toggle(222)), adjustScoreDigitSize();
  }), $(".wrapScoreInput").click(function (b) {
    $("#showCaretOrNot").hasClass("showEditCaret") || 2 == mode && $(this).parent().parent().prev().children().find("input").first().focus();
  }), $(".wrapScoreInput").mousedown(function (b) {
    $("#showCaretOrNot").hasClass("showEditCaret") || 3 == mode && (j = $("#minutes").val() + ":" + $("#seconds").val() + "." + $("#hundredth").val(), $(this).children().find("input.score").val(j), $(this).children().find("input.score").attr("data-ms", timerNow), adjustScoreDigitSize());
  }), $("#period").click(function (b) {
    if (!$("#showCaretOrNot").hasClass("showEditCaret")) {
      var e = Number($(this).val());
      isNaN(e++) ? errorLog("Value must be a number!") : (e > 9 && (e = 9), $(this).val(e));
    }
  }), $("#settings span").click(function (b) {
    var e = "." + $(this).attr("data-cat") + "Cat";
    $(e).removeClass("select"), $(this).addClass("select"), set($(this).attr("data-cat"), $(this).attr("data-s"));
  }), $("#settings em").click(function (b) {
    buttonClick($(this).attr("data-button"));
  }), seg = "centerPanel", $(".timer").change(function (b) {
    var e = Number($("#minutes").val()), t = Number($("#seconds").val()), x = Number($("#hundredth").val());
    e < 0 && (e *= -1), 100 == x && (x = 0, t++), 60 == t && (t = 0, e++), x < 10 && (x = "0" + x), t < 10 && (t = "0" + t), $("#minutes").val(e), $("#seconds").val(t), $("#hundredth").val(x);
  }), seg = "." + seg, resizeContent(), $(window).resize(function () {
    resizeContent();
  }), $("#showCaretOrNot").fadeIn(222), $(".wrapPenaltyClock").click(function (b) {
    if (!$("#showCaretOrNot").hasClass("showEditCaret")) {
      var e = $(this).attr("data-player"), t = Number($("#penalty" + e + "Min").val());
      0 == (x = Number($("#penalty" + e + "Sec").val())) ? (0 == t ? j = 2 : 2 == t ? j = 4 : 4 == t ? j = 5 : 5 == t ? j = 10 : 10 == t && (j = 0), $("#penalty" + e + "Min").val(j), j > 0 ? $("#wrapPenaltyClock" + e).removeClass("off") : $("#wrapPenaltyClock" + e).addClass("off")) : (kiirPenaltyClockTime(e, 0), $("#wrapPenaltyClock" + e).addClass("off"), e == "H1" && (expirePenaltyH1down = 0), e == "H2" && (expirePenaltyH2down = 0), e == "V1" && (expirePenaltyV1down = 0), e == "V2" && (expirePenaltyV2down = 0));
      var t = Number($("#minutes").val()), x = Number($("#seconds").val()), _ = Number($("#hundredth").val());
      e == "H1" && (expirePenaltyH1up = 10 * _ + 1e3 * x + 6e4 * (t + j), expirePenaltyH1down = 10 * _ + 1e3 * x + 6e4 * (t - j)), e == "H2" && (expirePenaltyH2up = 10 * _ + 1e3 * x + 6e4 * (t + j), expirePenaltyH2down = 10 * _ + 1e3 * x + 6e4 * (t - j)), e == "V1" && (expirePenaltyV1up = 10 * _ + 1e3 * x + 6e4 * (t + j), expirePenaltyV1down = 10 * _ + 1e3 * x + 6e4 * (t - j)), e == "V2" && (expirePenaltyV2up = 10 * _ + 1e3 * x + 6e4 * (t + j), expirePenaltyV2down = 10 * _ + 1e3 * x + 6e4 * (t - j)), $("#penalty" + e).val(""), $("#penalty" + e).focus();
    }
  }), $(".wrapPenaltyClock input").keyup(function (b) {
    updatePlayerPenaltyTime($(this).parent().parent().attr("data-player"));
  }), $(".wrapPenaltyClock input").change(function (b) {
    updatePlayerPenaltyTime($(this).parent().parent().attr("data-player"));
  }), $("#wrapshotClock").click(function (b) {
    $("#showCaretOrNot").hasClass("showEditCaret") || resetShotClock(shot);
  }), $("#settings i").each(function () {
    var b = $(this).attr("data-button");
    $(b).addClass("closeable"), $(b).append('<div class="closeThisPanel" onclick="closeThisPanel(\'' + b + '\')" title="Hide this panel">&times;</div>');
  }), j = 0, $(".centerPanel li").each(function () {
    $(this).append('<div class="moveThisPanelUp" data-order="' + j + '" title="Move this row up">&laquo;</div>'), j++;
  }), $(".moveThisPanelUp").click(function (b) {
    $(this).parent().prev().before($(this).parent());
  }), $("#minutes").val($("#periodDuration").val()), showHideMiliseconds(), updateTimerResetOptions(), initVariables();
});
var parameterstring;
String.prototype.replaceAt = function (b, e) {
  return this.substr(0, b) + e + this.substr(b + e.length);
};
var startTime = 0, tamadoIdoUp = 0, tamadoIdoDown = 0, expirePenaltyH1up = 0, expirePenaltyH2up = 0, expirePenaltyV1up = 0, expirePenaltyV2up = 0, expirePenaltyH1down = 0, expirePenaltyH2down = 0, expirePenaltyV1down = 0, expirePenaltyV2down = 0, shotClockTime = 24714, shotClockExpired = 0, shotClockSeconds = 24, buzzer = new Audio("/files/buzzersound.mp3"), rounds = -1, fontSizeInitiated = 0;
!function (b) {
  var e, t, x, _ = 0, s = { control: b('<div class="colorPicker-picker">&nbsp;</div>'), palette: b('<div id="colorPicker_palette" class="colorPicker-palette" />'), swatch: b('<div class="colorPicker-swatch">&nbsp;</div>'), hexLabel: b('<label for="colorPicker_hex">Hex</label>'), hexField: b('<input type="text" id="colorPicker_hex" />') };
  b.fn.colorPicker = function (e) {
    return this.each(function () {
      var t, x, a = b(this), o = b.extend({}, b.fn.colorPicker.defaults, e), i = b.fn.colorPicker.toHex(a.val().length > 0 ? a.val() : o.pickerDefault), n = s.control.clone(), r = s.palette.clone().attr("id", "colorPicker_palette-" + _), l = s.hexLabel.clone(), c = s.hexField.clone(), d = r[0].id;
      if (b.each(o.colors, function (e) {
        t = s.swatch.clone(), "transparent" === o.colors[e] ? (t.addClass("transparent").text("X"), b.fn.colorPicker.bindPalette(c, t, "transparent")) : (t.css("background-color", "#" + this), b.fn.colorPicker.bindPalette(c, t)), t.appendTo(r);
      }), l.attr("for", "colorPicker_hex-" + _), c.attr({ id: "colorPicker_hex-" + _, value: i }), c.bind("keydown", function (e) {
        if (13 === e.keyCode) {
          var t = b.fn.colorPicker.toHex(b(this).val());
          b.fn.colorPicker.changeColor(t || a.val());
        }
        27 === e.keyCode && b.fn.colorPicker.hidePalette();
      }), c.bind("keyup", function (e) {
        var t = b.fn.colorPicker.toHex(b(e.target).val());
        b.fn.colorPicker.previewColor(t || a.val());
      }), b('<div class="colorPicker_hexWrap" />').append(l).appendTo(r), r.find(".colorPicker_hexWrap").append(c), false === o.showHexField && (c.hide(), l.hide()), b("body").append(r), r.hide(), n.css("background-color", i), n.bind("click", function () {
        a.is(":not(:disabled)") && b.fn.colorPicker.togglePalette(b("#" + d), b(this));
      }), e && e.onColorChange ? n.data("onColorChange", e.onColorChange) : n.data("onColorChange", function () { }), (x = a.data("text")) && n.html(x), a.after(n), a.bind("change", function () {
        a.next(".colorPicker-picker").css("background-color", b.fn.colorPicker.toHex(b(this).val()));
      }), a.val(i), "input" === a[0].tagName.toLowerCase()) try {
        a.attr("type", "hidden");
      } catch (b) {
        a.css("visibility", "hidden").css("position", "absolute");
      } else a.hide();
      _++;
    });
  }, b.extend(true, b.fn.colorPicker, {
    toHex: function (b) {
      if (b.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) return "#" === b.charAt(0) ? b : "#" + b;
      if (!b.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) return false;
      var e = [parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)], t = function (b) {
        if (b.length < 2) for (var e = 0, t = 2 - b.length; e < t; e++) b = "0" + b;
        return b;
      };
      return 3 === e.length ? "#" + t(e[0].toString(16)) + t(e[1].toString(16)) + t(e[2].toString(16)) : void 0;
    }, checkMouse: function (x, _) {
      var s = t, a = b(x.target).parents("#" + s.attr("id")).length;
      x.target === b(s)[0] || x.target === e[0] || a > 0 || b.fn.colorPicker.hidePalette();
    }, hidePalette: function () {
      b(document).unbind("mousedown", b.fn.colorPicker.checkMouse), b(".colorPicker-palette").hide();
    }, showPalette: function (t) {
      var x = e.prev("input").val();
      t.css({ top: e.offset().top + e.outerHeight(), left: e.offset().left }), b("#color_value").val(x), t.show(), b(document).bind("mousedown", b.fn.colorPicker.checkMouse);
    }, togglePalette: function (x, _) {
      _ && (e = _), (t = x).is(":visible") ? b.fn.colorPicker.hidePalette() : b.fn.colorPicker.showPalette(x);
    }, changeColor: function (t) {
      e.css("background-color", t), e.prev("input").val(t).change(), b.fn.colorPicker.hidePalette(), e.data("onColorChange").call(e, b(e).prev("input").attr("id"), t);
    }, previewColor: function (b) {
      e.css("background-color", b);
    }, bindPalette: function (t, _, s) {
      s = s || b.fn.colorPicker.toHex(_.css("background-color")), _.bind({
        click: function (e) {
          x = s, b.fn.colorPicker.changeColor(s);
        }, mouseover: function (e) {
          x = t.val(), b(this).css("border-color", "#598FEF"), t.val(s), b.fn.colorPicker.previewColor(s);
        }, mouseout: function (_) {
          b(this).css("border-color", "#000"), t.val(e.css("background-color")), t.val(x), b.fn.colorPicker.previewColor(x);
        }
      });
    }
  }), b.fn.colorPicker.defaults = { pickerDefault: "FFFFFF", colors: ["000000", "993300", "333300", "000080", "333399", "333333", "800000", "FF6600", "808000", "008000", "008080", "0000FF", "666699", "808080", "FF0000", "FF9900", "99CC00", "339966", "33CCCC", "3366FF", "800080", "999999", "FF00FF", "FFCC00", "FFFF00", "00FF00", "00FFFF", "00CCFF", "993366", "C0C0C0", "FF99CC", "FFCC99", "FFFF99", "CCFFFF", "99CCFF", "FFFFFF"], addColors: [], showHexField: true };
}(jQuery);
