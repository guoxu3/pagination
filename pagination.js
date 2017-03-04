/**
 * Created by guoxu on 3/4/17.
 */

/*
* @parm {int} curPage current page
* @parm {int} totalPage total page number
* @parm {int} count items per page
 */

function showPage(curPage, totalPage, count) {
    var i = 1;
    i = parseInt(i);
    var item="";
    var href = "/task/list?page=";

    if (totalPage <= 2) {
        for (i; i <= totalPage; i++) {
            if (i == curPage) {
                item += "<a class='disabled item'>" + i + "</a>";
            }else {
                item += "<a class='item' href='" + href + i + "&count=10" + "'>" + i + "</a>";
            }
        }
        $('#pageBtn').append(item);
        return;
    } else if (totalPage > 2 && totalPage <= 5 ) {
        if ( curPage == 1 ) {
            item += "<a class='disabled icon item'><i class='left chevron icon'></i></a>";
        } else {
            item += "<a class='icon item' href='" + href + (curPage-1) + "&count=10" + "'><i class='left chevron icon'></i></a>";
        }
        for (i; i <= totalPage; i++) {
            if (i == curPage) {
                item += "<a class='disabled item'>" + i + "</a>";
            }else {
                item += "<a class='item' href='" + href + i + "&count=10" + "'>" + i + "</a>";
            }
        }
        if ( curPage == totalPage ) {
            item += "<a class='disabled icon item'><i class='right chevron icon'></i></a>";
        } else {
            item += "<a class='icon item' href='" + href + (curPage+1) + "&count=10" + "'><i class='right chevron icon'></i></a>";
        }
        $("#pageBtn").append(item);
        return;
    } else if (totalPage > 5) {
        console.log("bbb")
        if ( curPage == 1 ) {
            item += "<a class='disabled icon item'><i class='left chevron icon'></i></a>";
        } else {
            item += "<a class='icon item' href='" + href + (curPage-1) + "&count=10" + "'><i class='left chevron icon'></i></a>";
        }
        if (curPage < 4) {
            for (i; i <= 4; i++) {
                if (i == curPage) {
                    item += "<a class='disabled item'>" + i + "</a>";
                }else {
                    item += "<a class='item' href='" + href + i + "&count=10" + "'>" + i + "</a>";
                }
            }
            item += "<span> . . . </span>";
            item += "<a class='item' href='" + href + totalPage + "&count=10" + "'>" + totalPage + "</a>";
        }else if (curPage >= 3) {
            for (i; i <= 2; i++) {
                item += "<a class='item' href='" + href + i + "&count=10" + "'>" + i + "</a>";
            }
            item += "<span> . . . </span>";
            if (curPage+1 == totalPage) {
                for (i = curPage - 1; i <= totalPage; i++) {
                    if (i == curPage) {
                        item += "<a class='disabled item'>" + i + "</a>";
                    } else {
                        item += "<a class='item' href='" + href + i + "&count=10" + "'>" + i + "</a>";
                    }
                }
            } else if (curPage+2 == totalPage) {
                for (i = curPage; i <= totalPage; i++) {
                    if (i == curPage) {
                        item += "<a class='disabled item'>" + i + "</a>";
                    } else {
                        item += "<a class='item' href='" + href + i + "&count=10" + "'>" + i + "</a>";
                    }
                }
            }else if (curPage == totalPage) {
                for(i = curPage-2; i <= totalPage; i++){
                    if (i == curPage) {
                        item += "<a class='disabled item'>" + i + "</a>";
                    } else {
                        item += "<a class='item' href='" + href + i + "&count=10" + "'>" + i + "</a>";
                    }
                }
            }else{
                for(i = curPage-1; i <= curPage+1; i++){
                    if (i == curPage) {
                        item += "<a class='disabled item'>" + i + "</a>";
                    } else {
                        item += "<a class='item' href='" + href + i + "&count=10" + "'>" + i + "</a>";
                    }
                }
                item += "<span> . . . </span>";
                item += "<a class='item' href='" + href + totalPage + "&count=10" + "'>" + totalPage + "</a>";
            }
        }

        if ( curPage == totalPage ) {
            item += "<a class='disabled icon item'><i class='right chevron icon'></i></a>";
        } else {
            item += "<a class='icon item' href='" + href + (curPage+1) + "&count=10" + "'><i class='right chevron icon'></i></a>";
        }
        $('#pageBtn').append(item);
        return;
    }
}
