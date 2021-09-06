
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const matchListHH = document.getElementById('match-list-hh');
// get hanghoa.json and filter it
// const test = async searchText () {

// }

const searchdsncc = async searchText => {

    const res = await fetch('../data/hanghoa.json');
    const dsncc = await res.json();
    
    // get matches to current text input
    let matches = dsncc.filter(ncc => {

        const regex = new RegExp(search.value, 'gi');
        
        return ncc.ten.match(regex) || ncc.mancc.match(regex);
    });

    if(search.value.length === 0) {
        matches = [];
        matchList.innerHTML = '<div class="card card-body mb-1"> <h5> Thêm mới</h5> </div>';
    }
    else {
        // console.log(matches);

        outputHtml(matches);

        let matchesHH = [];

    }
}

const outputHtml = matches => {
    if( matches.length > 0) {
        var temp = '';
        for( let i = 0; i < matches.length;i++) {
            // console.log(matches[i].ten);
            const temp1 = '<div class="card card-body mb-1"> <h5>' + '<span class="text-primary">' + matches[i].ten + '</span>' +  ' (' + matches[i].mancc + ')' + '</h5> </div>';
            temp = temp + temp1;
        }
        matchList.innerHTML = temp;
    }

    
}


search.addEventListener('input', () => searchdsncc(search.value));
