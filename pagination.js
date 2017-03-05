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
    var href = "http://www.example.com/showpage?page=";
    if (count === null) {
        count = 10
    }

    if (totalPage <= 2) {
        for (i; i <= totalPage; i++) {
            if (i == curPage) {
                item += "<a class='disabled item'>" + i + "</a>";
            }else {
                item += "<a class='item' href='" + href + i + "&count=" + count + "'>" + i + "</a>";
            }
        }
    } else if (totalPage > 2 && totalPage <= 5 ) {
        if ( curPage == 1 ) {
            item += "<a class='disabled icon item'><i class='left chevron icon'></i></a>";
        } else {
            item += "<a class='icon item' href='" + href + (curPage-1) + "&count=" + count + "'><i class='left chevron icon'></i></a>";
        }
        for (i; i <= totalPage; i++) {
            if (i == curPage) {
                item += "<a class='disabled item'>" + i + "</a>";
            }else {
                item += "<a class='item' href='" + href + i + "&count=" + count + "'>" + i + "</a>";
            }
        }
        if ( curPage == totalPage ) {
            item += "<a class='disabled icon item'><i class='right chevron icon'></i></a>";
        } else {
            item += "<a class='icon item' href='" + href + (curPage+1) + "&count=" + count + "'><i class='right chevron icon'></i></a>";
        }
    } else if (totalPage > 5) {
        if ( curPage == 1 ) {
            item += "<a class='disabled icon item'><i class='left chevron icon'></i></a>";
        } else {
            item += "<a class='icon item' href='" + href + (curPage-1) + "&count=" + count + "'><i class='left chevron icon'></i></a>";
        }
        if (curPage < 4) {
            for (i; i <= 4; i++) {
                if (i == curPage) {
                    item += "<a class='disabled item'>" + i + "</a>";
                }else {
                    item += "<a class='item' href='" + href + i + "&count=" + count + "'>" + i + "</a>";
                }
            }
            item += "<span> . . . </span>";
            item += "<a class='item' href='" + href + totalPage + "&count=" + count + "'>" + totalPage + "</a>";
        }else if (curPage >= 3) {
            for (i; i <= 2; i++) {
                item += "<a class='item' href='" + href + i + "&count=" + count + "'>" + i + "</a>";
            }
            item += "<span> . . . </span>";
            if (curPage+1 == totalPage) {
                for (i = curPage - 1; i <= totalPage; i++) {
                    if (i == curPage) {
                        item += "<a class='disabled item'>" + i + "</a>";
                    } else {
                        item += "<a class='item' href='" + href + i + "&count=" + count + "'>" + i + "</a>";
                    }
                }
            } else if (curPage+2 == totalPage) {
                for (i = curPage; i <= totalPage; i++) {
                    if (i == curPage) {
                        item += "<a class='disabled item'>" + i + "</a>";
                    } else {
                        item += "<a class='item' href='" + href + i + "&count=" + count + "'>" + i + "</a>";
                    }
                }
            }else if (curPage == totalPage) {
                for(i = curPage-2; i <= totalPage; i++){
                    if (i == curPage) {
                        item += "<a class='disabled item'>" + i + "</a>";
                    } else {
                        item += "<a class='item' href='" + href + i + "&count=" + count + "'>" + i + "</a>";
                    }
                }
            }else{
                for(i = curPage-1; i <= curPage+1; i++){
                    if (i == curPage) {
                        item += "<a class='disabled item'>" + i + "</a>";
                    } else {
                        item += "<a class='item' href='" + href + i + "&count=" + count + "'>" + i + "</a>";
                    }
                }
                item += "<span> . . . </span>";
                item += "<a class='item' href='" + href + totalPage + "&count=" + count + "'>" + totalPage + "</a>";
            }
        }
        if ( curPage == totalPage ) {
            item += "<a class='disabled icon item'><i class='right chevron icon'></i></a>";
        } else {
            item += "<a class='icon item' href='" + href + (curPage+1) + "&count=" + count + "'><i class='right chevron icon'></i></a>";
        }
    }
    $('#pages').append(item);
        return;
}
